
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin } from 'lucide-react';
import { Organization } from '@/data/organizations';
import { Link } from 'wouter';

interface MemberOrganizationCardProps {
  organization: Organization;
}

const MemberOrganizationCard = ({ organization }: MemberOrganizationCardProps) => {
  return (
    <Link href={`/organisations/${organization.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
              {organization.logo ? (
                <img
                  src={organization.logo}
                  alt={`Logo ${organization.name}`}
                  className="w-14 h-14 object-contain"
                />
              ) : (
                <Building2 className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl mb-1 line-clamp-2">
                {organization.name}
              </CardTitle>
              {organization.acronym && (
                <p className="text-sm text-muted-foreground font-medium">
                  ({organization.acronym})
                </p>
              )}
            </div>
          </div>
          <CardDescription className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {organization.country}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {organization.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {organization.expertiseAreas.slice(0, 3).map((area) => (
              <Badge key={area} variant="secondary" className="text-xs">
                {area}
              </Badge>
            ))}
            {organization.expertiseAreas.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{organization.expertiseAreas.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MemberOrganizationCard;
