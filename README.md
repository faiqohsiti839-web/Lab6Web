# Lab6Web
Tugas Post Test Praktikum 6

# Lab6Web — Praktikum 6: JavaScript DOM dan Event Handling

**Mata Kuliah:** Pemrograman Web (Pertemuan 7)
**Program Studi:** Teknik Informatika, Universitas Pelita Bangsa
**Nama / NIM:** Siti Faiqoh Almarufi / 312510168

## 1. Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan `id`, `class`, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

## 2. Struktur File

```
Lab6Web/
├── README.md
├── Jawaban_Evaluasi_Praktikum6.pdf
├── latihan/                      # Latihan 1–6 + Eksperimen 1, 2, 4
│   ├── index.html
│   ├── style.css
│   └── script.js
├── mini_project_workshop/        # Mini Project: Form Pendaftaran Workshop
│   ├── index.html
│   ├── style.css
│   └── script.js
├── eksperimen_defer/             # Eksperimen 5: script tanpa defer di <head>
│   ├── index.html
│   └── script.js
└── screenshots/                  # Bukti hasil setiap latihan
```

## 3. Cara Menjalankan

1. Clone atau unduh repository ini.
2. Buka folder `latihan/`, lalu buka `index.html` di browser modern (Chrome/Edge/Firefox). Tidak perlu server atau instalasi tambahan.
3. Untuk mini project, buka `mini_project_workshop/index.html`.
4. Untuk Eksperimen 5, buka `eksperimen_defer/index.html` lalu tekan **F12** → tab **Console**.

## 4. Langkah Kerja dan Hasil

### Latihan 1 — Mengubah teks dengan DOM
Elemen dipilih dengan `getElementById()` lalu `textContent` diubah. Judul menjadi "Belajar JavaScript DOM" dan paragraf menjadi "Konten berhasil diubah oleh JavaScript."

![Latihan 1](screenshots/01_latihan1_ubah_teks.png)

### Latihan 2 — Event click
Setiap tombol diklik, paragraf menampilkan waktu saat klik melalui `new Date().toLocaleTimeString()`.

![Latihan 2](screenshots/02_latihan2_event_click.png)

### Latihan 3 — Mengubah kelas dan gaya CSS
`classList.toggle()` menambah/menghapus kelas `highlight` dan `teks-besar`.

| Sebelum | Sesudah |
|---|---|
| ![Sebelum](screenshots/03a_latihan3_sebelum_toggle.png) | ![Sesudah](screenshots/03b_latihan3_sesudah_toggle.png) |

Perbedaan: `add()` hanya menambah kelas (tidak berubah bila sudah ada), `remove()` hanya menghapus kelas, sedangkan `toggle()` menambah jika belum ada dan menghapus jika sudah ada.

### Latihan 4 — Event input dan penghitung karakter
Event `input` memperbarui jumlah karakter secara langsung saat mengetik, menghapus, maupun menempel teks.

![Latihan 4](screenshots/04_latihan4_penghitung_karakter.png)

### Latihan 5 — Validasi form pendaftaran
Form memakai `novalidate` dan `event.preventDefault()` pada event `submit`. Enam kondisi pengujian:

| No | Kondisi | Pesan yang tampil | Screenshot |
|---|---|---|---|
| 1 | Semua kosong | Nama wajib diisi. | ![](screenshots/05a_latihan5_semua_kosong.png) |
| 2 | Nama kosong | Nama wajib diisi. | ![](screenshots/05b_latihan5_nama_kosong.png) |
| 3 | Email tidak valid | Masukkan email yang valid. | ![](screenshots/05c_latihan5_email_tidak_valid.png) |
| 4 | Usia di bawah 17 | Usia harus berupa bilangan bulat 17–100. | ![](screenshots/05d_latihan5_usia_di_bawah_17.png) |
| 5 | Nama kurang dari 3 karakter (Eksperimen 2) | Nama minimal terdiri dari 3 karakter. | ![](screenshots/05e_latihan5_nama_kurang_3_karakter.png) |
| 6 | Semua input valid | Validasi berhasil. Form siap diproses. | ![](screenshots/05f_latihan5_semua_valid.png) |

### Latihan 6 — Daftar tugas (To-do List)
Elemen dibuat dengan `createElement()`, teks pengguna dimasukkan lewat `textContent` (aman dari injeksi HTML), dan tugas dapat ditandai selesai.

| Input kosong | Tugas ditandai selesai |
|---|---|
| ![](screenshots/06a_latihan6_tugas_kosong.png) | ![](screenshots/06b_latihan6_tugas_selesai.png) |

## 5. Mini Project — Form Pendaftaran Workshop

Fungsi interaktif yang diimplementasikan (semua memakai `addEventListener()`):

1. **Validasi** nama (wajib, minimal 3 karakter), email (format valid), dan sesi (wajib dipilih) — event `submit`, `blur`, dan `change`.
2. **Penghitung karakter** nama dan **ringkasan input langsung** — event `input` dan `change`.
3. **Pesan kesalahan per bidang dan pesan sukses** pada halaman.
4. **Tombol Reset** untuk menghapus seluruh input, pesan, dan penanda validasi — event `click`.

Tata letak responsif: dua kolom di desktop, satu kolom di perangkat mobile (`@media (max-width: 640px)`).

| Tahap | Screenshot |
|---|---|
| Tampilan awal | ![](screenshots/07a_mini_awal.png) |
| Submit kosong (error) | ![](screenshots/07b_mini_submit_kosong_error.png) |
| Input tidak valid | ![](screenshots/07c_mini_input_tidak_valid.png) |
| Ringkasan langsung | ![](screenshots/07d_mini_ringkasan_langsung.png) |
| Pendaftaran berhasil | ![](screenshots/07e_mini_sukses.png) |
| Setelah Reset | ![](screenshots/07f_mini_setelah_reset.png) |
| Tampilan mobile (390 px) | ![](screenshots/08_mini_tampilan_mobile.png) |

## 6. Eksperimen Mandiri

1. **Tombol hapus item To-do List** — tombol "Hapus" memanggil `item.remove()`.
   ![](screenshots/10_eksperimen1_hapus_tugas.png)
2. **Nama minimal tiga karakter** — ditambahkan pada validasi Latihan 5 dan mini project (lihat tabel Latihan 5, kondisi 5).
3. **Event `change` pada dropdown sesi** — memperbarui ringkasan "Sesi" dan memvalidasi pilihan (lihat Mini Project).
4. **Tombol sembunyikan/tampilkan paragraf** — `classList.toggle("sembunyi")` dengan aturan CSS `.sembunyi { display: none; }`.
   ![](screenshots/11_eksperimen4_paragraf_disembunyikan.png)
5. **Script tanpa `defer` di `<head>`** — muncul error `Cannot set properties of null (setting 'textContent')`.
   ![](screenshots/09_eksperimen5_tanpa_defer_error.png)

   **Penyebab:** browser mengeksekusi script saat `<head>` diparsing, ketika `<body>` belum dibuat. `getElementById("judul")` mengembalikan `null`, sehingga `null.textContent = ...` menimbulkan `TypeError`. Solusi: gunakan atribut `defer`, letakkan script di akhir `<body>`, atau bungkus kode dengan event `DOMContentLoaded`.

## 8. Pengujian

Seluruh latihan dan mini project diuji di Chromium (headless) dan tidak menghasilkan error pada Console, kecuali pada Eksperimen 5 yang memang sengaja memicu error untuk diamati.

## 9. Referensi

- MDN Web Docs. *Introduction to the DOM*. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- MDN Web Docs. *Event reference*. https://developer.mozilla.org/en-US/docs/Web/Events
- MDN Web Docs. *Client-side form validation*. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
