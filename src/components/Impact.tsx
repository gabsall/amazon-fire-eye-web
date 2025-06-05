
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trees, BarChart, Bot, Map } from 'lucide-react';

const Impact = () => {
  const achievements = [
    {
      title: 'Hectares Protegidos',
      value: '2.5M+',
      description: 'Área total da Amazônia monitorada pelo nosso sistema',
      icon: Trees,
      color: 'forest'
    },
    {
      title: 'Incêndios Prevenidos',
      value: '1,247',
      description: 'Focos identificados precocemente e contidos',
      icon: Bot,
      color: 'tech'
    },
    {
      title: 'Tempo de Detecção',
      value: '68%',
      description: 'Redução no tempo de identificação de focos',
      icon: BarChart,
      color: 'fire'
    },
    {
      title: 'Precisão do Sistema',
      value: '94.7%',
      description: 'Taxa de acurácia na detecção de incêndios',
      icon: Map,
      color: 'tech'
    }
  ];

  const awards = [
    {
      title: 'Prêmio Innovation for the Amazon',
      organization: 'Amazon Conservation Foundation',
      year: '2024',
      description: 'Reconhecimento pela inovação tecnológica em conservação ambiental'
    },
    {
      title: 'Best AI Solution for Environment',
      organization: 'Global Tech Awards',
      year: '2023',
      description: 'Melhor solução de IA aplicada ao meio ambiente'
    },
    {
      title: 'Destaque em Sustentabilidade',
      organization: 'Green Tech Brazil',
      year: '2023',
      description: 'Projeto de maior impacto na preservação ambiental'
    }
  ];

  const partners = [
    'INPE', 'IBAMA', 'Ministério do Meio Ambiente', 'NASA', 'Google.org',
    'Microsoft AI for Earth', 'Amazon Fund', 'WWF Brasil'
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'forest':
        return 'bg-forest-50 text-forest-600 border-forest-200';
      case 'tech':
        return 'bg-tech-50 text-tech-600 border-tech-200';
      case 'fire':
        return 'bg-fire-50 text-fire-600 border-fire-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <section id="impact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Nosso Impacto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os resultados do BT Tracker demonstram como a tecnologia pode fazer a diferença 
            na preservação do meio ambiente e na proteção da Amazônia.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className={`${getColorClasses(achievement.color)} border hover:shadow-lg transition-shadow animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{achievement.value}</h3>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm opacity-80">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Awards and Recognition */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{color: "#FF7A25"}}>Prêmios e Reconhecimentos</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                      <Badge variant="secondary" className="bg-forest-100 text-forest-700">
                        {award.year}
                      </Badge>
                    </div>
                    <p className="text-forest-600 font-medium mb-2">{award.organization}</p>
                    <p className="text-gray-600 text-sm">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Visualization */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{color: "#FF7A25"}}>Impacto por Região</h3>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">Acre</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-24 h-2 bg-forest-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">Rondônia</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-28 h-2 bg-forest-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">87%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">Amazonas</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-forest-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">63%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">Mato Grosso</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div className="w-30 h-2 bg-forest-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">94%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">Cobertura de monitoramento por estado</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white-800">Nossos Parceiros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-400 to-tech-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{partner.charAt(0)}</span>
                </div>
                <p className="text-xs font-medium text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-forest-600 to-tech-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Faça Parte da Mudança</h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se a nós na missão de proteger a Amazônia. 
            Seja um parceiro, apoiador ou colaborador do projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-forest-600 hover:bg-gray-100 hover:text-orange-500 px-6 py-3 rounded-lg font-semibold transition-colors">
              Seja um Parceiro
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-forest-600 hover:text-black px-6 py-3 rounded-lg font-semibold transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
