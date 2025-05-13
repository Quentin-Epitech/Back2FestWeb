import React from 'react';
import { MapPin, Bus, Car, Train, Info } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="section-padding bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">LE LIEU</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Rapocalypse se déroule dans un cadre exceptionnel à Paris Longchamp, un espace idéal pour profiter pleinement de l'événement dans Paris.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <MapPin className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-bold text-secondary-dark">Paris Longchamp</h3>
              </div>

              <p className="text-gray-600 mb-6">
                2 Rte des Tribunes, 75016 Paris, France
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-secondary mb-3">Comment s'y rendre :</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Train className="text-secondary mr-2" size={20} />
                    <span>RER C : Station Avenue Foch</span>
                  </li>
                  <li className="flex items-center">
                    <Bus className="text-secondary mr-2" size={20} />
                    <span>Bus : Lignes 241, 244 (Arrêt Hippodrome d'Auteuil)</span>
                  </li>
                  <li className="flex items-center">
                    <Car className="text-secondary mr-2" size={20} />
                    <span>Parking payant disponible sur place</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded flex items-start">
                <Info className="text-primary mr-2 flex-shrink-0 mt-1" size={20} />
                <p className="text-sm text-gray-600">
                  Nous encourageons l'utilisation des transports en commun pour réduire l'impact environnemental de Rapocalypse.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-96 rounded-lg overflow-hidden shadow-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5899.578425613339!2d2.2298259162457486!3d48.85956241452465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665b8c9802a53%3A0x9f0e27e1e9caf620!2sHippodrome%20ParisLongchamp!5e0!3m2!1sfr!2sfr!4v1746795863711!5m2!1sfr!2sfr"

              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Carte du lieu de Rapocalypse"
              >
            </iframe>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-secondary-dark mb-4">Hébergement</h3>
            <p className="text-gray-600 mb-4">
              Des Hôtels sont disponibles à proximité, notamment dans les quartiers les plus populaires de Paris Longchamp.Nous vous recommandons de prendre vos reservations à l'avance.
            </p>
            <a href="#" className="text-primary font-bold hover:underline">Voir les offres</a>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-secondary-dark mb-4">Restauration</h3>
            <p className="text-gray-600 mb-4">
              Plusieurs espaces de restauration seront disponibles sur le site proposant une variété de cuisines pour tous les goûts et régimes alimentaires grâce à nos partenaires.
            </p>
            <a href="#" className="text-primary font-bold hover:underline">En savoir plus</a>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-secondary-dark mb-4">Accessibilité</h3>
            <p className="text-gray-600 mb-4">
              Le site est entièrement accessible aux personnes à mobilité réduite. Des services spécifiques sont également disponibles pour les personnes ayant des besoins particuliers.
            </p>
            <a href="#" className="text-primary font-bold hover:underline">Infos accessibilité</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;