export default function CTAFinal() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-spacing bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="container max-w-3xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
            Si usás WhatsApp y querés vender más, este curso es para vos.
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Acceso inmediato. Sin suscripciones. Contenido 100% práctico.
          </p>

          <button
            onClick={scrollToPricing}
            className="inline-block bg-white text-primary font-bold py-4 px-8 rounded-lg transition-all duration-200 text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Acceder ahora al curso
          </button>

          <p className="text-white/80 text-sm">
            Pago único. Acceso de por vida.
          </p>
        </div>
      </div>
    </section>
  );
}
