const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-6xl opacity-20 animate-pulse">
        🍂
      </div>
      <div className="absolute bottom-32 right-32 text-5xl opacity-20 animate-pulse">
        🍁
      </div>
      <div className="absolute top-1/2 left-10 text-4xl opacity-15">🌰</div>

      <div className="text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight">
            Анна & Михаил
          </h1>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-8"></div>
          <p className="font-montserrat text-xl md:text-2xl text-muted-foreground mb-6">
            приглашают вас разделить радость
          </p>
          <p className="font-playfair text-3xl md:text-4xl text-primary mb-8">
            нашей свадьбы
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-montserrat text-lg font-semibold text-muted-foreground mb-2">
                ДАТА ТОРЖЕСТВА
              </h3>
              <p className="font-playfair text-3xl text-primary mb-4">
                15 октября 2024
              </p>
              <p className="font-montserrat text-muted-foreground">
                В самый красивый день осени
              </p>
            </div>

            <div>
              <h3 className="font-montserrat text-lg font-semibold text-muted-foreground mb-2">
                ВРЕМЯ
              </h3>
              <p className="font-playfair text-3xl text-primary mb-4">16:00</p>
              <p className="font-montserrat text-muted-foreground">
                Церемония начнется вовремя
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-accent text-6xl">💐</div>
      </div>
    </section>
  );
};

export default HeroSection;
