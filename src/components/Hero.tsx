
import React from 'react';
import { Button } from '@/components/ui/button';
import { trees, ai, map } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-forest-50 via-white to-tech-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-forest-100 rounded-full text-forest-700 text-sm font-medium">
                <trees className="w-4 h-4 mr-2" />
                Projeto Premiado de Conservação
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-forest-700 to-forest-500 bg-clip-text text-transparent">
                  BT Tracker
                </span>
                <br />
                <span className="text-gray-800">
                  Protegendo a Amazônia
                </span>
                <br />
                <span className="bg-gradient-to-r from-tech-600 to-tech-500 bg-clip-text text-transparent">
                  com IA
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Utilizamos inteligência artificial avançada para monitorar e prever focos de incêndio na floresta amazônica, 
                protegendo o pulmão do mundo através da tecnologia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 text-lg">
                <map className="w-5 h-5 mr-2" />
                Ver Monitoramento
              </Button>
              <Button size="lg" variant="outline" className="border-tech-300 text-tech-600 hover:bg-tech-50 px-8 py-4 text-lg">
                <ai className="w-5 h-5 mr-2" />
                Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoramento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fire-500">95%</div>
                <div className="text-sm text-gray-600">Precisão</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-600">1M+</div>
                <div className="text-sm text-gray-600">Hectares Protegidos</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-forest-400 to-forest-600 rounded-3xl overflow-hidden shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse-slow"></div>
                <div className="absolute top-20 right-16 w-3 h-3 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-16 left-16 w-2 h-2 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-20 right-12 w-3 h-3 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Central visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                    <ai className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-fire-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-forest-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Sistema Ativo</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-fire-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Alerta Detectado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
