---
title: Economic Planning Bot
status: Idea
summary: A computational economic planner that decides what an economy should produce, how much, and where inputs should go. It starts as an input-output planner on real US data and grows into a planner that coordinates supply-chain, commodity-chain, and forecasting bots.
question: Under what information and incentive conditions can a computational planner match or beat a decentralized market at allocating resources, judged on welfare, shortages, waste, and recovery from shocks?
started: "2026-11-10"
updated: "2026-11-10"
owners: [Mark Scott, Aaron Scott]
languages: [Python]
tags: [Optimization, Simulation, Economics]
tools: [Linear programming, Input-output models, Agent-based simulation]
featured: 2
folder: projects/economic-planning-bot
highlights:
  - value: "~400"
    label: "Industries in the detailed BEA input-output tables that Phase A plans over"
    source: "README.md"
  - value: "4"
    label: "Planned phases, from a static planner to a simulated economy and forecaster"
    source: "README.md"
links:
  - label: BEA input-output accounts
    url: https://www.bea.gov/itable/input-output
---

## Why it matters

- **Portfolio and publishable:** planning versus markets is a long-running question in economics and political economy. A rigorous, reproducible computational test of it is unusual.
- **Learning:** linear programming, input-output economics, optimization at scale, agent-based simulation, and reinforcement learning.
- **Practical spin-offs:** the supply-chain and commodity-chain layers solve real business problems.

## Phases

| Phase | What | Role in the end goal |
|--|--|--|
| A. Static input-output planner | Leontief / linear-programming planner on BEA tables, with shock scenarios | The planner's core math, on real data |
| B. Supply-chain bot | Beer distribution game, then multi-echelon inventory, then RL | A lower-layer controller the planner coordinates |
| C. Simulated economy | Agent-based economy where a planner and a market run on the same world | The main research test |
| D. Forecaster | Demand and commodity-trend forecasts | Feeds the planner and the controllers |

Phase A asks a narrower question: given real input-output tables for the US economy, what is the best feasible production plan for a target final demand, and how should that plan change after a supply shock?

## Architecture

- **World:** real input-output data (Phase A) or a simulated economy (Phase C).
- **Forecaster:** predicts demand and shocks.
- **Controllers:** commodity-chain and supply-chain bots, each managing one chain or network.
- **Planner:** coordinates the controllers, sending prices or quotas down and receiving plans back through decomposition methods such as Dantzig-Wolfe.
- **Baseline:** a decentralized market of price-adjusting agents on the same world.

## Data

BEA input-output accounts, OECD and WIOD multi-country tables, BLS employment by industry, UN Comtrade, FAOSTAT, USGS and EIA commodity data, and FRED macro series.

## Success criteria

A reproducible write-up that compares planner and market on the same world, with honest modeling of information and incentive problems. A documented negative or mixed result is still valid; a result where the planner wins only because it was given perfect, truthful information is not.
