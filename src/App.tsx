import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
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
  Facebook,
  Instagram,
  Code,
  Cpu,
  Lock,
  TrendingUp
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import AnimatedSection from './components/AnimatedSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=5551996668646&text=Gostaria de saber mais sobre os serviços AguiarT.I';
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
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="h-6 w-6"
        />
      </button>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Serviços
              </button>
              <button
                onClick={() => navigate('/support')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Suporte Técnico
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-700 mt-4 pt-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Serviços
                </button>
                <button
                  onClick={() => navigate('/support')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 block w-full"
                >
                  Suporte Técnico
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 px-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme Seu Negócio com
                <span className="block text-blue-100 mt-2">Tecnologia Inteligente</span>
              </h1>
              <p className="text-xl text-blue-50 leading-relaxed">
                Especialistas em automação comercial, suporte técnico e infraestrutura de TI. Oferecemos soluções completas para modernizar e otimizar seus processos empresariais com eficiência e segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="h-5 w-5"
                  />
                  Falar no WhatsApp
                </button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-blue-100">500+</p>
                  <p className="text-blue-100">Clientes Satisfeitos</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-100">10+</p>
                  <p className="text-blue-100">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-100">24/7</p>
                  <p className="text-blue-100">Suporte Disponível</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform rotate-1 opacity-75"></div>
                <img
                  src="htt://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w="
                  alt=Tecnologia"
                  className=relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="section-heading">
              Nossos Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluções tecnológicas completas para impulsionar seu negócio com eficiência, segurança e inovação
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automação Comercial */}
            <AnimatedSection direction="up" delay={0} className="h-full">
              <div className="tech-card h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Automação Comercial</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Sistemas completos para PDV, controle de estoque, emissão de NFCe/NFe e gestão financeira integrada.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Sistema PDV integrado e em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Controle inteligente de estoque</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Emissão de notas fiscais eletrônicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Venda e manutenção de balanças</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Suporte Técnico */}
            <AnimatedSection direction="up" delay={100} className="h-full">
              <div className="tech-card h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Suporte Técnico Especializado</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Manutenção preventiva e corretiva com infraestrutura completa em segurança, alta disponibilidade e monitoramento 24/7.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Manutenção de sistemas e hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Implantação e configuração de redes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monitoramento 24/7 de infraestrutura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Implantação de switches e roteadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Suporte remoto e local 24/7</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Infraestrutura */}
            <AnimatedSection direction="up" delay={200} className="h-full">
              <div className="tech-card h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Infraestrutura de TI</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Planejamento e implementação de infraestrutura robusta, segura e escalável para seu negócio.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Servidores, storage e backup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Venda de notebooks e computadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Switches e roteadores de qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monitoramento 24/7 integrado</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Consultoria */}
            <AnimatedSection direction="up" delay={300} className="h-full">
              <div className="tech-card h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultoria em TI</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Análise estratégica e otimização de processos tecnológicos para maximizar eficiência.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Análise de processos e otimização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Planejamento estratégico de TI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Treinamento de equipes</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Cloud Computing */}
            <AnimatedSection direction="up" delay={400} className="h-full">
              <div className="tech-card h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Soluções em Nuvem</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Migração e gerenciamento integrado de sistemas em nuvem com flexibilidade e segurança.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Migração para nuvem segura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Backup e recuperação em nuvem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Acesso remoto seguro e confiável</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Sistemas Personalizados */}
            <AnimatedSection direction="up" delay={500} className="h-full">
              <div className="tech-card h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-50 rounded-lg flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sistemas Personalizados</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Desenvolvimento de software customizado para atender necessidades específicas do seu negócio.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Desenvolvimento web avançado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Aplicações desktop robustas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integração de sistemas</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
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
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="h-6 w-6 mt-1"
                  />
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
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="h-6 w-6"
                  />
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
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <AnimatedSection direction="up" delay={0} className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/LOGO copy copy copy copy copy copy copy.png"
                  alt="AguiarT.I Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                Transformando negócios através de soluções tecnológicas inovadoras. Automação comercial, suporte técnico e infraestrutura de TI de excelência.
              </p>

              {/* Social Networks Section */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/aguiartiad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    aria-label="Facebook da AguiarT.I"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/aguiar_ti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    aria-label="Instagram da AguiarT.I"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection direction="up" delay={100}>
              <h4 className="text-lg font-semibold mb-6 text-white">Serviços</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Automação Comercial
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/support')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Suporte Técnico
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Infraestrutura de TI
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Consultoria
                  </button>
                </li>
              </ul>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection direction="up" delay={200}>
              <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a
                    href="tel:+5551996668646"
                    className="hover:text-white transition-colors"
                  >
                    (51) 99666-8646
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a
                    href="mailto:tarciso@aguiarti.com.br"
                    className="hover:text-white transition-colors"
                  >
                    tarciso@aguiarti.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Viamão, RS</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AguiarT.I. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
