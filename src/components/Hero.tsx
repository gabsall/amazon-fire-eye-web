
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trees, Bot, Map } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse"></div>
        <Trees className="absolute top-40 right-20 w-16 h-16 text-orange-500/20 animate-float" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-600/10 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 left-1/2 w-20 h-20 bg-orange-400/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-orange-400 mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wider uppercase">Proteção Inteligente da Amazônia</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  BT Tracker
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Monitoramento inteligente de queimadas e qualidade do ar em tempo real na Amazônia,
                com <span className="text-orange-400 font-semibold">inteligência artificial</span>
              </h2>
            </div>

            <Bot className="w-12 h-12 text-orange-500 animate-pulse" />

            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
              Utilizamos IA e dados climáticos para detectar, prever e alertar sobre focos de incêndio antes que se tornem grandes ameaças, protegendo ecossistemas e comunidades vulneráveis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">2.5M+</div>
                <div className="text-sm text-white/60">Hectares Monitorados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">94.7%</div>
                <div className="text-sm text-white/60">Precisão IA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">1,247</div>
                <div className="text-sm text-white/60">Cenários de risco identificados</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 text-lg">
                Pedir uma demo
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main visual container */}
              <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-orange-800/20 rounded-2xl backdrop-blur-sm border border-orange-500/30 p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <Bot className="w-24 h-24 text-orange-400 mx-auto animate-float" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-orange-300">Sistema Ativo</h3>
                    <p className="text-white/80">Monitorando 24/7</p>
                  </div>
                  
                  {/* Activity indicators */}
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white/70">Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-sm text-white/70">Processando</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-600 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
