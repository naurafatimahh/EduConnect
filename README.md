# EduConnect

EduConnect adalah prototipe website edukasi responsif untuk pelajar SMP dan SMA/SMK. Proyek ini menyediakan dashboard pembelajaran, pencarian materi atau pertanyaan, pilihan jenjang, dan forum diskusi antarpengguna.

Proyek ini dikembangkan sebagai tugas mata kuliah Desain Web Semester 3.

## Repository dan Demo

- **Repository GitHub:** [naurafatimahh/EduConnect](https://github.com/naurafatimahh/EduConnect)
- **URL sitemap project:** [Dokumen Rancangan dan Site Structure EduConnect](https://docs.google.com/document/d/1oTGzu2bCuo2URjWIY29Ev_6XPewkSNznb1GWJBmCZpI/edit?usp=sharing)
- **Wireframe & mockup:** [Figma EduConnect](https://www.figma.com/design/2HWUkPL2H9lqIZcnbPTI8Z/EduConnect?node-id=27-2&p=f&t=H5aD7b9eZvcNTivq-0)

## Analisis 5W1H

| Aspek | Analisis EduConnect |
|---|---|
| **What - Apa** | EduConnect adalah prototipe website edukasi responsif yang menghubungkan pelajar SMP dan SMA/SMK dengan materi, pertanyaan, jawaban, dan forum diskusi. Implementasi saat ini berupa front-end statis dengan simulasi interaksi menggunakan HTML, CSS, Bootstrap, dan JavaScript. |
| **Who - Siapa** | Pengguna utama adalah pelajar SMP (kelas 7-9) dan pelajar SMA/SMK (kelas 10-12). Berdasarkan PRD, pengguna dapat berperan sebagai pencari informasi, penanya, atau penjawab. |
| **When - Kapan** | Proyek dikembangkan pada mata kuliah Desain Web Semester 3 sebagai tahapan perancangan sampai implementasi prototipe. Implementasi prototipe tidak menjadikan data sebagai penyimpanan permanen; fitur frontend dapat digunakan kapan pengguna membuka halaman. |
| **Where - Di mana** | Website dapat diakses melalui browser desktop, tablet, maupun perangkat seluler. Struktur halaman mencakup beranda, materi, forum, detail pertanyaan, profil, login, daftar, dan edit profil. |
| **Why - Mengapa** | Pelajar perlu sarana yang mudah untuk menemukan materi atau pembahasan sesuai jenjang dan mata pelajaran, serta dapat bertanya dan berbagi jawaban. EduConnect menyederhanakan pencarian, diskusi, dan navigasi belajar dalam satu antarmuka yang konsisten. |
| **How - Bagaimana** | Pengguna memilih jenjang dan mata pelajaran, mencari materi atau pertanyaan, membuka daftar atau detail konten, lalu membaca serta mensimulasikan pengajuan pertanyaan atau jawaban. Data contoh dan keadaan interaksi dikelola secara statis atau melalui penyimpanan browser, sesuai batasan prototipe. |

## Data dan Informasi Pendukung

Data berikut menjadi dasar penyusunan kebutuhan dan implementasi EduConnect:

| Data Pendukung | Hasil Analisis Proyek |
|---|---|
| Target jenjang | Dua jenjang pengguna utama: **SMP** (kelas 7-9) dan **SMA/SMK** (kelas 10-12). |
| Mata pelajaran contoh | Matematika, Kimia, Kewarganegaraan, Pemrograman, dan Bahasa Indonesia digunakan pada prototipe untuk menguji pencarian, filter, kartu materi, serta forum. |
| Materi unggulan | Tersedia contoh materi **Integral Tentu: Cara Menghitung dan Contohnya** beserta halaman detail. |
| Pertanyaan contoh | Konten berisi topik seperti Persamaan dan Fungsi Kuadrat, serta pertanyaan lain pada beranda dan forum. |
| Struktur kebutuhan | PRD mendefinisikan alur pencarian, pemilihan jenjang, pemilihan mata pelajaran, detail pertanyaan, pengajuan pertanyaan, jawaban, profil, dan navigasi. |
| Kebutuhan antarmuka | DESIGN.md menetapkan hierarki navigasi, palet warna, tipografi Poppins dan Inter, komponen kartu/form, state interaksi, serta perilaku responsif. |
| Teknologi implementasi | HTML5, CSS3, Bootstrap 5.3.2, Bootstrap Icons 1.11.3, dan JavaScript vanilla. |
| Status penyimpanan | Belum terdapat backend atau database. Profil dapat disimpan sementara pada `localStorage` dan sebagian aksi masih berupa simulasi data pada sesi front-end. |
| Responsivitas | Dibutuhkan tampilan yang tetap dapat digunakan pada desktop, tablet, dan mobile. Implementasi saat ini menggunakan grid Bootstrap serta penanganan layout pada breakpoint maksimal `768px`. |

**Sumber pendukung dalam repository:**

- [PRD EduConnect](docs/PRD.md) — kebutuhan produk, target pengguna, alur, kebutuhan fungsional/nonfungsional, ruang lingkup, dan kriteria penerimaan.
- [Panduan Desain](docs/DESIGN.md) — sitemap, navigasi, komponen, visual, aksesibilitas, dan responsivitas.
- [Halaman Beranda](index.html) — jenjang, pencarian, pertanyaan, dan navigasi.
- [Halaman Materi](pages/materi.html) dan [JavaScript Materi](js/materi.js) — filter jenjang/mata pelajaran, pencarian, pagination simulasi, dan simpan materi.
- [Halaman Detail Pertanyaan](pages/question-detail.html) dan [JavaScript Detail Pertanyaan](js/question-detail.js) — interaksi suka, simpan, bagikan, vote, toolbar jawaban, dan pengiriman jawaban simulasi.
- [Pengelolaan Profil](js/script.js) — penyimpanan dan pengubahan profil melalui `localStorage`.

## Tujuan Project

- Memudahkan pelajar menemukan pertanyaan atau pembahasan berdasarkan jenjang dan mata pelajaran.
- Menyediakan ruang diskusi untuk mengajukan pertanyaan dan berbagi jawaban.
- Menyajikan navigasi dashboard yang mudah dipahami oleh pelajar.
- Mengimplementasikan rancangan wireframe dan mockup menjadi tampilan website responsif.

## Fitur yang Tersedia

- Beranda atau dashboard EduConnect.
- Daftar materi dengan pencarian serta filter jenjang dan mata pelajaran.
- Halaman detail materi Integral Tentu dengan tujuan pembelajaran dan tombol simpan.
- Banner sambutan dan pencarian materi atau pertanyaan.
- Pilihan jenjang SMP serta SMA/SMK.
- Daftar pertanyaan terbaru beserta mata pelajaran dan jenjang.
- Halaman forum diskusi.
- Tombol untuk mengajukan pertanyaan.
- Navigasi sidebar untuk Beranda, Materi & Pertanyaan, Forum, dan Profil.
- Tata letak responsif untuk desktop, tablet, dan perangkat seluler.

## Teknologi yang Digunakan

- **HTML5** untuk struktur dan konten halaman.
- **CSS3** untuk layout, komponen, warna, dan responsivitas.
- **Bootstrap 5.3.2** untuk grid dan utilitas antarmuka.
- **Bootstrap Icons 1.11.3** untuk ikon.
- **JavaScript (Vanilla JS)** sederhana untuk animasi halus (fade-in konten, transisi jenjang, dan smooth scroll).
- **Google Fonts:** Poppins sebagai primary font dan Inter sebagai secondary font.
- Tanpa backend dan database; data pada prototipe bersifat statis.

## Standar Desain Singkat

### Color Palette

- **Primary Blue:** `#1D68F5`
- **Primary Hover:** `#1554C9`
- **Primary Light:** `#EAF2FF`
- **White / Surface:** `#FFFFFF`
- **Page Background:** `#F8FAFC`
- **Heading:** `#0F172A`
- **Body Text:** `#334155`
- **Secondary Text:** `#475569`
- **Muted Text:** `#64748B`
- **Border:** `#E2E8F0`
- **Border Strong:** `#CBD5E1`
- **Hover Border:** `#93C5FD`
- **Success:** `#22C55E`

### Jenis dan Ukuran Font

- **Primary font:** Poppins, sans-serif.
- **Secondary font:** Inter, sans-serif.
- **Font weight:** `400`, `500`, `600`, dan `700`.

Standar visual lengkap, termasuk spacing, border radius, shadow, komponen, interaksi, dan responsivitas, tersedia pada [docs/DESIGN.md](docs/DESIGN.md).

## Struktur Project

```text
EduConnect/
├── assets/
│   └── images/
│       ├── character.png
│       ├── image.png
│       ├── integral-thumbnail.jpg
│       └── profile.png
├── css/
│   ├── components/
│   │   └── common.css
│   └── pages/
│       ├── auth.css
│       ├── edit-profile.css
│       ├── forum.css
│       ├── home.css
│       ├── materi.css
│       └── profile.css
├── js/
│   ├── materi.js
│   └── script.js
├── docs/
│   ├── DESIGN.md
│   └── PRD.md
├── pages/
│   ├── detail-materi.html
│   ├── edit-profile.html
│   ├── forum.html
│   ├── login.html
│   ├── materi.html
│   ├── profile.html
│   ├── question-detail.html
│   ├── register.html
│   └── signup.html
├── .vscode/
│   └── settings.json
├── index.html
└── README.md
```

- `index.html`: halaman beranda/dashboard.
- `pages/`: semua halaman selain beranda.
- `pages/forum.html`: halaman forum diskusi.
- `pages/signup.html`: halaman pendaftaran akun pelajar (SMP & SMA/SMK).
- `pages/login.html`: halaman masuk pengguna dengan opsi email dan Google.
- `pages/register.html`: alias/redirect ke `signup.html`.
- `pages/materi.html`: daftar materi dengan pencarian dan filter; pencarian dashboard diteruskan ke halaman ini.
- `pages/detail-materi.html`: detail pembelajaran Integral Tentu.
- `pages/question-detail.html`: detail pertanyaan dan diskusi jawaban.
- `css/components/common.css`: gaya komponen bersama.
- `css/pages/`: stylesheet khusus tiap halaman.
- `js/script.js`: script animasi halus dan interaksi dashboard.
- `js/materi.js`: interaksi pencarian/filter materi dan simulasi simpan materi.
- `assets/images/`: aset gambar project.
- `assets/images/integral-thumbnail.jpg`: thumbnail untuk halaman detail materi Integral Tentu.
- `docs/PRD.md`: rancangan kebutuhan, alur pengguna, ruang lingkup, dan kriteria penerimaan.
- `docs/DESIGN.md`: sitemap, pedoman visual, komponen, responsivitas, dan spesifikasi desain.

## Dokumen Perancangan

Seluruh dokumen perancangan yang digunakan pada tahap awal telah dimasukkan ke repository:

1. **Rancangan Kebutuhan (Requirements Planning / PRD)**  
   [Buka PRD](docs/PRD.md)

2. **Site Structure**  
   [Buka dokumen site structure](https://docs.google.com/document/d/1oTGzu2bCuo2URjWIY29Ev_6XPewkSNznb1GWJBmCZpI/edit?usp=sharing)

3. **Wireframe & Mockup**  
   [Buka desain Figma](https://www.figma.com/design/2HWUkPL2H9lqIZcnbPTI8Z/EduConnect?node-id=27-2&p=f&t=H5aD7b9eZvcNTivq-0)

4. **Panduan Desain dan Spesifikasi Antarmuka**  
   [Buka design.md](docs/DESIGN.md)

## Status Implementasi

Saat ini implementasi mencakup tampilan front-end prototipe:

- Halaman Beranda tersedia.
- Halaman Forum tersedia.
- Halaman daftar materi dan detail Integral Tentu tersedia.
- Navigasi antarsumber halaman tersedia.
- Pencarian dashboard diteruskan ke daftar materi, dan pencarian/filter di halaman materi berfungsi; pengiriman pertanyaan, pengiriman jawaban, autentikasi nyata, database, dan backend belum terimplementasi.
- Konten yang ditampilkan merupakan data statis/simulasi.
