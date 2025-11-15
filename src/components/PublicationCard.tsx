import { Link } from 'react-router-dom';
import { Calendar, User, FileText } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Publication } from '@/data/publications';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard = ({ publication }: PublicationCardProps) => {
  const typeLabels = {
    'policy-brief': 'Policy Brief',
    'research': 'Recherche',
    'analysis': 'Analyse'
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{typeLabels[publication.type]}</Badge>
          <Badge variant="outline">{publication.theme}</Badge>
        </div>
        <Link to={`/publications/${publication.slug}`}>
          <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors line-clamp-2">
            {publication.title}
          </h3>
        </Link>
        {publication.subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{publication.subtitle}</p>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {publication.summary}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {publication.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{publication.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(publication.date).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>

        <Link
          to={`/publications/${publication.slug}`}
          className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
        >
          <FileText className="h-4 w-4" />
          Lire la suite
        </Link>
      </CardFooter>
    </Card>
  );
};
