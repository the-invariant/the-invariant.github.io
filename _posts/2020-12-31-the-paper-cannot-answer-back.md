---
layout: post
title: "The Paper Cannot Answer"
author: Chukwuka Orefo
display_title: "The Paper Cannot Answer"
date: 2020-12-31
categories:
- Software Engineering
- Systems Design
- Data Governance
tags:
- workflow automation
- data provenance
- source of truth
- PostgreSQL
- audit trails
- operational systems
- process design
- charity technology
description: "What happens when several records are asked to describe one human event?"
image: /assets/images/posts/2020-12-31-the-paper-cannot-answer-back/hero.jpg
---

# The Paper Cannot Answer 

By the time a timesheet reaches a manager, the work it describes has already happened. A member of staff has travelled to a session, spent time with a young person, written their notes and gone home. The charity then asks that afternoon to appear again as a timesheet, a report and an invoice, each produced at a different point and for a different reason.

Managers are spending up to fourteen days comparing those records. Sometimes the hours look right and the report is missing. Sometimes the report exists but cannot be tied cleanly to the invoice. Nothing has to be fraudulent for the process to fail. A date copied incorrectly, a late attachment or a correction made in only one place is enough to leave several plausible versions of the same work.

## The Control Is a Person

One manager takes me through the checks. The order changes depending on what arrives first, which bothers me before I can quite say why. I ask where the completed check is recorded. She names the person who normally does it. When I ask what happens if that person is away, the answer goes back through the folders and then stops. The people who perform the checks remember which form is usually late, which total needs checking twice and when an inconsistency can be ignored because they have seen that particular inconsistency before.

I think she has misunderstood my question, so I ask it again without using the word reconciliation. Where does the organisation record that these things have been checked and found to agree? She looks at the paperwork, then at me. It does not. The process produces documents. The control is a person.

## The Form Survives the Paper

My first idea is not especially clever. Put the forms online. Paper is slow, hard to search and easy to lose. A digital timesheet can arrive immediately, a report submitted through a browser will not disappear inside an email thread, and an invoice built from stored values should at least remove some retyping. I begin by reproducing the visible process because, at that point, the visible process looks like the problem.

The first version is cleaner. Handwriting disappears. Reports arrive sooner. Managers can search for a record without walking between desks. Then somebody corrects the date of a session in the report and the hours remain attached to the earlier date on the timesheet. Both records are digital and both are behaving exactly as their forms allow. They still describe different afternoons.

I ask which one should be treated as correct. The manager explains why the report exists and why the timesheet exists, slowly enough that my fingers start tapping against the edge of the desk. I know why the information is needed. What I cannot find is the event that gives one description authority over the other. I let her finish and try again. If the report changes, what causes the timesheet to change with it? Nothing does. Somebody normally notices.

For a few days I keep trying to improve the reconciliation. A warning appears when the dates differ, which helps until the disagreement involves duration instead. I consider locking one form after the other has been approved, but that only changes which error becomes difficult to correct. The fixes catch mistakes. They also leave the charity recording one session several times and asking software to compare the accounts afterwards.

## The Session Beneath the Forms

The repeated transcription begins to feel familiar. In clinical work, a result remains tied to the patient, the encounter and the conditions under which it was produced. Copying the value into another table does not create another result, although it can make the value look independent if the path back is lost. Here the forms are being treated as though each one has observed the session for itself. That does not immediately tell me what to build. It does make the current arrangement harder to defend.

I start moving the session into the centre of the workflow. A member of staff enters one activity containing the service, date, duration and current state of the work. The backend validates that activity and produces the records that depend on it. The timesheet and invoice no longer have to discover one another afterwards because they begin with the same submission.

## Complete in Which Room?

The linked version exposes another problem that paper had been carrying quietly. Staff regard a session as complete when the work has been delivered. Finance may regard it as incomplete until the report exists and the hours have been approved. Both groups have used the same word for years, and the difference survives because the people involved know which meaning applies in which room. PostgreSQL does not know which room it is in.

The state has to separate delivery, reporting and approval. That sounds like a small modelling decision until a correction arrives after an invoice has already been reviewed. The usual practice is to amend the timesheet. Preserving that behaviour can leave an approved invoice disagreeing with the activity beneath it. Regenerating the invoice automatically would alter a financial record after somebody had signed it off.

## The Untidy Truth

We leave approved records unchanged and expose the correction as an exception that has to be resolved. Open records continue to follow the activity. I do not love it. Automatic consistency would look cleaner in the schema, but it would also hide the fact that an approval had been overtaken by new information. The untidy truth seems safer.

## Somewhere to Begin Looking

As the linked records settle in, the fourteen-day reconciliation begins to collapse. A manager can move from an invoice back to the activity that produced it instead of searching through email and paper. Staff are paid from records with a shared origin. The process is faster, although speed is not the part I trust most. When a figure changes, there is somewhere to begin looking.

The platform can show who entered the activity, which records followed and what changed afterwards. It still cannot prove that the session happened exactly as described. The account is more coherent. It has not become a witness.


