import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const routes = [
  "",
  "/services",
  "/resources",
  "/resources/appfolio-access-control",
  "/resources/appfolio-owner-reporting",
  "/resources/operational-exceptions",
  "/schedule",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route === "" || route === "/resources" ? "monthly" : "yearly";

    return {
      url: `${SITE.url}${route}`,
      lastModified: new Date("2026-09-26"),
      changeFrequency,
      priority: route === "" ? 1 : route === "/resources" ? 0.9 : 0.8,
    };
  });
}
