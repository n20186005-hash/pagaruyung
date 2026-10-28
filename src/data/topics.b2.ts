import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsB2: Record<string, { id: TopicContent; en: TopicContent }> = {
  "kebakaran-dan-rekonstruksi": {
    id: {
      kicker: "SEJARAH BANGUNAN",
      h1: "Kebakaran, Restorasi & Rekonstruksi Istano Basa Pagaruyung",
      metaTitle: "Kebakaran & Rekonstruksi Istano Basa Pagaruyung: Tahun & Fakta",
      metaDescription:
        "Kronologi kebakaran dan rekonstruksi Istano Basa Pagaruyung dengan tahun terverifikasi (1976, 2007, 2013) dari sumber resmi; tanpa klaim tahun yang dipertentangkan.",
      lead: "Bangunan yang dikunjungi adalah hasil rekonstruksi. Halaman ini merangkum tahun-tahun penting berdasarkan catatan resmi.",
      image: IMG.rajo,
      imageAlt: "Struktur kayu Istano Basa Pagaruyung",
      sections: [
        {
          heading: "1976: peletakan tiang utama rekonstruksi",
          paragraphs: [
            "Indonesia Travel mencatat pembangunan tiang utama rekonstruksi di lokasi sekarang pada 27 Desember 1976.",
            "Ini menandai upaya membangun kembali istano di tapak yang dikenal sebagai Pagaruyung.",
          ],
        },
        {
          heading: "2007: kebakaran dan awal pembangunan kembali",
          paragraphs: [
            "Kantor Wakil Presiden mencatat kebakaran pada 27 Februari 2007 dan awal pembangunan kembali pada 8 Juli 2007.",
            "Peristiwa ini menjadi babak penting dalam sejarah fisik bangunan modern.",
          ],
        },
        {
          heading: "2013: museum hasil rekonstruksi dibuka",
          paragraphs: [
            "Menurut catatan Kantor Wakil Presiden, museum hasil rekonstruksi dibuka kembali pada Oktober 2013.",
            "Kunjungan Anda hari ini menikmati bangunan hasil rekonstruksi tersebut, bukan istana asli.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa kali istano terbakar?",
          a: "Kami merujuk catatan resmi tentang kebakaran 27 Februari 2007 dan rekonstruksi berikutnya. Catatan sejarah kebakaran lebih awal ada, tetapi kami tidak mencantumkan angka yang dipertentangkan.",
        },
        {
          q: "Kapan istano dibuka sebagai museum?",
          a: "Museum hasil rekonstruksi dibuka kembali pada Oktober 2013 menurut catatan Kantor Wakil Presiden.",
        },
        {
          q: "Apakah bahan bangunan asli tersisa?",
          a: "Sebagian elemen mungkin dipertahankan, tetapi bangunan utama adalah rekonstruksi. Jangan mengasumsikan semua bagian asli.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Kantor Wakil Presiden RI", url: SOURCES.vicePresident },
      ],
      updated: "Oktober 2026",
      related: ["sejarah-kerajaan-pagaruyung", "kerajaan-dan-istano-sekarang", "arsitektur-minangkabau"],
    },
    en: {
      kicker: "BUILDING HISTORY",
      h1: "Fire, Restoration & Reconstruction of Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Fire & Reconstruction: Years & Facts",
      metaDescription:
        "Timeline of the fire and reconstruction of Istano Basa Pagaruyung with verified years (1976, 2007, 2013) from official sources; no contested dates claimed.",
      lead: "The building you visit is a reconstruction. This page summarises key years based on official records.",
      image: IMG.rajo,
      imageAlt: "Wooden structure of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "1976: main-pillar ceremony",
          paragraphs: [
            "Indonesia Travel dates the main-pillar construction of the reconstruction at the present site to 27 December 1976.",
            "This marked the effort to rebuild the istano at the site known as Pagaruyung.",
          ],
        },
        {
          heading: "2007: fire and start of rebuilding",
          paragraphs: [
            "The Vice-President's Office records a fire on 27 February 2007 and the start of rebuilding on 8 July 2007.",
            "This event is an important chapter in the modern building's physical history.",
          ],
        },
        {
          heading: "2013: reconstructed museum reopened",
          paragraphs: [
            "According to the Vice-President's Office, the reconstructed museum reopened in October 2013.",
            "Your visit today enjoys that reconstructed building, not the original palace.",
          ],
        },
      ],
      faqs: [
        {
          q: "How many times has the istano burned?",
          a: "We refer to official records of the 27 February 2007 fire and the subsequent reconstruction. Earlier historical fires exist, but we do not list contested figures.",
        },
        {
          q: "When did it open as a museum?",
          a: "The reconstructed museum reopened in October 2013 per the Vice-President's Office.",
        },
        {
          q: "Do original building materials remain?",
          a: "Some elements may be retained, but the main building is a reconstruction. Do not assume all parts are original.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Vice-President's Office", url: SOURCES.vicePresident },
      ],
      updated: "October 2026",
      related: ["sejarah-kerajaan-pagaruyung", "kerajaan-dan-istano-sekarang", "arsitektur-minangkabau"],
    },
  },

  "rumah-gadang-dan-istano": {
    id: {
      kicker: "ARSITEKTUR",
      h1: "Rumah Gadang & Hubungannya dengan Istano Basa",
      metaTitle: "Rumah Gadang & Istano Basa: Perbedaan & Ciri Khas",
      metaDescription:
        "Menjelaskan Rumah Gadang sebagai jenis arsitektur Minangkabau dan hubungannya dengan Istano Basa Pagaruyung sebagai istana berbentuk rumah gadang.",
      lead: "Istano Basa Pagaruyung dibangun menyerupai Rumah Gadang dalam skala istana. Memahami Rumah Gadang membantu membaca detail istano.",
      image: IMG.rg,
      imageAlt: "Detail Rumah Gadang di Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Apa itu Rumah Gadang",
          paragraphs: [
            "Rumah Gadang adalah rumah adat Minangkabau dengan atap gonjong (meruncing seperti tanduk kerbau). Ia menjadi simbol identitas budaya.",
            "Secara tradisional, Rumah Gadang adalah tempat tinggal keluarga besar (clan) dengan tata ruang berdasarkan adat.",
          ],
        },
        {
          heading: "Istano sebagai Rumah Gadang skala istana",
          paragraphs: [
            "Istano Basa Pagaruyung menggunakan bentuk Rumah Gadang namun dalam skala dan fungsi istana. Ini bukan rumah tinggal biasa, melainkan representasi kebudayaan kerajaan.",
            "Perbedaan tampak pada ukuran, ornamen, dan fungsi upacara/penyimpanan koleksi.",
          ],
        },
        {
          heading: "Ciri yang bisa diobservasi",
          paragraphs: [
            "Perhatikan atap gonjong berlapis, tiang kayu, dan ragam ukiran. Beberapa bagian hanya boleh dimasuki dengan arahan petugas.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah Istano Basa adalah Rumah Gadang?",
          a: "Ia menggunakan bentuk Rumah Gadang dalam skala istana. Bukan rumah tinggal biasa, melainkan representasi istana budaya.",
        },
        {
          q: "Apa ciri khas atap gonjong?",
          a: "Atap meruncing menyerupai tanduk kerbau, simbol dalam tradisi Minangkabau.",
        },
        {
          q: "Boleh masuk ke semua ruangan?",
          a: "Tidak semua. Ikuti petunjuk petugas mengenai ruang yang terbuka bagi pengunjung.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["arsitektur-minangkabau", "ukiran-dan-simbolisme", "kebakaran-dan-rekonstruksi"],
    },
    en: {
      kicker: "ARCHITECTURE",
      h1: "Rumah Gadang & Its Relation to the Istano Basa",
      metaTitle: "Rumah Gadang & Istano Basa: Differences & Features",
      metaDescription:
        "Explaining Rumah Gadang as a Minangkabau architecture type and its relationship with Istano Basa Pagaruyung as a palace in rumah gadang form.",
      lead: "Istano Basa Pagaruyung is built like a Rumah Gadang at palace scale. Understanding Rumah Gadang helps read the istano's details.",
      image: IMG.rg,
      imageAlt: "Rumah Gadang detail at Istano Basa Pagaruyung",
      sections: [
        {
          heading: "What is a Rumah Gadang",
          paragraphs: [
            "A Rumah Gadang is the Minangkabau traditional house with a gonjong roof (pointed like buffalo horns). It is a symbol of cultural identity.",
            "Traditionally, a Rumah Gadang is the dwelling of an extended (clan) family with adat-based spatial order.",
          ],
        },
        {
          heading: "The istano as a palace-scale Rumah Gadang",
          paragraphs: [
            "Istano Basa Pagaruyung uses the Rumah Gadang form but at palace scale and function. It is not an ordinary dwelling, but a cultural-palace representation.",
            "Differences appear in size, ornament, and ceremonial/collection functions.",
          ],
        },
        {
          heading: "Observable features",
          paragraphs: [
            "Notice the layered gonjong roof, wooden pillars, and carved motifs. Some parts are accessible only with staff guidance.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is Istano Basa a Rumah Gadang?",
          a: "It uses the Rumah Gadang form at palace scale. Not an ordinary dwelling, but a cultural-palace representation.",
        },
        {
          q: "What is the gonjong roof feature?",
          a: "A pointed roof resembling buffalo horns, a symbol in Minangkabau tradition.",
        },
        {
          q: "May I enter all rooms?",
          a: "Not all. Follow staff directions about rooms open to visitors.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["arsitektur-minangkabau", "ukiran-dan-simbolisme", "kebakaran-dan-rekonstruksi"],
    },
  },
};
