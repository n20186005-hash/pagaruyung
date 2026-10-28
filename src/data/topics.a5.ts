import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsA5: Record<string, { id: TopicContent; en: TopicContent }> = {
  "lansia-dan-aksesibilitas": {
    id: {
      kicker: "AKSESIBILITAS",
      h1: "Kunjungan Lansia & Aksesibilitas di Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung untuk Lansia: Akses & Hal Perlu Diketahui",
      metaDescription:
        "Panduan aksesibilitas Istano Basa Pagaruyung untuk lansia: langkah, rest, dan hal yang perlu dikonfirmasi; tidak mengklaim fasilitas difabel tertentu.",
      lead: "Lansia dapat mengunjungi istano, tetapi sebaiknya konfirmasi kondisi jalur dan fasilitas sebelum berangkat. Kami tidak mengasumsikan ketersediaan fasilitas difabel.",
      image: IMG.detail,
      imageAlt: "Tangga dan serambi Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Jalur & anak tangga",
          paragraphs: [
            "Bangunan tradisional Minangkabau umumnya memiliki tangga dan lantai bertingkat. Persiapan tenaga dan langkah pelan membantu lansia menikmati kunjungan.",
            "Tanyakan kepada petugas jalur yang paling mudah sebelum naik; sebagian area mungkin lebih landai daripada lainnya.",
          ],
        },
        {
          heading: "Istirahat & kenyamanan",
          paragraphs: [
            "Gunakan area teduh untuk istirahat berkala. Bawa air minum dan obat pribadi; jangan mengandalkan ketersediaan di dalam kawasan.",
            "Datang pagi agar suhu lebih nyaman dan kawasan lebih sepi sebelum ramai.",
          ],
        },
        {
          heading: "Hal yang perlu dikonfirmasi",
          paragraphs: [
            "Kami tidak mengklaim tersedia kursi roda, rambatan, atau toilet difabel. Tanyakan kepada petugas atau kanal resmi sebelum kedatangan bila akses khusus diperlukan.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah istano aksesibel untuk kursi roda?",
          a: "Belum terverifikasi. Bangunan tradisional memiliki banyak tangga; tanyakan petugas jalur yang paling mudah sebelum kedatangan.",
        },
        {
          q: "Ada jalur tanpa tangga?",
          a: "Kami tidak mencantumkan jalur khusus. Tanyakan kepada petugus tentang akses yang paling ringan untuk lansia.",
        },
        {
          q: "Berapa lama waktu yang nyaman bagi lansia?",
          a: "Sekitar 1–2 jam dengan istirahat berkala cukup. Jangan terburu-buru; utamakan kenyamanan.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["kunjungan-keluarga", "parkir-dan-pintu-masuk", "tiket-dan-biaya"],
    },
    en: {
      kicker: "ACCESSIBILITY",
      h1: "Seniors & Accessibility at Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung for Seniors: Access & What to Know",
      metaDescription:
        "Accessibility guide for Istano Basa Pagaruyung for seniors: steps, rest, and what to confirm; no claimed specific disability facilities.",
      lead: "Seniors can visit the istano, but it is best to confirm path conditions and facilities before departure. We do not assume specific disability facilities.",
      image: IMG.detail,
      imageAlt: "Stairs and veranda of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Paths & stairs",
          paragraphs: [
            "Traditional Minangkabau buildings generally have stairs and raised floors. Pacing yourself helps seniors enjoy the visit.",
            "Ask staff for the easiest route before climbing; some areas may be gentler than others.",
          ],
        },
        {
          heading: "Rest & comfort",
          paragraphs: [
            "Use shaded areas for periodic rest. Bring drinking water and personal medication; do not rely on in-grounds availability.",
            "Arrive in the morning for more comfortable temperature and a quieter grounds before crowds.",
          ],
        },
        {
          heading: "What to confirm",
          paragraphs: [
            "We do not claim there are wheelchairs, ramps, or accessible toilets. Ask staff or official channels before arrival if special access is needed.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is the istano wheelchair accessible?",
          a: "Unverified. Traditional buildings have many stairs; ask staff for the easiest route before arrival.",
        },
        {
          q: "Is there a stair-free route?",
          a: "We do not list a specific route. Ask staff about the gentlest access for seniors.",
        },
        {
          q: "How long is comfortable for seniors?",
          a: "About 1–2 hours with periodic rest is enough. Do not rush; prioritise comfort.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["kunjungan-keluarga", "parkir-dan-pintu-masuk", "tiket-dan-biaya"],
    },
  },

  "kunjungan-saat-hujan": {
    id: {
      kicker: "CUACA",
      h1: "Kunjungan Saat Hujan ke Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Saat Hujan: Rute & Persiapan",
      metaDescription:
        "Tips kunjungan saat hujan di Istano Basa Pagaruyung: prioritas bagian dalam, membawa payung, dan rencana cadangan tanpa klaim cuaca pasti.",
      lead: "Hujan tidak harus membatalkan kunjungan. Halaman ini memberi cara menyesuaikan rencana agar tetap nyaman dan aman.",
      image: IMG.rg,
      imageAlt: "Atap gonjong Istano Basa Pagaruyung melindungi area",
      sections: [
        {
          heading: "Prioritas bagian dalam",
          paragraphs: [
            "Fokus ke bangunan utama/pameran yang terlindung atap. Gunakan waktu hujan untuk membaca konteks sejarah dan budaya.",
            "Area luar tetap dapat dijelajahi di antara hujan ringan; bawa payung atau jas hujan.",
          ],
        },
        {
          heading: "Persiapan",
          paragraphs: [
            "Bawa payung, jas hujan, dan alas kaki dengan cengkeraman baik karena halaman dapat licin. Hindari berlarian di lantai basah.",
            "Periksa prakiraan cuaca sebelum berangkat; jika hujan lebat berlanjut, pertimbangkan menunda kunjungan luar.",
          ],
        },
        {
          heading: "Rencana cadangan",
          paragraphs: [
            "Jika hujan sangat lebat, kombinasikan kunjungan dengan makan di Batusangkar atau toko oleh-oleh di kawasan. Lihat panduan kuliner dan oleh-oleh.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah istano tutup saat hujan?",
          a: "Tidak otomatis. Bangunan utama terlindung atap; area luar mungkin kurang nyaman saat hujan lebat. Konfirmasikan jam operasional seperti biasa.",
        },
        {
          q: "Boleh foto saat hujan?",
          a: "Boleh dengan hati-hati; atap gonjong terlihat dramatis saat mendung. Lindungi kamera dari air.",
        },
        {
          q: "Apa rencana cadangan?",
          a: "Gabungkan dengan makan di Batusangkar atau toko oleh-oleh; atau tunda kunjungan luar ke hari cerah.",
        },
      ],
      sources: [
        { name: "BMKG (prakiraan cuaca)", url: "https://www.bmkg.go.id" },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["jam-buka-dan-waktu-terbaik", "makan-di-sekitar-istano", "oleh-oleh-dan-pasar"],
    },
    en: {
      kicker: "WEATHER",
      h1: "Visiting Istano Basa Pagaruyung in the Rain",
      metaTitle: "Istano Basa Pagaruyung in the Rain: Route & Preparation",
      metaDescription:
        "Rain-visit tips for Istano Basa Pagaruyung: prioritise indoor parts, bring an umbrella, and backup plans without claiming certain weather.",
      lead: "Rain does not have to cancel a visit. This page shows how to adapt plans to stay comfortable and safe.",
      image: IMG.rg,
      imageAlt: "Gonjong roof of Istano Basa Pagaruyung sheltering the area",
      sections: [
        {
          heading: "Prioritise indoor parts",
          paragraphs: [
            "Focus on the main building/exhibits sheltered by the roof. Use rainy time to read the historical and cultural context.",
            "Outdoor areas can still be explored between light showers; bring an umbrella or raincoat.",
          ],
        },
        {
          heading: "Preparation",
          paragraphs: [
            "Bring an umbrella, raincoat, and footwear with good grip because yards can be slippery. Avoid running on wet floors.",
            "Check the weather forecast before departure; if heavy rain continues, consider postponing outdoor parts.",
          ],
        },
        {
          heading: "Backup plan",
          paragraphs: [
            "If rain is very heavy, combine the visit with a meal in Batusangkar or souvenir shops at the site. See the food and souvenir guides.",
          ],
        },
      ],
      faqs: [
        {
          q: "Does the istano close when it rains?",
          a: "Not automatically. The main building is roof-sheltered; outdoor areas may be less comfortable in heavy rain. Confirm operating hours as usual.",
        },
        {
          q: "May I photograph in the rain?",
          a: "Yes, carefully; the gonjong roof looks dramatic under overcast sky. Protect the camera from water.",
        },
        {
          q: "What is the backup plan?",
          a: "Combine with a meal in Batusangkar or souvenir shops; or postpone outdoor parts to a sunny day.",
        },
      ],
      sources: [
        { name: "BMKG (weather forecast)", url: "https://www.bmkg.go.id" },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["jam-buka-dan-waktu-terbaik", "makan-di-sekitar-istano", "oleh-oleh-dan-pasar"],
    },
  },

  "foto-dan-etika-berkunjung": {
    id: {
      kicker: "ETIKA & FOTO",
      h1: "Foto & Etika Berkunjung di Istano Basa Pagaruyung",
      metaTitle: "Foto & Etika Berkunjung Istano Basa Pagaruyung: Aturan & Tips",
      metaDescription:
        "Panduan fotografi dan etika berkunjung di Istano Basa Pagaruyung: hormati area terbatas, pakaian sopan, dan aturan memotret yang perlu dikonfirmasi.",
      lead: "Foto membantu mengenang kunjungan, tetapi etika menjaga kekhusyukan dan menghormati ruang budaya tetap utama. Halaman ini merangkumnya.",
      image: IMG.hero,
      imageAlt: "Pengunjung memotret atap gonjong Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Etika dasar",
          paragraphs: [
            "Kenakan pakaian sopan, nyaman, dan sesuai cuaca. Ikuti petunjuk petugas, termasuk ketentuan alas kaki atau area yang tidak dapat diakses pengunjung.",
            "Hormati upacara atau aktivitas setempat; jangan masuk area yang dibatasi tanpa izin.",
          ],
        }, {
          heading: "Aturan foto",
          paragraphs: [
            "Foto umum di kawasan terbuka umumnya diperbolehkan. Untuk foto dengan jasa atau alat khusus (tripod, drone), tanyakan izin dan biaya kepada petugas.",
            "Hindari memotret orang tanpa izin, terutama saat mereka sedang beribadah atau kegiatan pribadi.",
          ],
        }, {
          heading: "Tips foto",
          paragraphs: [
            "Pagi dan sore memberi cahaya terbaik untuk atap gonjong. Ambil sudut rendah untuk menonjolkan bentuk atap.",
            "Gunakan mode HDR hati-hati karena kontras terbuka-tertutup cukup kuat.",
          ],
        },
      ],
      faqs: [
        {
          q: "Boleh foto di dalam istano?",
          a: "Area umum biasanya diperbolehkan; untuk ruang khusus atau pameran tertentu, ikuti petunjuk petugas di lokasi.",
        },
        {
          q: "Boleh pakai drone?",
          a: "Belum terverifikasi. Tanyakan izin dan aturan kepada petugas; banyak kawasan melarang terbang tanpa izin.",
        },
        {
          q: "Apa aturan pakaian?",
          a: "Pakaian sopan dan nyaman. Beberapa layanan busana tradisional mungkin tersedia; tanyakan petugas harga dan pemesanan.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["tiket-dan-biaya", "kunjungan-keluarga", "ruang-dalam-dan-pameran"],
    },
    en: {
      kicker: "ETHICS & PHOTOS",
      h1: "Photography & Visiting Etiquette at Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Photos & Etiquette: Rules & Tips",
      metaDescription:
        "Photography and visiting etiquette at Istano Basa Pagaruyung: respect restricted areas, dress modestly, and photo rules to confirm.",
      lead: "Photos help remember the visit, but etiquette—preserving respect and honouring a cultural space—remains primary. This page sums it up.",
      image: IMG.hero,
      imageAlt: "Visitors photographing the gonjong roof of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Basic etiquette",
          paragraphs: [
            "Wear modest, comfortable clothing suited to the weather. Follow staff directions, including footwear rules or restricted areas.",
            "Respect local ceremonies or activities; do not enter restricted areas without permission.",
          ],
        }, {
          heading: "Photo rules",
          paragraphs: [
            "General photos in open grounds are generally allowed. For services or special equipment (tripod, drone), ask staff about permission and fees.",
            "Avoid photographing people without consent, especially during worship or private activities.",
          ],
        }, {
          heading: "Photo tips",
          paragraphs: [
            "Morning and late afternoon give the best light for the gonjong roof. Use a low angle to emphasise the roof form.",
            "Use HDR carefully because open-shade contrast is strong.",
          ],
        },
      ],
      faqs: [
        {
          q: "May I photograph inside the istano?",
          a: "General areas are usually allowed; for special rooms or exhibits, follow on-site staff directions.",
        },
        {
          q: "May I use a drone?",
          a: "Unverified. Ask staff about permission and rules; many sites ban flying without authorisation.",
        },
        {
          q: "What is the dress code?",
          a: "Modest and comfortable clothing. Traditional costume services may be available; ask staff about price and booking.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["tiket-dan-biaya", "kunjungan-keluarga", "ruang-dalam-dan-pameran"],
    },
  },
};
