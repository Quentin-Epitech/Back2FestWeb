import React, { useEffect, useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Artist } from '../types/database';

const Artists: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const { data, error } = await supabase
          .from('artists')
          .select('*')
          .order('name');

        if (error) throw error;
        setArtists(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return (
      <section id="artists" className="section-padding bg-gray-100">
        <div className="container mx-auto text-center">
          <p>Chargement des artistes...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="artists" className="section-padding bg-gray-100">
        <div className="container mx-auto text-center text-red-600">
          <p>Erreur: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="artists" className="section-padding bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">NOS ARTISTES</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez les talents qui feront vibrer Rapocalypse cette année. Une sélection éclectique d'artistes passionnés pour une expérience musicale inoubliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={artist.image_url} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4">
                      <a href={artist.social_links.instagram} className="text-white hover:text-primary-light transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href={artist.social_links.facebook} className="text-white hover:text-primary-light transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href={artist.social_links.twitter} className="text-white hover:text-primary-light transition-colors">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-secondary-dark">{artist.name}</h3>
                <p className="text-gray-600">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#schedule" className="btn btn-primary">
            Voir le programme complet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Artists;