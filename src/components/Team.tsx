
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trees, ai, chart-bar, map } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Marina Silva',
      role: 'Líder do Projeto',
      expertise: 'IA & Machine Learning',
      description: 'Doutora em Ciência da Computação com especialização em sistemas de detecção por IA.',
      image: '/api/placeholder/300/300',
      icon: ai
    },
    {
      name: 'Prof. Carlos Ribeiro',
      role: 'Especialista em Dados Ambientais',
      expertise: 'Geoprocessamento',
      description: 'PhD em Geografia com 15 anos de experiência em análise de dados ambientais.',
      image: '/api/placeholder/300/300',
      icon: map
    },
    {
      name: 'Ana Beatriz Santos',
      role: 'Desenvolvedora Senior',
      expertise: 'Sistemas Distribuídos',
      description: 'Especialista em arquitetura de sistemas e processamento em tempo real.',
      image: '/api/placeholder/300/300',
      icon: chart-bar
    },
    {
      name: 'Dr. Roberto Amazonas',
      role: 'Consultor Ambiental',
      expertise: 'Conservação',
      description: 'Biólogo especializado em ecossistemas amazônicos e políticas de conservação.',
      image: '/api/placeholder/300/300',
      icon: trees
    }
  ];

  const advisors = [
    {
      name: 'Prof. Dr. José Marengo',
      institution: 'INPE',
      area: 'Climatologia'
    },
    {
      name: 'Dra. Luciana Gatti',
      institution: 'INPE',
      area: 'Gases de Efeito Estufa'
    },
    {
      name: 'Prof. Carlos Nobre',
      institution: 'USP/IEA',
      area: 'Sistema Terrestre'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-forest-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-forest-700 to-tech-600 bg-clip-text text-transparent">
              Nossa Equipe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que tornaram o BT Tracker uma realidade, 
            combinando conhecimento científico, experiência tecnológica e paixão pela conservação.
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
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-white text-forest-600 border border-forest-200 shadow-sm">
                        {member.expertise}
                      </Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-forest-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advisors Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
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
        </div>

        {/* Our Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Nossa Missão</h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Somos um grupo multidisciplinar de pesquisadores, desenvolvedores e ambientalistas 
                unidos pela missão de proteger a Amazônia através da tecnologia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe combina décadas de experiência em inteligência artificial, 
                ciências ambientais e desenvolvimento de sistemas para criar soluções 
                inovadoras de monitoramento e prevenção de incêndios florestais.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que a preservação ambiental e o avanço tecnológico podem e 
                devem caminhar juntos para um futuro mais sustentável.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
              <div className="flex items-center space-x-3 mb-3">
                <trees className="w-6 h-6 text-forest-600" />
                <h4 className="font-semibold text-gray-800">Conservação</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Proteger a biodiversidade amazônica através de tecnologia de ponta
              </p>
            </div>

            <div className="bg-tech-50 rounded-lg p-6 border border-tech-200">
              <div className="flex items-center space-x-3 mb-3">
                <ai className="w-6 h-6 text-tech-600" />
                <h4 className="font-semibold text-gray-800">Inovação</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Desenvolver soluções de IA que revolucionem o monitoramento ambiental
              </p>
            </div>

            <div className="bg-fire-50 rounded-lg p-6 border border-fire-200">
              <div className="flex items-center space-x-3 mb-3">
                <chart-bar className="w-6 h-6 text-fire-600" />
                <h4 className="font-semibold text-gray-800">Impacto</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Gerar resultados mensuráveis na prevenção de incêndios florestais
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="mt-16 bg-gradient-to-r from-forest-600 to-tech-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Junte-se à Nossa Equipe</h3>
          <p className="text-lg mb-6 opacity-90">
            Estamos sempre procurando talentos apaixonados por tecnologia e conservação ambiental. 
            Venha fazer parte desta missão transformadora.
          </p>
          <button className="bg-white text-forest-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Oportunidades
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
