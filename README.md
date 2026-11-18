# EduConnect – Website Edukasi dan Forum Diskusi

Proyek pengembangan website **EduConnect** untuk mata kuliah **Desain Web (Semester 3)**. EduConnect merupakan platform edukasi yang dirancang untuk membantu siswa SMP dan SMA/SMK dalam mengakses materi pembelajaran, mengajukan pertanyaan, serta berdiskusi dengan pengguna lain.

## 🔗 Design Reference

**Figma – EduConnect UI/UX Design**

[Klik di sini untuk melihat Wireframe dan Mockup EduConnect](https://www.figma.com/design/2HWUkPL2H9lqIZcnbPTI8Z/EduConnect?node-id=27-2&p=f&t=hpIlHbjA6ertCc1V-0)

Mockup Figma digunakan sebagai acuan utama dalam proses implementasi tampilan website.

---

## 💡 Konsep dan Fitur Website

EduConnect memiliki beberapa halaman utama dengan fitur sebagai berikut:

1. **Login dan Sign Up**
   - Halaman login untuk pengguna.
   - Halaman registrasi akun baru.
   - Validasi input pada form.

2. **Dashboard / Beranda**
   - Navbar atas berisi logo, notifikasi, dan profil.
   - Sidebar navigasi.
   - Banner sambutan.
   - Search bar untuk mencari materi atau pertanyaan.
   - Pilihan jenjang pendidikan SMP dan SMA/SMK.
   - Daftar pertanyaan terbaru.
   - Tombol untuk mengajukan pertanyaan.

3. **Pilih Tingkat Sekolah**
   - Pilihan jenjang SMP dan SMA/SMK.
   - Navigasi menuju kategori mata pelajaran.

4. **Kategori Mata Pelajaran**
   - Menampilkan daftar mata pelajaran sesuai jenjang pendidikan.
   - Pengelompokan materi dan pertanyaan berdasarkan mata pelajaran.

5. **Materi dan Pertanyaan**
   - Menampilkan daftar materi pembelajaran.
   - Menampilkan pertanyaan dari pengguna.
   - Fitur pencarian dan navigasi berdasarkan kategori.

6. **Detail Pertanyaan**
   - Menampilkan detail pertanyaan.
   - Menampilkan jawaban dari pengguna lain.
   - Menyediakan kolom untuk memberikan jawaban.

7. **Ajukan Pertanyaan**
   - Form untuk menambahkan pertanyaan.
   - Pengguna dapat mengisi judul, kategori, dan deskripsi pertanyaan.

8. **Profil Pengguna**
   - Menampilkan informasi akun pengguna.
   - Menampilkan aktivitas atau pertanyaan yang pernah dibuat.

---

## 🖥️ Konsep Tata Letak Dashboard

### 1. Navbar Atas (Header Terhubung)
- Berwarna putih (`#FFFFFF`).
- Sisi kiri menampilkan logo **EduConnect**, sejajar dengan area sidebar.
- Sisi kanan menampilkan ikon notifikasi dan profil pengguna.
- Memiliki tampilan yang konsisten dengan sidebar.

### 2. Sidebar Kiri
- Berwarna putih dengan border kanan.
- Memanjang ke bawah dengan tinggi menyesuaikan viewport.
- Menggunakan menu navigasi:
  - Beranda (aktif dengan latar biru).
  - Materi & Pertanyaan.
  - Forum.
  - Profil.

### 3. Konten Utama
Konten utama ditempatkan di dalam `.content-container` dengan pengaturan lebar maksimal dan posisi di tengah area konten.

Ketentuan layout:
- Menggunakan `margin: 0 auto`.
- Menggunakan `max-width: 1050px`.
- Memiliki jarak antar elemen yang konsisten.

Komponen dashboard:
- Banner sambutan dengan latar biru muda.
- Kotak pencarian (*Search Bar*).
- Pilihan jenjang SMP dan SMA/SMK menggunakan Bootstrap Grid.
- Daftar pertanyaan terbaru.
- Tombol FAB (*Floating Action Button*) di kanan bawah untuk mengajukan pertanyaan.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Membuat struktur halaman website. |
| CSS3 | Mengatur styling dan tampilan tambahan. |
| Bootstrap 5 | Framework untuk layout dan komponen UI. |
| Bootstrap Grid System | Membuat layout website yang responsive. |
| Vanilla JavaScript | Mengatur interaksi dan fungsionalitas halaman. |
| Bootstrap Icons | Menampilkan ikon pada antarmuka. |

---

## 📱 Responsive Design

Website dikembangkan menggunakan pendekatan **Responsive Web Design** agar dapat digunakan pada berbagai ukuran layar.

Implementasi responsive menggunakan:

- Bootstrap Grid System (`container`, `row`, `col-*`).
- Bootstrap breakpoints (`sm`, `md`, `lg`, dan `xl`).
- Bootstrap utility classes seperti `d-flex`, `flex-wrap`, `gap-*`, dan `justify-content-*`.
- `img-fluid` untuk menyesuaikan ukuran gambar.
- Media queries CSS jika diperlukan untuk penyesuaian tambahan.

Target tampilan:
- **Desktop:** Sidebar dan konten ditampilkan berdampingan.
- **Tablet:** Ukuran dan susunan komponen menyesuaikan lebar layar.
- **Mobile:** Konten disusun secara vertikal dan navigasi disesuaikan agar tetap mudah digunakan.

Seluruh halaman diusahakan tidak memiliki horizontal scrolling.

---

## 🎨 Design System

### Color Palette

| Warna | Hex Code | Penggunaan |
|---|---|---|
| Primary Blue | `#2563EB` | Tombol utama, navigasi aktif, dan aksen. |
| Light Blue | `#DBEAFE` | Banner dan latar elemen pendukung. |
| White | `#FFFFFF` | Latar utama dan card. |
| Dark Slate | `#1E293B` | Teks utama. |
| Light Slate | `#F1F5F9` | Latar section dan elemen sekunder. |
| Green | `#16A34A` | Status atau indikator positif. |
| Red | `#DC2626` | Status atau indikator negatif. |

### Typography
- **Poppins:** Digunakan untuk heading dan navigasi.
- **Inter:** Digunakan untuk teks isi dan informasi pendukung.

### UI Style
- Modern dan minimalis.
- Menggunakan card-based layout.
- Sudut elemen membulat (*rounded corners*).
- Spacing konsisten.
- Hierarki visual yang jelas.
- Navigasi sederhana dan mudah dipahami.

---

## 📂 Struktur Folder

Contoh struktur folder proyek:

```text
EduConnect/
│
├── index.html
├── login.html
├── signup.html
│
├── pages/
│   ├── school-level.html
│   ├── subjects.html
│   ├── questions.html
│   ├── question-detail.html
│   ├── ask-question.html
│   └── profile.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── auth.js
│   └── dashboard.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

Struktur tersebut merupakan rancangan organisasi file dan dapat disesuaikan dengan perkembangan implementasi proyek.

---

## 🚀 Cara Menjalankan Proyek

1. Clone repository atau download source code proyek.
2. Buka folder `EduConnect` menggunakan Visual Studio Code.
3. Pastikan seluruh file dan folder berada pada struktur yang sesuai.
4. Jalankan file `index.html` menggunakan browser atau ekstensi Live Server.
5. Website dapat diakses melalui browser.

---

## 📌 Ruang Lingkup Proyek

Proyek ini berfokus pada pengembangan antarmuka website menggunakan HTML, CSS, Bootstrap 5, dan JavaScript.

Fungsionalitas yang membutuhkan backend atau database dapat menggunakan data simulasi selama tahap pengembangan frontend. Dengan demikian, implementasi autentikasi dan penyimpanan data belum dianggap sebagai sistem produksi.

---
