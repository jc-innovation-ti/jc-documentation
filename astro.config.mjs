import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  outDir: "./docs",
  site: "https://jc-innovation-ti.github.io/jc-documentation/",
  integrations: [mdx(), sitemap()],
});
