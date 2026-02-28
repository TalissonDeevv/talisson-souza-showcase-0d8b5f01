/**
 * Generate a URL-safe slug from a title string.
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9\s-]/g, '')   // remove non-alphanumeric
    .trim()
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/-+/g, '-');            // collapse multiple hyphens
}

/**
 * Calculate reading time in minutes based on word count.
 * Average reading speed: ~200 words per minute.
 */
export function calculateReadingTime(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, '')  // remove code blocks
    .replace(/[#*_`~>\-[\]()!]/g, '') // remove markdown syntax
    .trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}
