import { defineCollection, z } from 'astro:content';

const projeler = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    slug: z.string().optional(),
    oneCikan: z.boolean().default(false),
    kategori: z.string(),
    ozelKategori: z.string().optional(),
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
    // Yeni alanlar
    kategori: z.string().default('Genel'),
    etiketler: z.array(z.string()).optional(),
    yazar: z.string().default('Osman Taşdemir'),
    // SEO alanları
    metaDescription: z.string().optional(),
    // Öne çıkan
    oneCikan: z.boolean().default(false),
  }),
});

export const collections = { projeler, blog };
