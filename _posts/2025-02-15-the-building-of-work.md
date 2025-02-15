---
layout: post
title: "The Building of Work"
author: Chukwuka Orefo
display_title: "The Building of Work"
date: 2025-03-15
categories:
- Software Engineering
- Systems Architecture
- Data Engineering
- Concurrency
tags:
- concurrency
- parallelism
- processes
- threads
- goroutines
- channels
- Python
- Rust
- memory management
- distributed systems
description: "What happens when the machine becomes the limit?"
image: /assets/images/posts/2025-02-15-the-building-of-work/hero.jpg
---

# The Building of Work

I inherited a clinical extraction pipeline written for a machine with much more memory than the environment now available to it. On the smaller machine, the job could run for days, consume most of the available RAM and still produce an archive whose later tables were missing. The archive existed, which made the failure unusually polite. The work had not necessarily finished.

Rebuilding it forced me to separate several words I had previously allowed to sit together because they all sounded vaguely like workers. Process, thread, hardware thread, goroutine, core and task describe different layers of the machine, although computing has named them as though somebody kept requesting a smaller employee. I use a workplace building to keep them apart.

## The Tour

The building stands on a finite plot of land. Each floor is a separate workplace. Workers on one floor share rooms, cupboards and equipment, but they cannot casually enter another floor and alter what is kept there. Information must travel between floors through an agreed route. Every worker carries a sketchpad containing the work immediately in front of them, while the floor has a shared store room holding material several workers may need.

The workers need desks. Several desks allow several pieces of work to happen at once, and one desk may keep two work folders open so another stream is ready when the first stalls. Job cards move around the floor, often far outnumbering the workers or desks, while a rota decides which worker receives each card. Put a count of ten in the shared store room and ask two workers to add one. The first reads ten. Before the updated value returns, the second also reads ten. Both add one correctly, both write eleven and the cupboard finishes with the wrong answer. Give the cupboard a key and the workers must take turns. The first writes eleven, returns the key and the second writes twelve. The result is correct, although a queue has formed around the door.

Now place the extraction pipeline inside the workplace. One job card reads rows from a database into a bounded batch, another prepares or validates that batch, and a third compresses and writes the output. Trays between them hold limited amounts of unfinished work. When the writer slows, its tray fills. The preparation worker can no longer hand over another batch and must wait. Its incoming tray then fills, so the reader stops asking the database for more rows. Pressure moves backwards until the source waits. The database has not become faster, and neither has the disk. The building has simply stopped allowing the quickest worker to fill every room with unfinished work. That is the workplace. Its parts can now take their technical names.

## The Land and RAM

The land is physical memory. A program needs space for code, data, stacks, heaps, buffers and the operating system’s own work. Available RAM sets the boundary around how much can remain active at once. The operating system may use storage to relieve some pressure, but storage is not a second plot of equally fast land. Once the job begins depending heavily on it, the building continues in the manner of an office relocated into a filing cabinet.

The old extraction design behaved as though the larger plot still existed. It accumulated too much intermediate data before writing a durable result. On the smaller machine, memory became the governing constraint. The answer was not simply to ask each operation to hurry. The work had to stop occupying the whole plot at the same time.

## The Floors and Processes

Each floor is a process. A process receives a virtual address space that appears, from inside, to belong entirely to it. The operating system maps that address space onto physical memory. Another process receives another address space, creating a strong boundary. One process cannot normally reach directly into another process’s memory and alter what it finds there.

Information crossing between processes needs an explicit route. Pipes, sockets, queues, files and shared-memory regions are all forms of inter-process communication. The wall prevents casual memory access, although it does not guarantee that the data sent through the approved door is sensible. Architecture has yet to find a reliable substitute for judgement.

## The Workers and Threads

Threads are workers inside one process. They share the process address space, heap, open files and other process-level resources. That makes cooperation relatively cheap because they can reach the same objects. It also means one thread can damage state another thread depends upon.

A thread is not a small process. It is another path of execution inside the same memory boundary. Multithreading means the program contains several such paths. Whether they execute simultaneously depends on the hardware, runtime and workload beneath them.

## The Worker’s Sketchpad and the Stack

Each thread normally has its own stack, represented in the building by the worker’s sketchpad. Function calls add frames containing local variables, return information and the current chain of execution. When a function completes, its frame can be removed and the space reused.

One thread has one active call chain while another thread has another. Their separate sketchpads do not create process-level isolation. A damaged stack may still crash the wider process or corrupt shared memory in an unsafe environment. The sketchpad is private working space, but the floor remains shared.

## The Shared Store Room and the Heap

The heap is the floor’s shared store room. Objects whose size or lifetime cannot be handled neatly on a stack live there, and several threads may hold references to the same object. That shared access makes cooperation possible, but it also creates race conditions.

In the count-of-ten example, reading, adding and writing appeared to be one simple action. At machine level, the operations could interleave. Both workers read the same earlier value and one update disappeared. The arithmetic was correct. Timing became part of the answer without anybody intending it to.

## The Key and Locks

A mutex or lock is the key to the shared room. One thread acquires it, completes the protected section and releases it while another thread waits. The lock restores correctness by restricting concurrency around shared state.

That restriction introduces contention. More workers can improve throughput only while enough of their work remains independent. Give every worker one key and the queue soon becomes the main feature of the workforce. The system remains correct, but much of the concurrency has been converted into orderly waiting.

## The Desks and CPU Cores

A CPU core is a physical desk on which instructions can execute. The operating system schedules software threads onto the available cores. A thread may run, pause, block while waiting for data and later resume, perhaps on a different core.

More cores create more physical opportunities for simultaneous execution. The number of threads and the number of cores remain separate facts. A program may create hundreds of threads while the machine provides only a few desks, leaving the scheduler to decide whose work sits where and for how long.

## Concurrency and Parallelism

Concurrency means several tasks make progress over the same period. One worker can manage several jobs by switching when one begins waiting, so a program can be concurrent even on a single core.

Parallelism means more than one instruction stream executes at the same moment. That requires multiple suitable execution resources. Concurrency is an arrangement of work. Parallelism is a condition of execution. They often appear together and are regularly treated as synonyms, which is convenient until somebody has to diagnose performance.

## Two Folders on One Desk and Hyper-Threading

Hyper-threading, or simultaneous multithreading, exposes more than one logical execution context on a physical core. My first picture used several monitors attached to one computer. It made the logical contexts visible while quietly adding too much independent machinery.

A better picture is one desk with two work folders held open. When one instruction stream stalls or cannot use part of the core, the other may provide useful work. The contexts retain separate architectural state, but much of the core’s execution machinery and cache remains shared. Two logical hardware threads are not two complete cores. The desk has become better at filling its idle moments. It has not divided into two desks.

## The Job Cards and Goroutines

A goroutine is a lightweight unit of concurrent work managed by the Go runtime. It is not a small operating-system thread. Many goroutines can exist while the runtime schedules them across a smaller pool of operating-system threads.

Inside the building, goroutines are job cards. Workers pick them up, pause them, resume them and complete them according to the rota maintained by the scheduler. This allows a program to express large numbers of concurrent activities without creating an operating-system thread for every task. The runtime tracks which goroutine is ready and which is waiting for input, output, a lock or another event.

A task is the work described by the card. A goroutine is one way Go represents and executes that work. A thread is the worker capable of carrying it, and a core is the desk where the worker may receive time to act. The words overlap in ordinary conversation because the activity travels through all four layers. The layers themselves remain different.

## The Handover Trays and Channels

Channels are controlled handover points between goroutines. One stage sends a value, another receives it, and a buffered channel can hold a limited number of values between them. The tray allows two stages to work at different moments without letting unfinished material accumulate without limit.

In the extraction pipeline, a reader goroutine pulled rows from the database in controlled batches. Another stage prepared or validated those batches, while a writer compressed them and produced the output. When the writer became slower than the reader, its incoming channel filled and the next send blocked. That blockage moved backwards through the earlier stages as backpressure. The fastest component was no longer allowed to create unlimited unfinished work merely because it could. The system’s rate began to reflect its most constrained stage.

Backpressure did not make the writer faster. It made the rest of the pipeline respect the writer’s actual capacity. That was enough to stop speed at one boundary becoming exhaustion everywhere else.

## Python and the Interpreter Door

Python remains useful for research logic, study criteria, SQL preparation and scientific exploration. Its concurrency behaviour depends on the implementation and the kind of work being performed.

In conventional GIL-enabled CPython, one thread at a time executes Python bytecode within an interpreter. Threads can still help when work waits on files, networks or native operations that release the lock, but they do not automatically make CPU-heavy Python code run in parallel. Separate processes provide separate interpreters and can execute Python work in parallel, but large datasets must then be copied, serialised and reconstructed across process boundaries. More floors provide more isolation and execution capacity. They also create more doors through which the work must travel.

For the original extraction design, that movement mattered. A large in-memory object copied between processes would have reproduced the pressure the rebuild was meant to remove. Parallelism without attention to the material being moved can create several busy floors and one exhausted plot of land.

## Rust and the Rules of the Store Room

Rust approaches shared state through ownership and borrowing. A value has an owner, while other parts of the program may borrow it under rules that distinguish shared reading from exclusive mutation. Moving a value prevents the earlier holder from continuing to use it as though ownership had remained behind.

The compiler checks many of those arrangements before the program runs. In the workplace, the store room does not merely have a key. The items inside it have explicit owners and controlled forms of temporary access. That discipline prevents many memory and concurrency errors before they enter the building.

Rust offered stronger guarantees, but it was more machinery than this extraction utility required while its operational shape was still being worked out. Go provided a simpler concurrency model that the surrounding team could maintain. The choice was not between a serious language and an unserious one. It was between different kinds of control, complexity and future ownership.

## More Land and Distributed Work

When one machine cannot carry the workload, the system can spread across several plots. Processes run on separate machines, data may be divided into shards, and work crosses the network through messages, queues or distributed storage.

The new land creates capacity, but it also turns communication, coordination and partial failure into first-class parts of the architecture. A single machine can fail. A distributed system can fail in sections while continuing to look broadly alive, which is a more sophisticated form of inconvenience. One building may believe a batch was handed over while another never received it. A retry may repeat work. A partition may leave two parts of the system with different accounts of what has completed.

Distribution does not remove the original questions about workers, queues and shared state. It moves some of them across a network and adds uncertainty about whether the other building is slow, unreachable or gone.

## The Pipeline After the Rebuild

The rebuilt extraction pipeline moved controlled batches through concurrent stages, checkpointed completed work and generated delivery evidence through record counts, manifests and checksums. Memory remained bounded because each stage could hold only a limited amount of unfinished work. When the writer slowed, the pressure travelled backwards and eventually stopped the reader rather than allowing the process to consume the whole machine.

The runtime fell substantially. More importantly, a partial archive no longer counted as proof that the job had completed. Checkpoints distinguished finished work from work that still needed to resume. The manifest described what the delivery should contain, record counts showed what had passed through it and the checksum allowed the resulting files to be verified after they left the machine.

The pipeline did not become faster because every instruction began moving faster. The work was divided into stages, waiting was organised and capacity was allowed to travel backwards through the system. Incomplete work had acquired a visible state. The archive could no longer impersonate completion merely by existing.

