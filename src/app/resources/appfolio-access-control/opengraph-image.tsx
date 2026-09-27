import { createOpenGraphImage, openGraphSize } from "@/lib/open-graph";

export const alt = "AppFolio Max and building access control white paper";
export const size = openGraphSize;
export const contentType = "image/png";

export default function Image() {
  return createOpenGraphImage({
    eyebrow: "White paper and case study",
    title: "Extending AppFolio Max Into Building Access Control",
    description:
      "Connecting resident lifecycle information with existing access-control infrastructure.",
  });
}
