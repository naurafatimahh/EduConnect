# EduConnect - Dashboard & Forum Diskusi

Proyek latihan pembuatan halaman website **EduConnect** untuk mata kuliah **Desain Web** (Semester 3).

---

## 📁 Halaman yang Tersedia

1. **[index.html](index.html)** — Halaman Utama (Beranda / Dashboard):
   - Banner sambutan latar biru muda.
   - Kotak pencarian (*Search Bar*).
   - Pilihan jenjang (SMP & SMA/SMK) dengan **Bootstrap Grid**.
   - Feed pertanyaan terbaru.
   - Tombol melayang (*Floating Action Button*) pensil di pojok kanan bawah.

2. **[forum.html](forum.html)** — Halaman Forum Diskusi:
   - Tab **Forum** di sidebar dalam status aktif (berwarna biru).
   - Judul **Forum Diskusi** dan tombol **+ Ajukan Pertanyaan**.
   - Input pencarian forum yang bersih dan membentang penuh.
   - Kartu diskusi forum yang memuat info pembuat (Naura Patimah), badge mata pelajaran, badge jenjang, judul pertanyaan, deskripsi, serta jumlah jawaban dengan centang hijau.

---

## 💡 Konsep Desain & Grid

- **Layout Sidebar & Topbar**:
  - Navbar atas menyatu dengan warna putih dan border bawah.
  - Sidebar di sebelah kiri memanjang ke bawah (`min-height: calc(100vh - 70px)`).
  - Berpindah antar halaman (*Beranda* dan *Forum*) dapat dilakukan langsung melalui navigasi sidebar.
- **Responsif**:
  - Menggunakan Bootstrap 5 utilitas (`d-flex`, `row`, `col-12`, `rounded-4`) serta CSS Media Queries untuk layar ponsel dan laptop.
  - Tanpa JavaScript (HTML5 & CSS3 murni).
