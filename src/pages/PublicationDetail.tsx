import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Download, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { publications } from '@/data/publications';

const PublicationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const publication = publications.find(p => p.slug === slug);

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Publication non trouvée</h1>
          <Button asChild>
            <Link to="/publications">Retour aux publications</Link>
          </Button>
        </div>
      </div>
    );
  }

  const typeLabels = {
    'policy-brief': 'Policy Brief',
    'research': 'Recherche',
    'analysis': 'Analyse'
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-muted py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-2">
            <Link to="/publications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux publications
            </Link>
          </Button>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{typeLabels[publication.type]}</Badge>
            <Badge variant="outline">{publication.theme}</Badge>
            <Badge variant="outline">{publication.country}</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{publication.title}</h1>
          
          {publication.subtitle && (
            <p className="text-xl text-muted-foreground mb-6">{publication.subtitle}</p>
          )}

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{publication.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(publication.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>

          {publication.pdfUrl && (
            <Button className="mb-6">
              <Download className="mr-2 h-4 w-4" />
              Télécharger le PDF
            </Button>
          )}

          <Separator className="mb-8" />

          {/* Summary */}
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-3">Résumé</h2>
            <p className="text-muted-foreground">{publication.summary}</p>
          </div>

          {/* Content */}
          <article className="prose prose-slate max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: publication.content
                  .replace(/^# /gm, '<h1>')
                  .replace(/\n# /g, '</h1><h1>')
                  .replace(/^## /gm, '<h2>')
                  .replace(/\n## /g, '</h2><h2>')
                  .replace(/^### /gm, '<h3>')
                  .replace(/\n### /g, '</h3><h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(?!<[h|p])(.*)/gm, '<p>$1</p>')
                  .replace(/^- /gm, '<li>')
                  .replace(/\n- /g, '</li><li>')
                  .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
                  .replace(/^(\d+)\. /gm, '<li>')
                  .replace(/\n(\d+)\. /g, '</li><li>')
              }}
            />
          </article>

          {/* Tags */}
          <div className="border-t pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Mots-clés:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {publication.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Publications */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Publications similaires</h2>
          <div className="text-muted-foreground">
            <p>À venir : Suggestions de publications similaires basées sur les thèmes et mots-clés.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicationDetail;
