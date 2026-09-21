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
