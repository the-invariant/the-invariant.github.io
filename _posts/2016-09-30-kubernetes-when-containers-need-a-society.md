---
layout: post
title: "Kubernetes: When Containers Need a Society"
author: Chukwuka Orefo
display_title: "Kubernetes: When Containers Need a Society"
date: 2016-09-30
categories:
- Software Engineering
- DevOps
- Infrastructure
- Containers
tags:
- Kubernetes
- Docker
- container orchestration
- desired state
- Pods
- Services
- Deployments
- scheduling
- reconciliation
- distributed systems
- research software
description: "What remains when every container can disappear?"
image: /assets/images/posts/2016-09-30-kubernetes-when-containers-need-a-society/hero.jpg
---

# Kubernetes: When Containers Need a Society

## The Part Docker Did Not Solve

Over the past few months, I’ve started taking on small technical projects outside my main clinical role. Some scripts remain private because they exist only to lighten my own workload. This work is different. Other people need the software to keep working without me beside it. Docker has solved much of the setup problem. I can package the Python version, dependencies, application and startup command into an image, then run the same thing on another machine without rebuilding the environment from memory each time.

What Docker doesn’t solve is what happens after the container starts. If it stops, somebody has to notice. If the machine fails, somebody has to choose somewhere else to run it. If the application needs three copies, somebody has to start all three and check that they remain alive. Releasing a new version means replacing the old containers without taking the service down.

In practice, that person is still me. The container can be reproduced, but the service depends on a sequence of actions that mostly lives in my head. [Kubernetes](https://kubernetes.io/blog/2016/09/kubernetes-1-4-making-it-easy-to-run-on-kuberentes-anywhere/) starts to make sense when I stop treating it as another way to launch containers. It lets me describe what should be running, then keeps checking whether the cluster still matches that description.

## The Number That Refuses to Fall

Kubernetes runs containers inside Pods. A Pod can contain one container or a small group that needs to share the same local network and storage, but the Pod itself is temporary. Suppose the application needs three copies. I declare three replicas, and a controller checks how many Pods are actually running. If one disappears, the count falls to two and Kubernetes creates another. The failed Pod does not return. What returns is the number.

That is the difference between a command and a declared state. A command tells a machine what to do once. Start this container. Stop that process. Copy this file. A declared state describes what should remain true. Three replicas should exist. They should run this image, expose this port and request this amount of memory. Controllers keep comparing that description with the cluster as it is, then try to close the gap whenever the two differ. The system no longer waits for me to notice the missing container and repeat the command.

The scheduler handles placement. A Pod describes the resources and constraints it needs, and the scheduler chooses a suitable machine. Memory still fills, processors still become busy and networks still fail, but placement no longer depends entirely on a map I have to remember. Deployments apply the same approach to versions. A new image can be introduced gradually while older Pods are removed, allowing the service to remain available during the change.

A recent paper on [Borg, Omega and Kubernetes](https://research.google/pubs/borg-omega-and-kubernetes/) traces the ideas behind this approach. Years of running large numbers of tasks have produced a practical lesson. Individual processes fail, so the system has to expect replacement rather than treat every failure as an exception.

## The Name Without a Body

Replacement creates a simpler problem. A new Pod may start on another machine with another network address, so anything depending on the old address loses it when the Pod disappears. A Kubernetes Service gives those changing Pods one stable name and route. Labels identify the Pods currently performing the work while the rest of the application continues using the same Service address.

One Pod can disappear and another answer under the same name. The member changes without taking the role with it. The application no longer needs to know which container is serving the request. It only needs to know where the service lives.

## The Green Light Lies

A stable service can still be wrong. Kubernetes can use [liveness and readiness checks](https://kubernetes.io/blog/2016/06/container-design-patterns/) to ask whether a process is alive and whether it is ready to receive traffic. Neither check asks whether the answer being returned is correct. Three Pods may be healthy while all three read stale data. A service may respond quickly and still produce the wrong result, with admirable consistency.

Kubernetes can restore the system I described. It cannot tell me whether I described the right system. Once containers can be restarted, replaced and reached without me, the next problem is seeing what they are doing while they run. I need to know which requests are slowing down, which Pods are failing and whether the service is behaving as expected.

Keeping the service alive is no longer enough. I need to see what it is doing while it lives.



