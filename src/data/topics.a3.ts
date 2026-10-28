import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsA3: Record<string, { id: TopicContent; en: TopicContent }> = {
  "dari-padang": {
    id: {
      kicker: "AKSES DARI KOTA",
      h1: "Dari Padang ke Istano Basa Pagaruyung",
      metaTitle: "Cara ke Istano Basa Pagaruyung dari Padang: Bandara & Jalan Darat",
      metaDescription:
        "Rute dari Padang dan Bandara Internasional Minangkabau ke Istano Basa Pagaruyung: opsi sewa, travel, dan bus dengan titik singgah Batusangkar.",
      lead: "Sebagian besar wisatawan tiba lewat Padang, termasuk melalui Bandara Internasional Minangkabau (BIM). Dari Padang, perjalanan berlanjut ke Batusangkar lalu istano.",
      image: IMG.hero,
      imageAlt: "Pintu masuk area Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Melalui bandara (BIM)",
          paragraphs: [
            "Bandara Internasional Minangkabau melayani pintu masuk udara ke Padang dan Sumatera Barat. Dari bandara, lanjutkan dengan kendaraan darat terjadwal, sewaan, atau perjalanan yang diatur sebelumnya menuju Tanah Datar.",
            "Perkiraan jarak BIM–Batusangkar sekitar 80–90 km via Padang Panjang; waktu tempuh bervariasi (perkiraan 2–2,5 jam). Verifikasi kondisi rute saat merencanakan.",
          ],
        },
        {
          heading: "Opsi transportasi",
          paragraphs: [
            "Sewa kendaraan atau taksi dari Padang/BIM memberi fleksibilitas berhenti di Padang Panjang atau Batusangkar. Sepakati tarif dan waktu sebelum perjalanan.",
            "Untuk hemat, cari travel atau bus jurusan Batusangkar; dari Batusangkar lanjutkan tahap akhir ke istano.",
          ],
        },
        {
          heading: "Tips perjalanan panjang",
          paragraphs: [
            "Istirahatlah di Padang Panjang jika lelah; kota ini sering jadi titik transit wisatawan.",
            "Bawa air minum dan kebutuhan dasar; sepanjang jalan tersedia warung, tetapi ketersediaan tidak seragam.",
          ],
        },
      ],
      faqs: [
        {
          q: "Berapa lama dari Padang ke istano?",
          a: "Perkiraan 2–2,5 jam dari Padang/BIM ke Batusangkar, ditambah tahap akhir ke istano. Verifikasi saat perjalanan karena lalu lintas dan cuaca.",
        },
        {
          q: "Bisa naik transport umum langsung?",
          a: "Tidak terverifikasi ada rute langsung ke gerbang istano. Paling umum: travel/bus ke Batusangkar, lalu ojek/taksi tahap akhir.",
        },
        {
          q: "Lebih baik menginap di Padang atau Batusangkar?",
          a: "Jika tiba malam lewat pesawat, menginap di Padang lebih mudah. Jika ingin pagi berangkat ke istano, menginap di Batusangkar menghemat waktu.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["dari-batusangkar", "dari-bukittinggi", "kota-batusangkar"],
    },
    en: {
      kicker: "FROM THE CITY",
      h1: "From Padang to Istano Basa Pagaruyung",
      metaTitle: "Getting to Istano Basa Pagaruyung from Padang: Airport & Overland",
      metaDescription:
        "Route from Padang and Minangkabau International Airport to Istano Basa Pagaruyung: hire, travel, and bus options with a Batusangkar stop.",
      lead: "Most travellers arrive via Padang, including through Minangkabau International Airport (BIM). From Padang, the trip continues to Batusangkar then the istano.",
      image: IMG.hero,
      imageAlt: "Entrance area of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Via the airport (BIM)",
          paragraphs: [
            "Minangkabau International Airport is the air gateway to Padang and West Sumatra. From the airport, continue by scheduled ground transport, a hired vehicle, or a pre-arranged journey toward Tanah Datar.",
            "BIM–Batusangkar is roughly 80–90 km via Padang Panjang; travel time varies (estimate 2–2.5 hours). Verify route conditions when planning.",
          ],
        },
        {
          heading: "Transport options",
          paragraphs: [
            "Hiring a vehicle or taxi from Padang/BIM gives flexibility to stop at Padang Panjang or Batusangkar. Agree on fare and time before the trip.",
            "For lower cost, look for shared travel or buses to Batusangkar; from there continue the final leg to the istano.",
          ],
        },
        {
          heading: "Long-trip tips",
          paragraphs: [
            "Rest at Padang Panjang if tired; it is a common transit point for travellers.",
            "Carry drinking water and basics; roadside warungs exist but availability is uneven.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long from Padang to the istano?",
          a: "Estimate 2–2.5 hours from Padang/BIM to Batusangkar, plus the final leg to the istano. Verify during travel due to traffic and weather.",
        },
        {
          q: "Can I take direct public transport?",
          a: "A direct route to the palace gate is unverified. Most common: shared travel/bus to Batusangkar, then ojek/taxi for the final leg.",
        },
        {
          q: "Stay in Padang or Batusangkar?",
          a: "If arriving late by flight, Padang is easier. If you want an early start to the istano, staying in Batusangkar saves time.",
        },
      ],
      sources: [
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["dari-batusangkar", "dari-bukittinggi", "kota-batusangkar"],
    },
  },

  "parkir-dan-pintu-masuk": {
    id: {
      kicker: "PARKIR & PINTU",
      h1: "Parkir, Titik Turun & Pintu Masuk Istano Basa Pagaruyung",
      metaTitle: "Parkir & Pintu Masuk Istano Basa Pagaruyung: Titik Turun & Tips",
      metaDescription:
        "Informasi parkir, titik turun penumpang, dan pintu masuk Istano Basa Pagaruyung menurut petunjuk di lokasi; tanpa klaim kapasitas atau tarif pasti.",
      lead: "Halaman ini membantu Anda merencanakan kedatangan: di mana menurunkan penumpang, memarkir, dan masuk ke kawasan. Kami merujuk petunjuk petugas di lokasi.",
      image: IMG.detail,
      imageAlt: "Area kawasan Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Titik turun penumpang",
          paragraphs: [
            "Turunkan penumpang dan bagasi di area yang ditunjuk petugas dekat pintu masuk. Hindari berhenti di badan jalan utama yang sempit.",
            "Jika membawa lansia atau anak kecil, tanyakan kepada petugas titik turun paling dekat dengan pintu.",
          ],
        },
        {
          heading: "Parkir kendaraan",
          paragraphs: [
            "Ikuti petunjuk area parkir dan petugas di lokasi. Kami tidak mencantumkan kapasitas atau tarif pasti karena dapat berubah; tanyakan di loket/petugas parkir.",
            "Untuk kendaraan besar (bus wisata), tanyakan area parkir yang disediakan sebelum kedatangan agar tidak memutar jauh.",
          ],
        },
        {
          heading: "Akses pintu masuk",
          paragraphs: [
            "Alamat rujukan adalah Jl. Sutan Alam Bagagarsyah, Pagaruyung, Kec. Tanjung Emas, Tanah Datar. Gunakan peta bersama nama jalan tersebut untuk navigasi.",
            "Petugas di gerbang umumnya dapat menjelaskan arah loket dan area utama; jangan ragu bertanya.",
          ],
        },
      ],
      faqs: [
        {
          q: "Apakah ada parkir luas di istano?",
          a: "Kami tidak mencantumkan kapasitas pasti. Ikuti petunjuk dan petugas parkir di lokasi; tanyakan sebelum kedatangan bila membawa bus.",
        },
        {
          q: "Berapa tarif parkir?",
          a: "Tarif parkir dapat berubah; tanyakan kepada petugas parkir saat kedatangan. Jangan membayar di luar area resmi.",
        },
        {
          q: "Di mana titik turun paling dekat?",
          a: "Tanyakan kepada petugas gerbang titik turun terdekat dengan pintu masuk, terutama bila membawa lansia atau anak.",
        },
      ],
      sources: [
        { name: "Google Maps", url: "https://maps.app.goo.gl/RqqYs1bsjPJaDFB66" },
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
      ],
      updated: "Oktober 2026",
      related: ["dari-batusangkar", "tiket-dan-biaya", "lansia-dan-aksesibilitas"],
    },
    en: {
      kicker: "PARKING & GATE",
      h1: "Parking, Drop-off & Entrance at Istano Basa Pagaruyung",
      metaTitle: "Istano Basa Pagaruyung Parking & Entrance: Drop-off & Tips",
      metaDescription:
        "Parking, passenger drop-off, and entrance information for Istano Basa Pagaruyung per on-site guidance; no claimed capacity or fixed fees.",
      lead: "This page helps you plan arrival: where to drop passengers, park, and enter the grounds. We refer to on-site staff guidance.",
      image: IMG.detail,
      imageAlt: "Grounds area of Istano Basa Pagaruyung",
      sections: [
        {
          heading: "Passenger drop-off",
          paragraphs: [
            "Drop passengers and luggage at the staff-designated area near the entrance. Avoid stopping on the narrow main road.",
            "If travelling with seniors or small children, ask staff for the drop-off point closest to the gate.",
          ],
        },
        {
          heading: "Vehicle parking",
          paragraphs: [
            "Follow the parking-area signs and on-site staff. We do not list a fixed capacity or fee because they can change; ask at the counter/parking staff.",
            "For large vehicles (tour buses), ask about the provided parking area before arrival to avoid long detours.",
          ],
        },
        {
          heading: "Reaching the entrance",
          paragraphs: [
            "The reference address is Jl. Sutan Alam Bagagarsyah, Pagaruyung, Tanjung Emas District, Tanah Datar. Use a map together with that street name for navigation.",
            "Gate staff can generally explain the direction to the counter and main area; do not hesitate to ask.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is there large parking at the istano?",
          a: "We do not list a fixed capacity. Follow signs and parking staff on site; ask before arrival if bringing a bus.",
        },
        {
          q: "How much is parking?",
          a: "Parking fees can change; ask parking staff on arrival. Do not pay outside the official area.",
        },
        {
          q: "Where is the closest drop-off?",
          a: "Ask gate staff for the drop-off point nearest the entrance, especially when travelling with seniors or children.",
        },
      ],
      sources: [
        { name: "Google Maps", url: "https://maps.app.goo.gl/RqqYs1bsjPJaDFB66" },
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
      ],
      updated: "October 2026",
      related: ["dari-batusangkar", "tiket-dan-biaya", "lansia-dan-aksesibilitas"],
    },
  },
};
