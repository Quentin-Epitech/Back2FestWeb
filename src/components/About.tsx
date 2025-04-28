import React from 'react';
import { Music, Users, Camera, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Musique Live",
      description: "Plus de 20 artistes pour une expérience musicale unique."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Communauté",
      description: "Rejoignez des milliers de passionnés de musique dans une ambiance conviviale et festive."
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Expériences",
      description: "Découvrez des installations artistiques, des ateliers et des activités interactives."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Qualité",
      description: "Une production de haute qualité et une organisation soignée pour votre confort."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">À PROPOS DE RAPOCALYPSE</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg mb-6">
            Créé en 2023, Rapocalypse est rapidement devenu un rendez-vous incontournable dans le monde de la musique. Chaque année, nous réunissons les meilleurs artistes nationaux pour trois jours de festival de RAP.
          </p>
          <p className="text-lg">
            Notre mission est de vous offrir une expérience unique alliant qualité musicale, confort et découvertes artistiques dans un cadre exceptionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;