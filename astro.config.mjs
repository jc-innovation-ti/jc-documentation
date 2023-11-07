import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jc-innovation-ti.github.io",
  base: "/my-repo",
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
});
