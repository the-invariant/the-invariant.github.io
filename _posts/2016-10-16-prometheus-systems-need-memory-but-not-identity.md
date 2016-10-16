---
layout: post
title: "Prometheus: In Search of the Engineers"
author: Chukwuka Orefo
display_title: "Prometheus: In Search of the Engineers"
date: 2016-10-16
categories:
- Software Engineering
- Infrastructure
- Distributed Systems
- Research Consulting
tags:
- Prometheus
- Grafana
- Kubernetes
- monitoring
- metrics
- PromQL
- alerting
description: "How do you find the origin of a failure after the process has disappeared?"
image: /assets/images/posts/2016-10-16-prometheus-systems-need-memory-but-not-identity/hero.jpg
---

# Prometheus: In Search of the Engineers

## The Empty Chair

Over the past few months, some of the software I’ve built has moved beyond my own use. Other researchers can reach it, clients can depend on it, and the application may continue running while I’m working somewhere else. That changes what it means for the software to fail. When it was only mine, I could often diagnose a problem through familiarity. I knew which command had been run, which process usually stopped first and which part of the application had recently changed. Much of the monitoring system was simply my memory of the system.

That no longer works once somebody else depends on it. A client doesn’t only need the service restored. They need to know when the problem began, what was affected and whether it is likely to happen again. The explanation has to survive my absence. [Kubernetes]({% post_url 2016-09-30-kubernetes-when-containers-need-a-society %}) has helped with the first part. It can notice that a Pod has disappeared and create another, restoring the declared number of replicas without waiting for me to repeat the command.

Suppose one of three application Pods begins using too much memory. Requests become slower, the process is eventually terminated, and Kubernetes starts another Pod somewhere else. A few moments later, the Service is again routing traffic across three healthy replicas. The number has returned, but the cause has not. Looking at the cluster now may show nothing unusual. The replacement has a different name and address, while the process that experienced the failure is no longer there to be examined.

I had treated recovery and explanation as the same job. They are not. Kubernetes repairs the present, but it doesn’t preserve a detailed account of how the system moved away from the state I declared. By the time I arrive, the chair has already been filled.

## Marks on the Wall

[Prometheus](https://prometheus.io/blog/2016/07/18/prometheus-1-0-released/) begins where the missing process leaves off. A service exposes measurements about its own work, and Prometheus returns at regular intervals to collect them. The process may disappear, but measurements already taken remain. A request counter might look like this.

```text
research_requests_total{
  service="cohort-search",
  status="error"
} 17
```

The number alone says very little. Seventeen errors may be ordinary over several months and alarming over five minutes. Once the value is stored repeatedly with a timestamp, the useful question is no longer how many errors exist, but how quickly they are appearing.

```promql
rate(research_requests_total{status="error"}[5m])
```

The same service can record request duration. An average may look acceptable while a smaller group of requests has become painfully slow, so the measurements need to preserve enough of the distribution to reveal what has changed beneath it. This is the part I need. The service no longer reports only its current condition. It leaves marks that can be read after the moment has passed.

## One Name, Several Bodies

Kubernetes has already separated the service from the identity of any particular Pod. One Pod may disappear and another take its place while the application remains reachable through the same Service. Prometheus follows the same movement. Labels allow measurements to remain attached to the role being performed rather than to one permanent machine.

```text
service="cohort-search"
environment="production"
version="1.3"
status="error"
```

The Pod name can still help during an investigation, but the longer-lived distinctions matter more. If a new version is introduced gradually and the error rate begins to rise, the version label can show whether the change belongs to the release rather than to the service as a whole. The service keeps an operational memory even though the processes doing the work do not keep one identity. Instrumentation is therefore not only a matter of counting. It decides which differences must remain visible after the body that produced them has gone.

## Through the Glass

Prometheus gives me a way to store and question the measurements. It doesn’t automatically give a client a useful explanation. A client shouldn’t need to learn PromQL to see that failures began after a release or that response times have been climbing each afternoon.

[Grafana](https://grafana.com/blog/grafana-2-0-released/) provides a shared surface for those questions. Request volume, error rate, response time and memory use can be placed on the same timeline. The client and the engineer can look at the same period rather than rely on reassurance that the application appears healthy now.

The glass is not the memory. Removing a panel doesn’t remove the measurements stored by Prometheus. A dashboard shows selected questions, and a screen can look complete while displaying only what somebody remembered to measure. A green panel does not mean the whole system is healthy. It means the condition represented by that panel has remained inside the boundary somebody chose. The dashboard does not lie. It answers a smaller question than the person looking at it may assume.

## Before Anyone Calls

A dashboard still depends on somebody looking at it. If the first sign of trouble remains an email saying that the application has become slow, the system has preserved evidence but has not yet learnt to interrupt. Prometheus can evaluate a rule over the same measurements.

```promql
sum(rate(research_requests_total{status="error"}[5m]))
/
sum(rate(research_requests_total[5m]))
> 0.05
```

The rule asks whether failed requests have remained above a chosen proportion for long enough to matter. A brief fluctuation may recover by itself, while an alert that fires for every movement eventually teaches people not to listen. The aim is not to remove the engineer. It is to stop making human attention the only place where the system’s condition can become visible. The client should not have to become the alarm.

## The Last Known Position

Prometheus gives the service a history, but not a complete account of every event. A rising error counter can show that failures are occurring without preserving the particular request that produced each one. It can show when the system changed without always showing the road through which the change travelled. The measurements lead me back to the period in which the service began to move away from normal. They give me a last known position in time.

It was only after following the failure backwards that the name began to feel unusually precise. Four years ago, Ridley Scott’s [Prometheus](https://www.imdb.com/title/tt1446714/) sent scientists and engineers across space in search of their creators. They began with marks left in caves, repeated shapes and fragments that seemed to point towards the same place. The source was absent, so its origin had to be inferred from what remained. I don’t know whether the people who named the monitoring project had the film in mind. They may have been looking past it to the older myth. Still, the coincidence is difficult to ignore.

In the film, the search follows surviving signs towards creators who are no longer present. Here, an engineer follows timestamps, labels and changing counters towards a process that no longer exists. The distance is smaller, but the search has the same limit. The marks can narrow the origin without restoring the thing that made them.

Another boundary sits closer to the work itself. A service can respond quickly and still return the wrong result. Prometheus may show that the application is available, memory use is normal and errors remain low. It cannot determine whether the clinical logic or the data passing through it remains correct. The machine, the service and the data can fail in different ways, and I’m no longer certain that one instrument should be expected to judge all three.

For now, the lesson is narrower. A system does not need every process to remain alive, and each replacement does not need to preserve the identity of the part it replaced. It does need enough memory for somebody arriving later to search for the engineers of the failure.

The part can disappear. The trail cannot.


