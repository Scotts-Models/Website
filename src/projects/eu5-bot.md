---
title: EU5 Bot
status: Shelved
statusNote: "Shelved on 2026-11-09 in favor of Howell"
summary: AI tooling for the strategy game Europa Universalis V. Shelved after our assessment found that an agent playing the game directly is not feasible; the goal of training a strategy-game agent moved to Howell.
question: "Reframed options that were feasible: an advisor for a given save, an analysis of which early choices predict winning, or tuning the game's built-in AI through a mod."
started: "2026-11-01"
updated: "2026-11-09"
owners: []
languages: [Python (planned)]
tags: [Game AI]
tools: []
featured: 0
folder: projects/eu5-bot
highlights: []
links: []
---

## Why we shelved it

The game has no bot interface, no headless mode, and cannot run faster than its maximum game speed, so an agent that plays it is not feasible. The reframed versions were feasible but were not what we most wanted, and they depend on the publisher's patches and intellectual property.

Rather than bend the goal, we built our own game. [Howell](howell.html) gives us full control of the simulation, its speed, and what the agent can see.

## What we kept

The folder and the initial assessment stay in the repository as the background for why Howell exists.
