import { createOpenGraphImage, openGraphSize } from "@/lib/open-graph";

export const alt = "Property Ops Studio - AppFolio operations consulting";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return createOpenGraphImage({
    eyebrow: "AppFolio operations consulting",
    title: "Connect systems. Automate workflows. Improve property operations.",
    description:
      "Practical integrations, reporting, and operational improvements for property-management companies using AppFolio.",
  });
}
