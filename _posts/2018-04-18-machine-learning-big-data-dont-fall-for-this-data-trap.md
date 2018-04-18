---
layout: post
title: "Machine Learning & Big Data:  Don’t Fall for This Data Trap"
author: Chukwuka Orefo
display_title: "Machine Learning & Big Data: Don’t Fall for This Data Trap"
date: 2018-04-18
categories:
- Artificial Intelligence
- Machine Learning
- Data Strategy
- Decision-Making
tags:
- big data
- feedback loops
- missing data
- counterfactuals
- model governance
- human judgement
- data collection
description: "What happens when a prediction removes the evidence that could prove it wrong?"
image: /assets/images/posts/2018-04-18-machine-learning-big-data-dont-fall-for-this-data-trap/cdn-image-01.png
---

# Machine Learning & Big Data: Don’t Fall for This Data Trap

![](/assets/images/posts/2018-04-18-machine-learning-big-data-dont-fall-for-this-data-trap/cdn-image-01.png)

*Data from Star Trek caught in a trap*

A machine learning system can be correct about yesterday and still make tomorrow harder to see. Many organisations begin with the algorithm. They compare models, processors and cloud platforms before asking how the decision will change the data available later. The machinery is visible, so it feels like the place where the intelligence lives.

A useful machine learning system has three broad parts.

1. **The data**
2. **The algorithm**
3. **The machines that run it**

The algorithms and computing infrastructure can increasingly be supplied by companies such as [Amazon](https://aws.amazon.com/) and [Google](https://cloud.google.com/). The data is different. It carries the history of the organisation, the behaviour of its customers and the conditions under which its previous decisions were made. That makes data more than fuel. It is the part of the system that cannot be replaced easily by buying a faster machine.

## The Store That Closed Its Eyes

Imagine a grocery store that remains open throughout the day and night. It has reliable records showing when customers arrive and how much they spend.

![](/assets/images/posts/2018-04-18-machine-learning-big-data-dont-fall-for-this-data-trap/cdn-image-02.png)

*Data analysis of a 24-hour retail store*

The company asks a machine learning model to identify the most valuable opening hours. It finds that most sales occur during the middle of the morning and late afternoon, while the quieter periods appear inefficient. Closing the store during those hours seems rational. The recommendation follows the evidence, and the business reduces its operating costs.

Several years pass. Working patterns change, more people have flexible schedules and some begin preferring to shop late at night. The market now contains demand that did not exist, or was too small to matter, when the original decision was made. The store cannot see it because it is closed during the hours in which the new behaviour would appear.

No customers enter, so no transactions are recorded. The dataset continues to show almost no night-time sales because the organisation has removed the opportunity for those sales to occur.

![](/assets/images/posts/2018-04-18-machine-learning-big-data-dont-fall-for-this-data-trap/cdn-image-03.png)

*Missing data means missing insight*

The model has not simply missed the future. Its recommendation has helped erase the evidence of that future.

## The Missing World

The organisation can observe what happened after it closed the store, but it can no longer observe what would have happened had the doors remained open. That alternative world has disappeared from the dataset, and the absence of transactions begins to look like proof that the store should remain closed. In reality, the absence may prove only that nobody could enter.

This distinction is easy to miss because both situations produce the same number. Zero demand and zero opportunity to express demand can look identical in a spreadsheet.

A model trained on the resulting data may become increasingly confident in the original decision. Each new round of training contains more evidence from a world shaped by the previous recommendation. The system is no longer learning only from the market. It is learning from the market after the organisation has altered it, and the prediction begins writing its own training data.

## The Decision Is Part of the Dataset

Machine learning is often described as a sequence in which data enters, a model learns and a decision emerges. In practice, that sequence forms a loop. The decision changes prices, opening hours, staffing, visibility and customer behaviour, producing the next collection of data that will train the next model.

Once the system begins acting on the environment, observation and intervention become difficult to separate. Long-term machine learning strategy therefore cannot focus only on whether the current model is accurate. It must also ask what becomes unobservable after the recommendation is followed.

A fraud system may block transactions so effectively that it loses examples of how new fraud behaves. A recruitment model may repeatedly favour familiar candidates, then treat the resulting workforce as evidence that familiar candidates perform best. A recommendation system may keep showing the same kind of content until the user’s recorded preferences resemble the options repeatedly placed in front of them. The model appears to discover a pattern, although part of that pattern may have been produced by the model itself.

## Leave a Door Open

The solution isn’t to ignore machine learning. It is to preserve some way of observing what the decision would otherwise conceal. The store could keep selected late-night periods open, run temporary trials or compare similar locations operating under different schedules. None of this rejects the original recommendation. It maintains a window into the part of the market that recommendation removed.

Controlled experiments and pilot studies serve the same purpose. They preserve a comparison between the world changed by an intervention and one left sufficiently untouched to reveal what else might have happened.

The organisation also needs people who can look beyond the historical pattern. A person may notice changes in employment, transport or local behaviour before those changes appear clearly in sales data. That judgement is not a substitute for evidence. It helps reveal where evidence can no longer arrive on its own. Human oversight matters most when the machine has changed the conditions under which it will later be evaluated.

## The Cliff Beyond the Map

Machine learning today can be thought of like an early satellite navigation system. The route may be calculated correctly from the map while still leading towards a road that has closed, flooded or ceased to exist. A driver looking through the windscreen has access to information the route planner does not.

The useful response isn’t to reject navigation. It is to understand that the recommendation comes from a representation of the world rather than the world itself. The map can be precise while the road has already moved.

Data creates the same illusion. A large dataset can feel complete because it contains many rows while still excluding the exact behaviour a previous decision made impossible to observe. The danger is not only that the machine can be wrong. It can reshape the environment until the evidence begins to agree with it. The most dangerous prediction is the one that removes the evidence that it was wrong.