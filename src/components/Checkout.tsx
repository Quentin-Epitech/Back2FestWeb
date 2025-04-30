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

    setProcessing(true);
    setError(null);

    try {
      const orderData = {
        user_id: user.id,
        total: Number(total.toFixed(2)),
        status: 'completed',
      };

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([orderData])
        .select()
        .single();

      if (orderError) throw new Error(orderError.message);

      const orderItems = items.map(item => ({
        order_id: order.id,
        product_type: item.type === 'merch' ? 'merchandise' : 'ticket',
        product_id: item.id,
        quantity: item.quantity,
        price: Number(item.price.toFixed(2)),
      }));

      const { data: insertedOrderItems, error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)
        .select();

      if (itemsError) throw new Error(itemsError.message);

      const generatedCodes: { code: string }[] = [];

      for (const orderItem of insertedOrderItems) {
        if (orderItem.product_type === 'ticket') {
          for (let i = 0; i < orderItem.quantity; i++) {
            const code = uuidv4();
            await supabase.from('ticket_codes').insert({
              order_item_id: orderItem.id,
              user_id: user.id,
              code,
            });
            generatedCodes.push({ code });
          }
        }
      }

      // Simuler un paiement
      await new Promise(resolve => setTimeout(resolve, 1000));

      clearCart();
      setSuccess(true);

      // Envoi email confirmation
      if (user.email && generatedCodes.length > 0) {
        const functionUrl = import.meta.env.DEV
          ? 'http://localhost:3005/api/send-confirmation'
          : '/api/send-confirmation';

        const response = await fetch(functionUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: user.email,
            name: user.user_metadata?.name || '',
            tickets: generatedCodes,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          console.error('Erreur envoi email:', data.error || 'Erreur inconnue');
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inattendue');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Paiement réussi !</h2>
          <p className="text-gray-600 mb-8">
            Votre commande a été confirmée. Merci de votre confiance !
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-3xl w-full">
        <div ref={cardRef} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Finaliser la commande</h2>
            <button onClick={() => navigate('/cart')} className="text-primary hover:text-primary-dark flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au panier
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Récapitulatif</h3>
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                </div>
                <p>{(item.price * item.quantity).toFixed(2)}€</p>
              </div>
            ))}
            <div className="mt-4 border-t pt-4 flex justify-between text-lg font-bold">
              <p>Total</p>
              <p className="text-primary">{total.toFixed(2)}€</p>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-300 text-red-600 rounded-md p-4 mt-4">
                {error}
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={processing}
              className="mt-6 w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark disabled:opacity-50"
            >
              {processing ? 'Paiement en cours...' : (
                <>
                  <CreditCard className="w-5 h-5 inline-block mr-2" />
                  Payer {total.toFixed(2)}€
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
