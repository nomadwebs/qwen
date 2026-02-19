import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('blog');

  const staticPages = ['/', '/about', '/projects', '/blog'];
  const urls = [
    ...staticPages.map((path) => new URL(path, site).toString()),
    ...posts.map((post) => new URL(`/blog/${post.data.slug}`, site).toString())
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
