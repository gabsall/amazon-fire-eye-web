
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trees, Bot, BarChart, Map } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Gabrielle alves',
      role: 'Product Manager',
      expertise: 'IA & Produto',
      description: 'Responsável pela estratégia, visão do produto e liderança geral do projeto, com foco em IA, impacto social e experiência do usuário.',
      image: '/api/placeholder/300/300',
      icon: Bot
    },
    {
      name: 'Fernando Filho',
      role: 'Especialista em IA',
      expertise: 'Data Science',
      description: 'Especializado em ciência de dados, desenvolve os modelos de machine learning e infraestrutura técnica do BT Tracker.',
      image: '/api/placeholder/300/300',
      icon: Map
    },
    {
      name: 'Matheus Colhyer',
      role: 'Desenvolvedor Senior',
      expertise: 'Engenharia de Software',
      description: 'Especialista em arquitetura de sistemas, cloud e sistemas escaláveis, lidera a estrutura técnica e integrações do projeto.',
      image: '/api/placeholder/300/300',
      icon: BarChart
    },
    {
      name: 'Dr. Adan Medeiros',
      role: 'Especialista Científico',
      expertise: 'Clima e Ambiente',
      description: 'Doutor em Clima e Ambiente, atua na modelagem atmosférica e validação científica dos dados climáticos utilizados pelo sistema.',
      image: '/api/placeholder/300/300',
      icon: Trees
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-forest-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white bg-clip-text text-transparent">
              Nossa Equipe
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça as mentes que tornaram o BT Tracker uma realidade, 
            combinando ciência, tecnologia e propósito para transformar dados em ação e proteger o futuro da floresta.
          </p>
        </div>

        {/* Core Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-forest-400 to-tech-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-white text-forest-600 border border-forest-200 shadow-sm">
                        {member.expertise}
                      </Badge>
                    </div> */}
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-orange-600 mb-2">{member.name}</h3>
                  <p className="text-forest-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advisors Section */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Conselho Consultivo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-400 to-forest-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{advisor.name.split(' ')[advisor.name.split(' ').length - 1].charAt(0)}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{advisor.name}</h4>
                <p className="text-tech-600 font-medium text-sm mb-1">{advisor.institution}</p>
                <p className="text-gray-600 text-xs">{advisor.area}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Our Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-600">Nossa Missão</h3>
            <div className="space-y-4">
              <p className="text-white leading-relaxed">
                Somos um grupo multidisciplinar de pesquisadores, desenvolvedores e ambientalistas 
                unidos pela missão de proteger a Amazônia através da tecnologia.
              </p>
              <p className="text-white leading-relaxed">
                Nossa equipe combina décadas de experiência em inteligência artificial, 
                ciências ambientais e desenvolvimento de sistemas para criar soluções 
                inovadoras de monitoramento e prevenção de incêndios florestais.
              </p>
              <p className="text-white leading-relaxed">
                Acreditamos que a preservação ambiental e o avanço tecnológico podem e 
                devem caminhar juntos para um futuro mais sustentável.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
              <div className="flex items-center space-x-3 mb-3">
                <Trees className="w-6 h-6 text-forest-600" />
                <h4 className="font-semibold text-white">Conservação</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Proteger a biodiversidade amazônica através de tecnologia de ponta
              </p>
            </div>

            <div className="bg-tech-50 rounded-lg p-6 border border-tech-200">
              <div className="flex items-center space-x-3 mb-3">
                <Bot className="w-6 h-6 text-tech-600" />
                <h4 className="font-semibold text-white">Inovação</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Desenvolver soluções de IA que revolucionem o monitoramento ambiental
              </p>
            </div>

            <div className="bg-fire-50 rounded-lg p-6 border border-fire-200">
              <div className="flex items-center space-x-3 mb-3">
                <BarChart className="w-6 h-6 text-fire-600" />
                <h4 className="font-semibold text-white">Impacto</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Gerar resultados mensuráveis na prevenção de incêndios florestais
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        {/* <div className="mt-16 bg-gradient-to-r from-forest-600 to-tech-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Junte-se à Nossa Equipe</h3>
          <p className="text-lg mb-6 opacity-90">
            Estamos sempre procurando talentos apaixonados por tecnologia e conservação ambiental. 
            Venha fazer parte desta missão transformadora.
          </p>
          <button className="bg-white text-forest-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Oportunidades
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
