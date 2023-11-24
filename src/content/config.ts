import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    // ? weight determines the order of projects presented on /projects
    // ? -> the bigger the weight the higher on the list item will be
    weight: z.number().int(),
  }),
});

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      publicationDate: z.string(),
      summary: z.string().min(1),
      cover: image().refine((img) => img.width >= 1000, {
        message: "Cover image must be at least 1000px wide!",
      }),
    }),
});

export const collections = { projects, blog };
