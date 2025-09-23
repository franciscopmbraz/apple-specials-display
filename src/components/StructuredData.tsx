const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Worten",
    "url": "https://worten.com",
    "description": "Premium iPhone 17 accessories, cases, chargers, and electronics",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://worten.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "USB-C 20W Power Adapter",
        "image": "/src/assets/usb-adapter.jpg",
        "offers": {
          "@type": "Offer",
          "price": "21.99",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Product", 
        "position": 2,
        "name": "iPhone 17 Pro Max 512GB",
        "image": "/src/assets/iphone-17.jpg",
        "offers": {
          "@type": "Offer",
          "price": "1749.00",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
    </>
  );
};

export default StructuredData;