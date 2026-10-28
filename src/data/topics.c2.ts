import type { TopicContent } from "./topics.types";
import { SOURCES } from "./site";

const IMG = {
  hero: "/images/istano-basa-pagaruyung-hero.jpg",
  detail: "/images/istana-pagaruyung-detail.jpg",
  rajo: "/images/istano-rajo-basa.jpg",
  rg: "/images/rumah-gadang-detail.jpg",
} as const;

export const topicsC2: Record<string, { id: TopicContent; en: TopicContent }> = {
  "kopi-dan-minuman": {
    id: {
      kicker: "KULINER",
      h1: "Kopi & Minuman di Sekitar Batusangkar",
      metaTitle: "Kopi & Minuman Batusangkar: Tips Ngopi Setelah Istano",
      metaDescription:
        "Pilihan kopi dan minuman di Batusangkar setelah mengunjungi Istano Basa Pagaruyung: jenis kopi Sumatera Barat dan tips; tanpa merekomendasikan kedai tertentu.",
      lead: "Sumatera Barat memiliki tradisi kopi. Halaman ini mengenalkan jenis minuman yang umum ditemui di Batusangkar, bukan daftar kedai评分.",
      image: IMG.rajo,
      imageAlt: "Cangkir kopi khas setempat",
      sections: [
        {
          heading: "Kopi di Sumatera Barat",
          paragraphs: [
            "Kopi arabika dan robusta dari dataran tinggi Sumatera Barat dikenal luas. Di Batusangkar, warung kopi menyajikan kopi seduh dengan berbagai penyajian.",
            "Kami tidak menyebut kedai tertentu; ketersediaan dan kualitas bervariasi. Tanyakan penduduk setempat yang ramah.",
          ],
        },
        {
          heading: "Minuman lain",
          paragraphs: [
            "Selain kopi, tersedia teh, minuman ringan, dan jus buah segar di warung. Air minum kemasan mudah didapat di toko kelontong.",
            "Bawa botol isi ulang bila memungkinkan; cuaca panas membuat hidrasi penting.",
          ],
        },
        {
          heading: "Menyusun ke rute",
          paragraphs: [
            "Istirahat kopi cocok setelah mengelilingi istano atau sebelum makan siang di Batusangkar. Sesuaikan dengan tenaga perjalanan.",
          ],
        },
      ],
      faqs: [
        {
          q: "Kedai kopi apa yang terdekat dari istano?",
          a: "Warung kopi umumnya ada di Batusangkar, bukan di dalam kawasan istano. Tanyakan arah kepada warga.",
        },
        {
          q: "Apa kopi khas daerah ini?",
          a: "Kopi dataran tinggi Sumatera Barat umum; jenis tepat bervariasi per kedai. Kami tidak menunjuk satu merek.",
        },
        {
          q: "Apakah aman minum air keran?",
          a: "Lebih baik minum air kemasan atau minuman terseduh. Jangan mengandalkan air keran mentah.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["kuliner-batusangkar", "makan-di-sekitar-istano", "kota-batusangkar"],
    },
    en: {
      kicker: "FOOD",
      h1: "Coffee & Drinks Around Batusangkar",
      metaTitle: "Batusangkar Coffee & Drinks: Tips After the Istano",
      metaDescription:
        "Coffee and drink options around Batusangkar after visiting Istano Basa Pagaruyung: West Sumatra coffee types and tips; no specific cafes recommended.",
      lead: "West Sumatra has a coffee tradition. This page introduces common drinks in Batusangkar, not a scored cafe list.",
      image: IMG.rajo,
      imageAlt: "Local-style cup of coffee",
      sections: [
        {
          heading: "Coffee in West Sumatra",
          paragraphs: [
            "Arabica and robusta coffees from West Sumatra's highlands are widely known. In Batusangkar, coffee warungs serve brewed coffee in various styles.",
            "We do not name specific cafes; availability and quality vary. Ask friendly locals.",
          ],
        },
        {
          heading: "Other drinks",
          paragraphs: [
            "Besides coffee, warungs offer tea, soft drinks, and fresh fruit juice. Bottled water is easy to find at convenience shops.",
            "Bring a refill bottle if possible; hot weather makes hydration important.",
          ],
        },
        {
          heading: "Fitting into the route",
          paragraphs: [
            "A coffee break fits after walking the istano or before lunch in Batusangkar. Match it to your travel energy.",
          ],
        },
      ],
      faqs: [
        {
          q: "What cafe is closest to the istano?",
          a: "Coffee warungs are generally in Batusangkar, not inside the istano grounds. Ask locals for direction.",
        },
        {
          q: "What is the local coffee?",
          a: "Highland West Sumatra coffee is common; exact type varies per cafe. We do not point to one brand.",
        },
        {
          q: "Is tap water safe to drink?",
          a: "Prefer bottled or brewed drinks. Do not rely on untreated tap water.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["kuliner-batusangkar", "makan-di-sekitar-istano", "kota-batusangkar"],
    },
  },

  "oleh-oleh-dan-pasar": {
    id: {
      kicker: "BELANJA",
      h1: "Oleh-oleh & Pasar di Batusangkar",
      metaTitle: "Oleh-oleh & Pasar Batusangkar: Belanja Setelah Istano",
      metaDescription:
        "Panduan oleh-oleh dan pasar di Batusangkar: kain songket, makanan kering, dan lokasi umum; tanpa merekomendasikan toko tertentu.",
      lead: "Oleh-oleh khas Minangkabau bisa dibeli di Batusangkar. Halaman ini mengenalkan jenis barang dan lokasi umum, bukan merek tertentu.",
      image: IMG.detail,
      imageAlt: "Kain songket Minangkabau",
      sections: [
        {
          heading: "Jenis oleh-oleh",
          paragraphs: [
            "Songket Minangkabau (kain tenun emas/perak) adalah oleh-oleh budaya yang dikenal. Makanan kering seperti keripik dan dodol juga umum.",
            "Kami tidak menyebut penenun atau toko tertentu; kualitas dan harga bervariasi. Beli di tempat yang jelas harganya.",
          ],
        },
        {
          heading: "Lokasi belanja",
          paragraphs: [
            "Pasar tradisional dan toko oleh-oleh di Batusangkar melayani pengunjung. Di sekitar kawasan istano mungkin ada kios sederhana; tanyakan petugas.",
            "Pasar tradisional biasanya ramai pagi hingga siang; datang lebih awal untuk pilihan lebih banyak.",
          ],
        },
        {
          heading: "Tips belanja", paragraphs: [
            "Tanyakan harga dan negosiasi sopan di pasar. Periksa kualitas kain sebelum membeli.",
            "Simpan bukti dan kemasan; bila ragu keaslian, beli di toko berizin jelas.",
          ] },
      ],
      faqs: [
        {
          q: "Di mana beli songket di Batusangkar?",
          a: "Toko oleh-oleh dan pasar di Batusangkar menawarkannya. Kami tidak menunjuk satu penjual; bandingkan secara langsung.",
        },
        {
          q: "Apa oleh-oleh makanan yang awet?",
          a: "Makanan kering seperti keripik dan dodol umum dan tahan lama. Pilih kemasan tertutup.",
        },
        {
          q: "Apakah bisa tawar harga?",
          a: "Di pasar tradisional, tawar sopan lazim. Di toko dengan harga tetap, biasanya tidak.",
        },
      ],
      sources: [
        { name: "Pemkab Tanah Datar", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravel },
      ],
      updated: "Oktober 2026",
      related: ["kuliner-batusangkar", "kopi-dan-minuman", "kota-batusangkar"],
    },
    en: {
      kicker: "SHOPPING",
      h1: "Souvenirs & Markets in Batusangkar",
      metaTitle: "Batusangkar Souvenirs & Markets: Shopping After the Istano",
      metaDescription:
        "Guide to souvenirs and markets in Batusangkar: songket cloth, dried food, and general locations; no specific shops recommended.",
      lead: "Minangkabau souvenirs can be bought in Batusangkar. This page introduces item types and general locations, not specific brands.",
      image: IMG.detail,
      imageAlt: "Minangkabau songket cloth",
      sections: [
        {
          heading: "Souvenir types",
          paragraphs: [
            "Minangkabau songket (gold/silver thread woven cloth) is a known cultural souvenir. Dried foods like chips and dodol are also common.",
            "We do not name specific weavers or shops; quality and price vary. Buy where prices are clear.",
          ],
        },
        {
          heading: "Shopping locations",
          paragraphs: [
            "Traditional markets and souvenir shops in Batusangkar serve visitors. Simple kiosks may exist around the istano grounds; ask staff.",
            "Traditional markets are usually busiest morning to midday; come earlier for more choice.",
          ],
        },
        {
          heading: "Shopping tips",
          paragraphs: [
            "Ask prices and negotiate politely at markets. Check cloth quality before buying.",
            "Keep receipts and packaging; if unsure of authenticity, buy at clearly licensed shops.",
          ],
        },
      ],
      faqs: [
        {
          q: "Where to buy songket in Batusangkar?",
          a: "Souvenir shops and markets in Batusangkar offer it. We do not point to one seller; compare directly.",
        },
        {
          q: "What food souvenirs keep well?",
          a: "Dried foods like chips and dodol are common and durable. Choose sealed packaging.",
        },
        {
          q: "Can I bargain?",
          a: "At traditional markets, polite bargaining is normal. At fixed-price shops, usually not.",
        },
      ],
      sources: [
        { name: "Tanah Datar Regency", url: SOURCES.tanahDatar },
        { name: "Indonesia Travel", url: SOURCES.indonesiaTravelEn },
      ],
      updated: "October 2026",
      related: ["kuliner-batusangkar", "kopi-dan-minuman", "kota-batusangkar"],
    },
  },
};
