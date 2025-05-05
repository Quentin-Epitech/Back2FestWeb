import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
        <ArrowLeft className="mr-2" size={20} />
        Retour à l'accueil
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-dark mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">1. Acceptation des conditions</h2>
            <p className="mb-4">
              En accédant et en utilisant le site web de Rapocalypse, vous acceptez d'être lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">2. Description du service</h2>
            <p className="mb-4">
              Rapocalypse est un festival de musique qui propose :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>La vente de billets pour le festival</li>
              <li>La vente de produits dérivés</li>
              <li>Des informations sur les artistes et le programme</li>
              <li>Un service de réservation en ligne</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">3. Compte utilisateur</h2>
            <p className="mb-4">
              Pour acheter des billets ou des produits, vous devez créer un compte. Vous êtes responsable de :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintenir la confidentialité de votre compte</li>
              <li>Toutes les activités effectuées sous votre compte</li>
              <li>Mettre à jour vos informations personnelles</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">4. Billets et produits</h2>
            <p className="mb-4">
              Les conditions suivantes s'appliquent aux achats :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Les billets sont nominatifs et non remboursables</li>
              <li>Les prix sont en euros TTC</li>
              <li>La revente de billets est interdite</li>
              <li>Les produits sont soumis à disponibilité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">5. Règles du festival</h2>
            <p className="mb-4">Les participants doivent respecter :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>L'âge minimum requis (16 ans)</li>
              <li>Les règles de sécurité sur le site</li>
              <li>L'interdiction d'objets dangereux</li>
              <li>Le respect des autres festivaliers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">6. Propriété intellectuelle</h2>
            <p className="mb-4">
              Tout le contenu du site (logos, images, textes) est protégé par les droits de propriété intellectuelle. Toute reproduction est interdite sans autorisation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">7. Responsabilité</h2>
            <p className="mb-4">
              Rapocalypse ne peut être tenu responsable :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Des modifications de programme</li>
              <li>Des conditions météorologiques</li>
              <li>Des pertes ou vols sur le site</li>
              <li>Des dommages indirects</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">8. Modification des conditions</h2>
            <p className="mb-4">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives dès leur publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-dark mb-4">9. Contact</h2>
            <p>
              Pour toute question concernant ces conditions, contactez-nous à :
              <br />
              <a href="mailto:contact@rapocalypse2025.fr" className="text-primary hover:text-primary-dark">
                contact@rapocalypse2025.fr
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;