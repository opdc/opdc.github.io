import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    author: z.string().default('OPDC'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

const leaders = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().nullable().transform(v => v ?? ''),
    image: z.string().nullable().transform(v => v ?? ''),
    order: z.number().default(999),
    category: z.string().optional(),
    email: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
  }),
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['active', 'completed', 'archived']).default('active'),
    order: z.number().default(999),
  }),
})

export const collections = {
  blog,
  leaders,
  projects,
}
