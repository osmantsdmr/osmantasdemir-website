import { defineCollection, z } from 'astro:content';

const projeler = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    slug: z.string().optional(),
    kategori: z.string(),
    tarih: z.string(),
    kapakGorseli: z.string().optional(),
    galeri: z.array(z.object({ gorsel: z.string() })).optional(),
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
    slug: z.string().optional(),
    tarih: z.coerce.date(),
    kapakGorseli: z.string().optional(),
    ozet: z.string(),
  }),
});

export const collections = { projeler, blog };