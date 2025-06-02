
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ai, map, trees, chart-bar } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: ai,
      title: 'Inteligência Artificial',
      description: 'Algoritmos de machine learning analisam imagens de satélite em tempo real para identificar padrões de risco de incêndio.',
      color: 'tech'
    },
    {
      icon: map,
      title: 'Monitoramento Contínuo',
      description: 'Cobertura 24/7 da região amazônica com dados atualizados a cada 15 minutos através de múltiplas fontes de satélite.',
      color: 'forest'
    },
    {
      icon: trees,
      title: 'Detecção Precoce',
      description: 'Sistema de alertas automáticos identifica focos de incêndio até 3 horas antes dos métodos tradicionais.',
      color: 'fire'
    },
    {
      icon: chart-bar,
      title: 'Análise Preditiva',
      description: 'Previsão de áreas de alto risco baseada em fatores climáticos, histórico e condições da vegetação.',
      color: 'tech'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'tech':
        return 'bg-tech-100 text-tech-600 border-tech-200';
      case 'forest':
        return 'bg-forest-100 text-forest-600 border-forest-200';
      case 'fire':
        return 'bg-fire-100 text-fire-600 border-fire-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-forest-700 to-tech-600 bg-clip-text text-transparent">
              Como Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visualization */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-forest-50 to-tech-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Fluxo de Dados em Tempo Real</h4>
                  </div>

                  {/* Data flow visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-tech-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Satélites</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-tech-200 to-forest-200 mx-4"></div>
                      <div className="w-8 h-8 bg-tech-100 rounded-lg flex items-center justify-center">
                        <ai className="w-4 h-4 text-tech-600" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-forest-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-sm text-gray-600">Sensores</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-forest-200 to-fire-200 mx-4"></div>
                      <div className="w-8 h-8 bg-forest-100 rounded-lg flex items-center justify-center">
                        <chart-bar className="w-4 h-4 text-forest-600" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-fire-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-sm text-gray-600">Clima</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-fire-200 to-tech-200 mx-4"></div>
                      <div className="w-8 h-8 bg-fire-100 rounded-lg flex items-center justify-center">
                        <map className="w-4 h-4 text-fire-600" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-gray-200">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-forest-500 to-tech-500 rounded-full text-white text-sm font-medium">
                      <trees className="w-4 h-4 mr-2" />
                      Alerta Gerado
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Tecnologias Utilizadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'TensorFlow', desc: 'Machine Learning' },
              { name: 'Google Earth Engine', desc: 'Dados de Satélite' },
              { name: 'Python & R', desc: 'Análise de Dados' },
              { name: 'AWS', desc: 'Infraestrutura Cloud' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-800">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
