# PRD — EduConnect

> Product Requirements Document  
> Status: Draft  
> Product: EduConnect  
> Platform: Responsive website  
> Language: Indonesian

## 1. Ringkasan Produk

EduConnect adalah website edukasi berbentuk forum tanya jawab yang ditujukan bagi pelajar tingkat SMP dan SMA/SMK. Website ini menyediakan ruang bagi pengguna untuk mencari materi dan pertanyaan, mengajukan pertanyaan, serta berbagi jawaban untuk membantu pengguna lain memahami materi pelajaran.

Dokumen ini disusun berdasarkan deskripsi produk dan site structure yang diberikan. Detail visual mengikuti file wireframe dan mockup Figma sebagai referensi desain.

## 2. Latar Belakang dan Tujuan

Pelajar membutuhkan sarana untuk mencari bantuan ketika menemui kesulitan dalam memahami materi sekolah. EduConnect dirancang untuk mendukung kegiatan belajar, berbagi pengetahuan, dan diskusi antarpelajar melalui pengelompokan konten berdasarkan jenjang sekolah dan mata pelajaran.

### Tujuan produk

- Memudahkan pelajar menemukan pertanyaan atau pembahasan berdasarkan jenjang dan mata pelajaran.
- Memungkinkan pengguna mengajukan pertanyaan terkait materi sekolah.
- Memungkinkan pengguna memberikan jawaban kepada pengguna lain.
- Menampilkan jawaban terbaik sebagai penanda jawaban yang paling membantu.
- Menyediakan navigasi yang mudah dipahami dari beranda ke konten pembelajaran.

## 3. Target Pengguna

### Pengguna utama
- Pelajar SMP.
- Pelajar SMA/SMK.

### Peran pengguna
- **Pencari informasi:** mencari materi atau pertanyaan berdasarkan kata kunci, jenjang, dan mata pelajaran.
- **Penanya:** mengirim pertanyaan melalui formulir.
- **Penjawab:** memberikan jawaban pada halaman detail pertanyaan.

Satu pengguna dapat menjalankan lebih dari satu peran.

## 4. Struktur Informasi dan Halaman

EduConnect menggunakan struktur hierarki. Beranda menjadi titik awal navigasi, kemudian pengguna dapat masuk ke halaman berdasarkan kebutuhan.

### 4.1 Beranda
Memuat:
- Pengenalan website EduConnect.
- Kolom pencarian materi dan pertanyaan.
- Pilihan tingkat sekolah.
- Kategori mata pelajaran.
- Daftar pertanyaan terbaru atau tersedia.
- Navigasi utama.

### 4.2 Pilihan Tingkat Sekolah
Pilihan jenjang:
- SMP.
- SMA/SMK.

### 4.3 Kategori Mata Pelajaran
Memuat:
- Kategori mata pelajaran untuk jenjang SMP.
- Kategori mata pelajaran untuk jenjang SMA/SMK.
- Daftar mata pelajaran sesuai jenjang yang dipilih.

### 4.4 Daftar Materi dan Pertanyaan
Memuat:
- Daftar pertanyaan berdasarkan mata pelajaran.
- Judul dan deskripsi singkat pertanyaan.
- Informasi tingkat sekolah dan kategori.

### 4.5 Detail Pertanyaan
Memuat:
- Judul dan isi pertanyaan.
- Informasi mata pelajaran dan tingkat sekolah.
- Daftar jawaban.
- Formulir untuk memberikan jawaban.
- Penanda jawaban terbaik.

### 4.6 Ajukan Pertanyaan
Memuat formulir:
- Judul pertanyaan.
- Deskripsi atau isi pertanyaan.
- Pilihan tingkat sekolah.
- Pilihan mata pelajaran.
- Tombol kirim pertanyaan.

### 4.7 Profil Pengguna
Memuat:
- Informasi dasar pengguna.
- Tampilan profil pengguna.

## 5. Alur Pengguna

### 5.1 Menelusuri pertanyaan
1. Pengguna membuka Beranda.
2. Pengguna memilih tingkat sekolah (SMP atau SMA/SMK).
3. Pengguna memilih kategori atau mata pelajaran.
4. Website menampilkan daftar materi dan pertanyaan yang sesuai.
5. Pengguna memilih salah satu pertanyaan.
6. Website menampilkan Detail Pertanyaan beserta jawaban yang tersedia.

### 5.2 Mencari materi atau pertanyaan
1. Pengguna memasukkan kata kunci pada kolom pencarian.
2. Website menampilkan hasil yang relevan dari data yang tersedia.
3. Pengguna memilih hasil untuk membuka konten terkait.

Catatan: perilaku pencarian dan aturan pencocokan kata kunci perlu ditetapkan saat implementasi.

### 5.3 Mengajukan pertanyaan
1. Pengguna membuka fitur Ajukan Pertanyaan.
2. Pengguna mengisi judul dan deskripsi pertanyaan.
3. Pengguna memilih tingkat sekolah.
4. Pengguna memilih mata pelajaran.
5. Pengguna mengirim formulir.
6. Website memberikan umpan balik atas hasil pengiriman.

### 5.4 Memberikan jawaban
1. Pengguna membuka Detail Pertanyaan.
2. Pengguna membaca pertanyaan dan jawaban yang sudah tersedia.
3. Pengguna mengisi formulir jawaban.
4. Pengguna mengirim jawaban.
5. Website menampilkan jawaban pada daftar jawaban.

### 5.5 Melihat profil
1. Pengguna memilih menu Profil dari navigasi.
2. Website menampilkan informasi dasar pengguna.

## 6. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Sistem menampilkan halaman Beranda EduConnect. | Must |
| FR-02 | Sistem menyediakan pilihan jenjang SMP dan SMA/SMK. | Must |
| FR-03 | Sistem menampilkan kategori mata pelajaran sesuai jenjang yang dipilih. | Must |
| FR-04 | Sistem menampilkan daftar pertanyaan berdasarkan mata pelajaran. | Must |
| FR-05 | Sistem menampilkan judul, isi, jenjang, mata pelajaran, dan daftar jawaban pada Detail Pertanyaan. | Must |
| FR-06 | Sistem menyediakan formulir untuk mengirim jawaban. | Must |
| FR-07 | Sistem menyediakan formulir untuk mengajukan pertanyaan. | Must |
| FR-08 | Sistem menyediakan kolom pencarian materi dan pertanyaan. | Must |
| FR-09 | Sistem menampilkan penanda jawaban terbaik. | Should |
| FR-10 | Sistem menyediakan halaman Profil Pengguna. | Must |
| FR-11 | Sistem menyediakan navigasi utama untuk berpindah halaman. | Must |

## 7. Kebutuhan Nonfungsional

- **Usability:** navigasi dan label halaman harus mudah dipahami oleh pelajar.
- **Responsiveness:** tampilan perlu menyesuaikan ukuran layar desktop, tablet, dan perangkat seluler.
- **Consistency:** komponen, warna, tipografi, dan pola interaksi digunakan secara konsisten.
- **Feedback:** formulir memberikan umpan balik ketika data berhasil dikirim atau perlu diperbaiki.
- **Readability:** teks pertanyaan, deskripsi, dan jawaban harus mudah dibaca.

## 8. Ruang Lingkup

### Termasuk dalam ruang lingkup
- Halaman Beranda.
- Pemilihan tingkat sekolah.
- Kategori mata pelajaran.
- Daftar materi dan pertanyaan.
- Detail pertanyaan dan daftar jawaban.
- Formulir ajukan pertanyaan.
- Formulir memberikan jawaban.
- Pencarian materi dan pertanyaan.
- Halaman profil pengguna.
- Navigasi ant halaman.

### Di luar ruang lingkup yang telah ditetapkan
Hal-hal berikut belum dinyatakan sebagai kebutuhan pada site structure yang diberikan dan tidak boleh dianggap sudah tersedia tanpa keputusan lanjutan:
- Autentikasi dan registrasi akun.
- Database dan backend.
- Moderasi konten atau pelaporan.
- Notifikasi.
- Pesan pribadi atau chat.
- Sistem penilaian/reputasi pengguna.
- Unggah lampiran pada pertanyaan atau jawaban.

## 9. Batasan Implementasi

Untuk implementasi prototipe/front-end:
- HTML digunakan untuk struktur halaman.
- CSS digunakan untuk styling dan responsivitas.
- JavaScript digunakan untuk interaksi di sisi pengguna.
- Jika belum tersedia backend/database, data pertanyaan, materi, dan jawaban dapat menggunakan data statis atau simulasi.
- Simulasi front-end tidak boleh dipresentasikan sebagai penyimpanan data permanen atau layanan produksi.

## 10. Kriteria Penerimaan

- Pengguna dapat membuka Beranda dan menemukan navigasi utama.
- Pengguna dapat memilih SMP atau SMA/SMK.
- Pilihan jenjang mengarahkan pengguna ke kategori mata pelajaran yang sesuai.
- Pengguna dapat membuka daftar pertanyaan dari kategori/mata pelajaran.
- Pengguna dapat membuka Detail Pertanyaan dari sebuah item pertanyaan.
- Detail Pertanyaan menampilkan isi pertanyaan dan daftar jawaban.
- Formulir pertanyaan memuat judul, deskripsi, jenjang, dan mata pelajaran.
- Formulir jawaban tersedia pada Detail Pertanyaan.
- Kolom pencarian tersedia dan dapat digunakan sesuai perilaku yang diimplementasikan.
- Halaman Profil dapat dibuka melalui navigasi.
- Tata letak tetap dapat digunakan pada ukuran layar yang berbeda.

## 11. Hal yang Perlu Dikonfirmasi

Poin berikut belum dijelaskan secara rinci pada site structure:
- Apakah pengguna harus login untuk mengajukan pertanyaan atau memberikan jawaban?
- Apakah profil pengguna menampilkan pertanyaan dan jawaban yang pernah dibuat?
- Siapa yang dapat menetapkan jawaban terbaik?
- Apakah pencarian mencakup seluruh jenjang dan mata pelajaran atau mengikuti jenjang yang sedang dipilih?
- Apakah halaman materi berisi artikel/modul pembelajaran, atau istilah “materi” merujuk pada konten pertanyaan dan diskusi?
- Apakah data prototipe akan disimpan sementara di browser atau hanya ditampilkan sebagai simulasi?

## 12. Referensi

- File Figma EduConnect — halaman Wireframe dan Mockup:  
  https://www.figma.com/design/2HWUkPL2H9lqIZcnbPTI8Z/EduConnect?node-id=27-2
- Deskripsi Site Structure EduConnect yang diberikan pengguna.

