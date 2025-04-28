import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Checkout: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const { user, loading, session } = useAuth();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login', { state: { from: 'checkout' } });
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  const handlePayment = async () => {
    if (!user || !session) {
      setError('Vous devez être connecté pour effectuer un paiement');
      return;
    }

    console.log('Début du processus de paiement', { 
      userId: user.id,
      itemsCount: items.length, 
      total: total,
      items: items.map(item => ({
        id: item.id,
        type: item.type,
        price: item.price,
        quantity: item.quantity
      }))
    });
    
    setProcessing(true);
    setError(null);

    try {
      // 1. Créer la commande principale
      console.log('Création de la commande...');
      const orderData = {
        user_id: user.id,
        total: Number(total.toFixed(2)),
        status: 'completed'
      };
      console.log('Données de la commande:', orderData);

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

      if (orderError) {
        console.error('Erreur lors de la création de la commande:', orderError);
        throw new Error(`Erreur lors de la création de la commande: ${orderError.message}`);
      }

      console.log('Commande créée avec succès:', order);

      // 2. Créer les éléments de la commande
      console.log('Création des éléments de la commande...');
      const orderItems = items.map(item => ({
        order_id: order.id,
        product_type: item.type === 'merch' ? 'merchandise' : 'ticket',
        product_id: item.id,
        quantity: item.quantity,
        price: Number(item.price.toFixed(2))
      }));

      console.log('Éléments à insérer:', orderItems);

      const { data: insertedOrderItems, error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)
        .select();

      if (itemsError) {
        console.error('Erreur lors de la création des éléments de la commande:', itemsError);
        throw new Error(`Erreur lors de la création des éléments de la commande: ${itemsError.message}`);
      }

      console.log('Éléments de la commande créés avec succès');

      // 3. Générer les codes QR pour chaque ticket acheté
      let ticketCodes: { code: string }[] = [];
      const { data: codesData } = await supabase
        .from('ticket_codes')
        .select('code')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (codesData) {
        ticketCodes = codesData.map((c: any) => ({ code: c.code }));
      }

      for (const orderItem of insertedOrderItems) {
        if (orderItem.product_type === 'ticket') {
          for (let i = 0; i < orderItem.quantity; i++) {
            const code = uuidv4();
            await supabase.from('ticket_codes').insert({
              order_item_id: orderItem.id,
              user_id: user.id,
              code
            });
          }
        }
      }

      // Simuler un paiement réussi
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Vider le panier
      clearCart();
      setSuccess(true);
      console.log('Paiement terminé avec succès');

      // Envoi de l'email de confirmation
      if (user?.email && ticketCodes.length > 0) {
        fetch('http://localhost:3005/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: user.email,
            name: user.user_metadata?.name || '',
            tickets: ticketCodes,
          }),
        });
      }
    } catch (err) {
      console.error('Erreur lors du paiement:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du paiement');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paiement réussi !</h2>
            <p className="text-gray-600 mb-8">
              Votre commande a été confirmée. Merci de votre confiance !
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <div ref={cardRef} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Finaliser la commande</h2>
              <button
                onClick={() => navigate('/cart')}
                className="text-primary hover:text-primary-dark flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au panier
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Récapitulatif</h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                      </div>
                      <p className="font-medium">{item.price * item.quantity}€</p>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold">Total</p>
                      <p className="text-2xl font-bold text-primary">{total}€</p>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-600">{error}</p>
                </div>
              )}

              <button
                onClick={handlePayment}
                disabled={processing}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {processing ? (
                  'Traitement en cours...'
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payer {total}€
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 