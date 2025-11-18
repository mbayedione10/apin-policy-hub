import { Link } from 'wouter';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Africa Policy Intelligence Network</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              APIN est un think tank panafricain dédié à l'analyse des politiques publiques 
              et à la promotion d'une gouvernance éclairée sur le continent.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@apin-network.org" className="hover:underline">
                  contact@apin-network.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+221 33 XXX XX XX</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/publications" className="hover:underline text-primary-foreground/80">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/evenements" className="hover:underline text-primary-foreground/80">
                  Événements
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="hover:underline text-primary-foreground/80">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="hover:underline text-primary-foreground/80">
                  Ressources
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Recevez nos dernières analyses et publications.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              S'abonner
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2024 Africa Policy Intelligence Network. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/mentions-legales" className="hover:underline">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:underline">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
