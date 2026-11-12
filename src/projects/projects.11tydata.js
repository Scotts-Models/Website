// Defaults for every file in src/projects/. Each project page is generated at /projects/<slug>.html.
export default {
  layout: "layouts/project.njk",
  permalink: (data) => `/projects/${data.page.fileSlug}.html`,
  eleventyComputed: {
    slug: (data) => data.page.fileSlug,
  },
};
