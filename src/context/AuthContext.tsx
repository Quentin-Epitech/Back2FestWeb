import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Implémenter la logique de connexion avec votre backend
      // Pour l'instant, on simule une connexion réussie
      setUser({
        id: '1',
        email,
        name: 'Utilisateur Test'
      });
    } catch (error) {
      throw new Error('Échec de la connexion');
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      // TODO: Implémenter la logique d'inscription avec votre backend
      // Pour l'instant, on simule une inscription réussie
      setUser({
        id: '1',
        email,
        name
      });
    } catch (error) {
      throw new Error('Échec de l\'inscription');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 