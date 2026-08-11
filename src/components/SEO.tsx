import { Helmet } from 'react-helmet-async';
import { useTheme } from '@/contexts/ThemeContext';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: object | object[];
}

const BASE_URL = 'https://www.talissonsouza.com.br';
const SITE_NAME = 'Talisson Souza';
const SITE_LOGO_URL = `${BASE_URL}/apple-touch-icon.png`;

const routeImageKey = (path: string) => {
  const normalizedPath = (path || '/').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  if (/^\/(?:en-us\/articles|artigos)\/tag\//.test(normalizedPath)) {
    return normalizedPath.startsWith('/en-us') ? 'en-us-articles' : 'artigos';
  }

  if (normalizedPath === '/') return 'home';

  return normalizedPath
    .replace(/^\/+|\/+$/g, '')
    .replace(/\//g, '--')
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
};

const getSocialImageUrl = (canonicalPath: string, image?: string) => {
  if (image?.startsWith('http')) return image;
  if (image?.startsWith('/')) return `${BASE_URL}${image}`;
  return `${BASE_URL}/og/${routeImageKey(canonicalPath)}.png`;
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Talisson Souza',
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const { language } = useTheme();
  
  const fullTitle = title.includes('Talisson') ? title : `${title} | Talisson Souza`;
  
  const isAbsoluteCanonical = canonical?.startsWith('http://') || canonical?.startsWith('https://');
  const canonicalPath = isAbsoluteCanonical
    ? new URL(canonical).pathname || '/'
    : canonical?.startsWith('/')
      ? canonical
      : `/${canonical || ''}`;
  const cleanPath = canonicalPath === '/' ? '' : canonicalPath;
  const canonicalUrl = isAbsoluteCanonical ? canonical : `${BASE_URL}${cleanPath}`;
  const socialImageUrl = getSocialImageUrl(canonicalPath, image);
  
  const locale = language === 'pt' ? 'pt_BR' : 'en_US';
  const alternateLocale = language === 'pt' ? 'en_US' : 'pt_BR';
  
  return (
    <Helmet>
      <html lang={language === 'pt' ? 'pt-BR' : 'en-US'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:secure_url" content={socialImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@talissondev" />
      <meta name="twitter:creator" content="@talissondev" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {type === 'article' && (
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          author: { '@type': 'Person', name: author },
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          mainEntityOfPage: canonicalUrl,
          image: socialImageUrl,
          publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: SITE_LOGO_URL } },
        })}</script>
      )}

      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
