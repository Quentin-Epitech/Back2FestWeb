import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Artists: React.FC = () => {
  const artists = [
    {
      name: 'Leto',
      genre: 'RAP français',
      image: 'https://www.warehouse-nantes.fr/media/cache/square_1000/images/artist_image/66f123114e457823256783.webp',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Ninho',
      genre: 'Rap français',
      image: 'https://bocir-prod-bucket.s3.amazonaws.com/medias/Vsj0LZpM34/image/ninho_album1686213761188-format4by7.png',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'SDM',
      genre: 'RAP français',
      image: 'https://cibul.s3.amazonaws.com/593c220f5fc345c185ae6533dfda7e4e.full.image.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Niska',
      genre: 'Rap',
      image: 'https://i.scdn.co/image/ab6761610000e5eb536e207c626c48b3c2419212',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Naza',
      genre: 'Hip Hop',
      image: 'https://www.warehouse-nantes.fr/media/cache/square_1000/images/artist_image/65158b4f4867c339489204.webp',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Kaaris',
      genre: 'Rap',
      image: 'https://www.thebackpackerz.com/wp-content/uploads/2023/12/Kaaris-Zoo-Visu-News-e1703765467985-710x800.jpeg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'La Mano',
      genre: 'Rappeur',
      image: 'https://i.scdn.co/image/ab6761610000e5eb282c5eca39a756fc5fe68fb6',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Jrk',
      genre: 'Rap',
      image: 'https://cdn-images.dzcdn.net/images/artist/c51661e88b33e797c4a79a40ee5a0bba/1900x1900-000000-80-0-0.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Genezio',
      genre: 'Rap',
      image: 'https://lowwood.fr/wp-content/uploads/2024/01/Bio-Genezio.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Nono la grinta',
      genre: 'Rap',
      image: 'https://assets.audiomack.com/on-the-radar-radio/fc7a4991ef88af4176ebb5c0b58eddfaa82cf08845352c4198d47ef65f680f59.jpeg?width=300',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Attaching boy',
      genre: 'Rap',
      image: 'https://cdn-images.dzcdn.net/images/artist/ce0dc3de2a62d40fcefa9c1a565f329b/1900x1900-000000-80-0-0.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'HLD',
      genre: 'Rap',
      image: 'https://cdn-images.dzcdn.net/images/artist/c1c8617e3bd328e4fc69c2baa7eb6a85/200x200.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'L2B',
      genre: 'Rap',
      image: 'https://www.rapcity.fr/wp-content/uploads/2025/04/l2b-nes-pour-briller-succes.jpg',
      socials: {
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
  ];

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
          {artists.map((artist, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4">
                      <a href={artist.socials.instagram} className="text-white hover:text-primary-light transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href={artist.socials.facebook} className="text-white hover:text-primary-light transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href={artist.socials.twitter} className="text-white hover:text-primary-light transition-colors">
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