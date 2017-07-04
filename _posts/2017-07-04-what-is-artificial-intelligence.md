---
layout: post
title: "What is Artificial Intelligence?"
author: Chukwuka Orefo
display_title: "What is Artificial Intelligence?"
date: 2017-07-04
categories:
- Artificial Intelligence
- Machine Learning
- Computer Science
- Technology
tags:
- symbolic artificial intelligence
- machine learning
- deep learning
- neural networks
- computer vision
- natural language processing
- reinforcement learning
description: "When does a collection of narrow abilities begin to look like intelligence?"
image: /assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-01.png
---

# What is Artificial Intelligence?

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-01.png)

Artificial intelligence is a broad branch of computer science, but the name can make the field sound more unified than it is. There is no single machine called intelligence. There are many techniques for giving computers particular abilities that once seemed to require a human mind. Some systems follow rules and manipulate symbols. Others learn patterns from examples. Some recognise speech, classify images or recommend what to watch next, while a few can act inside tightly defined environments with little immediate human direction.

The field becomes easier to understand when intelligence is treated not as one mysterious substance, but as a collection of functions.

## Three Ways the Machine Enters

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-02.png)

One practical way to organise artificial intelligence is by the role it plays in the task.

1. **Assisted intelligence** helps people do something they already know how to do. Siri and Google voice search can retrieve information, set reminders and reduce the number of steps between a question and an answer.

2. **Augmented intelligence** changes what a person or organisation can do by finding patterns at a scale that would otherwise be difficult to manage. Netflix, YouTube, Twitter and Google Search use learning systems to rank information, personalise results and adapt the experience to the user.

3. **Autonomous intelligence** carries more of the task itself. These systems can learn or act within a defined environment without a person directing every step. AlphaGo is a striking example, but it remains narrow. It can play Go at an extraordinary level and cannot transfer that ability to an unrelated problem.

Humans remain general in a way these systems are not. We can move between language, movement, memory, planning and social judgement without being rebuilt for each task. A system able to cross those boundaries with similar flexibility would be closer to artificial general intelligence. That remains an ambition rather than a present capability.

## The Imitation Game

The easiest way to map the field is to begin with the things humans do, because many areas of artificial intelligence are named after the faculty they try to reproduce.

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-03.jpg)

*speak no evil see no evil hear no evil*

We speak and listen, which machines approach through speech recognition and speech synthesis. We read and write, which becomes natural language processing. We inspect the world through our eyes, while machines receive pixels and attempt to recover whatever those pixels contain.

Image processing and computer vision are related but not identical. Image processing changes the image itself by sharpening it, filtering it or altering its pixels. Computer vision tries to infer what the image contains.

We also move through physical space. Robotics joins perception to action by giving a machine sensors, a body and some method for deciding what to do next. Pattern recognition runs through these fields. A person can notice that two faces, sounds or situations belong to the same class, while a machine can search for similar structure across far more examples and dimensions than a person could inspect directly. Machine learning is one of the main ways this ability is built.

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-04.png)

*AI family tree with symbolic learning on the left and machine learning on the right*

## Two Roots

Artificial intelligence has developed along two broad lines. The symbolic approach represents knowledge explicitly. A programmer defines rules, facts and relationships that the system can use to reach a conclusion. Expert systems are a familiar example. Their strength is that the reasoning can often be inspected. Their weakness is that the world contains more exceptions than anyone can comfortably encode.

The statistical approach learns from data. Instead of writing every rule, we give the system examples and let it estimate the patterns connecting an input to an output. This is the territory usually described as machine learning.

The two approaches are often presented as rivals, but they solve different parts of the problem. Rules are useful when the structure is known and precision matters. Learning becomes useful when the structure exists in the data but is too complicated to describe by hand.

## The Brain as a Borrowed Map

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-05.png)

*The digital brain human + AI*

The human brain is a network of biological neurons. Artificial neural networks borrow a very loose version of this arrangement by connecting simple mathematical units and adjusting the strength of the connections between them. They aren’t small digital brains. The resemblance is an organising idea rather than a faithful copy, and what matters is that the network can be trained to respond differently as it is exposed to examples.

When several layers are placed between the input and the output, the system can learn increasingly abstract representations. This is the basis of deep learning.

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-06.png)

*Dense deep neural network on right side*

Different network structures place different constraints on how information moves. A convolutional neural network examines local regions of an image and reuses the same filters across the visual field. This makes it useful for recognising shapes, textures and objects without treating every pixel as unrelated to its neighbours. A recurrent neural network carries information from one step of a sequence into the next, giving it a limited memory of what came before and making it useful for language, speech and other ordered data.

![](/assets/images/posts/2017-07-04-what-is-artificial-intelligence/cdn-image-07.png)

*collection of neural networks by Fjodor van Veen*

These diagrams look like different machines because they are. The architecture determines what kind of structure the system can notice easily. A network designed for images does not see time in the same way as one designed for sequences.

## Learning From the Answer

Machine learning systems usually learn through one of three broad arrangements. In **supervised learning**, the examples include the answer. A collection of photographs might be labelled with the names of the people they contain. The system learns the relationship between the image and the label, then applies that relationship to an image it has not seen before.

In **unsupervised learning**, the data arrives without an answer. The system searches for clusters, recurring structures or unusual cases. It may reveal groupings that were not specified in advance, although a person must still decide whether those groupings mean anything useful.

In **reinforcement learning**, the system acts, receives feedback and adjusts its behaviour. A robot attempting to cross an obstacle may try many actions and gradually favour the ones that move it closer to the goal.

The outputs of these systems often appear as classification or prediction. A model may assign a customer to a group, estimate the probability that the customer will leave or predict a numerical value such as future demand. The form changes, but the underlying act remains similar. The system uses a pattern learned from previous examples to make a judgement about something new.

## Intelligence in Pieces

Artificial intelligence is not one technology moving steadily towards a mechanical person. It is a field built by separating human abilities into smaller computational problems. Speech becomes a signal. Vision becomes pixels. Memory becomes state. Judgement becomes a score. Action becomes a policy.

Each reduction makes a particular ability easier to engineer. When enough of those abilities are placed behind one interface, the system can begin to look whole. That appearance is useful, but it can also mislead. A machine may speak, recognise a face and recommend a decision without possessing a single general understanding that joins those acts together. The intelligence may be real within each task while remaining fragmented across the system.

The question is not only how intelligent machines can become. It is how many pieces of intelligence can be assembled before we stop noticing the seams.


