import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsB4: Record<string, { id: TopicContent; en: TopicContent }> = {
  "ruang-dalam-dan-pameran": {
    id: {
      kicker: "KOLEKSI",
      h1: "Ruang Dalam & Pameran di Istano Basa Pagaruyung",
      metaTitle: "Ruang Dalam & Pameran Istano Basa: Apa yang Bisa Dilihat",
      metaDescription:
        "Apa yang dapat dijelajahi di dalam Istano Basa Pagaruyung: ruang pameran, koleksi budaya, dan etika foto; tanpa klaim isi pasti.",
      lead: "Sebagai museum, istano menyajikan koleksi budaya Minangkabau. Halaman ini membantu Anda mengetahui apa yang umumnya dapat diakses.",
      image: IMG.rajo,
      imageAlt: "Ruang dalam Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Koleksi yang dikenal",
          paragraphs: [
            "Museum ini mengenalkan warisan Minangkabau, termasuk benda budaya dan konteks sejarah kerajaan. Detail koleksi dapat berubah; ikuti penanda di lokasi.",
            "Beberapa ruang menyajikan diorama atau panel informasi; baca dengan tenang untuk memahami konteks.",
          ],
        },
        {
          heading: "Akses ruang",
          paragraphs: [
            "Ikuti petunjuk petugas tentang ruang yang terbuka bagi pengunjung. Sebagian area mungkin tertutup untuk perawatan atau upacara.",
            "Foto di ruang pameran umumnya diperbolehkan; untuk alat khusus, tanyakan izin.",
          ],
        },
        {
          heading: "Etika di dalam",
          paragraphs: [
            "Jaga keheningan, hindari menyentuh koleksi tanpa izin, dan ikuti arahan petugas demi pelestarian.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apa isi museum istano?",
          a: "Ia mengenalkan warisan Minangkabau dan konteks kerajaan; detail koleksi dapat berubah. Ikuti penanda di lokasi.",
        },
        {
          q: "Boleh foto di dalam?",
          a: "Area umum biasanya diperbolehkan; tanyakan izin untuk alat khusus seperti tripod.",
        },
        {
          q: "Berapa lama menjelajah dalam?",
          a: "Sekitar 30–60 menit cukup untuk membaca pameran dengan tenang.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Kantor Wakil Presiden RI", url: SOURCES.vicePresident },
      ],
      updated: "Oktober 2026",
      related: ["foto-dan-etika-berkunjung", "arsitektur-minangkabau", "durasi-dan-urutan-kunjungan"],
    },
    en: {
      kicker: "COLLECTION",
      h1: "Interior Spaces & Exhibits at Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Interior & Exhibits: What You Can See",
      metaDescription:
        "What you can explore inside Istano Basa Pagaruyung: exhibition spaces, cultural collections, and photo etiquette; no claimed exact contents.",
      lead: "As a museum, the istano presents Minangkabau cultural heritage. This page helps you know what is generally accessible.",
      image: IMG.rajo,
      imageAlt: "Interior space of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Known collections",
          paragraphs: [
            "The museum introduces Minangkabau heritage, including cultural objects and kingdom historical context. Exhibit details can change; follow on-site signage.",
            "Some rooms present dioramas or information panels; read them calmly to understand the context.",
          ],
        },
        {
          heading: "Room access",
          paragraphs: [
            "Follow staff directions about rooms open to visitors. Some areas may be closed for maintenance or ceremony.",
            "Photos in exhibit areas are generally allowed; ask permission for special equipment.",
          ],
        },
        {
          heading: "Indoor etiquette",
          paragraphs: [
            "Keep quiet, avoid touching collections without permission, and follow staff guidance for preservation.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is inside the istano museum?",
          a: "It introduces Minangkabau heritage and kingdom context; exhibit details can change. Follow on-site signage.",
        },
        {
          q: "May I photograph inside?",
          a: "General areas are usually allowed; ask permission for special equipment like a tripod.",
        },
        {
          q: "How long to explore inside?",
          a: "About 30–60 minutes is enough to read exhibits calmly.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Vice-President's Office", url: SOURCES.vicePresident },
      ],
      updated: "October 2026",
      related: ["foto-dan-etika-berkunjung", "arsitektur-minangkabau", "durasi-dan-urutan-kunjungan"],
    },
  },

  "tradisi-minangkabau": {
    id: {
      kicker: "BUDAYA",
      h1: "Tradisi Minangkabau untuk Memahami Istano",
      metaTitle: "Tradisi Minangkabau: Matrilineal, Adat & Hubungannya dengan Istano",
      metaDescription:
        "Pengantar tradisi Minangkabau yang relevan memahami Istano Basa Pagaruyung: sistem matrilineal, adat, dan budaya, tanpa stereotip.",
      lead: "Istano lebih mudah dipahami bila mengenal tradisi Minangkabau. Halaman ini menyajikan bagian yang relevan dengan kunjungan, bukan gambaran menyeluruh.",
      image: IMG.rg,
      imageAlt: "Kontek budaya Minangkabau",
      sections: [
        {
          heading: "Sistem matrilineal",
          paragraphs: [
            "Masyarakat Minangkabau dikenal dengan garis keturunan matrilineal (dari pihak ibu). Ini memengaruhi tata rumah dan waris.",
            "Pemahaman ini membantu membaca fungsi ruang dalam Rumah Gadang/istano.",
          ],
        },
        {
          heading: "Adat & alam",
          paragraphs: [
            "Adat Minangkabau sering merujuk pada alam dan nilai kekerabatan. Banyak motif dan aturan bangunan bersumber dari ini.",
            "Gunakan pengetahuan ini sebagai apresiasi, bukan untuk menilai masyarakat saat ini secara umum.",
          ],
        },
        {
          heading: "Kaitan dengan istano",
          paragraphs: [
            "Istano mewakilkan kebudayaan kerajaan Minangkabau. Mengunjungi museum memberi pengantar; bacaan tambahan mengembangkan pemahaman.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apa itu matrilineal Minangkabau?",
          a: "Garis keturunan ditarik dari pihak ibu. Ini memengaruhi tata rumah dan waris adat.",
        },
        {
          q: "Apakah istano tempat upacara adat?",
          a: "Istano memiliki makna budaya; upacara tertentu mungkin ada. Jangan asumsikan jadwal; tanyakan petugas.",
        },
        {
          q: "Apakah aman mengunjungi sebagai turis?",
          a: "Ya. Kawasan terbuka bagi pengunjung; hormati adat dan arahan petugas.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["rumah-gadang-dan-istano", "sejarah-kerajaan-pagaruyung", "ukiran-dan-simbolisme"],
    },
    en: {
      kicker: "CULTURE",
      h1: "Minangkabau Traditions to Understand the Istano",
      metaTitle: "Minangkabau Traditions: Matrilineal, Adat & Link to the Istano",
      metaDescription:
        "An introduction to Minangkabau traditions relevant to understanding Istano Basa Pagaruyung: matrilineal system, adat, and culture, without stereotypes.",
      lead: "The istano is easier to understand with knowledge of Minangkabau traditions. This page covers parts relevant to a visit, not a full portrait.",
      image: IMG.rg,
      imageAlt: "Minangkabau cultural context",
      sections: [
        {
          heading: "Matrilineal system",
          paragraphs: [
            "Minangkabau society is known for matrilineal descent (through the mother's line). This influences house order and inheritance.",
            "This understanding helps read the spatial function of the Rumah Gadang/istano.",
          ],
        },
        {
          heading: "Adat & nature",
          paragraphs: [
            "Minangkabau adat often refers to nature and kinship values. Many building motifs and rules derive from this.",
            "Use this knowledge as appreciation, not to judge today's society broadly.",
          ],
        },
        {
          heading: "Link to the istano",
          paragraphs: [
            "The istano represents Minangkabau royal culture. Visiting the museum gives an introduction; further reading develops understanding.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is Minangkabau matrilineal?",
          a: "Descent is traced through the mother's line. This influences house order and adat inheritance.",
        },
        {
          q: "Is the istano a venue for adat ceremonies?",
          a: "The istano has cultural meaning; specific ceremonies may occur. Do not assume a schedule; ask staff.",
        },
        {
          q: "Is it safe to visit as a tourist?",
          a: "Yes. The grounds are open to visitors; respect adat and staff guidance.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["rumah-gadang-dan-istano", "sejarah-kerajaan-pagaruyung", "ukiran-dan-simbolisme"],
    },
  },
};
