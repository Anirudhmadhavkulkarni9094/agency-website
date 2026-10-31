import type { MetadataRoute } from "next";
import { isIndexableDeployment, siteLastModified, siteUrl } from "@/site";

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
  ];
}
