import React from 'react';
import { Calendar, MapPin, Music } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-gradient text-white min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/80 to-primary-dark/80"></div>
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-primary px-4 py-2 rounded-full mb-6">
            <span className="font-bold">ÉDITION 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            RAPOCALYPSE <span className="text-primary-light">2025</span>
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Une expérience musicale inoubliable avec les meilleurs artistes du moment dans un cadre exceptionnel.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary-light" />
              <span>18-20 Juillet 2025</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary-light" />
              <span>Paris Longchamp</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Music className="text-primary-light" />
              <span>+30 Artistes</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tickets" className="btn btn-primary">
              Acheter des billets
            </a>
            <a href="#schedule" className="btn btn-outline">
              Voir le programme
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

export default Hero;