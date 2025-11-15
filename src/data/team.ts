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
    email: 'a.diop@apin-network.org'
  },
  {
    name: 'Prof. Ibrahim Konaté',
    role: 'Chercheur Principal - Énergie',
    bio: 'Professeur d\'économie de l\'énergie, expert en transition énergétique et développement durable. Consultant pour plusieurs organisations internationales.',
    expertise: ['Énergie renouvelable', 'Climat', 'Développement durable'],
    email: 'i.konate@apin-network.org'
  },
  {
    name: 'Dr. Fatou Diagne',
    role: 'Chercheuse Senior - Économie',
    bio: 'Économiste du développement spécialisée dans l\'intégration régionale et le commerce international. Ancienne conseillère à la CEDEAO.',
    expertise: ['Commerce international', 'Intégration régionale', 'ZLECAF'],
    email: 'f.diagne@apin-network.org'
  }
];
