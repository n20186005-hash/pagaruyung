import type { TopicContent } from "./topics.types";
export type { TopicGroup } from "./topics.types";
import { topicsA1 } from "./topics.a1";
import { topicsA2 } from "./topics.a2";
import { topicsA3 } from "./topics.a3";
import { topicsA4 } from "./topics.a4";
import { topicsA5 } from "./topics.a5";
import { topicsB1 } from "./topics.b1";
import { topicsB2 } from "./topics.b2";
import { topicsB3 } from "./topics.b3";
import { topicsB4 } from "./topics.b4";
import { topicsC1 } from "./topics.c1";
import { topicsC2 } from "./topics.c2";
import { topicsD1 } from "./topics.d1";
import { topicsD2 } from "./topics.d2";
import { topicsD3 } from "./topics.d3";
import { topicsD4 } from "./topics.d4";

export type TopicLang = "id" | "en";

interface TopicRecord {
  id: TopicContent;
  en: TopicContent;
}

// Group assignment per slug (A = visiting, B = history/culture, C = food/drink, D = nearby/trips).
const GROUP_OF: Record<string, TopicGroup> = {
  // A — kunjungan (visit decisions)
  "tiket-dan-biaya": "kunjungan",
  "jam-buka-dan-waktu-terbaik": "kunjungan",
  "dari-batusangkar": "kunjungan",
  "dari-bukittinggi": "kunjungan",
  "dari-padang": "kunjungan",
  "parkir-dan-pintu-masuk": "kunjungan",
  "durasi-dan-urutan-kunjungan": "kunjungan",
  "kunjungan-keluarga": "kunjungan",
  "lansia-dan-aksesibilitas": "kunjungan",
  "kunjungan-saat-hujan": "kunjungan",
  "foto-dan-etika-berkunjung": "kunjungan",
  // B — sejarah (history & culture)
  "sejarah-kerajaan-pagaruyung": "sejarah",
  "kerajaan-dan-istano-sekarang": "sejarah",
  "kebakaran-dan-rekonstruksi": "sejarah",
  "rumah-gadang-dan-istano": "sejarah",
  "arsitektur-minangkabau": "sejarah",
  "ukiran-dan-simbolisme": "sejarah",
  "ruang-dalam-dan-pameran": "sejarah",
  "tradisi-minangkabau": "sejarah",
  // C — kuliner (food & drink)
  "makan-di-sekitar-istano": "kuliner",
  "kuliner-batusangkar": "kuliner",
  "kopi-dan-minuman": "kuliner",
  "oleh-oleh-dan-pasar": "kuliner",
  // D — wisata (nearby & trips)
  "wisata-sekitar-istano": "wisata",
  "istano-silinduang-bulan": "wisata",
  "situs-prasasti-pagaruyung": "wisata",
  "nagari-tuo-pariangan": "wisata",
  "kota-batusangkar": "wisata",
  "tur-setengah-hari": "wisata",
  "tur-sehari-tanah-datar": "wisata",
  "tur-dari-bukittinggi": "wisata",
  "tur-keluarga": "wisata",
  "tur-kendaraan-pribadi": "wisata",
};

const ALL: Record<string, TopicRecord> = {
  ...topicsA1,
  ...topicsA2,
  ...topicsA3,
  ...topicsA4,
  ...topicsA5,
  ...topicsB1,
  ...topicsB2,
  ...topicsB3,
  ...topicsB4,
  ...topicsC1,
  ...topicsC2,
  ...topicsD1,
  ...topicsD2,
  ...topicsD3,
  ...topicsD4,
};

export interface TopicEntry {
  slug: string;
  group: TopicGroup;
  id: TopicContent;
  en: TopicContent;
}

export const TOPICS: Record<string, TopicEntry> = Object.fromEntries(
  Object.entries(ALL).map(([slug, rec]) => [
    slug,
    { slug, group: GROUP_OF[slug] ?? "wisata", id: rec.id, en: rec.en },
  ])
);

export const TOPIC_SLUGS: string[] = Object.keys(TOPICS);

export function getTopic(slug: string, lang: TopicLang): TopicContent | null {
  const entry = TOPICS[slug];
  if (!entry) return null;
  return lang === "en" ? entry.en : entry.id;
}

export function getEntry(slug: string): TopicEntry | null {
  return TOPICS[slug] ?? null;
}

export function topicHref(slug: string, lang: TopicLang): string {
  return lang === "en" ? `/en/${slug}/` : `/${slug}/`;
}

export const GROUP_LABELS: Record<TopicGroup, { id: string; en: string }> = {
  kunjungan: { id: "Kunjungan", en: "Visiting" },
  sejarah: { id: "Sejarah & Budaya", en: "History & Culture" },
  kuliner: { id: "Kuliner", en: "Food & Drink" },
  wisata: { id: "Wisata Sekitar", en: "Nearby & Trips" },
};

export function groupLabel(group: TopicGroup, lang: TopicLang): string {
  return GROUP_LABELS[group][lang];
}

export interface RelatedLink {
  slug: string;
  href: string;
  title: string;
}

export function relatedTopics(slug: string, lang: TopicLang): RelatedLink[] {
  const entry = TOPICS[slug];
  if (!entry) return [];
  const relatedSlugs = entry[lang].related || [];
  const out: RelatedLink[] = [];
  for (const rel of relatedSlugs) {
    const target = TOPICS[rel];
    if (!target) continue;
    out.push({ slug: rel, href: topicHref(rel, lang), title: target[lang].h1 });
  }
  return out;
}
