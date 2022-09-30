---
layout: post
title: "The Summary ==! Record"
author: Chukwuka Orefo
display_title: "The Summary ==! Record"
date: 2022-09-30
categories:
- Machine Learning
- Natural Language Processing
- Data Ethics
tags:
- BART
- Pegasus
- summarisation
- hierarchical summarisation
- context windows
- clinical abstraction
- evidence preservation
- case reports
- human review
- document retrieval
description: "What does a summary decide before the next question exists?"
image: /assets/images/posts/2022-09-30-the-summary-is-not-the-record/hero.jpg
---

# The Summary ==! Record

A manager opens a case that the monitoring dashboard has brought forward. The row is amber, but the colour is only the beginning of the work. Attendance sits in one part of the platform, EHCP measures in another, while months of reports hold the incidents, changes in routine and small observations that might explain why the pattern has moved.

She scrolls through the reports and asks whether the application can show the important parts. I ask what important means for this case. Her expression suggests that I have returned the problem to her, which I have.

There are several cases to review and one afternoon in which to review them. Reading every report preserves the record, but it also makes the process depend on how quickly one person can move through months of repeated text. The dashboard has improved where attention begins. It has not reduced the evidence waiting behind the colour.

## Joins Disappear

I begin testing BART and Pegasus as part of a hierarchical summarisation pipeline. The reports are too long to pass through in one piece, so the text is divided into sections. Each section is reduced, then those reductions are brought together and reduced again into an overview.

The first results are better than I expect. Repeated observations contract. Events separated by weeks sit beside one another. Managers can orient themselves without returning to the first report every time, and the language is smooth enough that the joins are difficult to see.

I want that to mean the reading problem has been solved. It certainly makes the work faster.

## The Sentence Did Not Survive

A later question asks why attendance changed. The source report notes that the decline began around a change in transport arrangements. The overview preserves the attendance problem and the concern around progress, but the transport sentence looked peripheral while the text was being compressed and did not survive.

I read the overview beside the original report. Nothing in the summary is false. It has captured the broad movement accurately. The sentence needed for this question is simply not there.

## The Document Grows

My first response is to make the overview longer. That keeps the transport detail in this case and restores enough other material that the summary begins turning back into the document. Preserving named categories helps until the next question depends on something outside them. A separate summary for every possible use might work if the future questions were already known, which rather defeats the point.

## Three Versions of the Same

This is familiar from clinical abstraction. A discharge summary, referral letter and research dataset can all describe the same person accurately while preserving different facts. None is necessarily badly written. Each was made for a purpose.

## A Route Into the Record

The overview remains in the system. Managers can read it first, understand the broad movement and return to the complete reports when the case requires it. The shorter text becomes a route into the record rather than a substitute for it. That is useful, although less exciting than replacing the record would have been. The source stays whole because the later question has not yet arrived.

What I still do not have is a way for the question itself to decide which part of the source deserves attention. The summary has already chosen.
