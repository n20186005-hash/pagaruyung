import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsD3: Record<string, { id: TopicContent; en: TopicContent }> = {
  "kota-batusangkar": {
    id: {
      kicker: "WISATA SEKITAR",
      h1: "Batusangkar: Kota & Basis Wisata Istano",
      metaTitle: "Batusangkar: Kota Basis Wisata Istano Basa & Tanah Datar",
      metaDescription:
        "Peran Batusangkar sebagai pintu masuk dan basis makan/penginapan untuk Istano Basa Pagaruyung dan Tanah Datar; tips menyusun rute.",
      lead: "Batusangkar adalah titik singgah wajib sebelum istano. Halaman ini merangkum peran kotanya dan cara menggunakannya sebagai basis.",
      image: IMG.detail,
      imageAlt: "Pusat kota Batusangkar",
      sections: [
        {
          heading: "Peran Batusangkar",
          paragraphs: [
            "Sebagai ibu kota kecamatan di Tanah Datar, Batusangkar menyediakan layanan dasar: makan, penginapan, dan akses transportasi ke istano.",
            "Sebagian besar wisatawan menjadikannya basis sebelum menuju istano dan situs lain.",
          ],
        },
        {
          heading: "Layanan bagi pengunjung",
          paragraphs: [
            "Warung, rumah makan, dan toko oleh-oleh tersebar di kota. Penginapan dari homestay hingga hotel sederhana tersedia; harga dan ketersediaan bervariasi.",
            "Untuk transportasi tahap akhir ke istano, gunakan ojek atau taksi; sepakati tarif sebelum naik.",
          ],
        },
        {
          heading: "Menyusun rute",
          paragraphs: [
            "Tidur di Batusangkar bila ingin pagi ke istano. Atau singgah makan siang bila datang dari Padang/Bukittinggi.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa jarak Batusangkar ke istano?",
          a: "Istano beberapa kilometer dari pusat Batusangkar; jarak pasti bervariasi. Tanyakan warga arah.",
        },
        {
          q: "Ada penginapan di Batusangkar?",
          a: "Ya, dari homestay hingga hotel sederhana. Harga dan ketersediaan bervariasi; pesan lebih awal saat musim ramai.",
        },
        {
          q: "Layakkah sebagai basis multi-hari?",
          a: "Ya, Batusangkar strategis untuk menjelajah Tanah Datar (Pariangan, danau) dalam 1–2 hari.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["dari-batusangkar", "makan-di-sekitar-istano", "tur-sehari-tanah-datar"],
    },
    en: {
      kicker: "NEARBY",
      h1: "Batusangkar: Town & Base for the Istano",
      metaTitle: "Batusangkar: Gateway Town for Istano Basa & Tanah Datar",
      metaDescription:
        "Batusangkar's role as the entry point and food/lodging base for Istano Basa Pagaruyung and Tanah Datar; route-planning tips.",
      lead: "Batusangkar is a required stop before the istano. This page sums up its town role and how to use it as a base.",
      image: IMG.detail,
      imageAlt: "Centre of Batusangkar town",
      sections: [
        {
          heading: "Batusangkar's role",
          paragraphs: [
            "As the district capital of Tanah Datar, Batusangkar provides basics: food, lodging, and transport access to the istano.",
            "Most travellers use it as a base before heading to the istano and other sites.",
          ],
        },
        {
          heading: "Services for visitors",
          paragraphs: [
            "Warungs, eateries, and souvenir shops are spread across town. Lodging from homestays to simple hotels is available; price and availability vary.",
            "For the final leg to the istano, use ojek or taxi; agree the fare before boarding.",
          ],
        },
        {
          heading: "Building a route",
          paragraphs: [
            "Sleep in Batusangkar if you want an early istano visit. Or stop for lunch if coming from Padang/Bukittinggi.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is Batusangkar's distance to the istano?",
          a: "The istano is a few km from central Batusangkar; exact distance varies. Ask locals for direction.",
        },
        {
          q: "Is there lodging in Batusangkar?",
          a: "Yes, from homestays to simple hotels. Price and availability vary; book early in peak season.",
        },
        {
          q: "Is it a good multi-day base?",
          a: "Yes, Batusangkar is strategic for exploring Tanah Datar (Pariangan, lake) in 1–2 days.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["dari-batusangkar", "makan-di-sekitar-istano", "tur-sehari-tanah-datar"],
    },
  },

  "tur-setengah-hari": {
    id: {
      kicker: "RUTE",
      h1: "Tur Setengah Hari di Sekitar Istano Basa",
      metaTitle: "Tur Setengah Hari Istano Basa: Rute & Waktu",
      metaDescription:
        "Contoh rencana tur setengah hari berbasis Istano Basa Pagaruyung: urutan, transportasi, dan opsi tambahan di Batusangkar.",
      lead: "Bila waktu terbatas, setengah hari cukup untuk istano plus makan di Batusangkar. Halaman ini memberi contoh ritme perjalanan.",
      image: IMG.rajo,
      imageAlt: "Rute perjalanan di Tanah Datar",
      sections: [
        {
          heading: "Contoh ritme (pagi)",
          paragraphs: [
            "08.00 tiba Batusangkar dan sarapan ringan. 09.00 ke istano (tahap akhir ojek/taksi). 09.30–11.30 menjelajah istano.",
            "11.30 turun ke Batusangkar untuk makan siang, lalu kembali atau lanjut ke pasar oleh-oleh singkat.",
          ],
        },
        {
          heading: "Contoh ritme (siang–sore)",
          paragraphs: [
            "Jika datang dari Padang/Bukittinggi siang, mulai istano pukul 14.00, selesai sebelum petang, lalu makan sore di Batusangkar.",
          ],
        },
        {
          heading: "Opsi tambahan",
          paragraphs: [
            "Bila waktu lebih, singgah istano lain atau pasar di Batusangkar. Jangan memaksakan Pariangan/danau dalam setengah hari.",
          ],
        },
      ],
      faqs: [
        {
          q: "Cukupkah 4 jam untuk istano + makan?",
          a: "Ya. 2–3 jam istano plus 1 jam makan di Batusangkar cukup untuk kunjungan singkat namun bermakna.",
        },
        {
          q: "Boleh tambah danau dalam setengah hari?",
          a: "Tidak disarankan; danau butuh waktu ekstra dan jalan meliuk. Simpan untuk tur sehari.",
        },
        {
          q: "Bagaimana bila hujan?",
          a: "Fokus ke dalam istano dan makan di Batusangkar; lihat panduan kunjungan saat hujan.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["durasi-dan-urutan-kunjungan", "kota-batusangkar", "tur-sehari-tanah-datar"],
    },
    en: {
      kicker: "ROUTE",
      h1: "Half-Day Tour Around Istano Basa",
      metaTitle: "Istano Basa Half-Day Tour: Route & Timing",
      metaDescription:
        "A sample half-day plan based on Istano Basa Pagaruyung: order, transport, and Batusangkar add-ons.",
      lead: "With limited time, half a day is enough for the istano plus a meal in Batusangkar. This page gives a travel rhythm sample.",
      image: IMG.rajo,
      imageAlt: "Travel route in Tanah Datar",
      sections: [
        {
          heading: "Sample rhythm (morning)",
          paragraphs: [
            "08:00 arrive Batusangkar and light breakfast. 09:00 to the istano (final leg ojek/taxi). 09:30–11:30 explore the istano.",
            "11:30 down to Batusangkar for lunch, then return or a short souvenir-market stop.",
          ],
        },
        {
          heading: "Sample rhythm (midday–afternoon)",
          paragraphs: [
            "If arriving from Padang/Bukittinggi at midday, start the istano at 14:00, finish before dusk, then an evening meal in Batusangkar.",
          ],
        },
        {
          heading: "Add-on options",
          paragraphs: [
            "With extra time, stop at another istano or the Batusangkar market. Do not cram Pariangan/lake into a half day.",
          ],
        },
      ],
      faqs: [
        {
          q: "Are 4 hours enough for istano + meal?",
          a: "Yes. 2–3 hours istano plus 1 hour meal in Batusangkar is enough for a short but meaningful visit.",
        },
        {
          q: "Can I add the lake in half a day?",
          a: "Not recommended; the lake needs extra time and winding roads. Save it for a full day.",
        },
        {
          q: "What if it rains?",
          a: "Focus on the indoor istano and a meal in Batusangkar; see the rainy-day guide.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["durasi-dan-urutan-kunjungan", "kota-batusangkar", "tur-sehari-tanah-datar"],
    },
  },
};
