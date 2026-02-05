import { AlertCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  'Respondés mensajes todo el día y no vendés',
  'Te preguntan precios y desaparecen',
  'No sabés qué decir para cerrar',
  'Perdés oportunidades por no hacer seguimiento',
];

export default function ProblemSolution() {
  return (
    <section className="section-spacing bg-white">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problems */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <AlertCircle className="text-accent flex-shrink-0" size={32} />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                El problema
              </h2>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-red-50 border border-red-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-accent flex-shrink-0 pt-1">
                    <AlertCircle size={20} />
                  </div>
                  <p className="text-foreground font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="text-primary flex-shrink-0" size={32} />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                La solución
              </h2>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <p className="text-lg text-foreground leading-relaxed">
                Este curso te muestra exactamente{' '}
                <span className="font-bold text-primary">qué decir</span>, cuándo decirlo y cómo{' '}
                <span className="font-bold text-secondary">automatizar respuestas y seguimientos</span> en WhatsApp para vender todos los días.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Sin teoría innecesaria. Solo mensajes listos para usar y ejemplos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
