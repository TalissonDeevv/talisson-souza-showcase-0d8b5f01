import { Helmet } from 'react-helmet-async';

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
}

// Canonical domain with www
const BASE_URL = 'https://www.talissonsouza.com.br';
// Use the general og-image from index.html
const DEFAULT_IMAGE = '/og-image.png';
const SITE_NAME = 'Talisson Souza';

const SEO = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Talisson Souza',
  keywords = [],
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes('Talisson') ? title : `${title} | Talisson Souza`;
  const canonicalPath = canonical?.startsWith('/') ? canonical : `/${canonical || ''}`;
  const url = `${BASE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;
  
  // Always use absolute URL for og:image with the canonical domain
  const ogImage = `${BASE_URL}${DEFAULT_IMAGE}`;
  
  const defaultKeywords = [
    'Talisson Souza',
    'desenvolvedor full stack',
    'desenvolvimento web',
    'sistemas sob medida',
    'React',
    'Node.js',
    'TypeScript',
    'CEO',
    'Cheetah Solutions Network',
    'soluções digitais',
    'tecnologia',
    'negócios digitais'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@talinhozx" />
      <meta name="twitter:creator" content="@talinhozx" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Helmet>
  );
};

export default SEO;
