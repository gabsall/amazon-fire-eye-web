
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Bot, Trees, BarChart } from 'lucide-react';

const Monitoring = () => {
  const [activeAlerts, setActiveAlerts] = useState(12);
  const [areasCovered, setAreasCovered] = useState(1250000);

  // Simulate real-time updates
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
      color: 'fire'
    },
    {
      title: 'Áreas Monitoradas',
      value: `${(areasCovered / 1000).toFixed(0)}K`,
      change: '+2.1%',
      changeType: 'increase',
      icon: Trees,
      color: 'forest'
    },
    {
      title: 'Precisão do Sistema',
      value: '94.7%',
      change: '+0.3%',
      changeType: 'increase',
      icon: Bot,
      color: 'tech'
    },
    {
      title: 'Tempo de Resposta',
      value: '8min',
      change: '-12%',
      changeType: 'decrease',
      icon: BarChart,
      color: 'tech'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      location: 'Rondônia - Setor 47A',
      severity: 'Alto',
      time: '2 min atrás',
      coordinates: '-8.7619, -63.9039'
    },
    {
      id: 2,
      location: 'Acre - Região Norte',
      severity: 'Médio',
      time: '15 min atrás',
      coordinates: '-9.0238, -70.8120'
    },
    {
      id: 3,
      location: 'Amazonas - Área Protegida',
      severity: 'Baixo',
      time: '1h atrás',
      coordinates: '-3.4168, -65.8561'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Alto':
        return 'bg-fire-100 text-fire-700 border-fire-200';
      case 'Médio':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Baixo':
        return 'bg-forest-100 text-forest-700 border-forest-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatColor = (color: string) => {
    switch (color) {
      case 'fire':
        return 'bg-fire-50 border-fire-200';
      case 'forest':
        return 'bg-forest-50 border-forest-200';
      case 'tech':
        return 'bg-tech-50 border-tech-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'fire':
        return 'text-fire-600';
      case 'forest':
        return 'text-forest-600';
      case 'tech':
        return 'text-tech-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section id="monitoring" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-forest-700 to-tech-600 bg-clip-text text-transparent">
              Monitoramento em Tempo Real
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe a situação atual dos focos de incêndio na Amazônia e veja como nossa IA 
            está trabalhando para proteger a floresta 24 horas por dia.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={`${getStatColor(stat.color)} border animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-xs ${stat.changeType === 'increase' ? 'text-forest-600' : 'text-fire-600'}`}>
                        {stat.change} nas últimas 24h
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-white flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${getIconColor(stat.color)}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-forest-600" />
                <span>Mapa Interativo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-forest-100 to-tech-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Map placeholder with animated elements */}
                <div className="absolute inset-0">
                  {/* Simulated map regions */}
                  <div className="absolute top-8 left-8 w-16 h-12 bg-forest-300 rounded opacity-60"></div>
                  <div className="absolute top-16 right-12 w-20 h-16 bg-forest-400 rounded opacity-70"></div>
                  <div className="absolute bottom-12 left-16 w-24 h-20 bg-forest-200 rounded opacity-50"></div>
                  <div className="absolute bottom-8 right-8 w-18 h-14 bg-forest-500 rounded opacity-80"></div>
                  
                  {/* Fire alert points */}
                  <div className="absolute top-20 left-20 w-3 h-3 bg-fire-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-24 w-2 h-2 bg-fire-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-20 left-32 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="text-center z-10">
                  <Map className="w-16 h-16 text-forest-600 mx-auto mb-4 animate-float" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">Mapa da Amazônia</p>
                  <p className="text-sm text-gray-600 mb-4">Visualização em tempo real dos focos de incêndio</p>
                  <Button className="bg-forest-600 hover:bg-forest-700 text-white">
                    Ver Mapa Completo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-fire-600" />
                  <span>Alertas Recentes</span>
                </div>
                <div className="w-3 h-3 bg-fire-500 rounded-full animate-pulse"></div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{alert.location}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{alert.coordinates}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Button variant="outline" className="w-full">
                  Ver Todos os Alertas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-forest-600 to-tech-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Quer Acesso Completo ao Sistema?</h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se à nossa rede de parceiros e tenha acesso a dados detalhados, 
            alertas personalizados e relatórios completos.
          </p>
          <Button size="lg" className="bg-white text-forest-600 hover:bg-gray-100">
            Solicitar Acesso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
