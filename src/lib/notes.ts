import { getCollection } from 'astro:content';
export async function getNotes() {
  if (Object.keys(import.meta.glob('../content/notes/**/*.md')).length === 0) return [];
  const now = new Date();
  const notes = await getCollection('notes', ({ data }) => !data.draft && data.date <= now);
  return notes.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}
