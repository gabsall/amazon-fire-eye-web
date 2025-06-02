
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Map, Trees, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Bot,
      title: 'Inteligência Artificial',
      description: 'Algoritmos de machine learning analisam imagens de satélite em tempo real para identificar padrões de risco de incêndio.',
      color: 'primary'
    },
    {
      icon: Map,
      title: 'Monitoramento Contínuo',
      description: 'Cobertura 24/7 da região amazônica com dados atualizados a cada 15 minutos através de múltiplas fontes de satélite.',
      color: 'primary'
    },
    {
      icon: Trees,
      title: 'Detecção Precoce',
      description: 'Sistema de alertas automáticos identifica focos de incêndio até 3 horas antes dos métodos tradicionais.',
      color: 'alert'
    },
    {
      icon: BarChart,
      title: 'Análise Preditiva',
      description: 'Previsão de áreas de alto risco baseada em fatores climáticos, histórico e condições da vegetação.',
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-orange-900/20 text-orange-400 border-orange-800';
      case 'alert':
        return 'bg-alert-900/20 text-alert-400 border-alert-800';
      default:
        return 'bg-gray-900/20 text-gray-400 border-gray-800';
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Como Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nossa tecnologia combina inteligência artificial, dados de satélite e análise preditiva 
            para criar o sistema mais avançado de prevenção de incêndios da Amazônia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`w-12 h-12 rounded-xl ${getColorClasses(step.color)} flex items-center justify-center flex-shrink-0 border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visualization */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-orange-900/20 to-black border-orange-800 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-4">Fluxo de Dados em Tempo Real</h4>
                  </div>

                  {/* Data flow visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">Satélites</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 mx-4"></div>
                      <div className="w-8 h-8 bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <Bot className="w-4 h-4 text-orange-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-sm text-gray-400">Sensores</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-4"></div>
                      <div className="w-8 h-8 bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <BarChart className="w-4 h-4 text-orange-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-alert-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-sm text-gray-400">Clima</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-alert-600 to-orange-600 mx-4"></div>
                      <div className="w-8 h-8 bg-alert-900/30 rounded-lg flex items-center justify-center">
                        <Map className="w-4 h-4 text-alert-400" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-800">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-800 rounded-full text-white text-sm font-medium">
                      <Trees className="w-4 h-4 mr-2" />
                      Alerta Gerado
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-900/50 border border-orange-800 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Tecnologias Utilizadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'TensorFlow', desc: 'Machine Learning' },
              { name: 'Google Earth Engine', desc: 'Dados de Satélite' },
              { name: 'Python & R', desc: 'Análise de Dados' },
              { name: 'AWS', desc: 'Infraestrutura Cloud' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                <div className="font-semibold text-white">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
