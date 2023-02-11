import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://secondoccurrence.github.io/MITSWebsite/",
  base: "/MITSWebsite",
  integrations: [tailwind({
    config: { applyBaseStyles: false },
  })]
});