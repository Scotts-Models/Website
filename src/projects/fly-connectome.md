---
title: Fly Connectome
status: Idea
summary: A research project using the complete wiring diagram of the fruit fly brain. The dataset is downloaded; the research question is still being chosen.
question: "Three candidates: what network structure reveals compared with matched random graphs; whether real circuit wiring is a useful architecture for a neural network; or reproducing and extending a published whole-brain spiking model."
started: "2026-11-01"
updated: "2026-11-04"
owners: [Mark Scott]
languages: [Python (planned)]
tags: [Neuroscience, Network science]
tools: [PyTorch, Brian2]
featured: 0
folder: projects/fly-connectome
highlights: []
links:
  - label: FlyWire connectome
    url: https://flywire.ai/
---

## Why it matters

Probably the highest academic value of all our ideas, and a strong research writing sample. Commercial value is low.

## Candidate questions

- **Network science:** what do motif, community, or hub structures in the connectome reveal, compared against random graphs with the same degree distribution?
- **Connectome as architecture:** does using a real circuit's wiring as a neural network's fixed connectivity help on a task, compared with random wiring of the same density?
- **Reproduce and extend:** reproduce the Shiu et al. (2024) whole-brain spiking model, then run a new experiment with it.

## Open questions

- Which dataset (FlyWire whole brain, hemibrain, or the ventral nerve cord) to build on.
- Which of the three questions to pursue.
