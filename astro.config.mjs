// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://osmantsdmr.com',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [
      remarkGfm, // Tablo, strikethrough, autolink, tasklist desteği
    ],
    rehypePlugins: [
      rehypeSlug, // Başlıklara ID ekler
      [rehypeAutolinkHeadings, { behavior: 'wrap' }] // Başlıklara link ekler
    ],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
