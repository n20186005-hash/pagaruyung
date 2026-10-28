import type { TopicContent } from "../data/topics.types";
import type { TopicLang } from "../data/topics.index";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

function resolve(url: string, site: URL | undefined): string {
  return site ? new URL(url, site).href : url;
}

export function topicBreadcrumb(
  slug: string,
  topic: TopicContent,
  lang: TopicLang,
  site: URL | undefined
): BreadcrumbItem[] {
  const homePath = lang === "en" ? "/en/" : "/";
  const selfPath = lang === "en" ? `/en/${slug}/` : `/${slug}/`;
  return [
    { name: lang === "en" ? "Home" : "Beranda", url: resolve(homePath, site) },
    { name: topic.h1, url: resolve(selfPath, site) },
  ];
}

export function topicJsonLd(
  topic: TopicContent,
  slug: string,
  lang: TopicLang,
  site: URL | undefined
) {
  const homePath = lang === "en" ? "/en/" : "/";
  const selfPath = lang === "en" ? `/en/${slug}/` : `/${slug}/`;
  const pageUrl = resolve(selfPath, site);
  const siteUrl = resolve(homePath, site);
  const siteName =
    lang === "en" ? "Istano Basa Pagaruyung Guide" : "Panduan Istano Basa Pagaruyung";

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: topicBreadcrumb(slug, topic, lang, site).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const webPage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: topic.h1,
    description: topic.metaDescription,
    inLanguage: lang === "en" ? "en" : "id",
    isPartOf: { "@type": "WebSite", name: siteName, url: siteUrl },
    breadcrumb,
  };

  const graph: unknown[] = [webPage];

  if (topic.faqs && topic.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: topic.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
