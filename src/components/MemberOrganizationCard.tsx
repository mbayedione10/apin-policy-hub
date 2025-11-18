import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin } from 'lucide-react';
import { Organization } from '@/data/organizations';
import { Link } from 'react-router-dom';

interface MemberOrganizationCardProps {
  organization: Organization;
}

const MemberOrganizationCard = ({ organization }: MemberOrganizationCardProps) => {
  return (
    <Link to={`/membres/${organization.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              {organization.logo ? (
                <img
                  src={organization.logo}
                  alt={`Logo ${organization.name}`}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <Building2 className="w-8 h-8 text-primary" />
              )}
            </div>
          </div>
          <CardTitle className="text-xl mb-2">
            {organization.acronym || organization.name}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            {organization.country}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {organization.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {organization.expertiseAreas.slice(0, 3).map((area) => (
              <Badge key={area} variant="secondary" className="text-xs">
                {area}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MemberOrganizationCard;
