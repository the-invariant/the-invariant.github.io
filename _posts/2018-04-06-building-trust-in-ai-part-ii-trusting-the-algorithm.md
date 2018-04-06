---
layout: post
title: "Building Trust in AI Part II: Trusting the Algorithm"
author: Chukwuka Orefo
display_title: "Building Trust in AI Part II: Trusting the Algorithm"
date: 2018-04-06
categories:
- Artificial Intelligence
- Governance
- Machine Learning
- Technology
tags:
- algorithmic bias
- model evaluation
- bias variance tradeoff
- dataset shift
- explainability
- deployment context
- model governance
description: "What changes when a correct model enters the wrong world?"
image: /assets/images/posts/2018-04-06-building-trust-in-ai-part-ii-trusting-the-algorithm/cdn-image-01.jpg
---

# Building Trust in AI Part II: Trusting the Algorithm

![](/assets/images/posts/2018-04-06-building-trust-in-ai-part-ii-trusting-the-algorithm/cdn-image-01.jpg)

A machine learning model can perform well in the laboratory and still fail in the world. The code may be correct, the validation score may be high and the system may behave exactly as designed. None of that proves the design belongs in the setting where it is about to act.

Trusting the algorithm therefore requires more than asking whether it is accurate. We also have to ask what kind of error it has learnt to make, where it was tested and what changes when the surrounding world no longer resembles the data.

## The Error Inside the Average

Most models are judged by summary metrics. Accuracy, precision, recall and mean error reduce many predictions into a single number that can be compared across systems. This is useful because it makes comparison possible. It is also a form of compression.

An average can describe how the model behaves across a dataset while hiding what happens to a particular person, class or region. Two models may achieve the same overall accuracy and fail in completely different places. One might make small errors across everyone. Another might perform extremely well for the majority while failing badly for a smaller group. The headline number remains similar. The lived system does not.

Individual predictions and subgroup errors therefore deserve inspection before deployment. A model should not only be asked how often it is right. We need to know who receives the mistakes, which mistakes repeat and what those mistakes cost.

## Two Meanings of Bias

The word *bias* creates confusion because statistics and ordinary language use it differently. In statistics, the bias of an estimator is the difference between its expected estimate and the value it is trying to recover. An estimator with zero expected difference is called unbiased.

That sounds desirable, though an unbiased estimator is not automatically the best one. A model can accept some statistical bias in exchange for lower variance. Regularisation is one common example. By pulling the model away from every irregularity in a small training sample, it reduces the chance that noise will be mistaken for structure.

This is the bias-variance trade-off. The model gives up some flexibility in order to become more stable. That statistical choice is not the same as unfair treatment. A model can be statistically biased without discriminating against a group, and it can be statistically well behaved while reproducing a morally unacceptable pattern.

The words overlap. The mechanisms do not. Trust begins by refusing to let one definition conceal the other.

## The World Moves

A model learns under particular conditions. It sees a population, a measurement process and a set of available resources. Those conditions become part of the model even when they do not appear as explicit inputs. Move the model and its assumptions travel with it.

A healthcare system trained in a large research hospital may learn from patients who receive specialist tests, detailed records and rapid follow-up. Deploy the same model in a rural clinic with different equipment, staffing and patient characteristics, and the inputs may no longer mean the same thing. The model has not changed. The world around it has.

A missing laboratory result may indicate clinical judgement in one hospital and lack of access in another. A delay in treatment may reflect patient choice in one setting and resource scarcity in another. The recorded variable looks the same, but it carries a different story once the process producing it has changed.

This is often described as dataset shift. The distribution encountered after deployment no longer matches the one used during development. The system can remain internally consistent while becoming externally wrong.

## The Metric Chooses the Behaviour

Every evaluation metric rewards one kind of behaviour more than another. Accuracy treats all correct predictions as equal. Precision asks how often a positive prediction is correct, while recall asks how many of the relevant cases were found. A medical screening system may value missed cases differently from false alarms. A fraud system may tolerate inconvenience to some customers in order to prevent a large loss.

There is no neutral metric waiting to be discovered. Choosing one means deciding which error receives more attention, and that choice should come from the purpose and consequences of the system rather than whichever score is easiest to optimise.

The model inherits that decision and moves towards the behaviour the metric rewards. A system designed to maximise overall accuracy may neglect a rare but dangerous condition. A hiring model trained to reproduce previous selections may become excellent at preserving the organisation’s existing idea of talent.

The algorithm does not need to understand the value judgement. It only needs a number that points in its direction.

## Outside the Fence

A trustworthy model needs a boundary around its intended use. The documentation should state who the system was built for, which data it requires, what outcome it predicts and where performance begins to deteriorate. It should explain the training population, the evaluation metrics, the known limitations and the conditions that would make the result unreliable. This is not paperwork added after the engineering. It is part of the engineering.

Without that boundary, a successful model becomes easy to reuse in settings its designers never examined. The more convenient the system becomes, the further it can travel from the evidence that made it appear reliable.

Different disciplines and lived experiences matter because context is difficult to inspect from one position. An engineer may see instability in the pipeline. A clinician may notice that the label does not match practice. Someone from the affected community may recognise that an apparently harmless variable carries a social history. No single perspective can certify the whole system.

## Trust Has a Shape

Trusting an algorithm does not mean believing it is objective. It means understanding the shape of its competence. We should know where it was trained, which errors it makes, how those errors are distributed and what happens when the setting changes. We should be able to inspect the reasoning around important predictions and challenge the assumptions built into the metric.

A model should not be trusted because it performs well somewhere. It should be trusted only where the evidence still holds.


