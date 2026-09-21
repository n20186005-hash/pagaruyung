# Panduan Istano Basa Pagaruyung

Situs satu halaman dwibahasa (Bahasa Indonesia dan English) untuk Istano Basa Pagaruyung, Tanah Datar, Sumatera Barat. Proyek ini menggunakan Astro, Tailwind CSS, TypeScript, pnpm, dan Cloudflare Workers Static Assets. Tidak ada basis data, login, atau CMS.

## Bahasa

Versi Bahasa Indonesia tersedia pada `/`, sedangkan versi English tersedia pada `/en/`. Kontrol bahasa tersedia di navigasi desktop dan menu seluler. Setiap versi memiliki `lang`, judul, deskripsi, FAQ, kebijakan, Cookie, dan JSON-LD yang sesuai; halaman juga saling terhubung melalui alternate language link.

## Menjalankan secara lokal

Gunakan Node.js `22.13.0` dan Corepack. Semua versi dependensi telah dipasang secara tepat di `package.json` dan dikunci dalam `pnpm-lock.yaml`.

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
corepack pnpm dev
```

## Menetapkan URL produksi

Satu-satunya titik konfigurasi URL adalah `PUBLIC_SITE_URL`, yang dibaca oleh `astro.config.mjs`. Saat variabel ini kosong, build tetap sukses tanpa canonical, Open Graph URL absolut, JSON-LD URL absolut, atau sitemap. Saat domain sudah tersedia, jalankan kembali build dengan nilai berikut.

```bash
PUBLIC_SITE_URL=https://nama-domain-anda.id corepack pnpm build
```

## Deploy ke Cloudflare Workers

`wrangler.jsonc` memakai mode Workers Static Assets. Setelah autentikasi Cloudflare dilakukan pada lingkungan Anda, jalankan:

```bash
corepack pnpm deploy
```

## Canonicalisasi domain (Cloudflare)

Agar sinyal peringkat tidak terpecah antar varian URL (terlihat di GSC sebagai `http://`, `www.`, dan root masing-masing menarik impression), samakan semua ke satu URL kanonik HTTPS apex melalui Cloudflare:

- **HTTPS**: aktifkan *Always Use HTTPS* di dashboard Cloudflare (menangani `http://` → `https://`).
- **www → apex**: buat *Redirect Rule* yang mengalihkan `www.pagaruyung.com/*` ke `https://pagaruyung.com/*` (301).
- **`_redirects` tidak menangani redirect tingkat domain** pada Workers Static Assets (hanya jalur/path). Redirect domain harus dibuat lewat *Redirect Rules* di Cloudflare, bukan file `_redirects`.

`astro.config.mjs` sudah menghasilkan canonical absolut dan hreflang (id + en + x-default) saat `PUBLIC_SITE_URL` disetel, sehingga Google mengelompokkan versi bahasa dengan benar.

## Foto dan atribusi

Seluruh foto tersimpan secara lokal di `public/images`. Kredit, tautan sumber, dan lisensi CC BY-SA/domain publik tercantum pada bagian **Kredit Foto** di halaman serta di `CONTENT_SOURCES.md`.

## Kandidat domain .id

Pada pemeriksaan RDAP PANDI, ketiga kandidat berikut memberikan respons `404` (belum ada data pendaftaran). Ketersediaan dapat berubah sewaktu-waktu; cek kembali melalui registrar sebelum membeli.

| Kandidat | Kegunaan |
| --- | --- |
| `istanopagaruyung.id` | Nama ringkas, langsung merujuk pada destinasi. |
| `panduankunjungpagaruyung.id` | Menegaskan peran sebagai panduan pengunjung independen. |
| `pagaruyungtanahdatar.id` | Menautkan destinasi dengan wilayah administratifnya. |
