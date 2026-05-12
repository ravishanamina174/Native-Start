// data.ts (Place this in your root directory)

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  volume: string;
  image: string;
  description: string;
  origin: string;
  expiry: string;
  color: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    brand: 'Chopard',
    name: 'Happy',
    price: 249.00,
    volume: '50ml',
    // High-quality imagery to match the "attractive way" requirement
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop',
    description: 'Paying tribute to this plant that is unique in the world of perfumery, Dora Baghriche has played with the rich, multiple nuances of its flowers, leaves, twigs and fruits.',
    origin: 'Italy',
    expiry: '15 March 2027',
    color: '#EAD8D0' // Subtle peach for the home page mask
  },
  {
    id: '2',
    brand: 'BVLGARI',
    name: 'Rose Goldea',
    price: 229.00,
    volume: '50ml',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800',
    description: 'A tribute to femininity combining radiant rose and sophisticated musks into a blend of desire.',
    origin: 'France',
    expiry: '20 June 2028',
    color: '#F4D9D9' // Soft pink mask
  },
  {
    id: '3',
    brand: 'Dior',
    name: 'Jadore',
    price: 229.00,
    volume: '50ml',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800',
    description: 'An iconic fragrance, J’adore Eau de Parfum is the grand feminine floral by the House of Dior.',
    origin: 'France',
    expiry: '10 Jan 2027',
    color: '#EFE2C8' // Gold/Champagne mask
  },
  {
    id: '4',
    brand: 'Lancome',
    name: 'Idole',
    price: 109.00,
    volume: '50ml',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?q=80&w=800',
    description: 'Sophisticated yet modern, this fragrance bursts with notes of citrus, rose, jasmine and white musk.',
    origin: 'France',
    expiry: '05 Nov 2026',
    color: '#F9E1E1' // Pale rose mask
  }
];