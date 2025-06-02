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
        return 'bg-alert-900/20 text-alert-300 border-alert-800';
      case 'Médio':
        return 'bg-orange-900/20 text-orange-300 border-orange-800';
      case 'Baixo':
        return 'bg-orange-900/30 text-orange-200 border-orange-700';
      default:
        return 'bg-gray-900/20 text-gray-300 border-gray-800';
    }
  };

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
              <Card key={index} className={`${getStatColor(stat.color)} border animate-fade-in bg-gray-900/30`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className={`text-xs ${stat.changeType === 'increase' ? 'text-orange-400' : 'text-alert-400'}`}>
                        {stat.change} nas últimas 24h
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center`}>
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
          <Card className="shadow-xl bg-gray-900/50 border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Map className="w-5 h-5 text-orange-400" />
                <span>Mapa Interativo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-orange-900/20 to-black rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Map placeholder with animated elements */}
                <div className="absolute inset-0">
                  {/* Simulated map regions */}
                  <div className="absolute top-8 left-8 w-16 h-12 bg-orange-600/30 rounded opacity-60"></div>
                  <div className="absolute top-16 right-12 w-20 h-16 bg-orange-500/40 rounded opacity-70"></div>
                  <div className="absolute bottom-12 left-16 w-24 h-20 bg-orange-700/20 rounded opacity-50"></div>
                  <div className="absolute bottom-8 right-8 w-18 h-14 bg-orange-400/50 rounded opacity-80"></div>
                  
                  {/* Fire alert points */}
                  <div className="absolute top-20 left-20 w-3 h-3 bg-alert-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-24 w-2 h-2 bg-alert-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-20 left-32 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="text-center z-10">
                  <Map className="w-16 h-16 text-orange-400 mx-auto mb-4 animate-float" />
                  <p className="text-lg font-semibold text-white mb-2">Mapa da Amazônia</p>
                  <p className="text-sm text-gray-400 mb-4">Visualização em tempo real dos focos de incêndio</p>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Ver Mapa Completo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card className="shadow-xl bg-gray-900/50 border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-orange-400" />
                  <span>Alertas Recentes</span>
                </div>
                <div className="w-3 h-3 bg-alert-500 rounded-full animate-pulse"></div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="border border-gray-800 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white">{alert.location}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{alert.coordinates}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-800">
                <Button variant="outline" className="w-full border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-black">
                  Ver Todos os Alertas
                </Button>
              </div>
            </CardContent>
          </Card>
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
