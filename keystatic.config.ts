import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    products: collection({
      label: 'Katalog Produk',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nama Koleksi / Produk' } }),
        price: fields.integer({
          label: 'Harga (IDR)',
          validation: { min: 0 },
        }),
        originalPrice: fields.integer({
          label: 'Harga Coret / Asli (Opsional untuk diskon)',
          validation: { min: 0 },
        }),
        category: fields.select({
          label: 'Kategori',
          options: [
            { label: 'New Arrivals', value: 'new-arrivals' },
            { label: 'Formal & Party', value: 'formal' },
            { label: 'Casual Chic', value: 'casual' },
            { label: 'Modest Wear', value: 'modest' },
            { label: 'Exclusive Sale', value: 'sale' },
          ],
          defaultValue: 'new-arrivals',
        }),
        badge: fields.text({
          label: 'Badge Khusus (cth: "Best Seller", "Limited Edition")',
        }),
        fabric: fields.text({
          label: 'Detail & Karakteristik Bahan',
          description: 'Cth: Silk Cotton Blend - Lembut, sejuk, dan tidak menerawang',
        }),
        colors: fields.text({
          label: 'Pilihan Warna (Pisahkan dengan koma)',
          description: 'Cth: Charcoal Black, Champagne Gold, Pearl White',
        }),
        sizes: fields.text({
          label: 'Pilihan Ukuran (Pisahkan dengan koma)',
          description: 'Cth: S, M, L, XL',
        }),
        image: fields.text({
          label: 'URL Gambar Utama',
          description: 'Gunakan URL gambar WebP atau foto dari public/assets',
        }),
        inStock: fields.checkbox({
          label: 'Status Ketersediaan (Tersedia / Ready Stock)',
          defaultValue: true,
        }),
        description: fields.text({
          label: 'Deskripsi Singkat Koleksi',
          multiline: true,
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Pengaturan Butik & Kontak',
      path: 'src/content/settings/general',
      format: { data: 'json' },
      schema: {
        boutiqueName: fields.text({ label: 'Nama Butik', defaultValue: 'butikqu' }),
        tagline: fields.text({
          label: 'Tagline Butik',
          defaultValue: 'Elegansi Kontemporer & Presisi Jahitan Butik',
        }),
        whatsappNumber: fields.text({
          label: 'Nomor WhatsApp Admin (Format 62xxx)',
          defaultValue: '6281234567890',
        }),
        address: fields.text({
          label: 'Alamat Lengkap Toko Fisik',
          multiline: true,
        }),
        operatingHours: fields.text({
          label: 'Jam Operasional Toko',
          defaultValue: 'Senin - Minggu: 10:00 - 21:00 WIB',
        }),
        instagramUrl: fields.text({ label: 'Link Instagram' }),
        tiktokUrl: fields.text({ label: 'Link TikTok' }),
        mapsEmbedUrl: fields.text({ label: 'Link Google Maps Embed' }),
      },
    }),
  },
});

