---
layout: post
title: "The Go-Between"
author: Chukwuka Orefo
display_title: "The Go-Between"
date: 2018-02-28
categories:
- Software Engineering
- Clinical Data
- Concurrency
- Research Consulting
tags:
- Python
- Go
- multithreading
- multiprocessing
- hyper-threading
- GIL
- goroutines
- channels
- backpressure
- memory
description: "What if the programme is not slow, but waiting in the wrong place?"
image: /assets/images/posts/2018-02-28-the-go-between/hero.jpg
---

# The Go-Between

## The Waiting Room

Over the past year, some of the cohort tools I’ve built have become services used beyond my own desk. Other research teams now request clinical data extracts so they can begin their own analysis. SQL finds the approved rows, and Python helps me inspect, test and refine the study logic. The query itself is no longer the slow part. Once the pull begins, the programme must read millions of patient records, prepare their shape, compress the output and write the permitted result to disk.

That work matters differently now. When a script stalls on my machine, I can inspect it, restart it and carry the missing context in my head. When another team depends on the result, a programme that completes only while I’m watching it isn’t much of a service. Right now, I’m staring at a terminal that has shown no progress for twenty minutes. There is no error. The activity monitor shows Python occupying a full logical core, but the output file hasn’t grown. The database connection remains open, no new rows are arriving, memory is climbing towards sixteen gigabytes and another research team is waiting for the extract.

The stages do not move at the same pace. The database takes time to return a batch. Python takes time to validate and prepare it. Compression occupies the processor, and the disk takes time to accept the compressed blocks. The writer waits while the reader is blocked. Then the reader catches up and fills memory faster than the writer can empty it. My first instinct is to keep the whole path in Python and add threads because the activity monitor shows unused capacity. While one thread waits for the database or filesystem, another should be able to continue with work already received.

That helps with the external waiting. The heavier Python preparation behaves differently. The process looks busier, but throughput barely changes. More threads exist, yet validation, object construction and batch preparation do not spread across the processor cores in the way I expect. From the terminal, the delay looks the same as before. The programme is standing still. Inside the machine, one thread is waiting for the database while the others are waiting for Python.

## One Door, Many Hands

I’ve reached a limit in the way this CPython process is arranged. The explanations I’ve read about processes, threads and processors are no longer definitions. They describe what is happening in front of me. A process is one room in the machine, with its own address space and a heap where its objects live. The threads inside it keep their immediate execution state on separate stacks, but they work with objects held in that shared heap.

Shared memory makes coordination cheap. One thread can hand another a reference without copying the whole batch somewhere else, although care is needed when several threads can alter the same state. CPython protects the interpreter’s internal state with the [Global Interpreter Lock](https://docs.python.org/3.6/glossary.html#term-global-interpreter-lock). Several threads can exist inside one Python process, but only one executes Python bytecode at a time.

When a thread blocks on the database, disk or network, CPython can release the interpreter and let another thread run. That is why threads help with external waiting. Once they return to Python-level validation, object construction and batch preparation, they queue for the same interpreter again. The extra threads are real. The parallel Python execution is not. Adding more hands does not add more doors. It creates a larger crowd at the same entrance.

The processor count makes the illusion stronger. Hyper-threading allows one physical core to expose more than one logical execution context, but those logical processors still share much of the same hardware. It is closer to one workbench keeping two job cards ready than to two independent benches. The machine has more room than one thread is using, but that does not mean every number shown by the operating system represents another complete worker, or that Python can admit them all at once.

## A Room Divided

The obvious escape is [multiprocessing](https://docs.python.org/3.6/library/multiprocessing.html). A second process has its own interpreter, its own GIL and its own address space. The operating system can place it on another physical core, allowing Python work to execute in parallel. The lock is gone, though the shared room goes with it.

If one process reads a large clinical batch and another prepares it, the batch has to cross the boundary between them. It must be serialised, copied into the second address space and reconstructed before the second process can begin. That hand-off is cheap for a small message. For an extract containing millions of patient rows, it becomes part of the workload. Both processes may hold their own representation of the batch while it is moving, memory rises, and much of the time gained through parallel execution is spent packaging and copying the data.

The solution to the interpreter lock creates another problem. Threads share data cheaply but queue behind one interpreter. Processes gain more interpreters but make the data travel. More concurrency inside one Python process does not produce more parallel Python execution. More Python processes do, but they divide the memory that made the threads useful in the first place.

The question is no longer how many workers I can start. It is how much movement each arrangement demands before those workers can do anything useful. The problem is not how many processors the machine appears to have. It is what Python forces the data to do merely to cross a room.

## Where Python Ends

The deeper I look, the less useful it becomes to call Python slow. Some of the fastest operations in the programme are invoked through Python while executing outside ordinary Python bytecode. NumPy, pandas and other scientific libraries place a Python interface over compiled numerical code. The visible language describes the operation while C, Cython, Fortran or another native library performs much of the repeated work underneath.

That is why Python remains valuable. It is where I can express the study, inspect the records, alter the criteria and use scientific tools that already exist. Rebuilding that exploratory work in another language would solve the wrong problem. The useful split is not between a slow language and a fast one. It is between calculation and coordination.

Much of the calculation is already running beneath Python. What remains in ordinary Python is the traffic around it. Read the next rows. Construct the batch. Check its shape. Decide what happens next. Hand it onwards. Wait for the next system to accept it. That traffic has become the larger problem because the database, processor and disk are not slow in the same way, and they do not need to stop at the same time.

I do not need another analytical environment. I need a small worker that can keep those stages active inside one process, share batches between them and stop the reader when the writer falls behind. That requirement is where Go begins.

## Where Go Begins

I’ve looked at the alternatives available for this kind of work. Rust gives me strong control over ownership and memory, but modelling the pipeline through ownership, borrowing and lifetimes would slow development to a crawl. The guarantees are valuable. They are more machinery than this data-pull worker needs. Java can do the work, though it brings a JVM, another packaging model and a broader engineering surface into controlled environments I do not fully manage. Node.js handles asynchronous input and output well, but sustained transformation and compression would push the design back towards child processes or native code, beginning to recreate the divisions I’m trying to remove.

I’ve started using Go because its concurrency model fits the shape of the pipeline. It is compiled, garbage collected and small enough to deploy without bringing another large platform with it. More importantly, goroutines and channels describe the work directly. The study criteria remain in SQL and Python, where I can inspect and change them. Once those criteria are settled, the Go worker runs the approved query and carries the returned rows through the data-pull path.

In Go, placing `go` before a function call starts it as a goroutine. A goroutine is not another programme or process. It is another independently scheduled part of the same programme. One goroutine reads rows from the database into a fixed-size batch. When the batch is ready, it sends it through a buffered channel. A second receives the batch, checks the output shape and prepares it for writing. A third compresses and writes it.

The goroutines share one process and one address space, so the batch can pass between stages without being serialised into another operating-system process whenever the work changes hands. The worker is no longer sending every stage back through the same Python interpreter. When the reader waits for the database, the Go runtime can park that goroutine and run the writer. When the writer waits for the disk, the reader can fetch the next batch. If two stages have independent processor work and the machine has available cores, the runtime can place them on different operating-system threads.

The channels do more than move data. They limit the amount of unfinished work allowed between stages. If the writer slows down, the output channel fills and the preparation goroutine blocks. If the batch channel then fills, the reader stops asking the database for more rows. The pressure travels backwards through the worker.

The programme does not keep pulling patient records into memory simply because the database is ready to provide them. The slow stage eventually tells the source to wait. The bottleneck has not disappeared. The disk is still only as fast as the disk, and the database still takes time to return rows. What changes is that one delay no longer forces every other stage to become idle, while one fast stage cannot flood the rest of the machine with work it is not ready to accept.

Coming from Bash and Python, Go feels unusually plain. The structure sits in functions, channels and explicit error returns, with less hidden control flow. It takes more work to describe the hand-offs before the worker runs, but there is less to infer when it is left running. Python still decides which rows matter. Go decides how those rows move through the machine.

The programme does not become faster because every part moves faster. It becomes faster because the waiting has been given a shape. The next question is no longer how fast the code is. It is where the waiting is allowed to collect.


