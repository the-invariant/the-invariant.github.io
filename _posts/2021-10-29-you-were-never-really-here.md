---
layout: post
title: "You Were Never Really Here"
author: Chukwuka Orefo
display_title: "You Were Never Really Here"
date: 2021-09-30
categories:
- Psychology
- Software Engineering
- Career
tags:
- impostor phenomenon
- Dunning-Kruger effect
- software engineering
- professional identity
- self-assessment
- technical education
- burnout
description: "What if the work is real, but the engineer never appears?"
image: /assets/images/posts/2021-10-29-you-were-never-really-here/hero.jpg
---

# You Were Never Really Here

There is a sketch in the television programme *Little Britain*. David Walliams plays Carol Beer, a customer-service worker who looks put out whenever a customer actually appears. Someone asks for something simple. She taps at the keyboard, stares at the screen and says, “Computer says no.” They explain why the request is reasonable. Carol taps again. The answer remains the same. I think I do that to myself.

A friend of a friend was building an online supplements company. I’d known him for a while and, at some point, he said, more or less, come and help me sort some of this out. So I did. There was no proper role to apply for. I was paid for the work, and the work depended on whatever needed doing that week. Some of it was administrative. Some involved helping around the laboratory. Then there was the website, the data and all the technical bits collecting between them. I knew how to put things together, or enough to get them moving, so that became part of the job as well.

Later, while preparing the company for ISO 9001, he had to write down its processes and who owned them. He was completing one of the forms when he looked over and asked what he should put as my title. I honestly didn’t know.

“Data Science Engineer?”

It came out as a question. He wrote it down and returned to the form. That was the first time I had the title, which sounds slightly ridiculous now because I’d already been doing the work. The title did not create anything. It gave an auditor a name to place beside the processes I happened to be holding together. Once it appeared on the paperwork, everyone else seemed comfortable with it. I was the one who remembered the question mark.

## The Work Had Another Name

This had happened before, although without ISO 9001 to make it official. I’d come through biochemistry, pharmacology, neuroscience and clinical research. Code wasn’t the plan. It was what I reached for when the work became repetitive or awkward enough that doing it by hand felt more absurd than learning to automate it. A researcher needed a cohort from the clinical records. Two spreadsheets no longer agreed. A document had to be cleaned before it could be shared. I would write something small, usually for myself, and then somebody would ask whether they could use it too.

That changes the work. A private script can be ugly and still save an afternoon. Once another person depends on it, you have to explain it, repair it when their workflow changes and make some kind of promise that it will still work when you aren’t sitting beside them. The questions arrived soon afterwards. Could it take another file, could somebody at the other site run it, and could I change it before the next study meeting? They were reasonable questions. The awkward part was that the clinical job remained underneath them. Nothing had been removed because I’d made one part faster. The software simply became another thing I was responsible for.

I kept some tools to myself because I could see where sharing them led. That may sound selfish. Perhaps it was. It was also an attempt not to become the unofficial software department inside a role that still expected the original work to be done. When I said “Data Science Engineer?” years later, it did not feel like a discovery. It felt like another broad name for work that had already been growing between the lines.

## The Logs Are Still Attached

The founder would ask questions that sounded small enough from his side. Could we tell what people looked at before buying something? Could the site recommend a product based on what entered the basket? Could we do that without making the page slower? “Could we” was usually the beginning of several days of work. To answer the first question, the site had to record what customers opened, how long they stayed, what they added and what they removed before checkout. Those events could not hold up the page, so they were sent elsewhere and processed by background workers. The recommendation service used the result later.

Once the system was running, most of that disappeared. That was the point. Customers should not have to know there is a queue. The founder should be able to ask whether the recommendations are working and look at the result rather than listen to me explain the plumbing. I couldn’t see it that way for long. One evening, the recommendations stopped changing. Orders were still arriving and the website looked fine, but the queue behind it kept growing. Newer events were no longer reaching the model.

I blamed the network first because one of the logs made that interpretation sensible. It wasn’t the network, although I spent a good while proving that before another record pulled me back towards the worker. Eventually, I found a state change I hadn’t handled properly, fixed it and watched the backlog begin to fall. By morning, everything had caught up. From the business side, the answer was simple. Yes, it was working again. That is the part I should have remembered. Mostly, I remembered the hour spent looking in the wrong place.

A proper engineer would have known where to start, or at least that was the thought. Somebody who had studied this properly would have recognised the pattern before midnight instead of finding it by wearing the problem down. Then I’d hear a person in a technical conversation use a clean name for something I had learnt through a failure. They would say it once and move on. I would write down the word, even when I already understood the machinery beneath it. At first, I assumed this was simply how everybody learnt. It probably is. The problem is that I hear their answer. I remember my search history.

There were real gaps as well, which stopped me dismissing the whole feeling as nonsense. I hadn’t studied computer science in any order. A slow query led to indexes, indexes led to trees and hashing, and a stalled worker led to queues, scheduling and memory. Every answer exposed several subjects that should apparently have come first. Opening job adverts while tired did not help. A senior role could look familiar, while a junior one read as though a computer-science degree had exploded into bullet points. Algorithms, operating systems, networking, security, five languages and something described as a basic understanding of distributed systems. I knew job descriptions were wish lists and had told other people the same thing. I kept reading the junior role because it felt safer.

## OK Computer

After one of those evenings, I ended up on YouTube watching a video about the Dunning-Kruger effect. It showed the graph people pass around online, with an early peak of confidence, a fall into despair and a long climb towards something calmer. For about ten minutes, I felt better. Perhaps the doubt meant I had learnt enough to see the size of the subject. Perhaps feeling inadequate was, in a roundabout way, evidence that I wasn’t. It is a convenient theory when you want to get yourself off the hook.

Then there was the less flattering possibility. Some of the gaps were real. Parts of the systems I had built were weak, and there were probably others I had not yet learnt to recognise. Calling the feeling impostor syndrome did not make those weaknesses disappear. It might explain why the work never settled the question, but it could also become a polite way of ignoring something I needed to learn. I don’t know. Even writing that sounds as though I’m arranging both sides so I cannot be wrong.

The annoying part was that I was doing the work and marking it afterwards. Anything unfamiliar went directly into evidence against me. Success needed another explanation. The framework had done most of it. The requirements were unusual. I’d only reached the answer because I kept searching. Even the title was easy to dismiss because I knew how casually I had said it. A form had asked for a name and I had supplied one. That did not mean Carol Beer had to accept the application.

## The Extra Hour

The business still needed decisions while I was trying to work out what any of this meant. A release could not wait for me to finish the computer-science education I thought I ought to have completed before starting, so I tested the failures I could imagine, added logs, made the workers recoverable and put things live when they needed to go live. Something was always left behind. A query I thought I should inspect again, or at least felt I should. A test that was probably fine but not quite fine enough for me to close the laptop. A compromise made for one week and still present several months later.

Sometimes the work genuinely needed another hour. Sometimes I just needed the hour. People would begin packing up and I’d say I was nearly done. The games console in the office was mostly furniture. The free food made staying easier, which may have been the point. Stopping was harder than continuing because stopping required me to decide that the system was good enough for the day. If I carried on, the judgement could wait.

I don’t remember most of what I learnt in biochemistry, pharmacology and neuroscience. I couldn’t sit those examinations tomorrow, and nobody would say that made the degrees imaginary. The education remains in how I read a paper, trace a result back through its method and become suspicious when the conclusion is neater than the evidence beneath it. I know my way around that kitchen. Perhaps software is similar. Nobody keeps the whole subject in immediate memory. The job may be knowing what kind of problem is in front of you, where to look and when the answer does not fit.

That thought usually lasts until I look at the junior advert again. By then, the queue is empty, the recommendations are updating and nothing in the logs is asking me to stay. The discrete mathematics book is still beside the keyboard. I open it anyway.


