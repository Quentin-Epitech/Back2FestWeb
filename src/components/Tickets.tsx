import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';

interface Ticket {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const Tickets: React.FC = () => {
  const { addItem } = useCart();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { data, error } = await supabase
          .from('tickets')
          .select('*')
          .order('price', { ascending: true });

        if (error) throw error;

        setTickets(data.map(ticket => ({
          ...ticket,
          features: ticket.features as string[]
        })));
      } catch (err) {
        console.error('Erreur lors du chargement des billets:', err);
        setError('Impossible de charger les billets');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handleAddToCart = (ticket: Ticket) => {
    addItem({
      id: ticket.id,
      name: ticket.name,
      price: ticket.price,
      type: 'ticket'
    });
  };

  if (loading) {
    return (
      <section id="tickets" className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des billets...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="tickets" className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

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
          {tickets.map((ticket, index) => (
            <div 
              key={ticket.id} 
              className={`card p-6 border-t-4 ${
                index === 1
                  ? 'border-primary transform md:-translate-y-4 md:scale-105 shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-full">
                  Populaire
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${index === 1 ? 'text-primary' : 'text-secondary-dark'}`}>
                  {ticket.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold">{ticket.price}€</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`mr-2 flex-shrink-0 ${index === 1 ? 'text-primary' : 'text-secondary'}`} size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <button 
                  onClick={() => handleAddToCart(ticket)}
                  className={`btn w-full ${index === 1 ? 'btn-primary' : 'btn-outline'}`}
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