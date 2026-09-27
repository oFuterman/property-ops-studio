import { createOpenGraphImage, openGraphSize } from "@/lib/open-graph";

export const alt = "AppFolio Max and custom owner reporting white paper";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return createOpenGraphImage({
    eyebrow: "White paper and case study",
    title: "Extending AppFolio Max Into Custom Owner Reporting",
    description:
      "Combining earnings, distributions, adjustments, and capital spending in one repeatable report.",
  });
}
