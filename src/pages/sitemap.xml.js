import { SITE } from '../lib/site';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  const pages = [
    { url: SITE.url + '/', lastmod: new Date() },
    { url: SITE.url + '/blog/', lastmod: new Date() },
    { url: SITE.url + '/about/', lastmod: new Date() },
    ...posts.map((p) => ({ url: `${SITE.url}/blog/${p.id}/`, lastmod: p.data.updatedDate ?? p.data.pubDate })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod.toISOString().split('T')[0]}</lastmod>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
