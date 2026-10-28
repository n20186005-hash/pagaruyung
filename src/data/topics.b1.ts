import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsB1: Record<string, { id: TopicContent; en: TopicContent }> = {
  "sejarah-kerajaan-pagaruyung": {
    id: {
      kicker: "SEJARAH",
      h1: "Sejarah Kerajaan Pagaruyung",
      metaTitle: "Sejarah Kerajaan Pagaruyung: Garis Waktu & Hubungan dengan Istano",
      metaDescription:
        "Sejarah Kerajaan Pagaruyung secara ringkas: asal, masa kejayaan, dan hubungannya dengan Istano Basa saat ini; dengan sumber dan catatan hati-hati.",
      lead: "Memahami kerajaan membantu membaca istano hari ini. Halaman ini memisahkan sejarah kerajaan dari bangunan rekonstruksi yang dikunjungi sekarang.",
      image: IMG.rg,
      imageAlt: "Ilustrasi konteks sejarah Minangkabau",
      sections: [
        {
          heading: "Kerajaan dalam sejarah",
          paragraphs: [
            "Pagaruyung merujuk pada kerajaan Minangkabau historis yang berpusat di Tanah Datar. Catatan sejarah tentang kerajaan ini luas dan melibatkan tradisi lisan serta naskah kuno.",
            "Kita gunakan sumber resmi dan akademik sebagai rujukan, bukan legenda semata. Beberapa detail tahun masih diperdebatkan para sejarawan.",
          ],
        },
        {
          heading: "Masa kejayaan & Rajo Tigo Selo",
          paragraphs: [
            "Tradisi Minangkabau mengenal konsep Rajo Tigo Selo (tiga raja bergelar) dalam tata kelola adat. Ini adalah kerangka budaya, bukan satu bangunan fisik.",
            "Istano yang dikunjungi sekarang adalah rekonstruksi dan museum, bukan istana asli yang utuh sejak masa kerajaan.",
          ],
        },
        {
          heading: "Hubungan dengan istano sekarang",
          paragraphs: [
            "Indonesia Travel menjelaskan Istano Basa Pagaruyung saat ini sebagai istana rekonstruksi dan museum khusus di Tanah Datar. Gunakan kunjungan sebagai pengantar sejarah, bukan bukti fisik kerajaan secara utuh.",
          ],
        },
      ],
      faqs: [
        {
          q: "Kapan Kerajaan Pagaruyung berdiri?",
          a: "Terdapat berbagai tafsir sejarah; sumber resmi mencatat ranah Minangkabau purba namun tahun pasti berdirinya kerajaan bervariasi. Kami tidak memuat angka tunggal yang dipertentangkan.",
        },
        {
          q: "Apakah istano sekarang adalah istana asli?",
          a: "Tidak. Istano saat ini adalah rekonstruksi dan museum; bangunan asli tidak bertahan utuh sejak masa kerajaan.",
        },
        {
          q: "Siapa Rajo Tigo Selo?",
          a: "Konsep adat tentang tiga raja bergelar dalam tata kelola Minangkabau. Ini kerangka budaya, bukan satu bangunan.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Kantor Wakil Presiden RI", url: SOURCES.vicePresident },
      ],
      updated: "Oktober 2026",
      related: ["kerajaan-dan-istano-sekarang", "kebakaran-dan-rekonstruksi", "tradisi-minangkabau"],
    },
    en: {
      kicker: "HISTORY",
      h1: "History of the Pagaruyung Kingdom",
      metaTitle: "Pagaruyung Kingdom History: Timeline & Link to the Istano",
      metaDescription:
        "A concise history of the Pagaruyung Kingdom: origins, golden age, and its relationship with today's Istano Basa; with sources and careful notes.",
      lead: "Understanding the kingdom helps read today's istano. This page separates kingdom history from the reconstructed building you visit now.",
      image: IMG.rg,
      imageAlt: "Context illustration of Minangkabau history",
      sections: [
        {
          heading: "The kingdom in history",
          paragraphs: [
            "Pagaruyung refers to the historic Minangkabau kingdom centred in Tanah Datar. Historical records are extensive and involve oral tradition as well as old manuscripts.",
            "We rely on official and academic sources rather than legend alone. Some dates are still debated by historians.",
          ],
        },
        {
          heading: "Golden age & Rajo Tigo Selo",
          paragraphs: [
            "Minangkabau tradition knows the concept of Rajo Tigo Selo (three titled kings) in adat governance. This is a cultural framework, not one physical building.",
            "The istano visited today is a reconstruction and museum, not an intact original palace from the kingdom era.",
          ],
        },
        {
          heading: "Link to today's istano",
          paragraphs: [
            "Indonesia Travel describes today's Istano Basa Pagaruyung as a reconstructed palace and specialised museum in Tanah Datar. Use the visit as an introduction to history, not physical proof of the whole kingdom.",
          ],
        },
      ],
      faqs: [
        {
          q: "When was the Pagaruyung Kingdom founded?",
          a: "Historical interpretations vary; official sources record the ancient Minangkabau realm but precise founding years differ. We do not state a single contested figure.",
        },
        {
          q: "Is today's istano the original palace?",
          a: "No. The current istano is a reconstruction and museum; the original building did not survive intact from the kingdom era.",
        },
        {
          q: "Who were the Rajo Tigo Selo?",
          a: "An adat concept of three titled kings in Minangkabau governance. A cultural framework, not one building.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Vice-President's Office", url: SOURCES.vicePresident },
      ],
      updated: "October 2026",
      related: ["kerajaan-dan-istano-sekarang", "kebakaran-dan-rekonstruksi", "tradisi-minangkabau"],
    },
  },

  "kerajaan-dan-istano-sekarang": {
    id: {
      kicker: "PENTING",
      h1: "Perbedaan Kerajaan Pagaruyung & Istano Sekarang",
      metaTitle: "Kerajaan vs Istano Sekarang: Bedanya di Pagaruyung",
      metaDescription:
        "Menjelaskan perbedaan antara Kerajaan Pagaruyung historis dan Istano Basa Pagaruyung saat ini (rekonstruksi & museum) agar tidak tertukar.",
      lead: "Pencarian 'pagaruyung kingdom' dan 'istano basa pagaruyung' menunjuk pada hal berbeda. Halaman ini menjelaskan bedanya agar rencana kunjungan lebih tepat.",
      image: IMG.detail,
      imageAlt: "Bangunan Istano Basa Pagaruyung sebagai museum",
      sections: [
        {
          heading: "Dua hal yang berbeda",
          paragraphs: [
            "Kerajaan Pagaruyung adalah entitas sejarah dan budaya Minangkabau. Istano Basa Pagaruyung saat ini adalah bangunan rekonstruksi sekaligus museum yang mengenalkan warisan tersebut.",
            "Mengunjungi istano hari ini bukan berarti melihat istana asli yang utuh sejak masa kerajaan.",
          ],
        },
        {
          heading: "Mengapa sering tertukar",
          paragraphs: [
            "Nama 'Pagaruyung' dipakai untuk kerajaan, nagari, dan istano. Dalam pencarian, istilah saling tumpang-tindih sehingga pengunjung perlu membedakan maksudnya.",
            "Untuk keperluan kunjungan, fokuslah pada Istano Basa Pagaruyung (museum/rekonstruksi) di Nagari Pagaruyung, Tanah Datar.",
          ],
        },
        {
          heading: "Cara memakai informasi",
          paragraphs: [
            "Gunakan museum sebagai pengantar arsitektur Rumah Gadang dan sejarah budaya. Sejarah kerajaan yang lebih luas dapat dikembangkan lewat bacaan tambahan, bukan klaim fisik di istano.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah Istano Basa Pagaruyung adalah istana kerajaan asli?",
          a: "Bukan. Ini rekonstruksi dan museum; istana asli tidak bertahan utuh.",
        },
        {
          q: "Mengapa ada banyak nama 'Pagaruyung'?",
          a: "Nama dipakai untuk kerajaan, nagari, dan istano; sehingga pencarian dan arti sering tumpang-tindih.",
        },
        {
          q: "Mana yang harus saya tuju untuk berkunjung?",
          a: "Istano Basa Pagaruyung di Nagari Pagaruyung, Tanah Datar — museum/rekonstruksi yang terbuka bagi pengunjung.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["sejarah-kerajaan-pagaruyung", "kebakaran-dan-rekonstruksi", "rumah-gadang-dan-istano"],
    },
    en: {
      kicker: "KEY POINT",
      h1: "Pagaruyung Kingdom vs Today's Istano",
      metaTitle: "Kingdom vs Today's Istano: The Difference at Pagaruyung",
      metaDescription:
        "Explaining the difference between the historic Pagaruyung Kingdom and today's Istano Basa Pagaruyung (reconstruction & museum) so they are not confused.",
      lead: "Searches for 'pagaruyung kingdom' and 'istano basa pagaruyung' point to different things. This page explains the difference so your visit plan is accurate.",
      image: IMG.detail,
      imageAlt: "Istano Basa Pagaruyung building as a museum",
      sections: [
        {
          heading: "Two different things",
          paragraphs: [
            "The Pagaruyung Kingdom is a historic and cultural Minangkabau entity. Today's Istano Basa Pagaruyung is a reconstructed building and a museum introducing that heritage.",
            "Visiting the istano today does not mean seeing an intact original palace from the kingdom era.",
          ],
        },
        {
          heading: "Why they are confused",
          paragraphs: [
            "'Pagaruyung' is used for the kingdom, the nagari, and the istano. In search, the terms overlap so visitors need to distinguish the meaning.",
            "For a visit, focus on Istano Basa Pagaruyung (museum/reconstruction) in Nagari Pagaruyung, Tanah Datar.",
          ],
        },
        {
          heading: "How to use the information",
          paragraphs: [
            "Use the museum as an introduction to Rumah Gadang architecture and cultural history. The broader kingdom history is best developed through further reading, not physical claims at the istano.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is Istano Basa Pagaruyung the original royal palace?",
          a: "No. It is a reconstruction and museum; the original palace did not survive intact.",
        },
        {
          q: "Why are there many 'Pagaruyung' names?",
          a: "The name is used for the kingdom, the nagari, and the istano; search and meaning often overlap.",
        },
        {
          q: "Which one should I visit?",
          a: "Istano Basa Pagaruyung in Nagari Pagaruyung, Tanah Datar — the museum/reconstruction open to visitors.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["sejarah-kerajaan-pagaruyung", "kebakaran-dan-rekonstruksi", "rumah-gadang-dan-istano"],
    },
  },
};
