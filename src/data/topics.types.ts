export interface TopicSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicSource {
  name: string;
  url: string;
}

export interface TopicContent {
  kicker: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  sources: TopicSource[];
  updated: string;
  related: string[];
}

export type TopicGroup = "kunjungan" | "sejarah" | "kuliner" | "wisata";
