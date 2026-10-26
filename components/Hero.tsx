import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollTo: (id: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
      <section id="home" className="pt-28 md:pt-36 pb-20 bg-[#FBF7F4] text-[#1E1412] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos do Hero */}
          <div className="lg:col-span-6 space-y-7 z-10">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#B20E1B] uppercase">
                Seu estilo, na ponta dos dedos
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-[#79090D] tracking-tight">
              Sua essência,<br />
              <span className="italic font-light text-[#79090D]">em cada</span> detalhe.
            </h1>

            <p className="text-[#887570] text-base md:text-lg max-w-lg font-light leading-relaxed">
              Unhas que expressam quem você é. Um tempo só seu, com cuidado, leveza e beleza em cada detalhe.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-3">
              <button
                onClick={() => scrollTo('agendamento')}
                className="bg-[#6B1418] hover:bg-[#83181D] text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all transform active:scale-95 flex items-center gap-2 shadow-lg shadow-[#6B1418]/25"
              >
                <span>Quero agendar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('galeria')}
                className="group flex items-center gap-2 text-xs tracking-wider uppercase text-[#79090D] hover:text-[#A20D16] transition-colors"
              >
                <span>Explorar a galeria</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            <div className="pt-4 flex items-center gap-2.5 text-xs text-[#887570]">
              <Sparkles className="w-3.5 h-3.5 text-[#962529]" />
              <span>Beleza com intenção. Cuidado sem pressa.</span>
            </div>
          </div>

          {/* Lado Direito: Composição Orgânica de Imagens do Figma */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Fundo decorativo em tom azul suave do print */}
            <div className="absolute -right-4 top-10 w-72 sm:w-96 h-80 sm:h-[450px] bg-[#B7C7D4] rounded-t-[180px] rounded-b-[40px] opacity-70 transform rotate-1 -z-0"></div>

            {/* Arco Principal com Imagem */}
            <div className="relative z-10 w-72 sm:w-[380px] h-[400px] sm:h-[480px] rounded-t-[190px] rounded-b-[36px] overflow-hidden shadow-2xl border border-[#2E201C]/60 bg-[#1A1412]">
              <img
                src="/images/alongamento.jpeg"
                alt="Profissional fazendo manutenção de alongamento de unhas"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Selo Rosa Pílula: "Feitas para ser você." */}
            <div className="absolute -bottom-3 left-4 sm:left-12 z-20 bg-[#F5CAD1] text-[#4A0E13] px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-[#E9B1BB]">
              <Sparkles className="w-3.5 h-3.5 text-[#6B1418]" />
              <span className="font-serif italic text-sm font-medium tracking-wide">
                Feitas para ser você.
              </span>
            </div>

            {/* Círculo com foto secundária sobreposta */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 z-20 w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#FBF7F4] shadow-xl">
              <img
                src="/images/natural_1.jpeg"
                alt="Unhas nude decoradas com poás pretos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Faixa Marquee de Destaques Vermelha */}
        <div className="mt-20 border-t border-[#261715] bg-[#530E12] py-4 text-white overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F0D5D8] whitespace-nowrap">
            <span className="flex items-center gap-3">SEU MOMENTO DE CUIDADO <Sparkles className="w-3 h-3 text-[#F5CAD1]" /></span>
            <span className="flex items-center gap-3">BELEZA NOS DETALHES <Sparkles className="w-3 h-3 text-[#F5CAD1]" /></span>
            <span className="flex items-center gap-3">ESTILO SEM FÓRMULA <Sparkles className="w-3 h-3 text-[#F5CAD1]" /></span>
            <span className="flex items-center gap-3">UNHAS COM PERSONALIDADE <Sparkles className="w-3 h-3 text-[#F5CAD1]" /></span>
          </div>
        </div>
      </section>

  );
}
