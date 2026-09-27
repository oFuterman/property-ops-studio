import { createOpenGraphImage, openGraphSize } from "@/lib/open-graph";

export const alt = "Operational exception automation white paper";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return createOpenGraphImage({
    eyebrow: "White paper and case study",
    title: "Beyond the Work Order",
    description:
      "Automating operational exceptions in property management with AppFolio and Microsoft 365.",
  });
}
