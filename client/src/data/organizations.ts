import africaJomLogo from '@/assets/org-logos/africa-jom-center.png';
import coappLogo from '@/assets/org-logos/coapp.png';

export interface Organization {
  id: string;
  name: string;
  acronym?: string;
  logo?: string;
  country: string;
  description: string;
  mission: string;
  expertiseAreas: string[];
  founded?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  keyProjects?: string[];
  partnerships?: string[];
}

export const organizations: Organization[] = [
  {
    id: "cedeao",
    name: "Communauté Économique des États de l'Afrique de l'Ouest",
    acronym: "CEDEAO",
    country: "Nigeria",
    description: "Organisation régionale regroupant quinze pays d'Afrique de l'Ouest, œuvrant pour l'intégration économique et la coopération régionale.",
    mission: "Promouvoir la coopération et l'intégration dans la perspective d'une Union Économique de l'Afrique de l'Ouest en vue d'élever le niveau de vie de ses peuples.",
    expertiseAreas: [
      "Intégration économique régionale",
      "Sécurité et paix",
      "Libre circulation des personnes",
      "Politique monétaire",
    ],
    founded: "1975",
    website: "https://www.ecowas.int",
    email: "info@ecowas.int",
    address: "Abuja, Nigeria",
    keyProjects: [
      "Mise en place d'une monnaie unique",
      "Programme de libre circulation des personnes",
      "Initiatives de sécurité régionale",
    ],
    partnerships: ["Union Africaine", "Nations Unies", "Union Européenne"],
  },
  {
    id: "african-union",
    name: "Union Africaine",
    acronym: "UA",
    country: "Éthiopie",
    description: "Organisation continentale composée de 55 États membres qui œuvre pour l'intégration politique et socio-économique du continent africain.",
    mission: "Réaliser une plus grande unité et solidarité entre les pays africains et promouvoir la paix, la sécurité et la stabilité sur le continent.",
    expertiseAreas: [
      "Gouvernance et démocratie",
      "Paix et sécurité",
      "Développement économique",
      "Intégration continentale",
    ],
    founded: "2002",
    website: "https://au.int",
    email: "webmaster@africa-union.org",
    address: "Addis-Abeba, Éthiopie",
    keyProjects: [
      "Agenda 2063",
      "Zone de libre-échange continentale africaine",
      "Architecture africaine de paix et de sécurité",
    ],
    partnerships: ["Nations Unies", "Union Européenne", "NEPAD"],
  },
  {
    id: "waemu",
    name: "Union Économique et Monétaire Ouest Africaine",
    acronym: "UEMOA",
    country: "Burkina Faso",
    description: "Organisation de huit États d'Afrique de l'Ouest partageant une monnaie commune, le franc CFA.",
    mission: "Réaliser l'intégration économique des États membres à travers le renforcement de la compétitivité des activités économiques dans le cadre d'un marché ouvert et concurrentiel.",
    expertiseAreas: [
      "Union monétaire",
      "Harmonisation fiscale",
      "Politiques sectorielles communes",
      "Développement économique",
    ],
    founded: "1994",
    website: "https://www.uemoa.int",
    email: "commission@uemoa.int",
    address: "Ouagadougou, Burkina Faso",
    keyProjects: [
      "Harmonisation des politiques économiques",
      "Surveillance multilatérale",
      "Marché commun",
    ],
    partnerships: ["CEDEAO", "BCEAO", "France"],
  },
  {
    id: "africa-jom-center",
    name: "Africa Jom Center",
    acronym: "AJC",
    logo: africaJomLogo,
    country: "Sénégal",
    description: "Centre de recherche et d'innovation dédié au développement des politiques publiques en Afrique de l'Ouest, avec un focus particulier sur le Sénégal.",
    mission: "Promouvoir l'excellence dans la recherche en politiques publiques et accompagner les décideurs africains dans la formulation de politiques innovantes et inclusives.",
    expertiseAreas: [
      "Recherche en politiques publiques",
      "Innovation sociale",
      "Développement durable",
      "Gouvernance locale",
    ],
    founded: "2015",
    website: "https://www.africajomcenter.org",
    email: "contact@africajomcenter.org",
    address: "Dakar, Sénégal",
    keyProjects: [
      "Programme de recherche sur les politiques éducatives",
      "Initiative pour la gouvernance participative",
      "Observatoire des politiques de santé publique",
    ],
    partnerships: ["APIN", "Universités sénégalaises", "ONG locales"],
  },
  {
    id: "coapp",
    name: "Centre Ouest-Africain de Politiques Publiques",
    acronym: "COAPP",
    logo: coappLogo,
    country: "Sénégal",
    description: "Think Tank indépendant dédié à l'analyse, à la coconstruction et à l'évaluation des politiques publiques en Afrique de l'Ouest. Le COAPP œuvre pour renforcer la souveraineté intellectuelle du continent en produisant des connaissances rigoureuses et accessibles, en favorisant le dialogue entre chercheurs, décideurs, OSC, jeunes et citoyens, et en contribuant à la formulation de réformes publiques adaptées aux réalités africaines.",
    mission: "Produire et diffuser une expertise accessible, rigoureuse et contextualisée. Influencer les décisions publiques grâce à des analyses fondées sur des données fiables. Promouvoir la participation citoyenne et l'engagement des jeunes dans les débats publics. Créer une passerelle structurée entre science, politique et société. Soutenir une dynamique panafricaine de construction et de diffusion du savoir.",
    expertiseAreas: [
      "Souveraineté intellectuelle",
      "Analyse et Recherche en politiques publiques",
      "Communication publique et production de contenus",
      "Dialogue, participation et formation citoyenne",
      "Innovation et engagement citoyen",
      "Veille stratégique régionale",
    ],
    founded: "2018",
    website: "https://www.coapp.org",
    email: "info@coapp.org",
    address: "Dakar, Sénégal",
    keyProjects: [
      "Hackathon annuel du COAPP (innovation éducative, climatique, sociale et citoyenne)",
      "Production de notes politiques et études stratégiques",
      "Capsules vidéo et contenus pédagogiques",
      "Webinaires et dialogues intergénérationnels",
      "Podcast mensuel avec chercheurs et praticiens",
      "Site web - espace central de ressources (analyses, vidéos, podcasts)",
    ],
    partnerships: ["CEDEAO", "UEMOA", "Universités africaines", "OSC régionales", "Médias panafricains", "Fondations internationales"],
  },
];
