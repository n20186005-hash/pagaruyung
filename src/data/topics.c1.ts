import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsC1: Record<string, { id: TopicContent; en: TopicContent }> = {
  "makan-di-sekitar-istano": {
    id: {
      kicker: "KULINER",
      h1: "Makan di Sekitar Istano Basa Pagaruyung",
      metaTitle: "Makan di Sekitar Istano Basa: Warung & Kuliner Dekat Istano",
      metaDescription:
        "Pilihan makan di sekitar Istano Basa Pagaruyung: warung, kuliner lokal, dan cara menyusunnya dalam rute; tanpa klaim nama/rating/resto tertentu.",
      lead: "Setelah berkeliling istano, perut sering lapar. Halaman ini mengelompokkan pilihan makan berdasarkan jarak dan waktu, bukan merekomendasikan satu tempat.",
      image: IMG.detail,
      imageAlt: "Suasana makanan khas Minangkabau",
      sections: [
        {
          heading: "Dekat istano (jalan kaki pendek / ojek)",
          paragraphs: [
            "Di sekitar kawasan istano dan desa Pagaruyung terdapat warung dan penjaja makanan sederhana. Ketersediaan bervariasi; tanyakan petugas atau warga.",
            "Jangan mengandalkan daftar nama tertentu dari blog lama; verifikasi langsung karena usaha bisa berpindah atau tutup.",
          ],
        },
        {
          heading: "Batusangkar (beberapa menit)",
          paragraphs: [
            "Batusangkar sebagai pusat kecamatan menawarkan lebih banyak pilihan warung, rumah makan, dan jajanan. Ini titik terbaik untuk makan setelah istano.",
            "Susun rute: istano dulu, lalu turun ke Batusangkar untuk makan sebelum jalanan ramai sore.",
          ],
        },
        {
          heading: "Tips memilih",
          paragraphs: [
            "Pilih tempat yang bersih dan ramai pengunjung lokal (tanda kesegaran). Tanyakan harga sebelum memesan.",
            "Hidangan Minangkabau umumnya pedas; beri tahu pedas/tidak jika perlu.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ada restoran di dalam istano?",
          a: "Belum terverifikasi ada restoran di dalam kawasan. Warung sederhana mungkin ada di sekitar; tanyakan petugas.",
        },
        {
          q: "Ke mana makan terdekat yang pasti ada?",
          a: "Batusangkar memberi pilihan paling andal. Jarak pendek dari istano; gunakan ojek/taksi tahap akhir.",
        },
        {
          q: "Apa makanan khas yang mudah ditemukan?",
          a: "Masakan Minangkabau seperti gulai, rendang, dan dendeng umum di warung setempat;jenis tepat bervariasi per warung.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["kuliner-batusangkar", "kopi-dan-minuman", "kota-batusangkar"],
    },
    en: {
      kicker: "FOOD",
      h1: "Eating Around Istano Basa Pagaruyung",
      metaTitle: "Eating Around Istano Basa: Warungs & Local Food Near the Istano",
      metaDescription:
        "Food options around Istano Basa Pagaruyung: warungs, local cuisine, and how to fit them into a route; no claims about specific names/ratings.",
      lead: "After walking the istano, hunger often follows. This page groups eating options by distance and timing, rather than recommending one place.",
      image: IMG.detail,
      imageAlt: "Atmosphere of Minangkabau food",
      sections: [
        {
          heading: "Near the istano (short walk / ojek)",
          paragraphs: [
            "Around the istano grounds and Pagaruyung village there are simple warungs and food vendors. Availability varies; ask staff or locals.",
            "Do not rely on specific names from old blogs; verify directly because businesses may move or close.",
          ],
        },
        {
          heading: "Batusangkar (a few minutes)",
          paragraphs: [
            "Batusangkar, as the district centre, offers more warungs, eateries, and snacks. It is the best point to eat after the istano.",
            "Plan the route: istano first, then down to Batusangkar for a meal before afternoon crowds.",
          ],
        },
        {
          heading: "Choosing tips",
          paragraphs: [
            "Pick a clean place busy with local customers (a freshness sign). Ask the price before ordering.",
            "Minangkabau dishes are generally spicy; tell them spicy or not if needed.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is there a restaurant inside the istano?",
          a: "A restaurant inside the grounds is unverified. Simple warungs may exist around; ask staff.",
        },
        {
          q: "Where is the nearest reliable meal?",
          a: "Batusangkar gives the most reliable choice. A short distance from the istano; use ojek/taxi for the final leg.",
        },
        {
          q: "What typical food is easy to find?",
          a: "Minangkabau dishes like gulai, rendang, and dendeng are common at local warungs; exact type varies per warung.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["kuliner-batusangkar", "kopi-dan-minuman", "kota-batusangkar"],
    },
  },

  "kuliner-batusangkar": {
    id: {
      kicker: "KULINER",
      h1: "Kuliner Batusangkar & Tanah Datar",
      metaTitle: "Kuliner Batusangkar: Makanan Khas Tanah Datar untuk Wisatawan",
      metaDescription:
        "Pengantar kuliner Batusangkar dan Tanah Datar: jenis hidangan, cara mencoba, dan menyusunnya ke rute istano; tanpa merekomendasikan merek tertentu.",
      lead: "Batusangkar adalah pintu masuk kuliner Tanah Datar. Halaman ini mengenalkan jenis hidangan yang biasa ditemui, bukan daftar restoran评分.",
      image: IMG.rajo,
      imageAlt: "Hidangan khas Minangkabau di atas meja",
      sections: [
        {
          heading: "Jenis hidangan umum",
          paragraphs: [
            "Masakan Minangkabau dikenal kaya rempah. Hidangan seperti gulai, rendang, dendeng batokok, dan soto sering ditemui di warung setempat.",
            "Batusangkar juga dikenal dengan jajanan dan kudapan tradisional; ketersediaan tergantung warung dan waktu.",
          ],
        },
        {
          heading: "Cara mencoba dengan aman",
          paragraphs: [
            "Pilih warung bersih dan ramai pengunjung lokal. Tanyakan harga sebelum memesan dan level pedas jika sensitif.",
            "Hindari klaim 'tempat terbaik' dari satu blog; selera dan harga berubah. Verifikasi saat di lokasi.",
          ],
        },
        {
          heading: "Menyusun ke rute istano",
          paragraphs: [
            "Kunjungi istano di pagi/malam, lalu makan siang di Batusangkar. Ini menghindari bolak-balik dan memberi waktu tenang di istano.",
          ],
        },
      ],
      faqs: [
        {
          q: "Makanan khas Batusangkar apa?",
          a: "Masakan Minangkabau umum seperti gulai, rendang, dendeng; jenis tepat bervariasi per warung. Kami tidak merekomendasikan satu merek.",
        },
        {
          q: "Apakah halal dan aman?",
          a: "Sebagian besar warung halal; untuk kebersihan, pilih tempat ramai dan bersih. Tanyakan bila ragu.",
        },
        {
          q: "Berapa kisaran harga?",
          a: "Kami tidak mencantumkan harga pasti karena bervariasi. Tanyakan harga sebelum memesan di warung pilihan Anda.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["makan-di-sekitar-istano", "kopi-dan-minuman", "oleh-oleh-dan-pasar"],
    },
    en: {
      kicker: "FOOD",
      h1: "Batusangkar & Tanah Datar Cuisine",
      metaTitle: "Batusangkar Cuisine: Typical Tanah Datar Food for Visitors",
      metaDescription:
        "An introduction to Batusangkar and Tanah Datar cuisine: dish types, how to try them, and fitting into an istano route; no specific brands recommended.",
      lead: "Batusangkar is the culinary gateway to Tanah Datar. This page introduces commonly found dishes, not a scored restaurant list.",
      image: IMG.rajo,
      imageAlt: "Typical Minangkabau dishes on a table",
      sections: [
        {
          heading: "Common dish types",
          paragraphs: [
            "Minangkabau cuisine is known for rich spices. Dishes like gulai, rendang, dendeng batokok, and soto are often found at local warungs.",
            "Batusangkar is also known for traditional snacks; availability depends on the warung and time.",
          ],
        },
        {
          heading: "Trying safely",
          paragraphs: [
            "Choose a clean warung busy with local customers. Ask the price before ordering and the spice level if sensitive.",
            "Avoid 'best place' claims from a single blog; taste and price change. Verify on site.",
          ],
        },
        {
          heading: "Fitting into the istano route",
          paragraphs: [
            "Visit the istano in the morning/midday, then lunch in Batusangkar. This avoids backtracking and gives calm time at the istano.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is Batusangkar's special food?",
          a: "Common Minangkabau dishes like gulai, rendang, dendeng; exact type varies per warung. We do not recommend one brand.",
        },
        {
          q: "Is it halal and safe?",
          a: "Most warungs are halal; for cleanliness, pick busy and clean places. Ask if unsure.",
        },
        {
          q: "What is the price range?",
          a: "We do not list exact prices because they vary. Ask the price before ordering at your chosen warung.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["makan-di-sekitar-istano", "kopi-dan-minuman", "oleh-oleh-dan-pasar"],
    },
  },
};
