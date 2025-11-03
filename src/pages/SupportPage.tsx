import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Shield,
  Headphones,
  CheckCircle,
  Phone,
  Mail,
  MessageSquare,
  Monitor,
  Wrench,
  Users,
  Zap,
  Facebook,
  Instagram
} from 'lucide-react';
import SupportTicketForm from '../components/SupportTicketForm';

export default function SupportPage() {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=5551996668646&text=Gostaria de saber mais sobre os serviços AguiarT.I';
    window.open(whatsappUrl, '_blank');
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={goBack}
                className="p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <img 
                src="/LOGO copy copy copy copy copy copy copy.png" 
                alt="AguiarT.I Logo" 
                className="h-16 w-auto"
              />
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/aguiartiad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Facebook da AguiarT.I"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/aguiar_ti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-pink-400 hover:text-pink-300 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Instagram da AguiarT.I"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(51) 99666-8646</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">tarciso@aguiarti.com.br</span>
                </div>
              </div>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="h-4 w-4"
                />
                <span className="hidden sm:inline">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Headphones className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Suporte Técnico AguiarT.I
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Atendimento especializado em tecnologia para empresas. Nossa equipe está pronta para resolver seus problemas técnicos com rapidez e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="h-5 w-5"
                />
                Suporte Imediato
              </button>
              <a
                href="#ticket-form"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Wrench className="h-5 w-5" />
                Abrir Chamado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Podemos Ajudar
            </h2>
            <p className="text-xl text-gray-600">
              Oferecemos suporte completo para todas as suas necessidades tecnológicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Rápido</h3>
              <p className="text-gray-600">Resposta em até 5 minutos para chamados urgentes</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suporte Seguro</h3>
              <p className="text-gray-600">Acesso remoto seguro e proteção de dados</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">Técnicos certificados e experientes</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Soluções Eficazes</h3>
              <p className="text-gray-600">Resolução definitiva dos problemas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serviços de Suporte
            </h2>
            <p className="text-xl text-gray-600">
              Cobertura completa para todos os aspectos da sua infraestrutura de TI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Monitor className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hardware</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Computadores, Servidores e notebooks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Balança checkout e balança de atendimento (balcão)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Servidores e storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Equipamentos de rede
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Wrench className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sistemas operacionais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Aplicativos empresariais
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sistemas PDV
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Antivírus e segurança
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infraestrutura</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Redes e conectividade
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Backup e recuperação
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  E-mail corporativo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Monitoramento 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Canais de Atendimento
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para entrar em contato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                  alt="WhatsApp" 
                  className="h-8 w-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Suporte imediato via WhatsApp</p>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Iniciar Chat
              </button>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">Ligue diretamente para nossa equipe</p>
              <a
                href="tel:+5551996668646"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors inline-block"
              >
                (51) 99666-8646
              </a>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Envie detalhes do seu problema</p>
              <a
                href="mailto:tarciso@aguiarti.com.br"
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors inline-block"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Form */}
      <section id="ticket-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Abrir Chamado de Suporte
            </h2>
            <p className="text-xl text-gray-600">
              Descreva seu problema e nossa equipe entrará em contato rapidamente
            </p>
          </div>

          <SupportTicketForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="/LOGO copy copy copy copy copy copy copy.png" 
                  alt="AguiarT.I Logo" 
                  className="h-12 w-auto"
                />
                <div className="flex items-center space-x-2">
                  <a
                    href="https://www.facebook.com/aguiartiad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-full transition-all duration-200"
                    aria-label="Facebook da AguiarT.I"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/aguiar_ti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-pink-400 hover:text-pink-300 hover:bg-gray-800 rounded-full transition-all duration-200"
                    aria-label="Instagram da AguiarT.I"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Suporte técnico especializado para empresas. Disponível 24/7 para emergências.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato Rápido</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+5551996668646" className="hover:text-white transition-colors">
                    (51) 99666-8646
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="h-4 w-4"
                  />
                  <button onClick={openWhatsApp} className="hover:text-green-400 transition-colors">
                    WhatsApp
                  </button>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:tarciso@aguiarti.com.br" className="hover:text-white transition-colors">
                    tarciso@aguiarti.com.br
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li className="text-green-400 font-medium">Emergências: 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AguiarT.I - Suporte Técnico. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}