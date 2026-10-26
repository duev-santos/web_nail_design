import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Header({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollTo }: HeaderProps) {
  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FBF7F4]/95 backdrop-blur-md border-b border-[#EAE0D7]/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Amora */}
          <div 
            onClick={() => scrollTo('home')}
            className="cursor-pointer group flex flex-col items-start"
          >
            <span className="font-serif text-2xl tracking-tight text-[#79090D] font-semibold group-hover:text-[#A20D16] transition-colors">
              amora<span className="text-[#962529]">.</span>
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#887570] -mt-1 uppercase">
              nail atelier
            </span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-9 text-xs tracking-wider uppercase font-medium">
            {[
              { id: 'home', label: 'Home' },
              { id: 'galeria', label: 'Galeria' },
              { id: 'servicos', label: 'Serviços' },
              { id: 'pacotes', label: 'Pacotes' },
              { id: 'duvidas', label: 'Dúvidas' },
              { id: 'agendamento', label: 'Agendamento' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-all py-1 relative ${
                  activeSection === item.id 
                    ? 'text-[#79090D] font-semibold' 
                    : 'text-[#77645F] hover:text-[#79090D]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#962529] rounded-full animate-fadeIn" />
                )}
              </button>
            ))}
          </nav>

          {/* Botão de Agendamento do Topo */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollTo('agendamento')}
              className="bg-[#6B1418] hover:bg-[#83181D] text-white text-xs tracking-wider uppercase px-5 py-2.5 rounded-full font-medium transition-all transform active:scale-95 flex items-center gap-1.5 shadow-sm"
            >
              <span>Agendar meu momento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Botão Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-[#79090D] p-2 focus:outline-none"
            aria-label="Abrir menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF7F4] border-t border-[#EAE0D7] px-6 py-6 space-y-4">
            {['home', 'galeria', 'servicos', 'pacotes', 'duvidas', 'agendamento'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-sm tracking-wider uppercase text-[#77645F] hover:text-[#79090D] py-1"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollTo('agendamento')}
              className="w-full bg-[#6B1418] text-white text-center py-3 rounded-full text-xs uppercase tracking-wider mt-4"
            >
              Agendar meu momento
            </button>
          </div>
        )}
      </header>

  );
}
