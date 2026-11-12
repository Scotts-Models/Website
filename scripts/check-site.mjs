// Checks the built site in _site/: every internal link and asset resolves, every page has a title,
// one h1, a description, and lang; external links open in a new tab with rel="noopener".
// Prints the list of external URLs so they can be verified by hand. Exits 1 on any problem.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("_site");
const problems = [];
const external = new Map();

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".html")) pages.push(p);
  }
})(root);

for (const file of pages) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, "utf8");
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${rel}: expected 1 <h1>, found ${h1s}`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${rel}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) problems.push(`${rel}: missing description`);
  if (!/<html lang="en">/.test(html)) problems.push(`${rel}: missing lang`);

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/<(a|link|script|img)\b([^>]*?)\s(href|src)="([^"]+)"([^>]*)>/g)) {
    const [, tag, before, , url, after] = m;
    const attrs = before + " " + after;
    if (/^https?:\/\//.test(url)) {
      if (tag === "a") {
        if (!external.has(url)) external.set(url, new Set());
        external.get(url).add(rel);
        if (!/target="_blank"/.test(attrs) || !/rel="noopener"/.test(attrs)) problems.push(`${rel}: external link without target/rel: ${url}`);
      }
      continue;
    }
    if (/^(mailto:|tel:)/.test(url)) continue;
    if (url.startsWith("#")) {
      if (url.length > 1 && !ids.has(url.slice(1))) problems.push(`${rel}: missing anchor ${url}`);
      continue;
    }
    if (rel === "404.html") continue; // 404 uses absolute links when SITE_URL is set
    if (url.startsWith("/")) { problems.push(`${rel}: root-absolute link breaks project-site hosting: ${url}`); continue; }
    const target = path.resolve(path.dirname(file), url.split(/[?#]/)[0]);
    if (!fs.existsSync(target)) problems.push(`${rel}: broken link ${url}`);
  }
}

console.log(`Checked ${pages.length} pages.`);
console.log(`External links (${external.size}):`);
for (const [url, from] of [...external].sort()) console.log(`  ${url}  <- ${[...from].length} page(s)`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n` + problems.map((p) => "  " + p).join("\n"));
  process.exit(1);
}
console.log("\nNo problems found.");
