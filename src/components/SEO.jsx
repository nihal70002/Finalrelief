import { useEffect } from "react";

const siteUrl = "https://drhyderkunnummal.in";

const defaultSchema = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  name: "Dr Hyder Kunnummal",
  url: siteUrl,
  image: `${siteUrl}/doccc.jpg`,
  medicalSpecialty: "Orthopedic Surgery",
  jobTitle: "Orthopedic Doctor",
  description:
    "Orthopedic doctor in Manjeri, Kerala specializing in knee replacement, joint pain, arthritis care, fracture treatment, and advanced orthopedic procedures.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manjeri",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Manjeri",
    },
    {
      "@type": "State",
      name: "Kerala",
    },
  ],
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
  schema = defaultSchema,
}) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`;

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });

    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Dr Hyder Kunnummal",
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${siteUrl}/doccc.jpg`,
    });

    const existingSchema = document.head.querySelector(
      'script[data-seo-schema="doctor"]'
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.dataset.seoSchema = "doctor";
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }, [title, description, path, type, schema]);

  return null;
}
