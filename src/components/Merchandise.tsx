import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  sizes?: string[];
}

interface MerchImage {
  id: string;
  merchandise_id: string;
  image_url: string;
}

interface MerchandiseProps {
  triggerCartAnim?: () => void;
}

const Merchandise: React.FC<MerchandiseProps> = ({ triggerCartAnim }) => {
  const { addItem } = useCart();
  const [items, setItems] = useState<MerchItem[]>([]);
  const [merchImages, setMerchImages] = useState<MerchImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: merchData, error: merchError } = await supabase
          .from('merchandise')
          .select('*')
          .order('price', { ascending: true });

        if (merchError) throw merchError;
        
        const { data: imagesData, error: imagesError } = await supabase
          .from('merchandise_images')
          .select('*');
        
        if (imagesError) throw imagesError;

        setItems(merchData.map(item => ({
          ...item,
          sizes: item.sizes || []
        })));
        setMerchImages(imagesData);
      } catch (err) {
        console.error('Erreur lors du chargement des données:', err);
        setError('Impossible de charger les articles');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProductImages = (productId: string) => {
    const productImages = merchImages.filter(img => img.merchandise_id === productId);
    
    if (productImages.length === 0) {
      const product = items.find(item => item.id === productId);
      return product ? [{ id: 'main', merchandise_id: productId, image_url: product.image_url }] : [];
    }
    
    return productImages;
  };

  const handleAddToCart = (item: MerchItem) => {
    const size = item.icon_name === 'Size' ? selectedSizes[item.id] : undefined;
    
    if (item.icon_name === 'Size' && !size) {
      alert('Veuillez sélectionner une taille');
      return;
    }

    setAddingId(item.id);
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      type: 'merch',
      image: item.image_url,
      size
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
          {items.map((item) => {
            const productImages = getProductImages(item.id);
            
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={item.image_url}
                          alt={`${item.name} - Image principale`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </SwiperSlide>
                    
                    {productImages.map((image) => (
                      <SwiperSlide key={image.id}>
                        <div className="aspect-w-16 aspect-h-9">
                          <img
                            src={image.image_url}
                            alt={`${item.name} - Image supplémentaire`}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-dark mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{item.price}€</span>
                  </div>

                  {item.icon_name === 'Size' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taille
                      </label>
                      <select
                        value={selectedSizes[item.id] || ''}
                        onChange={(e) => setSelectedSizes({
                          ...selectedSizes,
                          [item.id]: e.target.value
                        })}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      >
                        <option value="">Sélectionner une taille</option>
                        {item.sizes?.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button
                      className={`cart-button cart-button--small${addingId === item.id ? ' adding' : ''}${successId === item.id ? ' success' : ''}`}
                      onClick={() => handleAddToCart(item)}
                      disabled={addingId === item.id}
                    >
                      <span className="cart-icon">
                        <ShoppingBag size={20} />
                      </span>
                      Ajouter au panier
                      <div className="progress-bar"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Merchandise;