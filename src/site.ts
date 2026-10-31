const configuredSiteAddress = (
  process.env.SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "localhost:3000"
).trim();

const normalizedSiteAddress = /^https?:\/\//i.test(configuredSiteAddress)
  ? configuredSiteAddress
  : `${configuredSiteAddress === "localhost:3000" ? "http" : "https"}://${configuredSiteAddress}`;

export const siteUrl = new URL(normalizedSiteAddress);

if (siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash) {
  throw new Error("SITE_URL must be a site origin without a path, query, or fragment.");
}

export const siteLastModified = "2026-11-01";
export const isIndexableDeployment =
  !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
