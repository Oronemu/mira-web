// Manual re-sync of legal markdown from the canonical iOS repo.
//
// Looks for the Mira iOS repo as a sibling directory (../Mira). When the legal
// text is updated in the iOS app, run this script to pull the fresh markdown
// into the website. The synced files are committed in this repo.
//
// Usage: npm run sync-legal

import { mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const miraRepo = resolve(__dirname, '..', '..', 'Mira');
const outDir = resolve(__dirname, '..', 'src', 'content', 'legal');

const files = [
  ['PRIVACY.md', 'privacy.en.md'],
  ['PRIVACY.ru.md', 'privacy.ru.md'],
  ['TERMS.md', 'terms.en.md'],
  ['TERMS.ru.md', 'terms.ru.md'],
];

if (!existsSync(miraRepo)) {
  console.error(`[sync-legal] Mira iOS repo not found at ${miraRepo}`);
  console.error('[sync-legal] Place the Mira iOS repo as a sibling of this folder, or update the path in scripts/sync-legal.mjs');
  process.exit(1);
}

await mkdir(outDir, { recursive: true });

for (const [src, dest] of files) {
  const srcPath = resolve(miraRepo, src);
  const destPath = resolve(outDir, dest);
  if (!existsSync(srcPath)) {
    console.error(`[sync-legal] missing source: ${srcPath}`);
    process.exitCode = 1;
    continue;
  }
  await copyFile(srcPath, destPath);
  console.log(`[sync-legal] ${src} → src/content/legal/${dest}`);
}

console.log('[sync-legal] done. Review the diff and commit if happy.');
