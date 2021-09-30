---
layout: post
title: "The Request Is Not Work"
author: Chukwuka Orefo
display_title: "The Request Is Not Work"
date: 2021-09-30
categories:
- Software Engineering
- Systems Design
- Distributed Systems
tags:
- Celery
- Redis
- Django
- PostgreSQL
- asynchronous processing
- background jobs
- idempotency
- retry logic
- workflow state
- operational reliability
description: "What remains unfinished after the page reports success?"
image: /assets/images/posts/2021-09-30-the-request-is-not-the-work/hero.jpg
---

# The Request Is Not Work

The charity’s mobile application now sends an activity into a backend shared with the management interface. Django validates the user and the proposed change, PostgreSQL stores the activity, and the same request creates an invoice record, updates the report state and sends a notification before anything returns to the phone.

The records agree, which is what the earlier platform was built to achieve. The price is that the slowest dependent task controls how long the member of staff waits.

## The Button Pressed Twice

One submission takes long enough that the person presses the button again. Nothing on the screen has changed, so the second press is reasonable from their side. The backend sees two valid requests and stores two activities.

I disable the button after the first press. That removes the duplicate and leaves the page just as slow. It is a useful fix in the way a lid is useful when something underneath it is still boiling.

## The Work Outlives the Page

The next attempt is to let the additional work continue inside the web process after the response has been sent. The interface returns sooner, and for a while that looks close enough. During testing, I restart the application and the unfinished operation disappears with the process. The page has acknowledged the activity, but nothing durable is now responsible for finishing it.

I’d already moved behavioural logging outside a request path in another system because customers shouldn’t wait while an application records clicks and pauses. The shape is familiar, but the consequence is different. Losing one analytics event leaves a chart incomplete. Losing an invoice or a safeguarding notification leaves a person waiting for something the screen has already implied will happen.

The longer work moves into Celery, with Redis holding the queue. Django validates and stores the activity, places the invoice and notification jobs onto the queue and gives the phone control back. A worker takes each job separately.

## When Retries Remember

The page becomes responsive again. Then a worker creates the invoice and stops before recording the task as complete. Celery retries it, which is what I configured it to do, and the second attempt creates another invoice.

The retry has not forgotten the task. It has forgotten the effect. It knows that execution did not reach the final state, but the database write happened before the worker failed.

## The Effect Needs an Identity

The invoice operation needs an identity that survives the worker. Before creating anything, the task checks whether the action has already completed for that activity. A retry that finds the earlier write returns the existing result instead of producing another. Notifications need the same treatment, while longer document jobs preserve their last completed stage so that they do not begin again as though nothing happened.

This sounds like the kind of thing an engineer ought to have designed from the beginning. Perhaps. I had designed a queue that could repeat work and then acted surprised when it repeated the work. The useful part is that the failure leaves enough evidence to make the correction precise.

## Acceptance Is Not Completion

A manager later opens an activity that the application has accepted and finds no invoice attached. I tell her that the web request succeeded but the background task failed. She lets me finish, which is generous, then points at the missing invoice. From the organisation’s side, the work is not complete.

The interface begins distinguishing receipt from completion. An activity can be accepted while the dependent work remains pending, failed or complete. Managers can see that state and retry or investigate the failed operation without asking staff to submit the session again. Alerts are attached to the job requiring attention rather than to the page the user has already left.

## The Queue Behind the Screen

The practical result is ordinary. Staff submit the activity and continue with their day. Invoices and notifications complete without holding the phone open. A worker can fail without making the original action disappear, and a retry no longer repeats the consequence merely because it repeats the code.

Most users never see the queue. That is part of the improvement. I can still see it, which means the system has a way to make its unfinished work visible to somebody. A failed worker leaves a status, a timestamp and a trail through the logs.

