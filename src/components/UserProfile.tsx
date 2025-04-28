import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User, Package, X, QrCode } from 'lucide-react';
import QRCode from 'qrcode.react';

interface Order {
  id: string;
  total: number;
  status: string;
  created_at: string;
  items: OrderItem[];
}

interface OrderItem {
  id: string;
  product_type: string;
  quantity: number;
  price: number;
  product_name?: string;
}

interface TicketCode {
  id: string;
  code: string;
  created_at: string;
  order_item_id: string;
}

const UserProfile: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [ticketCodes, setTicketCodes] = useState<TicketCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'info' | 'orders' | 'tickets'>('info');

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: ordersData, error } = await supabase
          .from('orders')
          .select(`
            *,
            items:order_items(*)
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (!error && ordersData) {
          setOrders(ordersData);
        }

        const { data: codes } = await supabase
          .from('ticket_codes')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        setTicketCodes(codes || []);
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-secondary-dark">Mon Compte</h2>
          <div className="w-20 h-1 bg-primary mt-2"></div>
        </div>

        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'info'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('info')}
          >
            <div className="flex items-center gap-2">
              <User size={20} />
              Informations personnelles
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'orders'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('orders')}
          >
            <div className="flex items-center gap-2">
              <Package size={20} />
              Mes commandes
            </div>
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'tickets'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('tickets')}
          >
            <div className="flex items-center gap-2">
              <QrCode size={20} />
              Mes places
            </div>
          </button>
        </div>

        {activeTab === 'info' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nom</h3>
              <p className="text-gray-600">{user?.user_metadata?.name || 'Non renseigné'}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Date d'inscription</h3>
              <p className="text-gray-600">
                {new Date(user?.created_at).toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            {orders.length === 0 ? (
              <p className="text-gray-600 text-center py-8">
                Vous n'avez pas encore de commandes.
              </p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Commande #{order.id.slice(0, 8)}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(order.created_at).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'completed' ? 'Complétée' : 'En cours'}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">
                            {item.product_type === 'ticket' ? 'Billet' : 'Merchandise'} x{item.quantity}
                          </p>
                          <p className="text-sm text-gray-500">{item.product_name || '-'}</p>
                        </div>
                        <p className="font-medium">{item.price}€</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Total</p>
                      <p className="font-bold text-lg">{order.total}€</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary-dark mb-4 text-center">Mes billets électroniques</h3>
            {ticketCodes.length === 0 ? (
              <p className="text-gray-600 text-center py-8">Aucun billet généré pour l'instant.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ticketCodes.map((code) => (
                  <div key={code.id} className="flex flex-col items-center border rounded-lg p-6 bg-gray-50">
                    <QRCode value={code.code} size={128} />
                    <p className="mt-4 font-mono text-xs break-all">{code.code}</p>
                    <p className="text-gray-500 text-xs mt-2">Généré le {new Date(code.created_at).toLocaleDateString('fr-FR')}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;