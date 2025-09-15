---
layout: post
title: "The LLM Building"
author: Chukwuka Orefo
display_title: "The LLM Building"
date: 2025-09-15
categories:
- Artificial Intelligence
- Machine Learning
- Software Engineering
tags:
- large language models
- transformers
- attention mechanisms
- embeddings
- RoPE
- mixture of experts
- LoRA
- quantisation
- model architecture
- LLM infrastructure
description: "have you ever thought of an LLM as a building?"
image: /assets/images/posts/2025-09-15-the-llm-building/hero.jpg
---

# The LLM Building

People sometimes hear me explain a technical system through buildings, rooms and workers and decide that I must be a visual learner, which couldn’t be further from the truth. When I explain that I don’t see images in my head at all, I usually receive a slightly doubtful look as I continue guiding them through a tour involving chefs, service lifts and window-cleaning equipment. I do not see the building. I use physical locations and spatial relationships to reason about complex subjects precisely because I lack a mind’s eye. I know where the parts belong.

Entrances, floors and lifts give relationships stable positions. I can map where something enters, what acts upon it and what leaves without needing a picture. Standard transformer diagrams rarely remain assembled for long once I step away from the page. The abstract labels detach and begin floating independently. Embeddings. Attention. Residual connections. An MLP apparently operating somewhere off-site. A physical building gives those concepts fixed spatial logic, so I use a building.

## The Tour

Stand outside first. The building occupies a finite plot of land. It is large, expensive to operate and must fit somewhere while it is working. If it becomes too large for one plot, part of it may have to stand on another piece of land. A bridge connects the buildings so work can cross between them.

Walk through the front door. Raw ingredients arrive, are divided and labelled, then placed into the form used inside the building. Their order matters, so every tray carries information about where each ingredient belongs. On the first floor, several chefs inspect the same order. Each attends to different relationships among its ingredients. Behind them is another preparation room where what they gathered is transformed more deeply. The result enters a service lift.

The next floor receives the altered order. Another group of chefs examines it, another preparation room changes it, and the revised state returns to the lift. The same broad pattern repeats as the order rises. The material reaching the tenth floor is no longer what crossed the entrance, although the earlier state has not been discarded and recreated from nothing.

Not every kitchen is staffed in the same way. Some lead chefs have private preparation teams. Some share one team across the floor. Others work in groups with shared staff. Some chefs can inspect every ticket, while others receive selected parts of a large order. One floor may open a hatch into another building and use material prepared there. On certain floors, several specialist kitchens replace the general preparation room, with a router deciding which specialists should handle each part of the order.

The main lift continues upwards. Some designs have more than one lift. Other buildings maintain a records room so a later floor can request selected preparations from earlier floors rather than accepting only the accumulated load currently in the carriage. Outside, window-cleaning cradles move along the walls and attach small additional mechanisms to chosen floors without rebuilding the storey.

At the top is a restaurant. The final preparation is converted into one new item. That item is served, added to the existing order and carried back through the front door. The journey begins again. That is the building. We can now walk through it more slowly and put the names back.

## The Land Beneath the Building

The land is active memory. On a GPU, that usually means VRAM. On a CPU-based system, it means ordinary RAM. The weights need space, but they are not alone. Activations need working room. Temporary calculations appear and disappear. The KV cache grows as tokens are generated.

A checkpoint may fit on an SSD while the working building does not fit in active memory. Storage is where the plans and materials can be kept. RAM or VRAM is where the structure must stand while it operates. A model can therefore be present on a machine without being practically runnable there. The plans have arrived. There still may not be enough land to erect the building.

## Two Plots & Sharding

When the building is too large for one plot, it can be divided across several. Imagine two sections of the tower standing on separate pieces of land with a bridge between them. Work moves through the first section, crosses the bridge and continues through the second. That is the basic shape of sharding.

Pipeline parallelism may place different groups of floors on different devices. Tensor parallelism may divide the calculation inside one large room. Expert parallelism may distribute specialist kitchens across several locations. The exact split changes, but the pressure remains. The building fits because it has been divided, and anything crossing between the plots now pays for transport.

The bridge may be a high-speed device interconnect or a network connection. Either way, distance returns as communication cost. More land solves the capacity problem and creates a traffic problem, which is a fairly standard outcome of acquiring more property.

## The Loading Bay & Embeddings

The front door receives text. A tokenizer divides the input into units drawn from a vocabulary and assigns each one an identifier. A familiar word may arrive whole or in pieces depending on the tokenizer. An embedding table then converts those identifiers into vectors. The visible words have become numerical representations in the model’s working language.

Take the sentence “She withdrew cash from the bank”. By the time it leaves the entrance, every token has a vector representation. The word *bank* still supports several meanings. The words that arrived before it will begin narrowing that meaning as the order moves through the floors.

## The Order Tickets & Position

The ingredients pass through shared machinery. Their arrangement cannot be recovered merely from the fact that they are all present. A furnace is useful here, but only for one job. It explains why order must travel with ingredients processed together. It does not explain how the model represents that order. For that, the trays need marked tickets.

A positional encoding gives each token information about its place in the sequence. Without it, the same collection of token embeddings could be rearranged while appearing too similar to the model. The marks preserve sequence so that *cash from the bank* does not become interchangeable with *bank from the cash*, which would at least be an innovative financial product.

## The Turning Tickets & RoPE

Rotary Position Embedding gives the ticket marks a particular geometry. The model rotates query and key representations according to token position. When two positions are compared later, the relationship between those rotations carries information about their relative locations.

The mark on *bank* does not tell the model that the word refers to a financial institution. It tells the attention mechanism where the token sits relative to *withdrew*, *cash* and the other earlier words. Because the model is generating causally, *bank* can use positions that came before it but cannot inspect words that have not arrived. The orientation marks preserve where the available context lives. Attention will decide how much of it matters.

## The Chefs & Attention

The chefs on each floor represent attention heads. For every token position, the model produces queries, keys and values. The names sound abstract until they are given jobs. The query represents what the current position is looking for. The keys describe what the available positions offer for comparison. The values contain the information that may be carried into the revised state.

The query at *bank* is compared with keys produced from earlier positions. Those comparisons create attention scores, which determine how much of the corresponding values should contribute to the updated representation. The words *withdrew* and *cash* can therefore change what *bank* carries forwards.

An attention head is one learned view over the same order. Nobody assigns one head to financial nouns and another to riverbanks before training. The architecture supplies separate spaces in which different relationships can develop. What develops inside them is learnt from the work passing through the building.

## The Staffing Plan & Shared Attention

Multi-head attention gives query heads their own key and value heads. Each lead chef has a private preparation team. That provides more independent machinery and creates more key-value state to retain.

Multi-query attention keeps several query heads but makes them share one set of key and value heads. Several leads use one preparation team. Grouped-query attention sits between those arrangements. Query heads are divided into groups, and each group shares key and value heads.

The choice affects memory use, bandwidth and the independence available to the heads. Private staff cost more. One shared team costs less and serves everybody. Groups accept a compromise, which is often what the phrase organisational design means once the meeting has ended.

## The Selected Tickets & Sparse Attention

Dense attention allows each permitted token position to compare itself with every other permitted position. As the sequence grows, the number of possible relationships grows rapidly. Sparse attention restricts which tickets a chef may inspect. The chosen pattern may favour nearby positions, selected distant positions or learned routes.

This reduces computation and memory pressure, but an unseen ticket cannot affect that calculation. Sparse attention is not a discovery that most context is useless. It is a decision about which relationships the architecture can afford not to compute.

## The Hatch & Cross-Attention

Cross-attention uses queries from one stream while taking keys and values from another. The kitchen may receive material prepared by an encoder, an image tower or another subsystem. The current chefs retain their own order while consulting another department’s output.

The hatch keeps the sources distinct. One system contributes context to another without becoming the same stream. The material can cross the opening while the two buildings retain different jobs.

## The Back Room & the MLP

After attention has mixed information between positions, the representation enters the deeper preparation room. This is the feed-forward network, usually called the MLP.

Attention determines which information should meet. The MLP applies a learned transformation to what each token position now contains. Much of a transformer’s parameter capacity can live in these rooms. Attention receives more publicity because the heads are easier to draw. The back room continues working without requiring a public profile.

## The Specialist Kitchens & Mixture of Experts

A mixture-of-experts layer replaces one general preparation room with several experts. A router examines the incoming token representation and selects a small subset of specialists. The entire expert population belongs to the model, but every expert does not participate in every calculation. Total model capacity can therefore grow without activating all of it for each token.

The signs on the kitchen doors should not be taken too literally. One expert is not necessarily French and another Python. Their learned specialisations may not align with categories that people would find convenient, or even recognise.

## The Main Lift & the Residual Stream

The central service lift is the residual stream. Each transformer block receives the current hidden state, computes a contribution and adds that contribution back. The next block inherits what came before along with the new change.

The word *residual* can make the stream sound like leftover material. It is closer to the route that preserves continuity through the model. A floor does not begin with an empty tray. It receives the accumulated state and revises it. One token representation can therefore change through many layers without losing every earlier contribution whenever a new block begins.

## More Than One Lift

Some architectures preserve more than one residual stream. In the building, separate lifts carry different forms of state. The information does not have to be forced into one carriage before every floor can use it. Multiple streams can preserve different channels of computation or allow separate paths to develop through depth.

More lifts do not automatically improve the building. They create another routing and coordination problem. Their presence does reveal that a single residual stream is an architectural choice rather than a law of nature.

## The Records Room & Attention Residuals

Attention Residuals adds another route through depth. A standard residual stream carries an accumulation of earlier outputs, and later layers receive the blended state produced so far. With Attention Residuals, the current layer can attend over outputs from earlier layers using learned, input-dependent weights. It can draw more from one earlier preparation and less from another.

The records room holds those earlier floor outputs. A later floor requests what it needs instead of accepting only the current contents of the main lift. The point is not that somebody downstairs forgot the salt. The current floor is selecting among earlier states because different inputs may benefit from different paths through depth.

## The Window Cleaners & LoRA

The cradles outside the building represent LoRA adapters. The pretrained weights remain frozen. Smaller trainable low-rank matrices are attached to selected linear operations inside the model. A cradle can stop beside attention projections, MLP layers or other chosen machinery. It does not belong only at the roof.

When the adapter is active, selected operations behave differently. Remove it and the original building remains underneath. LoRA changes behaviour without rebuilding and storing another complete copy of the base model. The addition is small compared with the building, although the change it produces need not be.

## Refitting the Building & Training

So far, the tour has followed a building already in operation. During training, the building is still being fitted. Examples pass through it and the model predicts what comes next. That prediction is compared with the expected continuation. The resulting error moves backwards through the floors, and the weights are adjusted. The process repeats until the machinery has learnt useful transformations.

During ordinary inference, the building is already fitted. New text enters and is processed using the existing weights. The kitchens do not rebuild themselves after every order. They perform the operations training has left behind.

## The Restaurant at the Top

The final hidden representation reaches the output machinery and is converted into scores over the vocabulary. Those scores produce a probability distribution for the next token, from which the model selects one item. It does not retrieve a complete answer from storage.

The selected token is appended to the existing sequence. The enlarged order returns through the front door and climbs the building again. A classifier ends with a fixed menu of labels. A generative model keeps ordering one item at a time.

The interface shows a paragraph appearing in a box. It does not show the order entering again after every token, the lifts carrying hidden state or the chefs repeatedly reorganising what each word means. I do not see that building either. I only need to know where the order has gone and what must happen before it comes back.


