import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PublicationCard } from '@/components/PublicationCard';
import { EventCard } from '@/components/EventCard';
import { publications } from '@/data/publications';
import { events } from '@/data/events';

const Home = () => {
  const latestPublications = publications.slice(0, 3);
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Éclairer les politiques publiques en Afrique
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              APIN est un think tank panafricain dédié à la recherche, l'analyse et la 
              promotion de politiques publiques éclairées pour un développement durable 
              du continent africain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/publications">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Nos publications
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/a-propos">
                  En savoir plus
                </Link>
              </Button>
            </div>
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

      {/* Upcoming Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Événements à venir
              </h2>
              <p className="text-muted-foreground">
                Rejoignez-nous lors de nos prochains événements
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link to="/evenements">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
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
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link to="/contact">
                S'abonner à la newsletter
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-foreground/80">Publications</div>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">Chercheurs</div>
            </div>
            <div>
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-primary-foreground/80">Événements/an</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
