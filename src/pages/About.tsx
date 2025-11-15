import { Target, Eye, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos d'APIN</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Africa Policy Intelligence Network, un think tank panafricain au service 
            d'une gouvernance éclairée.
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
                title: 'Gouvernance et Institutions',
                description: 'Décentralisation, réforme administrative, participation citoyenne'
              },
              {
                title: 'Économie et Commerce',
                description: 'Intégration régionale, ZLECAF, développement du secteur privé'
              },
              {
                title: 'Énergie et Climat',
                description: 'Transition énergétique, énergies renouvelables, changement climatique'
              },
              {
                title: 'Développement Social',
                description: 'Éducation, santé, protection sociale, inégalités'
              },
              {
                title: 'Agriculture et Sécurité Alimentaire',
                description: 'Transformation agricole, chaînes de valeur, résilience'
              },
              {
                title: 'Paix et Sécurité',
                description: 'Prévention des conflits, gouvernance sécuritaire, terrorisme'
              }
            ].map((domain) => (
              <Card key={domain.title}>
                <CardHeader>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Nos Partenaires</h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Nous collaborons avec des institutions académiques, des organisations 
            internationales, des gouvernements et des acteurs de la société civile pour 
            maximiser l'impact de nos recherches.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">
              Union Africaine
            </span>
            <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">
              CEDEAO
            </span>
            <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">
              Banque Africaine de Développement
            </span>
            <span className="bg-primary-foreground/10 px-4 py-2 rounded-full">
              Think Tanks Africains
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
