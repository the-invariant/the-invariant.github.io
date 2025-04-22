---
layout: post
title: "The Grammar of Dirt"
author: Chukwuka Orefo
display_title: "The Grammar of Dirt"
date: 2025-04-22
categories:
- Artificial Intelligence
- Data Governance
- Software Engineering
tags:
- large language models
- retrieval augmented generation
- data lineage
- grounding
- prompt engineering
- evaluation
- model traces
- evidence
- AI governance
- technical debt
description: "Why does the linguistic fluency of a language model make it so dangerous when its underlying evidence path fails?"
image: /assets/images/posts/2025-04-22-the-grammar-of-dirt/hero.jpg
---
# The Grammar of Dirt

## I. The Sentence at the End

The central danger of natural-language interfaces is that fluency can mask serious failure in the path beneath them. On one language-model project, I was asked how the quality of the system should be measured. The application retrieved information from a controlled collection, placed several passages into the model’s context and returned a natural-language answer. Its outputs looked far more complete than the components producing them. I assumed the question concerned the choice of metric. It did not. The person asking wanted to know where measurement should begin.

I paused before answering, partly because the question was larger than it sounded and partly because I was still carrying the assumption that people further up the technical ladder must possess a layer I had not reached. Perhaps they wanted a compact account for somebody else. Perhaps the system had reached production before anyone had agreed what a good result meant. I asked what the application was expected to do, which evidence it received, what could change between versions and what a bad answer would cost. The conversation moved towards outputs. Was the answer correct? Was it helpful? Did users like it? Those questions matter. They also begin at the end.

A language model can produce an impressive answer after the evidence path has already failed. The source may be obsolete. Extraction may have lost a table. A chunk boundary may separate a rule from the exception that limits it. Retrieval may choose an older passage because its wording resembles the question more closely. The model receives that temporary world and speaks as though nothing exists beyond it. Garbage in, garbage out once implied that poor input would leave visible dirt on the result. A language model can give the dirt grammar.

## II. Quality About the Path

In systems where I held more authority, I had built quality around the path rather than the final sentence. The application identified the user and narrowed the sources their role could reach. Retrieval searched only that permitted collection. The model turned the supplied evidence into language. Higher-risk cases returned to a person through an explicit handover. That arrangement didn’t make an answer correct by definition. It gave the failure somewhere to live.

I wanted to know which source version entered the index, how the document was parsed, which passages were retrieved, what permission scope shaped the search, which model and prompt produced the response and whether the wording remained inside the supplied evidence. The sentence was the last state of a longer execution. Judging it without the route was like inspecting a parcel while refusing to ask where it had been.

Open-source work had taught me to distrust invisible state. Nobody outside the original contributor’s head could rely on a private explanation of what happened. A lineage event could retain the relationship between source assets, jobs and runs. A model trace could preserve the retrieved evidence, prompt, call and response. Typed events could stop identifiers and permission scope changing shape between services. Those systems preserve different witnesses. None can decide whether the source was wise, whether the user should have asked the question or whether the final judgement belongs to a machine.

## III. Memory Held Outside

Prompt hotfixes produce the same kind of adaptation found in older pipelines. A model gives one bad answer, so another instruction is added. An ordinary question then becomes too cautious, and another line repairs that. Before long, the prompt contains policy, style, refusal behaviour, evidence limits and exceptions in a form nobody would accept from an ordinary application because ordinary applications are expected to have structure. The prompt continues to work. That is how the debt hides.

On an earlier commercial project, I had maintained a versioned gold-standard packet for language models. Changes in customer language could degrade behaviour while the endpoint remained healthy, so the current model had to answer to known cases held outside it. The packet was small and incomplete. It still gave a polished prediction something it couldn’t control. I carried the same instinct into retrieval and generation. The evaluation set needed ordinary questions, rare cases, conflicting evidence, unavailable facts, permission boundaries, refusals and examples taken from real failures. A defect repaired only in the prompt is waiting to return under different wording. A defect added to the regression set becomes part of the system’s memory.

This was what felt absent from several conversations about advanced models. Intelligence was being discussed as though it might compensate for undefined evidence and undefined quality. It cannot. Fluency reduces the social pressure to notice the missing definition, while external evaluation keeps asking the question after the current prompt and model have changed. Once the model can call tools, the same problem moves again. The failure no longer ends at the sentence.
