---
layout: post
title: "Two Doors, One Room"
author: Chukwuka Orefo
display_title: "Two Doors, One Room"
date: 2021-04-30
categories:
- Software Engineering
- Systems Design
- Web Development
tags:
- Flutter
- Django
- FastAPI
- PostgreSQL
- API design
- business logic
- shared state
- client-server architecture
description: "Where should a rule live when two screens must remain one system?"
image: /assets/images/posts/2021-04-30-two-doors-one-room/hero.jpg
---

# Two Doors, One Room

The charity now has one activity record behind most of its operational work. A member of staff creates the session through a Flutter application while away from the office. A manager opens the same activity in a browser, where its report state, payment information and later corrections sit beside it. PostgreSQL holds the record beneath both views, while Django carries the wider workflow around it.

That arrangement has removed most of the old reconciliation. It has not removed every copy of the organisation’s rules. Some are still living inside whichever screen first needed them.

## The Rule Hiding in the Screen

A manager asks for a calculation to appear on the mobile page. The member of staff already has all the relevant information in front of them, she says, and making them open another view would be ridiculous. She explains the workflow twice, perhaps because I have gone quiet. I am not confused about why the number is useful. I am trying to decide whether it is merely a number on this page or another part of the business process pretending to be a display choice.

I put it in Flutter. The request is small, the calculation is simple and nothing else appears to depend on it. It works.

Soon afterwards, the management interface needs the same total. The manager is looking at the activity from another part of the process, but the formula has not changed, so I copy it into the browser code as well. That also works.

## Two Correct Answers

For a while, there is no reason to regret either decision. Then one of the rules behind the calculation changes. The management interface is updated first, while the mobile release continues carrying the earlier version. The same activity now produces one total on the phone and another in the browser. Nothing crashes. No alert fires. Both numbers arrive in the same tidy font.

I put the two screens beside each other and show the manager. She asks which total is right. I start explaining the order in which the releases went out, then stop. Release order explains how we arrived here. It does not tell her which number the charity should use.

## The Game Beneath the Move

There is an old game called *Snake*. Most people know it without needing much explanation. You move a line around the screen, collect an object and try not to hit the wall or your own growing body. Someone can play it for years, enjoy it and even decide they want to make games while knowing almost nothing about how *Snake* is built. Playing teaches the experience. Building means dealing with the game loop, keyboard input, timing, collision detection, stored state and the rules that must remain true after every move. The player knows when the game feels wrong. The developer knows why changing one rule can break something elsewhere.

The comparison only goes so far. The manager is not merely a user. She understands the operational work better than I do, including why the number matters and what happens when staff cannot see it. I understand what happens when two clients are allowed to own the same rule. The system has to be built between those partial views.

## One Operation, Two Doors

The calculation moves behind the interfaces. The mobile application and browser now send the values and proposed action to the backend. Django retains identity, permissions and the wider workflow. A narrower FastAPI service handles operations that do not require the whole web application, while PostgreSQL holds the shared result. Both clients receive the same answer from the same operation.

Moving the rule is not simply a matter of copying the function into another file. The endpoint needs an input contract. Existing activities have to survive the migration. Tests must cover the rule without opening either client, and both interfaces need to stop calculating locally and trust the value returned to them. I spend longer than expected checking old records because a small difference in rounding can look like another version of the original problem. At this point, I am not keen to demonstrate the value of centralisation by producing a third total.

The benefit becomes visible when the rule changes again. I update it once, and the mobile application and management view return the same total without separate releases carrying separate copies of the logic. A correction made from the phone appears in the browser as the same state rather than another interpretation of it. When someone asks where the number came from, there is one operation to inspect and one set of tests to run.

## The Boundary Moves

That solves a real problem, but it also makes the platform more dependent on what happens behind the screen. Staff no longer need to understand invoice logic, and managers no longer reproduce validation in the browser. More of the work now belongs to the request travelling through the backend.

I am pleased with that, mostly. There is still the question of whether I have made the boundary too strict in places where the user needs more freedom. A later request proves that I have. Staff work around one of my cleaner decisions because the workflow I modelled is not quite the workflow they have, so I move that boundary. The calculation stays where it is.

The two interfaces have become different doors into the same room. The room is now doing enough work that one submission can remain open long after the person has finished pressing the button.


