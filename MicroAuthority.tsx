import { CheckCircle2 } from 'lucide-react';

export default function MicroAuthority() {
  return (
    <section className="section-spacing bg-white">
      <div className="container max-w-3xl">
        <div className="p-8 md:p-12 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 border-2 border-primary/30">
          <div className="flex gap-4 md:gap-6">
            <div className="flex-shrink-0 pt-1">
              <CheckCircle2 className="text-primary" size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                Sistema creado por un vendedor real
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Que usa WhatsApp todos los días para cerrar ventas en negocios reales. No es teoría.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Es la estrategia que funciona en la práctica, probada en múltiples negocios y adaptable a cualquier industria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
