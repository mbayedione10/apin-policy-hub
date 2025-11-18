import { organizations } from '@/data/organizations';
import MemberOrganizationCard from '@/components/MemberOrganizationCard';

const Organizations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Organisations</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Découvrez les organisations qui collaborent avec APIN pour promouvoir 
            l'excellence en matière de politiques publiques africaines.
          </p>
        </div>
      </section>

      {/* Organizations Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((organization) => (
              <MemberOrganizationCard key={organization.id} organization={organization} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Devenir Organisation Partenaire</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Votre organisation souhaite rejoindre le réseau APIN ? 
            Contactez-nous pour découvrir les opportunités de collaboration.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
};

export default Organizations;
