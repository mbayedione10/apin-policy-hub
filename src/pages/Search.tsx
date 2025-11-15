import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PublicationCard } from '@/components/PublicationCard';
import { publications } from '@/data/publications';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const results = searchTerm.trim() === '' ? [] : publications.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recherche</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Recherchez dans nos publications, articles et ressources.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="relative mb-12">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher par titre, mots-clés, contenu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg"
              autoFocus
            />
          </div>

          {/* Results */}
          {searchTerm.trim() !== '' && (
            <div>
              <p className="text-lg mb-6">
                {results.length} résultat(s) trouvé(s) pour "{searchTerm}"
              </p>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((publication) => (
                    <PublicationCard key={publication.slug} publication={publication} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>Aucun résultat trouvé.</p>
                  <p className="mt-2 text-sm">
                    Essayez avec d'autres mots-clés.
                  </p>
                </div>
              )}
            </div>
          )}

          {searchTerm.trim() === '' && (
            <div className="text-center text-muted-foreground">
              <p>Entrez un terme de recherche pour commencer.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
