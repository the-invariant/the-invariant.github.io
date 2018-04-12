---
layout: post
title: "Building Trust in AI Part III: Trusting the Algorithmic Prediction and Outcome"
author: Chukwuka Orefo
display_title: "Building Trust in AI Part III: Trusting the Algorithmic Prediction and Outcome"
date: 2018-04-12
categories:
- Artificial Intelligence
- Governance
- Machine Learning
- Technology
tags:
- explainable artificial intelligence
- algorithmic transparency
- LIME
- model interpretation
- human machine interaction
- decision support
- accountability
description: "What kind of explanation makes a prediction safe to trust?"
image: /assets/images/posts/2018-04-12-building-trust-in-ai-part-iii-trusting-the-algorithmic-prediction-and-outcome/cdn-image-01.jpg
---

# Building Trust in AI Part III: Trusting the Algorithmic Prediction and Outcome

![](/assets/images/posts/2018-04-12-building-trust-in-ai-part-iii-trusting-the-algorithmic-prediction-and-outcome/cdn-image-01.jpg)

A prediction arrives without a history. The model says that a patient probably has influenza, that a loan should be refused or that an image contains a tumour. The result may be accurate, but the person receiving it still has to decide whether to act.

This is where trust becomes difficult. A number can be precise without being intelligible, and a classifier can perform reliably across a test set while remaining impossible to question in the moment that matters. The demand for transparency begins there.

## The Mind Behind the Answer

It is tempting to imagine that human decisions are transparent and machine decisions are not. Human thought isn’t that orderly. We often act before we can explain why, then assemble reasons afterwards from memory, habit and the need to make the decision coherent to ourselves and other people. Neuroscience still cannot trace every thought from synaptic activity to conscious experience.

Cooperation remains possible because people don’t need complete access to one another’s minds. We use language, behaviour, reputation and social cues to build a workable estimate of what another person knows and intends. The explanation is partial, but it gives the decision a surface that can be questioned.

Artificial intelligence needs a similar surface. The aim is not to expose every calculation inside the model, but to provide enough information for a person to understand what influenced the result, where the model may be uncertain and when its judgement should be challenged.

## Lost in Translation

A machine learning system can process combinations of variables that no person could inspect at once. Its internal representations may separate cases through patterns for which ordinary language has no compact name. This is part of the system’s value, and also the source of the problem.

Any explanation has to compress a high-dimensional calculation into a form that fits human attention. Some detail will always be lost. The harder question is whether the missing detail changes the meaning of the decision.

Natural language may help, but fluency is not the same as faithfulness. A system can produce a clear sentence that sounds like a reason without showing what actually drove the prediction. The more human the explanation appears, the easier it may become to trust the performance rather than inspect the evidence. An explanation is not a translation of the whole machine. It is an interface between two different ways of representing the same event.

## Three Questions

Several different demands are often hidden inside the request for an explanation. The first asks how the model works in general. Which variables does it use, what kinds of pattern can it learn and where was it trained?

The second asks why it produced this particular prediction. Which parts of this patient record, image or application moved the result? The third asks why the resulting outcome should be accepted. Is the prediction accurate enough for this decision, does the proposed action follow from the evidence and what happens if the model is wrong?

These are not the same question. A description of the architecture may explain the mechanism without explaining one prediction. A list of influential features may help explain the prediction without justifying the action taken afterwards. Trust depends on keeping those questions separate.

## A Map Around One Point

In 2016, [Ribeiro and colleagues](https://arxiv.org/abs/1602.04938) introduced a model-agnostic method for explaining individual predictions. Their approach, known as LIME, examines how a classifier behaves near the case being explained. It perturbs the input, observes how the prediction changes and fits a simpler interpretable model around that local region.

![](/assets/images/posts/2018-04-12-building-trust-in-ai-part-iii-trusting-the-algorithmic-prediction-and-outcome/cdn-image-02.png)

*Figure 1 Ribeiro et al 2016*

The original classifier doesn’t have to be simple. It may be a random forest, a neural network or another model entirely. LIME treats it as a system that can be queried, then builds a small local map around one decision.

The map is not the territory. A local explanation does not reveal the full model, describe what happens far from the case being examined or prove that the highlighted relationship is causal. It shows which visible parts of the input were most influential in the model’s behaviour nearby. That may still be enough to make the prediction examinable.

## The Patient and the Flu

Imagine that a neural network examines a patient record and predicts influenza. An explanation may show that headache and sneezing supported the prediction while the absence of fatigue counted against it.

![](/assets/images/posts/2018-04-12-building-trust-in-ai-part-iii-trusting-the-algorithmic-prediction-and-outcome/cdn-image-03.png)

*Figure 2 Ribeiro et al 2016*

The doctor now has something more useful than a score. Those features can be compared with the patient’s history, the prevalence of influenza and other possible diagnoses. A strange influence can be noticed, a missing symptom weighed and the model’s conclusion accepted, rejected or investigated further.

The explanation does not replace clinical judgement. It gives clinical judgement somewhere to begin. That is the practical value of explainability. It turns an answer into an object that can be handled.

## The Persuasive Explanation

There is a danger inside that success. A good explanation can make a prediction easier to trust, but that doesn’t guarantee the explanation is faithful to the model.

The explanation may be unstable and change when the input moves only slightly. It may highlight features that correlate with the prediction without capturing the deeper boundary that produced it, or remain accurate near one case while becoming misleading elsewhere. It can also become a form of theatre. A polished explanation may reassure the user because it sounds sensible, not because it has been tested against the model’s behaviour. The black box remains. A convincing story has been placed in front of it.

The explanation therefore needs its own evaluation. Does it remain stable under small changes? Does removing a supposedly influential feature alter the prediction as expected? Does the explanation help a person notice when the model is wrong? Comprehension is not enough. The explanation must remain connected to the machine it claims to describe.

## From Prediction to Outcome

Even a faithful explanation cannot settle the final decision on its own. A model predicts and an organisation acts. Between those events lie policy, resources, incentives and human values.

A prediction that someone is likely to default does not decide whether a loan should be refused. A prediction that a patient is at high risk does not determine which treatment should be withheld or offered. The model describes a pattern under particular assumptions. The outcome introduces a choice about what should happen next.

Accountability cannot be delegated to the explanation. Someone must still own the decision, record how the model was used and provide a route for challenge when the result causes harm. The machine may help us see more. It cannot decide what the sight obliges us to do.

## The Glass Between Us

Trust does not require complete transparency. Complete transparency may not be possible, and raw access to every internal calculation would not necessarily make the system understandable. What matters is whether the boundary between the model and the person can support scrutiny.

The user should be able to ask what shaped the prediction, what would have changed it, where the model is uncertain and whether the case resembles the data on which it learnt. The explanation should make disagreement possible rather than merely making the output easier to accept.

An explanation is not the mechanism. It is the glass placed between the mechanism and the person expected to act. Trust begins when the glass can be tested.

