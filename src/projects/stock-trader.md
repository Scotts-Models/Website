---
title: Stock Trader Bot
status: Idea
summary: A machine-learning trading strategy judged honestly against simply buying and holding an index fund, on risk-adjusted returns, after costs, on data it was never trained or tuned on.
question: Can a model built on public data beat buy-and-hold of the S&P 500 on risk-adjusted return (Sharpe ratio, alpha), after trading costs, on data it was never trained or tuned on?
started: "2026-11-01"
updated: "2026-11-04"
owners: []
languages: [Python, R]
tags: [Forecasting, Finance, Backtesting]
tools: [DuckDB, Parquet, pandas, pytest]
featured: 0
folder: projects/stock-trader
highlights:
  - value: "11"
    label: "Design decisions recorded, including paper trading only and a free-data price source test"
    source: "decisions/README.md"
links:
  - label: SEC EDGAR APIs
    url: https://www.sec.gov/search-filings/edgar-application-programming-interfaces
---

## Why it matters

Most retail machine-learning trading results come from flawed backtests. A rigorous backtesting framework with an honest write-up is credible work even if, as is most likely, the strategy does not beat the market.

## Approach

1. **Backtesting harness first:** walk-forward validation, trading costs and slippage, and no lookahead.
2. **Baselines:** buy-and-hold, and simple momentum or mean-reversion rules.
3. **Machine-learning models**, compared against those baselines.
4. **Paper trading** before any real money.

## Data

Free daily price data for prototyping (tested source by source before one is chosen), SEC EDGAR fundamentals, and profitability forecasts from our [Company Profitability](company-profitability.html) project, passed through a shared forecast file.

## Success criteria

- **Worked:** beats buy-and-hold on Sharpe ratio, after costs, across several walk-forward test windows that were never used for tuning.
- **Did not work:** a clearly documented null result, which is also a valid outcome.
