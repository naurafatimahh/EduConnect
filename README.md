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
- **Google Fonts/Poppins** untuk tipografi.
- Tanpa backend dan database; data pada prototipe bersifat statis.

## Struktur Project

```text
EduConnect/
├── docs/
│   ├── PRD.md
│   └── DESIGN.md
├── css/
│   └── style.css
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

## Cara Menjalankan Project

Project dapat dijalankan secara lokal tanpa proses build atau instalasi package.

1. Clone repository:

```bash
git clone https://github.com/naurafatimahh/EduConnect.git
```

2. Masuk ke folder project:

```bash
cd EduConnect
```

3. Buka `index.html` menggunakan browser, atau jalankan melalui Live Server pada VS Code.

4. Gunakan tautan **Forum** pada sidebar untuk membuka `forum.html`.

## Status Implementasi

Saat ini implementasi mencakup tampilan front-end prototipe:

- Halaman Beranda tersedia.
- Halaman Forum tersedia.
- Navigasi antarsumber halaman tersedia.
- Pencarian, pengiriman pertanyaan, pengiriman jawaban, autentikasi, database, dan backend belum terimplementasi.
- Konten yang ditampilkan merupakan data statis/simulasi.
