import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsA1: Record<string, { id: TopicContent; en: TopicContent }> = {
  "tiket-dan-biaya": {
    id: {
      kicker: "BIAYA & TIKET",
      h1: "Tiket & Biaya Masuk Istano Basa Pagaruyung",
      metaTitle: "Tiket & Biaya Istano Basa Pagaruyung: Cara Beli & Catatan 2026",
      metaDescription:
        "Informasi tiket dan biaya Istano Basa Pagaruyung yang dapat diverifikasi: tarif dapat berubah, layanan tambahan, dan cara membeli di loket. Bukan harga resmi.",
      lead: "Halaman ini merangkum apa yang perlu Anda ketahui tentang biaya kunjungan. Kami tidak mencantumkan harga pasti yang belum terverifikasi; gunakan informasi loket sebagai rujukan akhir.",
      image: IMG.detail,
      imageAlt: "Bangunan Istano Basa Pagaruyung dari sudut depan",
      sections: [
        {
          heading: "Mengapa kami tidak mencantumkan harga tetap",
          paragraphs: [
            "Tarif masuk dan layanan di kawasan dapat berubah sewaktu-waktu. Karena panduan ini independen dan bukan pengelola, kami tidak mencantumkan angka harga sebagai kepastian.",
            "Saat kunjungan, periksa papan informasi dan loket resmi di kawasan. Angka dari blog perjalanan lama sering kadaluarsa dan tidak boleh dijadikan patokan.",
          ],
        },
        {
          heading: "Biaya yang mungkin muncul",
          paragraphs: [
            "Selain tiket masuk, kawasan sering menawarkan layanan tambahan berbayar. Tanyakan harga dan ketersediaan kepada petugas sebelum menggunakan layanan apa pun.",
          ],
          bullets: [
            "Tiket masuk ke area/museum istano.",
            "Sewa busana tradisional, jika dilayani di lokasi.",
            "Parkir kendaraan di area kawasan.",
            "Jasa lain yang dikelola pihak kawasan (misalnya pendampingan atau alat foto).",
          ],
        },
        {
          heading: "Cara membayar dengan aman",
          paragraphs: [
            "Bayarlah di loket resmi yang ditunjuk petugas, dan simpan bukti pembayaran. Waspadai pihak yang menawarkan 'tiket' di luar kawasan.",
            "Jika ragu, tanyakan kepada petugas berpakaian dinas sebelum membayar. Jangan memberikan uang kepada orang yang tidak dapat menunjukkan identitas atau struk resmi.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa harga tiket masuk Istano Basa Pagaruyung?",
          a: "Kami tidak mencantumkan angka pasti karena dapat berubah. Periksa papan informasi dan loket resmi saat kunjungan; jangan mengandalkan harga lama dari blog perjalanan.",
        },
        {
          q: "Apakah ada tiket online resmi?",
          a: "Kami belum menemukan kanal pemesanan resmi yang terverifikasi. Untuk menghindari penipuan, beli langsung di loket resmi di kawasan.",
        },
        {
          q: "Apakah anak dan lansia gratis?",
          a: "Kebijakan tarif khusus belum terverifikasi. Tanyakan kepada petugas di loket mengenai kategori usia saat kedatangan.",
        },
        {
          q: "Apakah ada biaya untuk memotret?",
          a: "Beberapa kawasan mengenakan biaya alat atau jasa foto. Tanyakan sebelum memotret dengan tripod atau menggunakan jasa fotografer tertentu.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Kantor Wakil Presiden RI", url: SOURCES.vicePresident },
      ],
      updated: "Oktober 2026",
      related: ["jam-buka-dan-waktu-terbaik", "parkir-dan-pintu-masuk", "durasi-dan-urutan-kunjungan"],
    },
    en: {
      kicker: "TICKETS & COSTS",
      h1: "Tickets & Entry Fees at Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Tickets & Fees: How to Buy & 2026 Notes",
      metaDescription:
        "Verifiable ticket and fee information for Istano Basa Pagaruyung: prices may change, extra services, and how to pay at the counter. No official pricing claimed.",
      lead: "This page sums up what you need to know about visit costs. We do not publish unverified fixed prices; treat on-site counter information as your final reference.",
      image: IMG.detail,
      imageAlt: "Istano Basa Pagaruyung building from the front",
      sections: [
        {
          heading: "Why we do not list fixed prices",
          paragraphs: [
            "Entry charges and on-site services can change at any time. Because this guide is independent and not the operator, we do not present price figures as certainties.",
            "During your visit, check the information board and the official ticket counter at the site. Old travel-blog figures are often outdated and should not be relied on.",
          ],
        },
        {
          heading: "Costs that may appear",
          paragraphs: [
            "Besides admission, the site often offers paid extras. Ask staff about price and availability before using any service.",
          ],
          bullets: [
            "Admission to the palace/museum area.",
            "Traditional costume rental, if offered on site.",
            "Vehicle parking within the grounds.",
            "Other operator-run services (for example guiding or camera fees).",
          ],
        },
        {
          heading: "Paying safely",
          paragraphs: [
            "Pay at the official counter indicated by staff and keep your receipt. Be cautious of anyone offering 'tickets' outside the grounds.",
            "If unsure, ask uniformed staff before paying. Do not hand money to people who cannot show identification or an official receipt.",
          ],
        },
      ],
      faqs: [
        {
          q: "How much is the entry ticket to Istano Basa Pagaruyung?",
          a: "We do not list a fixed amount because it can change. Check the information board and official counter on the day; do not rely on old travel-blog prices.",
        },
        {
          q: "Is there an official online ticket?",
          a: "We have not found a verified official booking channel. To avoid scams, buy directly at the official counter on site.",
        },
        {
          q: "Are children and seniors free?",
          a: "Special-rate policy is unverified. Ask the counter staff about age categories on arrival.",
        },
        {
          q: "Is there a photography fee?",
          a: "Some sites charge equipment or photography-service fees. Ask before using a tripod or a specific photographer service.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Vice-President's Office", url: SOURCES.vicePresident },
      ],
      updated: "October 2026",
      related: ["jam-buka-dan-waktu-terbaik", "parkir-dan-pintu-masuk", "durasi-dan-urutan-kunjungan"],
    },
  },

  "jam-buka-dan-waktu-terbaik": {
    id: {
      kicker: "JAM BUKA & WAKTU",
      h1: "Jam Buka & Waktu Terbaik Mengunjungi Istano Basa Pagaruyung",
      metaTitle: "Jam Buka Istano Basa Pagaruyung & Waktu Terbaik: Catatan 2026",
      metaDescription:
        "Jam buka Istano Basa Pagaruyung menurut catatan Google Maps (08.00–18.00) beserta catatan verifikasi, serta saran waktu terbaik untuk berkunjung.",
      lead: "Halaman ini menjelaskan kapan istano biasanya dapat dikunjungi dan kapan waktu paling nyaman. Catatan waktu bersifat bertanggal, bukan jaminan untuk hari libur atau pemeliharaan.",
      image: IMG.hero,
      imageAlt: "Istano Basa Pagaruyung dengan latar langit",
      sections: [
        {
          heading: "Jam kunjungan (catatan bertanggal)",
          paragraphs: [
            "Google Maps mencantumkan jam operasional 08.00–18.00 setiap hari saat kami periksa pada 19 Oktober 2026. Ini adalah catatan pihak ketiga, bukan konfirmasi pengelola.",
            "Untuk hari libur nasional, acara, atau pemeliharaan, jadwal dapat berbeda. Konfirmasikan kepada petugas atau kanal resmi setempat sebelum berangkat jauh-jauh hari.",
          ],
        },
        {
          heading: "Waktu terbaik dalam hari",
          paragraphs: [
            "Pagi hari memberi cahaya lebih lembut untuk melihat bentuk atap gonjong dan berjalan di kawasan. Datang lebih awal juga memberi ritme kunjungan yang lebih tenang sebelum pengunjung lain ramai.",
            "Sore hari cocok untuk foto siluet atap, tetapi cahaya menurun; bila membawa anak atau lansia, pertimbangkan kenyamanan sebelum gelap.",
          ],
        },
        {
          heading: "Waktu terbaik dalam setahun",
          paragraphs: [
            "Tanah Datar beriklim tropis lembap. Musim hujan umumnya lebih basah; periksa prakiraan cuaca sebelum berkunjung agar jalanan dan kawasan nyaman dijelajahi.",
            "Hindari hari dengan acara besar di kawasan jika Anda menginginkan kunjungan tenang; tanyakan jadwal acara kepada petugas.",
          ],
        },
      ],
      faqs: [
        {
          q: "Jam buka Istano Basa Pagaruyung jam berapa?",
          a: "Google Maps mencantumkan 08.00–18.00 setiap hari saat diperiksa 19 Oktober 2026. Ini catatan bertanggal, bukan jaminan untuk hari libur atau pemeliharaan; konfirmasikan ke petugas.",
        },
        {
          q: "Hari apa istano tutup?",
          a: "Catatan Maps menunjukkan buka setiap hari, tetapi untuk hari libur atau acara tertentu jadwal bisa berubah. Tanyakan petugas sebelum perjalanan.",
        },
        {
          q: "Kapan paling sepi pengunjung?",
          a: "Pagi hari biasanya lebih tenang. Hari kerja cenderung lebih sepi daripada akhir pekan atau hari libur nasional.",
        },
      ],
      sources: [
        { name: "Google Maps (listing dicek 19 Okt 2026)", url: "https://maps.app.goo.gl/RqqYs1bsjPJaDFB66" },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["tiket-dan-biaya", "durasi-dan-urutan-kunjungan", "kunjungan-saat-hujan"],
    },
    en: {
      kicker: "HOURS & TIMING",
      h1: "Opening Hours & Best Time to Visit Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Opening Hours & Best Time: 2026 Notes",
      metaDescription:
        "Istano Basa Pagaruyung opening hours from the dated Google Maps listing (08:00–18:00) plus verification notes, and the best time of day to visit.",
      lead: "This page explains when the istano is generally open and when the visit is most comfortable. Timing notes are dated, not a guarantee for holidays or maintenance.",
      image: IMG.hero,
      imageAlt: "Istano Basa Pagaruyung against the sky",
      sections: [
        {
          heading: "Visiting hours (dated listing)",
          paragraphs: [
            "Google Maps listed 08:00–18:00 daily when we checked on 19 October 2026. This is a third-party listing, not operator confirmation.",
            "For national holidays, events, or maintenance, hours may differ. Confirm with site staff or local official channels before a long trip.",
          ],
        },
        {
          heading: "Best time of day",
          paragraphs: [
            "Morning light is gentler for seeing the gonjong roof form and walking the grounds. Arriving early also gives a quieter rhythm before other visitors arrive.",
            "Late afternoon suits roof-silhouette photos, but light fades; if visiting with children or seniors, consider comfort before dark.",
          ],
        },
        {
          heading: "Best time of year",
          paragraphs: [
            "Tanah Datar has a humid tropical climate. The wetter season is rainier; check the weather forecast before visiting so paths and grounds are comfortable to explore.",
            "Avoid days with large on-site events if you want a calm visit; ask staff about event schedules.",
          ],
        },
      ],
      faqs: [
        {
          q: "What are the opening hours of Istano Basa Pagaruyung?",
          a: "Google Maps listed 08:00–18:00 daily when checked on 19 October 2026. This is a dated listing, not a guarantee for holidays or maintenance; confirm with staff.",
        },
        {
          q: "Which day is it closed?",
          a: "The Maps listing shows daily opening, but schedules can change for holidays or special events. Ask staff before travelling.",
        },
        {
          q: "When is it least crowded?",
          a: "Mornings are usually quieter. Weekdays tend to be calmer than weekends or national holidays.",
        },
      ],
      sources: [
        { name: "Google Maps (listing checked 19 Oct 2026)", url: "https://maps.app.goo.gl/RqqYs1bsjPJaDFB66" },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["tiket-dan-biaya", "durasi-dan-urutan-kunjungan", "kunjungan-saat-hujan"],
    },
  },
};
