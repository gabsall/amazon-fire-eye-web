
import React from 'react';
import { Trees, Bot, Map, BarChart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Projeto': [
      { name: 'Sobre o BT Tracker', href: '#home' },
      { name: 'Como Funciona', href: '#how-it-works' },
      { name: 'Monitoramento', href: '#monitoring' },
      { name: 'Impacto', href: '#impact' }
    ],
    'Equipe': [
      { name: 'Nossa Equipe', href: '#team' },
      { name: 'Conselho Consultivo', href: '#team' },
      { name: 'Carreiras', href: '#contact' },
      { name: 'Oportunidades', href: '#contact' }
    ],
    'Recursos': [
      { name: 'Documentação', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Dados Abertos', href: '#' },
      { name: 'Publicações', href: '#' }
    ],
    'Contato': [
      { name: 'Fale Conosco', href: '#contact' },
      { name: 'Parcerias', href: '#contact' },
      { name: 'Imprensa', href: '#contact' },
      { name: 'Suporte', href: '#contact' }
    ]
  };

  const socialMedia = [
    { name: 'LinkedIn', href: '#', icon: 'LI' },
    { name: 'Twitter', href: '#', icon: 'TW' },
    { name: 'GitHub', href: '#', icon: 'GH' },
    { name: 'YouTube', href: '#', icon: 'YT' }
  ];

  return (
    <footer className="bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-forest-gradient rounded-lg flex items-center justify-center">
                <Trees className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">BT Tracker</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protegendo a Amazônia através de inteligência artificial e monitoramento em tempo real. 
              Juntos podemos preservar o pulmão do mundo.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-forest-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-forest-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-forest-400 mb-1">2.5M+</div>
              <div className="text-gray-400 text-sm">Hectares Monitorados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-tech-400 mb-1">94.7%</div>
              <div className="text-gray-400 text-sm">Precisão do Sistema</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-fire-400 mb-1">1,247</div>
              <div className="text-gray-400 text-sm">Incêndios Prevenidos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Monitoramento</div>
            </div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">Tecnologias que tornam o BT Tracker possível</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'IA & ML', icon: Bot, color: 'tech' },
              { name: 'Satélites', icon: Map, color: 'forest' },
              { name: 'Big Data', icon: BarChart, color: 'fire' },
              { name: 'Cloud Computing', icon: Trees, color: 'tech' }
            ].map((tech, index) => {
              const Icon = tech.icon;
              const colorClass = tech.color === 'tech' ? 'text-tech-400' : 
                                tech.color === 'forest' ? 'text-forest-400' : 
                                tech.color === 'fire' ? 'text-fire-400' : 'text-gray-400';
              
              return (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <Icon className={`w-5 h-5 ${colorClass}`} />
                  <span className="text-sm">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 BT Tracker. Todos os direitos reservados. 
            <span className="mx-2">|</span>
            Projeto desenvolvido para a preservação da Amazônia.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-forest-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-forest-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-forest-400 transition-colors">
              Licença
            </a>
          </div>
        </div>

        {/* Environmental Message */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-forest-900 rounded-full">
            <Trees className="w-4 h-4 text-forest-400 mr-2" />
            <span className="text-forest-300 text-sm font-medium">
              Cada clique conta para a preservação da Amazônia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
