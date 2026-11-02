export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'new-arrivals' | 'formal' | 'casual' | 'modest' | 'sale';
  categoryLabel: string;
  badge?: string;
  fabric: string;
  colors: string[];
  sizes: string[];
  image: string;
  gallery: string[];
  description: string;
  inStock: boolean;
  measurements?: Array<{
    size: string;
    bust: string; // Lingkar Dada
    waist: string; // Lingkar Pinggang
    hips: string; // Lingkar Pinggul
    length: string; // Panjang Baju
  }>;
}

export const standardMeasurements = [
  { size: 'S', bust: '88 - 92 cm', waist: '68 - 72 cm', hips: '92 - 96 cm', length: '135 cm' },
  { size: 'M', bust: '94 - 98 cm', waist: '74 - 78 cm', hips: '98 - 102 cm', length: '137 cm' },
  { size: 'L', bust: '100 - 104 cm', waist: '80 - 84 cm', hips: '104 - 108 cm', length: '138 cm' },
  { size: 'XL', bust: '106 - 110 cm', waist: '86 - 90 cm', hips: '110 - 114 cm', length: '140 cm' },
];

export const productsData: Product[] = [
  {
    id: 'aurelia-silk-gown',
    name: 'Aurelia Silk Evening Gown',
    price: 890000,
    originalPrice: 1150000,
    category: 'formal',
    categoryLabel: 'Formal & Party',
    badge: 'Best Seller',
    fabric: 'Pure Mulberry Silk Blend - Sangat lembut, jatuh elegan, dan tidak menerawang.',
    colors: ['Charcoal Night', 'Champagne Gold', 'Emerald Mist'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Gaun malam potongan A-line kontemporer dengan drape leher asimetris yang memancarkan siluet jenjang dan anggun.',
    inStock: true,
    measurements: standardMeasurements,
  },
  {
    id: 'seraphina-linen-blazer',
    name: 'Seraphina Tailored Blazer Set',
    price: 675000,
    category: 'casual',
    categoryLabel: 'Casual Chic',
    badge: 'New Arrival',
    fabric: 'Belgian Linen Twill Premium - Berstruktur tegas, breathable, dan sejuk seharian.',
    colors: ['Sand Beige', 'Charcoal Black', 'Soft Ivory'],
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Setelan blazer dan celana berpotongan modern loose fit. Sangat pas untuk gaya professional chic di kantor maupun brunch santai.',
    inStock: true,
    measurements: standardMeasurements,
  },
  {
    id: 'elena-modest-abaya',
    name: 'Elena Pleated Modest Dress',
    price: 745000,
    category: 'modest',
    categoryLabel: 'Modest Wear',
    badge: 'Signature',
    fabric: 'Korean Ceruty Babydoll Premium Full Furing Silk - Lembut, flowy, dan anti-kusut.',
    colors: ['Oatmeal Cream', 'Muted Mocha', 'Midnight Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Gamis dengan aksen lipit plisket micro di bagian lengan dan lingkar bawah. Desain wudhu-friendly dan busui-friendly dengan resleting jepang tersembunyi.',
    inStock: true,
    measurements: standardMeasurements,
  },
  {
    id: 'valerie-wrap-blouse',
    name: 'Valerie Silk Wrap Blouse',
    price: 495000,
    category: 'new-arrivals',
    categoryLabel: 'New Arrivals',
    badge: 'New',
    fabric: 'Satin Silk Armani - Berkilau halus seperti mutiara, ringan, dan adem di kulit.',
    colors: ['Champagne Pearl', 'Dusty Olive', 'Deep Charcoal'],
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Blus model wrap dengan tali pinggang adjustabel yang memberi ilusi pinggang ramping seketika. Cocok dipadu rok midi maupun celana palazo.',
    inStock: true,
    measurements: standardMeasurements,
  },
  {
    id: 'celeste-jacquard-kaftan',
    name: 'Celeste Gold Jacquard Kaftan',
    price: 920000,
    originalPrice: 1200000,
    category: 'sale',
    categoryLabel: 'Exclusive Sale',
    badge: 'Hemat 23%',
    fabric: 'Jacquard Emboss Gold Thread - Detail motif tenun benang emas mewah dan kokoh.',
    colors: ['Champagne Gold & White', 'Charcoal & Silver'],
    sizes: ['All Size (Fit to XL)'],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Kaftan premium dengan bordir benang emas di sekeliling kerah dan manset. Sangat anggun untuk hari raya, resepsi pesta, atau gala dinner.',
    inStock: true,
    measurements: [
      { size: 'All Size', bust: '115 cm (Loose fit)', waist: 'Free', hips: 'Free', length: '142 cm' },
    ],
  },
  {
    id: 'camille-monochrome-midi',
    name: 'Camille Minimalist Midi Dress',
    price: 580000,
    category: 'formal',
    categoryLabel: 'Formal & Party',
    badge: 'Trending',
    fabric: 'Scuba Crepe Stretch Heavyweight - Tidak menerawang, jatuh rapi, dan elastis nyaman.',
    colors: ['Pure Charcoal Black', 'Off-White Ivory'],
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Midi dress monokrom elegan dengan kerah boat-neck dan belahan samping halus. Pilihan klasik bergaya timeless luxury.',
    inStock: true,
    measurements: standardMeasurements,
  },
];

export const testimonialsData = [
  {
    name: 'Rania Kusuma, S.H.',
    role: 'Pelanggan Butik (Jakarta Selatan)',
    rating: 5,
    comment: 'Jahitan butikqu luar biasa rapi! Bahan Silk Armani-nya benar-benar adem dipakai seharian. Respon admin WhatsApp juga cepat dan ramah sekali waktu konsultasi ukuran.',
    purchasedItem: 'Aurelia Silk Evening Gown',
  },
  {
    name: 'Dinda Maharani',
    role: 'Fashion Content Creator',
    rating: 5,
    comment: 'Puas banget belanja di sini. Fitting room di butik fisiknya sangat nyaman dan privat. Packaging box-nya juga mewah, cocok banget untuk kado.',
    purchasedItem: 'Seraphina Tailored Blazer Set',
  },
  {
    name: 'dr. Sarah Nabila',
    role: 'Dokter & Modest Fashion Enthusiast',
    rating: 5,
    comment: 'Koleksi Elena Abaya sangat flowy dan potongannya menutup aurat dengan sempurna tanpa terlihat bulky. Sudah repeat order 3 kali untuk acara keluarga!',
    purchasedItem: 'Elena Pleated Modest Dress',
  },
];

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

