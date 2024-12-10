---
layout: post
title: "Clean Fields, Absent Populations"
author: Chukwuka Orefo
display_title: "Clean Fields, Absent Populations"
date: 2024-12-10
categories:
- Data Engineering
- Data Quality
- Data Governance
tags:
- fitness for purpose
- data conformance
- synthetic data
- clinical data
- quality dashboards
- data lineage
- source contracts
- data transformation
- Conway's Law
- organisational knowledge
description: "How can a dataset satisfy every structural health check and still fail the question it was released to answer?"
image: /assets/images/posts/2024-12-10-clean-fields-absent-populations/hero.jpg
---

# Clean Fields, Absent Populations

## I. What a Room Can Hold

There comes a stage in the life of a system when work shifts from making things function to making them look understood. In one project, the quality discussion moved from whether checks existed to how their results should be presented. Completeness could become a percentage. Timeliness could become a colour. Several dimensions could be combined into a score that a person could understand without spending the week tracing source files and joins.

I understand the attraction. A dashboard requiring a half-hour explanation has failed at something, although I’m not always sure the failed thing is the dashboard. During one discussion, more energy went into the colour and arrangement of a measure than into what the system would do when its threshold was crossed.

I kept waiting for the action behind the graphic. A release might stop, the affected tables might be withheld or a review task might be created. It was also possible that the number would turn red and remain there until the next meeting, by which time everyone would at least recognise it. Parkinson’s Law of Triviality is normally illustrated by a committee that can discuss a bicycle shed more easily than a reactor. The version I kept seeing was quieter. A colour, label or client-facing graphic could be discussed by almost everybody in the room, while the source contract, lineage event and promotion rule required several people to reconstruct a mechanism they did not all share. Nobody needed to choose presentation over control deliberately. Attention gathered around the object the room could hold in common.

## II. A Table with No Past

The score exposed another failure. Data can satisfy every structural check and remain unusable for the question it has been released to answer. I had seen generated datasets in which the columns existed, the types matched and the category values were valid, yet a rare group almost disappeared or an important relationship between variables weakened enough to change the analysis.

The table was clean when inspected one field at a time. Used as a population, it was not the same table.

Conformance is easier to standardise than fitness. A null rate can be measured without knowing why the data will be used. Fitness introduces the population, the decision and the cost of being wrong. Those conditions change between projects, which makes them awkward material for a single organisation-wide score. Clinical work had made that dependence on context feel ordinary to me. A result does not become subjective because its meaning depends on the patient, the timing and the reason it was requested. Those conditions are part of the evidence. Data quality has the same inconvenience.

I began separating the questions that the score had compressed. At the source boundary, I needed to know what arrived, from whom, under which schema and with which known omissions. During transformation, I needed the assets, rejected records, changed cardinalities and operations that produced the table. At the point of use, none of that could decide whether the release contained the population, period or relationships required by a particular piece of work, but it could stop the next team beginning from rumour.

A layered architecture did not solve quality by itself. Its value was simpler. It stopped the final table pretending it had no past.

## III. The Knowledge Outside

Across several organisations, I found partial versions of this arrangement. Supplier assurance existed in a document, while the receiving pipeline did not retain the declared source version. An ingestion script rejected values it could not parse, but plausible values passed without challenge. A release dashboard measured completeness, while researchers maintained separate knowledge about whether the fields were actually usable. Model evaluation lived somewhere else again. Each part could be sensible within its own boundary. Systems tend to inherit the communication structures of the organisations that build them, and the pipeline reproduced the distance between those views.

Sometimes I was asked to carry information from one part into a room that needed an end-to-end account. I traced what I could, sent the measures and was told the explanation was not clear enough. They were right. I had described the part I could see. The request for a complete answer travelled down the hierarchy much faster than the authority to require missing evidence from upstream. I could calculate, inspect and explain. I could not make another team emit lineage, change its source contract or stop a release because my diagram looked more coherent that way.

For years I had assumed the complete picture existed somewhere above me. By then, people above were waiting for somebody below to assemble it. That did not mean they knew nothing, or that I had suddenly become the one person who understood the system. It meant knowledge was not distributed according to the chart.

I had begun by thinking the pieces merely needed joining. The possibility that some of the missing links had never existed was harder to accept.