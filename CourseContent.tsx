import { CheckCircle2, MessageCircle, Zap, Users, BookOpen, TrendingUp } from 'lucide-react';

const courseItems = [
  {
    icon: MessageCircle,
    title: 'Estrategia completa de ventas por WhatsApp',
    description: 'El sistema paso a paso que funciona en cualquier negocio',
  },
  {
    icon: BookOpen,
    title: 'Mensajes listos para copiar y pegar',
    description: 'Textos probados que generan respuestas y cierran ventas',
  },
  {
    icon: Zap,
    title: 'Seguimiento automático sin ser invasivo',
    description: 'Cómo automatizar sin perder la conexión humana',
  },
  {
    icon: Users,
    title: 'Cómo responder precios, objeciones y silencios',
    description: 'Técnicas para cada situación difícil',
  },
  {
    icon: TrendingUp,
    title: 'Casos reales y ejemplos prácticos',
    description: 'Aprende de negocios que ya están vendiendo más',
  },
  {
    icon: CheckCircle2,
    title: 'Formato 100% práctico',
    description: 'Sin teoría innecesaria, solo acción inmediata',
  },
];

export default function CourseContent() {
  return (
    <section className="section-spacing bg-gradient-to-br from-blue-50 to-blue-100/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Qué incluye el curso
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitás para vender más por WhatsApp, desde el primer día
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {courseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-primary"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
