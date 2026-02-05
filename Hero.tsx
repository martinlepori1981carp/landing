import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F8F9FA] via-[#ffffff] to-[#F0F7FF] flex items-center justify-center pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-4xl">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground">
            Convertí WhatsApp en una{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              máquina de ventas
            </span>
            {', '}sin ser experto en marketing
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aprendé paso a paso cómo vender más por WhatsApp con mensajes probados, automatización simple y sin perder tiempo.
          </p>

          {/* CTA Button */}
          <div className="pt-4 md:pt-8">
            <button
              onClick={scrollToPricing}
              className="btn-primary text-lg md:text-xl shadow-lg"
            >
              Quiero acceder al curso
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 md:pt-16 flex justify-center animate-bounce">
            <button
              onClick={scrollToPricing}
              className="text-primary hover:text-secondary transition-colors"
              aria-label="Scroll to pricing"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
