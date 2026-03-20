import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  language?: string;
  keywords?: string;
  touristAttraction?: {
    name: string;
    description: string;
    image: string;
    address: string;
  };
}

export const SEO: React.FC<SEOProps> = ({ title, description, image, url, language = 'en', keywords, touristAttraction }) => {
  const siteName = "Travel Hub Sri Lanka";
  const defaultImage = "https://images.unsplash.com/photo-1588096344356-820865c36131?q=80&w=2070&auto=format&fit=crop";
  const finalTitle = `${title} | ${siteName}`;
  const siteUrl = "https://www.travelhubsrilanka.space/";
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": defaultImage,
    "description": "Your ultimate guide to exploring the ancient heritage, pristine beaches, and vibrant culture of Sri Lanka."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const touristAttractionSchema = touristAttraction ? {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": touristAttraction.name,
    "description": touristAttraction.description,
    "image": touristAttraction.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": touristAttraction.address,
      "addressCountry": "Sri Lanka"
    }
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      ...(touristAttraction ? [{
        "@type": "ListItem",
        "position": 2,
        "name": touristAttraction.name,
        "item": currentUrl
      }] : [])
    ]
  };

  return (
    <Helmet>
      <html lang={language.toLowerCase()} />
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      
      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, websiteSchema, breadcrumbSchema, ...(touristAttractionSchema ? [touristAttractionSchema] : [])])}
      </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};
