---
layout: post
title: "Permission to Land"
author: Chukwuka Orefo
display_title: "Permission to Land"
date: 2016-06-30
categories:
- Software Engineering
- Clinical Research
- Infrastructure
tags:
- Docker
- Docker Compose
- Django
- cloud computing
- hot desking
- software whitelisting
- portable Python
- reproducible environments
- runtime
- institutional IT
description: "What if a portable system works only as an exception?"
image: /assets/images/posts/2016-06-30-permission-to-land/hero.jpg
---

# Permission to Land

Containerisation solved the problem I thought I had. The Waku platform began as a collection of Bash scripts surrounded by Python packages, database drivers and setup instructions that were too easy to lose. Docker gave it a repeatable environment. Docker Compose gave the parts a repeatable arrangement. The pipeline reduced a broad search into a smaller set of records for clinical review.

Getting there took time. Across different hospitals, IT teams helped me install Docker, the Linux virtual machine beneath it and the other software needed on various workstations. Each installation meant raising a ticket, waiting for a suitable time and arranging my day around a remote session. Eventually the pieces were in place, and for a while the arrangement held.

## A Machine on Borrowed Time

The next problem arrived when I sat down to work. Sometimes Docker had disappeared after a network-wide update. Sometimes the virtual machine beneath it was missing. On other days, the tools were still present but I couldn’t reach the terminal required to start them. The permission had made the setup possible. It had not made the workstation mine.

At times I couldn’t run a Bash script or Python. I tried portable Python because it could travel as an executable without a normal installation, which worked until the executable itself fell outside the software whitelist. Then I raised another ticket. IT could connect remotely and rebuild the arrangement, but only when somebody had time. The pipeline might be ready while the workstation was not, so the work waited for the next available appointment with the people controlling the layer beneath the container.

IT was not one thing. One team controlled the software whitelist, another controlled the desktop image and another controlled access to the clinical system. The divisions changed between hospitals. A tool could be approved for one workstation without becoming part of the standard image used elsewhere. The value of the work was understood, but understanding did not turn an exception into system-wide policy.

The J drive preserved the files I placed there. Scripts, notes and documents could follow my account between machines, but the runtime couldn’t. The drive could hold Python without providing Python, and it could hold a Bash script without granting permission to execute it. The hospital remembered my files. It did not remember how to run them.

Hot desking removed the last illusion. Even when a workstation had been prepared and survived an update, I could arrive to find somebody else using it. The configured machine existed. It was simply unavailable. Docker made the runtime reproducible, but it did not make it persistent. [It Worked on My Machine]({% post_url 2014-11-16-it-worked-on-my-machine %}) had only been half the problem. This worked on a machine I didn’t own, for as long as the exception survived.

## The One Door Left Open

I needed the pipeline to run the same way regardless of which hospital computer happened to be in front of me. The one thing I could rely on finding was a browser.

Instead of continuing to rebuild the runtime at each desk, I moved the containerised environment into the cloud. The cloud did not replace Docker. It gave the container a machine that remained where I left it, while a workstation could be updated, reimaged or occupied without taking the pipeline with it. I still needed a simple way to reach the batch process. I could have built the web layer from smaller pieces, but that would have meant creating users, forms, database records and the ordinary plumbing before returning to the clinical problem. [Django](https://www.djangoproject.com/weblog/2015/apr/01/release-18-final/) was the closest existing shape.

The pipeline gained a front door. I could enter the study criteria, start a batch, check its progress and receive a result from whichever hospital desk I happened to be using. The computer in front of me no longer needed Docker, Python or the model libraries. It only needed to display the work. The container had to land once, and every approved browser became a way back to it.

## An Address Without a Desk

The service was still mine, and I was still the person using it. Moving the runtime did not turn the pipeline into a shared platform or change who judged the results. It solved a narrower problem. I could move between hospitals without carrying the runtime with me or waiting for another IT team to recreate the same exception.

Until then, the method had followed me because I was the person who knew how to assemble it. Now it had an address. The workstation could remain temporary because the work no longer lived beneath the desk.

That solved one dependency and exposed the next. The runtime could live elsewhere, but the clinical data could not simply follow it.

The container had permission to land. The data did not have permission to leave.




