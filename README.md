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
- **Logo:** `1.3rem` / sekitar `20.8px`.
- **Judul halaman/banner:** `1.55rem-1.6rem` / sekitar `24.8-25.6px`.
- **Judul kartu/pertanyaan:** `1rem` / sekitar `16px`.
- **Nama pengguna, menu, dan input:** `0.95rem` / sekitar `15.2px`.
- **Deskripsi:** `0.88rem-0.92rem` / sekitar `14.1-14.7px`.
- **Metadata dan badge:** `0.8rem` / sekitar `12.8px`.

Standar visual lengkap, termasuk spacing, border radius, shadow, komponen, interaksi, dan responsivitas, tersedia pada [docs/DESIGN.md](docs/DESIGN.md).

## Struktur Project

```text
EduConnect/
├── docs/
│   ├── PRD.md
│   └── DESIGN.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
├── .vscode/
│   └── settings.json
├── index.html
├── forum.html
└── README.md
```

- `index.html`: halaman beranda/dashboard.
- `forum.html`: halaman forum diskusi.
- `css/style.css`: stylesheet utama dan gaya responsif.
- `js/script.js`: script animasi halus dan interaksi sederhana.
- `img/`: aset gambar project.
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
- Navigasi antarsumber halaman tersedia.
- Pencarian, pengiriman pertanyaan, pengiriman jawaban, autentikasi, database, dan backend belum terimplementasi.
- Konten yang ditampilkan merupakan data statis/simulasi.
