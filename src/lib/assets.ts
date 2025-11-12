import { withBasePath } from "@/lib/paths";

export const LOGOS = {
  cakes: withBasePath("/images/logos/harlem-cakes.png"),
  scoops: withBasePath("/images/logos/harlem-scoops.png"),
} as const;
