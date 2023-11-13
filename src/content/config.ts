import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
