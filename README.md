# butikqu — Landing Page Katalog & Promosi Butik

Landing page katalog visual (*lookbook*) modern, elegan, dan berkinerja tinggi untuk **butikqu**, dirancang untuk memaksimalkan konversi pemesanan langsung via WhatsApp dan kunjungan ke butik fisik.

Dokumen spesifikasi lengkap mengacu pada [PRD.md](PRD.md).

---

## 🎨 Palet Warna (Luxury Minimalist)

Sesuai preferensi yang telah disetujui pada panduan *Color Palette Gatekeeper*:

* **Primary:** `#1A1A1A` (Charcoal / Hampir Hitam) — Elemen tipografi utama, tombol primer, dan aksen kontras.
* **Background:** `#F9FAFB` (Pure Clean White / Soft Gray) — Latar belakang halaman yang bersih dan kanvas kartu produk `#FFFFFF`.
* **Accent:** `#C5A880` (Champagne Gold / Muted Brass) — Aksen lencana, border halus, badge promo, dan aksen status.

---

## 🚀 Fitur Unggulan (Sesuai PRD)

1. **Hero Section & Value Proposition (P0)**
   * Banner visual dinamis teroptimasi untuk perangkat *mobile* dan desktop.
   * Headline elegan dengan slogan identitas butik.
   * Call to Action utama (*Lihat Koleksi Terbaru*) dan sekunder (*Konsultasi Ukuran*).
2. **Curated Lookbook & Catalog (P0)**
   * Filter kategori instan: *Semua*, *New Arrivals*, *Formal & Party*, *Casual Chic*, *Modest Wear*, dan *Exclusive Sale*.
   * Kartu produk dengan detail bahan (*silk*, katun sutra, *linen*), harga coret (diskon), dan varian ukuran.
   * Modal interaktif **Size Chart** dan detail material lengkap dengan pilihan warna & ukuran.
3. **Smart WhatsApp Order Integration (P0)**
   * Pemesanan terhubung langsung ke WhatsApp admin dengan teks pesan otomatis:
     > *"Halo Admin butikqu, saya tertarik memesan koleksi [Nama Produk] - Warna [Warna] - Ukuran [Size] yang ada di website. Apakah stoknya masih tersedia?"*
4. **Store Locator & Operational Hours (P0)**
   * Informasi butik fisik di Senopati, Jakarta Selatan lengkap dengan jam operasional harian.
   * Embed peta interaktif Google Maps + tombol langsung *"Buka Petunjuk Arah"*.
   * Tombol reservasi ruang *fitting* privat ber-AC via WhatsApp.
5. **Brand Story & Social Proof (P1)**
   * Seksi filosofi butik, standar penjahitan *atelier*, dan tautan media sosial (Instagram & TikTok).
   * Kumpulan ulasan & testimoni pelanggan terverifikasi.
6. **Floating Quick Action Button (P1)**
   * Tombol WhatsApp melayang (*floating CTA*) di sudut kanan bawah layar yang selalu dapat diakses saat *scroll*.
7. **Git-based CMS (Keystatic)**
   * Manajemen katalog produk dan informasi butik tanpa perlu *coding* ulang melalui rute `/keystatic`.

---

## 🛠️ Tech Stack

* **Framework:** [Astro](https://astro.build/) (v4.x)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **CMS:** [Keystatic](https://keystatic.com/) (Git-based / local JSON)
* **Hosting & Edge CDN:** [Cloudflare Pages](https://pages.cloudflare.com/) (dengan adaptor `@astrojs/cloudflare`)

---

## 💻 Panduan Pengujian & Menjalankan Proyek

Sesuai aturan keamanan pengembang, instalasi dependensi dan eksekusi server pengujian diserahkan sepenuhnya kepada pengguna:

### 1. Pasang Dependensi
Buka terminal/PowerShell di direktori proyek ini, lalu jalankan:
```bash
npm install
```

### 2. Jalankan Local Development Server
```bash
npm run dev
```
Setelah server berjalan, buka peramban Anda di:
* **Halaman Web Katalog:** `http://localhost:4321`
* **Portal CMS Keystatic:** `http://localhost:4321/keystatic`

### 3. Build untuk Produksi
```bash
npm run build
```

---

## ⚙️ Konfigurasi Nomor WhatsApp & Alamat

Untuk mengganti nomor WhatsApp admin, alamat butik, atau tautan media sosial, Anda dapat mengedit file:
* [`src/data/boutique.ts`](src/data/boutique.ts)
* Atau melalui dashboard Keystatic di `/keystatic` (Singleton: *Pengaturan Butik & Kontak*).

