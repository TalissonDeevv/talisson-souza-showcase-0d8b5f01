import { Helmet } from 'react-helmet-async';

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
}

/**
 * SEO Component - Standardized Open Graph & Meta Tags
 * 
 * IMPORTANT: This component ensures consistent SEO across the entire site:
 * - og:image is ALWAYS the same (general og-image from index.html) for all pages
 * - og:title and og:description are DYNAMIC per page
 * - og:url reflects the canonical URL of the current page
 * - All URLs use the canonical www version of the domain
 */

// Canonical domain - ALWAYS with www to avoid duplicate content issues
const BASE_URL = 'https://www.talissonsouza.com.br';

// FIXED og:image for ALL pages - same as index.html
// This ensures consistent branding across all social shares
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
}: SEOProps) => {
  // Build full title - ensure "Talisson Souza" is included for brand consistency
  const fullTitle = title.includes('Talisson') ? title : `${title} | Talisson Souza`;
  
  // Build canonical URL - normalize path and always use www domain
  const canonicalPath = canonical?.startsWith('/') ? canonical : `/${canonical || ''}`;
  const cleanPath = canonicalPath === '/' ? '' : canonicalPath;
  const canonicalUrl = `${BASE_URL}${cleanPath}`;
  
  // Default keywords for all pages
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
      {/* ===== Basic Meta Tags ===== */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL - normalized to www version */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* ===== Open Graph ===== */}
      {/* og:title - DYNAMIC per page */}
      <meta property="og:title" content={fullTitle} />
      
      {/* og:description - DYNAMIC per page */}
      <meta property="og:description" content={description} />
      
      {/* og:type */}
      <meta property="og:type" content={type} />
      
      {/* og:url - DYNAMIC per page (canonical URL) */}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* og:image - FIXED for ALL pages (same as home) */}
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* og:site_name */}
      <meta property="og:site_name" content={SITE_NAME} />
      
      {/* og:locale */}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* ===== Article-specific (for blog posts) ===== */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* ===== Twitter Card ===== */}
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
