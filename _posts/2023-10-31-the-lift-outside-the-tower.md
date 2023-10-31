---
layout: post
title: "The Lift Outside the Tower"
author: Chukwuka Orefo
display_title: "The Lift Outside the Tower"
date: 2023-10-31
categories:
- Artificial Intelligence
- Machine Learning
- Systems Design
tags:
- QLoRA
- LoRA
- fine-tuning
- prompt engineering
- retrieval augmented generation
- grounding
- model adaptation
- GPU memory
- safeguarding
- human oversight
description: "What happens when the rules leave the prompt and enter the model?"
image: /assets/images/posts/2023-10-31-the-lift-outside-the-tower/hero.jpg
---

# The Lift Outside the Tower

Over the past few weeks, I have been rebuilding the retrieval layer of a safeguarding policy assistant for a charity. Parents, staff and managers use it to find guidance from approved procedures without searching through several files or waiting for the person who knows where the answer is stored.

A question enters through a Django web application, which attaches the user’s identity, role and session. Cerbos decides which policy documents that role may reach, and LlamaIndex searches only within the permitted collection. OpenSearch holds the searchable passages, metadata and embeddings. The model receives the selected evidence and turns it into a readable answer, while the application retains control over escalation, notification and human handover.

The most recent work had been on the documents themselves. Fixed-size chunks allowed a general rule to land in one fragment while the exception limiting it began in the next. The assistant could retrieve the correct policy, display the correct title and still receive an incomplete instruction. I changed the ingestion path so headings, paragraphs, lists and neighbouring passages could remain connected, with each node retaining its policy version and place in the source.

A packet of difficult questions suggested that the change was working. Questions that once returned the rule alone now brought back the condition that altered it. The correct user was searching the correct collection, and the evidence reaching the model was more likely to contain the complete instruction. That was when another problem became difficult to ignore. Better evidence did not guarantee better language.

## The Prompt Keeps Growing

One response gives the rule and exception correctly, then adds a reassuring sentence that neither passage supports. Another has sufficient evidence and refuses to answer. A third uses language intended for a member of staff when the person asking is a parent.

Most repairs accumulate inside the system prompt. Quote the evidence. Say when the source is insufficient. Do not infer a safeguarding decision. Use language appropriate to the role. Return a handover structure only after the application has selected that route. Each instruction has an answer behind it that I would rather not reproduce.

The prompt grows in the order the failures arrive, not in the order I would choose if I were designing it cleanly. It contains the history of the system, although not in a form that makes the history particularly easy to understand.

## An Application Written in Prose

I tighten the grounding instruction after one response travels beyond its source. The difficult question now stops where it should, but a simpler question whose answer appears directly in the retrieved paragraph refuses to answer at all. I remove the new wording. The ordinary question works again, and the first failure returns. For a while I move the instruction backwards and forwards, which is not quite debugging because the prompt is not executed in the usual sense, and not quite editing because the reader is a model whose interpretation can shift when something else changes.

An example helps. Another edge case needs a different example. A refusal pattern added for one audience changes the tone for another. The prompt begins to resemble a small application written in prose, except its branches have no type checker and its runtime is allowed to interpret them.

## What Code Can Hold

Some decisions can move into ordinary code. The application already chooses the permission scope and escalation route. It can require a source field, reject malformed output and prevent the model from creating a safeguarding action that the workflow has not selected. Those controls do not need to remain negotiable.

The harder behaviour still belongs to language. How firmly should an answer state a supported instruction? How should it admit that the policy does not say enough? When is uncertainty honest, and when has the model become so cautious that it is no longer useful? These cases can be tested, but they do not all fit cleanly into fixed branches.

Fine-tuning begins to look less like ambition and more like an attempt to stop adding paragraphs to the prompt. I keep the experiment beside the existing assistant because I do not yet know whether it will help. Replacing a visible problem with a trained one would be an impressive way to make the system harder to inspect.

## The Head Does Not Come Off

The operation feels familiar at first. In earlier neuroimaging work, I removed the classifier from AlexNet, retained the useful visual representation and trained a new head for diffusion MRI. The old task came off. A different one attached to the substrate beneath it.

That memory gets me into the problem and then begins to mislead me. LoRA does not replace one classifier at the top. It inserts small trainable updates inside selected transformations while the base model remains frozen. The learned change is light. The model carrying it is not.

## The Base Model Fills the Room

I load the base model and watch the available GPU memory disappear before training has properly begun. For a few seconds, I leave the machine alone, as though the number may recover once it understands that this is only an experiment. It does not.

QLoRA makes the test practical by reducing the memory required to carry the frozen base while the low-rank adapters are trained. I use approved and synthetic examples rather than raw safeguarding cases. The target remains narrow. The model should stay within the supplied evidence, recognise the relevant passage, admit when the source is insufficient and use the response form expected by the application.

Permissions remain outside the adapter. Risk classification remains outside it. The decision to create a safeguarding handover remains outside it. I am trying to teach a language habit, not move institutional authority into a set of weights because the prompt has become untidy.

## The Exam Stays Outside

A small packet of questions stays outside training. Some expect a particular passage. Some reproduce the failures that created the longest prompt instructions. Some should be answered directly. Others should stop because the available policy does not support the requested conclusion.

This is an older reflex from model evaluation. The system being improved does not get to write its own exam.

The adapter becomes more consistent on that packet. Several prompt instructions can be shortened, and the model is less likely to continue speaking after the evidence ends. It still fails. The packet is small, the policies will change and cleaner answers may become easier to believe before they become easier to justify.

## The Quiet Repair

I expected the improvement to feel like relief. Instead, I keep placing the new responses beside the old ones because the behaviour has moved somewhere I cannot read as quickly as a prompt file. Perhaps that is simply the cost of the experiment. Perhaps I have taken a maintenance problem and made it quieter. I do not know yet.

The adapter also introduces another versioned component into the route. An answer now depends on the policy passage, its document version, the retrieval settings, the prompt, the base model and whichever adapter happened to be loaded during that execution.

## The Source Link Cannot Tell Her

A manager opens an earlier response and asks which version of the policy produced one particular sentence.

The source link beneath the answer cannot tell her.
