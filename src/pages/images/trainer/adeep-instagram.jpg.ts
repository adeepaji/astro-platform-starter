// Static, publicly distributed image for the BF GYM Global Instagram launch.
// Original source was provided by the founder, and is already published on the site.
// Convert WebP to a platform-compatible JPEG at build time; no user data collected.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const prerender = true;

export async function GET() {
  const bytes = await readFile(join(process.cwd(), 'public/images/trainer/adeep-portrait-new.webp'));
  const jpeg = await sharp(bytes)
    .rotate()
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  return new Response(new Uint8Array(jpeg), {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=604800',
    },
  });
}
