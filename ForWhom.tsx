import { Target } from 'lucide-react';

const audiences = [
  'Emprendedores y dueños de negocios',
  'Vendedores independientes',
  'Personas que venden por Instagram, Mercado Libre o referencias',
  'Cualquiera que use WhatsApp para vender y quiera vender más',
];

export default function ForWhom() {
  return (
    <section className="section-spacing bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Para quién es este curso
          </h2>
          <p className="text-lg text-muted-foreground">
            Si usás WhatsApp para vender, este curso es para vos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 hover:shadow-md transition-shadow"
            >
              <Target className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-foreground font-medium">{audience}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 text-center">
          <p className="text-xl text-foreground font-display font-bold">
            ¿No sabés si es para vos?{' '}
            <span className="text-primary">Probablemente sí.</span>
          </p>
          <p className="text-muted-foreground mt-3">
            Está diseñado para cualquiera que quiera vender más sin complicaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
