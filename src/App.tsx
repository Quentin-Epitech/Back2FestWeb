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
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const MainContent = () => (
    <>
      <Navbar />
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-40"
      >
        <ShoppingCart size={24} />
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