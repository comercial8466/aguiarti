import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Computer, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Monitor,
  Database,
  Cloud,
  Settings,
  MessageCircle,
  Facebook,
  Instagram
} from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const phoneNumber = '5551996668646'; // Número com código do país
    const message = 'Olá! Gostaria de saber mais sobre os serviços da AguiarT.I';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
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
                  className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-all duration-200"
                  aria-label="Facebook da AguiarT.I"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/aguiar_ti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-full transition-all duration-200"
                  aria-label="Instagram da AguiarT.I"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme Seu Negócio com
              <span className="block text-blue-200">Tecnologia Inteligente</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Especialistas em automação comercial e serviços de TI. Oferecemos soluções completas para modernizar e otimizar seus processos empresariais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Nossos Serviços
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automação Comercial */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automação Comercial</h3>
              <p className="text-gray-600 mb-6">
                Sistemas completos para PDV, controle de estoque, emissão de NFCe/NFe e gestão financeira.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Sistema PDV integrado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Controle de estoque
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Emissão de notas fiscais
                </li>
              </ul>
            </div>

            {/* Suporte Técnico */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suporte Técnico</h3>
              <p className="text-gray-600 mb-6">
                Manutenção preventiva e corretiva de computadores, redes e sistemas empresariais.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Manutenção de hardware
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Configuração de redes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Suporte remoto 24/7
                </li>
              </ul>
            </div>

            {/* Infraestrutura */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Infraestrutura de TI</h3>
              <p className="text-gray-600 mb-6">
                Planejamento e implementação de infraestrutura tecnológica robusta e segura.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Servidores e storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Backup e segurança
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Monitoramento 24/7
                </li>
              </ul>
            </div>

            {/* Consultoria */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultoria em TI</h3>
              <p className="text-gray-600 mb-6">
                Análise e otimização de processos tecnológicos para maximizar eficiência empresarial.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Análise de processos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Planejamento estratégico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Treinamento de equipes
                </li>
              </ul>
            </div>

            {/* Cloud Computing */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Soluções em Nuvem</h3>
              <p className="text-gray-600 mb-6">
                Migração e gerenciamento de sistemas em nuvem para maior flexibilidade e economia.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Migração para nuvem
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Backup em nuvem
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Acesso remoto
                </li>
              </ul>
            </div>

            {/* Sistemas Personalizados */}
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistemas Personalizados</h3>
              <p className="text-gray-600 mb-6">
                Desenvolvimento de software sob medida para atender necessidades específicas do seu negócio.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Desenvolvimento web
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Aplicações desktop
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Integração de sistemas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Sobre a AguiarT.I
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Com anos de experiência no mercado de tecnologia, a AguiarT.I se consolidou como referência em automação comercial e serviços de TI. Nossa missão é transformar negócios através de soluções tecnológicas inovadoras e eficientes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trabalhamos com empresas de todos os portes, desde pequenos comércios até grandes corporações, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Suporte Disponível</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfação Cliente</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <Monitor className="h-16 w-16 mb-6 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Nossa Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>Automação Comercial Completa</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>Infraestrutura de TI Robusta</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>Suporte Técnico Especializado</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-200" />
                    <span>Soluções Personalizadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                    <a 
                      href="tel:+5551996668646" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      (51) 99666-8646
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <button 
                      onClick={openWhatsApp}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      (51) 99666-8646
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <a 
                      href="mailto:tarciso@aguiarti.com.br" 
                      className="text-gray-600 hover:text-blue-600 transition-colors block"
                    >
                      tarciso@aguiarti.com.br
                    </a>
                    <a 
                      href="mailto:comercial@aguiarti.com.br" 
                      className="text-gray-600 hover:text-blue-600 transition-colors block"
                    >
                      comercial@aguiarti.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Cantegril, 906<br />
                      Centro - Viamão, RS<br />
                      CEP: 94440-000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h4>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
                <p className="text-gray-600">Suporte 24/7 para emergências</p>
              </div>

              <div className="mt-6">
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Falar no WhatsApp Agora
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
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
              <p className="text-gray-400 mb-6 max-w-md">
                Transformando negócios através de soluções tecnológicas inovadoras. Automação comercial e serviços de TI de qualidade.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a 
                    href="tel:+5551996668646" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (51) 99666-8646
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                  <button 
                    onClick={openWhatsApp}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Automação Comercial</li>
                <li>Suporte Técnico</li>
                <li>Infraestrutura de TI</li>
                <li>Consultoria</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="mailto:tarciso@aguiarti.com.br" 
                    className="hover:text-white transition-colors"
                  >
                    tarciso@aguiarti.com.br
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:comercial@aguiarti.com.br" 
                    className="hover:text-white transition-colors"
                  >
                    comercial@aguiarti.com.br
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+5551996668646" 
                    className="hover:text-white transition-colors"
                  >
                    (51) 99666-8646
                  </a>
                </li>
                <li>VIAMÃO, RS</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AguiarT.I. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;