import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Bot, Trees, BarChart } from 'lucide-react';

const Monitoring = () => {
  const [activeAlerts, setActiveAlerts] = useState(12);
  const [areasCovered, setAreasCovered] = useState(1250000);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlerts(prev => prev + Math.floor(Math.random() * 3) - 1);
      setAreasCovered(prev => prev + Math.floor(Math.random() * 1000) - 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: 'Alertas Ativos',
      value: activeAlerts,
      change: '+3',
      changeType: 'increase',
      icon: Map,
      color: 'alert'
    },
    {
      title: 'Áreas Monitoradas',
      value: `${(areasCovered / 1000).toFixed(0)}K`,
      change: '+2.1%',
      changeType: 'increase',
      icon: Trees,
      color: 'primary'
    },
    {
      title: 'Precisão do Sistema',
      value: '94.7%',
      change: '+0.3%',
      changeType: 'increase',
      icon: Bot,
      color: 'primary'
    },
    {
      title: 'Tempo de Resposta',
      value: '8min',
      change: '-12%',
      changeType: 'decrease',
      icon: BarChart,
      color: 'primary'
    }
  ];

  const getStatColor = (color: string) => {
    switch (color) {
      case 'alert':
        return 'bg-gray-900/50 border-alert-800';
      case 'primary':
        return 'bg-gray-900/50 border-orange-800';
      default:
        return 'bg-gray-900/50 border-gray-800';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'alert':
        return 'text-alert-400';
      case 'primary':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section id="monitoring" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Monitoramento em Tempo Real
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Acompanhe a situação atual dos focos de incêndio na Amazônia e veja como nossa IA 
            está trabalhando para proteger a floresta 24 horas por dia.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`${getStatColor(stat.color)} border animate-fade-in bg-gray-900/30`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className={`text-xs ${stat.changeType === 'increase' ? 'text-orange-400' : 'text-alert-400'}`}>
                        {stat.change} nas últimas 24h
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${getIconColor(stat.color)}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Quer Acesso Completo ao Sistema?</h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se à nossa rede de parceiros e tenha acesso a dados detalhados, 
            alertas personalizados e relatórios completos.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            Solicitar Acesso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
