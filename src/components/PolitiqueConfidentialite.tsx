import React, { useEffect } from 'react';
import { Music } from 'lucide-react';

// Utilisation du Layout pour corriger les problèmes d'affichage
const PolitiqueConfidentialite: React.FC = () => {
  // Log pour debug
  useEffect(() => {
    console.log('Politique de confidentialité component mounted');
    
    // Faire défiler vers le haut de la page lors du chargement du composant
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 px-4 mt-20">
      <div className="container mx-auto">
        <div className="bg-secondary/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary-light">Politique de Confidentialité</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">1. Introduction</h2>
            <p className="mb-4">
              La présente Politique de Confidentialité décrit la façon dont Rapocalypse collecte, utilise et partage vos informations personnelles lorsque vous utilisez notre site web www.rapocalypse2025.fr ou lorsque vous participez à notre festival.
            </p>
            <p className="mb-4">
              Nous attachons une grande importance à la protection de vos données personnelles et nous nous engageons à respecter la réglementation applicable en matière de protection des données personnelles, en particulier le Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">2. Données collectées</h2>
            <p className="mb-4">
              <strong>2.1 Données que vous nous fournissez</strong><br />
              Nous collectons les données personnelles que vous nous fournissez directement, notamment :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Informations d'identification : nom, prénom, adresse e-mail, numéro de téléphone</li>
              <li>Informations de paiement : coordonnées de carte bancaire (traitées de manière sécurisée via notre prestataire de paiement)</li>
              <li>Informations relatives à vos achats : billets achetés, préférences de festival</li>
              <li>Informations de compte : nom d'utilisateur, mot de passe (stocké de manière sécurisée)</li>
              <li>Vos communications avec notre service client</li>
            </ul>
            
            <p className="mb-4">
              <strong>2.2 Données collectées automatiquement</strong><br />
              Lorsque vous visitez notre site web, nous collectons automatiquement certaines informations, notamment :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Données de navigation : pages visitées, temps passé sur chaque page, liens cliqués</li>
              <li>Informations techniques : adresse IP, type de navigateur, appareil utilisé, système d'exploitation</li>
              <li>Cookies et technologies similaires (voir notre section dédiée aux cookies)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">3. Utilisation de vos données</h2>
            <p className="mb-4">
              Nous utilisons vos données personnelles pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Gérer votre compte et vos achats de billets</li>
              <li>Vous fournir les services demandés (billetterie, newsletter, etc.)</li>
              <li>Personnaliser votre expérience sur notre site et lors du festival</li>
              <li>Vous envoyer des informations importantes concernant le festival (modifications de programme, informations de sécurité)</li>
              <li>Vous envoyer, avec votre consentement, des communications marketing sur nos futurs événements</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Assurer la sécurité de notre site et de nos utilisateurs</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">4. Partage de vos données</h2>
            <p className="mb-4">
              Nous pouvons partager vos données personnelles avec les catégories de destinataires suivantes :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Nos prestataires de services (hébergement, paiement en ligne, envoi d'e-mails, etc.) qui agissent en tant que sous-traitants</li>
              <li>Nos partenaires du festival (avec votre consentement préalable)</li>
              <li>Les autorités publiques lorsque la loi l'exige</li>
            </ul>
            <p className="mb-4">
              Nous ne vendons jamais vos données personnelles à des tiers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">5. Cookies et technologies similaires</h2>
            <p className="mb-4">
              Notre site utilise des cookies et technologies similaires pour améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu.
            </p>
            <p className="mb-4">
              <strong>5.1 Types de cookies utilisés</strong>
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
              <li>Cookies analytiques : nous permettent de comprendre comment les visiteurs utilisent notre site</li>
              <li>Cookies de fonctionnalité : améliorent l'expérience utilisateur</li>
              <li>Cookies de ciblage : utilisés pour la publicité ciblée (avec votre consentement)</li>
            </ul>
            <p className="mb-4">
              <strong>5.2 Gestion des cookies</strong><br />
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via notre bannière de cookies ou les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">6. Conservation des données</h2>
            <p className="mb-4">
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, sauf si une période de conservation plus longue est requise ou permise par la loi.
            </p>
            <p className="mb-4">
              Les critères utilisés pour déterminer nos délais de conservation incluent :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>La durée pendant laquelle nous entretenons une relation avec vous</li>
              <li>Nos obligations légales</li>
              <li>Les délais de prescription applicables</li>
              <li>Les litiges potentiels</li>
              <li>Les recommandations des autorités de protection des données</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">7. Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
            </p>
            <p className="mb-4">
              Ces mesures comprennent notamment :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Le chiffrement des données sensibles</li>
              <li>Des contrôles d'accès stricts</li>
              <li>Des audits réguliers de nos systèmes</li>
              <li>La formation de notre personnel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">8. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li><strong>Droit d'accès</strong> : vous pouvez demander une copie de vos données personnelles</li>
              <li><strong>Droit de rectification</strong> : vous pouvez demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : vous pouvez demander la suppression de vos données dans certains cas</li>
              <li><strong>Droit à la limitation du traitement</strong> : vous pouvez demander la limitation du traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : vous pouvez demander le transfert de vos données</li>
              <li><strong>Droit d'opposition</strong> : vous pouvez vous opposer au traitement de vos données dans certains cas</li>
              <li><strong>Droit de retirer votre consentement</strong> à tout moment, lorsque le traitement est basé sur votre consentement</li>
            </ul>
            <p className="mb-4">
              Pour exercer ces droits, veuillez nous contacter à l'adresse : privacy@rapocalypse2025.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">9. Transferts internationaux de données</h2>
            <p className="mb-4">
              Certains de nos prestataires de services peuvent être situés en dehors de l'Espace Économique Européen (EEE). Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place pour protéger vos données, conformément aux exigences du RGPD.
            </p>
            <p className="mb-4">
              Ces garanties peuvent inclure :
            </p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>La décision d'adéquation de la Commission européenne pour le pays concerné</li>
              <li>Les clauses contractuelles types approuvées par la Commission européenne</li>
              <li>Les règles d'entreprise contraignantes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">10. Protection des mineurs</h2>
            <p className="mb-4">
              Notre site n'est pas destiné aux mineurs de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs sans le consentement préalable des parents ou tuteurs légaux.
            </p>
            <p className="mb-4">
              Si vous êtes un parent ou tuteur et que vous pensez que votre enfant nous a fourni des données personnelles sans votre consentement, veuillez nous contacter immédiatement à privacy@rapocalypse2025.fr.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">11. Modifications de la politique de confidentialité</h2>
            <p className="mb-4">
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
            </p>
            <p className="mb-4">
              En cas de modifications substantielles, nous vous en informerons par e-mail ou par un avis visible sur notre site web avant que les modifications ne prennent effet.
            </p>
            <p className="mb-4">
              Nous vous encourageons à consulter régulièrement cette politique pour vous tenir informé de la façon dont nous protégeons vos informations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-light">12. Contact</h2>
            <p className="mb-4">
              Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de confidentialité ou le traitement de vos données personnelles, veuillez nous contacter à :
            </p>
            <div className="pl-8 mb-4">
              <p><strong>Adresse email</strong> : privacy@rapocalypse2025.fr</p>
              <p><strong>Adresse postale</strong> : Rapocalypse, 2 Route des Tribunes, 75016 Paris</p>
              <p><strong>Téléphone</strong> : +33 (0)1 23 45 67 89</p>
            </div>
            <p className="mb-4">
              Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD.
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

export default PolitiqueConfidentialite;