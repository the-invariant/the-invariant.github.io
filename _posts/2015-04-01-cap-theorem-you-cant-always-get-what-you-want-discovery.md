---
layout: post
title: "CAP Theorem: You Can't Always Get What You Want"
author: Chukwuka Orefo
display_title: "CAP Theorem: You Can't Always Get What You Want"
date: 2015-04-01
categories:
- Software Engineering
- Distributed Systems
- Data
- Reliability
tags:
- CAP theorem
- Eric Brewer
- consistency
- availability
- partition tolerance
- PACELC
- clinical data
- system design
description: "What does the system need?"
image: /assets/images/posts/2015-04-01-cap-theorem-you-cant-always-get-what-you-want-discovery/hero.jpg
---

# CAP Theorem: You Can't Always Get What You Want

Most of my database work begins with a practical question. Who might be eligible for this study, and how quickly can I find them without asking somebody to rebuild the answer by hand? The question sounds singular. The data isn’t. The same person may appear in a hospital record, a screening list, a laboratory result, a study database and a spreadsheet kept because the other systems don’t quite meet. A name may be written differently. A result may arrive late. A date may describe the event itself, the day somebody entered it or the day another system received it.

My first instinct is to treat this as a problem of tidiness. Find the correct fields. Join the right tables. Normalise the values. Make the query faster. Remove enough manual work that the result can be checked rather than reconstructed. That helps, but it doesn’t remove the deeper problem. A query can be correct and still return a partial account. A table can be current and still disagree with another system that hasn’t caught up. The person is one. The records are not.

I come across the CAP theorem while trying to make better sense of distributed systems. At first, it looks almost too neat to be useful. Consistency. Availability. Partition tolerance. Pick two. I read it as a rule about databases, but the more I try to connect it to the systems I already know, the more I realise I’ve misunderstood the question. CAP isn’t asking what a system wants. It is asking what the system cannot keep once communication breaks.

## A Person in Pieces

The clinical records are not an example of the CAP theorem. Their disagreements can come from workflow, interpretation, human entry and timing rather than a network partition. They have still trained me to distrust the idea that one clean screen must contain one complete truth. A person can remain singular while the systems around them hold different fragments. Each record is a claim made by a particular process at a particular time. One may be newer. Another may be more complete. A third may be authoritative for one purpose and irrelevant for another.

That matters because the value of a record depends on what somebody is about to do with it. A planning count can be slightly behind and remain useful. An answer about whether somebody has already entered a study carries more weight. One can wait for correction. The other may change what a team does next.

This is the first connection CAP helps me see. A distributed system also presents one logical thing through several physical copies. Under normal conditions, those copies exchange updates quickly enough for the difference to disappear, and the user sees one system because the many continue to perform as one. The interesting moment is not when the copies agree. It is when they stop.

## The Wrong Kind of Consistent

My first mistake is assuming that consistency means correctness. That seems natural. In clinical work, consistency suggests agreement, completeness and the absence of contradiction. A consistent record should not say one thing in one place and something else nearby. CAP uses the word more narrowly. Consistency means that the distributed system behaves as though there were one current copy of the data. Once a write has completed, a later read should see it. If the system cannot guarantee that, it should not quietly return an older value and call the matter settled.

That distinction changes the shape of the problem. A database can be perfectly consistent in the CAP sense and still contain the wrong information. Every node can agree on an incorrect date. Every replica can preserve the same mistaken identifier. Agreement does not create truth.

The reverse is also possible. Two records can disagree because one is newer, not because either system is broken. The disagreement may simply reveal that information has moved at different speeds. Consistency and correctness are not the same property. CAP is interested in whether the copies agree on the latest completed state. It says nothing about whether that state deserves to be trusted.

## A Failure to Communicate

Eric Brewer introduced the conjecture around the turn of the century. Seth Gilbert and Nancy Lynch later gave it a formal shape in their [2002 proof](https://users.ece.cmu.edu/~adrian/731-sp04/readings/GL-cap.pdf). The theorem becomes clearer when I stop looking at the triangle and follow one update through the system. Imagine two copies of the same record held at different sites. A change reaches one copy. Before the update reaches the other, the connection between them fails. Both machines are still running, but one knows about the change and the other does not. Neither can tell whether the other side has failed, slowed down or merely become unreachable for a moment. Then another request arrives.

The isolated machine can answer from the copy it already has. The service remains available, but the answer may be stale. It can also refuse to answer until contact returns. That protects one agreed history, though the user receives an error or waits. What it cannot do is answer immediately while also knowing the state of a machine it cannot reach.

This is where the triangle finally becomes useful. The theorem is not really about three attractive properties arranged in a shape. It is about a request arriving before certainty does. The usual wording also makes partition tolerance sound like a preference. Once a system is genuinely distributed, it isn’t. Networks fail. Machines remain alive while connections disappear. The design choice begins after the wire has gone quiet.

## No News Is Not Good News

Availability is the next word I’ve been carrying too casually. I tend to hear availability and think uptime. Is the service running? Can somebody reach it? Has the system fallen over? CAP means something more exact. A request sent to a working node receives a response, even while part of the network is no longer reachable.

That sounds like the friendly choice. The system keeps answering. The user keeps working. Nothing appears broken. An unavailable system, by contrast, fails openly. The request times out. The page doesn’t load. The machine admits that it cannot answer. An inconsistent system can fail while appearing healthy. The page loads, the result looks complete and nothing on the screen announces that another copy contains a newer version of events. The service keeps moving, but the uncertainty has moved into the answer.

This is where the clinical work becomes useful again because different answers carry different consequences. A planning count can lag. An enrolment decision may not have the same freedom. A profile can be old for a few seconds. An allocation, identifier or payment may produce a conflict that has already left the database and entered somebody’s life.

I’m starting to think that describing an entire database as consistent or available is too blunt. Different operations inside the same system need different guarantees. A count may continue with partial knowledge. A decision may need to stop. A request may be recorded and completed later. Another may be safe to repeat until it succeeds. The triangle doesn’t make those decisions. It exposes the point where the system can no longer avoid them.

## Time Waits for No Node

The part I find easiest to miss is the clock. A machine cannot look at a silent connection and know whether it has failed. It waits. At some threshold, the system stops calling the other machine slow and starts treating it as unavailable. A partition is not always a wall dropping cleanly between two servers. Sometimes it is a timeout with a more dramatic name.

Daniel Abadi’s [2012 account of PACELC](https://www.cs.umd.edu/~abadi/papers/abadi-pacelc.pdf) helps make that pressure visible. During a partition, the system faces a choice between availability and consistency. Even when the network is healthy, it may still face a choice between latency and consistency. The system can wait for distant copies to agree and return a stronger answer later, or answer from a nearby copy and accept that the result may be behind. Waiting forever doesn’t remove the trade-off. It purchases certainty with a delay so long that the answer becomes useless.

That changes the questions I want to ask. Not simply which corner a database occupies, but how long this operation can wait, which copies need to agree, what damage a stale answer can cause and what the system should do when its deadline expires. CAP describes the limit. The clock decides when the system has reached it.

## You Can't Put It Back

My final mistake is assuming that once the network recovers, the problem is over. If both sides continue accepting changes while separated, the system now contains two histories. Restoring the connection reveals the disagreement. It does not decide which history should survive.

Brewer’s [2012 reassessment of CAP](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/) gives more weight to this part of the problem. A system can behave one way while communication is healthy, enter a restricted mode when agreement becomes impossible, then require a separate recovery process when the parts meet again. That recovery has to be imagined before it is needed. The system must know which operations may continue, which must stop, which can be recorded locally and which produce effects that cannot simply be taken back.

Clinical records have their own version of this. A later correction can repair an entry, but it cannot always erase what happened while the earlier version was believed. Somebody may already have been called. A decision may already have entered a meeting. The database can be corrected. Time cannot. Distributed software has the same limit. Some conflicts can be merged. Some actions can be compensated. Some need a person to decide which account is authoritative. Some mistakes remain visible after the data has been repaired. The partition is not finished when the cable works again. It is finished when the system has dealt with the second history it allowed to form.

## What You Need

CAP now looks less like a restriction and more like a diagnostic tool. It forces the system to disclose its priorities. When communication fails, what must remain true, which work may continue, which answer may be late, which may be old, which action can be reversed and which mistake would escape the database and enter the world?

Those questions should follow the meaning of the operation, not the label attached to the product. A screening count, an observation, an eligibility decision and an identifier may all live in tables. That does not mean they should share one failure policy. This is where the clinical and technical problems finally meet. The record is not the reality. It is the portion of reality a system has managed to preserve. When several systems preserve different portions, the design has to decide which disagreement can remain temporary and which disagreement must stop the work.

CAP does not tell me how to build the system. It tells me where the design has been pretending not to choose. The architecture begins after the acronym, when each operation is forced to answer what it cannot afford to lose. The song is right about wanting. Distributed systems add the harder question. What does the system need when the network says no?

