export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  email: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Aminata Diop',
    role: 'Directrice de Recherche',
    bio: 'Docteure en sciences politiques, spécialiste de la gouvernance locale et de la décentralisation en Afrique francophone. Plus de 15 ans d\'expérience dans la recherche et le conseil en politiques publiques.',
    expertise: ['Gouvernance locale', 'Décentralisation', 'Politique publique'],
    email: 'a.diop@apin-network.org',
    image: '/src/assets/team/aminata-diop.jpg'
  },
  {
    name: 'Prof. Ibrahim Konaté',
    role: 'Chercheur Principal - Énergie',
    bio: 'Professeur d\'économie de l\'énergie, expert en transition énergétique et développement durable. Consultant pour plusieurs organisations internationales.',
    expertise: ['Énergie renouvelable', 'Climat', 'Développement durable'],
    email: 'i.konate@apin-network.org',
    image: '/src/assets/team/ibrahim-konate.jpg'
  },
  {
    name: 'Dr. Fatou Diagne',
    role: 'Chercheuse Senior - Économie',
    bio: 'Économiste du développement spécialisée dans l\'intégration régionale et le commerce international. Ancienne conseillère à la CEDEAO.',
    expertise: ['Commerce international', 'Intégration régionale', 'ZLECAF'],
    email: 'f.diagne@apin-network.org',
    image: '/src/assets/team/fatou-diagne.jpg'
  },
  {
    name: 'Pr. Aly Mbaye',
    role: 'Économiste Senior',
    bio: 'Professeur d\'économie reconnu internationalement, spécialiste du développement économique africain et des politiques macroéconomiques. Ancien conseiller économique auprès de plusieurs gouvernements africains.',
    expertise: ['Économie du développement', 'Politiques macroéconomiques', 'Finances publiques'],
    email: 'a.mbaye@apin-network.org',
    image: '/src/assets/team/aly-mbaye.jpg'
  },
  {
    name: 'Alioune Tine',
    role: 'Expert en Droits Humains et Gouvernance',
    bio: 'Défenseur des droits humains de renommée internationale, expert en gouvernance démocratique et justice sociale. Fondateur de plusieurs organisations de la société civile en Afrique de l\'Ouest.',
    expertise: ['Droits humains', 'Gouvernance démocratique', 'Justice sociale'],
    email: 'a.tine@apin-network.org',
    image: '/src/assets/team/alioune-tine.jpg'
  }
];
