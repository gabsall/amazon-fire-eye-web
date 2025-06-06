import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trees, BarChart, Bot, Map } from 'lucide-react';

const Impact = () => {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      title: 'Hectares Protegidos',
      value: '2.5M+',
      description: 'Área total da Amazônia monitorada pelo nosso sistema',
      icon: Trees
    },
    {
      title: 'Cenários de Riscos',
      value: '1,247',
      description: 'Cenários identificados precocemente',
      icon: Bot
    },
    {
      title: 'Tempo de Detecção',
      value: '68%',
      description: 'Redução no tempo de identificação de focos',
      icon: BarChart
    },
    {
      title: 'Precisão do Sistema',
      value: '94.7%',
      description: 'Taxa de acurácia na detecção de incêndios',
      icon: Map
    }
  ];

  const regionData = [
    { label: 'Acre', value: 70 },
    { label: 'Rondônia', value: 65 },
    { label: 'Amazonas', value: 75 },
    { label: 'Pará', value: 60 },
    { label: 'Amapá', value: 50 },
    { label: 'Roraima', value: 55 },
    { label: 'Tocantins', value: 68 }
  ];

  const partners = [
    'INPE',
    'IBAMA',
    'MCTI',
    'NASA',
    'Google.org',
    'Microsoft AI for Earth',
    'Brazil Conference',
    'UEA'
  ];

  return (
    <section id="impact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Nosso Impacto
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Os resultados do BT Tracker demonstram como a tecnologia pode fazer a diferença 
            na preservação do meio ambiente e na proteção da Amazônia.
          </p>
        </div>

        {/* Métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="bg-gray-900/60 text-white border border-gray-700 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{achievement.value}</h3>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Apenas 1 prêmio */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-500">Prêmios e Reconhecimentos</h3>
            <Card className="bg-gray-900/60 border border-gray-700 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">Prêmio Innovation for the Amazon</h4>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    2024
                  </Badge>
                </div>
                <p className="text-orange-400 font-medium mb-2">Amazon Conservation Foundation</p>
                <p className="text-gray-400 text-sm">
                  Reconhecimento pela inovação tecnológica em conservação ambiental
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Impacto por Região Norte com animação */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-500">Impacto por Região</h3>
            <Card className="bg-gray-900/60 border border-gray-700 shadow-md">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {regionData.map((region, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="font-medium text-white">{region.label}</span>
                      <div className="flex items-center space-x-2 w-2/3">
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-2 bg-orange-500 rounded-full transition-all duration-700"
                            style={{
                              width: animateBars ? `${region.value}%` : '0%'
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-300">{region.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800 text-center">
                  <p className="text-sm text-orange-400 font-medium">
                    Amazonas é o estado com maior impacto monitorado até o momento (75%)
                  </p>
                  <p className="text-sm text-gray-500">Cobertura de monitoramento - Região Norte</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Parceiros (apenas nomes, sem ícones) */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Nossos Parceiros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 text-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-xl py-4 px-2 text-white font-medium text-sm hover:bg-white/20 transition-colors"
              >
                {partner}
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
