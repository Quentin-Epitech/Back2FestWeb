import React from 'react';
import { ShoppingBag, Wifi, Key, Shirt } from 'lucide-react';

const Merchandise: React.FC = () => {
  const products = [
    {
      name: 'Porte-clé IOT',
      price: '8',
      description: 'Porte-clé connecté avec technologie IOT intégrée',
      image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Key className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Poster NFC',
      price: '30',
      description: 'Poster exclusif avec puce NFC intégrée pour contenu interactif',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Wifi className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Hoodie Rapocalypse',
      price: '30',
      description: 'Hoodie confortable aux couleurs de Rapocalypse',
      image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <Shirt className="h-8 w-8 text-primary" />,
    },
    {
      name: 'Bracelet Connecté',
      price: '15',
      description: 'Bracelet connecté pour une expérience Rapocalypse interactive',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section id="merchandise" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">MERCHANDISING</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez notre collection exclusive de produits dérivés de Rapocalypse, mêlant style et technologie pour une expérience unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {product.icon}
                    <h3 className="text-xl font-bold text-secondary-dark ml-2">{product.name}</h3>
                  </div>
                  <span className="text-2xl font-bold text-primary">{product.price}€</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="btn btn-primary w-full">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-secondary-dark mb-4 text-center">Informations</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Livraison gratuite pour toute commande supérieure à 50€</li>
            <li>• Retrait possible sur place pendant Rapocalypse</li>
            <li>• Garantie satisfait ou remboursé sous 30 jours</li>
            <li>• Stock limité, commandez dès maintenant</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;