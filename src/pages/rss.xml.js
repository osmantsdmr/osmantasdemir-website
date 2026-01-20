import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  
  return rss({
    title: 'Osman Taşdemir Blog',
    description: 'CBS, uzaktan algılama, otomasyon ve teknoloji hakkında yazılar',
    site: context.site || 'https://osmantsdmr.com',
    items: blog
      .sort((a, b) => new Date(b.data.tarih).getTime() - new Date(a.data.tarih).getTime())
      .map((post) => ({
        title: post.data.baslik,
        pubDate: post.data.tarih,
        description: post.data.ozet,
        link: `/blog/${post.slug}/`,
        categories: post.data.etiketler || [],
        author: post.data.yazar || 'Osman Taşdemir',
      })),
    customData: `<language>tr-TR</language>`,
  });
}
