# Catatan QA

## Pratinjau peramban

Pratinjau lokal menampilkan judul halaman yang benar, navigasi satu halaman, foto Istano Basa Pagaruyung yang tersimpan lokal, teks berbahasa Indonesia, tautan peta, bagian FAQ, serta tombol untuk Kebijakan Privasi, Syarat Layanan, dan Pengaturan Cookie.

## Pemeriksaan tampilan awal

Hero menampilkan foto nyata bangunan Istano dengan siluet gonjong, logomark berbasis bentuk Rumah Gadang, metrik jam/durasi/peringkat, dan jalur navigasi ke setiap kebutuhan konten utama. Tidak ada campuran bahasa antarmuka pada halaman utama.

## Pemeriksaan interaksi

Tombol Kebijakan Privasi terhubung ke dialog yang sesuai. Pengujian DOM mengonfirmasi bahwa dialog dapat dibuka melalui event tombol halaman. FAQ menggunakan elemen `details` bawaan untuk akses keyboard dan pembaca layar.

## Pemeriksaan bilingual

Halaman `/en/` telah dibangun sebagai rute statis dan menampilkan judul, navigasi, isi utama, FAQ, kebijakan, Cookie, serta JSON-LD berbahasa Inggris. Pemeriksaan DOM mengonfirmasi tombol bahasa mengarah ke `/` untuk Bahasa Indonesia dan `/en/` untuk English.
