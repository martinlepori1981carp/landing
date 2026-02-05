
export default function Pricing() {
  return (
    <section id="pricing" className="section-spacing bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Acceso inmediato al curso
          </h2>
          <p className="text-xl text-gray-300">
            Pago único. Sin suscripciones.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-8">
          <div className="text-center mb-8">
            <div className="inline-block">
              <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                USD 14
              </div>
              <p className="text-gray-300">Acceso de por vida</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Sin vencimiento</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Contenido 100% práctico</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Implementable en menos de 1 hora</span>
            </div>
            <div className="flex items-center gap-3 text-gray-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Pensado para usar desde el celular</span>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="space-y-4 mb-6">