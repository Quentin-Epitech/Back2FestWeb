import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Artists from './components/Artists';
import Tickets from './components/Tickets';
import Merchandise from './components/Merchandise';
import Venue from './components/Venue';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import { CartProvider, useCart } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import './styles/cartButton.css';

const MainContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar />
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-40 cart-fab"
        aria-label="Ouvrir le panier"
        style={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <ShoppingCart size={24} />
        {totalCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: 6,
              right: 6,
              background: '#e53935',
              color: 'white',
              borderRadius: '50%',
              minWidth: 22,
              height: 22,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 700,
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              zIndex: 50,
              padding: '0 6px',
            }}
          >
            {totalCount}
          </span>
        )}
      </button>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      <Hero />
      <About />
      <Schedule />
      <Artists />
      <Tickets />
      <Merchandise />
      <Venue />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;