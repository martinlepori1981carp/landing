import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = 'https://wa.me/5493415321151?text=Hola,%20tengo%20una%20consulta%20sobre%20el%20curso%20WhatsApp%20que%20Vende';

  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-2">
              WhatsApp que Vende
            </h3>
            <p className="text-sm text-gray-400">
              Curso digital para vender más por WhatsApp sin ser experto en marketing.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Precio y acceso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
            <p className="text-xs text-gray-400 mt-3">
              Soporte humano. Respondemos en menos de 24 hs.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} WhatsApp que Vende. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Hecho con ❤️ para emprendedores que quieren vender más.
          </p>
        </div>
      </div>
    </footer>
  );
}
