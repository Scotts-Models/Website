// Eleventy configuration for the Scott's Models website.
// Every internal link is written relative to the current page (see the `rel` filter),
// so the built site works at any address: https://<org>.github.io/Website/,
// a custom domain, or opened straight from disk for a local preview.

import path from "node:path";

const STATUS_ORDER = ["Active", "Exploring", "Idea", "Paused", "Done", "Shelved"];

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Projects collection: one Markdown file per project in src/projects/.
  eleventyConfig.addCollection("projects", (api) =>
    api
      .getFilteredByGlob("src/projects/*.md")
      .sort(
        (a, b) =>
          STATUS_ORDER.indexOf(a.data.status) - STATUS_ORDER.indexOf(b.data.status) ||
          String(b.data.updated).localeCompare(String(a.data.updated))
      )
  );

  // rel: turn a site-absolute path ("/projects.html") into a path relative to the current page.
  eleventyConfig.addFilter("rel", function (target) {
    if (!target || /^(https?:|mailto:|tel:|#)/.test(target)) return target;
    const from = this.page?.url || "/";
    // 404.html is served at any missing path, so its links must be absolute when a site URL is known.
    if (from === "/404.html" && process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "") + target;
    const fromDir = from.endsWith("/") ? from : path.posix.dirname(from) + "/";
    let out = path.posix.relative(fromDir, target.endsWith("/") ? target + "index.html" : target);
    return out === "" ? "index.html" : out;
  });

  // abs: absolute URL for canonical / sitemap / Open Graph. Empty when no site URL is configured.
  eleventyConfig.addFilter("abs", (target, base) => {
    if (!base) return "";
    return base.replace(/\/$/, "") + (target.endsWith("/") ? target : target);
  });

  eleventyConfig.addFilter("dateLong", (value) => {
    if (!value) return "";
    const d = new Date(String(value) + "T12:00:00Z");
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  });

  eleventyConfig.addFilter("statusClass", (s) => "status--" + String(s || "").toLowerCase());
  eleventyConfig.addFilter("statusRank", (s) => STATUS_ORDER.indexOf(s));
  eleventyConfig.addFilter("slugify2", (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
  eleventyConfig.addFilter("uniqueFlat", (arr, key) => [...new Set(arr.flatMap((p) => p.data[key] || []))].sort());
  eleventyConfig.addFilter("indexOfUrl", (arr, url) => arr.findIndex((p) => p.url === url));
  eleventyConfig.addFilter("findSlug", (arr, slug) => arr.find((p) => p.fileSlug === slug));
  eleventyConfig.addFilter("featuredProjects", (arr) => arr.filter((p) => p.data.featured).sort((a, b) => a.data.featured - b.data.featured));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("byStatus", (arr, s) => arr.filter((p) => p.data.status === s));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
