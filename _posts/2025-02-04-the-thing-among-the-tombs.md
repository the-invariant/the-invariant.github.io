---
layout: post
title: "Thing Among the Tombs"
author: Chukwuka Orefo
Author: "Chukwuka Orefo"
display_title: "Thing Among the Tombs"
date: 2025-01-31
categories:
- AI
- Machine Learning
- Infrastructure
- Governance
tags:
- DeepSeek-R1
- open weights
- model governance
- refusal
- alignment
- Mark 5
- local models
- distribution
description: "What happens when open model weights make AI governance lose the body it was built to control?"
image: /assets/images/posts/2025-02-04-the-thing-among-the-tombs/hero.jpg
---

# Thing Among the Tombs

A technical report and a set of model weights appeared last month. Not only an API, a product page or a paper describing something that remains locked inside a company. Something runnable had crossed the boundary.

To understand why that matters, two stories have to remain separate. The first is familiar. A frontier laboratory trains a powerful model, keeps the weights inside its infrastructure and opens a hosted endpoint. The rest of the world sends tokens through the pipe. Use is distributed, but operation remains concentrated. The model may answer millions of people while still living inside one institutional body.

The second story has been moving beside it for years. Open and open-access models already existed. [BLOOM](https://huggingface.co/bigscience/bloom), [OPT](https://arxiv.org/abs/2205.01068), LLaMA, Llama 2, Mistral and other releases had already shown that capable language models would not remain confined to one company or API. The new thing is not openness by itself. It is more capability crossing into that open lineage.

[DeepSeek-R1](https://api-docs.deepseek.com/news/news250120) arrived with code, models and a licence permissive enough for others to modify, distil and commercialise from it. Smaller distilled models arrived with it. Early attention will settle on cost because cost is easy to measure. People will ask whether frontier reasoning has become cheaper, whether pricing must change and whether export controls bought less time than expected. Those are reasonable questions. They are not the first one.

The largest open models still require serious GPUs, memory, engineering knowledge and sometimes cluster architecture. Most people cannot run them casually today. That is a present constraint rather than a permanent administrative boundary. Hardware may become cheaper. Quantisation may improve. Distillation may move useful behaviour into smaller bodies. Tooling may become easier. Governance built entirely around today’s operational difficulty would therefore be resting on something likely to move.

The first question is stranger. What happens when the thing no longer has one body?

## Where Power Resides

For several years, the comfortable theory of AI governance has relied on addressability. The most powerful models lived inside companies. Those companies owned the servers, and the servers sat in data centres requiring chips, power, cooling, contracts, licences and jurisdiction. If the model caused harm, there was somewhere to look. A regulator could call the company. A government could restrict supply. A board could alter policy. A safety team could change deployment. A user could be banned and a logging system could preserve what happened.

That pattern assumes power has an address. Institutions prefer to govern strength this way. Build a reservoir, guard the wall, inspect the pipe and license the operator. The water may be dangerous, but it still moves through a controlled channel. The political imagination likes the arrangement because it keeps the problem administrative. The model is inside the gate. The gate has a name, and the name has lawyers.

Open weights disturb that arrangement. They do not merely make a model cheaper or more available. They change where control can live. Once weights can be copied, mirrored, quantised, fine-tuned, merged, compressed and run locally, the question stops being only what the original builder intended. It becomes what each downstream holder can make the system become.

That is why the story in the Gospel according to Mark, chapter 5, verses 1 to 20 matters.

## The Thing Among the Tombs

The scene begins outside ordinary life, among the tombs, where the community has moved a problem it could not solve. A man lives among the dead because the living have run out of ways to hold him. He is no longer in a home, market or place of care. The difficulty has been pushed beyond the civic boundary.

The text is careful about the failed attempts at control. People had bound him with chains and fastened irons around him. These were not symbolic restraints. They were ordinary instruments of force, metal placed against the body. Civic order had been reduced to hardware. The hardware did not hold. The chains were torn apart and the irons broken, so the man remained at the edge of the world the town could explain.

Then Jesus asks the question authority wants answered before it acts. What is your name? A name usually makes the problem smaller. It turns a presence into a subject and gives it an address inside language. Once named, something can be judged, treated, punished, healed, contained or discussed.

The answer does the opposite.

> “My name is Legion,” he replied, “for we are many.” [Mark 5:1–20](https://www.biblegateway.com/passage/?search=Mark%205%3A1-20&version=NIV)

The town had treated the problem as one body that would not remain bound. The answer reveals multiplicity beneath the visible surface. Authority asks for one name and receives a crowd. It faces one mouth, but not one occupant. That is the useful mechanism here. Not demonology. Multiplicity beneath one apparent body.

A closed model remains administratively singular. It may be copied internally across many machines, but the outside world encounters one service, company, safety policy, release note and place where behaviour can be altered. Usage can be logged and access revoked. This does not make closed systems safe. It makes them governable in the older way.

Open weights move the problem among the tombs. The model leaves the company endpoint and appears on private machines, university clusters, cloud instances, hobbyist rigs, research servers, torrent mirrors and drives nobody will audit. It can cross a border as a file, then be renamed, forked, compressed, tuned or wrapped in another system. The technical lineage remains. The administrative object dissolves.

## No Safety in the Temple

People often fuse alignment and deployment, speaking as though a model possesses one safety character in the way a person might possess a temperament. That is too simple. Alignment in a hosted system can involve training, weights, system instructions, refusal policies, monitoring, moderation, rate limits, logs, interfaces, legal threats and company culture. The user encounters the behaviour produced by the whole arrangement.

Remove the hosted body and the word *alignment* begins to separate into different things. There is training history, learned behaviour, policy, deployment control, interface pressure and the refusal pattern expressed by one model under one wrapper. Those are related. They are not interchangeable.

This distinction mattered before the current release, but open weights make it harder to avoid. A model held behind an API can be governed partly through the machinery that serves it. Once released, its original training remains, but the provider no longer mediates every request. The monitoring layer does not see every use, the system prompt can be replaced and the original refusal behaviour is no longer protected by operational distance.

The [2024 work on refusal directions](https://arxiv.org/abs/2406.11717) sharpens the point. It argues that refusal behaviour in several open chat models is mediated by a low-dimensional direction in activation space and can be altered with limited damage to other capabilities. The important point here is not the method. It is that a visible safety behaviour is implemented through structure, and structures can be found and edited. Safety is not a sacred substance sealed into the soul of a model.

## The Thing With No Motive

The problem is not that every local model will be modified maliciously. That would restore the singular motive the essay has just lost. Once enough capable weights are available for local use, the perimeter moves from the laboratory into many separate environments. Some people will preserve the original restrictions. Some will remove controls they consider annoying. Some will act carelessly. Some will build valuable tools no company would host. Some will misunderstand what they are changing, while others will understand it precisely.

The thing does not need one motive. Its future becomes the aggregate of many local decisions.

A virus offers one imperfect way to feel the change. It is not dangerous because it forms a human intention. Its behaviour changes through replication, hosts and local conditions. Model weights do not copy themselves or infect machines. People, platforms and infrastructure perform that work. The useful similarity is narrower. Once copies spread widely enough, governance stops being only a question of restraining the source. Every host can become a new operating condition, and the original source no longer owns the whole future.

The usual response is to regulate the origin. Audit the laboratory, govern the company, license frontier development, secure data centres and track advanced chips. All of that can still matter. Once a capable model can be copied, reduced, changed and run beyond the original infrastructure, upstream governance becomes one layer rather than the entire perimeter. The chain weakens because it was built for one body.

## The Shape of Restraint

Mark’s chains are a technology for restraining one thing in one place. They assume the problem has limbs and remains where force is applied. Legion presents another shape. The chain touches one surface while multiplicity sits behind it.

Model governance has largely been building chains for bodies. The expected body may be a company, API, model card, licence, safety policy, cluster or data centre. Open weights make that body unstable. The model becomes a file, the file becomes a family, the family produces derivatives, the derivatives become tools and the tools settle into workflows. Somewhere in that route, nobody can say which body the original restraint was meant to hold.

States have met versions of this problem before. Drugs, piracy, contraband, encryption tools and decentralised financial systems differ in almost every important respect, but they share one awkward property. Portable objects can continue moving when demand survives the closure of an official channel. Governments can punish visible actors, seize equipment, close services, freeze accounts and make participation more costly. Those actions are not meaningless. They alter behaviour and raise friction. They do not necessarily govern every copy of the object itself.

The state can still act at chokepoints requiring licences, bank accounts, advanced hardware or public infrastructure. It struggles more with something useful enough to move quietly from machine to machine. I want to remain optimistic about the ability of nations to govern AI. Compute controls, company audits, liability, standards and international agreements all have a place. History is less reassuring about useful, portable objects becoming governable merely because an institution has decided they should be.

The shape of restraint has to match the shape of the thing.

## The Law of Triviality

There is a quieter danger. Institutions may congratulate themselves for governing the parts of AI easiest to see. Hosted APIs, corporate reports, model cards, summit declarations, disclosure forms, benchmarks, voluntary commitments and watermarking proposals all resemble familiar administrative objects. Some are useful and some may be necessary. They are also the parts of the system that fit most comfortably inside a meeting.

Parkinson’s Law of Triviality describes organisations spending disproportionate effort on things they can understand while avoiding the harder mechanism beneath them. AI governance may perfect the paperwork around the temple while the thing among the tombs becomes harder to name. The difficult question is not whether a hosted model should be audited. It should. The difficult question begins once capable weights already circulate outside that hosted system.

What should be governed then? The file, runtime, hardware, cloud provider, user, use case, fine-tune, derivative, distribution channel or private machine? The easy objects will produce policy. The unstable object may produce slogans or delay. Institutions can remain busy beside the visible gate while the locus of power moves elsewhere.

## Cheap as Chips

Cheap reasoning does not calm demand. It teaches demand.

That is the pressure hiding inside the cost story. If inference becomes cheaper, models become smaller and reasoning moves into local systems, people will not merely perform the same work for less money. They will try the capability in more places, build products around it and place it inside ordinary workflows. What begins as an impressive demonstration can become an expectation.

Jevons paradox is useful here because it describes how efficiency can increase total consumption. Cheaper light did not make the world use less light, and cheaper compute did not make it use less compute. If machine reasoning becomes cheaper and easier to operate, total use may rise because new uses become practical.

Restriction before dependency is different from restriction after it. A rare and expensive capability can remain outside most lives. A cheap one may enter private study, software development, translation, research, medical support, legal work and small business operations. Removing it later may no longer feel like safety to the people who have built their work around it. It may feel like deprivation.

That is where informal distribution pressure grows. A state may later decide that some open reasoning models are too dangerous. A platform may remove a checkpoint, a cloud provider may prohibit it or a regulator may demand permissioned runtimes. If enough people have learned to need the capability, demand will look for another route through mirrors, forks, private channels, offshore servers, compressed derivatives and local copies. Ideology may help sustain that movement, but ordinary usefulness is enough to begin it.

This is why DeepSeek-R1 feels larger than one model release. It turns the political imagination away from the tower and towards the thing among the tombs. The tower can be watched. The distributed thing must be governed through the places where it actually appears.

There is no need to make this mystical. The mechanism is physical. Bits copy. Weights move. Hardware may become cheaper. Quantisation and distillation can shift behaviour into smaller models. Open communities can reproduce results, and safety structures can be studied or altered. Hosted control does not travel automatically with a checkpoint.

A regulator can still knock on the door of a company. A government can still restrict chips. A laboratory can publish commitments and an audit can inspect training. Those are upstream tools. They work best while capability remains behind the reservoir wall. Once the water has entered the ground, the question changes from who controls the original model to where its descendants can now flow.

The same properties that make open models valuable make them difficult to govern centrally. Inspectability, portability, modifiability and local operation can support research, competition, privacy and user control. They also dissolve administrative address. For small tools, that tension can remain manageable. Near frontier capability, it becomes structural. The tombs are where the old civic instruments stop working cleanly, not because civilisation has failed, but because the thing no longer lives only inside its preferred containers.

## The Cost of Open Order

Mark’s story does not end with uncomplicated relief. The man is clothed and in his right mind, yet the people are afraid and ask Jesus to leave. They feared the disorder, then feared the power that restored order because it did not fit the boundary through which they had understood danger and safety.

Older stories repeat part of that unease. The Pied Piper removes the rats and becomes another horror when the town refuses the price of deliverance. A wandering hunter may save a settlement and remain outside it because the force capable of defeating the monster also proves that ordinary walls were not enough. Order can return while leaving the town less certain of what it now owes.

A future regime may find ways to make open models more addressable through hardware attestation, licensed runtimes, locked chips, cloud chokepoints, mandatory telemetry, liability or surveillance of distribution. Some of those measures may be necessary and some may work. They would also change the meaning of local computation.

If every machine must report what it runs, privacy changes. If controlling model weights requires locked hardware, ownership changes. If local execution becomes permissioned, sovereignty changes. The cure may ask for the very things local models promised to protect.

That is the unresolved cost. Open models may lower prices, help researchers, expose monopoly, preserve local privacy and weaken lazy assumptions about the capital required to compete. They may also end the simpler safety story in which governing the frontier laboratory meant governing the system.

The laboratory was never the whole problem. It was the easiest body to see. Once the model becomes many, the next safety regime cannot ask only what the original builder promised. It has to follow what happens after the promise is copied, compressed, modified and carried somewhere the original authority cannot reach.

The name is Legion because the system is no longer one.

