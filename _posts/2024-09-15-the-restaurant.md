---
layout: post
title: "The Restaurant"
author: Chukwuka Orefo
display_title: "The Restaurant"
date: 2024-09-15
categories:
- Artificial Intelligence
- Machine Learning
- Software Engineering
- LLM Infrastructure
tags:
- PagedAttention
- KV cache
- vLLM
- GPU memory
- inference optimisation
- large language models
- memory management
- LLM serving
description: "What does an LLM conversation have in common with a restaurant?"
image: /assets/images/posts/2024-09-15-the-restaurant/hero.jpg
---

# The Restaurant

I’ve spent considerable time thinking about how to explain complex technical concepts without letting the conversation disappear into hardware jargon. When discussing GPUs, VRAM and memory allocation, abstract diagrams often fail me because they do not make the physical mechanics feel real. I need spatial logic. Fragmentation and cache management become easier to understand when they are placed inside a familiar floor plan with rigid reservation rules.

## The Dining Room

Picture a restaurant with a particularly strict floor manager. Every party must occupy one uninterrupted row of tables under a single block of table numbers, and the manager reserves enough space for the maximum group that might eventually arrive rather than the guests currently standing at the door. A party of six enters. The system allows for twenty, so the staff push a long row of tables together and leave fourteen places empty. Smaller gaps remain around the room, but another party cannot use them because those seats are already assigned to guests who do not yet exist and may never arrive.

The restaurant has capacity, but its own reservation policy makes much of that capacity unusable. Replace the fixed banquet rows with small modular tables, each carrying its own number. The first six guests receive only what they need. When more people arrive, another table can be added wherever suitable space remains. The tables do not need to stand beside one another because a seating ledger records which numbers belong to the party and the order in which the kitchen should serve them. The diners experience one reservation while the restaurant manages several scattered blocks of furniture.

## The Party and the Order

One inference request is one party. The initial prompt supplies the guests who arrive together, and every generated token adds another guest to the same logical reservation. Nobody normally leaves from the middle of the sequence. The party grows until the request completes, while the serving system preserves the history required to produce the next token and continues admitting other requests.

During autoregressive generation, the model produces one token and then uses the enlarged sequence to produce another. Attention needs keys and values derived from the earlier tokens, and recomputing them from the beginning at every step would repeat an absurd amount of work. The KV cache retains those keys and values. In the restaurant, it is the state of the order so far. The kitchen does not ask the party to repeat every previous course whenever somebody requests another item, which is generally considered good service. The cache simply grows with the sequence and is released when the request finishes.

## The Banquet Table

Under a contiguous allocation scheme, one request needs a suitable uninterrupted region of memory. Because its final output length is not known in advance, the runtime may reserve far more room than the request currently uses. The unused tail corresponds to the empty places at the banquet table, positions held for future tokens that may never be generated.

Free memory can still exist elsewhere in abundance while remaining unable to satisfy another request that requires one large continuous region. The room is not full. Its free space is merely in the wrong shape. Tokens already belonging to an active request remain part of its context until the sequence completes, so the important movement is steady growth followed by request-level release rather than individual diners leaving after the starter.

## The Modular Tables and Their Ledger

PagedAttention divides the KV cache into fixed-size blocks. A request receives more blocks as its sequence grows, and those blocks do not need to occupy adjacent physical addresses. The long banquet table has become modular furniture. More pieces can be added wherever free capacity remains, reducing the need for optimistic reservations and allowing fragmented memory to be used more effectively. The logical sequence has not changed. Only its physical arrangement has.

Breaking memory into smaller pieces is not enough by itself. The runtime must still know which blocks belong to each request and the order in which they should be read. The block table is the seating ledger. It maps logical token positions onto physical cache blocks, allowing attention to see one ordered sequence even when the underlying memory is scattered across the floor. Continuity belongs to the map, not the furniture.

## What Has Not Been Compressed

PagedAttention is sometimes discussed beside other memory-saving methods, which can make it sound as though the numerical cache has been compressed. That is not what has happened. The keys and values have not automatically been represented with fewer bits, and the tables have not become smaller. The runtime has changed its allocation policy.

Quantisation changes numerical representation, while PagedAttention changes physical organisation. Both may reduce memory pressure, but they solve different problems. One changes how much space the values require. The other changes how the available space may be assembled into a usable reservation.

## Shared Reservations

Some serving arrangements allow requests with a shared prefix to refer to the same cache blocks until their sequences diverge. In the kitchen, two parties may order the same standard starter, such as a platter of roast chicken legs. The chefs do not need to roast two separate birds from the beginning when both orders can draw from the same prepared batch.

The physical state representing the shared beginning does not need to be duplicated immediately. Once one party requests a different sauce or an additional side, its order requires separate preparation. The logical histories remain distinct even while part of their physical state is shared.

## The View From the Dining Room

PagedAttention does not create memory from nothing. It allows existing memory to be used without forcing every logical sequence into one physically continuous shape. The restaurant still has a fixed number of tables. It has simply stopped reserving long empty rows for guests who may never arrive.

From the user’s position, the request remains one uninterrupted conversation. Nothing in the answer reveals that its retained history may be stored across blocks scattered through physical memory and joined through a ledger. The continuity was never in the tables.


