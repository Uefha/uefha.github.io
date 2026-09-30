# Muhammad Nur Fadila — Portfolio

Portofolio statis satu halaman yang dibuat dengan HTML, CSS, dan JavaScript vanilla. Tidak membutuhkan backend, proses build, atau database, dan siap dipublikasikan lewat GitHub Pages.

## Menjalankan secara lokal

Buka `index.html` langsung di browser. Alternatifnya, jalankan server statis lokal dari folder proyek jika ingin menguji perilaku browser yang lebih konsisten. Semua tautan asset memakai path relatif.

## Deploy ke GitHub Pages

1. Buat repository GitHub baru dan unggah seluruh isi folder ini ke branch `main`.
2. Buka **Settings → Pages** pada repository.
3. Di bagian **Build and deployment**, pilih **Deploy from a branch**, branch `main`, dan folder `/ (root)`, lalu simpan.
4. Tunggu proses deploy; URL situs akan ditampilkan pada halaman Pages.

## Struktur folder

```text
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── cv/cv.pdf
│   ├── icons/favicon.svg
│   └── images/ (foto profil JPG dan placeholder proyek SVG)
├── css/style.css
└── js/script.js
```

## Mengganti data dan aset

- **Foto profil:** foto saat ini ada di `assets/images/profile.jpg`. Ganti file itu atau perbarui `src` pada dua gambar profil dan `og:image` di `index.html`. Sesuaikan teks `alt` jika diperlukan.
- **Data diri:** edit nama, peran, lokasi, pendidikan, pengalaman, deskripsi, serta metadata SEO pada `index.html`.
- **CV:** `assets/cv/cv.pdf` berisi salinan CV yang Anda berikan. Tombol Download CV mengarah ke file ini; ganti file tersebut saat memperbarui CV.
- **Project:** tambahkan object ke array `projects` di bagian atas `js/script.js`. Siapkan gambar di `assets/images/`, lalu isi `title`, `description`, `image`, `alt`, `technologies`, `github`, dan `demo`. Gunakan `#` sampai URL tersedia.
- **Skills:** edit array `skills` di `js/script.js`.
- **Kontak:** perbarui alamat email, nomor telepon, dan tautan LinkedIn di hero serta bagian Contact pada `index.html`.
- **Bahasa:** pengunjung dapat berganti antara ID dan EN melalui tombol navigasi; pilihannya tersimpan di browser. Untuk mengubah teks terjemahan, edit object `translations` di `js/script.js` dan gunakan atribut `data-i18n` untuk teks pada `index.html`.
- **Warna:** edit custom properties di awal `css/style.css`. Nilai dasar ada pada `:root`, sementara padanan tema gelap ada pada `:root[data-theme="dark"]`.

## Catatan

Foto profil mengikuti file yang Anda berikan. Gambar proyek tetap berupa ilustrasi placeholder lokal, bukan tangkapan layar proyek asli. Tautan demo dan kode proyek yang belum tersedia menggunakan `#`.
