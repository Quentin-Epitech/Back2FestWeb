import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import Auth from './Auth';
import UserProfile from './UserProfile';

interface UserMenuProps {
  session: any;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ session, onClose }) => {
  const [showAuth, setShowAuth] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onClose();
  };

  if (showProfile) {
    return <UserProfile onClose={() => setShowProfile(false)} />;
  }

  if (showAuth) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <button
            onClick={() => setShowAuth(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          <Auth onSuccess={() => {
            setShowAuth(false);
            onClose();
          }} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg py-2 text-gray-700">
      {session ? (
        <>
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="font-medium">{session.user.user_metadata?.name || 'Utilisateur'}</p>
          </div>
          <button
            onClick={() => setShowProfile(true)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Mon compte
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Déconnexion
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setShowAuth(true)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Connexion
          </button>
          <button
            onClick={() => setShowAuth(true)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Inscription
          </button>
        </>
      )}
    </div>
  );
};

export default UserMenu