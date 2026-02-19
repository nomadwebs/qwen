import type { CollectionEntry } from 'astro:content';

export const sortByDateDesc = (posts: CollectionEntry<'blog'>[]) =>
  [...posts].sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));

export const getReadingTime = (body: string) => {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
};
