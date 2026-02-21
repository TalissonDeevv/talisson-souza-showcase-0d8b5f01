export interface MarketTrailArticle {
  id: string;
  slugPt: string;
  slugEn: string;
  title: { pt: string; en: string };
  excerpt: { pt: string; en: string };
  date: { pt: string; en: string };
  publishedDate: string;
  readTime: string;
  tags: { pt: string[]; en: string[] };
  keywords: { pt: string[]; en: string[] };
  sections: {
    title: { pt: string; en: string };
    content: { pt: string; en: string };
  }[];
}
