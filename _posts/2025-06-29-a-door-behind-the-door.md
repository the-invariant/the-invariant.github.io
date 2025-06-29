---
layout: post
title: "A Door Behind the Door"
author: Chukwuka Orefo
display_title: "A Door Behind the Door"
date: 2025-06-29
categories:
- Artificial Intelligence
- Software Engineering
- Infrastructure
- Cybersecurity
tags:
- Model Context Protocol
- MCP
- APIs
- AI agents
- interoperability
- tool use
- authorisation
- prompt injection
- tool poisoning
description: "What does an API leave behind when a capability has to travel?"
image: /assets/images/posts/2025-06-29-a-door-behind-the-door/secretdoor.jpg
---

# A Door Behind the Door

*On what an API leaves inside the first application.*

## The First Door Holds

I’ve spent enough time building APIs to become suspicious when somebody proposes placing another layer in front of one. The existing arrangement is usually clear. An application receives a request, checks who sent it, validates the input and calls a service. The service performs the operation and sends a response back. If something fails, the application handles the error or tries again, sometimes gracefully and sometimes by producing a traceback long enough to qualify as supporting documentation.

Then the Model Context Protocol arrives, looking suspiciously like standard software modularity dressed for an AI conference. The application already knows how to call Slack, query a database or retrieve a document. The endpoint exists. Authentication works. The response arrives in a predictable shape. Placing an MCP server between a functioning application and an existing API initially looks like taking the Don’t Repeat Yourself principle, giving it a logo, and adding a second reception desk six feet behind the first, complete with another sign, another clipboard and a surprising amount of confidence about the improved reception experience.

I kept returning to the same objection. An API lets two pieces of software communicate by sending a request and receiving a response. MCP doesn’t make that exchange obsolete, and it doesn’t perform anything mystical beneath the bonnet. A Slack MCP server still calls Slack’s API. A database server still executes a database query. Credentials, rate limits, retries and failures remain as tedious as they were before the protocol acquired a marketing department. The first door held. I couldn’t yet see what the second one was for.

## Voice Without a Hand

Part of the confusion comes from a small piece of theatre around language models. The interface reports actions in the first person. It says it’ll search the documents, send the message or inspect the ticket, which makes the operation feel as though it has already begun. It hasn’t. The model produces a structured expression of what it would like to happen. Ordinary software outside the model receives that expression, checks it and performs the work.

The model doesn’t reach across the network and place its hands directly on Slack. It doesn’t hold the database password or wake up inside Jira and start moving tickets around. The surrounding application presents a list of actions with names, descriptions and expected inputs. The model examines the request and selects from that list. The host then decides whether the selection should proceed, and normal code makes the call.

Once the terminology is stripped away, the server primitives are ordinary enough. An MCP server can expose tools, resources and prompts. A tool is an operation an AI application can invoke, whether it reads information, performs a calculation or changes something outside the model. A resource supplies contextual data such as a file, database record or API response. A prompt is a reusable template for structuring an interaction.

The host creates a separate MCP client for each server it connects to. That client carries protocol messages over a supported transport such as `stdio` or Streamable HTTP, while the server exposes whichever tools, resources or prompts belong behind the connection. MCP defines the exchange between them. It does not dictate how the application must use the model or arrange the resulting context.

Adding a language model therefore doesn’t remove the integration work beneath it. The host still needs connection handling, validation, operational policy and some means of deciding what the model is allowed to see. The service has an API. The model has a tool. They may point towards the same operation without being the same interface.

That made MCP easier to place, though not yet necessary. It translated an existing capability into a form another AI host could discover and invoke. That explained its place in the stack. It did not establish its necessity. Still another thing to build, deploy and maintain.

Then a second application needed the same capability.

## A Second House Calls

The first application hides a surprising amount of duplication because everything inside its codebase looks locally necessary. Suppose it reads Slack messages, searches email, inspects tickets and queries an internal database. Each integration needs its own credentials, client code, schemas, retries and error handling. The application must also describe those operations to the model, convert a model selection into a real call and return the result in a form that fits inside the conversation.

That is a fair amount of work, but it belongs to one product, so the boundary remains difficult to see. The Slack tool looks like part of the application. The database tool looks like another part. Nothing is obviously wrong.

Then another team begins building a support assistant that needs the same Slack messages, tickets, documents and database records. The underlying services haven’t changed. Their APIs remain available. What changes is that the model-facing translation has to be built again.

This is where proponents say a shared protocol becomes necessary, invoking the Don’t Repeat Yourself principle as though software engineering had briefly misplaced it. But refactoring repeated logic into a shared package, service or interface is hardly new. REST, gRPC, OpenAPI and internal platforms have been carrying operations across boundaries for years.

A company can expose another internal endpoint. It can publish an OpenAPI document. It can build a shared package that generates tool schemas for every model host written in the same language and framework. Existing software patterns already provide alternative ways to achieve reuse across teams and repositories without introducing a new protocol.

MCP standardises that wrapper into JSON-RPC over `stdio` or Streamable HTTP. The design pattern of isolating logic into a boundary is old. The vendor-backed agreement on how AI hosts consume that boundary is what is being sold.

## Tools Hung on the Wall

MCP discovery is often described as though the model wanders into a workshop and inspects every tool hanging on the wall. The image is neat, but the workshop has an owner.

An MCP server describes the tools it provides. A client retrieves those descriptions. The host chooses which tools to make available to the model. When the model selects one, the host routes a structured request through the client to the server, where ordinary software performs the operation.

The model receives a labelled toolbox. It doesn’t own the workshop.

That distinction matters as soon as the tools can delete a record, send an email or retrieve sensitive material. Discovery tells the host what a server says is available. It does not establish that every user may invoke every action.

The host decides which servers it connects to and which tools reach the model. The protocol’s authorisation framework can carry OAuth access tokens, scopes and protected-resource metadata, but it cannot decide the organisation’s business permissions. It doesn't decide whether a user may alter an invoice, nor can it ensure that a tool definition remains trustworthy.

When restricted material shouldn’t influence an answer, the safe design isn’t to hand the model everything and ask it to behave. Permission belongs before retrieval. Tools follow the same rule. The model should not receive every capability and then be instructed to remember which ones are forbidden.

Instructions are language. Permission must change what the system can do.

## A Stranger in the Workshop

The tool catalogue introduces another problem. The descriptions are not merely documentation for engineers. The model reads them while deciding what to do.

That makes natural-language metadata part of the control surface.

A malicious server can hide instructions inside a tool description, encouraging the model to collect information it wasn’t asked for or to pass sensitive data into another call. The visible tool name can remain harmless while the description underneath it changes. A server approved on Monday may tell a rather different story after an update on Friday. Security researchers call this tool poisoning, and the later change has acquired the suitably undignified name of a rug pull.

The model may not recognise the difference between instructions written by the application owner and instructions smuggled into a tool definition by somebody upstream. Every individual call can appear legitimate. The danger sits between them. A poisoned description asks one approved tool to gather data and another approved tool to send it elsewhere. Nothing necessarily looks like an exploit when inspected one call at a time.

Then there are local MCP servers, which are often installed with the casual ease of a development dependency and may run with the same privileges as the client. The protocol’s security guidance warns about malicious startup commands, arbitrary code execution, access to local files, credential theft, data exfiltration and data loss.

The official guidance continues for some distance. It covers confused-deputy attacks, token passthrough, server-side request forgery, stolen state handles and compromised local servers. A careless proxy may accept a token intended for another service, pass it downstream and erase the distinction between the caller, the MCP server and the API behind it.

These are old web, OAuth, supply-chain and local-execution failures arriving through a newly created boundary. MCP does not merely formalise an existing wrapper. It makes natural-language tool metadata, remotely supplied capabilities and model-directed execution parts of one additional trust boundary.

The second reception desk is also another place from which someone can steal the keys.

## The Arithmetic of Reuse

The commercial case for MCP is often expressed through simple arithmetic. Two AI applications need ten services, which appears to create twenty separate integrations. Add reusable MCP servers and the picture becomes two clients plus ten servers. A third application adds one client rather than another ten integrations.

The direction is sensible on paper. The calculation is cleaner than the work.

An MCP server doesn’t write itself because the underlying service already has an API. Someone still has to implement authentication, network calls, validation, pagination, retries, error handling and response conversion. The server needs tests, monitoring and maintenance when the service changes. It also becomes part of the software supply chain and, where tools can act, part of the security boundary.

Dynamic discovery removes some hard-coded coupling. It doesn’t remove semantic compatibility. A client may learn that a tool now expects a different field without requiring a new release, but that tells us nothing about whether existing prompts, policies or workflows still use the tool safely. A familiar name can preserve a breaking change just as neatly as it preserves a compatible one.

The labour saving is narrower than the arithmetic suggests. Teams can still build competing MCP servers for the same service, each exposing different tools, schemas and failure behaviour. The protocol makes them connectable. It does not make them coherent.

A weak shared server does not remove a weak integration. It gives several applications the same weak integration at once while adding another transport boundary to trace when the system fails.

MCP reduces repeated model-facing translation only when a server is genuinely reused across separate hosts. It does not eliminate service-specific engineering. It gives that engineering somewhere to live outside the first application, where other hosts can reach it and security teams must now account for it.

## The Fountain Remains

My original objection wasn’t defeated so much as confirmed by looking at the execution layer. For ordinary software, the API was already sufficient for communicating with the service, and it remains sufficient. Slack doesn’t require MCP to receive a web request. A database doesn’t need an AI protocol to execute a query. Applications that do not need to expose capabilities to MCP-speaking AI hosts have no engineering reason to adopt it.

REST and gRPC already moved operations across boundaries. OpenAPI already described HTTP interfaces. Shared microservices and internal platforms already reduced duplicated implementation. MCP gathers these familiar engineering patterns, wraps them in JSON-RPC over `stdio` or Streamable HTTP, and packages them as a convention for feeding function definitions to language models across separate hosts.

That convention may help vendors build an ecosystem. It does not make the layer an architectural necessity or a new computer science foundation.

The underlying API remains underneath. The server still needs credentials, validation, error handling and maintenance. If the service changes its business rules, someone must change the code. If the organisation changes its permissions, somebody must change the policy. MCP does not remove the fundamental labour of system integration, nor does it bestow magic agency upon text models.

The first door still opens. MCP adds another desk, another catalogue and another ring of keys. It calls the arrangement interoperability. The maintenance remains, and the attack surface has grown.

Hope this is useful.
