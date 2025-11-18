import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications";
import PublicationDetail from "./pages/PublicationDetail";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Resources from "./pages/Resources";
import Search from "./pages/Search";
import Organizations from "./pages/Organizations";
import OrganizationDetail from "./pages/OrganizationDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/a-propos" component={About} />
            <Route path="/publications" component={Publications} />
            <Route path="/publications/:slug" component={PublicationDetail} />
            <Route path="/actualites" component={News} />
            <Route path="/evenements" component={Events} />
            <Route path="/equipe" component={Team} />
            <Route path="/organisations" component={Organizations} />
            <Route path="/organisations/:id" component={OrganizationDetail} />
            <Route path="/contact" component={Contact} />
            <Route path="/ressources" component={Resources} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
