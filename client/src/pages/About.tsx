import { Target, Eye, Users, Globe, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import researchImage from '@/assets/research-team.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={researchImage} alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos d'APIN</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Africa Policy Intelligence Network, un réseau panafricain au service 
            d'une gouvernance éclairée et d'un leadership intellectuel fort.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-accent mb-4" />
                <h2 className="text-2xl font-bold">Notre Mission</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  APIN a pour mission de produire des recherches rigoureuses et des analyses 
                  pertinentes sur les enjeux de politiques publiques en Afrique. Nous 
                  accompagnons les décideurs dans la formulation de politiques fondées sur 
                  des données probantes, contribuant ainsi au développement durable du continent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h2 className="text-2xl font-bold">Notre Vision</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous aspirons à devenir le centre de référence en matière d'analyse de 
                  politiques publiques en Afrique, reconnu pour l'excellence de nos recherches 
                  et l'impact de nos recommandations. Notre vision est celle d'une Afrique où 
                  les décisions politiques sont éclairées par la recherche et l'expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rigueur</h3>
              <p className="text-muted-foreground">
                Nous appliquons les méthodes de recherche les plus rigoureuses pour garantir 
                la qualité et la fiabilité de nos analyses.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Indépendance</h3>
              <p className="text-muted-foreground">
                Notre travail est guidé par la recherche de la vérité, libre de toute 
                influence politique ou partisane.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pertinence</h3>
              <p className="text-muted-foreground">
                Nous concentrons nos efforts sur les questions qui ont un impact réel sur 
                le développement du continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains of Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Nos Domaines d'Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Gouvernance et Institutions',
                description: 'Décentralisation, réforme administrative, participation citoyenne'
              },
              {
                icon: TrendingUp,
                title: 'Économie et Commerce',
                description: 'Intégration régionale, ZLECAF, développement du secteur privé'
              },
              {
                icon: Lightbulb,
                title: 'Énergie et Climat',
                description: 'Transition énergétique, énergies renouvelables, changement climatique'
              },
              {
                icon: Users,
                title: 'Développement Social',
                description: 'Éducation, santé, protection sociale, inégalités'
              },
              {
                icon: Globe,
                title: 'Agriculture et Sécurité Alimentaire',
                description: 'Transformation agricole, chaînes de valeur, résilience'
              },
              {
                icon: Target,
                title: 'Paix et Sécurité',
                description: 'Prévention des conflits, gouvernance sécuritaire, terrorisme'
              }
            ].map((domain) => (
              <Card key={domain.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <domain.icon className="h-10 w-10 text-accent mb-3" />
                  <h3 className="text-lg font-semibold">{domain.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{domain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Notre Réseau de Partenaires</h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              APIN collabore avec des institutions académiques de premier plan, des organisations 
              internationales, des gouvernements et des acteurs de la société civile pour 
              maximiser l'impact de nos recherches et construire un écosystème de production 
              de savoirs au service des politiques publiques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary-foreground mb-2">Institutions Régionales</h3>
                <ul className="text-sm text-primary-foreground/80 space-y-1">
                  <li>• CEDEAO</li>
                  <li>• Union Africaine</li>
                  <li>• UEMOA</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary-foreground mb-2">Partenaires de Développement</h3>
                <ul className="text-sm text-primary-foreground/80 space-y-1">
                  <li>• Banque Africaine de Développement</li>
                  <li>• Global Development Network</li>
                  <li>• AFD (Savoirs Sahel)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary-foreground mb-2">Think Tanks & Universités</h3>
                <ul className="text-sm text-primary-foreground/80 space-y-1">
                  <li>• Laboratoire d'Analyse des Politiques</li>
                  <li>• West Africa Center for Public Policy</li>
                  <li>• Instituts de recherche régionaux</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
