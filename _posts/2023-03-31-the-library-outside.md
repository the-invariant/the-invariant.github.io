---
layout: post
title: "The Library Outside"
author: Chukwuka Orefo
display_title: "The Library Outside"
date: 2023-03-31
categories:
- Artificial Intelligence
- Machine Learning
- Data Governance
tags:
- retrieval augmented generation
- RAG
- large language models
- safeguarding
- policy retrieval
- grounding
- external knowledge
- document governance
- evidence
- local policy
description: "What changes when the knowledge stays outside the model?"
image: /assets/images/posts/2023-03-31-the-library-outside/hero.jpg
---

# The Library Outside

Safeguarding guidance at the charity is spread across approved policies, procedures and supporting documents. Staff may need an action from one document, parents a public explanation from another, and managers the handover or escalation detail sitting behind both. Outside normal hours, the person who knows where to look is not always available.

Conversational models have become easy enough to reach that I am already using them beside documentation and code. They can explain an unfamiliar library, suggest an implementation and hold part of a problem in language while I work through it. They are most useful where my knowledge is thin, which is also where I am least able to spot a confident mistake.

## The Answer Sounds Reasonable

I ask one what should happen after a particular safeguarding concern is recorded. The answer is calm, specific and wrong. It adds a step that does not appear in the charity’s policy.

The wording sends me back to the document because, for a few seconds, I distrust my memory before I distrust the model. The step is not there. Another person reads the answer and says it sounds reasonable.

That is the problem. An absurd answer would have ended the experiment. This one could be used.
In a methods section, a claim without a source would stop at the claim. Here the model continues speaking, filling the space after its evidence has ended.

## The Prompt Carries the Library

I paste the relevant policy into the prompt and the answer improves. For a small test, that's enough. Then the collection grows, documents change, and the same block of text has to travel with every question. I briefly consider summarising the policies first, then recognise the trap from the case overviews. A fixed reduction would decide what mattered before the question existed.

## The Weight Stays Where It Is

The approved documents remain outside the model weights. They are loaded into a retrieval layer where they can still be inspected, replaced and governed as documents. When a question arrives, the system searches the approved collection, selects candidate passages and places them into the current context. The model produces language from the evidence supplied for that request.

## The Passage Travels With the Answer

A policy can now be replaced when the approved version changes. The assistant can answer from the new document without retraining the base model. A user can see which passage travelled with the answer, and I can compare the response with its source instead of wondering whether the model happens to remember the organisation correctly.

The first grounded responses are less prone to inventing local procedure. They are also easier to challenge because the evidence is present. Retrieval does not make unsupported language impossible, and it doesn't remove the decisions made while documents are prepared and indexed. It moves the choice of evidence closer to the question.

A member of staff can now ask about current local policy without waiting for somebody else to search the folders. The policy remains governed as a document rather than becoming a vague property of the model. It can have an owner, a current version and a replacement. The answer can be fluent, but the document remains capable of correcting it.

## The Same Question, Different Doors

Then a parent and a manager ask nearly the same question. The wording is similar, but the answer should not be built from the same collection for both of them.


