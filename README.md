# EduConnect - Dashboard Halaman Utama

Proyek latihan pembuatan halaman dashboard **EduConnect** untuk mata kuliah **Desain Web** (Semester 3).

---

## 💡 Konsep Tata Letak Sesuai Mockup

1. **Navbar Atas (Header Terhubung)**:
   - Berwarna putih (`#ffffff`), menyatu rapi dengan sidebar.
   - Sisi kiri: Logo **EduConnect** (sejajar di atas sidebar).
   - Sisi kanan: Ikon **Notifikasi** dan **Profil**.

2. **Sidebar Kiri**:
   - Berwarna putih dengan border kanan, memanjang ke bawah (`height: calc(100vh - 70px)`).
   - Menu: **Beranda** (aktif dengan latar biru), **Materi & Pertanyaan**, **Forum**, dan **Profil**.

3. **Konten Utama (Seimbang & Tidak Miring ke Kiri)**:
   - Ditempatkan di dalam `.content-container` dengan `margin: 0 auto` dan `max-width: 1050px` sehingga berada di tengah area konten secara seimbang.
   - Terdiri dari:
     - Banner sambutan latar biru muda.
     - Kotak pencarian (*Search Bar*).
     - Pilihan jenjang (SMP & SMA/SMK) dengan **Bootstrap Grid**.
     - Daftar pertanyaan terbaru.
     - Tombol FAB melayang di kanan bawah.
