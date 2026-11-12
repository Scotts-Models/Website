---
title: Company Profitability
status: Idea
summary: Forecast a company's profitability several quarters ahead using only information that was public at the time of the forecast.
question: Using only information public at the time, can a model predict a profitability measure, such as net margin or return on assets, k quarters ahead better than simple baselines?
started: "2026-11-01"
updated: "2026-11-04"
owners: []
languages: [R (possible)]
tags: [Forecasting, Finance]
tools: [SEC EDGAR XBRL, Parquet]
featured: 0
folder: projects/company-profitability
highlights: []
links:
  - label: SEC EDGAR APIs
    url: https://www.sec.gov/search-filings/edgar-application-programming-interfaces
---

## Why it matters

A clean, well-validated panel-forecasting project is solid work on its own. Commercially the space is crowded, so any edge is most likely in areas analysts cover less, such as small caps or particular sectors.

## Approach

1. Build a point-in-time panel where every value is dated by when it was filed, not by the period it covers.
2. **Baselines:** random walk and seasonal random walk.
3. **Models:** regularized regression, then gradient boosting, on a company-by-quarter panel.
4. **Evaluation:** rolling-origin (walk-forward) out-of-sample tests.

## Feeds the Stock Trader

Forecasts are written to a shared file with a fixed schema, which the [Stock Trader Bot](stock-trader.html) reads as an input. Historical forecasts must be produced walk-forward so the trader's backtest never sees the future.

## Success criteria

Consistently beats the random-walk baselines on out-of-sample error, ideally within a defined segment such as small caps.
