---
layout: post
title: "The Hospital Outside the Test Set"
author: Chukwuka Orefo
display_title: "The Hospital Outside the Test Set"
date: 2015-08-01
categories:
- Machine Learning
- Clinical Research
- Data Science
- Reliability
tags:
- bias-variance trade-off
- support vector machines
- decision trees
- tree ensembles
- clinical trials
- patient recruitment
- model evaluation
- sensitivity
- specificity
- precision
- recall
- human review
- SQL
- MedCodes
description: "What did the model learn?"
image: /assets/images/posts/2015-08-01-the-hospital-outside-the-test-set/hero.jpg
---

# The Hospital Outside the Test Set

I keep finding myself back at the same hospitals under different studies. The protocols change, the clinical teams change and the wasted journey is familiar. I can spend a morning travelling across South-West London, find the ward, speak to staff and open the notes, only to discover that the patient was never eligible. Nothing has gone wrong. The judgement still had to be made. It simply didn’t have to wait until I arrived.

The first version of this problem appeared in stroke repatriation, following patients as they moved from specialist care back towards hospitals closer to home. The next role has brought different studies, but not a different geography. I’m still moving between sites, sometimes returning to the same wards for another reason. On paper the jobs are separate. In practice, the search has followed me.

The consultants and principal investigators are generous with their time, but there isn’t much of it. They have clinics, patients and studies of their own. I can’t bring them every possible record and ask them to search for the study inside it. I need to do enough beforehand that the remaining uncertainty is worth their judgement.

## Memory Lane

Nine years ago, the family computer failed and my uncle installed Ubuntu because we had lost the Windows disc and couldn’t easily afford another one. I put a lot of effort into learning Bash and enough Python to make the machine do the ordinary things my sister and mum needed. I remember wondering when I would ever use any of it. I’m beginning to see one answer.

The recruitment tool has grown in the hours it gives back. The studies still have to run, patients still have to be approached properly and notes still have to be checked. I solve one piece, remove a little repetition and use the recovered time to work on the next.

## One Too Many Hospitals

The first useful version began with SQL. Every study has a protocol, and every protocol contains a rough description of the patient it is looking for. Age, diagnosis, timing, medication, procedures, clinical history and exclusions all leave traces in the electronic record. They rarely sit in one table, and they don’t always appear in the same form across hospitals. I turned those criteria into queries and MedCode lists. Stroke-related diagnoses, admissions, investigations, dates and exclusions became a broad search across the hospital rather than a manual search through one ward.

The query did not decide who was eligible. It decided which records deserved to be opened. That first pass had to be generous because missing an eligible patient was worse than reviewing another unsuitable record. I would rather bring too much forward than remove somebody before a clinician had the chance to look. The change was immediate. I no longer had to travel merely to discover whether a useful patient existed. I could search first, arrive with a smaller list and spend time where the evidence suggested the journey might lead somewhere. The hospital became visible in a different way, not as one clean database but as a set of partial records that could be brought into the same question.

SQL still reached a limit. Study criteria are combinations rather than isolated facts. A diagnosis may matter only within a certain window. One code may be weak on its own but useful beside another event. Missing information may mean absence, delay or a local workflow I’ve not yet understood. The rules could retrieve the records, but they couldn’t always tell me which ones should be read first.

## The Patients at the Margin

I started turning each possible patient into a row of features. The features included whether a code appeared, how often it appeared, how recent an event was, whether another diagnosis was present, which medication had been recorded and whether an expected field was missing. The patient was not these numbers. They were only the part of the recorded history that could be compared without opening every note.

I used k-means to see whether the candidate group contained natural neighbourhoods. Some clusters held the obvious stroke profiles, while others contained weaker combinations. A few seemed to reflect how one hospital recorded its work rather than anything clinical. That was useful because it showed the limit of similarity. The clusters could tell me which records looked alike, but not whether the likeness mattered to a study.

The labels had to come from cases that had already been reviewed. I took known eligible and ineligible records and began building a small gold standard. Some cases remained uncertain, which was honest. The consultant was still the authority, and the model received only a trace of that judgement. A [support vector machine](https://link.springer.com/article/10.1007/BF00994018) gave me the first useful boundary. It tried to separate the reviewed cases, with those nearest the margin determining where that boundary sat. Those patients were often the reason for building the tool. The obvious cases didn’t require much machinery. The difficult ones were where the codes pointed in several directions and the database couldn’t settle the matter on its own.

The first version changed my routine. By the time I travelled, I already had a shortlist. I was no longer opening notes at random and hoping the right patient happened to be visible. The model also performed well on a held-out part of the same data, and for a while that seemed like enough. Then I carried it into another hospital.

## The Split Stayed Home

The model did not collapse, which would have been easier. It continued to work often enough to look trustworthy, but its mistakes changed. Some patients it once found were now missed. Other records reached review because of patterns that mattered at the first site and meant little at the second. The model had travelled, but part of what it had learnt had stayed behind.

The original train and test split was too kind. The patients were different, but the world around them was familiar. The same coding habits, missing fields and recruitment process appeared on both sides. The test showed that the model could recognise new patients from a system it already knew. The work needed it to recognise the same clinical pattern after the system changed.

This is where the [bias-variance trade-off](https://direct.mit.edu/neco/article/4/1/1/5624/Neural-Networks-and-the-Bias-Variance-Dilemma) stopped feeling like a diagram. With too much bias, the boundary was too blunt. It found the obvious patient and missed the cases where the evidence was spread across several parts of the record. With too much variance, the model bent around one hospital’s coding habits, one consultant’s documentation style and one small sample of patients who happened to be available when it was trained. A high-bias model recognised only the textbook patient. A high-variance model recognised only the hospital that taught it.

At first, I thought the SVM had simply fitted the first sample too closely. That explained some of the problem, but not all of it. The second hospital was not merely more data. It recorded the same work differently. The model could fail because it had learnt too much from the sample, but it could also fail because the world outside the sample had moved. The SVM had shown that a boundary could reduce the search. It had also shown that one boundary might not be enough for several hospitals and several studies. Towards the end of that role, I began looking more closely at decision trees and ensemble methods. I’m carrying those experiments into the present work while still returning to some of the same sites. The pipeline is no longer being asked to survive one change. It is being asked to survive several at once.

## The Forest Between Hospitals

A decision tree feels natural because a study protocol already contains branches. The diagnosis is either present or absent. The event is recent enough or it isn’t. The patient is inside the age range or outside it. An exclusion applies or it doesn’t. The tree is also visible. I can follow a branch and ask whether the route makes clinical sense, which matters because the output is not a recruitment decision. It is a case I can take to somebody whose judgement carries more weight than the model.

The trouble is that one tree carries too much authority. A small change near the root can rearrange every branch below it, and a tree can look sensible while remaining unstable. I began testing ensembles of decision trees rather than asking one tree to hold the whole boundary. Several trees could contribute to the final ranking, making one local split less powerful. One tree may become attached to a quirk of one hospital. A forest is harder to move with one branch.

The study logic remains outside the model. SQL and MedCodes still create the broad cohort. The ensemble ranks the records inside that search space. Each study can use the same extraction machinery while keeping its own criteria, threshold and model. The pipeline is starting to look less like a classifier and more like a small operating loop. The database search asks who might be relevant. The model asks who should be reviewed first. I read the record and assemble the evidence. The consultant or principal investigator decides whether the case really fits, and that decision returns to the gold standard.

Nothing is being decided on its own. The model narrows the field without inheriting the authority of the people using it. The ensemble behaves better, but it exposes another mistake. Improving the classifier is not the same as making the pipeline reliable. A tree ensemble can still inherit the assumptions in its data, become stale when codes change or behave differently when a new study changes the population. A better model can still fail quietly, which means the evaluation has to move with the work.

## The Wrong Kind of Right

Accuracy is the number everybody understands. I understand why. It gives one answer and appears to settle the matter. Only a small proportion of patients in a hospital will be eligible for one particular study, so a model can label almost everybody unsuitable and achieve high accuracy while finding almost nobody. The number is right. The system is not.

After the second site, I stopped reading accuracy on its own. The practical question was no longer simply how often the model was correct, but which kind of error the work could survive. I now keep sensitivity beside it. In machine-learning language this is recall, though the clinical meaning is more direct. It asks how many genuinely eligible patients reach the shortlist. A false negative disappears before review, and no consultant can recover a patient who never reaches the list. Precision asks how many of the records I present are genuinely plausible. Low precision creates travel, note review and requests for clinical time that lead nowhere. If every record still needs a long investigation, the model has moved the work rather than reduced it. Specificity tells me whether the pipeline is actually narrowing the hospital. In a large population, a small loss of specificity can create a large amount of unnecessary work.

These measures move when the threshold moves. Lowering it finds more possible patients and raises sensitivity, but admits more false positives. Raising it protects review time while risking the uncommon patient near the boundary. A recent paper on imbalanced classification argues that the [precision-recall plot can be more informative than the ROC plot](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0118432) when positive cases are rare. That fits what I’m seeing. A strong overall result can still hide the patients being lost. There is no universal threshold that solves this. The protocol, the prevalence of eligible patients, the time needed to review another record and the consequence of missing a participant all change the balance. The threshold therefore remains a clinical and operational choice. The model proposes a shortlist. I check the evidence and take the uncertain cases to the consultant. Their judgement closes the loop.

The reviewed cases are becoming more valuable than the first model. I keep known eligible and ineligible records as a gold standard, and every change to the features, classifier, ensemble or threshold has to face the same cases. A version that improves accuracy while missing patients we already know about is not an improvement. The test set also has to become less comfortable. I’m beginning to compare performance by site and by time rather than trusting random splits on their own. The next useful test is another hospital, not another shuffle of the same one. The question is no longer whether the model can repeat its past. It is whether the boundary survives a change of setting.

## What Travels

The system I’m using now is not one clever classifier. It is a sequence of different kinds of judgement. SQL and MedCodes search broadly. Patient features make the records comparable. An SVM or tree ensemble ranks the possible cases, depending on the study. I review the evidence. Clinical experts decide what the model cannot. The gold standard tests whether the boundary still travels.

The first model gave me a good answer because I had asked it an easy question. The pipeline is becoming useful because the test has become harder. A model can learn the patient, the study or the hospital. Evaluation is how I’m beginning to tell the difference. A new protocol, a revised code list, another hospital or a fall in sensitivity can all make yesterday’s model inappropriate today. When the shortlist and later clinical decisions begin to separate, that disagreement becomes the signal. Sometimes the threshold moves. Sometimes the features change. Sometimes a study needs its own model. Sometimes the model should be abandoned.

At the moment, I can search before travelling, arrive with a smaller set of records and use consultant time for the cases where judgement matters. The pipeline has become more than the private shortcut it started as, but it is still easier for me to use than to hand over. The people around me have clinical expertise of their own. They should not have to learn SQL, Python, support vector machines or ensemble methods to use the result safely. The work has begun to travel farther than I can. The next problem is making sure it can travel without me.

