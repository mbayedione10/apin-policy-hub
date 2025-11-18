export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'conference' | 'webinar' | 'workshop' | 'seminar';
  description: string;
  speakers: string[];
  registrationUrl?: string;
  isOnline: boolean;
}

export const events: Event[] = [
  {
    slug: 'conference-gouvernance-2024',
    title: 'Conférence Annuelle sur la Gouvernance en Afrique',
    date: '2024-06-15',
    time: '09:00 - 17:00',
    location: 'Dakar, Sénégal',
    type: 'conference',
    description: 'Notre conférence annuelle réunit décideurs politiques, chercheurs et acteurs de la société civile pour débattre des enjeux de gouvernance en Afrique. Cette édition se concentrera sur la décentralisation et la participation citoyenne.',
    speakers: ['Dr. Aminata Diop', 'Prof. Ibrahim Konaté', 'Hon. Marie Sow'],
    registrationUrl: 'https://example.com/register',
    isOnline: false
  },
  {
    slug: 'webinar-transition-energetique',
    title: 'Webinaire: Financer la Transition Énergétique',
    date: '2024-04-20',
    time: '14:00 - 16:00',
    location: 'En ligne',
    type: 'webinar',
    description: 'Ce webinaire explore les mécanismes de financement innovants pour accélérer la transition énergétique en Afrique de l\'Ouest. Experts financiers et décideurs politiques partageront leurs perspectives.',
    speakers: ['Dr. Fatou Diagne', 'M. Jean-Pierre Mensah'],
    registrationUrl: 'https://example.com/webinar',
    isOnline: true
  }
];
