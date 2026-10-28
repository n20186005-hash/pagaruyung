import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsD2: Record<string, { id: TopicContent; en: TopicContent }> = {
  "situs-prasasti-pagaruyung": {
    id: {
      kicker: "WISATA SEKITAR",
      h1: "Situs & Prasasti Bersejarah Pagaruyung",
      metaTitle: "Situs Prasasti Pagaruyung: Catatan Sejarah & Cara Mengunjungi",
      metaDescription:
        "Pengantar situs dan prasasti bersejarah di Pagaruyung terkait masa Adityawarman; status kunjungan dan akses perlu diverifikasi di lokasi.",
      lead: "Kawasan Pagaruyung memiliki catatan sejarah terkait masa Adityawarman dan naskah kuno. Halaman ini memperkenalkannya dengan hati-hati.",
      image: IMG.rg,
      imageAlt: "Batu berukir di kawasan bersejarah",  sections: [
        {
          heading: "Kontek sejarah",
          paragraphs: [
            "Pagaruyung sering dikaitkan dengan masa Adityawarman dan tradisi naskah/prasasti di Sumatera Barat. Catatan rincinya bervariasi antar sumber sejarah.",
            "Kami menyajikannya sebagai pengantar sejarah, bukan bukti fisik yang dapat dikunjungi tanpa verifikasi.",
          ],
        },
        {
          heading: "Prasasti / batu bersejarah",
          paragraphs: [
            "Beberapa referensi menyebut keberadaan prasasti atau batu bersejarah di kawasan Pagaruyung. Nama dan lokasi persis bervariasi; jangan asumsikan satu titik pasti.",
            "Status akses dan pelestarian belum terverifikasi oleh panduan ini. Tanyakan petugas setempat sebelum mencari.",
          ],
        },
        {
          heading: "Cara mengunjungi",
          paragraphs: [
            "Gunakan Batusangkar sebagai basis. Tanyakan arah kepada warga atau petugas; jangan mengandalkan satu titik GPS dari blog lama.",
          ],
        },
      ],
      faqs: [
        {
          q: "Di mana prasasti Pagaruyung berada?",
          a: "Referensi bervariasi; lokasi persis tidak kami klaim. Tanyakan petugas/warga setempat dan verifikasi di lapangan.",
        },
        {
          q: "Apakah bisa dikunjungi bebas?",
          a: "Status akses belum terverifikasi. Tanyakan petugas sebelum menjadikannya tujuan khusus.",
        },
        {
          q: "Apakah ini sama dengan Istano Basa?",
          a: "Tidak. Istano Basa adalah istana rekonstruksi; situs/prasasti merujuk catatan sejarah terpisah yang perlu verifikasi.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["istano-silinduang-bulan", "wisata-sekitar-istano", "sejarah-kerajaan-pagaruyung"],
    },
    en: {
      kicker: "NEARBY",
      h1: "Historic Sites & Inscriptions of Pagaruyung",
      metaTitle: "Pagaruyung Inscriptions: Historical Notes & How to Visit",
      metaDescription:
        "Introduction to historic sites and inscriptions in Pagaruyung related to the Adityawarman period; visiting status and access to verify on site.",
      lead: "The Pagaruyung area has historical records linked to the Adityawarman period and old manuscripts. This page introduces it cautiously.",
      image: IMG.rg,
      imageAlt: "Carved stone in a historic area",
      sections: [
        {
          heading: "Historical context",
          paragraphs: [
            "Pagaruyung is often linked to the Adityawarman period and the manuscript/inscription tradition of West Sumatra. Detailed records vary across historians.",
            "We present it as historical context, not physical evidence you can visit without verification.",
          ],
        },
        {
          heading: "Inscription / historic stone",
          paragraphs: [
            "Some references mention an inscription or historic stone in the Pagaruyung area. Exact names and locations vary; do not assume one fixed point.",
            "Access and preservation status are unverified by this guide. Ask local staff before searching.",
          ],
        },
        {
          heading: "How to visit",
          paragraphs: [
            "Use Batusangkar as a base. Ask locals or staff for direction; do not rely on a single old-blog GPS point.",
          ],
        },
      ],
      faqs: [
        {
          q: "Where is the Pagaruyung inscription?",
          a: "References vary; we do not claim an exact location. Ask local staff/residents and verify in the field.",
        },
        {
          q: "Is it freely visitable?",
          a: "Access status is unverified. Ask staff before making it a specific destination.",
        },
        {
          q: "Is this the same as Istano Basa?",
          a: "No. Istano Basa is the reconstructed palace; sites/inscriptions refer to separate historical records needing verification.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["istano-silinduang-bulan", "wisata-sekitar-istano", "sejarah-kerajaan-pagaruyung"],
    },
  },

  "nagari-tuo-pariangan": {
    id: {
      kicker: "WISATA SEKITAR",
      h1: "Nagari Tuo Pariangan & Sekitarnya",
      metaTitle: "Nagari Tuo Pariangan: Desa Adat Dekat Batusangkar",
      metaDescription:
        "Pengantar Nagari Tuo Pariangan: desa adat Minangkabau di Tanah Datar, jarak dan cara ke sana dari istano; akses perlu diverifikasi.",
      lead: "Pariangan sering disebut sebagai salah satu nagari tua Minangkabau. Halaman ini mengenalkannya sebagai pilihan wisata sekitar istano.",
      image: IMG.hero,
      imageAlt: "Pemandangan desa adat di dataran tinggi",
      sections: [
        {
          heading: "Mengapa Pariangan menarik",
          paragraphs: [
            "Pariangan dikenal sebagai nagari dengan nuansa desa adat dan pemandangan dataran tinggi. Catatan sejarahnya sering dikaitkan dengan awal penyebaran adat Minangkabau.",
            "Kami menyajikannya sebagai pengantar; jangan mengasumsikan fasilitas wisata tertentu tersedia.",
          ],
        },
        {
          heading: "Jarak & akses dari istano",
          paragraphs: [
            "Pariangan berjarak beberapa puluh menit dari Batusangkar (perkiraan, verifikasi). Jalan dataran tinggi meliuk; siapkan waktu ekstra.",
            "Gunakan Batusangkar sebagai titik singgah, lalu lanjutkan dengan kendaraan sewaan atau angkutan lokal.",
          ],
        },
        {
          heading: "Hal yang perlu dikonfirmasi",
          paragraphs: [
            "Ketersediaan homestay, warung, dan jalur pejalan kaki bervariasi. Tanyakan penduduk setempat; jangan mengandalkan satu blog.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa lama ke Pariangan dari istano?",
          a: "Perkiraan beberapa puluh menit dari Batusangkar; verifikasi karena jalan meliuk dan kondisi bervariasi.",
        },
        {
          q: "Ada homestay di Pariangan?",
          a: "Beberapa warga mungkin melayani homestay; ketersediaan bervariasi. Tanyakan langsung di lokasi.",
        },
        {
          q: "Layakkah setengah hari dari istano?",
          a: "Ya, bila menyusun rute: istano pagi, lalu Pariangan siang. Sesuaikan dengan tenaga perjalanan.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["wisata-sekitar-istano", "kota-batusangkar", "tur-setengah-hari"],
    },
    en: {
      kicker: "NEARBY",
      h1: "Nagari Tuo Pariangan & Surroundings",
      metaTitle: "Nagari Tuo Pariangan: Adat Village Near Batusangkar",
      metaDescription:
        "Introduction to Nagari Tuo Pariangan: a Minangkabau adat village in Tanah Datar, distance and how to get there from the istano; access to verify.",
      lead: "Pariangan is often called one of the old nagari of Minangkabau. This page introduces it as a nearby option to the istano.",
      image: IMG.hero,
      imageAlt: "Adat village scenery in the highlands",
      sections: [
        {
          heading: "Why Pariangan is interesting",
          paragraphs: [
            "Pariangan is known as a nagari with adat-village atmosphere and highland views. Its history is often linked to the early spread of Minangkabau adat.",
            "We present it as an introduction; do not assume specific tourist facilities are available.",
          ],
        },
        {
          heading: "Distance & access from the istano",
          paragraphs: [
            "Pariangan is some tens of minutes from Batusangkar (estimate, verify). Highland roads wind; allow extra time.",
            "Use Batusangkar as a stop, then continue by hired vehicle or local transport.",
          ],
        },
        {
          heading: "What to confirm",
          paragraphs: [
            "Availability of homestays, warungs, and walking paths varies. Ask locals; do not rely on one blog.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long to Pariangan from the istano?",
          a: "Estimate some tens of minutes from Batusangkar; verify because roads wind and conditions vary.",
        },
        {
          q: "Are there homestays in Pariangan?",
          a: "Some residents may offer homestays; availability varies. Ask directly on site.",
        },
        {
          q: "Is a half-day from the istano feasible?",
          a: "Yes, if you plan: istano in the morning, then Pariangan at midday. Match to your travel energy.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["wisata-sekitar-istano", "kota-batusangkar", "tur-setengah-hari"],
    },
  },
};
