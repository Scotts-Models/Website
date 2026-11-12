// Site-wide settings. Edit this file to change names, links, and what is shown publicly.
export default {
  name: "Scott's Models",
  shortName: "Scott's Models",
  tagline: "Machine learning, simulation, and forecasting projects, with every decision written down.",
  description:
    "Scott's Models is Mark Scott and Aaron Scott's technology studio for machine learning, simulation, and forecasting projects, from a reinforcement-learning city-builder to an economic planning engine.",

  // Full public address, used only for canonical links, social previews, and sitemap.xml.
  // Set it with the SITE_URL environment variable at build time (the deploy workflow does this
  // automatically). Leave empty for local previews.
  url: process.env.SITE_URL || "",

  // GitHub organization. `orgVisible` stays false until the org page is confirmed public;
  // when false, the site does not link to it.
  github: {
    org: "Scott-Models",
    orgUrl: "https://github.com/Scott-Models",
    orgVisible: false,
    // Monorepo that currently holds every project.
    repoUrl: "https://github.com/MarkGScott960/Scotts-Models",
    // The repo is private today (repo decision 0007). Set to true once it is public;
    // project pages then show "View source" links to each project folder.
    repoPublic: false,
    branch: "main",
  },

  copyright: "Copyright © 2026 Mark Scott and Aaron Scott. All rights reserved.",
};
