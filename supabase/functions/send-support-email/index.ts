import "jsr:@supabase/functions-js/edge-runtime.d.ts";

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
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const ticketData: TicketData = await req.json();

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
        .value { flex: 1; }
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
                    <div class="value">${ticketData.from_name}</div>
                </div>
                <div class="field">
                    <div class="label">E-mail:</div>
                    <div class="value"><a href="mailto:${ticketData.from_email}">${ticketData.from_email}</a></div>
                </div>
                <div class="field">
                    <div class="label">Telefone:</div>
                    <div class="value">${ticketData.phone}</div>
                </div>
                <div class="field">
                    <div class="label">Empresa:</div>
                    <div class="value">${ticketData.company || 'Não informado'}</div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">Detalhes do Chamado</div>
                <div class="field">
                    <div class="label">Assunto:</div>
                    <div class="value">${ticketData.subject}</div>
                </div>
                <div class="field">
                    <div class="label">Categoria:</div>
                    <div class="value">${ticketData.category || 'Não especificado'}</div>
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
                <div class="value" style="white-space: pre-wrap; background: #f9fafb; padding: 10px; border-radius: 3px;">${ticketData.description}</div>
            </div>
        </div>
        <div class="footer">
            <p>Este é um e-mail automático. Não responda diretamente. Para responder ao cliente, use o e-mail: ${ticketData.from_email}</p>
        </div>
    </div>
</body>
</html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "tarciso@aguiarti.com.br",
        subject: `[SUP-${ticketData.ticket_id}] ${ticketData.subject}`,
        html: emailBody,
        reply_to: ticketData.from_email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "E-mail enviado com sucesso",
        ticket_id: ticketData.ticket_id,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
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
