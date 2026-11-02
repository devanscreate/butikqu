export interface BoutiqueInfo {
  name: string;
  tagline: string;
  subtagline: string;
  whatsappNumber: string; // e.g. 6281234567890
  phoneDisplay: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    landmark: string;
  };
  hours: {
    days: string;
    time: string;
    note: string;
  };
  maps: {
    embedUrl: string;
    directLink: string;
  };
  socials: {
    instagram: string;
    tiktok: string;
    shopee?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const boutiqueConfig: BoutiqueInfo = {
  name: 'butikqu',
  tagline: 'Koleksi Busana Elegan & Eksklusif untuk Setiap Momen Istimewa',
  subtagline: 'Dirancang dengan presisi jahitan standard butik, material premium pilihan, dan siluet kontemporer yang memancarkan pesona anggun.',
  whatsappNumber: '6281234567890',
  phoneDisplay: '+62 812-3456-7890',
  address: {
    street: 'Jl. Senopati Raya No. 48, Kebayoran Baru',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postalCode: '12190',
    landmark: 'Tepat di samping Senopati Heritage Gallery (Area Parkir Luas)',
  },
  hours: {
    days: 'Senin – Minggu (Buka Setiap Hari)',
    time: '10:00 – 21:00 WIB',
    note: 'Kunjungan fitting privat disarankan melakukan reservasi via WhatsApp terlebih dahulu.',
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273678077553!2d106.80490797499042!3d-6.227599393760633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15034b22ee9%3A0x63351608670c55cf!2sSenopati%2C%20Kebayoran%20Baru%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
    directLink: 'https://maps.google.com/?q=Senopati+Kebayoran+Baru+Jakarta+Selatan',
  },
  socials: {
    instagram: 'https://instagram.com/butikqu.official',
    tiktok: 'https://tiktok.com/@butikqu.official',
  },
  features: [
    {
      title: 'Bahan Premium Terkurasi',
      description: 'Hanya menggunakan silk, katun sutra, linen, dan kain berpori ramah kulit bersertifikat mutu.',
      icon: 'feather',
    },
    {
      title: 'Jahitan Presisi Butik',
      description: 'Tiap helai dikerjakan penjahit butik berpengalaman dengan kampuh rapi dan ketahanan maksimal.',
      icon: 'scissors',
    },
    {
      title: 'Fitting Privat & Konsultasi',
      description: 'Ruang fitting luas dan personal stylist yang siap membantu memadupadankan gaya terbaik Anda.',
      icon: 'sparkles',
    },
    {
      title: 'Pengiriman Cepat & Bergaransi',
      description: 'Packaging eksklusif gift-box tebal dan jaminan tukar ukuran bila ada ketidaksesuaian.',
      icon: 'package-check',
    },
  ],
};

/**
 * Helper untuk membuat URL WhatsApp otomatis sesuai PRD seksi 4.3
 */
export function buildWhatsAppLink(
  productName?: string,
  color?: string,
  size?: string
): string {
  const phone = boutiqueConfig.whatsappNumber;
  let message = '';

  if (productName) {
    const colorText = color ? ` - Warna ${color}` : '';
    const sizeText = size ? ` - Ukuran ${size}` : '';
    message = `Halo Admin butikqu, saya tertarik memesan koleksi *${productName}*${colorText}${sizeText} yang ada di website. Apakah stoknya masih tersedia?`;
  } else {
    message = `Halo Admin butikqu, saya ingin berkonsultasi mengenai koleksi katalog dan ketersediaan busana di butik.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

