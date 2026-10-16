/**
 * Tous les textes du site. Modifiez ici, pas dans les composants.
 * Les éléments entre [crochets] sont à compléter.
 */

export const brand = {
  name: "Méridien",
  company: "[Nom de la société]",
  year: "[Année]",
  /** Adresse de contact utilisée dans le pied de page et les pages légales. */
  email: "[contact@exemple.com]",
  /** Adresse publique du site, utilisée pour les métadonnées, le sitemap et robots.txt. */
  url: "https://meridien.example",
};

export const nav = [
  { label: "Le projet", href: "#projet" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Comment ça marche", href: "#etapes" },
  { label: "Sécurité", href: "#securite" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Plateforme d'investissement · Togo & zone UEMOA",
  title: "Vos marchés, où que le soleil se lève.",
  text: "Méridien vous permet d'investir depuis votre téléphone, en francs CFA, avec des frais affichés avant chaque ordre. Simple à prendre en main, claire sur ce que vous payez.",
  primaryCta: "Télécharger l'application",
  secondaryCta: "Découvrir le projet",
  points: ["Dépôt en Mobile Money", "Frais annoncés d'avance", "Suivi de chaque ordre"],
};

export const project = {
  eyebrow: "Le projet",
  title: "Rendre l'investissement accessible à chacun, depuis son téléphone.",
  text: "Méridien est né d'un constat : investir reste compliqué, opaque et réservé à quelques-uns. Nous construisons une application qui explique, accompagne et montre clairement chaque étape, du premier dépôt jusqu'au suivi de votre portefeuille.",
  pillars: [
    {
      title: "Simple",
      text: "Un parcours pensé pour les débutants : vous saisissez le montant que vous voulez investir, l'application s'occupe du reste.",
    },
    {
      title: "Transparent",
      text: "Les frais sont calculés et affichés avant la confirmation. Aucune surprise, pas de ligne cachée.",
    },
    {
      title: "Progressif",
      text: "Nous démarrons avec une sélection de marchés et élargissons l'offre étape par étape, avec des partenaires agréés.",
    },
  ],
};

export const features = {
  eyebrow: "Fonctionnalités",
  title: "Tout ce qu'il faut, rien de superflu.",
  timeline: {
    title: "Suivez chaque ordre",
    text: "De la validation à la mise à jour de votre position, vous savez toujours où en est votre ordre.",
    steps: [
      { label: "Validé", state: "done" },
      { label: "Transmis au courtier", state: "done" },
      { label: "Accepté par le marché", state: "done" },
      { label: "Exécution", state: "current" },
      { label: "Position mise à jour", state: "todo" },
    ] as { label: string; state: "done" | "current" | "todo" }[],
  },
  amount: {
    title: "Investissez à votre mesure",
    text: "Choisissez le montant, pas le nombre de titres. Vous pouvez investir une fraction d'un titre.",
    presets: ["10 000", "25 000", "50 000", "100 000"],
    selected: "50 000",
  },
  deposit: {
    title: "Alimentez votre compte",
    text: "Plusieurs moyens de dépôt, pensés pour vos habitudes.",
    methods: [
      { name: "Mobile Money", note: "Instantané" },
      { name: "Carte bancaire", note: "Visa, Mastercard" },
      { name: "Virement", note: "Délai 1 à 3 jours ouvrés" },
    ],
  },
  portfolio: {
    title: "Votre portefeuille d'un coup d'œil",
    text: "Vos positions, votre historique de dépôts et de retraits, au même endroit.",
    label: "Valeur du portefeuille (exemple)",
    value: "1 250 000 XOF",
  },
  markets: {
    title: "Explorez les marchés",
    text: "Recherchez, comparez, ajoutez à vos marchés.",
    search: "Rechercher un titre, un marché…",
    chips: ["Actions", "ETF", "Obligations"],
  },
};

export const steps = {
  eyebrow: "Comment ça marche",
  title: "Quatre étapes pour démarrer.",
  items: [
    { title: "Créez votre compte", text: "Quelques minutes suffisent avec votre numéro de téléphone." },
    { title: "Vérifiez votre identité", text: "Une étape obligatoire pour sécuriser votre compte." },
    { title: "Alimentez votre compte", text: "Déposez de l'argent par Mobile Money, carte ou virement." },
    { title: "Passez votre premier ordre", text: "Saisissez un montant, vérifiez les frais, confirmez." },
  ],
};

export const security = {
  eyebrow: "Sécurité & confiance",
  title: "Votre confiance se mérite.",
  items: [
    { title: "Identité vérifiée", text: "La vérification d'identité (KYC) est requise avant de passer un ordre." },
    { title: "Code par SMS", text: "Un code de vérification confirme vos connexions." },
    { title: "Frais visibles", text: "Le détail des frais est affiché avant toute confirmation." },
    { title: "Risques expliqués", text: "Nous rappelons clairement que tout investissement comporte des risques." },
  ],
  partner: {
    name: "[Nom du partenaire agréé]",
    text: "— [statut réglementaire à compléter]. Cet encart présentera le partenaire agréé qui exécute les ordres et conserve les fonds.",
  },
};

export const download = {
  title: "Emportez les marchés dans votre poche.",
  text: "L'application arrive bientôt sur iPhone et Android. Laissez votre e-mail, nous vous prévenons dès l'ouverture.",
  appStore: "Bientôt sur l'App Store",
  googlePlay: "Bientôt sur Google Play",
  emailLabel: "Votre adresse e-mail",
  emailPlaceholder: "Votre adresse e-mail",
  submit: "Me prévenir",
  sending: "Envoi…",
  thanks: "Merci ! Nous vous écrirons dès l'ouverture.",
  /** Texte affiché dans le cadre tant qu'aucune image de QR code n'est fournie. */
  qr: "[QR code]",
  /** Chemin d'une image de QR code dans /public (ex. "/qr.png"). `null` = cadre en pointillés. */
  qrImage: null as string | null,
  order: {
    title: "Acheter",
    amountLabel: "Montant à investir",
    amount: "50 000 XOF",
    presets: ["10 000", "25 000", "50 000", "100 000"],
    selected: "50 000",
    rows: [
      { label: "Montant", value: "50 000 XOF" },
      { label: "Frais (exemple)", value: "500 XOF" },
    ],
    total: { label: "Total", value: "50 500 XOF" },
    cta: "Confirmer l'achat",
  },
};

export const home = {
  greeting: "Bonjour, Kossi",
  balanceLabel: "Solde total",
  balance: "1 250 000 XOF",
  deposit: "Déposer",
  withdraw: "Retirer",
  marketsTitle: "Marchés",
  markets: [
    { name: "Titre exemple A", kind: "Action" },
    { name: "Titre exemple B", kind: "ETF" },
    { name: "Titre exemple C", kind: "Action" },
  ],
  tabs: ["Accueil", "Marchés", "Portefeuille", "Profil"],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions fréquentes",
  items: [
    {
      q: "Qui peut utiliser Méridien ?",
      a: "[À compléter : conditions d'accès, pays concernés, âge minimum.]",
    },
    {
      q: "Quels sont les frais ?",
      a: "Des frais de courtage s'appliquent à l'achat selon le montant investi. Ils sont affichés avant la confirmation. [Grille tarifaire à compléter.]",
    },
    {
      q: "Comment alimenter mon compte ?",
      a: "Par Mobile Money, carte bancaire ou virement. [Opérateurs et plafonds à compléter.]",
    },
    {
      q: "Mon argent est-il protégé ?",
      a: "[À compléter avec le cadre réglementaire et le partenaire agréé.] Tout investissement comporte des risques, y compris la perte en capital.",
    },
    {
      q: "Quand l'application sera-t-elle disponible ?",
      a: "Bientôt. Laissez votre e-mail dans la section Télécharger pour être prévenu.",
    },
  ],
};

export const footer = {
  tagline: "Vos marchés, où que le soleil se lève.",
  columns: [
    {
      title: "Produit",
      links: [
        { label: "Le projet", href: "/#projet" },
        { label: "Fonctionnalités", href: "/#fonctionnalites" },
        { label: "Télécharger", href: "/#telecharger" },
      ],
    },
    {
      title: "Aide",
      links: [
        { label: "FAQ", href: "/#faq" },
        { label: "Sécurité", href: "/#securite" },
        { label: "Contact", href: `mailto:${brand.email}` },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Conditions d'utilisation", href: "/conditions" },
        { label: "Confidentialité", href: "/confidentialite" },
      ],
    },
  ],
  disclaimer:
    "Investir comporte des risques, y compris la perte en capital. Les performances passées ne préjugent pas des performances futures. Les montants affichés sur ce site sont des exemples.",
};
