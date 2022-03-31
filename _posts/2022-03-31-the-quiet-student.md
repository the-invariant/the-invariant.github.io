---
layout: post
title: "The Quiet Student"
author: Chukwuka Orefo
display_title: "The Quiet Student"
date: 2022-03-31
categories:
- Machine Learning
- Education
- Data Ethics
tags:
- XGBoost
- EHCP
- student monitoring
- human in the loop
- anomaly detection
- educational data
- false positives
- longitudinal data
- decision support
- safeguarding
description: "What disappears when attention follows only the loudest signal?"
image: /assets/images/posts/2022-03-31-the-quiet-student/hero.jpg
---

# The Quiet Student

The charity supports young people through sessions recorded by staff, attendance information, EHCP targets and reports written over time. By this point, much of that material sits inside the operational platform rather than across paper and email. Managers can find it. They still tend to encounter concern in the usual way, through an incident, a marked change in behaviour or somebody who knows how to keep a case in view.

## The Meeting Hears the Loudest Voice

Meetings favour interruption. A student who is distressed, vocal or already known to several members of staff has a route into the room. Their needs are real. Attention is not distributed according to need alone.

One record is moving in smaller ways. Attendance has weakened without collapsing. Progress against one EHCP target has levelled off. The notes are becoming shorter and less certain, although no single report contains anything that would force the meeting to stop.

I ask about the student. A member of staff says there have not been any issues from them. In the ordinary language of the meeting, that is true. Nobody has raised an incident. No parent has called. There is no urgent review waiting in an inbox. The absence of an incident is being treated as the absence of change.

Clinical work had made me suspicious of quiet records. A value can remain inside the expected range while its direction changes. Missing observations may indicate stability, but they may also mean nobody looked, the change was not recorded or it happened slowly enough to become familiar.

## What Survives a Score?

The platform already holds enough information to watch more consistently, although not yet in a form I trust. EHCP targets are written for individual people. Some describe something that can be observed repeatedly. Others depend on context and become nonsense once reduced to a number.

I sit with instructional staff and work through the targets. They know which measure can reasonably move from three to four and which loses its meaning as soon as it becomes a score. They also know whether a missing value means no session took place, nobody entered the observation or the target did not apply that week. The model cannot recover those distinctions after we have thrown them away.

We begin with less than I expected. Attendance, a small set of measurable indicators and enough history to compare each student with their own earlier pattern. Staff notes remain beside the numbers. That part is non-negotiable, although I probably make it sound negotiable for longer than necessary while I work out what the model can safely do.

## The Line Moves

A fixed threshold is the first approach. It is transparent and easy to explain. It also flags students whose ordinary variation crosses the line while slower changes remain just above it. Comparing each student with the whole cohort creates a different distortion. Somebody who has always needed more support can appear permanently unusual, while a sudden decline in a previously stable student remains close to the average.

XGBoost enters after those simpler approaches fail in opposite directions. The model combines recent movement across selected indicators and compares it with the student’s own earlier pattern. It does not decide that something is wrong. It moves cases into view when several weak signals begin leaning together.

## Amber Leaves the Screen

The result appears on a Red, Amber and Green dashboard. A manager can scan the cohort and open the underlying attendance, targets and reports for a flagged case. Nothing consequential happens until that review.

The colours make the system usable and almost immediately begin doing something else. During one discussion, somebody refers to the student as amber. The phrase is quick and convenient. It has also moved the category from the dashboard onto the person.

Amber came from selected measures, missing values, thresholds and a model that does not know why attendance changed. None of that survives the phrase. I had seen clinical labels make the same journey. They help people coordinate, then begin deciding what later information is allowed to mean.

## No Final Setting

We adjust the thresholds and review the cases. Increasing sensitivity brings more quiet movement into view and more false positives with it. Raising the bar quietens the dashboard and restores some of the blindness we were trying to remove. I do not think there is one final setting waiting to be discovered.

## A Place in the Room

The improvement is still clear. Managers can see gradual changes across the cohort rather than depending only on incidents and memory. Students who would not have dominated a meeting can enter it through a pattern in their own record. The model redistributes attention. A person decides what the attention is for.

That decision requires reading. The dashboard can bring a case forward, but the reason is still spread through months of reports, repeated observations and small details that do not fit inside a colour.


