import { ArrowUpRight, Check } from 'lucide-react';

interface PackagesSectionProps {
  handleSelectPackage: (packageName: string) => void;
}

export default function PackagesSection({ handleSelectPackage }: PackagesSectionProps) {
  return (
      <section id="pacotes" className="py-24 bg-[#DCE7EF] border-t border-[#CAD8E3]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#6B1418] uppercase block mb-2">
                Combinações que fazem sentido
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#121A20]">
                Mais tempo para se cuidar.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#4E5D68] max-w-xs font-light">
              Escolha o ritual que combina com a sua rotina e com o seu momento.
            </p>
          </div>

          {/* Grid dos 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Card 1: Branco */}
            <div className="bg-[#FAF7F5] rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-[#E1D4CB]">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#73635C] block">
                  O essencial, bem feito
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1F1513] mt-2 mb-3">
                  Dupla de cuidado
                </h3>
                <p className="text-xs text-[#6A5A54] font-light leading-relaxed mb-6">
                  Mãos e pés em sintonia para renovar a sua semana.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xs text-[#705F58]">R$</span>
                  <span className="font-serif text-5xl font-bold text-[#1F1513]">80</span>
                  <span className="text-xs text-[#705F58]">/ pacote</span>
                </div>

                <div className="border-t border-[#E5D7CE] pt-6 space-y-3 mb-8 text-xs text-[#52443F]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B1418]" />
                    <span>1 manicure completa</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B1418]" />
                    <span>1 pedicure completa</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B1418]" />
                    <span>Esmaltação tradicional inclusa</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectPackage('Dupla de cuidado')}
                className="w-full py-3 px-4 rounded-full border border-[#6B1418] text-[#6B1418] hover:bg-[#6B1418] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <span>Quero esse cuidado</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Bordô Escuro (Destaque Principal do Figma) */}
            <div className="bg-[#540F13] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative transform md:-translate-y-2 border border-[#6B1418]">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#E8A5AB] block">
                  Para uma nova versão
                </span>
                <h3 className="font-serif text-3xl font-normal text-white mt-2 mb-3">
                  Seu novo estilo
                </h3>
                <p className="text-xs text-[#D8B4B8] font-light leading-relaxed mb-6">
                  Um novo comprimento, com a sua personalidade e presença.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xs text-[#D8B4B8]">R$</span>
                  <span className="font-serif text-5xl font-bold text-white">210</span>
                  <span className="text-xs text-[#D8B4B8]">/ pacote</span>
                </div>

                <div className="border-t border-[#7A1C21] pt-6 space-y-3 mb-8 text-xs text-[#F2D7DA]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#F5CAD1]" />
                    <span>Extensão em fibra de vidro</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#F5CAD1]" />
                    <span>Esmaltação em gel de alta duração</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#F5CAD1]" />
                    <span>Nail art simples em 2 unhas</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectPackage('Seu novo estilo')}
                className="w-full py-3.5 px-4 rounded-full bg-[#F5CAD1] hover:bg-[#F2B6C0] text-[#540F13] transition-all text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Quero esse cuidado</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Branco */}
            <div className="bg-[#FAF7F5] rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-[#E1D4CB]">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#73635C] block">
                  Continuidade do cuidado
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#1F1513] mt-2 mb-3">
                  Ritual em dia
                </h3>
                <p className="text-xs text-[#6A5A54] font-light leading-relaxed mb-6">
                  Um convite para manter o autocuidado frequente na rotina.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xs text-[#705F58]">R$</span>
                  <span className="font-serif text-5xl font-bold text-[#1F1513]">145</span>
                  <span className="text-xs text-[#705F58]">/ pacote</span>
                </div>

                <div className="border-t border-[#E5D7CE] pt-6 space-y-3 mb-8 text-xs text-[#52443F]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B1418]" />
                    <span>4 sessões de manicure</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B1418]" />
                    <span>Esmaltação tradicional</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B1418]" />
                    <span>Sessões válidas ao longo de 30 dias</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectPackage('Ritual em dia')}
                className="w-full py-3 px-4 rounded-full border border-[#6B1418] text-[#6B1418] hover:bg-[#6B1418] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <span>Quero esse cuidado</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <p className="text-[11px] text-[#697A87] mt-8 text-center font-light">
            Pacotes e valores ilustrativos. Condições, disponibilidade e detalhes devem ser confirmados antes do atendimento.
          </p>
        </div>
      </section>

  );
}
