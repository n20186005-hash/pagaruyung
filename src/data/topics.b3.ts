import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsB3: Record<string, { id: TopicContent; en: TopicContent }> = {
  "arsitektur-minangkabau": {
    id: {
      kicker: "ARSITEKTUR",
      h1: "Arsitektur Minangkabau: Atap, Ruang & Struktur",
      metaTitle: "Arsitektur Minangkabau: Atap Gonjong, Ruang & Struktur Kayu",
      metaDescription:
        "Pengantar arsitektur Minangkabau yang membantu membaca Istano Basa Pagaruyung: atap gonjong, tiang, dan tata ruang adat.",
      lead: "Membaca istano lebih bermakna bila mengenal prinsip arsitektur Minangkabau. Halaman ini merangkum ciri utamanya.",
      image: IMG.rajo,
      imageAlt: "Bentuk atap gonjong dari kejauhan",
      sections: [
        {
          heading: "Atap gonjong",
          paragraphs: [
            "Atap gonjong yang meruncing adalah ciri paling dikenal. Bentuknya kerap dikaitkan dengan tanduk kerbau, simbol penting dalam budaya Minangkabau.",
            "Atap ini dibuat dari bahan lokal dan membutuhkan ketrampilan tinggi; bagian ini menjadi daya tarik visual istano.",
          ],
        },
        {
          heading: "Struktur kayu & tiang",
          paragraphs: [
            "Bangunan tradisional Minangkabau mengandalkan tiang kayu sebagai struktur utama. Tata letak tiang mencerminkan organisasi ruang adat.",
            "Karena bahan kayu, perawatan dan perlindungan dari kebakaran sangat penting—lihat sejarah kebakaran istano.",
          ],
        },
        {
          heading: "Tata ruang adat",
          paragraphs: [
            "Ruang dibagi menurut fungsi adat dan status. Beberapa ruang memiliki makna upacara; tanyakan petugas mana yang terbuka bagi pengunjung.",
          ],
        },
      ],
      faqs: [
        {
          q: "Mengapa atap Minangkabau runcing?",
          a: "Bentuk gonjong dikaitkan dengan tanduk kerbau sebagai simbol budaya; juga fungsi praktis menyalurkan air hujan di iklim tropis.",
        },
        {
          q: "Dari apa istano dibuat?",
          a: "Struktur utamanya kayu dengan atap bahan lokal; perawatan kayu dan perlindungan kebakaran penting.",
        },
        {
          q: "Boleh foto detail ukiran?",
          a: "Umumnya boleh di area terbuka; untuk dekat dan ruang khusus, ikuti petunjuk petugas.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["rumah-gadang-dan-istano", "ukiran-dan-simbolisme", "ruang-dalam-dan-pameran"],
    },
    en: {
      kicker: "ARCHITECTURE",
      h1: "Minangkabau Architecture: Roof, Space & Structure",
      metaTitle: "Minangkabau Architecture: Gonjong Roof, Space & Timber Structure",
      metaDescription:
        "An introduction to Minangkabau architecture that helps read Istano Basa Pagaruyung: gonjong roof, pillars, and adat spatial order.",
      lead: "Reading the istano is more meaningful with knowledge of Minangkabau architecture. This page summarises its main features.",
      image: IMG.rajo,
      imageAlt: "Gonjong roof form from a distance",
      sections: [
        {
          heading: "The gonjong roof",
          paragraphs: [
            "The pointed gonjong roof is the best-known feature. Its form is often linked to buffalo horns, an important symbol in Minangkabau culture.",
            "The roof uses local materials and requires high skill; it is the visual highlight of the istano.",
          ],
        },
        {
          heading: "Timber structure & pillars",
          paragraphs: [
            "Traditional Minangkabau buildings rely on wooden pillars as the main structure. Pillar layout reflects adat spatial organisation.",
            "Because of timber, maintenance and fire protection are vital—see the istano's fire history.",
          ],
        },
        {
          heading: "Adat spatial order",
          paragraphs: [
            "Space is divided by adat function and status. Some spaces have ceremonial meaning; ask staff which are open to visitors.",
          ],
        },
      ],
      faqs: [
        {
          q: "Why is the Minangkabau roof pointed?",
          a: "The gonjong form is linked to buffalo horns as a cultural symbol; it also practically channels tropical rain.",
        },
        {
          q: "What is the istano made of?",
          a: "Mainly timber with a local-material roof; timber care and fire protection matter.",
        },
        {
          q: "May I photograph carvings?",
          a: "Generally yes in open areas; for close-ups and special rooms, follow staff direction.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["rumah-gadang-dan-istano", "ukiran-dan-simbolisme", "ruang-dalam-dan-pameran"],
    },
  },

  "ukiran-dan-simbolisme": {
    id: {
      kicker: "ORNAMEN",
      h1: "Ukiran & Simbolisme di Istano Basa Pagaruyung",
      metaTitle: "Ukiran & Simbolisme Istano Basa: Motif & Makna",
      metaDescription:
        "Pengantar ukiran dan simbolisme Minangkabau di Istano Basa Pagaruyung: motif kaluak paku, itiak pulang patang, dan maknanya; tanpa klaim tanpa sumber.",
      lead: "Ukiran istano bukan sekadar hiasan, tetapi membawa makna adat. Halaman ini memperkenalkan beberapa motif yang umum dijelaskan.",
      image: IMG.detail,
      imageAlt: "Detail ukiran kayu Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Motif umum",
          paragraphs: [
            "Beberapa motif Minangkabau sering dijelaskan antara lain kaluak paku (ekor ikan/daun), itiak pulang patang (bebek pulang sepasang), dan pucuak rabuang (rebung).",
            "Motif ini membawa nilai adat dan alam. Kami menyajikannya sebagai pengantar, bukan penafsiran tunggal yang mutlak.",
          ],
        },
        {
          heading: "Cara mengamati",
          paragraphs: [
            "Perhatikan ukiran pada tiang, dinding, dan ambang. Beberapa detail hanya terlihat dari dekat; gunakan lensa namun hormati area terbatas.",
            "Tanyakan petugas atau pemandu mengenai makna tertentu bila tersedia layanan pemandu.",
          ],
        },
        {
          heading: "Catatan kehati-hatian",
          paragraphs: [
            "Penafsiran motif bervariasi antar sumber. Kami tidak mengklaim satu makna resmi untuk setiap ukiran; gunakan sebagai apresiasi budaya.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apa makna ukiran kaluak paku?",
          a: "Sering dijelaskan melambangkan kepatuhan dan sifat alam (ekor ikan/daun). Ini penafsiran umum, bukan satu makna tunggal.",
        },
        {
          q: "Apakah semua ukiran berunsur adat?",
          a: "Sebagian besar bernilai adat; beberapa bersifat dekoratif. Kami tidak membedakan setiap bagian tanpa sumber.",
        },
        {
          q: "Ada pemandu yang menjelaskan?",
          a: "Tanyakan kepada petugas apakah layanan pemandu tersedia saat kunjungan; jangan asumsikan ada.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["arsitektur-minangkabau", "rumah-gadang-dan-istano", "ruang-dalam-dan-pameran"],
    },
    en: {
      kicker: "ORNAMENT",
      h1: "Carvings & Symbolism at Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Carvings & Symbolism: Motifs & Meaning",
      metaDescription:
        "Introduction to Minangkabau carvings and symbolism at Istano Basa Pagaruyung: kaluak paku, itiak pulang patang motifs and meaning; no unsourced claims.",
      lead: "The istano's carvings are not mere decoration but carry adat meaning. This page introduces commonly explained motifs.",
      image: IMG.detail,
      imageAlt: "Wood carving detail of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Common motifs",
          paragraphs: [
            "Commonly explained Minangkabau motifs include kaluak paku (fish-tail/leaf), itiak pulang patang (returning ducks in pairs), and pucuak rabuang (bamboo shoot).",
            "These motifs carry adat and nature values. We present them as an introduction, not a single absolute interpretation.",
          ],
        },
        {
          heading: "How to observe",
          paragraphs: [
            "Look at carvings on pillars, walls, and thresholds. Some details are visible only up close; use a lens but respect restricted areas.",
            "Ask staff or a guide about specific meanings if a guiding service is available.",
          ],
        },
        {
          heading: "A caution",
          paragraphs: [
            "Motif interpretations vary across sources. We do not claim one official meaning for every carving; treat them as cultural appreciation.",
          ],
        },
      ],
      faqs: [
        {
          q: "What does kaluak paku mean?",
          a: "Often explained as symbolising obedience and nature (fish tail/leaf). A common reading, not a single definitive meaning.",
        },
        {
          q: "Are all carvings adat-based?",
          a: "Most carry adat value; some are decorative. We do not separate each part without a source.",
        },
        {
          q: "Is there a guide to explain?",
          a: "Ask staff whether a guiding service is available during your visit; do not assume one exists.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["arsitektur-minangkabau", "rumah-gadang-dan-istano", "ruang-dalam-dan-pameran"],
    },
  },
};
