// Injects the server-rendered HTML into dist/index.html after the client build.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const entry = pathToFileURL(resolve(root, "dist-ssr/prerender-entry.js")).href;
const { render } = await import(entry);
const html = render();

const file = resolve(root, "dist/index.html");
let doc = readFileSync(file, "utf-8");

const marker = '<div id="root"></div>';
if (!doc.includes(marker)) {
  throw new Error('Could not find <div id="root"></div> in dist/index.html');
}
doc = doc.replace(marker, `<div id="root">${html}</div>`);
writeFileSync(file, doc);

rmSync(resolve(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered dist/index.html (${(html.length / 1024).toFixed(1)} kB of static HTML)`);
