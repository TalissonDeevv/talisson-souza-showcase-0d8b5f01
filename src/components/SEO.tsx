import { Helmet } from 'react-helmet-async';
import { useTheme } from '@/contexts/ThemeContext';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
  jsonLd?: object | object[];
}

const BASE_URL = 'https://www.talissonsouza.com.br';
const OG_IMAGE_URL = 'https://www.talissonsouza.com.br/og-image.png';
const SITE_NAME = 'Talisson Souza';

const SEO = ({
  title,
  description,
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Talisson Souza',
  keywords = [],
  noindex = false,
  jsonLd,
}: SEOProps) => {
  const { language } = useTheme();
  
  const fullTitle = title.includes('Talisson') ? title : `${title} | Talisson Souza`;
  
  const canonicalPath = canonical?.startsWith('/') ? canonical : `/${canonical || ''}`;
  const cleanPath = canonicalPath === '/' ? '' : canonicalPath;
  const canonicalUrl = `${BASE_URL}${cleanPath}`;
  
  const locale = language === 'pt' ? 'pt_BR' : 'en_US';
  const alternateLocale = language === 'pt' ? 'en_US' : 'pt_BR';
  
  const defaultKeywords = language === 'pt'
    ? ['Talisson Souza', 'desenvolvedor full stack', 'desenvolvimento web', 'React', 'Node.js', 'TypeScript', 'CEO', 'Cheetah Solutions Network']
    : ['Talisson Souza', 'full stack developer', 'web development', 'React', 'Node.js', 'TypeScript', 'CEO', 'Cheetah Solutions Network'];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <Helmet>
      <html lang={language === 'pt' ? 'pt-BR' : 'en-US'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
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
      <meta name="twitter:site" content="@talinhozx" />
      <meta name="twitter:creator" content="@talinhozx" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Helmet>
  );
};

export default SEO;
