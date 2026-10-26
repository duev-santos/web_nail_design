import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  setSelectedService: (service: string) => void;
  scrollTo: (id: string) => void;
}

export default function ServicesSection({ setSelectedService, scrollTo }: ServicesSectionProps) {
  return (
      <section id="servicos" className="py-24 bg-[#FBF7F4] text-[#1E1412] border-t border-[#EAE0D7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Coluna Esquerda: Texto de Apresentação */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D20F1C] uppercase">
              O que podemos criar juntas
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#9A0D14] leading-tight">
              Do essencial<br />
              <span className="italic text-[#B10F1A]">ao</span> extraordinário.
            </h2>

            <p className="text-[#675852] text-sm md:text-base leading-relaxed font-light">
              Você escolhe o estilo. A gente cuida de cada etapa para realçar a beleza das suas unhas.
            </p>

            <div>
              <button
                onClick={() => scrollTo('agendamento')}
                className="border border-[#B10F1A] text-[#D20F1C] hover:bg-[#8B0B10] hover:text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
              >
                <span>Escolher meu serviço</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-[#9A8A83] pt-4 font-light leading-relaxed">
              * Valores e durações ilustrativos. Nail art complexa, remoção e manutenção são combinadas à parte, após avaliação.
            </p>
          </div>

          {/* Coluna Direita: Lista de Serviços */}
          <div className="lg:col-span-7 divide-y divide-[#E2D6CB] border-t border-b border-[#E2D6CB]">
            {[
              {
                name: 'Manicure',
                desc: 'Cuidado das unhas e cutículas, formato e esmaltação para o seu dia a dia.',
                detail: '45 min · a partir de R$ 40'
              },
              {
                name: 'Pedicure',
                desc: 'Cuidado delicado dos pés, preparo das unhas e esmaltação com acabamento caprichado.',
                detail: '50 min · a partir de R$ 50'
              },
              {
                name: 'Extensão em fibra de vidro',
                desc: 'Alongamento moldado para você, com leveza, estrutura e um resultado natural.',
                detail: '2h30 · a partir de R$ 180'
              },
              {
                name: 'Extensão em tip',
                desc: 'Comprimento e formato com aplicação de tips, estrutura em gel e a sua cor favorita.',
                detail: '2h · a partir de R$ 150'
              }
            ].map((service, index) => (
              <div 
                key={index}
                onClick={() => {
                  setSelectedService(service.name);
                  scrollTo('agendamento');
                }}
                className="py-6 flex items-center justify-between group cursor-pointer hover:pl-2 transition-all duration-300"
              >
                <div className="space-y-1.5 pr-4">
                  <h3 className="font-serif text-2xl font-normal text-[#A10D15] group-hover:text-[#D20F1C] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#665751] font-light">
                    {service.desc}
                  </p>
                  <span className="text-xs font-medium text-[#D20F1C] tracking-wide block pt-0.5">
                    {service.detail}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-[#D5C5B8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B0B10] group-hover:border-[#8B0B10] group-hover:text-white transition-all text-[#B10F1A]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
}
