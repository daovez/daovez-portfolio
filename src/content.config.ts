import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { readdirSync } from 'node:fs';
const markdownLoader = glob({ pattern: '**/*.md', base: './src/content/notes' });
const notes = defineCollection({
  loader: {
    name: 'notes-loader',
    async load(context) {
      const files = readdirSync(new URL('./content/notes/', import.meta.url), { recursive: true });
      if (!files.some(file => String(file).endsWith('.md'))) {
        context.store.clear();
        return;
      }
      await markdownLoader.load(context);
    },
  },
  schema: z.object({ title: z.string().min(1), date: z.coerce.date(), description: z.string().min(1), draft: z.boolean().default(false) }),
});
export const collections = { notes };
