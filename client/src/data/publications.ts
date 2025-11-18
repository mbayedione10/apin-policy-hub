export interface Publication {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
  theme: string;
  country: string;
  type: 'policy-brief' | 'research' | 'analysis';
  pdfUrl?: string;
  coverImage?: string;
}

export const publications: Publication[] = [
  {
    slug: 'reforme-gouvernance-locale-senegal',
    title: 'Réforme de la Gouvernance Locale au Sénégal',
    subtitle: 'Défis et opportunités pour la décentralisation',
    author: 'Dr. Aminata Diop',
    date: '2024-03-15',
    summary: 'Cette note examine les récentes réformes de la gouvernance locale au Sénégal, analysant les progrès réalisés en matière de décentralisation et les défis persistants en termes de capacités institutionnelles et de financement.',
    content: `# Introduction

La gouvernance locale au Sénégal traverse une période de transformation importante. Depuis l'adoption de l'Acte III de la décentralisation en 2013, le pays s'est engagé dans un processus ambitieux visant à renforcer le pouvoir des collectivités territoriales.

## Contexte historique

Le Sénégal a une longue tradition de décentralisation remontant aux années 1970. Cependant, les réformes actuelles représentent une rupture significative avec le passé.

### Les trois actes de la décentralisation

1. **Acte I (1972-1996)**: Création des communautés rurales
2. **Acte II (1996-2013)**: Régionalisation et renforcement des communes
3. **Acte III (2013-présent)**: Départementalisation et transfert massif de compétences

## Analyse des réformes récentes

### Transfert de compétences

Le transfert de compétences vers les collectivités locales concerne plusieurs domaines clés :

- **Éducation**: Gestion des écoles primaires et secondaires
- **Santé**: Centres de santé de proximité
- **Infrastructure**: Routes rurales et équipements publics
- **Environnement**: Gestion des ressources naturelles

### Défis de mise en œuvre

Malgré les avancées législatives, plusieurs obstacles subsistent :

1. **Capacités institutionnelles limitées**: Manque de personnel qualifié dans les collectivités
2. **Contraintes financières**: Insuffisance des transferts de ressources
3. **Coordination inter-niveaux**: Chevauchement des compétences entre niveaux

## Recommandations

Pour assurer le succès de la décentralisation, nous proposons :

- Renforcer les programmes de formation des élus et agents locaux
- Augmenter les dotations budgétaires aux collectivités
- Clarifier la répartition des compétences entre niveaux
- Améliorer les mécanismes de redevabilité

## Conclusion

La réforme de la gouvernance locale au Sénégal représente une opportunité historique de rapprocher l'État des citoyens. Son succès dépendra de la volonté politique et des ressources mobilisées.`,
    tags: ['gouvernance', 'décentralisation', 'réformes', 'Sénégal'],
    theme: 'Gouvernance',
    country: 'Sénégal',
    type: 'policy-brief',
    pdfUrl: '/documents/reforme-gouvernance-senegal.pdf'
  },
  {
    slug: 'transition-energetique-afrique-ouest',
    title: 'Transition Énergétique en Afrique de l\'Ouest',
    subtitle: 'Vers un mix énergétique durable',
    author: 'Prof. Ibrahim Konaté',
    date: '2024-02-28',
    summary: 'Cette étude explore les défis et opportunités de la transition énergétique en Afrique de l\'Ouest, mettant l\'accent sur le potentiel des énergies renouvelables et les politiques nécessaires pour accélérer cette transformation.',
    content: `# Introduction

L'Afrique de l'Ouest fait face à un défi énergétique majeur : répondre à une demande croissante tout en réduisant sa dépendance aux combustibles fossiles.

## État des lieux

### Situation énergétique actuelle

La région présente des caractéristiques contrastées :

- **Taux d'accès à l'électricité**: 52% en moyenne (données 2023)
- **Sources d'énergie**: Dominance des hydrocarbures et de la biomasse
- **Demande**: Croissance annuelle de 6-8%

### Potentiel des énergies renouvelables

L'Afrique de l'Ouest dispose d'un potentiel considérable :

1. **Solaire**: Ensoleillement exceptionnel (5-7 kWh/m²/jour)
2. **Hydraulique**: Bassins fluviaux importants (Niger, Sénégal, Volta)
3. **Éolien**: Zones côtières favorables
4. **Biomasse**: Ressources agricoles abondantes

## Cadre politique et réglementaire

### Initiatives régionales

La CEDEAO a adopté plusieurs instruments :

- Politique énergétique régionale
- Livre blanc sur les énergies renouvelables
- Centre régional pour les énergies renouvelables (ECREEE)

### Engagements nationaux

Les pays de la région ont pris des engagements ambitieux dans leurs CDN (Contributions Déterminées au niveau National).

## Obstacles et défis

### Barrières techniques

- Intermittence de certaines sources renouvelables
- Faiblesse des réseaux de transmission
- Manque de capacités de stockage

### Barrières financières

- Coûts d'investissement élevés
- Accès limité au financement
- Risques perçus par les investisseurs

### Barrières institutionnelles

- Cadres réglementaires inadaptés
- Manque de coordination entre acteurs
- Capacités institutionnelles limitées

## Recommandations stratégiques

Pour accélérer la transition énergétique, nous recommandons :

### Court terme (1-3 ans)

1. Harmoniser les cadres réglementaires régionaux
2. Créer des mécanismes de financement innovants
3. Renforcer les capacités techniques nationales

### Moyen terme (3-7 ans)

1. Développer les infrastructures de transmission régionale
2. Promouvoir les partenariats public-privé
3. Mettre en place des systèmes de stockage

### Long terme (7-15 ans)

1. Atteindre un mix énergétique avec 40% de renouvelables
2. Assurer l'accès universel à l'électricité
3. Créer une industrie régionale des équipements

## Conclusion

La transition énergétique en Afrique de l'Ouest est non seulement nécessaire mais également réalisable. Elle requiert une vision partagée et des actions concertées.`,
    tags: ['énergie', 'climat', 'développement durable', 'CEDEAO'],
    theme: 'Énergie et Climat',
    country: 'Afrique de l\'Ouest',
    type: 'research',
    pdfUrl: '/documents/transition-energetique-ao.pdf'
  },
  {
    slug: 'integration-economique-afrique',
    title: 'L\'Intégration Économique Africaine à l\'ère de la ZLECAF',
    subtitle: 'Perspectives et défis pour le commerce intra-africain',
    author: 'Dr. Fatou Diagne',
    date: '2024-01-20',
    summary: 'Cette analyse évalue l\'impact de la Zone de Libre-Échange Continentale Africaine (ZLECAF) sur l\'intégration économique du continent, identifiant les obstacles au commerce intra-africain et proposant des solutions pragmatiques.',
    content: `# Introduction

La Zone de Libre-Échange Continentale Africaine (ZLECAF), entrée en vigueur en 2021, représente l'initiative d'intégration économique la plus ambitieuse du continent africain.

## La ZLECAF en bref

### Objectifs principaux

- Créer un marché unique de 1,3 milliard de personnes
- Augmenter le commerce intra-africain de 52% d'ici 2025
- Faciliter la libre circulation des biens et services
- Poser les bases d'une union douanière continentale

### État de mise en œuvre

Au début 2024, 47 pays ont signé et 43 ont ratifié l'accord. Les échanges sous le régime ZLECAF ont débuté dans plusieurs pays.

## Commerce intra-africain : état des lieux

### Situation actuelle

Le commerce intra-africain reste faible comparé à d'autres régions :

- **Afrique**: 15-18% du commerce total
- **Europe**: 67%
- **Asie**: 59%
- **Amérique du Nord**: 31%

### Principaux partenaires commerciaux africains

1. Afrique du Sud
2. Égypte
3. Nigeria
4. Kenya
5. Maroc

## Obstacles au commerce intra-africain

### Barrières tarifaires et non-tarifaires

- Droits de douane élevés entre pays africains
- Multiplicité des contrôles aux frontières
- Standards techniques divergents
- Procédures d'importation complexes

### Défis infrastructurels

- Routes transfrontalières insuffisantes
- Ports congestionnés
- Absence de corridors de transport intégrés
- Connectivité limitée entre régions

### Obstacles institutionnels

- Faible capacité douanière
- Corruption aux frontières
- Manque d'information sur les marchés
- Cadres réglementaires fragmentés

## Opportunités de la ZLECAF

### Secteurs à fort potentiel

1. **Agriculture et agroalimentaire**: Complémentarités régionales importantes
2. **Industrie manufacturière**: Chaînes de valeur régionales
3. **Services**: Télécommunications, finance, transport
4. **Industries créatives**: Cinéma, musique, mode

### Bénéfices attendus

- Création de 18 millions d'emplois d'ici 2035
- Augmentation du PIB africain de 7%
- Réduction de la pauvreté extrême
- Diversification économique

## Recommandations politiques

### Mesures urgentes

1. **Simplification douanière**: Guichet unique électronique
2. **Harmonisation des normes**: Standards communs
3. **Facilitation du paiement**: Systèmes de paiement panafricains
4. **Information commerciale**: Plateforme digitale

### Investissements prioritaires

- Corridors de transport transfrontaliers
- Zones économiques spéciales
- Infrastructure numérique
- Capacités productives

### Réformes institutionnelles

- Renforcement des administrations douanières
- Création d'une cour commerciale africaine
- Mécanisme de règlement des différends
- Coordination des politiques industrielles

## Conclusion

La ZLECAF offre une opportunité historique de transformer l'économie africaine. Son succès dépendra de la volonté politique et de la capacité à surmonter les obstacles structurels au commerce intra-africain.`,
    tags: ['commerce', 'intégration', 'ZLECAF', 'développement'],
    theme: 'Économie et Commerce',
    country: 'Afrique',
    type: 'analysis',
    pdfUrl: '/documents/zlecaf-integration.pdf'
  }
];
