import Script from "next/script";

const JSONLD = () => {
  return (
    <>
      <Script
        id="json-ld"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MVP Manila Security Agency Inc.",
            url: "https://mvpmanila.com/",
            logo: "https://mvpmanila.com/wp-content/uploads/2023/08/MVP-MANILA-LOGO-HORIZPONTAL.png",
            image: [
              "https://mvpmanila.com/wp-content/uploads/2025/10/MVPMANILA-SECURITYAGENCY.png",
              "https://mvpmanila.com/wp-content/uploads/2025/10/MVPMANILA-MANPOWERSERVICES.png",
            ],
            description:
              "Securing people, facilities, and assets with reliability, integrity, and service excellence since 2013.",
            telephone: "+63283537353",
            email: "mvpmanila2013@yahoo.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1269 Estrada Street, Brgy. 749 Zone 81",
              addressLocality: "Sta. Ana, Manila",
              addressRegion: "Metro Manila",
              postalCode: "1009",
              addressCountry: "PH",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 14.5833,
              longitude: 121.0167,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "09:00",
                closes: "13:00",
              },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+63283537353",
                contactType: "Customer Service",
                areaServed: "PH",
                availableLanguage: ["English", "Filipino"],
              },
              {
                "@type": "ContactPoint",
                telephone: "+639258771953",
                contactType: "Emergency",
                areaServed: "PH",
                availableLanguage: ["English", "Filipino"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/mvpmanila2013",
              "https://www.linkedin.com/company/mvp-manila-security-agency-inc",
            ],
            priceRange: "$$$",
            servesCuisine: "Security Services",
          }),
        }}
      />
    </>
  );
};

export default JSONLD;