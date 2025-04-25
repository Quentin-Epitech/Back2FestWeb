import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Music className="text-primary-light mr-2" size={28} />
              <span className="font-bold text-xl">RAPOCALYPSE</span>
            </div>
            <p className="mb-6 text-gray-300">
              Une expérience musicale inoubliable au cœur de Paris. Rejoignez-nous pour trois jours de célébration de la musique et de la culture.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-light transition-colors">À propos</a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-primary-light transition-colors">Programme</a>
              </li>
              <li>
                <a href="#artists" className="text-gray-300 hover:text-primary-light transition-colors">Artistes</a>
              </li>
              <li>
                <a href="#tickets" className="text-gray-300 hover:text-primary-light transition-colors">Billets</a>
              </li>
              <li>
                <a href="#venue" className="text-gray-300 hover:text-primary-light transition-colors">Lieu</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="text-primary-light mr-2 flex-shrink-0" size={16} />
                <span className="text-gray-300">contact@rapocalypse2025.fr</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-light mr-2 flex-shrink-0" size={16} />
                <span className="text-gray-300">+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-primary-light mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-300">1 Place de la Porte de Versailles, 75015 Paris, France</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous pour recevoir les dernières actualités et offres exclusives.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 bg-secondary border border-gray-600 rounded focus:outline-none focus:border-primary-light text-white"
              />
              <button type="submit" className="btn btn-primary w-full">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Rapocalypse. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-light text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-light text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-light text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;