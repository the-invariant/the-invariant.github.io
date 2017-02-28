---
layout: post
title: "The Shadow Engineer"
author: Chukwuka Orefo
display_title: "The Shadow Engineer"
date: 2017-02-28
categories:
- Clinical Research
- Software Engineering
- Automation
tags:
- internal tooling
- natural language processing
- recurrent neural networks
- user interface automation
- clinical informatics
- career transition
description: "What happens when your skill has no recognised role?"
image: /assets/images/posts/2017-02-28-the-shadow-engineer/hero.jpg
---

# The Shadow Engineer

## The Work Wasn’t in the Protocol

The clinical protocol explains the science. It defines who can enter the study, what must be measured, when patients are seen and what happens next. It says very little about the clerical machinery required to make any of that possible. I was a clinical researcher moving between sites, using code as a way of keeping from drowning in paperwork. Much of the delay sat around the study rather than inside it. Patient notes had to be screened, documents redacted, spreadsheets reconciled and trackers updated. None of this was presented as software engineering. It was simply the invisible work that needed doing.

To my colleagues, my productivity was difficult to explain. They watched me move between sites, stop for conversations in corridors and still join the team after work, yet the study cohorts were ready ahead of schedule and I never appeared to spend every evening trapped at a desk. They assumed the missing hours existed somewhere out of sight. In a sense, they did. The intensity had gone into building the mechanism once rather than repeating the task every day. I had a second desk, an invisible one, running automation scripts and neural layers from a terminal window.

The time it recovered didn’t only let me finish more work. It let me remain present while the repetition continued elsewhere. I could speak to people, build relationships and think beyond the next spreadsheet because the terminal window was handling tasks that didn’t require another hour of human attention.

## The Invisible Desk

The machinery on that second desk grew out of necessity. It became a private toolkit organised around one instinct. Let the machine handle repetition while keeping the consequential judgement for myself. It was a small system for manufacturing time.

The first tools dealt with de-identification and medication extraction. Before extracts could be shared, transferred into research case packets or passed to another approved researcher, identifying details had to be removed. Manually scanning page after page for phone numbers, addresses, postcodes and formatted patient identifiers consumed attention without requiring much judgement, so I wrote reusable pattern matchers in Python to find and blank out those rigid structures in a single pass. I also built a local medication dictionary from approved formulary sources, including the online British National Formulary. Once a medicine name was recognised, another pattern examined the nearby text for numbers, units and clinical frequencies. Common combinations of medicine, dose, unit and schedule could be recovered automatically, while unusual wording and ambiguous instructions fell into a smaller exception set for review.

The deterministic tools worked until language stopped announcing what it was. A surname could also be an ordinary word. A place name could look like a description. The same token could be harmless in one sentence and identifying in another. For that residue, I kept returning to the same recurrent shape, a Gated Recurrent Unit, and changed what I asked it to produce. In one version, the recurrent layer used the surrounding sequence to distinguish sensitive names from common nouns where a dictionary lookup would fail. In another, examples from earlier manual screening were used to rank new records for likely study relevance. The model didn’t admit patients or decide eligibility. It indicated which records were probably worth opening first, so the search space had already been compressed before my review began.

Other scripts did the same kind of work elsewhere. They reduced long email threads into decisions and actions, reconciled trackers and brought exceptions to the surface. The technologies varied, but the purpose didn’t. They moved repetitive attention away from me. Every tool on the invisible desk followed the same rule. Reduce the search space, remove the repetition and keep human judgement at the high-risk boundary. The software did not interpret the study, admit the patient or release the document. It arranged the work so that I could spend my time where a decision still mattered.

## Ink & Interface

The second desk had limits. The tools were built for a digital stream, but much of the hospital’s memory still lived in ink. Progress notes carried hurried handwriting from ward rounds. Drug charts contained changes written directly onto paper. Even typed records could return as scanned images after manual redaction. To a person they were still pages. To a script they had become photographs. There was no clean shortcut through that material, so I still had to sit in records rooms, read physical files and bridge the gap between paper and the database by hand.

Digital records presented a different boundary. Coordinators at other sites shared approved lists of patient identifiers through the usual secure channels. Reviewing each record meant opening the Electronic Health Record interface, entering an identifier, waiting for the profile to load, moving through several tabs, copying the relevant codes and then repeating the same sequence again. A capable integration layer existed somewhere behind the screen, but the feeds beneath it were controlled by internal infrastructure teams. At ground level, I had access to a front end designed for careful clinical entry rather than high-throughput research.

So I automated the interface itself. Using open-source desktop automation tools and AutoHotkey scripts, I wrote routines that read the spreadsheet line by line, selected the EHR window and repeated the necessary keyboard and mouse commands. The script didn’t widen my access or bypass a control. It performed the same authorised steps without asking my hands to repeat them hundreds of times. When it ran, the monitor flickered through page after page at the pace allowed by the interface and the network. A long sequence of manual copying and pasting became a background task that could continue while I stepped away from the desk.

## A Gift Becomes a Duty

The obvious question was why I kept the second desk to myself. The scripts worked, and I could have shared them with the wider team. I’d already spent enough time in similar clinical settings, however, to understand the limits of the structure around the role.

A post arrived with a fixed band, a fixed remit and a recognised route of progression. Recruitment, study delivery, administration and management could be measured because the institution already had categories for them. Engineering that changed how those outcomes were produced sat outside the form used to judge the job. Excellent performance could earn a thank you. It could also earn more work. It did not create a new band or remit. I’d heard versions of the same story from engineers elsewhere. The efficient worker is often rewarded with volume because an organisation can see spare capacity more easily than it can see leverage. The better the system works, the less visible the system becomes.

A fridge has a similar career. Nobody pays attention to it while it keeps the food cold. It becomes visible when the milk is warm, and the immediate concern is not what years of quiet work have cost it. The concern is how quickly it can be returned to silence. Reliable infrastructure disappears into ordinary life, and internal tools do the same. Once the friction is gone, its absence becomes normal. The builder becomes visible mainly when something breaks.

Sharing the machinery would have created requests, local adaptations, maintenance and troubleshooting whenever a workflow changed. The person who removed their own clerical burden would become responsible for removing everyone else’s, while keeping all of the original responsibilities as well. The organisation would gain an internal automation service. The job description would remain admirably unaffected. When an institution rewards output but not leverage, the leverage retreats into shadow.

Keeping the mechanism private was a boundary between a skill I’d spent years developing and an unofficial support function with no natural end. The recognised route upwards led towards coordination, meetings and supervision of the existing process. My instinct was to change the machinery producing it. They were different professions. Only one had a recognised path inside the department.

## The Desk Leaves the Room

Outside my main role, I found a marketplace where organisations brought small but real technical bottlenecks. They didn’t need a permanent engineer. They needed someone who could understand the problem, build an extraction or automation system and leave them with something that worked. The work was uneven. Some projects were brief. Others opened into unfamiliar data, unfamiliar systems and problems I hadn’t encountered before. It didn’t yet resemble a dependable career, but the pattern mattered. People were looking for the same abilities that had remained invisible inside my clinical work.

The appeal wasn’t the absence of ownership. It was that the ownership had a clear shape. The problem was named. The outcome was visible. Each project gave me another system to understand and another chance to see what else I could build.

I didn’t have a conventional engineering career behind me to make the next step feel obvious. A stream of small contracts wasn’t the same thing as a profession, and there was still a distance between solving a problem and trusting the work to sustain a life. The question had changed, though. Could the capability that had quietly saved my time become the work itself?

For the shadow engineer, a path into the light was beginning to appear.

