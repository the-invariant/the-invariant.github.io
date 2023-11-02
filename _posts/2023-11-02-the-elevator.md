---
layout: post
title: "The Elevator"
author: Chukwuka Orefo
display_title: "The Elevator"
date: 2023-11-02
categories:
- Artificial Intelligence
- Software Engineering
- LLM Infrastructure
tags:
- large language models
- LLM serving
- continuous batching
- dynamic batching
- fixed batching
- token streaming
- autoregressive generation
- GPU utilisation
- inference scheduling
description: "What happens when every request is forced to wait for the longest journey?"
image: /assets/images/posts/2023-11-02-the-elevator/hero.jpg
---

# The Elevator

Model serving becomes difficult to explain once the conversation fills with GPUs, queues and batches. The operational problem is simpler. Expensive hardware should process as much work as possible without leaving each user waiting indefinitely for an answer.

A hotel lift carrying couriers with warm food makes that tension easier to see. The analogy mainly describes autoregressive decoding, when the model generates one token after another. Processing the original prompt is a different phase, so it can wait outside the lift for now.

## The Tour

Imagine an old service lift with space for three couriers. Each carries a food order, but nobody knows exactly how long the journey will take. For illustration, one courier will finish after ten stops, another after eight and the third after two. The operator does not know this when the doors close.

The lift moves one stop at a time, and each active courier makes one unit of progress at every stop. After the second stop, the third courier has finished and leaves. The second leaves after the eighth, while the first remains until the tenth. Under a rigid batching system, the empty places cannot be reused during that journey. By the final stops, one courier occupies a lift built for three while new orders wait outside.

Now change one rule. Whenever a courier finishes, the operator can admit another waiting courier for the next stop. The group inside the lift changes while the journey continues. One order leaves, another enters, and the empty place becomes useful again without waiting for the longest member of the original group to finish. That immediate reuse is the important part of continuous batching.

## The Courier and the Request

One courier represents one inference request. The request arrives with a prompt and asks the model to produce a sequence of output tokens. Its final length is not normally known in advance. One answer may stop after a few tokens, while another continues for hundreds, and the serving engine discovers that a request is complete only when it reaches a stopping condition or configured limit.

A batch allows several active requests to share work on the GPU. More active couriers generally make better use of the lift, although real servers must also consider prompt length and memory use. For this journey, the important question is whether a place vacated by a completed request can be assigned to somebody else.

## Waiting in the Lobby

Before the lift departs, the server may wait briefly for more requests to arrive. This is dynamic batching. A fuller group often uses the GPU more efficiently, but the first request has already begun waiting, so the scheduler must decide whether another possible passenger is worth delaying everyone already in the lobby.

Throughput prefers a packed lift, while the first person in line usually wants the doors to close. Dynamic batching manages admission before work begins. Continuous batching manages which requests remain active after decoding is already under way, and a serving system can use both.

## The Empty Places

In fixed request-level batching, the original group remains tied together until its longest request finishes. Requests that complete early stop producing useful tokens, but their places are not immediately assigned to new work. If one request ends after ten tokens and another requires several hundred, the shorter request no longer needs computation, yet its position remains unavailable until the static batch concludes.

The lift continues moving while part of its capacity carries air. The completed user may already have received an answer, but the hardware cannot use the vacated place for the next waiting request. The waste lies in the occupancy, not necessarily in the delivery of the finished response.

Continuous batching treats the active group differently. After each decoding step, the engine checks which sequences have finished and assigns their places to waiting requests for the next step. The batch is no longer one permanent set of jobs. It becomes a temporary agreement about which requests receive compute now.

## Floor Stops

Autoregressive generation proceeds one token at a time, with each floor stop representing one decoding step. At a stop, the model produces the next token for every active sequence. The serving engine then checks which requests need another token, which have finished and which waiting requests can enter the available capacity.

The analogy bends slightly here because real requests wait in a central queue rather than on hotel landings. The location of the next courier does not matter. What matters is that a vacant place can be filled before the longest original journey ends. During decoding, the server repeatedly rebuilds the group that needs the next token.

## Updates from the Lift

Token streaming is a separate mechanism. It returns partial output to the user while generation continues. In the lift, this resembles a courier sending an update after each stop rather than remaining silent until the entire journey has ended. The customer can see progress even though the delivery is not complete.

Streaming does not determine how the lift is filled. An inefficiently scheduled server may stream tokens slowly, while an efficiently scheduled one may hold the completed response and return it all at once. Continuous batching manages hardware occupancy. Streaming manages what the user can see.

## What the Interface Hides

From the user’s position, several delays look the same. A blank screen may mean the server is waiting briefly to form a batch, the request is queued behind other work, the model is processing the prompt, generation is continuing or the network is slow to deliver the next token. The interface compresses all of those states into one pause.

Beneath that pause, requests enter, advance, finish and are replaced. A batch containing one set of users may contain another set at the next decoding step, while each person experiences one continuous answer. The next token reaches the screen only after the lift beneath it has already opened its doors and changed who is standing inside.
