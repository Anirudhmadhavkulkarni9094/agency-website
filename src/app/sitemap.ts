import type { MetadataRoute } from "next";
import { isIndexableDeployment, siteLastModified, siteUrl } from "@/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexableDeployment) {
    return [];
  }

  return [
    {
      url: siteUrl.origin,
      lastModified: siteLastModified,
      priority: 1,
    },
    ...projects
      .filter((project) => project.status === "published")
      .map((project) => ({
        url: new URL(`/projects/${project.slug}`, siteUrl).href,
        lastModified: siteLastModified,
        priority: 0.7,
      })),
  ];
}
