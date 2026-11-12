---
title: Development Likelihood
status: Idea
summary: Predict which land parcels will be developed within a given number of years, from public parcel, permit, land-cover, and aerial-imagery data.
question: For each parcel in a study area, what is the probability that it is developed within k years, and how well does that probability hold up in an area the model never saw?
started: "2026-11-01"
updated: "2026-11-04"
owners: []
languages: [To be decided]
tags: [Forecasting, Geospatial]
tools: [Gradient boosting, Survival models, Spatial cross-validation]
featured: 0
folder: projects/development-likelihood
highlights: []
links:
  - label: NLCD land cover (MRLC)
    url: https://www.mrlc.gov/
---

## Why it matters

Real estate developers and land investors, solar and energy siting teams, utilities planning load growth, and regional planners would all pay for a calibrated answer. The hard part is cleaning and joining messy public data, which makes the work defensible.

## Approach

1. Choose a study area (one county to start) and a consistent definition of "developed".
2. Build a parcel-by-year panel of features, with outcomes k years later.
3. **Baseline:** logistic regression on distance and zoning features, or a "near recent development" rule.
4. **Models:** gradient boosting and a discrete-time survival model.
5. **Evaluation:** spatial cross-validation that holds out whole towns or grid blocks, never a random split, plus a calibration check.

## Data

Statewide parcel layers, municipal building permits, NLCD land cover across several years, NAIP aerial imagery, building footprints, and roads, zoning, and utility layers. Google Maps imagery is excluded because its terms forbid using it to train models.

## Success criteria

Beats the baseline on spatially held-out areas, with calibrated probabilities (parcels given 20% are developed about 20% of the time), shown as a map.
