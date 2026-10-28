import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsD4: Record<string, { id: TopicContent; en: TopicContent }> = {
  "tur-sehari-tanah-datar": {
    id: {
      kicker: "RUTE",
      h1: "Tur Sehari di Tanah Datar dari Istano Basa",
      metaTitle: "Tur Sehari Tanah Datar: Rute Istano, Pariangan & Batusangkar",
      metaDescription:
        "Contoh tur sehari di Tanah Datar berbasis Istano Basa Pagaruyung: urutan, waktu, dan opsi danau; disesuaikan dengan kondisi jalan.",
      lead: "Sehari penuh memungkinkan menggabungkan istano, desa adat, dan kota. Halaman ini memberi contoh ritme tanpa mengikat jadwal pasti.",
      image: IMG.hero,
      imageAlt: "Pemandangan Tanah Datar dari atas",
      sections: [
        {
          heading: "Contoh ritme sehari",
          paragraphs: [
            "Pagi: istano (2–3 jam). Siang: makan dan keliling Batusangkar singkat. Sore: Pariangan atau danau bila waktu dan jalan mendukung.",
            "Kembali ke Batusangkar sebelum petang untuk makan malam atau lanjut perjalanan jauh.",
          ],
        },
        {
          heading: "Opsi danau",
          paragraphs: [
            "Danau Singkarak menambah waktu perjalanan. Verifikasi akses dan fasilitas di lokasi; jangan mengasumsikan kondisi tertentu.",
            "Bila memilih danau, kurangi tempat lain agar tidak lelah menyetir di jalan meliuk.",
          ],
        },
        {
          heading: "Pertimbangan", paragraphs: [
            "Jalan dataran tinggi meliuk; istirahatlah berkala. Bawa air dan bahan bakar cukup.",
            "Sesuaikan dengan cuaca; lihat panduan kunjungan saat hujan untuk cadangan.",
          ] },
      ],
      faqs: [
        {
          q: "Apakah sehari cukup untuk istano + Pariangan + danau?",
          a: "Mungkin bila dimulai pagi dan tidak terlalu lama di tiap tempat. Lebih nyaman fokus 2–3 tujuan.",
        },
        {
          q: "Worth it bawa anak seharian?",
          a: "Bisa, asalkan ritme santai dan banyak istirahat. Lihat panduan tur keluarga.",
        },
        {
          q: "Bagaimana bila cuaca buruk?",
          a: "Fokus istano dan Batusangkar; tunda danau/Pariangan ke hari cerah.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["tur-setengah-hari", "nagari-tuo-pariangan", "tur-keluarga"],
    },
    en: {
      kicker: "ROUTE",
      h1: "Full-Day Tanah Datar Tour from Istano Basa",
      metaTitle: "Tanah Datar Full-Day Tour: Istano, Pariangan & Batusangkar Route",
      metaDescription:
        "A sample full-day Tanah Datar tour based on Istano Basa Pagaruyung: order, time, and lake option; adjusted to road conditions.",
      lead: "A full day lets you combine the istano, an adat village, and the town. This page gives a rhythm sample without binding a fixed schedule.",
      image: IMG.hero,
      imageAlt: "Tanah Datar scenery from above",
      sections: [
        {
          heading: "Sample full-day rhythm",
          paragraphs: [
            "Morning: istano (2–3 hours). Midday: meal and short Batusangkar walk. Afternoon: Pariangan or the lake if time and roads allow.",
            "Return to Batusangkar before dusk for dinner or to continue a long trip.",
          ],
        },
        {
          heading: "Lake option",
          paragraphs: [
            "Lake Singkarak adds travel time. Verify access and facilities on site; do not assume specific conditions.",
            "If choosing the lake, reduce other stops to avoid fatigue on winding roads.",
          ],
        },
        {
          heading: "Considerations",
          paragraphs: [
            "Highland roads wind; rest periodically. Carry water and enough fuel.",
            "Match the weather; see the rainy-day guide for backup.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is a day enough for istano + Pariangan + lake?",
          a: "Possible if started early and not too long at each. More comfortable focusing on 2–3 goals.",
        },
        {
          q: "Worth a full day with children?",
          a: "Yes, with a relaxed rhythm and plenty of rest. See the family tour guide.",
        },
        {
          q: "What if the weather is bad?",
          a: "Focus on the istano and Batusangkar; postpone the lake/Pariangan to a sunny day.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["tur-setengah-hari", "nagari-tuo-pariangan", "tur-keluarga"],
    },
  },

  "tur-dari-bukittinggi": {
    id: {
      kicker: "RUTE",
      h1: "Tur Sehari dari Bukittinggi ke Istano Basa",
      metaTitle: "Tur dari Bukittinggi: Istano Basa & Tanah Datar Sehari",
      metaDescription:
        "Rencana tur sehari pulang-pergi dari Bukittinggi ke Istano Basa Pagaruyung: waktu tempuh, istirahat, dan batasan perjalanan darat.",
      lead: "Bukittinggi adalah basis populer; istano bisa dijadikan tujuan sehari. Halaman ini membantu menyusun ritme tanpa mengikat jadwal.",
      image: IMG.rajo,
      imageAlt: "Jalan dataran tinggi dari Bukittinggi",
      sections: [
        {
          heading: "Waktu tempuh & istirahat",
          paragraphs: [
            "Perkiraan Bukittinggi–Batusangkar 1,5–2 jam. Berangkat pagi agar istano tidak terburu-buru dan kembali sebelum gelap.",
            "Istirahatlah di Padang Panjang bila lelah; jalan meliuk butuh konsentrasi.",
          ],
        },
        {
          heading: "Ritme sehari",
          paragraphs: [
            "07.00 berangkat Bukittinggi. 09.00 tiba Batusangkar, sarapan. 09.30–12.00 istano. 12.30 makan siang. 14.00 opsi Pariangan singkat atau kembali.",
            "Sesuaikan dengan tenaga; jangan memaksakan danau bila waktu sempit.",
          ],
        },
        {
          heading: "Batasan",
          paragraphs: [
            "Perjalanan darat cukup panjang; bila membawa anak kecil atau lansia, tambah waktu istirahat.",
            "Verifikasi kondisi lalu lintas dan cuaca sebelum berangkat jauh.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah sehari dari Bukittinggi cukup?",
          a: "Ya untuk istano plus makan. Tambah Pariangan bila waktu longgar; danau kurang disarankan sehari.",
        },
        {
          q: "Berapa total waktu perjalanan?",
          a: "Perkiraan 3–4 jam pulang-pergi plus waktu di lokasi. Verifikasi dengan kondisi jalan.",
        },
        {
          q: "Lebih baik menginap atau pulang hari?",
          a: "Pulang hari cukup umum; menginap di Batusangkar lebih santai bila ingin danau atau Pariangan lama.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Visit Beautiful West Sumatra", url: SOURCES.visitWestSumatra },
      ],
      updated: "Oktober 2026",
      related: ["dari-bukittinggi", "tur-setengah-hari", "tur-sehari-tanah-datar"],
    },
    en: {
      kicker: "ROUTE",
      h1: "Day Trip from Bukittinggi to Istano Basa",
      metaTitle: "Bukittinggi Day Trip: Istano Basa & Tanah Datar in a Day",
      metaDescription:
        "A round-trip day plan from Bukittinggi to Istano Basa Pagaruyung: travel time, rest, and overland limits.",
      lead: "Bukittinggi is a popular base; the istano can be a day destination. This page helps set a rhythm without binding a schedule.",
      image: IMG.rajo,
      imageAlt: "Highland road from Bukittinggi",
      sections: [
        {
          heading: "Travel time & rest",
          paragraphs: [
            "Estimate Bukittinggi–Batusangkar 1.5–2 hours. Depart in the morning so the istano is not rushed and you return before dark.",
            "Rest at Padang Panjang if tired; winding roads need concentration.",
          ],
        },
        {
          heading: "Day rhythm",
          paragraphs: [
            "07:00 depart Bukittinggi. 09:00 arrive Batusangkar, breakfast. 09:30–12:00 istano. 12:30 lunch. 14:00 short Pariangan option or return.",
            "Match to your energy; do not force the lake if time is tight.",
          ],
        },
        {
          heading: "Limits",
          paragraphs: [
            "The overland trip is fairly long; with small children or seniors, add rest time.",
            "Verify traffic and weather before a long departure.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is a day from Bukittinggi enough?",
          a: "Yes for the istano plus a meal. Add Pariangan if time is loose; the lake is less advised in one day.",
        },
        {
          q: "What is total travel time?",
          a: "Estimate 3–4 hours round trip plus on-site time. Verify with road conditions.",
        },
        {
          q: "Stay over or return same day?",
          a: "Same-day return is common; staying in Batusangkar is more relaxed if you want the lake or longer Pariangan.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Visit Beautiful West Sumatra", url: SOURCES.visitWestSumatra },
      ],
      updated: "October 2026",
      related: ["dari-bukittinggi", "tur-setengah-hari", "tur-sehari-tanah-datar"],
    },
  },

  "tur-keluarga": {
    id: {
      kicker: "RUTE",
      h1: "Tur Keluarga di Sekitar Istano Basa",
      metaTitle: "Tur Keluarga Istano Basa: Rute Santai & Istirahat",
      metaDescription:
        "Saran tur keluarga berbasis Istano Basa Pagaruyung: ritme santai, banyak istirahat, dan batasan membawa anak; beda dari tur sehari biasa.",
      lead: "Tur keluarga butuh ritme berbeda dari tur umum: lebih santai, banyak istirahat, dan tidak memaksakan banyak tempat. Halaman ini khusus untuk itu.",
      image: IMG.hero,
      imageAlt: "Keluarga berjalan di kawasan istano",
      sections: [
        {
          heading: "Ritme santai",
          paragraphs: [
            "Pagi ke istano dengan waktu luang (2–3 jam cukup). Hindari terburu-buru yang membuat anak lelah.",
            "Selingi istirahat di area teduh dan makan tepat waktu. Bawa camilan dan air sendiri.",
          ],
        },
        {
          heading: "Batasan dengan anak",
          paragraphs: [
            "Pilih satu tempat tambahan saja (misalnya pasar Batusangkar), bukan danau jauh. Jarak dan jalan meliuk menguras energi anak.",
            "Lihat panduan kunjungan keluarga untuk persiapan stroller, perlengkapan, dan fasilitas.",
          ],
        },
        {
          heading: "Cadangan hujan",
          paragraphs: [
            "Bila hujan, fokus dalam istano dan makan di Batusangkar. Jangan memaksakan jalan kaki jauh dengan anak.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah istano ramah keluarga?",
          a: "Kawasan terbuka bisa dijelajahi, tetapi fasilitas spesifik anak belum terverifikasi. Siapkan kebutuhan dasar.",
        },
        {
          q: "Berapa lama tur keluarga ideal?",
          a: "Setengah hingga sehari santai. Jangan memaksakan banyak tempat agar anak tidak lelah.",
        },
        {
          q: "Bagaimana bila membawa bayi?",
          a: "Bawa kebutuhan sendiri; tanyakan petugas fasilitas umum. Jangan asumsikan ada ruang menyusui.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["kunjungan-keluarga", "tur-sehari-tanah-datar", "tur-setengah-hari"],
    },
    en: {
      kicker: "ROUTE",
      h1: "Family Tour Around Istano Basa",
      metaTitle: "Istano Basa Family Tour: Relaxed Route & Rest",
      metaDescription:
        "Family tour tips based on Istano Basa Pagaruyung: relaxed rhythm, more rest, and child limits; distinct from a normal day tour.",
      lead: "A family tour needs a different rhythm from a general tour: calmer, more rest, and not forcing many places. This page is specifically for that.",
      image: IMG.hero,
      imageAlt: "Family walking in the istano grounds",
      sections: [
        {
          heading: "Relaxed rhythm",
          paragraphs: [
            "Morning at the istano with ample time (2–3 hours is enough). Avoid rushing that tires children.",
            "Intersperse rest in shaded areas and meals on time. Bring your own snacks and water.",
          ],
        },
        {
          heading: "Limits with children",
          paragraphs: [
            "Choose only one extra place (e.g., Batusangkar market), not a far lake. Distance and winding roads drain children's energy.",
            "See the family-visit guide for stroller prep, gear, and facilities.",
          ],
        },
        {
          heading: "Rain backup",
          paragraphs: [
            "If it rains, focus on the indoor istano and a meal in Batusangkar. Do not force long walks with children.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is the istano family-friendly?",
          a: "Open grounds can be explored, but specific child facilities are unverified. Prepare basics.",
        },
        {
          q: "How long is an ideal family tour?",
          a: "Half to a relaxed full day. Do not force many places so children do not get tired.",
        },
        {
          q: "What if bringing a baby?",
          a: "Bring your own needs; ask staff about public facilities. Do not assume a nursing room exists.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["kunjungan-keluarga", "tur-sehari-tanah-datar", "tur-setengah-hari"],
    },
  },

  "tur-kendaraan-pribadi": {
    id: {
      kicker: "RUTE",
      h1: "Tur Kendaraan Pribadi ke Istano Basa",
      metaTitle: "Tur Kendaraan Pribadi Istano Basa: Parkir & Rute",
      metaDescription:
        "Tips berkendara pribadi ke Istano Basa Pagaruyung: rute, parkir, dan persiapan bahan bakar; tanpa klaim jalur tertentu.",
      lead: "Kendaraan pribadi memberi fleksitas menjelajah Tanah Datar. Halaman ini merangkum hal yang perlu dipersiapkan, bukan panduan jalur tunggal.",
      image: IMG.detail,
      imageAlt: "Jalan menuju istano dengan kendaraan",
      sections: [
        {
          heading: "Persiapan",
          paragraphs: [
            "Pastikan bahan bakar cukup; SPBU tersedia di Batusangkar dan jalur utama, tetapi tidak merata di pedesaan.",
            "Gunakan peta bersama nama jalan Jl. Sutan Alam Bagagarsyah, Pagaruyung untuk navigasi ke istano.",
          ],
        },
        {
          heading: "Parkir & titik turun",
          paragraphs: [
            "Ikuti petunjuk area parkir dan petugas di lokasi. Kapasitas/tarif bervariasi; tanyakan di loket/petugas parkir.",
            "Turunkan penumpang di titik yang ditunjuk petugas sebelum memarkir.",
          ],
        },
        {
          heading: "Menjelajah lebih jauh",
          paragraphs: [
            "Dari istano, kendaraan pribadi memudahkan ke Pariangan atau danau. Sesuaikan dengan waktu dan kondisi jalan meliuk.",
            "Bawa air dan istirahat berkala; jangan menyetir lelah di jalan dataran tinggi.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah aman menyetir ke istano sendiri?",
          a: "Ya, jalan utama memadai. Bawa peta dan tanyakan warga bila ragu arah pedesaan.",
        },
        {
          q: "Di mana mengisi bahan bakar?",
          a: "SPBU di Batusangkar dan jalur utama; isi penuh sebelum masuk pedesaan.",
        },
        {
          q: "Boleh bawa mobil ke gerbang istano?",
          a: "Ikuti petunjuk petugas; turunkan penumpang lalu parkir di area yang ditentukan.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["parkir-dan-pintu-masuk", "dari-batusangkar", "tur-sehari-tanah-datar"],
    },
    en: {
      kicker: "ROUTE",
      h1: "Private Vehicle Tour to Istano Basa",
      metaTitle: "Istano Basa Private Vehicle Tour: Parking & Route",
      metaDescription:
        "Tips for driving privately to Istano Basa Pagaruyung: route, parking, and fuel prep; no single-route claim.",
      lead: "A private vehicle gives flexibility to explore Tanah Datar. This page sums up preparation, not a single route guide.",
      image: IMG.detail,
      imageAlt: "Road toward the istano with a vehicle",
      sections: [
        {
          heading: "Preparation",
          paragraphs: [
            "Ensure enough fuel; fuel stations are in Batusangkar and main routes, but not evenly in rural areas.",
            "Use a map together with the street name Jl. Sutan Alam Bagagarsyah, Pagaruyung to navigate to the istano.",
          ],
        },
        {
          heading: "Parking & drop-off",
          paragraphs: [
            "Follow the parking-area signs and on-site staff. Capacity/fees vary; ask at the counter/parking staff.",
            "Drop passengers at the staff-designated point before parking.",
          ],
        },
        {
          heading: "Exploring farther",
          paragraphs: [
            "From the istano, a private vehicle eases trips to Pariangan or the lake. Match to time and winding-road conditions.",
            "Carry water and rest periodically; do not drive tired on highland roads.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is it safe to drive to the istano yourself?",
          a: "Yes, main roads are adequate. Carry a map and ask locals if unsure of rural direction.",
        },
        {
          q: "Where to refuel?",
          a: "Stations in Batusangkar and main routes; fill up before entering rural areas.",
        },
        {
          q: "May I drive to the istano gate?",
          a: "Follow staff directions; drop passengers then park in the designated area.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["parkir-dan-pintu-masuk", "dari-batusangkar", "tur-sehari-tanah-datar"],
    },
  },
};
