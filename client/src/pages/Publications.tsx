import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PublicationCard } from '@/components/PublicationCard';
import { publications } from '@/data/publications';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [themeFilter, setThemeFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const themes = Array.from(new Set(publications.map(p => p.theme)));
  const types = Array.from(new Set(publications.map(p => p.type)));

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = searchTerm === '' || 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTheme = themeFilter === 'all' || pub.theme === themeFilter;
    const matchesType = typeFilter === 'all' || pub.type === typeFilter;

    return matchesSearch && matchesTheme && matchesType;
  });

  const typeLabels: Record<string, string> = {
    'policy-brief': 'Policy Brief',
    'research': 'Recherche',
    'analysis': 'Analyse'
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Explorez nos recherches, analyses et policy briefs sur les enjeux de politiques 
            publiques en Afrique.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher par titre, mots-clés..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Theme Filter */}
            <Select value={themeFilter} onValueChange={setThemeFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les thèmes</SelectItem>
                {themes.map(theme => (
                  <SelectItem key={theme} value={theme}>{theme}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {typeLabels[type]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Reset */}
            {(searchTerm || themeFilter !== 'all' || typeFilter !== 'all') && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setThemeFilter('all');
                  setTypeFilter('all');
                }}
              >
                Réinitialiser
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredPublications.length} publication(s) trouvée(s)
            </p>
          </div>

          {filteredPublications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPublications.map((publication) => (
                <PublicationCard key={publication.slug} publication={publication} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Aucune publication ne correspond à vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
