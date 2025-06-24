---
layout: post
title: "Testing at the Trajectory"
author: Chukwuka Orefo
display_title: "Testing at the Trajectory"
date: 2025-06-24
categories:
- Artificial Intelligence
- Machine Learning
- Software Engineering
tags:
- AI agents
- agent evaluation
- tool use
- trajectory evaluation
- model governance
- sensitive data
- restricted environments
- human oversight
- evaluation harnesses
- AI safety
description: "Why is evaluating the final output of an AI agent fundamentally insufficient without observing the path it took to get there?"
image: /assets/images/posts/2025-06-24-testing-at-the-trajectory/hero.jpg
---
# Testing at the Trajectory

## I. The Illusion of Execution

When evaluating autonomous agents, organisations can mistake a plausible sequence of tool calls for an executable system, then mistake an executable system for a reliable outcome. In one AI review, an agent was being considered that could inspect sensitive data, generate queries and return analytical results to a user. The proposal described a capable model, a secure connection and a route through several tools. On paper, the journey from question to answer looked complete.

The intended workspace was isolated from the wider network, which may be exactly what sensitive work requires. The proposed agent depended on external services that could not be reached from inside it. Outside the restricted environment, the concerns involved retention, logging, contracts, access to code and the route by which sensitive data might leave the organisation. Inside it, the service was simply unavailable. A local model could offer a narrower alternative, provided the surrounding application retained permissions, audit and query controls. The question was no longer which model appeared most capable. It was which capability could actually inhabit the boundary.

The proposed trajectory began before the model selected its first tool. The development loop inside the environment was slow and awkward. Documentation had to be carried in, packages approved or preloaded, and a small uncertainty could require leaving the workspace before returning later with an answer. Consumer platforms spend heavily reducing the delay between action and response because people attempt less when feedback becomes expensive. Research environments sometimes treat slowness as neutral, perhaps because research already contains waiting. It isn’t neutral. A slow loop edits the set of experiments people are willing to try.

Users compensate by batching questions, reusing old code and avoiding changes likely to waste an afternoon. The environment remains operational because the people inside it have altered their practice around the product. That may be a reasonable trade-off for security, but it still belongs in an honest account of what the system can support. A secure architecture cannot be evaluated only by what it prevents. It also has to include the work its boundaries make impractical.

## II. Beyond the Expected Number

Even in an environment where the agent could run, the answer would not be enough to evaluate it. An agent owns part of the path between input and result. It may choose the wrong table, retrieve more data than necessary or call a tool with unsafe arguments, then arrive at the expected number because later steps happen to compensate. Testing only the answer rewards luck. It gives the same result to a sound route and a damaged one that happened to land in the right place.

In payment software, finalising an invoice and sending it are separate states. An agent can call the first function, observe an open invoice and report that the task has been completed. Every action it attempted may return successfully. The missing action produces no exception because it was never attempted. Execution has ended, but the task has not reached the state implied by the agent’s answer.

A useful evaluation therefore needs the trajectory as well as the outcome. It needs to retain which tool was selected, which arguments were passed, what data was exposed and why the agent stopped. It also needs cases where the right behaviour is not completion, such as refusing an unavailable field or returning a task for human review. A versioned evaluation store can tie results to a particular application and model. A test harness can exercise the same cases across changes to prompts and tools, while a trace preserves the route taken during one run. Those systems give the failure evidence. Someone still has to define good.

## III. Earning Completion

A score of 0.83 can look scientific while representing six examples, one disputed rubric and a judge whose prompt was written by the team that built the agent. Automated evaluation provides scale and repeatability. Manual trace review finds defects the rubric has not yet imagined. Deterministic components still need deterministic tests, particularly where permissions, query construction and state transitions can be checked without asking another model for an opinion.

Every production failure should be allowed to enlarge the evaluation set. Otherwise agent development becomes hotfixing with more expensive language. A prompt changes, a tool description changes, one scenario improves and the organisation moves on without retaining the case that made the change necessary. The agent says done. The surrounding system still needs an event that earns the word.

