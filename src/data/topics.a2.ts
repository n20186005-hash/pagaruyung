import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsA2: Record<string, { id: TopicContent; en: TopicContent }> = {
  "dari-batusangkar": {
    id: {
      kicker: "AKSES DARI KOTA",
      h1: "Dari Batusangkar ke Istano Basa Pagaruyung",
      metaTitle: "Cara ke Istano Basa Pagaruyung dari Batusangkar: Jarak & Transport",
      metaDescription:
        "Rute dari Batusangkar ke Istano Basa Pagaruyung: jarak dekat, pilihan ojek/taksi/angkutan lokal, dan tips tahap akhir perjalanan menuju kawasan istano.",
      lead: "Batusangkar adalah titik singgah utama sebelum istano. Dari pusat kota, jarak ke kawasan hanya pendek; halaman ini membantu tahap akhir perjalanan Anda.",
      image: IMG.detail,
      imageAlt: "Jalan menuju kawasan Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Batusangkar sebagai gerbang",
          paragraphs: [
            "Istano berada di Nagari Pagaruyung, Kecamatan Tanjung Emas, beberapa kilometer dari pusat Batusangkar. Rencanakan moda utama hingga Batusangkar, lalu siapkan transportasi untuk tahap akhir.",
            "Batusangkar menyediakan kebutuhan perjalanan: makan, penginapan, dan akses ke atraksi Tanah Datar lainnya.",
          ],
        },
        {
          heading: "Pilihan tahap akhir",
          paragraphs: [
            "Dari pusat Batusangkar, lanjutkan dengan taksi, ojek, atau angkutan lokal menuju kawasan istano. Sepakati tujuan, tarif, dan waktu tunggu sebelum berangkat.",
            "Jika membawa kendaraan sewaan, arahkan ke Jl. Sutan Alam Bagagarsyah, Pagaruyung; ikuti rambu dan petunjuk petugas parkir di lokasi.",
          ],
        },
        {
          heading: "Tips praktis",
          paragraphs: [
            "Tanyakan kepada warga atau petugas jika ragu arah; nama 'Istano Basa Pagaruyung' dikenal luas di Batusangkar.",
            "Bila ingin melanjutkan ke situs lain (Pariangan, Danau Singkarak), jadikan Batusangkar sebagai basis berangkat pagi.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa jarak Batusangkar ke istano?",
          a: "Istano hanya berjarak beberapa kilometer dari pusat Batusangkar. Kami sengaja tidak mencantumkan angka pasti yang belum terverifikasi; gunakan peta atau tanya warga setempat.",
        },
        {
          q: "Ada angkutan umum langsung ke istano?",
          a: "Belum terverifikasi ada rute tetap langsung ke gerbang istano. Opsi paling andal adalah ojek atau taksi dari Batusangkar; sepakati tarif sebelum naik.",
        },
        {
          q: "Bolehkah jalan kaki dari Batusangkar?",
          a: "Jarak cukup jauh untuk berjalan santai dengan anak atau bagasi; kami menyarankan transportasi tahap akhir kecuali Anda yakin rute dan kondisi jalannya.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["dari-bukittinggi", "dari-padang", "parkir-dan-pintu-masuk"],
    },
    en: {
      kicker: "FROM THE TOWN",
      h1: "From Batusangkar to Istano Basa Pagaruyung",
      metaTitle: "Getting to Istano Basa Pagaruyung from Batusangkar: Distance & Transport",
      metaDescription:
        "Route from Batusangkar to Istano Basa Pagaruyung: a short distance, ojek/taxi/local options, and tips for the final leg to the palace grounds.",
      lead: "Batusangkar is the main stop before the istano. From the town centre the grounds are a short distance away; this page helps with the final leg of your trip.",
      image: IMG.detail,
      imageAlt: "Road toward the Istano Basa Pagaruyung grounds",
      sections: [
        {
          heading: "Batusangkar as the gateway",
          paragraphs: [
            "The istano is in Nagari Pagaruyung, Tanjung Emas District, a few kilometres from central Batusangkar. Plan the main part of your journey to Batusangkar, then arrange transport for the final leg.",
            "Batusangkar covers travel needs: food, accommodation, and onward access to other Tanah Datar attractions.",
          ],
        },
        {
          heading: "Final-leg options",
          paragraphs: [
            "From central Batusangkar, continue by taxi, ojek, or local transport toward the palace grounds. Agree on destination, fare, and waiting time before departing.",
            "With a hired vehicle, navigate to Jl. Sutan Alam Bagagarsyah, Pagaruyung; follow signs and on-site parking staff.",
          ],
        },
        {
          heading: "Practical tips",
          paragraphs: [
            "Ask locals or staff if unsure of direction; 'Istano Basa Pagaruyung' is widely known in Batusangkar.",
            "If continuing to other sites (Pariangan, Lake Singkarak), use Batusangkar as an early-departure base.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is the distance from Batusangkar to the istano?",
          a: "The istano is only a few kilometres from central Batusangkar. We deliberately avoid publishing an unverified exact figure; use a map or ask locals.",
        },
        {
          q: "Is there direct public transport to the istano?",
          a: "A fixed direct route to the palace gate is unverified. The most reliable options are ojek or taxi from Batusangkar; agree the fare before boarding.",
        },
        {
          q: "Can I walk from Batusangkar?",
          a: "The distance is too far for a relaxed walk with children or luggage; we suggest final-leg transport unless you are confident about the route and road condition.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["dari-bukittinggi", "dari-padang", "parkir-dan-pintu-masuk"],
    },
  },

  "dari-bukittinggi": {
    id: {
      kicker: "AKSES DARI KOTA",
      h1: "Dari Bukittinggi ke Istano Basa Pagaruyung",
      metaTitle: "Cara ke Istano Basa Pagaruyung dari Bukittinggi: Rute & Waktu",
      metaDescription:
        "Rute dari Bukittinggi ke Istano Basa Pagaruyung via Batusangkar: perkiraan jarak dan waktu, pilihan bus/angkot/travel, serta pertimbangan rute.",
      lead: "Bukittinggi sering menjadi basis wisatawan di Sumatera Barat. Dari sini, perjalanan ke istano melewati Batusangkar sebagai titik akhir sebelum istano.",
      image: IMG.rajo,
      imageAlt: "Pemandangan jalan dataran tinggi menuju Tanah Datar",
      sections: [
        {
          heading: "Rute umum",
          paragraphs: [
            "Dari Bukittinggi, perjalanan darat menuju Tanah Datar umumnya melewati Padang Panjang lalu Batusangkar. Ini adalah rute utama yang banyak digunakan wisatawan.",
            "Perkiraan jarak Bukittinggi–Batusangkar sekitar 50–55 km; waktu tempuh bergantung lalu lintas dan jenis kendaraan (perkiraan 1,5–2 jam). Angka ini perkiraan, verifikasi saat merencanakan.",
          ],
        },
        {
          heading: "Pilihan transportasi",
          paragraphs: [
            "Untuk hemat, cari angkutan atau travel jurusan Batusangkar dari terminal Bukittinggi/Padang Panjang; jadwal dapat berubah, tanyakan langsung.",
            "Untuk fleksibel, sewa kendaraan atau taksi dari Bukittinggi ke Batusangkar, lalu lanjutkan tahap akhir ke istano (lihat panduan dari Batusangkar).",
          ],
        },
        {
          heading: "Pertimbangan rute",
          paragraphs: [
            "Jalan dataran tinggi bergelombang; siapkan istirahat dan waktu lebih bila membawa anak atau lansia.",
            "Jika ingin menggabungkan danau atau Pariangan, susun rute melingkar agar tidak bolak-balik.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa lama dari Bukittinggi ke istano?",
          a: "Perkiraan 1,5–2 jam ke Batusangkar, ditambah tahap akhir pendek ke istano. Waktu bervariasi dengan lalu lintas; verifikasi saat perjalanan.",
        },
        {
          q: "Ada bus langsung Bukittinggi–istano?",
          a: "Tidak terverifikasi ada bus langsung ke gerbang istano. Paling umum: angkutan ke Batusangkar, lalu ojek/taksi tahap akhir.",
        },
        {
          q: "Layakkah sehari pulang-pergi dari Bukittinggi?",
          a: "Ya, cukup umum. Siapkan waktu pagi berangkat dan sore kembali; pertimbangkan lelah perjalanan darat jika membawa anak kecil.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Visit Beautiful West Sumatra", url: SOURCES.visitWestSumatra },
      ],
      updated: "Oktober 2026",
      related: ["dari-batusangkar", "dari-padang", "tur-dari-bukittinggi"],
    },
    en: {
      kicker: "FROM THE CITY",
      h1: "From Bukittinggi to Istano Basa Pagaruyung",
      metaTitle: "Getting to Istano Basa Pagaruyung from Bukittinggi: Route & Time",
      metaDescription:
        "Route from Bukittinggi to Istano Basa Pagaruyung via Batusangkar: estimated distance and time, bus/angkot/travel choices, and route trade-offs.",
      lead: "Bukittinggi is a common base for travellers in West Sumatra. From there, the trip to the istano passes through Batusangkar as the last town before the palace.",
      image: IMG.rajo,
      imageAlt: "Highland road scenery toward Tanah Datar",
      sections: [
        {
          heading: "Common route",
          paragraphs: [
            "From Bukittinggi, the overland trip to Tanah Datar generally goes through Padang Panjang then Batusangkar. This is the main route most travellers use.",
            "Bukittinggi–Batusangkar is roughly 50–55 km; travel time depends on traffic and vehicle type (estimate 1.5–2 hours). These are estimates—verify when planning.",
          ],
        },
        {
          heading: "Transport choices",
          paragraphs: [
            "For lower cost, look for transport or shared travel to Batusangkar from Bukittinggi/Padang Panjang terminals; schedules change, so ask directly.",
            "For flexibility, hire a vehicle or taxi from Bukittinggi to Batusangkar, then continue the short final leg to the istano (see the from-Batusangkar guide).",
          ],
        },
        {
          heading: "Route trade-offs",
          paragraphs: [
            "Highland roads are winding; allow rest and extra time if travelling with children or seniors.",
            "If combining a lake or Pariangan, plan a loop route to avoid backtracking.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long from Bukittinggi to the istano?",
          a: "Estimate 1.5–2 hours to Batusangkar, plus the short final leg to the istano. Time varies with traffic; verify during travel.",
        },
        {
          q: "Is there a direct bus Bukittinggi–istano?",
          a: "A direct bus to the palace gate is unverified. Most common: transport to Batusangkar, then ojek/taxi for the final leg.",
        },
        {
          q: "Is a Bukittinggi day return practical?",
          a: "Yes, it is common. Depart in the morning and return in the afternoon; consider road-trip fatigue if travelling with small children.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Visit Beautiful West Sumatra", url: SOURCES.visitWestSumatra },
      ],
      updated: "October 2026",
      related: ["dari-batusangkar", "dari-padang", "tur-dari-bukittinggi"],
    },
  },
};
