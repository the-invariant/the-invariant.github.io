---
layout: post
title: "A Home for the Ledger"
author: Chukwuka Orefo
display_title: "A Home for the Ledger"
date: 2014-12-22
categories:
- Software Engineering
- Cryptography
- Distributed Systems
- Governance
tags:
- Bitcoin
- Ethereum
- proof of work
- trustless systems
- Zerocash
- zk-SNARKs
- cryptography
- decentralisation
- governance
- data provenance
- Git
description: "Where should trust live when no one is allowed to own the history?"
image: /assets/images/posts/2014-12-22-finding-a-home-for-the-ledger/hero.jpg
---


# A Home for the Ledger

## The Laptop That Tried to Mine Money

![Dell XPS M1330 laptop](/assets/images/posts/2014-12-22-finding-a-home-for-the-ledger/01-dell-xps-m1330.webp)

I bought my Dell XPS M1330 around the start of university, somewhere in 2007 or 2008. By 2009, I was still using it heavily enough that pointing it at Bitcoin felt like something I could try. Not because it was a mining machine. It wasn’t. Bitcoin simply felt small enough that my own computer could still touch it. At the time, it wasn’t treasure either. There was hardly a normal market price to speak of, and the coins felt more like tokens inside an odd technical experiment than a financial asset. A year later, someone would still spend thousands of them on pizza. That gives the right emotional scale. They weren’t sacred objects yet. They were evidence that the network worked.

My laptop was running Windows Vista, hot and unhappy, doing a great deal of work for something that barely felt real. The setup was awkward. Drivers, mining software, heat, noise and the persistent sense that I was asking the machine to do something it had never been built to do. Eventually the drive failed and had to be replaced. Coursework disappeared. Experiments disappeared. Whatever remained of that mining attempt disappeared with them. Losing those files was also how I began taking version control and backups seriously, which led me towards Git and GitHub. There are easier ways to learn about data durability, but apparently the Dell preferred practical teaching.

This isn’t a lost-fortune story. Bitcoin didn’t yet feel like something I should treat as a vault, and I don’t remember the experiment as a serious attempt to make money. I remember touching an idea through a hot laptop fan. The strange part wasn’t whether the Dell could earn coins. It was that a network of machines could agree that the work meant something.

## Not the Price, the Shape

By December 2014, Bitcoin is no longer a toy, though it isn’t exactly normal either. The price has already had its fever and its hangover. Bitcoin has been dismissed, hyped, punished by volatility and left standing after each argument about whether it was finished. That is why the price is no longer the most interesting part. The shape is.

Bitcoin asks a systems question. Can a ledger survive without one central keeper? A conventional ledger has an institution standing behind it. A bank, payment processor, state or database administrator decides what happened, in which order and who owns what. Bitcoin tries to replace that single keeper with a public network, cryptographic signatures, shared verification, proof of work and incentives.

That is a larger idea than internet money, and it is also harder than its supporters sometimes admit.

## The Ledger Without a Bookkeeper

People broadcast transactions. Miners gather them into blocks, then search for a hash that satisfies the network’s current difficulty. Other participants can verify the result far more easily than the miner can produce it. The accepted history is the valid chain with the greatest accumulated proof of work. Rewriting an earlier block means repeating the work that followed it and overtaking the continuing network. The system doesn’t make dishonesty impossible. It makes a particular kind of dishonesty expensive, public and difficult to sustain.

That is a different arrangement of trust. Bitcoin doesn’t say that one person is honest. It says to check the signatures, check the rules and follow the history carrying the most accumulated work. The word *trustless* is almost right if it is heard as a provocation rather than a fact. Bitcoin does not remove trust. It moves it into cryptographic signatures, hashes, proof of work and the client software used to interpret them.

Trust also moves into the incentives followed by miners, the wallet protecting the private keys and the exchange many people will use because running the whole system themselves is too much work. The bookkeeper disappears from the centre, which makes the machinery around the book more important.

## Becoming Your Own Bank

A bank is not only a ledger. It is also a support system. It handles reversals, lost passwords, fraud, regulation, complaints and blame. It gives ordinary people somewhere to go when a mistake becomes expensive. Bitcoin removes the middleman, but it also removes the person you phone after making a mess. Lose the keys and there may be no reset. Send money to the wrong address and there may be no reversal. Lose the wallet and there may be no branch.

That isn’t a small cost. A trustless system can return risk to the person that an institution once carried for them. Sometimes that is the point. Sometimes it is freedom. Sometimes it is operational burden wearing a philosophical hat. This helps explain why banks can be interested in the ledger and uneasy about the idea around it. The ledger is elegant. The responsibility is heavy. Online commerce took another path. eBay and PayPal didn’t remove trust between strangers. They managed it through reputation, disputes, payment controls and customer support. Bitcoin pushes more of that trust into protocol, cryptography and consensus. That may be cleaner in theory. It is less forgiving in practice.

People will route around that difficulty. Most won’t run full nodes, inspect client code or manage keys with professional discipline. They will use wallets, exchanges and hosted services. The middleman returns, perhaps thinner and easier to replace, but still carrying trust.

## Proof of Work and Incentives

Proof of work is not work in the human sense. It contains no judgement or craft. The miner changes a nonce, hashes the block and checks whether the result falls below the target. If it doesn’t, the machine tries again. The computation is difficult to produce and easy for everyone else to verify. That asymmetry is the mechanism. The network can verify that computational work has been performed under the required difficulty, while the physical cost appears as electricity, hardware and time. If the block is accepted, the miner receives a reward.

Bitcoin doesn’t assume virtue. It assumes that participants respond to incentives and that attacking the history should cost more than following the rules. A system is not safe because the people inside it are good. It becomes harder to corrupt when the structure has been built around the possibility that they are not.

The cost is real. Proof of work consumes energy and encourages a hardware race. My old laptop experiment already belongs to the early story. CPU mining gave way to GPUs, and specialised machines are changing the field again. The ordinary computer can still verify the ledger. It can no longer compete seriously to write the next page.

## The Programme in the Ledger

Ethereum feels like the next question after Bitcoin. If Bitcoin offers a shared ledger, Ethereum asks whether the ledger can also carry programmes. Bitcoin is narrow in a way that gives it strength because it secures a monetary history. Ethereum asks for contracts, applications, organisations and rules that execute as code. The contract is no longer only a document interpreted later by people and institutions. Part of it becomes a programme placed on shared infrastructure.

That possibility is fascinating because it makes agreement programmable. It is dangerous for the same reason. If the contract is code, bugs become governance. A human contract lives inside interpretation, precedent, discretion and context. The words are never the whole agreement. A smart contract tries to make part of that agreement explicit enough to execute without waiting for another institution to interpret it. Ambiguity isn’t always a defect, though. Sometimes it is the space in which people survive an edge case.

Ethereum is still a proposal and an emerging project rather than a mature live ecosystem. The question is already visible. If trust moves from institutions into programmes, who governs the programme?

## Proving Without Revealing

Zerocash and zk-SNARKs point towards another kind of verification. Can something be proved valid without revealing the material from which the proof was made? Bitcoin makes much of its ledger public so participants can check the history. That visibility is part of the design. It is also a limit.

There are records that need to be verified without being displayed to everyone. Medical histories. Research data. Commercial agreements. Personal identities. Private transactions. A zero-knowledge proof points towards verification without full disclosure. The claim can be checked while the underlying information remains hidden.

That changes the possible home of the ledger. A public record that everyone can inspect may be useful in one setting. A record that can prove an authorised fact without exposing the whole history may be useful where transparency and privacy have to coexist. The ledger doesn’t have to choose between secrecy and verification quite as cleanly as it first appears.

## Where the Ledger Might Belong

I’m not convinced that buying coffee is the ledger’s most interesting home. The stronger cases may be places where several parties need to agree on a history but none of them should be able to rewrite it alone. Audit logs. Research records. Medical data provenance. Supply chains. Software releases. Institutional records. The important question in those systems is not only the current value. It is who changed what, when, under which rule and whether the history can be altered without leaving evidence.

Git already gives developers a history of code changes. That is one reason distributed software collaboration works as well as it does. But Git still usually has a social centre. A repository. A maintainer. A host. A place where authority gathers. A blockchain-like ledger asks what happens when the history has to be shared across parties who do not trust one maintainer. That may matter for software. It may matter even more for data.

Machine learning makes the question sharper. Which data produced this result? Which features were used? Which version of the model? Which preprocessing step? Which assumptions changed between one run and the next? Git can track the code, but code is only one part of a computational result. The model, data, parameters, environment and sequence of transformations all belong to the history. If any one of them changes, the same code can produce something else.

That isn’t a Bitcoin price story. It is a provenance story.

## Governance Comes Back

Decentralisation doesn’t abolish politics. It changes where politics happens. Someone writes the protocol. Someone updates the client. Someone fixes the bug and decides what counts as a bug. Miners choose software. Wallet developers choose defaults. Exchanges decide which assets and histories they will recognise. Users decide which version of the system they will follow.

A decentralised network may avoid one ruler. It cannot avoid governance. The governance becomes technical, economic and social at the same time. That may be the most important thing Bitcoin and Ethereum are revealing. Trust can be made more explicit. It can be pushed into rules, incentives, signatures, proofs and histories that are harder to hide.

Once trust enters those structures, someone still has to maintain them. The politics did not leave. It became executable.

## Finding a Home for the Ledger

The dream of a trustless system is not that trust disappears. The dream is that trust becomes explicit, inspectable and harder to abuse. Bitcoin moves trust into a protected monetary history. Ethereum asks whether parts of agreement can become programmable. Zerocash asks whether verification can survive privacy.

They all circle the same discomfort. We don’t know who should control the record, so we build systems that make control more difficult to conceal. The question is not whether Bitcoin replaces money or Ethereum replaces institutions. The better question is where shared history matters enough that the record itself needs protection.

That is what my old Dell taught me in its own overheated way. The coins weren’t the interesting part. The protected history was. The ledger is not the answer to every problem. It belongs where several parties need one history and none of them should be able to rewrite it alone.


