// SEO 站点名（景点名称 + 城市 + 旅游指南）统一常量。
// 首页标题以 SITE_NAME 开头再接关键词；子页标题追加 " | SITE_NAME"。
export const SITE_NAME = {
  id: "Istano Basa Pagaruyung Tanah Datar — Panduan Wisata",
  en: "Istano Basa Pagaruyung Tanah Datar — Travel Guide",
} as const;

export type SiteLang = keyof typeof SITE_NAME;

export function withSiteName(lang: SiteLang, pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME[lang]}`;
}

// 景点事实唯一源。所有页面引用此处，避免散落硬编码。
// 评分与评论数会变化；以下数值来自用户提供的 Google Maps 快照（2026-10），
// 展示于页面但刻意不进入 JSON-LD 的 aggregateRating，避免冒充官方实时数据。
export const ENTITY = {
  name: "Istano Basa Pagaruyung",
  alternateNames: {
    id: ["Istana Pagaruyung", "Istano Pagaruyung", "Kerajaan Pagaruyung"],
    en: ["Pagaruyung Palace", "Istana Pagaruyung", "Pagaruyung Kingdom"],
  },
  ratingValue: 4.7,
  ratingCount: 17768,
  ratingAsOf: "Oktober 2026",
  mapsUrl: "https://maps.app.goo.gl/RqqYs1bsjPJaDFB66",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=-0.4712964,100.6214049",
  lat: -0.4712964,
  lng: 100.6214049,
  plusCode: "GJHC+FHJ",
  address: {
    street: "Jl. Sutan Alam Bagagarsyah, Pagaruyung, Kec. Tanjung Emas",
    locality: "Kabupaten Tanah Datar",
    region: "Sumatera Barat",
    postalCode: "27281",
    country: "ID",
  },
  addressEn: {
    street: "Jl. Sutan Alam Bagagarsyah, Pagaruyung, Tanjung Emas District",
    locality: "Tanah Datar Regency",
    region: "West Sumatra",
    postalCode: "27281",
    country: "ID",
  },
  phone: "+62 821 7635 177",
  phoneHref: "tel:+628217635177",
  // Google Maps 列示的到访时间，带核实日期；非管理方确认，节假日/活动/维护可能不同。
  hoursListing: "08.00–18.00 setiap hari (catatan Maps 19 Okt 2026)",
  hoursListingEn: "08:00–18:00 daily (Maps listing checked 19 Oct 2026)",
  district: "Nagari Pagaruyung, Kecamatan Tanjung Emas, Kabupaten Tanah Datar",
  districtEn: "Nagari Pagaruyung, Tanjung Emas District, Tanah Datar Regency",
  nearestTown: "Batusangkar",
  nearestTownEn: "Batusangkar",
  airport: "Bandara Internasional Minangkabau (BIM)",
  airportEn: "Minangkabau International Airport (BIM)",
} as const;

// 站点身份与第三方声明（首页、页脚、法律页共用）。
export const SITE_IDENTITY = {
  id: {
    disclaimer:
      "Situs ini adalah proyek panduan pengunjung independen dan nirlaba. Situs ini tidak berafiliasi dengan Istano Basa Pagaruyung, instansi pemerintah, atau operator komersial mana pun.",
    summarizedFrom:
      "Informasi diringkas dari Indonesia Travel, Kantor Wakil Presiden, catatan Google Maps bertanggal dan Wikimedia Commons.",
  },
  en: {
    disclaimer:
      "This is an independent, non-profit visitor-information guide. It is not affiliated with Istano Basa Pagaruyung, any government body, or any commercial operator.",
    summarizedFrom:
      "Information is summarised from Indonesia Travel, the Vice-President’s Office, dated Google Maps listings and Wikimedia Commons.",
  },
} as const;

// 权威来源（供链接与引用）。
export const SOURCES = {
  indonesiaTravel:
    "https://www.indonesia.travel/id/id/destination/sumatra/west-sumatra/istano-basa-pagaruyung2",
  indonesiaTravelEn:
    "https://www.indonesia.travel/gb/en/destination/sumatra/west-sumatra/istano-basa-pagaruyung-minangkabau-cultural-heritage",
  vicePresident:
    "https://wapresri.go.id/kearifan-masa-lalu-modal-kejayaan-masa-depan/",
  tanahDatar:
    "https://qrcodepariwisata.tanahdatar.go.id/view/v_datawis/W-1",
  visitWestSumatra:
    "https://visitbeautifulwestsumatra.id/istano-basa-pagaruyung/",
  googlePolicies:
    "https://developers.google.com/search/docs/essentials/spam-policies",
} as const;
