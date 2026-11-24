# EduConnect

EduConnect adalah prototipe website edukasi responsif untuk pelajar SMP dan SMA/SMK. Proyek ini menyediakan dashboard pembelajaran, pencarian materi atau pertanyaan, pilihan jenjang, dan forum diskusi antarpengguna.

Proyek ini dikembangkan sebagai tugas mata kuliah Desain Web Semester 3.

## Repository dan Demo

- **Repository GitHub:** [naurafatimahh/EduConnect](https://github.com/naurafatimahh/EduConnect)
- **URL sitemap project:** [Dokumen Rancangan dan Site Structure EduConnect](https://docs.google.com/document/d/1oTGzu2bCuo2URjWIY29Ev_6XPewkSNznb1GWJBmCZpI/edit?usp=sharing)
- **Wireframe & mockup:** [Figma EduConnect](https://www.figma.com/design/2HWUkPL2H9lqIZcnbPTI8Z/EduConnect?node-id=27-2&p=f&t=H5aD7b9eZvcNTivq-0)

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
