---
layout: post
title: "Proof Without the Patient"
author: Chukwuka Orefo
display_title: "Proof Without the Patient"
date: 2016-07-31
categories:
- Software Engineering
- Clinical Research
- Machine Learning
- Data Governance
tags:
- ensemble learning
- local training
- distributed evaluation
- gold standard
- clinical data
- Python
- model persistence
- cloud computing
description: "Can the proof travel without the patient?"
image: /assets/images/posts/2016-07-31-proof-without-the-patient/hero.jpg
---

# Proof Without the Patient

Until recently, the training process followed me between hospitals. I ran the local query, built the features, fitted the support vector machine and ensemble, tested them against cases that had already been reviewed, then carried whatever worked to the next site. There, the same models met a different population, different coding habits and different gaps in the record. I adjusted them and kept moving.

Docker made the environment portable, but the machine beneath it kept changing. That is the problem I solved and wrote about in [Permission to Land]({% post_url 2016-06-30-permission-to-land %}). I moved the runtime into the cloud and put the browser in front of it. Routine searches no longer depend on finding the right workstation, rebuilding the environment or waiting for another installation. That part now works.

Recently, however, the dashboard metrics used at some hospitals have begun to look wrong. The service is healthy and the code is running, yet records belonging to patients already known to be eligible are slipping beneath the threshold. The shortlist is also beginning to fill with cases that do not belong there. Nothing has broken in the ordinary sense. The current model seems to be meeting local patterns and recording habits that its earlier training does not represent well enough. The cloud has given the pipeline one stable place to run, but it has also left the training process without the route it used to depend on.

## The Cure Moves the Fever

The obvious repairs all return the problem in another form. I can bring the whole runtime back down whenever the model needs correcting, which gives the training process direct access to the records but puts me back in the queue for terminals, installations and permissions. I’d be rebuilding the problem I’ve just moved out of the way. I could push patient-level records up to the cloud instead. Training becomes easier, but the service becomes another place where clinical data lives. The records are large, the approvals are not simple, and the architecture begins by asking each hospital to surrender the boundary it already has. Doing nothing is also a choice. The service remains stable while the judgement inside it becomes less reliable. One route rebuilds the workstation problem, another turns the cloud into a clinical data store, and the last lets the model decay politely.

Training and inference have always been different jobs. Carrying both of them with me made the distinction easy to ignore. The cloud has made it explicit. Search needs to remain available whenever a study or recruitment check requires it. Training only needs to happen when known eligible patients disappear from the shortlist, false positives begin to crowd it or another site reveals a pattern the current model has not yet learnt.

I’ve started treating training as a deliberate local event. When the dashboard looks wrong, I download a small training pack from the service. It contains the current model, the feature definitions and the rules needed to turn a local query into the same analytical form used elsewhere. It does not contain a patient. A Python script runs beside the hospital data, keeps identifiers apart from the features and recreates the inputs expected by the model. I could package the whole cloud environment and try to run it locally, but I don’t need the whole service merely to teach the model. The smaller worker is easier to inspect, replace and plan around when Python access still requires a ticket with IT.

The common feature definitions make the work repeatable without making the hospitals identical. A field that is dependable in one place can be sparse in another. The same clinical event may arrive through a different table or code. Running the process locally lets those differences confront the model instead of disappearing inside a central copy.

## The Test Keeps Its Answers

I currently run the live model against the local gold standard before training anything new. The dashboard tells me whether the shortlist is merely different or whether it has become worse. Overall accuracy can look fine while sensitivity slips. A model can appear healthy and still miss the patients the study exists to find.

Training the candidate on every reviewed case might improve the immediate result, but it would also consume the evidence needed to decide whether the improvement was real. A candidate that has seen the exam paper can pass without having learnt very much. I therefore keep part of the local evidence out of reach. One group of cases teaches the candidate. Another keeps the right to judge it.

I could send those held-back cases to the cloud and evaluate them there. Again, that is convenient, and again the convenience comes from moving the thing I am trying not to move. The cloud does not have any business seeing those cases. It only needs enough to know whether the candidate has survived them. A bare pass or fail is not enough either. I need to know whether sensitivity has improved, precision has collapsed or the candidate has corrected the failure that triggered the training run while creating another one nearby. The result must reveal less than the test knows, but more than a green light.

That verdict has to remain tied to one candidate, one feature order and one version of the training script. I cannot inspect the failures, alter the model and keep the earlier result as though nothing changed. The hospital retains the reviewed cases. The service receives a result belonging to the exact candidate being returned. The test keeps its answers, but sends back enough proof to support the next decision.

## One Line Is Not a Forest

Until now, I’d been using support vector machines alongside ensemble methods. An SVM gives me one fitted boundary. That worked while I was carrying the process between hospitals and deciding when to redraw the line. It is beginning to feel wrong now that several sites need to teach the live service. One hospital can pull the boundary towards its own population, then another can pull it back. I could maintain a separate SVM for every hospital, but then I would need another rule to decide which boundary applies. I could keep refitting one shared SVM, though every new fit risks making the last hospital the loudest voice in the room.

I decided to drop SVMs from the centre of the live decision and lean more heavily on ensemble methods. A single tree can attach itself to a local habit. A forest can hold several views without pretending they are the same. The point is not to join trees blindly. It is to let a hospital produce a candidate ensemble and show whether that candidate contributes something the live model lacks.

The live ensemble continues serving searches while I train the candidate locally. I could pause the service and replace the model in place, but then every experiment would become an outage. Keeping the two apart lets a poor candidate fail without disturbing the model already in use, while a promising one can be tested without being trusted too early.

Once the candidate survives the held-back cases, the local script saves the fitted ensemble with its feature order, threshold and evaluation result. The patient rows remain where they are, along with the reviewed cases and identifiers tying them to people. I’m adding another route to the service so the candidate can return. Letting every passing candidate replace the live version automatically would be easier, but a model that improves one hospital may weaken another. For now, the candidate arrives as a proposal rather than a command. It may replace the current version, fail to justify a change or reveal that the shared features still need work. The model is no longer one boundary moving from hospital to hospital. It is becoming a collection of local lessons that have survived different tests.

## The Proof Is in What Leaves

The cloud has removed the runtime from my bag. It has not removed the need for evidence held elsewhere. It has changed what needs to move. The training instructions can go to the hospital. A fitted candidate can return with the result of its test. The patient record does not need to accompany either one.

There are still trade-offs. A candidate can perform well at one hospital and weaken the model elsewhere. A summary result may conceal the kind of patient being missed. A shared feature can still bend under local recording habits. The difference is that I can now see those choices. They are no longer hidden inside a copied dataset or a model file passed from desk to desk.

The hospitals have not become one database. They remain separate places, each with its own records and test, yet the same service can learn from all of them. The model is beginning to carry the lesson without carrying the life behind it. Training is beginning to distribute. The decision is not. Every candidate still waits for me to decide whether its proof is enough.

The proof travels. The patient stays.



