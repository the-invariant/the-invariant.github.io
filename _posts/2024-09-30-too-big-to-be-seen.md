---
layout: post
title: "Too Big to Be Seen"
author: Chukwuka Orefo
display_title: "Too Big to Be Seen"
date: 2024-09-30
categories:
- Software Engineering
- Data Governance
- Systems Design
tags:
- data quality
- data pipelines
- systems thinking
- institutional knowledge
- operational knowledge
- observability
- technical debt
- epistemic debt
- governance
- software reliability
description: "Where does data quality actually live when a system becomes too large for any single person to see?"
image: /assets/images/posts/2024-09-30-too-big-to-be-seen/hero.jpg
---

# Too Big to Be Seen

## I. The Language of Shared Ignorance

There comes a point in the life of a system where its questions grow larger than any single role designed to answer them. Sometimes I find myself in rooms where the job titles are longer than mine and the question is larger than the part of the system I actually own. Someone asks how the data can be trusted. People turn towards me. From the seating plan, the reporting lines and the mild surprise on my own face, I can usually tell that I’m not the person who should be giving the definitive answer.

Perhaps I’m there because I’ve followed enough of the mechanism to translate it. Perhaps the people carrying the older knowledge are elsewhere. There are less flattering explanations, although I’ve never found a reliable way to test them, and the meeting normally begins before I can decide which version I believe.

These were not all the same rooms. The systems came from different organisations, projects and periods of my career, from smaller teams where I held considerable authority to large programmes where I controlled little beyond the work directly in front of me. What kept repeating was the arrangement beneath them. Responsibility was distributed, evidence remained local, and the work continued because somebody knew how to carry whatever the system had left out.

## II. Detection Without Destination

One of the first answers I received to this kind of question came from someone working on a data pipeline. The quality check, they said, was the Python script failing. I assumed the sentence had been shortened for the room. A type changes, the parser stops, an engineer opens the traceback and finds the source of the break. That is detection of a kind, and on a bad day it may be the only detection available.

I was waiting for the rest. A value can be wrong while remaining the correct type. A date can parse cleanly and belong to the wrong century. A code can be valid while meaning something different from what the receiving table assumes. The script can finish without complaint and leave somebody downstream with a table that cannot answer the question they were given.

The explanation moved towards the people who normally noticed when the output looked strange. For a while I thought I’d asked the question badly, which was plausible. I tend to begin with the mechanism while other people are still establishing why the meeting exists. An ordinary request can sound like an interrogation when you start by asking which event changes state. I tried again with smaller words. Once the script has been repaired, where does the failed check live? Which source and release does it belong to? What happens differently the next time? The answer returned to the person who knew the pipeline.

I’d heard versions of it on earlier consulting projects. Organisations produced large amounts of data while their checks remained scattered across scripts, spreadsheets and the memories of people who knew what usually went wrong. In open-source work I supported, the same weakness was harder to conceal. A repair without a test, issue or reproducible example was a future regression with better comments. The repository could not know the business meaning of the data, but it could require part of the evidence to travel with the change.

## III. Fingerprints on Continuity

Where I had more authority, I could move a check into the application, alter the state transition and make a recurring failure part of the next regression set. Inside larger programmes, I could build one component, report what I had found and suggest where the next boundary might sit. The system still ran in either case. The difference was whether its survival left evidence behind or only another person who knew what to do.

Cultures carried events for centuries before they could be fixed reliably in writing. A story passed from one person to another could preserve a war, a betrayal or the fall of a city while changing its shape with every telling. The Trojan horse still arrives intact in the story, although the distance between the story and the event is harder to measure.

Operational knowledge travels in a similar way. Someone remembers that a table must be rerun, that one warning can be ignored or that a source becomes unreliable after a particular point. The next person inherits the instruction. They may not inherit the failure that produced it.

Documentation can hold the instruction still, although not always the reason behind it. One page explains how to restart the process. Another records why the restart became necessary. Sometimes only one survives. Sometimes both remain, but the procedure has changed while the explanation has not, or the explanation has been updated while the working steps continue somewhere else. The how tends to survive because the work still has to be completed. The why becomes easier to lose once the immediate failure has passed. A workaround becomes a procedure, the procedure becomes documentation and the documentation acquires the confidence of something that appears to have always been true.

The system remembers through people, pages and repeated practice. The memory can remain long after the event that created it has become difficult to recover.

Releases arrived. Files were delivered. Models returned answers. People corrected malformed inputs, restarted jobs, explained unusual numbers and remembered which warning could be ignored this time. From a distance, continuity looked like control. Closer to the fault, it had fingerprints on it.

I began to wonder whether some systems were not hidden at all. They were simply too large to be seen as one object. Scripts, policies, dashboards, tickets, teams and documents were visible everywhere. The full path had disappeared because each fragment made enough sense on its own.

