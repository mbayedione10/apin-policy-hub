const News = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Suivez nos dernières nouvelles et annonces.
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center text-muted-foreground">
            <p className="text-lg">
              La section actualités sera bientôt disponible.
            </p>
            <p className="mt-2">
              En attendant, consultez nos publications et événements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
