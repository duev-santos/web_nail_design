import React, { useEffect, useState } from 'react';
import { faqs, galleryItems, servicesList } from './data';
import AtelierSection from './components/AtelierSection';
import BookingSection from './components/BookingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  // Estado de navegação e seção ativa
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estados da Galeria
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Estados do FAQ (acordeão)
  const [openFaq, setOpenFaq] = useState(0);

  // Estados do Formulário de Agendamento adaptado
  const [selectedService, setSelectedService] = useState('Manicure');
  const [selectedPeriod, setSelectedPeriod] = useState('Tarde'); // Manhã, Tarde ou Noite
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [inspirationImage, setInspirationImage] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [formError, setFormError] = useState('');

  // Scroll suave com ajuste para o header fixo
  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Monitora scroll para marcar navegação ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'atelier', 'servicos', 'galeria', 'pacotes', 'duvidas', 'agendamento'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Upload de imagem de inspiração
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setInspirationImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Remover foto de inspiração
  const removeImage = () => {
    setInspirationImage(null);
    setImageFileName('');
  };

  // Selecionar pacote direto e rolar para agendamento
  const handleSelectPackage = (packageName: string) => {
    setSelectedService(`Pacote: ${packageName}`);
    scrollTo('agendamento');
  };

  // Enviar para o WhatsApp
  const handleSendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!clientName.trim()) {
      setFormError('Por favor, preencha o seu nome completo.');
      return;
    }
    if (!clientPhone.trim()) {
      setFormError('Por favor, informe seu número de WhatsApp.');
      return;
    }
    if (!agreeTerms) {
      setFormError('Por favor, aceite os termos para prosseguir.');
      return;
    }
    setFormError('');

    const phoneSalon = '5511999999999'; // Substitua pelo telefone oficial do atelier
    const photoNotice = inspirationImage 
      ? '%0A%F0%9F%93%B7 *Foto de Inspiração:* Sim, anexei uma referência e enviarei aqui em seguida!' 
      : '';

    const text = 
      `*Olá, Amora Nail Atelier!* Gostaria de solicitar um agendamento:%0A%0A` +
      `✨ *Serviço/Pacote:* ${encodeURIComponent(selectedService)}%0A` +
      `🕒 *Período de preferência:* ${encodeURIComponent(selectedPeriod)}%0A` +
      `👤 *Nome:* ${encodeURIComponent(clientName)}%0A` +
      `📱 *WhatsApp:* ${encodeURIComponent(clientPhone)}%0A` +
      (notes.trim() ? `💬 *Observações:* ${encodeURIComponent(notes)}%0A` : '') +
      photoNotice +
      `%0A%0AAguardo a confirmação do atelier!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneSalon}&text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const filteredGallery = activeFilter === 'Todos'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const currentItem = servicesList.find((service) => service.name === selectedService) || servicesList[0];

  return (
    <div className="min-h-screen bg-[#FBF7F4] text-[#1E1412] font-sans antialiased selection:bg-[#681318] selection:text-white">
      <Header
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
      />
      <Hero scrollTo={scrollTo} />
      <AtelierSection />
      <ServicesSection setSelectedService={setSelectedService} scrollTo={scrollTo} />
      <GallerySection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredGallery={filteredGallery}
        setSelectedService={setSelectedService}
        scrollTo={scrollTo}
      />
      <PackagesSection handleSelectPackage={handleSelectPackage} />
      <FaqSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <BookingSection
        servicesList={servicesList}
        currentItem={currentItem}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        clientName={clientName}
        setClientName={setClientName}
        clientPhone={clientPhone}
        setClientPhone={setClientPhone}
        notes={notes}
        setNotes={setNotes}
        inspirationImage={inspirationImage}
        imageFileName={imageFileName}
        handleImageUpload={handleImageUpload}
        removeImage={removeImage}
        formError={formError}
        agreeTerms={agreeTerms}
        setAgreeTerms={setAgreeTerms}
        handleSendWhatsApp={handleSendWhatsApp}
      />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
