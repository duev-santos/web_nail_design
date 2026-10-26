export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  type: 'servico' | 'pacote';
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  sub: string;
  image: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
