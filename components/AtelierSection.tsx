import { Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function AtelierSection() {
  return (
      <section id="atelier" className="py-24 bg-[#FBF7F4] text-[#1E1412] border-t border-[#EFE4DF]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Imagem com Arco Invertido e Card Flutuante */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-72 sm:w-80 h-96 sm:h-[440px] rounded-t-[170px] rounded-b-2xl overflow-hidden shadow-2xl border border-[#2B1B18]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                alt="Profissional aplicando esmalte"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Flutuante "Mais que unhas" */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 bg-[#DCE6EE] text-[#1E1715] p-5 rounded-xl shadow-xl max-w-[210px] border border-white/60">
              <h4 className="font-serif font-bold text-lg leading-tight text-[#5B1014]">
                Mais que unhas.
              </h4>
              <p className="text-xs text-[#524440] mt-1 font-light">
                Um ritual de autocuidado pensado para acalmar o seu dia.
              </p>
            </div>
          </div>

          {/* Lado Conteúdo e Pilares */}
          <div className="lg:col-span-7 space-y-7 lg:pl-10">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#B20E1B] uppercase">
              Prazer, somos amora
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.15] text-[#79090D]">
              Aqui, o cuidado<br />
              <span className="text-[#79090D] italic">começa em você.</span>
            </h2>

            <p className="text-[#887570] text-base leading-relaxed font-light max-w-xl">
              Do clássico ao seu próximo estilo favorito, a proposta do nosso atelier é valorizar a sua essência. Cada escolha de cor, formato e acabamento começa com uma boa conversa.
            </p>

            {/* Três Pilares com Ícones finos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E6DAD4]">
              <div className="space-y-2">
                <Heart className="w-4 h-4 text-[#962529]" />
                <h4 className="text-sm font-medium text-[#342422]">Escuta e atenção</h4>
                <p className="text-xs text-[#887570] font-light">Respeitamos seu tempo e suas preferências.</p>
              </div>

              <div className="space-y-2">
                <ShieldCheck className="w-4 h-4 text-[#962529]" />
                <h4 className="text-sm font-medium text-[#342422]">Higiene em cada etapa</h4>
                <p className="text-xs text-[#887570] font-light">Materiais 100% esterilizados em autoclave e descartáveis.</p>
              </div>

              <div className="space-y-2">
                <Sparkles className="w-4 h-4 text-[#962529]" />
                <h4 className="text-sm font-medium text-[#342422]">Acabamento delicado</h4>
                <p className="text-xs text-[#887570] font-light">Cuticulagem russa ou combinada para máxima durabilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
