import React, { useEffect } from 'react';

const MentionsLegales: React.FC = () => {
  // Log pour debug
  useEffect(() => {
    console.log('Mentions légales component mounted');
    
    // Faire défiler vers le haut de la page lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 px-4 mt-20">
      <div className="container mx-auto">
        <div className="bg-secondary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary-light">Mentions Légales</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">1. Éditeur du site</h2>
            <p className="mb-4">
              Le site internet www.rapocalypse2025.fr est édité par :
            </p>
            <div className="pl-8 mb-4">
              <p><strong>Dénomination sociale</strong> : Rapocalypse SAS</p>
              <p><strong>Forme juridique</strong> : Société par Actions Simplifiée (SAS)</p>
              <p><strong>Capital social</strong> : 50 000 €</p>
              <p><strong>Siège social</strong> : 2 Route des Tribunes, 75016 Paris, France</p>
              <p><strong>SIRET</strong> : 123 456 789 00010</p>
              <p><strong>RCS</strong> : Paris B 123 456 789</p>
              <p><strong>TVA Intracommunautaire</strong> : FR 12 123456789</p>
              <p><strong>Directeur de la publication</strong> : Jean Dupont, Président</p>
              <p><strong>Contact</strong> : contact@rapocalypse2025.fr / +33 (0)1 23 45 67 89</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">2. Hébergeur du site</h2>
            <div className="pl-8 mb-4">
              <p><strong>Prestataire d'hébergement</strong> : OVH SAS</p>
              <p><strong>Siège social</strong> : 2 rue Kellermann, 59100 Roubaix, France</p>
              <p><strong>Téléphone</strong> : +33 (0)8 99 70 17 61</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu du site www.rapocalypse2025.fr (illustrations, textes, logos, icônes, images, fichiers audio et vidéo, etc.) est la propriété exclusive de Rapocalypse SAS ou de ses partenaires. Ce contenu est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Rapocalypse SAS.
            </p>
            <p className="mb-4">
              Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">4. Liens hypertextes</h2>
            <p className="mb-4">
              <strong>4.1 Liens vers notre site</strong><br />
              La création de liens hypertextes vers le site www.rapocalypse2025.fr est soumise à l'accord préalable du Directeur de la publication. Les liens hypertextes établis en direction du site doivent respecter les lois en vigueur et ne pas porter atteinte aux intérêts, à la réputation et/ou à l'image de Rapocalypse SAS.
            </p>
            <p className="mb-4">
              <strong>4.2 Liens depuis notre site</strong><br />
              Le site www.rapocalypse2025.fr peut contenir des liens hypertextes pointant vers d'autres sites internet. Ces liens sont fournis à titre informatif et Rapocalypse SAS ne peut être tenue responsable du contenu des sites tiers auxquels l'utilisateur accède via ces liens.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">5. Cookies et collecte de données</h2>
            <p className="mb-4">
              Le site www.rapocalypse2025.fr utilise des cookies. Pour plus d'informations sur la gestion des cookies et le traitement des données personnelles, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-primary-light hover:underline">Politique de Confidentialité</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">6. Médiation de la consommation</h2>
            <p className="mb-4">
              Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, notre société a mis en place un dispositif de médiation de la consommation. L'entité de médiation retenue est : CNPM - MÉDIATION DE LA CONSOMMATION.
            </p>
            <p className="mb-4">
              En cas de litige, vous pouvez déposer votre réclamation sur le site : https://cnpm-mediation-consommation.eu ou par voie postale en écrivant à CNPM - MÉDIATION - CONSOMMATION - 27 avenue de la Libération - 42400 Saint-Chamond.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">7. Droit applicable et juridiction compétente</h2>
            <p className="mb-4">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            <p className="mb-4">
              Tout litige relatif à l'utilisation du site www.rapocalypse2025.fr relève de la compétence exclusive des tribunaux de Paris, y compris en cas de pluralité de défendeurs, d'appel en garantie ou de référé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">8. Crédits</h2>
            <p className="mb-4">
              <strong>Conception et développement du site</strong> : Studio Digital XYZ
            </p>
            <p className="mb-4">
              <strong>Photographies</strong> : Sauf mention contraire, les photographies utilisées sur ce site sont la propriété de Rapocalypse SAS ou ont été acquises sur des banques d'images sous licence appropriée.
            </p>
            <p className="mb-4">
              <strong>Mentions spéciales</strong> : Les logos des artistes, sponsors et partenaires appartiennent à leurs propriétaires respectifs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">9. Accessibilité</h2>
            <p className="mb-4">
              Rapocalypse SAS s'efforce de rendre son site internet accessible au plus grand nombre, y compris aux personnes en situation de handicap. Si vous rencontrez des difficultés d'accessibilité, n'hésitez pas à nous contacter à l'adresse access@rapocalypse2025.fr.
            </p>
          </section>

          <div className="text-sm text-gray-400 text-center mt-10">
            Dernière mise à jour : Mai 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;