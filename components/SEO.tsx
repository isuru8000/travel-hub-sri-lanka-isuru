import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  touristAttraction?: {
    name: string;
    description: string;
    image: string;
    address: string;
  };
}

export const SEO: React.FC<SEOProps> = ({ title, description, image, url, touristAttraction }) => {
  const siteName = "Travel Hub Sri Lanka";
  const defaultImage = "https://images.unsplash.com/photo-1588096344356-820865c36131?q=80&w=2070&auto=format&fit=crop";
  const finalTitle = `${title} | ${siteName}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://www.travelhubsrilanka.space/",
    "logo": defaultImage,
    "description": description
  };

  const touristAttractionSchema = touristAttraction ? {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": touristAttraction.name,
    "description": touristAttraction.description,
    "image": touristAttraction.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": touristAttraction.address
    }
  } : null;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      
      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, ...(touristAttractionSchema ? [touristAttractionSchema] : [])])}
      </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || window.location.href} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};
