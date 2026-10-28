import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsA4: Record<string, { id: TopicContent; en: TopicContent }> = {
  "durasi-dan-urutan-kunjungan": {
    id: {
      kicker: "RITME KUNJUNGAN",
      h1: "Durasi & Urutan Kunjungan di Istano Basa Pagaruyung",
      metaTitle: "Durasi & Urutan Kunjungan Istano Basa Pagaruyung: Rencana 1–3 Jam",
      metaDescription:
        "Saran durasi dan urutan menjelajahi Istano Basa Pagaruyung: dari bangunan utama, foto, hingga konteks budaya, sesuai waktu yang Anda miliki.",
      lead: "Halaman ini membantu Anda membagi waktu di istano agar tidak terburu-buru. Sesuaikan dengan ketersediaan waktu dan kondisi perjalanan.",
      image: IMG.rajo,
      imageAlt: "Ruang luar dan atap Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Saran durasi",
          paragraphs: [
            "Sediakan sekitar 1–3 jam untuk menjelajahi bangunan utama, berfoto di kawasan, dan membaca konteks budaya. Tambahkan waktu bila menggabungkan kunjungan dengan situs lain di Tanah Datar.",
            "Durasi singkat (1 jam) cukup untuk foto luar dan melihat atap gonjong; durasi panjang (3 jam) memungkinkan membaca pameran dengan tenang.",
          ],
        },
        {
          heading: "Urutan yang disarankan",
          paragraphs: [
            "Mulai dari area luar untuk melihat bentuk atap dan halaman, lalu masuk ke bangunan utama/pameran, kemudian foto dan istirahat di area teduh.",
            "Jika datang berkelompok, tetapkan titik kumpul agar tidak terpisah di kawasan yang luas.",
          ],
          bullets: [
            "Langkah 1: foto luar dan baca plang informasi.",
            "Langkah 2: masuk ke bangunan utama/pameran.",
            "Langkah 3: keliling halaman dan beristirahat.",
            "Langkah 4: beli oleh-oleh atau lanjut ke situs lain.",
          ],
        },
        {
          heading: "Menyesuaikan dengan cuaca",
          paragraphs: [
            "Pada hari hujan, prioritaskan bagian dalam bangunan dan bawa payung/jas hujan. Lihat panduan kunjungan saat hujan untuk rute penyesuaian.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa lama ideal di istano?",
          a: "Sekitar 1–3 jam tergantung minat. Satu jam cukup untuk foto luar; tiga jam untuk membaca pameran dengan tenang.",
        },
        {
          q: "Worth it for a quick stop?",
          a: "Ya, kunjungan singkat masih memberi kesan atap gonjong dan konteks Minangkabau. Datang pagi agar lebih tenang.",
        },
        {
          q: "Bagaimana bila waktu terbatas?",
          a: "Fokus ke bangunan utama dan foto luar, lalu lanjut ke Batusangkar untuk makan sebelum jalanan macet sore.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["jam-buka-dan-waktu-terbaik", "tur-setengah-hari", "wisata-sekitar-istano"],
    },
    en: {
      kicker: "VISIT PACE",
      h1: "How Long & In What Order to Visit Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Visit Duration & Order: 1–3 Hour Plan",
      metaDescription:
        "Suggested duration and order for exploring Istano Basa Pagaruyung: main building, photos, and cultural context, matched to your available time.",
      lead: "This page helps you split your time at the istano so you are not rushed. Adjust to your available time and travel conditions.",
      image: IMG.rajo,
      imageAlt: "Outdoor space and roof of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Suggested duration",
          paragraphs: [
            "Allow around 1–3 hours to explore the main building, take photos, and read the cultural context. Add time if combining with other Tanah Datar sites.",
            "A short (1 hour) visit is enough for exterior photos and the gonjong roof; a long (3 hour) visit lets you read exhibits calmly.",
          ],
        },
        {
          heading: "Suggested order",
          paragraphs: [
            "Start outside to see the roof form and grounds, then enter the main building/exhibits, then photograph and rest in shaded areas.",
            "For groups, set a meeting point so no one gets separated in the large grounds.",
          ],
          bullets: [
            "Step 1: exterior photos and read info signs.",
            "Step 2: enter the main building/exhibits.",
            "Step 3: walk the grounds and rest.",
            "Step 4: buy souvenirs or continue to other sites.",
          ],
        },
        {
          heading: "Adapting to weather",
          paragraphs: [
            "On rainy days, prioritise the indoor building and bring an umbrella/raincoat. See the rainy-day guide for route adjustments.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long is an ideal visit?",
          a: "About 1–3 hours depending on interest. One hour is enough for exterior photos; three hours for reading exhibits calmly.",
        },
        {
          q: "Worth a quick stop?",
          a: "Yes, even a short visit conveys the gonjong roof and Minangkabau context. Arrive in the morning for a calmer experience.",
        },
        {
          q: "What if time is limited?",
          a: "Focus on the main building and exterior photos, then continue to Batusangkar for a meal before afternoon traffic.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["jam-buka-dan-waktu-terbaik", "tur-setengah-hari", "wisata-sekitar-istano"],
    },
  },

  "kunjungan-keluarga": {
    id: {
      kicker: "KELUARGA",
      h1: "Kunjungan Keluarga ke Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung untuk Keluarga: Tips Anak & Fasilitas",
      metaDescription:
        "Tips kunjungan keluarga ke Istano Basa Pagaruyung: bawa anak, istirahat, dan hal yang perlu dikonfirmasi; tanpa asumsi fasilitas ramah anak.",
      lead: "Istano bisa dikunjungi bersama anak, asalkan direncanakan dengan tenang. Halaman ini membantu orang tua menyiapkan kunjungan tanpa mengasumsikan fasilitas tertentu.",
      image: IMG.hero,
      imageAlt: "Kawasan Istano Basa Pagaruyung terbuka untuk pengunjung",
      sections: [
        {
          heading: "Persiapan dengan anak",
          paragraphs: [
            "Bawa air minum, topi, dan sunblock karena sebagian area terbuka. Jangan mengandalkan ketersediaan toko di dalam kawasan; tanyakan petugas.",
            "Siapkan dorongan/stroller hanya bila yakin jalannya memadai; area luas dan sebagian berupa halaman terbuka.",
          ],
        },
        {
          heading: "Istirahat & keselamatan",
          paragraphs: [
            "Gunakan area teduh untuk istirahat, terutama siang hari. Awasi anak di tangga dan area dengan balkon/lorong tinggi.",
            "Jelaskan pada anak untuk menghormati area terbatas dan mengikuti arahan petugas.",
          ],
        },
        {
          heading: "Hal yang perlu dikonfirmasi",
          paragraphs: [
            "Kami tidak mengasumsikan adanya ruang menyusui, area bermain, atau toilet khusus anak. Tanyakan kepada petugas letak fasilitas umum saat kedatangan.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah istano ramah anak?",
          a: "Kawasan terbuka dapat dijelajahi keluarga, tetapi fasilitas spesifik anak belum terverifikasi. Siapkan kebutuhan dasar dan awasi anak di area tinggi.",
        },
        {
          q: "Boleh bawa stroller?",
          a: "Boleh, asalkan jalannya memadai. Sebagian area berupa halaman terbuka; pertimbangkan bahu jalan sebelum membawa stroller beroda kecil.",
        },
        {
          q: "Ada toilet dan air minum?",
          a: "Tanyakan letak fasilitas umum kepada petugas saat tiba; jangan mengandalkan ketersediaan seragam di dalam kawasan.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["lansia-dan-aksesibilitas", "tur-keluarga", "durasi-dan-urutan-kunjungan"],
    },
    en: {
      kicker: "FAMILIES",
      h1: "Visiting Istano Basa Pagaruyung with Family",
      metaTitle: "Istano Basa Pagaruyung for Families: Kids & Facility Tips",
      metaDescription:
        "Family visit tips for Istano Basa Pagaruyung: with children, rest, and what to confirm; no assumptions about child-friendly facilities.",
      lead: "The istano can be visited with children if planned calmly. This page helps parents prepare without assuming specific facilities.",
      image: IMG.hero,
      imageAlt: "Open grounds of Istano Basa Pagaruyung for visitors",
      sections: [
        {
          heading: "Preparation with children",
          paragraphs: [
            "Bring drinking water, a hat, and sunscreen because parts of the area are open. Do not rely on an in-grounds shop; ask staff.",
            "Bring a stroller only if you are sure the paths are suitable; the grounds are large with open yards.",
          ],
        },
        {
          heading: "Rest & safety",
          paragraphs: [
            "Use shaded areas to rest, especially midday. Supervise children on stairs and areas with high balconies/corridors.",
            "Explain to children to respect restricted areas and follow staff directions.",
          ],
        },
        {
          heading: "What to confirm",
          paragraphs: [
            "We do not assume there is a nursing room, play area, or child-specific toilet. Ask staff about public facilities on arrival.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is the istano child-friendly?",
          a: "The open grounds can be explored by families, but specific child facilities are unverified. Prepare basics and supervise children in elevated areas.",
        },
        {
          q: "May I bring a stroller?",
          a: "Yes, if paths are suitable. Some areas are open yards; consider the road shoulder before bringing a small-wheeled stroller.",
        },
        {
          q: "Are there toilets and drinking water?",
          a: "Ask staff about public facilities on arrival; do not rely on uniform availability inside the grounds.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["lansia-dan-aksesibilitas", "tur-keluarga", "durasi-dan-urutan-kunjungan"],
    },
  },
};
