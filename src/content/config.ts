import { defineCollection, z } from 'astro:content';

const projeler = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    slug: z.string(),
    kategori: z.string(),
    tarih: z.string(),
    aciklama: z.string(),
    detay: z.string(),
    teknolojiler: z.array(z.string()).optional(),
    ozellikler: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    slug: z.string(),
    tarih: z.date(),
    ozet: z.string(),
  }),
});

export const collections = { projeler, blog };