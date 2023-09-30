---
layout: post
title: "The Stack Beneath"
author: Chukwuka Orefo
display_title: "The Stack Beneath"
date: 2023-09-30
categories:
- Artificial Intelligence
- Software Engineering
- Machine Learning
- Society
tags:
- large language models
- natural language processing
- AI agents
- deterministic software
- machine learning
- XGBoost
- retrieval-augmented generation
- human judgement
- software architecture
description: "What remains beneath software when language becomes its interface?"
image: /assets/images/posts/2023-09-30-the-stack-beneath-the-sentence/hero.jpg
---

# The Stack Beneath Sentence

### The Dinner Conversation

I’d just come from a salsa and bachata social with a group of friends. Afterwards, a few of us headed out for dinner, meeting up with a larger table through the usual loose chain of mutual acquaintances that becomes difficult to reconstruct once everyone is sitting down. Several people at the table worked in technology, including a gentleman who clearly knew most of the group already. He described himself as a senior engineer, and when he began talking about where the industry was going, people listened.

He was describing the company he expected to run one day. There’d be very few engineers in it, perhaps none beyond him. Instead, he’d manage a collection of large language models and agents. He could give one a task, leave it to work, and return when it was finished. If he needed an application, he’d ask a model to build it. The application itself was becoming temporary; the ability to request one was what mattered.

Several people around the table grew interested, asking what the agents would do, how soon this would happen, and whether anybody should still be entering software engineering. He knew companies already preparing for the change. Businesses would need fewer people because one capable person could delegate the work to machines. His future company contained one human being. He’d kept the management position.

I mostly listened. Social settings rarely improve when somebody turns a career forecast into an architecture review. I can usually find a technical opinion once nobody is waiting for it, but I’m rarely quick at offering one in a crowded room.

I asked what would happen to ordinary software, not machine learning or language models, but the code that checks whether a value is present, calculates an invoice, or refuses an action because the person asking doesn't have permission. He said the language model could write that code too.

It could write the code. I still couldn't see why that meant the code, or everything needed to run it, had somehow disappeared.

Somebody asked for my opinion. I offered the softest accurate answer available and said I didn't know, which wasn't entirely true, but was more honest than assembling an argument while everybody watched. I told him I didn't quite see what he was seeing. He tried another route: models would improve at mathematics, become better programmers, operate tools, manage tasks, and eventually remove the need for most of the people who performed those jobs now.

I asked a few more questions, nodded, and let the conversation move on. I hadn't realised the evening included careers advice, and the disagreement wasn't clear enough to defend. I wondered whether his confidence meant he could see further than I could. It was also possible that I’d spent too long around small systems where a clever mistake still had to be explained to a manager on Monday. Both felt possible at the table.

### Everything Looks Like Language

His argument had real force behind it. Language can describe almost any task. A person can ask for a calculation, a programme, a report, a database query, or an operational plan. If a model can understand the request, break it into steps, and use the necessary tools, language begins to look less like one capability and more like a universal control surface.

A calculator performs arithmetic. A language model can decide what needs calculating, call the calculator, place the result inside a report, and send the report somewhere else. From the user’s side of the screen, the model appears to have performed the entire task. The same thing happens with code. A model can produce a function, execute it through a tool, and return the result. The person asking doesn't see the interpreter, the operating system, the database connection, or the rules controlling what the function may touch. They see a conversation.

That disappearance is persuasive. Once every capability returns through language, it’s easy to conclude that language has absorbed the capabilities beneath it. You may not agree, but to this day I still see large language models as an extraordinary expansion of natural language processing. They had already made that category difficult to draw neatly, but I wasn't ready to discard it. The ability to request an operation was not the operation itself. A sentence returning to the user could contain a calculation, but the calculation still had to be true somewhere.

We’d spent part of the evening responding to timing, weight transfer, and pressure faster than any of us could have described them. That didn't prove the engineer wrong. It did make language look less like the beginning of everything.

### Where Rules Belong

I thought I’d left the argument at the table. A few days later, while looking at an operational platform for a local charity, I realised I hadn't.

When a staff member corrected the duration of a session, the timesheet and invoice had to follow the same event rather than preserve an earlier version of the afternoon. The relationship was explicit, where the service type, duration, baseline rates, and payment rules determined the output. There was nothing to interpret once the required facts entered the system. The same activity had to produce the exact same financial output every time. An invoice or a payroll log is a poor place to explore the creative potential of probabilistic text generation.

The model could have helped write the function and its tests. Once deployed, the function had one job. A corrected activity had to produce the corrected amount every time, including on days when the language model felt unusually creative. The future had abolished applications, but my week still contained an invoice whose total needed to remain boring. Deterministic didn't mean infallible, as the rule could still be wrong. It meant the same rule could be inspected, tested, and corrected without its answer changing according to how the request had been phrased.

### Where Models Estimate

Not every operational problem at the charity had that shape. Student support was tracked through attendance, progress against learning targets, and observational reports. The most visible changes were easy to notice. A serious incident or a sudden absence entered the organisation’s attention without needing much assistance from software.

Quieter change was harder. A young person might attend slightly less often, make slower progress across several targets, or begin moving away from their own earlier pattern without producing a single event dramatic enough to trigger a rigid alert. I could keep adding thresholds, but each one assumed the students had started from the same place.

I used XGBoost instead, feeding it the structured attendance and target measures so it could surface changes across time rather than wait for one dramatic event. The system presented those signals through an operational view so managers could decide where attention might be needed. This was closer to the kind of intelligence he had been describing, although even here its value depended on not being mistaken for the decision.

The statistical flag identified where a pattern had shifted, but it couldn't establish what the shift meant. The flag couldn't tell a manager whether the target still made sense, whether the staff observations agreed with it, or whether the change justified intervention. A blood result can tell a clinician where to look, but it cannot decide what the patient needs without the rest of the record. The model was useful because it didn't have to reduce every student to the same threshold, and it was safe enough because the output remained a request for attention rather than a decision about what should happen next.

### Where Text Is the Work

A parent and a manager could type the same words into the safeguarding policy assistant, but they shouldn't search the same library. Policies are written in language, and people ask about them in language. They rarely use the exact words found in the formal document, and the useful answer often sits inside several pages of procedures, definitions, and exceptions. A language model had a proper job here because the obstruction was language itself. The policies were written for people, and people rarely asked questions in the wording used by the policy.

The policy documents remained outside the model. They were extracted, divided into searchable passages, and indexed through a retrieval system. When somebody asked a question, the application searched the approved material, placed the relevant evidence into the model’s context window, and asked it to produce a readable answer.

That flexibility was useful, but it was also the reason the model didn't receive every other responsibility. Role-based controls determined which policy materials a user was allowed to search before anything reached the model. Public guidance, staff procedures, and restricted handover material didn't belong in one undifferentiated collection with a paragraph in the prompt asking the model to be discreet. Prompts are not security barriers.

The model turned permitted policy into readable language. Authentication and access rules had already decided what it was allowed to receive, and when a question carried more risk than a text box should settle, the safeguarding route created the record, prepared the handover, and notified the responsible person. A high-risk concern already had a route to record it, prepare the handover, and notify the responsible person. The route didn't need initiative; it needed to happen. The user saw one answer, although the answer was the last step in several different systems.

### Orchestration and Agents

This was closer to the artificial colleague he’d described, where you give a language model a goal, some state, and a set of tools, then allow it to choose what happens next. An ordinary workflow follows a route decided beforehand, whereas an agent can select part of the route while the work is running.

The apparent colleague was assembled from a model, stored state, ordinary functions, permissions, and whatever systems could verify or reverse its actions. The language model provided flexibility around interpretation and path selection, while the rest of the system gave that flexibility somewhere to act and limits on what its actions could reach.

This was the piece missing from the company described at dinner. The artificial workers wouldn't be independent minds arriving fully equipped for employment. They’d be systems assembled from models, tools, databases, permissions, and code. Someone would still need to decide which actions were reversible, which outputs required checking, and which failures could be tolerated. Removing human colleagues wouldn't remove the knowledge those colleagues carried. Some of it would become documentation, some would become rules, and some would become evaluation datasets. The rest would become missing requirements, usually discovered after an agent had completed the wrong task with impressive initiative.

### What Remains Underneath

The engineer at dinner may still be right about much of the visible future. People may stop opening a separate application for every task. They may ask a language system to create a temporary interface, query a service, or generate a small tool on the fly. A single engineer may coordinate more productive capacity than a much larger team could manage before, and software itself may begin to disappear from view.

Software may disappear from view, but the application underneath the conversation will not. Somewhere underneath the conversation, state still has to persist. Permissions still have to be enforced. Transactions still have to complete or roll back. Calculations still have to be exact. Statistical models still have to be evaluated against the populations they claim to describe. Somebody still has to decide what happens when the available evidence doesn't support the requested action. As the interface becomes simpler, the machinery beneath it may become more numerous. Language may become the place where all of this is requested, but that doesn't make language all that is happening.

The systems at the charity did not form a ladder. Each one existed because the previous mechanism couldn't safely carry that particular kind of uncertainty. The language model made the arrangement easier to approach, but it didn't make the arrangement disappear. None of them removed the need for somebody to decide what the system was for and which consequences it was allowed to create.

I could have said some of this at the table, though probably not in this order and certainly not before dessert. It might not have changed his mind anyway; his prediction had the confidence of a future already seen, while mine had the less marketable quality of several systems that needed to work on Monday.

The future may speak through one sentence. Underneath it, the stack will still decide whether the sentence deserves to be believed.
