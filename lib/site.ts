export const SITE = {
  name: "Solène Mialot",
  role: "Psychologue clinicienne",
  tagline: "Psychologue clinicienne à Saint-Jean – Cabinet et téléconsultation",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solenemialot-psy.fr",
  doctolib: "https://www.doctolib.fr/psychologue/pin-balma/solene-mialot",
  address: {
    street: "22 boulevard des Pensées",
    city: "31240 Saint-Jean",
    note: "près de Toulouse",
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
  duration: "1 heure",
  payment: "Espèces, virement, carte bancaire",
  access: "Rez-de-chaussée — places disponibles pour la patientèle devant le cabinet",
  public: "Adultes",
} as const;

export const NAV = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Qui suis-je" },
  { href: "/accompagnement", label: "Mon accompagnement" },
  { href: "/infos", label: "Tarifs et modalités" },
] as const;

export const MOTIVES = [
  "anxiété, stress et ruminations",
  "manque de confiance ou difficultés d’estime de soi",
  "difficultés relationnelles et affectives",
  "peur de l’abandon, difficultés à poser ses limites",
  "événements douloureux ou traumatiques",
  "deuil, séparation ou changement important",
  "difficultés liées à une période de transition",
  "sentiment de mal-être, épuisement émotionnel ou perte de repères",
  "répétition de certains fonctionnements ou situations dans votre vie",
] as const;

export const FORMATIONS = [
  {
    year: "2026",
    title: "Psychopathologie de la périnatalité — MOOC",
  },
  {
    year: "2024",
    title: "Initiation à la psychogénéalogie",
  },
  {
    year: "2024",
    title: "Pratique de la thérapie des schémas — CEFTI",
  },
  {
    year: "2022",
    title: "Formation Praticienne Hypnose ericksonienne — EFPNL",
  },
  {
    year: "2017",
    title: "Thérapie EMDR — EFPE (31)",
  },
  {
    year: "2017",
    title:
      "Formation « Trouble de Stress Post-traumatique et Deuil Compliqué » — FUN-MOOC",
  },
  {
    year: "2017",
    title:
      "Master en psychologie clinique, psychopathologie et psychologie de la santé — Accompagnement des personnes en situation de dépendance — Institut Catholique de Toulouse (ICT)",
  },
  {
    year: "2014",
    title:
      "D.U. Psychologie interculturelle — Université de Bordeaux (Victor Segalen) UFR II — Bordeaux",
  },
  {
    year: "2014",
    title: "D.I.U. Addictologie — Université de Tours",
  },
  {
    year: "2011",
    title:
      "Licence de psychologie clinique — Université de Bordeaux (Victor Segalen) UFR II — Bordeaux",
  },
] as const;

export type FaqItem = { question: string; answer: string };

export const FAQ = {
  home: [
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Les rendez-vous se prennent en ligne sur Doctolib, pour une séance au cabinet ou en téléconsultation. Cliquez sur le bouton « Prendre rendez-vous ».",
    },
    {
      question: "Où se trouve le cabinet ?",
      answer:
        "Le cabinet se situe au 22 boulevard des Pensées, 31240 Saint-Jean, près de Toulouse, au rez-de-chaussée. Des places sont disponibles pour la patientèle devant le cabinet.",
    },
    {
      question: "Proposez-vous des consultations en téléconsultation ?",
      answer:
        "Oui. Les consultations sont proposées au cabinet et en téléconsultation, selon votre situation et votre organisation.",
    },
    {
      question: "Quel est le tarif d’une séance ?",
      answer:
        "La consultation est à 60 € pour une heure, au cabinet comme en téléconsultation.",
    },
  ],
  accompagnement: [
    {
      question: "Qu’est-ce que la thérapie EMDR ?",
      answer:
        "L’EMDR (Eye Movement Desensitization and Reprocessing) est une approche thérapeutique permettant de travailler sur les conséquences psychologiques d’expériences difficiles ou traumatiques, afin qu’elles puissent progressivement être intégrées de manière plus apaisée.",
    },
    {
      question: "Qu’est-ce que l’hypnose ericksonienne ?",
      answer:
        "L’hypnose ericksonienne s’appuie sur les ressources et les capacités naturelles de changement de chaque personne. Vous restez acteur ou actrice de la séance et conscient(e) de ce qui se passe.",
    },
    {
      question: "Qu’est-ce que la thérapie des schémas ?",
      answer:
        "Elle permet de mieux comprendre certains fonctionnements qui se répètent dans votre vie, notamment dans vos relations ou votre rapport à vous-même, et de travailler progressivement sur les besoins qui se trouvent derrière ces fonctionnements.",
    },
    {
      question: "Pour qui s’adresse l’accompagnement ?",
      answer:
        "Je reçois les adultes au cabinet à Saint-Jean et en téléconsultation.",
    },
  ],
  cabinet: [
    {
      question: "Qui êtes-vous ?",
      answer:
        "Je suis Solène Mialot, psychologue clinicienne à Saint-Jean. Je reçois les adultes au cabinet et en téléconsultation, avec une approche intégrative (EMDR, thérapie des schémas, hypnose ericksonienne).",
    },
    {
      question: "Comment se rendre au cabinet ?",
      answer:
        "Le cabinet se situe au 22 boulevard des Pensées, 31240 Saint-Jean. L’accès se fait au rez-de-chaussée, sans ascenseur.",
    },
    {
      question: "Y a-t-il un parking ?",
      answer:
        "Oui, des places sont disponibles pour la patientèle devant le cabinet.",
    },
    {
      question: "Puis-je consulter à distance ?",
      answer:
        "Oui. Les consultations en téléconsultation sont proposées lorsque ce format correspond davantage à votre situation.",
    },
  ],
  infos: [
    {
      question: "Quel est le tarif des consultations ?",
      answer:
        "60 € pour une consultation d’une heure, au cabinet comme en téléconsultation.",
    },
    {
      question: "Les séances sont-elles remboursées ?",
      answer:
        "Les consultations psychologiques ne sont pas prises en charge par l’Assurance Maladie. Certaines complémentaires santé proposent toutefois une participation. Il est conseillé de vous renseigner auprès de votre mutuelle.",
    },
    {
      question: "Quels moyens de paiement sont acceptés ?",
      answer: "Espèces, virement et carte bancaire.",
    },
    {
      question: "Quelle est la politique d’annulation ?",
      answer:
        "Veuillez respecter un délai de 24 h pour tout report ou annulation. Passé ce délai, la séance est due.",
    },
  ],
} satisfies Record<string, FaqItem[]>;
