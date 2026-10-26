import type { ChangeEvent, FormEvent } from 'react';
import { ArrowUpRight, Calendar, Check, ChevronDown, MessageCircle, Moon, Sun, Sunset, Upload, X } from 'lucide-react';
import type { Service } from '../types';

interface BookingSectionProps {
  servicesList: Service[];
  currentItem: Service;
  selectedService: string;
  setSelectedService: (service: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  clientName: string;
  setClientName: (name: string) => void;
  clientPhone: string;
  setClientPhone: (phone: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  inspirationImage: string | null;
  imageFileName: string;
  handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  removeImage: () => void;
  formError: string;
  agreeTerms: boolean;
  setAgreeTerms: (agree: boolean) => void;
  handleSendWhatsApp: (event: FormEvent<HTMLFormElement>) => void;
}

export default function BookingSection({
  servicesList, currentItem, selectedService, setSelectedService,
  selectedPeriod, setSelectedPeriod,
  clientName, setClientName, clientPhone, setClientPhone, notes, setNotes,
  inspirationImage, imageFileName, handleImageUpload, removeImage,
  formError, agreeTerms, setAgreeTerms, handleSendWhatsApp,
}: BookingSectionProps) {
  return (
      <section id="agendamento" className="py-24 bg-[#F7E8E6] border-t border-[#EAD4D2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Lado Esquerdo: Resumo do momento */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#6B1418] uppercase">
              Reserve um tempo para você
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1210] leading-tight">
              Seu próximo<br />
              <span className="text-[#6B1418] italic">momento</span> Amora.
            </h2>

            <p className="text-[#675852] text-sm md:text-base leading-relaxed font-light">
              Escolha o cuidado, o período do seu dia que prefere e deixe o resto com a gente.
            </p>

            {/* Card "Sua escolha" idêntico ao Figma */}
            <div className="bg-[#EAE0D6] rounded-2xl p-6 border border-[#DDD0C3] space-y-4">
              <div className="flex items-center gap-2 text-[#6B1418] font-serif font-semibold text-lg">
                <Calendar className="w-5 h-5" />
                <span>Sua escolha</span>
              </div>

              <div>
                <h4 className="font-serif text-xl font-normal text-[#1F1513]">
                  {currentItem.name}
                </h4>
                <p className="text-xs text-[#6B5A53] mt-1 font-light">
                  Preferência: <span className="font-medium text-[#6B1418]">{selectedPeriod}</span> · Duração est. {currentItem.duration}
                </p>
              </div>

              <div className="border-t border-[#D5C6B7] pt-4 flex items-center justify-between">
                <span className="text-xs text-[#705F58]">Valor de referência</span>
                <span className="font-serif text-2xl font-bold text-[#1F1513]">
                  R$ {currentItem.price}
                </span>
              </div>

              <p className="text-[10px] text-[#8C7A72] font-light leading-relaxed">
                Seleção demonstrativa. Valores, horários exatos e disponibilidade são confirmados diretamente com o atelier via WhatsApp.
              </p>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#75645E]">
              <MessageCircle className="w-4 h-4 text-[#6B1418] mt-0.5 flex-shrink-0" />
              <span>Em um atendimento real, a reserva é finalizada após o contato no WhatsApp do atelier.</span>
            </div>
          </div>

          {/* Lado Direito: Formulário adaptado */}
          <div className="lg:col-span-7 bg-[#FAF7F5] rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2D5C9]">
            <form onSubmit={handleSendWhatsApp} className="space-y-8">
              
              {/* Etapa 01: Escolha do Cuidado */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#6B1418]">
                  01 — Qual cuidado você deseja?
                </label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-[#DACCC0] rounded-xl px-4 py-3.5 text-sm text-[#1F1513] focus:outline-none focus:ring-1 focus:ring-[#6B1418] focus:border-[#6B1418] appearance-none cursor-pointer"
                  >
                    {servicesList.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} · {item.duration} · a partir de R$ {item.price}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#75645E] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Etapa 02: Período de preferência */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#6B1418]">
                  02 — Escolha o período
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Manhã', desc: '09h às 12h', icon: Sun },
                    { label: 'Tarde', desc: '13h às 18h', icon: Sunset },
                    { label: 'Noite', desc: '18h às 21h', icon: Moon }
                  ].map((period) => {
                    const IconComponent = period.icon;
                    const isSelected = selectedPeriod === period.label;
                    return (
                      <button
                        type="button"
                        key={period.label}
                        onClick={() => setSelectedPeriod(period.label)}
                        className={`p-3.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#550F13] text-white border-[#550F13] shadow-md'
                            : 'bg-white border-[#DACCC0] text-[#332522] hover:border-[#6B1418]'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#F5CAD1]' : 'text-[#6B1418]'}`} />
                        <span className="text-xs font-semibold uppercase tracking-wider">{period.label}</span>
                        <span className={`text-[10px] ${isSelected ? 'text-[#E5B6BD]' : 'text-[#87766F]'}`}>{period.desc}</span>
                      </button>
                    );
                  })}
                </div>

              </div>

              {/* Etapa 03: Dados de Contato e Foto de Inspiração */}
              <div className="space-y-4">
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#6B1418]">
                  03 — Como podemos falar com você?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#52443F] mb-1">Nome completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Como você se chama?"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white border border-[#DACCC0] rounded-xl px-4 py-3 text-sm text-[#1F1513] placeholder-[#A3928B] focus:outline-none focus:ring-1 focus:ring-[#6B1418]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#52443F] mb-1">WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 90000-0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-white border border-[#DACCC0] rounded-xl px-4 py-3 text-sm text-[#1F1513] placeholder-[#A3928B] focus:outline-none focus:ring-1 focus:ring-[#6B1418]"
                    />
                  </div>
                </div>

                {/* Upload de Imagem de Inspiração */}
                <div>
                  <label className="block text-xs text-[#52443F] mb-1">
                    Foto ou imagem de inspiração (opcional)
                  </label>

                  {!inspirationImage ? (
                    <label className="border-2 border-dashed border-[#D2C2B5] hover:border-[#6B1418] bg-white rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors group">
                      <Upload className="w-5 h-5 text-[#8E7E77] group-hover:text-[#6B1418] mb-1" />
                      <span className="text-xs text-[#5C4D47] font-medium">Clique para selecionar uma foto de referência</span>
                      <span className="text-[10px] text-[#A89891]">PNG, JPG ou WEBP</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="hidden" 
                      />
                    </label>
                  ) : (
                    <div className="bg-white border border-[#DACCC0] rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={inspirationImage} 
                          alt="Prévia de inspiração" 
                          className="w-12 h-12 rounded-lg object-cover border border-[#E0D3C7]"
                        />
                        <div>
                          <p className="text-xs font-medium text-[#1F1513] truncate max-w-[200px]">{imageFileName || 'Inspiração selecionada'}</p>
                          <span className="text-[10px] text-[#2F7336] flex items-center gap-1">
                            <Check className="w-3 h-3" /> Imagem pronta para o WhatsApp
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeImage}
                        className="p-1.5 text-[#887871] hover:text-[#B3262E] transition-colors"
                        title="Remover imagem"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  <p className="text-[10px] text-[#8E7D76] mt-1.5">
                    * Ao clicar em agendar, a conversa no WhatsApp será aberta e você poderá anexar a mesma foto diretamente na conversa!
                  </p>
                </div>

                {/* Observações */}
                <div>
                  <label className="block text-xs text-[#52443F] mb-1">Observações (opcional)</label>
                  <textarea
                    rows={2}
                    placeholder="Conte uma ideia, formato preferido ou se possui algum cuidado especial..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-[#DACCC0] rounded-xl px-4 py-2.5 text-sm text-[#1F1513] placeholder-[#A3928B] focus:outline-none focus:ring-1 focus:ring-[#6B1418]"
                  ></textarea>
                </div>
              </div>

              {/* Mensagem de Erro de validação */}
              {formError && (
                <div className="bg-[#FDEDEC] text-[#902227] text-xs p-3 rounded-xl border border-[#F5C2C4]">
                  {formError}
                </div>
              )}

              {/* Checkbox de consentimento */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="consent"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 rounded border-[#CDBEB1] text-[#6B1418] focus:ring-[#6B1418]"
                />
                <label htmlFor="consent" className="text-xs text-[#6B5A53] cursor-pointer">
                  Concordo com o uso dos meus dados para contato sobre este agendamento.
                </label>
              </div>

              {/* Botão de Enviar WhatsApp */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#561014] hover:bg-[#6F151B] text-white text-xs font-semibold uppercase tracking-wider transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-[#561014]/20"
              >
                <span>Solicitar agendamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#95847D]">
                Ao clicar, você será redirecionada para o WhatsApp com todos os dados preenchidos prontos para confirmação.
              </p>
            </form>
          </div>

        </div>
      </section>

  );
}
