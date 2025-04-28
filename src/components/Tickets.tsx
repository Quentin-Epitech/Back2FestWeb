import React from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Tickets: React.FC = () => {
  const { addItem } = useCart();

  const ticketTypes = [
    {
      id: 'ticket-1',
      name: 'Pass 1 Jour',
      price: 49,
      features: [
        'Accès à toutes les scènes',
        'Programme détaillé',
        'Goodies exclusifs',
        'Accès aux zones de restauration',
        'Toilettes VIP'
      ],
      isPrimary: false
    },
    {
      id: 'ticket-2',
      name: 'Pass 3 Jours',
      price: 129,
      features: [
        'Accès à toutes les scènes',
        'Programme détaillé',
        'Goodies exclusifs',
        'Accès aux zones de restauration',
        'Toilettes VIP',
        'Zone de repos dédiée',
        'Rencontres avec les artistes'
      ],
      isPrimary: true
    },
    {
      id: 'ticket-3',
      name: 'Pass VIP',
      price: 299,
      features: [
        'Accès à toutes les scènes',
        'Programme détaillé',
        'Goodies exclusifs',
        'Accès aux zones de restauration',
        'Toilettes VIP',
        'Zone de repos dédiée',
        'Rencontres avec les artistes',
        'Accès backstage',
        'Buffet VIP',
        'Service de conciergerie'
      ],
      isPrimary: false
    }
  ];

  const handleAddToCart = (ticket: typeof ticketTypes[0]) => {
    addItem({
      id: ticket.id,
      name: ticket.name,
      price: ticket.price,
      type: 'ticket'
    });
  };

  return (
    <section id="tickets" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">BILLETS</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Choisissez le billet qui vous convient le mieux et préparez-vous à vivre une expérience musicale inoubliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket) => (
            <div 
              key={ticket.id} 
              className={`card p-6 border-t-4 ${
                ticket.isPrimary 
                  ? 'border-primary transform md:-translate-y-4 md:scale-105 shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              {ticket.isPrimary && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-full">
                  Populaire
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${ticket.isPrimary ? 'text-primary' : 'text-secondary-dark'}`}>
                  {ticket.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold">{ticket.price}€</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`mr-2 flex-shrink-0 ${ticket.isPrimary ? 'text-primary' : 'text-secondary'}`} size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <button 
                  onClick={() => handleAddToCart(ticket)}
                  className={`btn w-full ${ticket.isPrimary ? 'btn-primary' : 'btn-outline'}`}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-secondary-dark mb-4 text-center">Informations importantes</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Les billets sont nominatifs et non remboursables</li>
            <li>• Accès interdit aux moins de 16 ans non accompagnés</li>
            <li>• L'entrée sur le site est possible dès 12h00 chaque jour</li>
            <li>• Un contrôle de sécurité est effectué à l'entrée du site</li>
            <li>• Des réductions sont disponibles pour les groupes de 10 personnes ou plus</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tickets;