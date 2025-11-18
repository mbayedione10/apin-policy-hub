import { team } from '@/data/team';
import TeamMemberCard from '@/components/TeamMemberCard';

const Team = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Une équipe pluridisciplinaire d'experts passionnés par les politiques publiques africaines.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.email} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Rejoignez-nous</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Nous recherchons constamment des chercheurs talentueux et passionnés 
            pour rejoindre notre équipe.
          </p>
          <a 
            href="mailto:recrutement@apin-network.org"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Postuler
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
