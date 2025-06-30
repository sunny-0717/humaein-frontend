import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/WhoWeAre';
import WhereWeOperate from '../components/WhereWeOperate';
import WhatWeOffer from '../components/WhatWeOffer';
import HowWeDiffer from '../components/HowWeDiffer';
import WhyChooseUs from '../components/WhyChooseUs';
import QueryForm from '../components/QueryForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <WhereWeOperate />
      <WhatWeOffer />
      <HowWeDiffer />
      <WhyChooseUs />
      <QueryForm />
      <Footer />
    </div>
  );
}
