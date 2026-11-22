# DESIGN — EduConnect

> Design Guidelines & Interface Specification  
> Status: Draft  
> Product: EduConnect  
> Design reference: Figma Wireframe and Mockup

## 1. Design Overview

EduConnect merupakan website forum edukasi untuk pelajar SMP dan SMA/SMK. Desain antarmuka perlu mendukung aktivitas utama: menemukan pertanyaan, menelusuri mata pelajaran, membaca diskusi, mengajukan pertanyaan, dan memberikan jawaban.

Dokumen ini menjadi pedoman implementasi UI. Susunan dan tampilan akhir harus mengacu pada wireframe dan mockup di file Figma EduConnect.

## 2. Design Principles

1. **Clear navigation** — pengguna memahami posisi halaman dan cara menuju halaman lain.
2. **Readable content** — pertanyaan dan jawaban menjadi konten utama yang mudah dipindai.
3. **Consistent components** — tombol, input, kartu, label, dan navigasi memiliki pola visual yang konsisten.
4. **Accessible interaction** — elemen interaktif memiliki label yang jelas dan status yang mudah dikenali.
5. **Responsive layout** — konten tetap nyaman digunakan pada desktop, tablet, dan mobile.

## 3. Sitemap / Page Inventory

| Halaman | Tujuan | Konten utama |
|---|---|---|
| Beranda | Titik awal navigasi | Pengenalan, pencarian, pilihan jenjang, kategori, pertanyaan terbaru, navigasi |
| Pilihan Tingkat Sekolah | Memilih jenjang | SMP, SMA/SMK |
| Kategori Mata Pelajaran | Memilih mata pelajaran | Kategori sesuai jenjang |
| Daftar Materi dan Pertanyaan | Menelusuri diskusi | Judul, deskripsi singkat, jenjang, kategori |
| Detail Pertanyaan | Membaca dan menjawab diskusi | Isi pertanyaan, daftar jawaban, jawaban terbaik, form jawaban |
| Ajukan Pertanyaan | Membuat diskusi baru | Form judul, deskripsi, jenjang, mata pelajaran |
| Profil Pengguna | Melihat informasi pengguna | Informasi dasar dan tampilan profil |

## 4. Navigation Model

Gunakan pola hierarki sesuai site structure:

Beranda → Pilihan Tingkat Sekolah → Kategori Mata Pelajaran → Daftar Materi dan Pertanyaan → Detail Pertanyaan.

Fitur pendukung:
- Pencarian dapat diakses dari Beranda.
- Ajukan Pertanyaan dapat diakses melalui navigasi website.
- Profil Pengguna dapat diakses melalui navigasi website.

Pada implementasi, sediakan cara yang jelas untuk kembali ke halaman sebelumnya atau Beranda. Jika breadcrumb digunakan pada mockup, pertahankan pola dan hierarkinya.

## 5. Visual Foundation

### 5.1 Color palette

Palet berikut adalah standar warna yang digunakan pada implementasi saat ini.

| Peran | Hex | Penggunaan |
|---|---|---|
| Primary Blue | `#1D68F5` | Tombol utama, tautan aktif, menu aktif, ikon penting |
| Primary Hover | `#1554C9` | State hover pada tombol utama |
| Primary Light | `#EAF2FF` | Latar avatar, banner, ikon jenjang, dan badge mata pelajaran |
| Primary Border | `#BDD7FF` | Border profil pengguna |
| White / Surface | `#FFFFFF` | Topbar, sidebar, kartu, dan permukaan konten |
| Page Background | `#F8FAFC` | Latar halaman utama |
| Heading / Dark Navy | `#0F172A` | Judul dan teks utama |
| Body Text | `#334155` | Teks isi |
| Secondary Text | `#475569` | Deskripsi dan teks sekunder |
| Muted Text | `#64748B` | Metadata dan teks tambahan |
| Placeholder Text | `#94A3B8` | Placeholder kolom pencarian |
| Border Light | `#E2E8F0` | Garis pemisah dan border kartu ringan |
| Border Strong | `#CBD5E1` | Border search field dan kartu forum |
| Hover Border | `#93C5FD` | Border saat hover |
| Secondary Surface | `#F1F5F9` | Badge jenjang dan latar sekunder |
| Success Green | `#22C55E` | Ikon atau status berhasil |

Gunakan warna dari mockup Figma sebagai sumber final jika terdapat perbedaan detail visual pada tahap implementasi akhir.

### 5.2 Typography

- **Primary font:** Poppins.
- **Secondary font:** Inter.
- **Font stack:** Poppins sebagai teks utama dan Inter sebagai teks pendukung.
- **Jenis font:** Sans-serif.
- **Sumber:** Google Fonts.
- **Font weight:** `400`, `500`, `600`, dan `700`.
- **Line-height deskripsi:** `1.6`.

| Elemen | Ukuran | Font Weight |
|---|---|---|
| Logo | `1.3rem` / sekitar `20.8px` | `700` |
| Judul banner dan forum | `1.55rem-1.6rem` / sekitar `24.8-25.6px` | `700` |
| Judul banner pada mobile | `1.3rem` / sekitar `20.8px` | `700` |
| Judul kartu atau pertanyaan | `1rem` / sekitar `16px` | `700` |
| Nama pengguna dan body control | `0.95rem` / sekitar `15.2px` | `600` untuk nama, `400-500` untuk body |
| Deskripsi | `0.88rem-0.92rem` / sekitar `14.1-14.7px` | `400` |
| Metadata dan badge | `0.8rem` / sekitar `12.8px` | `500-600` |
| Menu sidebar | `0.95rem` / sekitar `15.2px` | `500`, `600` jika aktif |

### 5.3 Spacing, Border, dan Shadow

Skala jarak utama:

- `4px`: jarak sangat kecil antar ikon atau status.
- `8px`: jarak komponen kecil.
- `12px`: jarak antar elemen terkait.
- `16px`: padding kartu, sidebar, dan input yang umum.
- `24px`: jarak section atau elemen berukuran sedang.
- `30px-40px`: padding area konten desktop.
- `60px`: ruang bawah area konten.

Border radius standar:

| Elemen | Radius |
|---|---|
| Logo, menu, search button | `10px` |
| Banner dan ilustrasi | `12px` |
| Card forum | `16px` |
| Badge mata pelajaran/jenjang | `6px-20px` |
| Avatar dan profil | `50%` |
| Floating Action Button | `50%` |

Border dan shadow standar:

- Border ringan: `1px solid #E2E8F0`.
- Border input dan card forum: `1.5px solid #CBD5E1`.
- Border card jenjang aktif: `2px solid #1D68F5`.
- Ilustrasi banner: `0 4px 12px rgba(29, 104, 245, 0.08)`.
- Floating Action Button: `0 4px 15px rgba(29, 104, 245, 0.35)`.
- Transisi umum: `0.2s ease`.

## 6. Layout and Components

### 6.1 Page layout
- Pertahankan struktur dan urutan section sesuai wireframe.
- Gunakan lebar konten yang konsisten.
- Berikan jarak yang cukup antarbagian agar halaman mudah dipindai.
- Hindari kepadatan berlebihan pada daftar pertanyaan dan jawaban.

### 6.2 Navigation
- Tampilkan navigasi utama secara konsisten pada halaman yang membutuhkannya.
- Berikan penanda visual pada menu atau halaman aktif.
- Pastikan label menu singkat dan mudah dimengerti.

### 6.3 Search field
- Sediakan placeholder yang menjelaskan bahwa pengguna dapat mencari materi atau pertanyaan.
- Tampilkan affordance pencarian yang mudah dikenali.
- Pastikan input dapat digunakan dengan keyboard dan memiliki label aksesibel.

### 6.4 Cards and list items
Kartu atau item daftar pertanyaan perlu memprioritaskan:
- Judul pertanyaan.
- Deskripsi singkat.
- Informasi jenjang.
- Informasi mata pelajaran/kategori.

Gunakan hierarki teks yang jelas agar pengguna dapat memindai daftar dengan cepat.

### 6.5 Forms
Formulir Ajukan Pertanyaan berisi:
- Input judul pertanyaan.
- Input deskripsi/isi pertanyaan.
- Pilihan tingkat sekolah.
- Pilihan mata pelajaran.
- Tombol kirim.

Formulir jawaban pada Detail Pertanyaan berisi area untuk menulis jawaban dan tombol kirim. Tampilkan pesan validasi yang dekat dengan field terkait.

### 6.6 Answer state
- Tampilkan jawaban dalam urutan yang mudah dibaca.
- Jawaban terbaik harus memiliki penanda yang jelas dan tidak hanya dibedakan melalui warna.
- Gunakan label atau ikon pendamping agar status tetap dapat dikenali.

### 6.7 Profile
Tampilkan informasi dasar pengguna dengan susunan yang rapi. Detail tambahan seperti riwayat aktivitas hanya ditambahkan jika memang terdapat pada desain atau telah disepakati sebagai kebutuhan.

### 6.8 Topbar dan Sidebar
- Topbar memiliki tinggi `70px`, latar putih, dan border bawah `#E2E8F0`.
- Sidebar desktop memiliki lebar `250px`, latar putih, border kanan, dan posisi sticky di bawah topbar.
- Menu aktif menggunakan latar `#1D68F5`, teks putih, dan font weight `600`.
- Pada layar maksimal `768px`, sidebar menjadi lebar penuh, tidak sticky, dan tampil di atas konten.

### 6.9 Tombol, Badge, dan Avatar
- Tombol utama menggunakan latar `#1D68F5`, teks putih, tanpa border, dan radius `8px-10px`.
- State hover utama menggunakan latar `#1554C9`.
- Badge mata pelajaran menggunakan latar `#EAF2FF`, teks `#1D68F5`, dan radius `6px-20px`.
- Badge jenjang menggunakan latar `#F1F5F9`, teks `#64748B`, dan radius `6px-20px`.
- Avatar berukuran `38px x 38px`, berbentuk lingkaran, dengan latar `#EAF2FF` dan teks `#1D68F5`.

## 7. Interaction States

Komponen interaktif perlu mempertimbangkan status berikut jika relevan:
- Default.
- Hover (untuk perangkat pointer).
- Focus (untuk navigasi keyboard).
- Active/selected.
- Disabled.
- Loading (jika ada proses asynchronous).
- Success.
- Error/invalid.

Jangan mengandalkan warna saja untuk menyampaikan status. Sertakan teks, ikon, atau indikator lain bila diperlukan.

## 8. Responsive Behavior

### Desktop
- Gunakan komposisi dan lebar konten sesuai mockup desktop.
- Pertahankan navigasi yang mudah dijangkau.
- Pastikan daftar pertanyaan dan detail diskusi memiliki ruang baca yang cukup.

### Tablet
- Sesuaikan jumlah kolom dan jarak antar elemen.
- Hindari elemen yang terlalu rapat atau terpotong.

### Mobile
- Susun konten menjadi satu kolom bila diperlukan.
- Pastikan navigasi dan kontrol utama mudah dijangkau.
- Input dan tombol memiliki area interaksi yang memadai.
- Hindari horizontal scrolling untuk konten utama.

Breakpoint final perlu ditentukan saat implementasi berdasarkan layout Figma dan pengujian perangkat.

## 9. Accessibility and Usability

- Gunakan kontras teks dan latar yang memadai.
- Sediakan label untuk setiap input.
- Pastikan semua kontrol dapat diakses dengan keyboard.
- Tampilkan focus state yang terlihat.
- Gunakan heading secara berurutan.
- Gunakan teks alternatif untuk gambar informatif.
- Gunakan pesan validasi yang spesifik dan mudah dipahami.

## 10. Content Guidelines

- Gunakan Bahasa Indonesia yang jelas dan ramah bagi pelajar.
- Gunakan label yang konsisten untuk “Tingkat Sekolah”, “Mata Pelajaran”, “Pertanyaan”, dan “Jawaban”.
- Judul pertanyaan harus mudah dipindai.
- Deskripsi singkat tidak menggantikan isi lengkap pada halaman detail.
- Hindari istilah teknis yang tidak diperlukan.

## 11. Implementation Notes

- HTML: struktur semantik halaman dan formulir.
- CSS: warna, tipografi, spacing, layout, responsive behavior, dan state komponen.
- JavaScript: navigasi/interaksi front-end, pencarian, validasi formulir, serta simulasi data bila belum ada backend.
- Data statis atau simulasi harus dibedakan dari data yang benar-benar tersimpan pada server.
- Implementasi harus memeriksa kembali ukuran, alignment, spacing, dan aset terhadap mockup Figma.

## 12. Figma Reference and Verification

File desain:
https://www.figma.com/design/2HWUkPL2H9lqIZcnbPTI8Z/EduConnect?node-id=27-2

Halaman yang disebutkan dalam file:
- Wireframe.
- Mockup.

Checklist sebelum implementasi final:
- [ ] Verifikasi font family dan text styles dari Mockup.
- [ ] Verifikasi warna aktual dari komponen Figma.
- [ ] Verifikasi ukuran frame dan grid.
- [ ] Verifikasi spacing, radius, border, dan shadow.
- [ ] Verifikasi ikon dan aset visual.
- [ ] Verifikasi semua state komponen yang tersedia.
- [ ] Verifikasi versi desktop/mobile jika keduanya dirancang.

**Catatan keterbatasan verifikasi:** pada sesi penyusunan dokumen ini, akses inspeksi detail Figma dibatasi oleh limit tool. Karena itu, dokumen ini menggunakan site structure yang diberikan dan palet proyek yang sudah tersedia sebagai acuan, tanpa mengarang detail visual spesifik yang belum dapat diverifikasi. Mockup Figma tetap menjadi sumber final untuk nilai visual yang lebih rinci.
