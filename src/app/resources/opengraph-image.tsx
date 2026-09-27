import { createOpenGraphImage, openGraphSize } from "@/lib/open-graph";

export const alt = "Property Ops Studio property-management resources";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return createOpenGraphImage({
    eyebrow: "Resources",
    title: "Practical ideas for better property operations",
    description:
      "White papers covering AppFolio workflows, integrations, reporting, and automation.",
  });
}
