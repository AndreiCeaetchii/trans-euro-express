import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string().default('#F04E1A'),
    order: z.number(),
    locale: z.string().default('ro'),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    route_description: z.string(),
    avatar_initials: z.string(),
    avatar_color: z.string(),
    review_text: z.string(),
    stars: z.number().min(1).max(5),
    type: z.string(),
    order: z.number(),
    locale: z.string().default('ro'),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
    locale: z.string().default('ro'),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.{md,yaml,yml,json}', base: './src/content/settings' }),
  schema: z.record(z.any()),
});

export const collections = { services, testimonials, faq, settings };
