import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, TrendingUp, Globe, Lightbulb, Network, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PublicationCard } from '@/components/PublicationCard';
import { publications } from '@/data/publications';
import { useCountUp } from '@/hooks/useCountUp';
import heroImage from '@/assets/hero-discussion.jpg';
import researchImage from '@/assets/research-team.jpg';
import networkImage from '@/assets/network-abstract.jpg';

const Home = () => {
  const latestPublications = publications.slice(0, 3);
  
  const publicationsCount = useCountUp({ end: 150, duration: 2000 });
  const researchersCount = useCountUp({ end: 25, duration: 2000 });
  const countriesCount = useCountUp({ end: 12, duration: 2000 });
  const eventsCount = useCountUp({ end: 30, duration: 2000 });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Think tank discussion" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <span className="text-accent font-medium">Africa Policy Intelligence Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground animate-fade-in">
              Renforcer le leadership intellectuel africain
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/95 leading-relaxed">
              Un réseau panafricain de think tanks produisant des connaissances rigoureuses 
              et accessibles pour éclairer les décisions publiques et façonner un avenir 
              durable pour l'Afrique.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <Link to="/publications">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Nos publications
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                <Link to="/a-propos">
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{publicationsCount}+</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{researchersCount}+</div>
              <div className="text-sm text-muted-foreground">Chercheurs experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{countriesCount}</div>
              <div className="text-sm text-muted-foreground">Pays couverts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{eventsCount}+</div>
              <div className="text-sm text-muted-foreground">Événements/an</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                APIN s'inscrit dans une initiative stratégique de renforcement du leadership 
                intellectuel ouest-africain. Nous structurons un réseau régional de think tanks 
                capables de produire des analyses rigoureuses, neutres et fondées sur des données 
                probantes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Légitimité & Crédibilité</h3>
                    <p className="text-sm text-muted-foreground">
                      Positionner les think tanks comme partenaires de confiance pour les gouvernements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <Network className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Réseau Régional</h3>
                    <p className="text-sm text-muted-foreground">
                      Mutualiser les expertises et mener des actions de plaidoyer concertées
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Influence Accrue</h3>
                    <p className="text-sm text-muted-foreground">
                      Co-construire des analyses utiles à la prise de décision publique
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={researchImage} 
                alt="Recherche et analyse" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Domaines d'Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nos recherches couvrent les enjeux stratégiques du développement africain
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Gouvernance & Institutions', desc: 'Décentralisation, réformes administratives, participation citoyenne' },
              { icon: TrendingUp, title: 'Économie & Commerce', desc: 'Intégration régionale, ZLECAF, secteur privé' },
              { icon: Lightbulb, title: 'Énergie & Climat', desc: 'Transition énergétique, énergies renouvelables' },
              { icon: Globe, title: 'Agriculture & Sécurité', desc: 'Transformation agricole, sécurité alimentaire' },
              { icon: Award, title: 'Développement Social', desc: 'Éducation, santé, protection sociale' },
              { icon: Network, title: 'Paix & Sécurité', desc: 'Prévention des conflits, gouvernance sécuritaire' }
            ].map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <domain.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{domain.title}</h3>
                  <p className="text-sm text-muted-foreground">{domain.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section with Background */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={networkImage} alt="Network" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un Réseau Panafricain d'Excellence
            </h2>
            <p className="text-lg text-primary-foreground/90">
              APIN coordonne un écosystème de think tanks, instituts de recherche et experts 
              à travers l'Afrique de l'Ouest pour maximiser l'impact de nos travaux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <div className="text-primary-foreground/90 mb-4">Policy briefs/mois</div>
                <p className="text-sm text-primary-foreground/80">
                  Publications régulières sur des sujets stratégiques
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">2</div>
                <div className="text-primary-foreground/90 mb-4">Colloques régionaux/an</div>
                <p className="text-sm text-primary-foreground/80">
                  Événements majeurs rassemblant décideurs et experts
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-primary-foreground/90 mb-4">Fondé sur données</div>
                <p className="text-sm text-primary-foreground/80">
                  Analyses rigoureuses et méthodologie scientifique
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Dernières publications
              </h2>
              <p className="text-muted-foreground">
                Nos analyses et recherches les plus récentes
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/publications">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPublications.map((publication) => (
              <PublicationCard key={publication.slug} publication={publication} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Restez informé
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos dernières publications, 
              analyses et informations sur nos événements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
