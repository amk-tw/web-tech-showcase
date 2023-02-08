import { defineConfig } from "astro/config"

import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  integrations: [image(), mdx(), tailwind()],
  site: "https://amk-tw.github.io",
  base: "/web-tech-showcase",
})
