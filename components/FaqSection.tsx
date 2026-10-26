import { Minus, Plus } from 'lucide-react';
import type { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
  openFaq: number;
  setOpenFaq: (index: number) => void;
}

export default function FaqSection({ faqs, openFaq, setOpenFaq }: FaqSectionProps) {
  return (
      <section id="duvidas" className="py-24 bg-[#FBF7F4] text-[#1E1412] border-t border-[#E8DDD4]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Lado Esquerdo */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D20F1C] uppercase">
              O cuidado continua
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#9A0D14] leading-tight">
              Unhas bonitas.<br />
              <span className="text-[#B10F1A] italic">Dúvidas, não.</span>
            </h2>

            <p className="text-[#675852] text-sm md:text-base leading-relaxed font-light">
              Algumas respostas para você chegar tranquila e aproveitar o seu momento.
            </p>

            {/* Dica em card suave com ícone de gota */}
            <div className="bg-[#F7E8E6] p-5 rounded-2xl flex items-start gap-4 border border-[#F0D9D8]">
              <div className="w-8 h-8 rounded-full bg-[#E5D2C5] flex items-center justify-center flex-shrink-0 text-[#6B1418]">
                💧
              </div>
              <p className="text-xs text-[#52443F] font-light leading-relaxed">
                <strong className="font-semibold text-[#1F1513]">Um carinho diário:</strong> hidrate as cutículas e use luvas nas tarefas com produtos de limpeza.
              </p>
            </div>
          </div>

          {/* Lado Direito: Accordion Retrátil */}
          <div className="lg:col-span-7 divide-y divide-[#E2D5CA] border-t border-b border-[#E2D5CA]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal text-[#B10F1A] group-hover:text-[#E12530] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[#E12530] flex-shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 animate-fadeIn">
                      <p className="text-xs md:text-sm text-[#665751] font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

  );
}
