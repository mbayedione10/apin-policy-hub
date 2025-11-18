import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Members from "./pages/Members";
import MemberDetail from "./pages/MemberDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/publications/:slug" element={<PublicationDetail />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/evenements" element={<Events />} />
              <Route path="/equipe" element={<Team />} />
              <Route path="/membres" element={<Members />} />
              <Route path="/membres/:id" element={<MemberDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ressources" element={<Resources />} />
              <Route path="/search" element={<Search />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
