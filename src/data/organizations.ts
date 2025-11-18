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
];
