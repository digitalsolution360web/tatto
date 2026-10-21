import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.omtattoos.in";

  const routes = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/services`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/tattoo-course`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/gallery`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/permanent-tattoo`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/customized-tattoo`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/tattoo-removal`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/body-piercing`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/tattoo-products`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}