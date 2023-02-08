import { z, defineCollection } from "astro:content"
// 2. Define a schema for each collection you'd like to validate.
const adrCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    status: z.enum([
      "proposed",
      "accepted",
      "rejected",
      "deprecated",
      "superseded",
    ]),
    publishedDate: z.date(),
    navigation: z
      .object({
        order: z.number(),
        title: z.string().optional(),
      })
      .optional(),
  }),
})
const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    navigation: z
      .object({
        order: z.number(),
        title: z.string().optional(),
      })
      .optional(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  adr: adrCollection,
  docs: docsCollection,
}
