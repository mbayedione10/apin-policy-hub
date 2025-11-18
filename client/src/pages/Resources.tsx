import { FileText, Database, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Resources = () => {
  const resources = [
    {
      title: 'Rapports annuels',
      description: 'Accédez à nos rapports d\'activité et bilans annuels.',
      icon: FileText,
      items: ['Rapport 2023', 'Rapport 2022', 'Rapport 2021']
    },
    {
      title: 'Jeux de données',
      description: 'Téléchargez nos bases de données sur les politiques publiques africaines.',
      icon: Database,
      items: ['Données gouvernance', 'Données économiques', 'Indicateurs sociaux']
    },
    {
      title: 'Infographies',
      description: 'Visualisations et synthèses graphiques de nos recherches.',
      icon: BarChart,
      items: ['Infographies 2024', 'Infographies 2023']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ressources</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Accédez à nos rapports, jeux de données et autres ressources documentaires.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Card key={resource.title}>
                <CardHeader>
                  <resource.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item) => (
                      <li key={item}>
                        <a 
                          href="#" 
                          className="text-sm text-primary hover:underline flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
