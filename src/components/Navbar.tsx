import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import UserMenu from './UserMenu';
import type { Session } from '@supabase/supabase-js';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Programme', href: '#schedule' },
    { name: 'Artistes', href: '#artists' },
    { name: 'Billets', href: '#tickets' },
    { name: 'Boutique', href: '#merchandise' },
    { name: 'Lieu', href: '#venue' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary-dark py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Rapocalypse-removebg-preview.png" alt="Rapocalypse Logo" className="h-16" />
        </div>

      
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-primary-light transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="text-white hover:text-primary-light transition-colors duration-300 flex items-center gap-2"
            >
              <User size={20} />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48">
                <UserMenu session={session} onClose={() => setShowUserMenu(false)} />
              </div>
            )}
          </div>
        </div>

       
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-secondary-dark">
          <div className="px-4 py-2 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-primary-light transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setShowUserMenu(!showUserMenu);
              }}
              className="w-full text-left text-white hover:text-primary-light transition-colors duration-300 flex items-center gap-2"
            >
              <User size={20} />
              Mon compte
            </button>
            {showUserMenu && (
              <div className="pl-4">
                <UserMenu session={session} onClose={() => setShowUserMenu(false)} />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
