import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title = "NodeFlow Colombia | Desarrollo de Software, n8n, WhatsApp Bots & IA",
  description = "Soluciones integrales de desarrollo de software a medida, automatizaciones avanzadas con n8n, chatbots de WhatsApp con IA y soporte DevOps en Medellín, Colombia.",
  canonical = "https://nodeflow.andresrivera.dev",
  ogType = "website",
  ogImage = "https://nodeflow.andresrivera.dev/og-image.png"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NodeFlow Colombia",
    "image": ogImage,
    "@id": canonical,
    "url": canonical,
    "telephone": "+573000000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "El Poblado / Ruta N",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
      "postalCode": "050021",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.2442,
      "longitude": -75.5812
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://github.com/arivera838/nodeFlowColombia",
      "https://linkedin.com/company/nodeflow-colombia"
    ],
    "description": description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo de Software y Automatización",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Mobile (iOS / Android)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web & SaaS"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización Avanzada con n8n & APIs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chats Inteligentes - Bots de WhatsApp con IA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soporte Técnico Especializado & DevOps"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="NodeFlow Colombia" />
      <meta name="keywords" content="desarrollo de software colombia, automatizacion n8n medellin, bots de whatsapp con ia, software medellin, saas colombia, devops colombia, bases de datos" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NodeFlow Colombia" />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
