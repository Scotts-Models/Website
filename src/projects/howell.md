---
title: Howell
status: Active
statusNote: "v0 built and tested on 2026-11-11; v1 in development"
summary: Our own 2D isometric survival city-builder, inspired by Banished, built so that a reinforcement-learning agent can play it through exactly the same commands and information as a person.
question: Can an RL agent, playing through exactly the same commands and information as a human, keep a colony alive and hit efficiency targets on random seeds and scenarios it has never seen?
started: "2026-11-09"
updated: "2026-11-12"
owners: [Mark Scott, Aaron Scott]
languages: [Python, GDScript]
tags: [Reinforcement learning, Simulation, Game development]
tools: [Gymnasium, Stable-Baselines3 MaskablePPO, TensorBoard, Godot 4, PyInstaller]
featured: 1
folder: projects/howell
highlights:
  - value: "1,235.4"
    label: "Best agent's held-out score, against 1,067.4 for the rule-based bot (20 held-out seeds, 100% survival)"
    source: "reports/training-log.md"
  - value: "1,995"
    label: "Simulated ticks per second in the v0 speed benchmark, measured under a profiler"
    source: "reports/speed.md"
  - value: "122"
    label: "Automated tests passing at the v0 release"
    source: "reports/v0-release.md"
links:
  - label: Godot game engine
    url: https://godotengine.org/
  - label: Stable-Baselines3 documentation
    url: https://stable-baselines3.readthedocs.io/
---

## Why it matters

- **Portfolio:** a complete, original system: a game simulation, a reinforcement-learning training pipeline, and a polished demo.
- **Fun:** a game we want to play ourselves.
- **Possible product:** a playable game with a watch-the-agent mode could be released or sold.

## How it is built

1. **Simulation core first.** A headless, deterministic simulation (the same seed and commands always give the same game) is shared by the human game, the RL environment, and replays. The default tick is one day and the agent decides once per week; both are configurable.
2. **Staged build.** v0 proves the concept (non-spatial economy, console interface, first PPO agent). v1 proves Godot (individual villagers, a Godot interface, real-time and endless play). v2 adds the map, followed by depth, polish with custom sprites, and mod-level content. Every stage ships its own Windows .exe with a Player mode and a Training mode.
3. **Baseline first.** A rule-based bot must survive most seeds before any RL; the RL agent has to beat it.
4. **Evaluation on held-out seeds**, per scenario. Scores are survival plus a scenario-specific efficiency target, such as the largest non-farmer population or the most ale produced.
5. **Fair play.** The agent sees exact figures, and every figure it sees can be found in the game's interface.

## Where it stands

v0 was built and tested on 2026-11-11 and runs Player mode on a clean Windows machine. A MaskablePPO agent beat the rule-based bot on 20 held-out seeds in the survival scenario. Known gaps from the v0 release: the agent has been checked on 20 held-out seeds rather than 100, agents for the non-farmer and ale scenarios are not trained yet, and the packaged build is about 1 GB unpacked.

v1 replaces the aggregate economy with individual villagers: ageing, households and housing, births and deaths, schooling and youth work, retirement, and an event system with harsh winters, early frosts, and accidents. A tuning tool searches over game rules and bot settings against balance targets. A Godot front end follows.

## Success criteria

- **Each stage works:** its .exe runs Player and Training mode on a clean Windows machine, and an agent trained in it beats the rule-based bot on held-out seeds.
- **The project works:** one agent, or a small set, handles a family of scenarios (starting conditions, climate, terrain, objective) in a final .exe with Player, Agent, and Training modes.
- **It does not work** if the agent cannot beat the rule-based bot after reasonable tuning.
