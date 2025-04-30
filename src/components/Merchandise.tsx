import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
import '../styles/cartButton.css';

interface MerchItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  icon_name: string;
}

interface MerchandiseProps {
  triggerCartAnim?: () => void;
}

const Merchandise: React.FC<MerchandiseProps> = ({ triggerCartAnim }) => {
  const { addItem } = useCart();
  const [items, setItems] = useState<MerchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMerchandise = async () => {
      try {
        const { data, error } = await supabase
          .from('merchandise')
          .select('*')
          .order('price', { ascending: true });

        if (error) throw error;
        setItems(data);
      } catch (err) {
        console.error('Erreur lors du chargement du merchandising:', err);
        setError('Impossible de charger les articles');
      } finally {
        setLoading(false);
      }
    };

    fetchMerchandise();
  }, []);

  const handleAddToCart = (item: MerchItem) => {
    setAddingId(item.id);
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      type: 'merch',
      image: item.image_url
    });
    if (triggerCartAnim) triggerCartAnim();
    setTimeout(() => {
      setAddingId(null);
      setSuccessId(item.id);
      setTimeout(() => setSuccessId(null), 800);
    }, 1000);
  };

  if (loading) {
    return (
      <section id="merchandise" className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des articles...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="merchandise" className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="merchandise" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">BOUTIQUE</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez notre collection exclusive de produits dérivés pour garder un souvenir inoubliable du festival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-dark mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{item.price}€</span>
                </div>
                <div className="flex justify-center">
                  <button
                    className={`cart-button cart-button--small${addingId === item.id ? ' adding' : ''}${successId === item.id ? ' success' : ''}`}
                    onClick={() => handleAddToCart(item)}
                    disabled={addingId === item.id}
                  >
                    <span className="cart-icon">
                      <svg
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle r="1" cy="21" cx="9"></circle>
                        <circle r="1" cy="21" cx="20"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </span>
                    Ajouter au panier
                    <div className="progress-bar"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;