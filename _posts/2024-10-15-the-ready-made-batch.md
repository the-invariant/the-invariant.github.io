---
layout: post
title: "Ready Made Batch"
author: Chukwuka Orefo
display_title: "Ready Made Batch"
date: 2024-10-15
categories:
- Data Engineering
- Data Quality
- Software Engineering
tags:
- clinical data
- database releases
- quality control
- HPLC
- validation
- release gates
- hotfixes
- technical debt
- operational debt
- epistemic debt
description: "What is the difference between inspecting the output of a data build and actually controlling the process that created it?"
image: /assets/images/posts/2024-10-15-the-ready-made-batch/hero.jpg
---

# Ready Batch Made

## I. Inspection at the Gate

In many analytical environments, the impulse to introduce governance arrives long after the machinery of production has solidified. On one research-data programme, I was asked to make the quality of repeated database releases visible. A large clinical database was rebuilt on a regular cycle, then made available for research. Checks already surrounded that release, although they did not form one repeatable process. Some lived in spreadsheets, some in statistical scripts, some in database queries and some in the working memory of people who knew which tables usually changed.

The first task was to make consecutive builds answer the same questions. I created a separate quality store and procedures that measured completeness, consistency, timeliness, uniqueness, validity and accuracy. The results moved into a dashboard, which meant a sudden change no longer depended entirely on somebody remembering the previous figure or finding the workbook where it had been recorded.

The improvement was useful in a very ordinary way. The calculation had a place, its history could be compared and a person examining the current release did not need to reconstruct the method before looking at the result. Someone asked whether this meant the database was now quality controlled. I said yes and then, a few seconds later, found myself listening to the word *controlled* as though somebody else had used it. The database had already been made. A shifted column, an unexpected source change or a malformed record could have travelled through several transformations before the dashboard described what had happened. The new process was better than the fragmented one it replaced, but the evidence arrived after production.

## II. The Batch Postmortem

Years earlier, while working with peptide and hormone formulations, I had used HPLC to examine stability, degradation and release. A chromatogram could show that a formulation had separated or that the active material was not behaving as intended. It could reject the result. It could not return to preparation, storage or handling and prevent the condition that produced it.

Data can often be rebuilt, whereas a pharmaceutical batch may be expensive or impossible to recover, so the comparison is not complete. The direction remains useful. Final inspection matters. It is not the same thing as controlling the process that creates the object being inspected.

Had the full path been mine to redesign, different checks would have moved towards the boundaries where their meaning was still available. A malformed payload could be rejected before entering a service. An absent source partition could stop a dependent asset. A manifest and record count could describe what arrived before transformation began. A failed expectation could prevent promotion rather than becoming a red number beside an otherwise completed release. The particular product chosen to implement those controls mattered less than the state change. A condition written in a document describes what should happen. A condition attached to the pipeline can stop the next stage from proceeding.

I did not control every source, transformation and release gate. Moving one check upstream could affect a fixed build window, a delivery commitment and teams I did not manage. The practical choice was to improve the boundary I had rather than draw an ideal pipeline on a whiteboard and call the drawing delivery.

## III. Rescue as Architecture

The dashboard replaced inconsistent review with repeatable evidence. I kept one reservation beside the success. The evidence was arriving late, and late evidence is friendly to hotfixes. A table fails, someone adjusts a transformation, the build runs again and the release proceeds. Sometimes that is precisely what responsible engineering looks like. I’ve written enough emergency fixes to distrust anybody who describes them only as a moral weakness.

The problem begins after the emergency. If the repair remains in a changed line of code, a ticket or the recollection of the person who stayed late, the next incident starts from almost the same ignorance. The organisation survives the failure without retaining what the failure taught it.

That seemed larger than ordinary technical debt. The code carried one obligation. Repeated human rescue carried another. The inability to explain why the repaired output deserved confidence carried a third. A single fix could create all three and still be the quickest sensible action before lunch.

In smaller systems I had led, a recurring failure could become a validation rule, a source contract or a regression case. In open-source work, a bug returning after a supposedly complete fix had an uncomplicated way of embarrassing everybody, which was healthy up to a point. Private handover was not expected to preserve the lesson forever.

The dashboard gave the release a witness. It did not move the witness to the scene.

