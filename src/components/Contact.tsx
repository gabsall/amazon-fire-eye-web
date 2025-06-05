
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Trees, Bot, Map, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    interest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse no BT Tracker.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: '',
      interest: ''
    });
  };

  const contactInfo = [
    {
      title: 'Parcerias Institucionais',
      description: 'Para organizações interessadas em colaboração técnica ou científica',
      email: 'parcerias@bttracker.org',
      icon: Trees
    },
    {
      title: 'Colaborações Técnicas',
      description: 'Para desenvolvedores e pesquisadores interessados em contribuir',
      email: 'tech@bttracker.org',
      icon: Bot
    },
    {
      title: 'Dados e API',
      description: 'Para acesso aos dados e integração com outros sistemas',
      email: 'dados@bttracker.org',
      icon: Map
    },
    {
      title: 'Mídia e Imprensa',
      description: 'Para jornalistas e comunicadores interessados no projeto',
      email: 'imprensa@bttracker.org',
      icon: BarChart
    }
  ];

  const partners = [
    { name: 'INPE', type: 'Institucional', logo: 'I' },
    { name: 'IBAMA', type: 'Governamental', logo: 'IB' },
    { name: 'Google.org', type: 'Tecnológico', logo: 'G' },
    { name: 'Microsoft AI', type: 'Tecnológico', logo: 'M' },
    { name: 'NASA', type: 'Internacional', logo: 'N' },
    { name: 'WWF Brasil', type: 'ONG', logo: 'W' },
    { name: 'Amazon Fund', type: 'Financeiro', logo: 'A' },
    { name: 'CNPq', type: 'Pesquisa', logo: 'C' }
  ];

  const getPartnerColor = (type: string) => {
    switch (type) {
      case 'Institucional':
        return 'bg-forest-100 text-forest-700 border-forest-200';
      case 'Governamental':
        return 'bg-tech-100 text-tech-700 border-tech-200';
      case 'Tecnológico':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Internacional':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'ONG':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Financeiro':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Pesquisa':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-700 to-orange-600 bg-clip-text text-transparent">
              Contato e Parcerias
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para parcerias, colaborações ou para saber mais sobre o BT Tracker. 
            Juntos podemos fazer a diferença na proteção da Amazônia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organização
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Sua empresa ou instituição"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Área de Interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full bg-black text-gray-700 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="parceria">Parceria Institucional</option>
                    <option value="colaboracao">Colaboração Técnica</option>
                    <option value="dados">Acesso a Dados</option>
                    <option value="pesquisa">Pesquisa Acadêmica</option>
                    <option value="midia">Mídia e Imprensa</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre seu interesse no BT Tracker..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 text-lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Canais de Contato</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-forest-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                        <a 
                          href={`mailto:${info.email}`}
                          className="text-forest-600 hover:text-forest-700 font-medium text-sm"
                        >
                          {info.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partners and Supporters */}
        {/* <div className="rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Nossos Parceiros e Apoiadores</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-400 to-tech-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{partner.logo}</span>
                </div>
                <p className="text-xs font-medium text-gray-700 mb-1">{partner.name}</p>
                <Badge variant="secondary" className={`text-xs ${getPartnerColor(partner.type)}`}>
                  {partner.type}
                </Badge>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Interessado em se tornar um parceiro?</p>
            <Button className="bg-tech-600 hover:bg-tech-700 text-white">
              Saiba Mais sobre Parcerias
            </Button>
          </div>
        </div> */}

        {/* Final CTA */}
        {/* <div className="mt-16 bg-gradient-to-r from-forest-600 to-tech-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Vamos Proteger a Amazônia Juntos</h3>
          <p className="text-lg mb-6 opacity-90">
            O BT Tracker é mais que um projeto - é um movimento pela preservação do meio ambiente. 
            Sua colaboração pode fazer a diferença.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-700 text-forest-600 hover:bg-gray-100">
              Agendar Reunião
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest-600">
              Download do Projeto
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
