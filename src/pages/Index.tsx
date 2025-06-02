
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Monitoring from '@/components/Monitoring';
import Impact from '@/components/Impact';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Monitoring />
      <Impact />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
