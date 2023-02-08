import { defineConfig } from "astro/config"

import image from "@astrojs/image"
import mdx from "@astrojs/mdx"
// import compressor from "astro-compressor";
// import compress from "astro-compress";
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  integrations: [
    image(),
    mdx(),
    tailwind(),
    // compress(),
    // compressor()
  ],
})
