/**
 * Textes des pages légales. Modifiez ici, pas dans les composants.
 * Les éléments entre [crochets] sont à compléter — et doivent l'être
 * avant la mise en ligne, en particulier pour une activité d'investissement.
 *
 * Ces textes sont une base de travail, pas un avis juridique :
 * faites-les relire par un juriste avant publication.
 */

export type LegalBlock = { heading: string; paragraphs: string[] };

export type LegalDoc = {
  slug: string;
  navLabel: string;
  title: string;
  intro: string;
  updated: string;
  blocks: LegalBlock[];
};

/** Date de dernière mise à jour affichée sur les trois pages. */
const updated = "[Date de dernière mise à jour]";

export const mentionsLegales: LegalDoc = {
  slug: "mentions-legales",
  navLabel: "Mentions légales",
  title: "Mentions légales",
  intro:
    "Informations relatives à l'éditeur de ce site et à son hébergeur, conformément aux obligations d'information en vigueur.",
  updated,
  blocks: [
    {
      heading: "Éditeur du site",
      paragraphs: [
        "[Nom de la société], [forme juridique] au capital de [montant] FCFA.",
        "Siège social : [adresse complète].",
        "Immatriculation : [numéro RCCM] — Identifiant fiscal : [NIF].",
        "Représentant légal : [nom et qualité].",
        "Contact : [adresse e-mail] — [numéro de téléphone].",
      ],
    },
    {
      heading: "Hébergement",
      paragraphs: [
        "Ce site est hébergé par [nom de l'hébergeur], [adresse de l'hébergeur], [site web de l'hébergeur].",
      ],
    },
    {
      heading: "Statut réglementaire",
      paragraphs: [
        "[À compléter : statut de la société, agréments éventuels, autorité de supervision compétente — pour la zone UEMOA, la relation avec l'AMF-UMOA et/ou la BCEAO doit être décrite précisément.]",
        "Les ordres sont exécutés et les fonds conservés par [nom du partenaire agréé], [statut réglementaire et numéro d'agrément du partenaire].",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      paragraphs: [
        "L'ensemble des contenus de ce site (textes, visuels, logos, maquettes, code) est la propriété de [Nom de la société] ou de ses partenaires, et est protégé par le droit de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
      ],
    },
    {
      heading: "Nature des informations publiées",
      paragraphs: [
        "Ce site est un site de présentation. Il ne constitue ni une offre de services d'investissement, ni une sollicitation, ni un conseil en investissement, ni une recommandation personnalisée.",
        "Les montants, performances et écrans présentés sont des exemples destinés à illustrer le fonctionnement de l'application. Ils ne reflètent aucune situation réelle et ne constituent aucun engagement.",
        "Investir comporte des risques, y compris la perte totale du capital investi.",
      ],
    },
    {
      heading: "Signaler un contenu",
      paragraphs: [
        "Pour toute question ou toute demande concernant un contenu de ce site, écrivez à [adresse e-mail de contact].",
      ],
    },
  ],
};

export const conditions: LegalDoc = {
  slug: "conditions",
  navLabel: "Conditions d'utilisation",
  title: "Conditions d'utilisation",
  intro:
    "Ces conditions encadrent votre utilisation du site de présentation de Méridien. L'utilisation de l'application fera l'objet de conditions contractuelles distinctes.",
  updated,
  blocks: [
    {
      heading: "Objet",
      paragraphs: [
        "Les présentes conditions régissent l'accès et l'utilisation du site [adresse du site], édité par [Nom de la société]. En naviguant sur ce site, vous les acceptez.",
        "L'inscription à la liste d'attente ne crée aucun compte, aucun droit d'accès à l'application, et n'engage aucune des parties à conclure un contrat.",
      ],
    },
    {
      heading: "Accès au site",
      paragraphs: [
        "Le site est accessible gratuitement. Les coûts de connexion et d'équipement restent à votre charge.",
        "Nous pouvons interrompre l'accès au site à tout moment, notamment pour maintenance, sans préavis ni indemnité.",
      ],
    },
    {
      heading: "Conditions d'accès au service",
      paragraphs: [
        "[À compléter : âge minimum, pays et territoires éligibles, obligation de vérification d'identité (KYC), restrictions applicables aux personnes résidant dans certains pays.]",
      ],
    },
    {
      heading: "Utilisation loyale",
      paragraphs: [
        "Vous vous engagez à ne pas tenter d'accéder sans autorisation aux systèmes, à ne pas extraire massivement les contenus, et à ne pas utiliser le site à des fins frauduleuses ou contraires à la loi.",
        "Vous garantissez que l'adresse e-mail que vous transmettez est la vôtre.",
      ],
    },
    {
      heading: "Avertissement sur les risques",
      paragraphs: [
        "Tout investissement comporte un risque de perte en capital. Les performances passées ne préjugent pas des performances futures.",
        "Aucun élément de ce site ne constitue un conseil en investissement, fiscal ou juridique. Il vous appartient d'évaluer si un investissement est adapté à votre situation, et de consulter un professionnel si nécessaire.",
      ],
    },
    {
      heading: "Responsabilité",
      paragraphs: [
        "Nous nous efforçons de publier des informations exactes et à jour, sans garantie d'exhaustivité. Notre responsabilité ne peut être engagée en raison d'une décision prise sur la seule base des informations de ce site.",
        "[À compléter : limitations de responsabilité retenues, dans les limites permises par le droit applicable.]",
      ],
    },
    {
      heading: "Liens externes",
      paragraphs: [
        "Le site peut renvoyer vers des sites tiers dont nous ne maîtrisons pas le contenu. Leur consultation relève de votre seule responsabilité.",
      ],
    },
    {
      heading: "Modification des conditions",
      paragraphs: [
        "Nous pouvons modifier ces conditions à tout moment. La version applicable est celle publiée sur cette page à la date de votre visite.",
      ],
    },
    {
      heading: "Droit applicable et litiges",
      paragraphs: [
        "Les présentes conditions sont soumises au droit [pays/droit applicable]. En cas de litige, [juridiction compétente ou mode de règlement amiable à préciser].",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Pour toute question : [adresse e-mail de contact]."],
    },
  ],
};

export const confidentialite: LegalDoc = {
  slug: "confidentialite",
  navLabel: "Confidentialité",
  title: "Politique de confidentialité",
  intro:
    "Comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous visitez ce site ou vous inscrivez à la liste d'attente.",
  updated,
  blocks: [
    {
      heading: "Responsable du traitement",
      paragraphs: [
        "[Nom de la société], [adresse complète]. Contact pour toute question relative aux données : [adresse e-mail dédiée].",
        "[À compléter si applicable : identité et coordonnées du délégué à la protection des données.]",
      ],
    },
    {
      heading: "Données que nous collectons",
      paragraphs: [
        "Liste d'attente : l'adresse e-mail que vous saisissez dans la section « Télécharger », ainsi que la date de votre inscription.",
        "Données techniques : [à compléter selon les outils réellement installés — journaux serveur, adresse IP, type d'appareil, mesure d'audience. Si aucun outil de mesure n'est installé, indiquez-le explicitement.]",
        "Nous ne collectons sur ce site aucune donnée bancaire, aucune pièce d'identité et aucune donnée sensible.",
      ],
    },
    {
      heading: "Finalités et bases légales",
      paragraphs: [
        "Vous prévenir de l'ouverture de l'application : sur la base de votre consentement, que vous donnez en soumettant le formulaire.",
        "Assurer la sécurité et le bon fonctionnement du site : sur la base de notre intérêt légitime.",
        "[À compléter : toute autre finalité, par exemple mesure d'audience ou envoi d'actualités, avec la base légale correspondante.]",
      ],
    },
    {
      heading: "Durée de conservation",
      paragraphs: [
        "Adresse e-mail de la liste d'attente : conservée jusqu'à l'ouverture de l'application, puis au maximum [durée] après le dernier contact, ou jusqu'à votre demande de suppression.",
        "Journaux techniques : [durée à compléter].",
      ],
    },
    {
      heading: "Destinataires",
      paragraphs: [
        "Vos données sont accessibles aux personnes habilitées de [Nom de la société] et à nos prestataires techniques : [hébergeur], [service d'envoi d'e-mails], [outil de mesure d'audience éventuel].",
        "Nous ne vendons pas vos données et ne les transmettons à aucun partenaire à des fins publicitaires.",
        "[À compléter si des données sont transférées hors de votre pays de résidence : pays concernés et garanties encadrant le transfert.]",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "[À compléter. Ce site, dans sa version actuelle, n'installe pas de cookie publicitaire ni de traceur de mesure d'audience. Si vous ajoutez un tel outil, décrivez-le ici et mettez en place un bandeau de consentement.]",
      ],
    },
    {
      heading: "Vos droits",
      paragraphs: [
        "Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité sur vos données, ainsi que du droit de retirer votre consentement à tout moment.",
        "Pour exercer ces droits, écrivez à [adresse e-mail dédiée]. Nous répondons dans un délai de [délai].",
        "Vous pouvez également saisir l'autorité de protection des données compétente : [nom et coordonnées de l'autorité].",
      ],
    },
    {
      heading: "Sécurité",
      paragraphs: [
        "Les échanges avec ce site sont chiffrés (HTTPS). L'accès aux adresses e-mail collectées est restreint aux personnes qui en ont besoin.",
        "[À compléter : autres mesures techniques et organisationnelles mises en place.]",
      ],
    },
    {
      heading: "Modification de cette politique",
      paragraphs: [
        "Toute modification sera publiée sur cette page, avec mise à jour de la date indiquée en haut du document.",
      ],
    },
  ],
};

export const legalDocs = [mentionsLegales, conditions, confidentialite];
