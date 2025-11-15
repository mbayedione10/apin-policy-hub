import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  const typeLabels = {
    'conference': 'Conférence',
    'webinar': 'Webinaire',
    'workshop': 'Atelier',
    'seminar': 'Séminaire'
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary">{typeLabels[event.type]}</Badge>
          {event.isOnline && (
            <Badge className="bg-accent text-accent-foreground">En ligne</Badge>
          )}
        </div>
        <Link to={`/evenements/${event.slug}`}>
          <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            {event.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {event.description}
        </p>

        {event.speakers.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <Users className="h-4 w-4" />
              <span>Intervenants:</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              {event.speakers.map((speaker) => (
                <li key={speaker}>• {speaker}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter>
        {event.registrationUrl ? (
          <Button asChild className="w-full">
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
              S'inscrire
            </a>
          </Button>
        ) : (
          <Button variant="outline" asChild className="w-full">
            <Link to={`/evenements/${event.slug}`}>
              En savoir plus
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
