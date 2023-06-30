---
layout: post
title: "The Model Never Gets the Keys"
author: Chukwuka Orefo
display_title: "The Model Never Gets the Keys"
date: 2023-06-30
categories:
- Artificial Intelligence
- Software Engineering
- Data Governance
tags:
- Cerbos
- Django
- LlamaIndex
- retrieval augmented generation
- role-based access control
- least privilege
- safeguarding
- policy enforcement
- access control
- human on the loop
description: "What changes when permission is decided before the evidence reaches the model?"
image: /assets/images/posts/2023-06-30-the-model-never-gets-the-keys/hero.jpg
---

# The Model Never Gets the Keys

Recently, I’ve been building a safeguarding policy assistant for the charity. Staff, parents and managers all need information from its approved guidance, usually at awkward moments when the person who knows which document to open is not available. The aim is to let somebody ask an ordinary question and receive an answer from the current policy rather than whatever a general language model happens to remember about safeguarding.

The current version sits behind a Django web application. Policies and procedures are extracted, divided into searchable passages and indexed through LlamaIndex. When a question arrives, the application searches the collection, places several relevant passages into the model’s context and returns a readable answer with the source beneath it. The model is not expected to carry the charity’s procedure inside its weights. A policy can change in the document collection without the model being trained again.

That had solved the problem I was looking at. Earlier tests with a general model produced calm, plausible instructions containing steps the charity had never approved. Now the answer had evidence underneath it. I could open the passage, compare the wording and replace the source when the policy changed. I thought the dangerous gap sat between the model’s general training and the organisation’s local knowledge.

What I had not dealt with was that the people asking the question were not all entitled to see the same parts of that knowledge.

## Same Question, Different Rooms

A parent wants to know what happens after a concern is recorded. A member of staff asks almost the same question because they need to know what they are expected to do. A manager may need the restricted handover process behind both answers. The language changes slightly, but not enough for the wording alone to define the boundary.

## A Promise After Exposure

My first fix is to put the role into the prompt. Answer for a parent. Do not reveal staff guidance. Refuse anything outside the user’s role. It takes a few lines and produces the right-looking responses for the questions in front of me, which is convenient enough that I spend longer defending it to myself than I should.

I keep looking at the retrieved context rather than the answer. The parent-facing response is harmless, but the model has already received the staff and management material. I have given it the complete collection and then asked it to behave as though part of the collection does not exist.

The test has not leaked anything. The model is not a person secretly copying notes, and I know that comparison is doing more emotional work than technical work. The ordering is still wrong. Whatever restraint the prompt supplies begins after exposure.

## The Guard at the Other End

An output filter puts the check at the other end. It can look for restricted wording before anything is displayed, but that assumes the confidential idea will return in a form the filter recognises. The model may paraphrase it or join two harmless passages into something that is no longer harmless. By then, the evidence has crossed the boundary anyway.

## The Door Before Retrieval

Django already knows who is asking the question. It holds the authenticated session, the user’s role and the action being attempted. I move the decision there. Cerbos evaluates the principal against each document resource before retrieval begins, so the search can consider only material available to that user and task.

I open three browser sessions and ask the same question through each one. Under the parent account, the public procedure reaches the retrieval layer and the staff guidance does not. The staff account can search the operational instructions written for that role but cannot reach the restricted handover notes. The manager’s scope includes material that the other accounts never receive.

## Absence Is Result

At first, I ignore the answers. They are useful, but they are downstream. I inspect the passages placed into each prompt and compare the lists. The important result is absence. Restricted evidence is not being politely ignored. It has not entered the context.

That gives the system a boundary I can inspect. It does not make the boundary perfect. A document can be labelled incorrectly, application code can attach the wrong role and a Cerbos policy can contain a bad rule. Those failures now live in components that can be tested directly instead of depending on whether probabilistic language obeys another piece of language.

## The Boundary

A manager asks whether this means somebody must approve every response before it is shown. I can see why she asks. The student-monitoring system keeps a person inside every consequential decision, and I have spent enough time defending that arrangement for her to expect the same answer here.

Putting a manager inside every ordinary policy question would recreate part of the delay the assistant is supposed to remove. Most people are not asking the system to decide a safeguarding case. They are trying to find the approved procedure, understand what happens next or work out who they need to contact. We separate explanation from action. A routine question can proceed inside the collection allowed for that user. A higher-risk concern creates a record, prepares the handover and notifies the manager or safeguarding lead who owns the next decision.

The model may turn approved evidence into clear language inside that route. It does not decide that a concern is routine, and it cannot close a route the application has escalated. The human has not been removed. Their position has changed. Managers define the policies, set the boundaries, inspect failures, receive escalations and handle the cases that do not fit. They do not need to sit beside every ordinary transaction waiting to approve a sentence.

## The Correct Policy, the Wrong Instruction

For a while, that arrangement feels solid. The correct person searches the correct collection, the model receives only the evidence allowed for that role, and the answer points back to the approved source.

Then the parent account retrieves the correct policy and gives the wrong instruction. The rule is in the passage. The exception is in the paragraph beneath it.
