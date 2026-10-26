import { ArrowUpRight } from 'lucide-react';
import type { GalleryItem } from '../types';

interface GallerySectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filteredGallery: GalleryItem[];
  setSelectedService: (service: string) => void;
  scrollTo: (id: string) => void;
}

export default function GallerySection({ activeFilter, setActiveFilter, filteredGallery, setSelectedService, scrollTo }: GallerySectionProps) {
  return (
      <section id="galeria" className="py-24 bg-[#F7E8E6] border-t border-[#EAD4D2]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header da Galeria */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#6B1418] uppercase block mb-2">
                Galeria de inspirações
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1210]">
                Seu próximo favorito<br />está aqui.
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#746660] max-w-xs font-light">
              Cores, formas e pequenos detalhes para inspirar a sua próxima escolha.
            </p>
          </div>

          {/* Filtros em Pílulas */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {['Todos', 'Naturais', 'Francesinhas', 'Alongamentos', 'Nail art'].map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveFilter(tab);
                    if (tab === 'Naturais') scrollTo('galeria');
                  }}
                  className={`text-xs px-5 py-2 rounded-full font-medium transition-all ${
                    isSelected
                      ? 'bg-[#561014] text-white shadow-sm'
                      : 'bg-[#EAE0D6] text-[#554742] hover:bg-[#E0D4C7] border border-[#DDD0C3]'
                  }`}
                >
                  {tab === 'Todos' ? 'Todos os estilos' : tab}
                </button>
              );
            })}
          </div>

          {/* Grid de 4 Colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                onClick={() => {
                  setSelectedService(item.sub.includes('FIBRA') ? 'Extensão em fibra de vidro' : 'Manicure');
                  scrollTo('agendamento');
                }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#E2D6CB] relative shadow-sm border border-[#E0D2C4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#1C1311] group-hover:text-[#6B1418] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] tracking-wider uppercase text-[#7E6F68] mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B1418] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#9A8A83] mt-8 text-center sm:text-left font-light">
            Imagens de demonstração para inspirar o seu estilo. Não representam um portfólio real restritivo.
          </p>
        </div>
      </section>

  );
}
