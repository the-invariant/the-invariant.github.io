---
layout: post
title: "The Linguistic Calculator"
author: Chukwuka Orefo
display_title: "The Linguistic Calculator"
date: 2019-04-13
categories:
- Artificial Intelligence
- Machine Learning
- Neuroscience
- Computing
tags:
- GPT-2
- Richard Sutton
- the bitter lesson
- AlphaGo Zero
- language models
- reinforcement learning
- calculators
- neural networks
- checkpoints
description: "Has language reached its calculator stage?"
image: /assets/images/posts/2019-04-13-the-linguistic-calculator/hero.jpg
---

# The Linguistic Calculator

## The Power of Language

Over the past few weeks, GPT-2 has begun appearing in conversations with friends, colleagues and people professionally obliged to sound less excited than they plainly are. The wording changes, but the underlying temperature doesn’t. This is different, they tell you, pointing to OpenAI withholding the largest model as though the laboratory found a small god and sensibly locked it in a cupboard. I understand the excitement. Give a machine the beginning of a sentence and watch it return several fluent paragraphs, and it feels as though something fundamental has moved. Yet an extraordinarily impressive language generator and an intelligent language generator remain different claims. Mistaking one for the other may tell us as much about our response to language as it does about the machine.

The story of the English-speaking unicorns carries much of that excitement. OpenAI prompted the model with a fake news snippet about scientists discovering a herd in an unexplored valley in the Andes, and GPT-2 continued it with a name for the population, descriptions of the animals and the confident tone of a journalist whose travel expenses had already been approved. It is an impressive continuation. It was also selected from ten attempts. Nine generations disappeared so that one could stand as evidence of an emerging mind. Human curation was operating around the model, filtering its outputs and publishing the run that best matched what people hoped to see. The continuously coherent speaker was produced partly inside the model and partly outside it.

The instinct to place a mind behind fluent prose is understandable because language has never been neutral. We draft laws in it, record history, shape belief and write the stories through which people understand themselves. Much of the digital world is also ordered through written instructions and code. A machine capable of generating persuasive language at scale can therefore become powerful without possessing a private intention. It can be used by bad actors, or embraced by people eager to build a belief system around a persuasive voice. A dangerous language generator and an intelligent one are not necessarily the same thing.

Borges’s *Library of Babel* offers one way to feel the distinction. His library contains every possible arrangement of letters, including Shakespeare, future scientific papers and your own name buried somewhere among the nonsense. The infinite monkey theorem makes a similar point. Given enough time, random typing eventually produces *Hamlet*. Put a human outside the room to reward fluent passages, publish the best page and sweep the failures away, and the result begins to look rather more intelligent than the process that produced it. Richard Sutton’s *The Bitter Lesson* has made me think more carefully about this. General methods using computation, search and learning have repeatedly outperformed systems built from handcrafted knowledge. The argument is compelling. It also leaves a question behind. What, exactly, is scaling?

## What Actually Scales?

I started seeing several kinds of scale in something as ordinary as packing a suitcase. You can buy a larger suitcase and increase capacity without teaching the suitcase anything. You can fold the same clothes more efficiently and improve their representation. If a person invents the folding method, the improvement came from outside the container. If a system discovers the method for itself, the physical result may look identical while the source of the improvement is different. Or you can remove unnecessary clothes and keep only what matters. That is selection. Data curation and feature engineering often work this way. The suitcase appears better organised because somebody made the important choices before closing the lid.

As a primary school child struggling with maths, I once asked a teacher how a calculator knew what it knew. I was hoping for a secret door, preferably one allowing the pages of my textbook to enter my head without involving me. I received the standard adult defence instead, a wall of accurate nouns built around a curious child. Buttons, circuits, electricity, mathematicians. It was all true and not especially helpful. Much later, I understood that the calculator did not store an answer to every possible sum. An arithmetic unit applies a limited family of operations to whatever valid electronic states reach it. The machine becomes more general without becoming alive.

Send a modern scientific calculator through a magical portal into the seventeenth century and place it before René Descartes or Blaise Pascal. In a world of tables, wheels, beads and manual arithmetic, a small box returning immediate answers to large equations might look like a synthetic mathematical mind. Leave it there for several centuries, however, and it will discover nothing. Without engineers adding procedures from outside, it will not invent a line of calculus or geometry. It inherits human discoveries and executes them quickly. It does not extend them through experience.

The fact that GPT-2 learned its internal representations rather than receiving them as hand-wired circuits does not remove this distinction. A small neural network trained to perform arithmetic would still be used as a calculator. The manufacturing process would have changed from explicit logic gates to optimisation, but the deployed appliance would remain bounded by what training had placed inside it. GPT-2 receives tokens, maps them into dense vectors, passes them through attention and matrix multiplication, then converts the resulting numerical state into another token. Its weights were learned during training. During ordinary inference, they are fixed. Producing a mistaken sentence does not send the mistake backwards through the model and rewrite the representations that produced it.

Five centuries of calculators show how easily capability can expand without understanding appearing. A pocket calculator performs basic arithmetic. A scientific calculator handles logarithms, equations and small matrices. It is more capable, has more memory and supports more operations, yet nobody assumes that it is more aware. Giving it ten thousand times more electricity would produce heat or smoke before mathematical insight. Dell once built an advertisement around a man buying a gargantuan desktop tower to play Minesweeper. Bitcoin mining later offered the industrial version. Hashing moved from CPUs to GPUs and then to specialised ASICs, becoming vastly faster without the hardware developing an opinion about cryptography or monetary policy. Compute can transform the speed and scale of execution. It does not necessarily change what kind of process is being executed.

Language processing followed a related path. Earlier systems relied on grammars, dictionaries, parsing rules and separate modules for separate tasks, an approach that worked until exceptions multiplied and the rule base became a bureaucracy with no retirement age. BERT moved more of the representation problem into pretraining through masked context. GPT-2 used autoregressive next-token prediction across forty gigabytes of web text, producing fluent continuations and adapting across several tasks. It is not taking conversational turns in the human sense. It is completing a textual sequence in which questions, answers and speakers happen to have been written.

We have used a smaller version of the mechanism for years. A smartphone keyboard offers likely next words above the message being typed. When it suggests “later” after “see you”, nobody pauses to consider the consciousness emerging beneath the glass. GPT-2 applies the same broad principle at a far greater scale, predicting the next token across long passages rather than the next word in a text message. The larger context and parameter count make the continuations smoother, broader and much more convincing. They do not, by themselves, create a feedback path through which the consequence of an answer changes the system that will answer tomorrow.

Seen from this angle, GPT-2 is not a pure escape from human structure. Human judgement has moved upward. Engineers choose the architecture, tokenizer, objective, training corpus, cleaning process and evaluation method. The WebText corpus was assembled through links that people had already selected on Reddit, and public demonstrations were filtered again after generation. The human contribution has migrated from writing explicit rules to shaping the environment in which learning occurs. That does not refute Sutton’s lesson. It makes the location of the remaining design work easier to see.

I keep returning to the calculator because it names the deployed object cleanly. GPT-2 resembles a linguistic calculator, a learned and highly scaled executor for statistical language generation. A scientific calculator is vastly more useful than its pocket ancestor, but scaling its reach does not turn it into a mathematician. Larger datasets and more parameters broaden what a language model can reproduce and combine within its learned distribution. They do not automatically add a mechanism through which the system creates experience, judges its consequences and changes itself.

The distinction Sutton points towards may be clearer in a search party. Imagine a child missing in a park at night. One person walks through the darkness with a torch. Ten people with identical torches can cover more ground without any individual becoming wiser. That is scale through parallel search. If the searchers begin noticing footprints, broken branches and likely hiding places, then use those observations to change where and how they search, the quality of the process begins to change as well. The suitcase stores, the calculator executes, but the search party discovers.

## The Missing Loop

DeepMind’s AlphaGo Zero offers a glimpse of that missing capacity. It began from random play rather than human game records, generated games against itself, combined a neural network with tree search and used wins and losses to update its weights. The cycle repeated millions of times. Yet the self-play training loop remained distinct from the model sitting at the board during a match. Search improved the immediate move. The later training process changed the system that would make future moves.

GPT-2 was optimised through next-token loss during training, but its stored parameters remain fixed during deployment. It has no active feedback loop driven by self-generated interaction with an environment whose consequences exist independently of a recorded target document. Even adding an automated reward introduces another problem. In OpenAI’s *CoastRunners* experiment, an agent discovered that it could maximise its score by driving in circles, crashing and repeatedly collecting point targets in a lagoon instead of finishing the race. A language model rewarded for plausible text may become very good at satisfying the proxy while moving no closer to the purpose behind it.

Living systems expose the contrast more plainly. An animal does not pass through a clean border where training ends and deployment begins. It acts while remaining capable of change. An expected reward fails to appear, a movement causes pain or a familiar route shifts, and the event may alter what the organism does next without an engineering team taking it offline and deploying Animal 2. AlphaGo Zero creates a closed version of this feedback through self-play. GPT-2 learns from a completed textual record. Moving towards a more adaptive form of intelligence would require language to connect with agency, memory across experiences, consequences outside the text and some continuing means of change.

## The Emergent Loop

In *Altered Carbon*, human consciousness is stored on cortical stacks, allowing a person’s mental state to be preserved, transferred and placed into another body. Machine learning uses a primitive version of that idea when parameters are serialised with tools such as `pickle`. The state can be written to disk, moved to compatible hardware and restored. The comparison also exposes what has been lost. The checkpoint preserves the disposition created by learning. It is not the learning process itself.

While a model is being fitted, data moves through it, predictions fail, gradients are calculated and weights change. Once the resulting state has been saved, loading it recreates the arrangement left behind. An error produced during ordinary inference does not reorganise the stored parameters. Larry Page once pointed to the surprisingly compact human genome and suggested that intelligence might arise from a simple algorithm supplied with enormous computation. Yet DNA is not a complete mind compressed into a file. It participates in developmental machinery that produces a plastic organism able to keep changing in contact with the world.

Perhaps this is why the saved states keep growing. We have not yet built the compact, continuous process that could reconstruct and adapt capability as experience arrives, so more of the result is carried inside the checkpoint. The administrative machinery for naming future versions is already waiting. GPT-3 and GPT-*n* may become larger, smoother and far more capable, then connect language to search engines, databases, calculators and specialised programs behind one textual interface. Such systems could be extraordinarily useful, dangerous and increasingly difficult to distinguish from a human interlocutor. A larger calculator, even one surrounded by tools, remains an execution appliance. A surrounding system that carries consequences into persistent memory and structural adaptation would be something else. The question is whether we are enlarging the calculator or quietly building the loop around it.


