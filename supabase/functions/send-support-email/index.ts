import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TicketData {
  ticket_id: string;
  from_name: string;
  from_email: string;
  company: string;
  phone: string;
  priority: string;
  category: string;
  subject: string;
  description: string;
  created_date: string;
}

Deno.serve(async (req: Request) => {
  console.log(`[${new Date().toISOString()}] Recebendo requisição: ${req.method}`);
  
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    console.log(`[${new Date().toISOString()}] Config verificada - URL: ${supabaseUrl ? 'OK' : 'FALHA'}, ServiceKey: ${supabaseServiceKey ? 'OK' : 'FALHA'}, ResendKey: ${resendApiKey ? 'OK' : 'FALHA'}`);

    const ticketData: TicketData = await req.json();
    console.log(`[${new Date().toISOString()}] Dados recebidos - Ticket: ${ticketData.ticket_id}, Email: ${ticketData.from_email}`);

    // Criar cliente Supabase
    const supabase = createClient(supabaseUrl!, supabaseServiceKey!);

    // Salvar no banco de dados
    console.log(`[${new Date().toISOString()}] Salvando no banco de dados...`);
    const { data: ticketRecord, error: dbError } = await supabase
      .from("support_tickets")
      .insert([
        {
          ticket_id: ticketData.ticket_id,
          name: ticketData.from_name,
          email: ticketData.from_email,
          phone: ticketData.phone,
          company: ticketData.company,
          category: ticketData.category,
          subject: ticketData.subject,
          description: ticketData.description,
          priority: ticketData.priority,
          status: "open",
        },
      ])
      .select();

    if (dbError) {
      console.error(`[${new Date().toISOString()}] Erro ao salvar no banco:`, dbError);
      throw new Error(`Erro ao salvar ticket no banco: ${dbError.message}`);
    }

    console.log(`[${new Date().toISOString()}] Ticket salvo com sucesso:`, ticketRecord);

    // Tentar enviar e-mail via Resend (se configurado)
    let emailSent = false;
    if (resendApiKey) {
      try {
        console.log(`[${new Date().toISOString()}] Tentando enviar e-mail via Resend...`);
        
        const emailBody = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
        .header { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background: white; padding: 20px; }
        .section { margin-bottom: 20px; }
        .section-title { font-weight: bold; color: #1f2937; margin-bottom: 10px; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; }
        .field { margin-bottom: 10px; display: flex; }
        .label { font-weight: bold; width: 120px; color: #1f2937; }
        .value { flex: 1; word-break: break-word; }
        .priority-high { color: #dc2626; }
        .priority-medium { color: #ea580c; }
        .priority-low { color: #16a34a; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Novo Chamado de Suporte Técnico</h2>
            <p>Ticket #${ticketData.ticket_id}</p>
        </div>
        <div class="content">
            <div class="section">
                <div class="section-title">Informações do Contato</div>
                <div class="field">
                    <div class="label">Nome:</div>
                    <div class="value">${escapeHtml(ticketData.from_name)}</div>
                </div>
                <div class="field">
                    <div class="label">E-mail:</div>
                    <div class="value"><a href="mailto:${escapeHtml(ticketData.from_email)}">${escapeHtml(ticketData.from_email)}</a></div>
                </div>
                <div class="field">
                    <div class="label">Telefone:</div>
                    <div class="value">${escapeHtml(ticketData.phone)}</div>
                </div>
                <div class="field">
                    <div class="label">Empresa:</div>
                    <div class="value">${escapeHtml(ticketData.company || 'Não informado')}</div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">Detalhes do Chamado</div>
                <div class="field">
                    <div class="label">Assunto:</div>
                    <div class="value">${escapeHtml(ticketData.subject)}</div>
                </div>
                <div class="field">
                    <div class="label">Categoria:</div>
                    <div class="value">${escapeHtml(ticketData.category || 'Não especificado')}</div>
                </div>
                <div class="field">
                    <div class="label">Prioridade:</div>
                    <div class="value priority-${ticketData.priority}">${getPriorityLabel(ticketData.priority)}</div>
                </div>
                <div class="field">
                    <div class="label">Data:</div>
                    <div class="value">${ticketData.created_date}</div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">Descrição do Problema</div>
                <div class="value" style="white-space: pre-wrap; background: #f9fafb; padding: 10px; border-radius: 3px;">${escapeHtml(ticketData.description)}</div>
            </div>
        </div>
        <div class="footer">
            <p>Este é um e-mail automático. Não responda diretamente. Para responder ao cliente, use o e-mail: ${escapeHtml(ticketData.from_email)}</p>
        </div>
    </div>
</body>
</html>
        `;

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: "tarciso@aguiarti.com.br",
            subject: `[SUP-${ticketData.ticket_id}] ${ticketData.subject}`,
            html: emailBody,
            reply_to: ticketData.from_email,
          }),
        });

        const resendData = await resendResponse.json();
        console.log(`[${new Date().toISOString()}] Resposta Resend (${resendResponse.status}):`, resendData);

        if (resendResponse.ok) {
          emailSent = true;
          console.log(`[${new Date().toISOString()}] E-mail enviado com sucesso`);
        } else {
          console.warn(`[${new Date().toISOString()}] Erro ao enviar e-mail via Resend: ${JSON.stringify(resendData)}`);
        }
      } catch (emailError) {
        console.error(`[${new Date().toISOString()}] Erro ao enviar e-mail:`, emailError);
      }
    } else {
      console.warn(`[${new Date().toISOString()}] RESEND_API_KEY não configurada, pulando envio de e-mail`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Chamado criado com sucesso" + (emailSent ? " e e-mail enviado" : ""),
        ticket_id: ticketData.ticket_id,
        email_sent: emailSent,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ERRO CRÍTICO:`, error);
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    
    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

function getPriorityLabel(priority: string): string {
  const labels: { [key: string]: string } = {
    high: "Alta - Urgente",
    medium: "Média - Normal",
    low: "Baixa - Não urgente",
  };
  return labels[priority] || "Média - Normal";
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
