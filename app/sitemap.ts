import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CASE_STUDIES } from "@/lib/case-studies";

const FRAMEWORKS = ["soc-2", "hipaa", "iso-27001", "pci-dss", "gdpr", "cmmc-2"];
const INDUSTRIES = [
  "b2b-saas",
  "enterprise-saas",
  "fintech",
  "gov-tech-defense",
  "health-tech",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency, priority });

  return [
    entry("", 1, "weekly"),
    entry("/about", 0.8),
    entry("/contact", 0.8),
    entry("/case-studies", 0.7),
    ...CASE_STUDIES.map((s) => entry(`/case-studies/${s.slug}`, 0.6)),
    ...FRAMEWORKS.map((f) => entry(`/frameworks/${f}`, 0.9)),
    ...INDUSTRIES.map((i) => entry(`/who-we-serve/${i}`, 0.8)),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms-of-service", 0.2, "yearly"),
    entry("/cookie-policy", 0.2, "yearly"),
  ];
}
