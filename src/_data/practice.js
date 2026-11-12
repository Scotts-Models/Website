// Figures about how we work, counted from the Scotts-Models repository (origin/main, 2026-11-12).
// Update these by re-counting; do not estimate.
export default {
  asOf: "2026-11-12",
  decisionRecords: 62, // repo-wide 10 + Howell 34 + Stock Trader 11 + Economic Planning Bot 6 + EU5 Bot 1
  projects: 8,

  // A real excerpt from the decision log, shown on the home page.
  logExcerpt: [
    { id: "Howell 0007", title: "Agent must generalize across held-out seeds, then across a family of scenarios", date: "2026-11-09", project: "howell" },
    { id: "Howell 0009", title: "Agent sees exact figures; every observed figure must be findable in the UI", date: "2026-11-09", project: "howell" },
    { id: "Repo 0010", title: "Every project runs from a fresh clone: pathlib paths, environment file, scripted data", date: "2026-11-10", project: null },
    { id: "Planning 0003", title: "Success is publishable or portfolio-quality work plus learning; honest planner-versus-market comparison", date: "2026-11-10", project: "economic-planning-bot" },
    { id: "Trader 0001", title: "Paper trading only; real accounts deferred", date: "2026-11-01", project: "stock-trader" },
  ],

  principles: [
    {
      title: "Write the decision down",
      body: "Every meaningful choice gets its own numbered record: the context, the options we weighed, what we picked, and what it costs us. We never rewrite an accepted decision; we supersede it.",
    },
    {
      title: "Beat a baseline on data the model never saw",
      body: "Buy-and-hold for the trader, random walk for profitability forecasts, a rule-based bot for Howell. Results are judged on held-out seeds, walk-forward windows, or spatially held-out areas.",
    },
    {
      title: "A clear null result is a result",
      body: "If a model does not beat the baseline after honest tuning, we document that. A careful negative finding is more useful than a flattering backtest.",
    },
    {
      title: "Runs from a fresh clone",
      body: "Each project installs from an environment file, fetches its own data by script, and runs on any machine with no code changes.",
    },
  ],

  capabilities: [
    {
      title: "Reinforcement learning and simulation",
      body: "Deterministic simulations built for agents to learn in, with PPO training, held-out evaluation, and packaged Windows builds.",
      projects: ["howell", "economic-planning-bot"],
    },
    {
      title: "Forecasting with honest evaluation",
      body: "Point-in-time panels, walk-forward testing, calibration checks, and no lookahead, for markets, company financials, and land use.",
      projects: ["stock-trader", "company-profitability", "development-likelihood"],
    },
    {
      title: "Applied language-model systems",
      body: "Retrieval over curated best practice and a company's own documents, tested in blind comparisons graded by practitioners.",
      projects: ["consulto-bot"],
    },
    {
      title: "Optimization and economic modeling",
      body: "Linear programming and input-output models on real national accounts, with shock scenarios and layered planning agents.",
      projects: ["economic-planning-bot"],
    },
    {
      title: "Public-data engineering",
      body: "Cleaning and joining SEC EDGAR filings, BEA input-output tables, parcel layers, land cover, and aerial imagery into usable datasets.",
      projects: ["company-profitability", "development-likelihood", "economic-planning-bot"],
    },
  ],
};
