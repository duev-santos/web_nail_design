import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  scrollTo: (id: string) => void;
}

export default function Footer({ scrollTo }: FooterProps) {
  return (
      <footer className="bg-[#76090D] text-white border-t border-[#941118] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#6B171D]">
            
            {/* Logo e Slogan no Rodapé */}
            <div className="md:col-span-6 space-y-5">
              <div className="cursor-pointer" onClick={() => scrollTo('home')}>
                <span className="font-serif text-3xl tracking-tight text-white font-semibold">
                  amora<span className="text-[#E5B6BD]">.</span>
                </span>
                <span className="text-[9px] tracking-[0.28em] text-[#E8A5AB] block uppercase">
                  nail atelier
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#F7D8DC] max-w-md">
                Sua essência, em cada detalhe.
              </h3>
            </div>

            {/* Links de Exploração */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E8A5AB] block">
                Explore
              </span>
              <ul className="space-y-2.5 text-xs text-[#F2CAD1]">
                {['home', 'galeria', 'servicos', 'pacotes'].map((sec) => (
                  <li key={sec}>
                    <button
                      onClick={() => scrollTo(sec)}
                      className="hover:text-white transition-colors capitalize"
                    >
                      {sec === 'servicos' ? 'Serviços' : sec}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chamada Agende seu momento */}
            <div className="md:col-span-3 space-y-4">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#E8A5AB] block">
                Vamos cuidar de você?
              </span>
              <button
                onClick={() => scrollTo('agendamento')}
                className="font-serif text-2xl text-white hover:text-[#F5CAD1] transition-colors flex items-center gap-2 group text-left"
              >
                <span>Agende seu momento</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-xs text-[#E5B6BD] font-light leading-relaxed">
                Um atelier conceitual de beleza, cuidado e expressão pessoal.
              </p>
            </div>
          </div>

          {/* Sub-rodapé de Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D89EA5] gap-4">
            <p>© 2026 Amora Nail Atelier · Marca conceitual</p>
            <p>Layout demonstrativo · Imagens, valores e agenda ilustrativos</p>
            <p className="hover:text-white cursor-pointer">Web site desenvolvido por Duanny Santos</p>
          </div>
        </div>
      </footer>
  );
}
