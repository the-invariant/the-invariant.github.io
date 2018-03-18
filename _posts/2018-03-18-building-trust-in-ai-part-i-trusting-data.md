---
layout: post
title: "Building Trust in AI Part I: Trusting Data"
author: Chukwuka Orefo
display_title: "Building Trust in AI Part I: Trusting Data"
date: 2018-03-18
categories:
- Artificial Intelligence
- Governance
- Machine Learning
- Technology
tags:
- data bias
- selection bias
- representative data
- machine learning
- algorithmic fairness
- scientific method
- data governance
description: "What does a machine inherit when it learns from us?"
image: /assets/images/posts/2018-03-18-building-trust-in-ai-part-i-trusting-data/cdn-image-01.jpg
---

# Building Trust in AI Part I: Trusting Data

![](/assets/images/posts/2018-03-18-building-trust-in-ai-part-i-trusting-data/cdn-image-01.jpg)

A machine learning system begins with a lesson. The training data is its textbook, the labels form the answer key, and the features decide which parts of the page it is allowed to read. Before the system has fitted a model or made a prediction, somebody has already determined what experience will be available to it and what will count as the correct answer.

The machine doesn’t arrive with knowledge of the world beyond that material. It cannot know that the sample is narrow, that the records were produced under an old policy or that the answer key contains the preferences of the person who wrote it. It learns the pattern it is shown, which is why trust in artificial intelligence begins before the model.

## The Textbook Writes Back

Training data is often described as though it were raw material. It is closer to a record of previous decisions. A hiring dataset contains more than applicants and outcomes. It contains the company’s earlier ideas about who looked promising, which careers appeared conventional and whose experience was treated as evidence of ability. A lending dataset contains repayments and defaults, but it also contains the history of who was offered credit, on what terms and after which earlier judgement.

When a model learns from those records, it doesn’t merely discover a relationship between inputs and outputs. It can inherit the process that produced them. Automation takes some part of the earlier human judgement and gives it a repeatable form, which becomes dangerous when consistency is mistaken for neutrality. A decision can be applied uniformly and remain uniformly wrong.

The machine is not prejudiced in the human sense. It doesn’t need to be. A model can reproduce a historical imbalance without containing an explicit rule instructing it to discriminate, because the structure can survive after the intention that created it has disappeared.

## A Clean Model on Crooked Ground

Machine learning requires mathematical skill, but mathematical correctness is not the same as scientific validity. A model can optimise perfectly against a badly formed question, achieve impressive accuracy on a sample unlike the population where it will be used, or learn a label that was convenient to record rather than one representing the outcome that matters. The code may be immaculate. It can still be answering the wrong question.

Natural sciences have spent a long time developing methods for living with this problem. Randomisation, representative sampling, control groups, pilot studies and careful measurement exist because observation is easily distorted by the way it is collected. These methods are not obstacles placed in front of innovation. They prevent confidence from outrunning evidence, which is less glamorous than innovation but occasionally more useful.

A bias detector added at the end of the pipeline cannot repair every earlier decision. A spellchecker can catch errors in a sentence. It cannot tell us whether the novel understands the world it is describing. Bias has to be examined while the study is designed, the data is collected, the labels are created and the conditions of deployment are chosen.

## The Missing Rows

Bias is often discussed as though it were an unwanted substance mixed into otherwise clean data. More often, the problem is absence. Some people never enter the dataset. Some refuse to answer, cannot access the service producing the record or are present only through a measurement that doesn’t describe their experience accurately.

Several familiar forms of bias create these gaps.

* **Volunteer bias** appears when the people who choose to participate differ from those who do not.
* **Undercoverage** appears when parts of the population have little chance of entering the sample.
* **Non-response bias** appears when the missing answers are related to the thing being measured.
* **Convenience sampling** appears when the easiest people or records to reach are treated as though they represent everyone.
* **Measurement and label bias** appear when the recorded answer reflects the process used to observe it rather than the underlying condition.

A large dataset doesn’t repair these problems merely by becoming larger. Ten million observations from the same narrow doorway are still observations from one doorway. This is the beginning of a [data trap](https://medium.com/@chukwuka.orefo.x45/machine-learning-big-data-dont-fall-for-this-data-trap-21ebd14afc80), where the system becomes increasingly certain because it keeps encountering evidence resembling what it has already seen. The missing population remains invisible, so the model has no reason to doubt itself.

## The Past Recommends Itself

Imagine using ten years of hiring records to train a system that selects candidates for future roles. If the company historically hired more white men than women or minority candidates, its successful examples will reflect that history. The model may learn that particular schools, postcodes, job titles, career gaps or patterns of language are associated with selection, even when nobody has written a rule saying that they should be.

Removing race or gender from the input doesn’t necessarily remove their shadow. Other variables may carry part of the same social structure, allowing the system to fail in two directions at once. It can reproduce an injustice while presenting the result as technical, rejecting a person through a pattern created before they arrived. It can also narrow the organisation’s idea of talent by favouring the candidates it already knows how to recognise.

Those selections then produce the next round of training data. The preference begins to verify itself, and prediction becomes a loop. The system may continue performing well against a historical test set while losing the ability to notice that the world around it has changed. It becomes a game of [chmess](https://ase.tufts.edu/cogstud/dennett/papers/chmess.pdf), difficult and elegant inside its own rules while drifting away from the society in which those rules have consequences.

## Inherited Machinery

The same problem can enter through reusable software. Programmers depend on libraries, shared datasets and common preprocessing tools, which is one reason modern machine learning can move as quickly as it does. Reuse is necessary. The difficulty begins when inheritance becomes too distant to inspect.

A library can carry default thresholds, loss functions and assumptions about missing values. A shared dataset can preserve old labels and narrow categories. A pretrained component can begin making decisions before the developer using it understands what was learnt upstream. Convenience creates distance between the present system and the choices buried beneath it.

As these components spread, one hidden assumption can appear across many products. Several organisations may believe they have made independent decisions while inheriting the same machinery. Trust therefore requires provenance. A team should know where the data came from, how the labels were created, who is missing, which transformations were applied and what limitations appeared during testing. The model may be reusable while the evidence behind it is not.

## The View From Another Window

Bias is part of cognition. It helps people choose what to notice, what to ignore and how to act without reconsidering the whole world each time. The problem is not that humans have points of view. The problem begins when one point of view is mistaken for the population.

This is why diversity matters in machine learning, although it doesn’t automatically produce an unbiased system. It increases the chance that somebody will recognise an absence, question a label or notice that the apparently ordinary user is only ordinary from one side of the room.

The natural scientist may ask whether the sample represents the population. The engineer may ask whether the pipeline is reliable. The domain specialist may question whether the label means what the model assumes it means, while the person affected by the decision may notice that the original question was wrong. No single perspective can replace the others. The machine doesn’t need a more virtuous teacher. It needs several people able to disagree about the lesson.

## Trust Before Training

Algorithms are already entering decisions about credit, employment, travel, policing and sentencing. In these settings, an error is not merely a technical defect. It changes what another person is allowed to do, often without giving them a clear view of how the decision was produced.

Trust cannot be added after deployment through a polished interface or an assurance that the model is objective. It has to be built into the evidence from which the system learns. That means documenting the population, testing for selection effects, examining labels, recording limitations and checking whether performance changes across groups. Missing data should be treated as information about the collection process rather than as empty cells waiting to be filled without further thought.

Data is not the world. It is the trace left after someone decided where to look.

