export const SITE = {
  name: "Solène Mialot",
  role: "Psychologue clinicienne",
  tagline:
    "Praticienne EMDR Europe et praticienne en hypnose ericksonienne",
  doctolib: "https://www.doctolib.fr/psychologue/pin-balma/solene-mialot",
  address: {
    street: "22 boulevard des Pensées",
    city: "31240 Saint-Jean",
    note: "et non plus à Balma",
    maps: "https://www.google.com/maps/search/?api=1&query=22+boulevard+des+Pens%C3%A9es+31240+Saint-Jean",
    embed:
      "https://maps.google.com/maps?q=22%20boulevard%20des%20Pens%C3%A9es%2031240%20Saint-Jean&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  hours: [
    { day: "Mardi — Vendredi", time: "9h00 – 17h00" },
    { day: "Samedi", time: "10h00 – 13h30" },
    { day: "Dimanche — Lundi", time: "Fermé" },
  ],
  price: "60 €",
  payment: "Espèces, carte bancaire, virement",
  access: "Rez-de-chaussée, parking gratuit",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/accompagnement", label: "Accompagnement" },
  { href: "/cabinet", label: "Le cabinet" },
  { href: "/infos", label: "Infos pratiques" },
] as const;

export type FaqItem = { question: string; answer: string };

export const FAQ = {
  home: [
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Les rendez-vous se prennent en ligne sur Doctolib, pour une séance au cabinet ou en visio. Cliquez sur le bouton « Réserver sur Doctolib ».",
    },
    {
      question: "Où se trouve le nouveau cabinet ?",
      answer:
        "Le cabinet n’est plus à Balma. Vous me retrouvez désormais au 22 boulevard des Pensées, 31240 Saint-Jean, au rez-de-chaussée, avec parking gratuit.",
    },
    {
      question: "Proposez-vous des consultations en visio ?",
      answer:
        "Oui. Les premières séances et les suivis sont possibles au cabinet comme en visio, selon vos besoins.",
    },
    {
      question: "Quel est le tarif d’une séance ?",
      answer:
        "La première consultation et les séances de suivi sont à 60 €, au cabinet comme en visio.",
    },
  ],
  accompagnement: [
    {
      question: "Qu’est-ce que la thérapie EMDR ?",
      answer:
        "L’EMDR (Eye Movement Desensitization and Reprocessing) permet de retraiter des souvenirs traumatiques et des blocages émotionnels. Praticienne EMDR Europe, j’accompagne ce travail dans un cadre sécurisant.",
    },
    {
      question: "Qu’est-ce que l’hypnose ericksonienne ?",
      answer:
        "C’est une hypnose douce, collaborative, qui s’appuie sur vos ressources inconscientes pour apaiser, transformer des schémas limitants et avancer à votre rythme.",
    },
    {
      question: "Faut-il choisir entre EMDR et hypnose ?",
      answer:
        "Non. Selon votre situation, l’une ou l’autre approche — ou les deux — peut être proposée. Nous en parlons ensemble dès les premiers échanges.",
    },
    {
      question: "Pour qui s’adresse l’accompagnement ?",
      answer:
        "Je reçois notamment autour de la psychologie clinique, du psychotraumatisme, des troubles anxieux, de l’addictologie et de l’entretien motivationnel.",
    },
  ],
  cabinet: [
    {
      question: "Comment se rendre au cabinet ?",
      answer:
        "Le cabinet se situe au 22 boulevard des Pensées, 31240 Saint-Jean. L’accès se fait au rez-de-chaussée, sans ascenseur.",
    },
    {
      question: "Y a-t-il un parking ?",
      answer:
        "Oui, un parking gratuit est disponible sur place.",
    },
    {
      question: "Puis-je consulter à distance ?",
      answer:
        "Oui. Les consultations en visio sont proposées pour une première séance comme pour un suivi.",
    },
    {
      question: "Le cabinet est-il toujours à Balma ?",
      answer:
        "Non. Le cabinet a déménagé : je vous reçois désormais à Saint-Jean, et non plus à Balma.",
    },
  ],
  infos: [
    {
      question: "Quels sont les horaires ?",
      answer:
        "Mardi à vendredi de 9h00 à 17h00, samedi de 10h00 à 13h30. Fermé le dimanche et le lundi.",
    },
    {
      question: "Quel est le tarif des consultations ?",
      answer:
        "60 € pour une première consultation ou une séance de suivi, au cabinet comme en visio.",
    },
    {
      question: "Les séances sont-elles remboursées ?",
      answer:
        "Les consultations ne sont pas prises en charge par l’Assurance Maladie. Certaines mutuelles peuvent proposer un remboursement.",
    },
    {
      question: "Quels moyens de paiement sont acceptés ?",
      answer:
        "Espèces, carte bancaire et virement.",
    },
  ],
} satisfies Record<string, FaqItem[]>;
