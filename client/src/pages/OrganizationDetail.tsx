import { useParams } from 'wouter';
import { Link } from 'wouter';
import { organizations } from '@/data/organizations';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, MapPin, Calendar, Globe, Mail, Phone, MapPinned, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrganizationDetail = () => {
  const params = useParams();
  const id = params.id;
  const organization = organizations.find((org) => org.id === id);

  if (!organization) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Organisation non trouvée</h1>
          <Link to="/organisations">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux organisations
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/organisations">
            <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
              {organization.logo ? (
                <img
                  src={organization.logo}
                  alt={`Logo ${organization.name}`}
                  className="w-20 h-20 object-contain"
                />
              ) : (
                <Building2 className="w-12 h-12 text-primary-foreground" />
              )}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{organization.name}</h1>
              {organization.acronym && (
                <p className="text-2xl text-primary-foreground/80 mb-2">({organization.acronym})</p>
              )}
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <MapPin className="w-5 h-5" />
                <span>{organization.country}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>À Propos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {organization.description}
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card>
                <CardHeader>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {organization.mission}
                  </p>
                </CardContent>
              </Card>

              {/* Expertise Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Domaines d'Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {organization.expertiseAreas.map((area) => (
                      <Badge key={area} variant="secondary">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Projects */}
              {organization.keyProjects && organization.keyProjects.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Projets Clés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {organization.keyProjects.map((project, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Partnerships */}
              {organization.partnerships && organization.partnerships.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Partenariats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {organization.partnerships.map((partner) => (
                        <Badge key={partner} variant="outline">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations de Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {organization.founded && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Fondée</p>
                        <p className="text-sm text-muted-foreground">{organization.founded}</p>
                      </div>
                    </div>
                  )}
                  {organization.website && (
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Site Web</p>
                        <a
                          href={organization.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline break-all"
                        >
                          {organization.website}
                        </a>
                      </div>
                    </div>
                  )}
                  {organization.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href={`mailto:${organization.email}`}
                          className="text-sm text-primary hover:underline break-all"
                        >
                          {organization.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {organization.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Téléphone</p>
                        <p className="text-sm text-muted-foreground">{organization.phone}</p>
                      </div>
                    </div>
                  )}
                  {organization.address && (
                    <div className="flex items-start gap-3">
                      <MapPinned className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Adresse</p>
                        <p className="text-sm text-muted-foreground">{organization.address}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationDetail;
