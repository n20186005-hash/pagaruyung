import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsD1: Record<string, { id: TopicContent; en: TopicContent }> = {
  "wisata-sekitar-istano": {
    id: {
      kicker: "WISATA SEKITAR",
      h1: "Wisata Sekitar Istano Basa Pagaruyung",
      metaTitle: "Wisata Sekitar Istano Basa: Tempat & Rute dari Istano",
      metaDescription:
        "Ringkasan tempat wisata di sekitar Istano Basa Pagaruyung berdasarkan jarak dan tema, untuk menyusun rute Tanah Datar tanpa klaim kunjungan tertentu.",
      lead: "Setelah istano, Tanah Datar menawarkan desa adat, danau, dan pasar. Halaman ini mengelompokkan pilihan agar Anda bisa menyusun rute sendiri.",
      image: IMG.rajo,
      imageAlt: "Pemandangan dataran tinggi Tanah Datar",
      sections: [
        {
          heading: "Kelompok dekat (Batusangkar & Pagaruyung)",
          paragraphs: [
            "Di sekitar Batusangkar dan Pagaruyung terdapat istano lain, situs bersejarah, dan pasar tradisional. Jarak pendek memudahkan perjalanan setengah hari.",
            "Lihat panduan istano lain, situs prasasti, dan kota Batusangkar untuk detail.",
          ],
        },
        {
          heading: "Kelompok menengah (Pariangan, danau)",
          paragraphs: [
            "Nagari Tuo Pariangan dan Danau Singkarak berjarak lebih jauh namun populer. Sesuaikan dengan waktu dan kondisi jalan.",
            "Untuk danau, verifikasi akses dan fasilitas di lokasi; kami tidak mengklaim kondisi tertentu.",
          ],
        },
        {
          heading: "Menyusun rute",
          paragraphs: [
            "Pilih 1–2 tempat sesuai waktu. Jangan memaksakan terlalu banyak dalam sehari agar tidak lelah.",
            "Gunakan Batusangkar sebagai basis. Lihat panduan tur setengah hari dan sehari.",
          ],
        },
      ],
      faqs: [
        {
          q: "Tempat apa paling dekat istano?",
          a: "Istano lain dan situs di sekitar Pagaruyung/Batusangkar. Jarak pendek; tanyakan petugas arah.",
        },
        {
          q: "Apakah Danau Singkarak worth it?",
          a: "Populer bagi pengunjung yang punya waktu ekstra. Verifikasi akses di lokasi; kami tidak mengklaim fasilitas tertentu.",
        },
        {
          q: "Berapa banyak tempat dalam sehari?",
          a: "Saran 2–3 tempat maksimal agar tidak lelah. Lihat panduan tur sehari.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["istano-silinduang-bulan", "situs-prasasti-pagaruyung", "nagari-tuo-pariangan"],
    },
    en: {
      kicker: "NEARBY",
      h1: "Attractions Around Istano Basa Pagaruyung",
      metaTitle: "Attractions Around Istano Basa: Places & Routes from the Istano",
      metaDescription:
        "A summary of places around Istano Basa Pagaruyung by distance and theme, to build a Tanah Datar route without claiming specific visits.",
      lead: "After the istano, Tanah Datar offers adat villages, lakes, and markets. This page groups options so you can build your own route.",
      image: IMG.rajo,
      imageAlt: "Highland scenery of Tanah Datar",
      sections: [
        {
          heading: "Near group (Batusangkar & Pagaruyung)",
          paragraphs: [
            "Around Batusangkar and Pagaruyung there are other istano, historic sites, and traditional markets. Short distance makes a half-day easy.",
            "See the other-istano, inscription-site, and Batusangkar-town guides for detail.",
          ],
        },
        {
          heading: "Mid group (Pariangan, lake)",
          paragraphs: [
            "Nagari Tuo Pariangan and Lake Singkarak are farther but popular. Match them to your time and road conditions.",
            "For the lake, verify access and facilities on site; we claim no specific conditions.",
          ],
        },
        {
          heading: "Building a route",
          paragraphs: [
            "Pick 1–2 places by time. Do not cram too many in a day to avoid fatigue.",
            "Use Batusangkar as a base. See the half-day and full-day guides.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is closest to the istano?",
          a: "Other istano and sites around Pagaruyung/Batusangkar. Short distance; ask staff for direction.",
        },
        {
          q: "Is Lake Singkarak worth it?",
          a: "Popular for visitors with extra time. Verify access on site; we claim no specific facilities.",
        },
        {
          q: "How many places in a day?",
          a: "Suggest at most 2–3 to avoid fatigue. See the full-day guide.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["istano-silinduang-bulan", "situs-prasasti-pagaruyung", "nagari-tuo-pariangan"],
    },
  },

  "istano-silinduang-bulan": {
    id: {
      kicker: "WISATA SEKITAR",
      h1: "Istano Silinduang Bulan di Pagaruyung",
      metaTitle: "Istano Silinduang Bulan: Rumah Gadang Bersejarah di Pagaruyung",
      metaDescription:
        "Pengantar Istano Silinduang Bulan di Pagaruyung: rumah gadang peninggalan sejarah dekat Istano Basa; status kunjungan perlu diverifikasi di lokasi.",
      lead: "Selain Istano Basa, kawasan Pagaruyung dikenal dengan rumah gadang lain yang disebut Istano Silinduang Bulan. Halaman ini memperkenalkannya dengan hati-hati.",
      image: IMG.rg,
      imageAlt: "Rumah gadang di kawasan Pagaruyung",
      sections: [
        {
          heading: "Apa itu Istano Silinduang Bulan",
          paragraphs: [
            "Istano Silinduang Bulan sering disebut sebagai rumah gadang peninggalan sejarah keluarga bangsawan di Pagaruyung. Catatan rincinya bervariasi antar sumber.",
            "Kami menyajikannya sebagai pengantar; jangan menganggap setiap detail terverifikasi. Konfirmasikan status kunjungan di lokasi.",
          ],
        },
        {
          heading: "Lokasi & akses",
          paragraphs: [
            "Berada di kawasan Pagaruyung, tidak jauh dari Istano Basa. Jarak dan akses pasti bervariasi; tanyakan petugas atau warga setempat.",
            "Gunakan Batusangkar sebagai titik awal, lalu ojek/taksi tahap akhir seperti menuju Istano Basa.",
          ],
        },
        {
          heading: "Catatan kunjungan",
          paragraphs: [
            "Status buka dan akses belum terverifikasi oleh panduan ini. Tanyakan petugas sebelum menjadikannya tujuan khusus.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah Istano Silinduang Bulan bisa dikunjungi?",
          a: "Status kunjungan belum terverifikasi. Tanyakan petugas di lokasi sebelum menjadikannya tujuan khusus.",
        },
        {
          q: "Berapa jarak dari Istano Basa?",
          a: "Tidak jauh di kawasan Pagaruyung; jarak pasti bervariasi. Tanyakan arah kepada warga.",
        },
        {
          q: "Apa bedanya dengan Istano Basa?",
          a: "Istano Basa adalah istana rekonstruksi/museum utama; Silinduang Bulan disebut rumah gadang peninggalan lain di kawasan.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["wisata-sekitar-istano", "situs-prasasti-pagaruyung", "sejarah-kerajaan-pagaruyung"],
    },
    en: {
      kicker: "NEARBY",
      h1: "Istano Silinduang Bulan in Pagaruyung",
      metaTitle: "Istano Silinduang Bulan: Historic Rumah Gadang in Pagaruyung",
      metaDescription:
        "Introduction to Istano Silinduang Bulan in Pagaruyung: a historic rumah gadang near Istano Basa; visiting status to verify on site.",
      lead: "Besides Istano Basa, the Pagaruyung area is known for another rumah gadang called Istano Silinduang Bulan. This page introduces it cautiously.",
      image: IMG.rg,
      imageAlt: "Rumah gadang in the Pagaruyung area",
      sections: [
        {
          heading: "What is Istano Silinduang Bulan",
          paragraphs: [
            "Istano Silinduang Bulan is often described as a historic rumah gadang of a noble family in Pagaruyung. Detailed records vary across sources.",
            "We present it as an introduction; do not assume every detail is verified. Confirm visiting status on site.",
          ],
        },
        {
          heading: "Location & access",
          paragraphs: [
            "It is in the Pagaruyung area, not far from Istano Basa. Exact distance and access vary; ask staff or locals.",
            "Use Batusangkar as the start, then ojek/taxi for the final leg as toward Istano Basa.",
          ],
        },
        {
          heading: "Visit notes",
          paragraphs: [
            "Opening status and access are unverified by this guide. Ask staff before making it a specific destination.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can Istano Silinduang Bulan be visited?",
          a: "Visiting status is unverified. Ask staff on site before making it a specific destination.",
        },
        {
          q: "What is its distance from Istano Basa?",
          a: "Not far in the Pagaruyung area; exact distance varies. Ask locals for direction.",
        },
        {
          q: "How is it different from Istano Basa?",
          a: "Istano Basa is the main reconstructed palace/museum; Silinduang Bulan is described as another heritage rumah gadang in the area.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["wisata-sekitar-istano", "situs-prasasti-pagaruyung", "sejarah-kerajaan-pagaruyung"],
    },
  },
};
