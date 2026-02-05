import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuándo accedo al curso?',
    answer: 'El acceso es inmediato luego del pago. En segundos verás las instrucciones para ingresar al curso.',
  },
  {
    question: '¿Necesito conocimientos previos?',
    answer: 'No. Está pensado para personas sin experiencia en marketing ni automatización. Solo necesitás tener WhatsApp y ganas de vender más.',
  },
  {
    question: '¿El curso es teórico o práctico?',
    answer: 'Es 100% práctico, con mensajes reales listos para usar. No hay relleno teórico, solo estrategia que funciona.',
  },
  {
    question: '¿Funciona para cualquier tipo de negocio?',
    answer: 'Sí. Está diseñado para cualquier negocio que venda por WhatsApp: servicios, productos, cursos, consultoría, etc.',
  },
  {
    question: '¿Tiene límite de tiempo?',
    answer: 'No. Podés acceder al contenido sin vencimiento. Es tuyo de por vida.',
  },
  {
    question: '¿Reemplaza un CRM?',
    answer: 'No. Este curso te enseña a usar WhatsApp tal como lo usás hoy, pero con una estrategia que vende. No necesitás herramientas complicadas.',
  },
  {
    question: '¿Hay soporte?',
    answer: 'Sí. Tenés soporte directo por WhatsApp. Respondemos en menos de 24 horas.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 md:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-display font-bold text-foreground text-lg">{question}</span>
        <ChevronDown
          size={24}
          className={`text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 md:py-5 bg-gray-50 border-t border-gray-200">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-spacing bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas sobre el curso
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
