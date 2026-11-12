---
title: Consulto Bot
status: Idea
summary: A language-model consultant that already knows industry standards and best practices, takes in a company's own SOPs, KPIs, and goals, and gives advice the way a professional consultant would.
question: In one specific industry, does a bot that combines a curated best-practice knowledge base with a company's own documents give measurably better advice than a general-purpose chatbot?
started: "2026-11-01"
updated: "2026-11-09"
owners: []
languages: [Python (planned)]
tags: [Language models, Retrieval (RAG)]
tools: [LLM SDKs, Retrieval pipeline]
featured: 3
folder: projects/consulto-bot
highlights: []
links: []
---

## Why it matters

It is the fastest of our ideas to reach a working demo, and it is easy to explain to a business owner. It is also one of the most crowded spaces in technology, so it only has value if it is narrow (one industry) and can show that its advice is actually good.

## Candidate industries

Home services and energy contractors, and restaurant franchises: the two industries we know from our own work.

## Approach

1. Pick one industry.
2. Build the best-practice knowledge base and a retrieval pipeline over it, plus the client's own documents.
3. Build the evaluation set before tuning anything.
4. Compare the bot against a general chatbot on blind answers graded by practitioners.

## Data

- **Curated industry best practice:** licensed material or our own writing.
- **Client SOPs, KPIs, and goals:** confidential, used only with written permission.
- **Evaluation questions:** real questions with expert-graded answers, written by us.

## Success criteria

Practitioners prefer its answers to a general chatbot's more often, in a blind comparison.

## Open questions

- Which industry to start with.
- Who grades the evaluation set.
- Liability and disclaimer wording for advice.
