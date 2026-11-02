# Product Requirements Document (PRD): Landing Page Katalog & Promosi Butik

* **Versi Dokumen:** 1.0
* **Status:** Draft / MVP Specification
* **Target Rilis:** 2–3 Minggu

---

## Ringkasan Eksekutif (TL;DR)
PRD ini dirancang untuk mengatasi masalah butik *offline* yang kehilangan potensi penjualan akibat jangkauan lokal yang terbatas dan alur transaksi media sosial yang kurang terstruktur. Solusinya adalah *high-performance landing page* berbasis visual (*lookbook*/katalog) yang mengalirkan *traffic* langsung ke konversi pemesanan via WhatsApp dan kunjungan ke toko fisik.

---

## 1. Problem Statement & Context (WHY)

Banyak pengusaha butik menghadapi friksi operasional saat hanya mengandalkan toko fisik dan media sosial:

* **Jangkauan Terbatas:** Penjualan terikat pada jam buka toko fisik dan radius demografi lokal di sekitar lokasi butik.
* **Katalog Media Sosial Tidak Efisien:** Calon pembeli kesulitan mengecek koleksi aktif, detail bahan, atau *size chart* di *feed* Instagram yang tercampur dengan konten lama.
* **Tingginya Drop-off Chat:** Admin butik kewalahan menjawab pertanyaan repetitif seputar harga, ketersediaan stok, dan lokasi toko secara manual.
* **Kurangnya Kredibilitas Digital:** Tanpa situs web resmi, butik sulit membangun citra *brand* premium dan kehilangan *traffic* pencarian organik lokal (Google Search/Maps).

---

## 2. Product Objectives & Success Metrics

* **Tujuan Utama:** Menyediakan satu pintu informasi resmi yang menampilkan katalog visual premium dan mempermudah alur pemesanan secara instan.
* **Target Launch (MVP):** Situs web *live* dalam 2–3 minggu dengan fokus pada performa perangkat *mobile* dan kemudahan reservasi/pemesanan.
* **Key Performance Indicators (KPIs):**
  * *Click-through-rate* (CTR) tombol *Chat via WhatsApp* $\ge 15\%$.
  * Google Core Web Vitals: LCP (*Largest Contentful Paint*) $< 2.0$ detik pada koneksi 4G *mobile*.
  * Penurunan pertanyaan dasar yang repetitif ke admin sebesar $\ge 40\%$.
  * Peningkatan klik navigasi rute ke butik fisik via Google Maps *embed*.

---

## 3. User Personas

| Persona | Profil & Kebiasaan | Kebutuhan Utama (Goals & Pain Points) |
| :--- | :--- | :--- |
| **Primary User (Calon Pembeli)** | Wanita/pria urban usia 20–45 tahun, mengakses web via *smartphone* dari iklan/bio medsos. | Navigasi cepat, gambar produk jelas, kepastian ukuran (*size chart*) dan detail bahan sebelum menghubungi admin. |
| **Admin / Pemilik Butik** | Pengelola operasional harian butik dengan keterbatasan waktu teknis. | Halaman web yang mudah diperbarui katalog fotonya tanpa *coding* ulang, serta menerima pesan masuk WhatsApp yang sudah terformat rapi. |

---

## 4. Feature Specifications (HOW)

Kebutuhan fitur dibagi menjadi prioritas MVP (*Minimum Viable Product*) untuk mempercepat rilis:

### 4.1. Hero Section & Value Proposition (P0 - Wajib)
* Banner visual dinamis beresolusi tinggi (teroptimasi untuk layar vertikal/HP) yang menampilkan koleksi unggulan (*signature collection*).
* *Headline* yang merepresentasikan identitas/slogan butik.
* Tombol CTA (*Call to Action*) utama: *"Lihat Koleksi Terbaru"*.

### 4.2. Curated Lookbook & Catalog (P0 - Wajib)
* Galeri produk dengan filter kategori cepat (misal: *New Arrivals*, *Formal*, *Casual*, *Modest*, *Sale*).
* Detail kartu produk mencakup: Foto *multi-angle*, nama koleksi, harga, deskripsi singkat karakter bahan, ketersediaan ukuran, dan panduan *size chart* (*modal pop-up*).

### 4.3. Smart WhatsApp Order Integration (P0 - Wajib)
* Tombol CTA pada setiap item produk yang mengarahkan langsung ke API WhatsApp admin butik.
* *Auto-populated text* (pesan terformat otomatis), contoh: 
  > *"Halo Admin [Nama Butik], saya tertarik memesan koleksi [Nama Produk] - Warna [Warna] - Ukuran [Size] yang ada di website. Apakah stoknya masih tersedia?"*

### 4.4. Store Locator & Operational Hours (P0 - Wajib)
* Peta interaktif (Google Maps *embed*) dengan tombol langsung *"Buka Petunjuk Arah"*.
* Informasi alamat lengkap, patokan lokasi/parkir, dan jadwal jam buka operasional butik.

### 4.5. Brand Story & Social Proof (P1 - Penting)
* Seksi profil singkat filosofi butik dan keunikan kualitas jahitan/bahan.
* Kumpulan ulasan/testimoni pelanggan terverifikasi beserta foto pemakaian asli (*real pict*).
* *Preview* atau tautan langsung ke *feed* Instagram/TikTok resmi butik.

### 4.6. Floating Quick Action Button (P1 - Penting)
* Tombol melayang (*floating CTA*) WhatsApp di pojok kanan bawah layar agar pengunjung dapat langsung berkonsultasi dari posisi *scroll* mana pun.

---

## 5. Technical & Non-Functional Requirements

Arsitektur dipilih dengan prinsip efisiensi biaya, minim perawatan server (*low-maintenance*), dan kecepatan muat gambar yang optimal:

* **Tech Stack:** *Static Site Generator* (SSG) atau *Server-Side Rendering* (SSR) ringan seperti **Astro** atau **Next.js**, di-*hosting* pada *edge* CDN (seperti Cloudflare Pages atau Vercel).
* **Asset Optimization:** Otomasi kompresi gambar ke format **WebP/AVIF** dengan *lazy-loading* wajib agar beban muat katalog visual *fashion* tetap ringan dan tajam.
* **Content Management System (CMS):** Integrasi *Headless CMS* ringan (seperti Directus, Strapi, atau Decap CMS) agar tim butik dapat memperbarui katalog, harga, dan status *sold out* secara mandiri.
* **SEO & Analytics:** Pemasangan Meta Tags (OpenGraph untuk *preview* link di WhatsApp/medsos), Google Analytics 4 (GA4), dan Meta Pixel / TikTok Pixel untuk kebutuhan *retargeting ads*.
* **Security:** Penerapan HTTPS wajib, *Strict Security Headers*, dan *caching* aset statis pada jaringan CDN.

---

## 6. Trade-offs & Architecture Considerations

1. **Landing Page + WhatsApp Checkout vs. Full E-Commerce (Shopping Cart)**
   * **Keputusan:** Menggunakan alur *checkout* via WhatsApp untuk fase MVP.
   * **Alasan & Trade-off:** Menghemat biaya pembuatan dan komisi *payment gateway*, menghindari kerumitan sinkronisasi stok *real-time* antara kasir toko fisik dan web, serta mempertahankan sentuhan personal (*personalized customer service*) khas butik.
   * **Konsekuensi:** Rekapitulasi pembayaran dan pemotongan stok masih dilakukan secara semi-manual oleh admin/kasir.

2. **Modern Web Stack (Jamstack) vs. Traditional Page Builder**
   * **Keputusan:** Menggunakan *framework* statis modern + Headless CMS.
   * **Alasan & Trade-off:** Menjamin performa kecepatan muat halaman yang jauh lebih tinggi (krusial untuk menahan pengunjung dari iklan media sosial) dan bebas dari risiko celah keamanan *plugin*.
   * **Konsekuensi:** Perubahan tata letak (*layout* besar) membutuhkan bantuan pengembang, meskipun perubahan konten/katalog tetap bisa dilakukan mandiri oleh admin butik.

---

## 7. Roadmap Implementasi Singkat

* **Minggu 1:** Pengumpulan aset foto produk, penentuan struktur *copywriting*, dan pembuatan desain UI/UX (*wireframe* & *high-fidelity*).
* **Minggu 2:** Pengembangan *front-end* landing page, integrasi CMS katalog, dan pengaturan format pesan otomatis WhatsApp.
* **Minggu 3:** Pengujian performa di berbagai perangkat *mobile*, optimasi SEO lokal, pemasangan *tracking pixel*, dan peluncuran resmi (*Go-Live*).