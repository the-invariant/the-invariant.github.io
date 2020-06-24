---
layout: post
title: "A Tower of Borrowed Voices"
author: Chukwuka Orefo
Author: "Chukwuka Orefo"
display_title: "A Tower of Borrowed Voices"
date: 2020-06-24
categories:
- AI
- Machine Learning
- Infrastructure
- Data
tags:
- GPT-3
- language models
- OpenAI
- Common Crawl
- data ownership
- copyright
- memorisation
- digital labour
description: "A June 2020 reflection on GPT-3, arguing that the important question is not only whether a machine can write, but what it means to build a private system from borrowed public language."
image: /assets/images/posts/2020-06-24-a-tower-of-borrowed-voices/hero.jpg
---

# A Tower of Borrowed Voices

A paper appeared a few weeks ago describing a machine that can write. On 11 June, a gate opened on the internet. Not a public square exactly, but a controlled doorway. You send text in and text comes back. The company calls it an API, which is the correct technical word, although the thing behind it feels stranger. It is not a search box, a database query or a normal program waiting for one fixed instruction. It continues language.

The paper gives the largest model a name and a size. GPT-3, with one hundred and seventy-five billion parameters. It is an autoregressive language model trained to predict what comes next, a description plain enough to hide the scale of what has happened. A word enters. Another follows, then another. The machine has no face, room, childhood or private memory of its own life, yet the line it returns can sound as though something understood the question. ([GPT-3 Paper][2])

That is the first danger in reading this moment. The interface pulls attention towards the answer because the answer is where the illusion appears. Smooth prose makes us look for a speaker. Style makes us look for a mind. A convincing paragraph makes us ask whether the machine is intelligent, although that may not be the first question worth asking. The older and more material question is what the tower is made from.

Imagine a structure reaching towards the heavens, built not from stone but from words taken from countless tongues. Each brick carries a borrowed voice. Books, code, forums, arguments, songs, jokes, questions, grief, labour and memory are compressed into a machine whose output seems to speak with one voice. The image is not only metaphor. The paper describes training data drawn from a filtered version of Common Crawl, expanded WebText, two internet book corpora and English-language Wikipedia. It also describes filtering and deduplication because the builders know the masonry is uneven. They are sorting through the sediment of the internet, looking for material that can hold weight. ([GPT-3 Paper][2])

Common Crawl is a strange phrase to pause on. It suggests common ground, common land and common language, but the result is not common in the same way. Once the text has been gathered, filtered, tokenised, weighted and placed behind an API, the scattered material becomes part of a private system. The words began across public and semi-public life. They return as a service.

## Visible Is Not Ownerless

There is an obvious defence. Much of the text was publicly visible, and the builders did not simply copy a shelf of books and sell the shelf back to us. They collected, cleaned, deduplicated, tokenised, trained and built the machinery required to serve the result. A pile of text does not become GPT-3 by accident. There is labour in the transformation, and new value has plainly been created.

Visibility, though, is not the same as surrender. A sentence placed on the web was not necessarily offered as machine feed, and a public page does not become ownerless because a crawler can reach it. Engineering creates something new without causing the origins of the material to disappear. At this scale, it may simply make those origins harder to see.

That is the part I find difficult. The system is not useless, and it is not magic. It sits in the less comfortable space between them. It is useful enough to sell, opaque enough to misunderstand and fluent enough to invite projection. It is also built from material whose status was never properly settled before the machine began learning from it.

Language and computation are often treated as separate things. Here, language is the substrate. The model does not process text only in the way a compiler processes source code or a search engine indexes documents. Training changes the model according to statistical structures found across the corpus, and the resulting system produces new language bearing the shape of that transformation. Calling it a writing machine is therefore both true and incomplete. It writes because others wrote first.

The clean version of the story says that the model learns patterns, which is correct, but the word *learns* can make an unfamiliar industrial process sound comfortably human. A student learns from books. A musician learns by listening. A child imitates the people nearby. GPT-3 was trained across hundreds of billions of tokens by machinery capable of absorbing material at a scale no reader could approach. It does not remember or understand as a person does, but traces of the material can still survive inside the capability that training produces.

The paper acknowledges one technical edge of this problem through its discussion of benchmark contamination and memorisation. The training set is large enough to include material overlapping with tests intended to measure the model, so the authors compare evaluation examples against the pretraining corpus and remove likely contamination. This is a technical safeguard, but it exposes a wider uncertainty. Once the corpus becomes too large for any person to inspect, the boundary between learning a general pattern and carrying a particular trace becomes difficult to locate. ([GPT-3 Paper][2])

That boundary will matter beyond benchmarks. It matters to authors, programmers, translators and people whose posts, manuals, repositories, papers and questions became part of the material. Exact copying is merely the easiest case to identify. The more difficult transformation happens when a voice becomes a pattern, the pattern becomes a capability and the capability becomes a product.

The API makes that chain feel clean. OpenAI describes a general-purpose text-in, text-out interface. The phrase is accurate, but it compresses almost everything that made the interface possible. Text goes in from the user and comes back from the model, yet a much larger body of text entered before either event. The public sees the narrow pipe. The wider river is upstream. ([OpenAI][1])

Fluency is not thought. A convincing answer can exist without a self carrying the burden of judgement, just as a mirror can reflect a face without becoming a person. Still, a mirror placed at the centre of a city changes how people stand. GPT-3 feels like that kind of object. Not a mind in the old sense and not an ordinary database, but a compressed chamber of human expression wired to a commercial door.

This is why the ownership question arrives before the consciousness question. Consciousness is dramatic. It lets us ask whether a ghost has appeared inside the machine. The immediate problem is less theatrical. Some of the language used to build the model was written for money, some for teaching, pleasure, grief or argument. Some appeared under licences. Some was placed online with an expectation of public reading rather than industrial absorption. The model need not possess an inner life for those origins to matter.

Calling the voices borrowed does not settle the legal question. Human culture has always developed through earlier speech. Writers are made partly from other writers, and engineers inherit manuals, code, bugs and decisions left by people they may never meet. The analogy breaks if human learning and model training are treated as the same process. A person encounters a limited set of works through a life and remains accountable for what they later produce. A training pipeline collects at industrial scale, transforms language into parameters and allows the resulting capability to generate repeatedly for other people.

Scale changes the shape of the question. One quotation remains visible. An influence can sometimes be named. Millions of scraped fragments become infrastructure. The source is no longer presented beside the output, and the capability can be sold independently of the people whose expression helped form it.

If this approach works, larger versions will follow. They will gather more text and code, then perhaps images, speech and other records of human activity. Each medium will bring the same questions in another form. Was the material merely visible, or available to be absorbed? Did access imply permission? Does transformation erase obligation? Who benefits when dispersed human work becomes a machine capable of performing parts of that work at scale?

I do not think we have the language for this yet. Copyright law has words for copying. Software licences have words for reuse. Data-protection law has words for personal information. None fits comfortably around a model trained on the residue of human expression. It is not a library because the reader cannot reliably return from an answer to its sources. It is not a quotation because the source has disappeared. It is not memory because the machine has no lived continuity. It is not theft in the simple sense because nothing obvious has been removed from the original page. It resembles extraction, though the material is language rather than land.

Perhaps that is why the tower keeps returning. Builders naturally speak about height through larger models, better performance, more tasks and greater generality. The upward movement is easy to admire. The masonry remains below. A tower made from unstable stone is not redeemed by reaching higher, and one made from other people’s words carries those people inside its walls even when their names can no longer be read.

The immediate engineering problem is how to make the system better. The deeper problem is how to account for what made it possible. If the model becomes valuable by learning from collective language, the commercial product does not stand apart from the public commons. It reorganises part of that commons into privately controlled capability.

That does not mean the work should stop. It means the story should stop pretending the machine appeared from nowhere. It was trained. The training required material. The material had origins, and people stood behind them.

A tower built from borrowed voices can still rise. The unresolved question is what happens when the builders start charging admission.


[1]: https://openai.com/index/openai-api/?utm_source=chatgpt.com "OpenAI API"
[2]: https://arxiv.org/abs/2005.14165 "Language Models are Few-Shot Learners"
