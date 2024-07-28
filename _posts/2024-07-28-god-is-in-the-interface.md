---
layout: post
title: "God Is in the Interface"
author: Chukwuka Orefo
display_title: "God Is in the Interface"
date: 2024-07-28
categories:
- Artificial Intelligence
- Software Engineering
- Systems Design
tags:
- ChatGPT
- GPT-4
- mixture of experts
- Code Interpreter
- Assistants API
- LangGraph
- Langfuse
- Cerbos
- retrieval augmented generation
- AI interfaces
description: "What becomes singular when many systems return through one voice?"
image: /assets/images/posts/2024-07-28-god-is-in-the-interface/hero.jpg
---

# God Is in the Interface

For the past few months, I’ve been building a safeguarding policy assistant for a charity. A parent, member of staff or manager types a question into a web page and receives an answer drawn from the organisation’s approved procedures. A source appears beneath it.

During one review, somebody points at the response and says that it told them what to do. I know what they mean. I also find myself looking at the word *it*. Correcting them would be accurate and not especially useful. I could explain that the model produced the sentence, the retrieval layer supplied the evidence and the application decided which evidence the user was allowed to reach. We would then spend the rest of the review discussing pronouns instead of safeguarding, which feels like the sort of victory I’d regret while still achieving it. I write the word in my notes instead.

The answer is sitting on the screen. Behind it, I have the approved policy open in one window and the Langfuse trace in another. The trace leads back to the prompt and the passages supplied to the model. Those passages came from an OpenSearch index built from versioned documents. Cerbos decided which documents the signed-in user could reach, while Django carried identity and application state around the request.

If the question crossed a safeguarding boundary, another route created a record and returned the concern to a manager or safeguarding lead. The model could produce language inside that route. It could not decide that the concern was safe to close. I start with the sentence on the screen and follow it backwards. Each component explains part of the answer. None contains the whole thing people are calling *it*.

## The Pronoun in the Room

The language model is the obvious candidate. It produced the words, after all. Remove it and there is no fluent response. That explanation holds until I look at what the model actually received. It didn’t know who had signed in, which policy collection could be searched or whether the question belonged on the ordinary route.

It didn’t preserve the source through extraction and indexing, and it couldn’t notify the manager if the route changed. Even the charity’s policy knowledge arrived from outside its weights, selected for this request and placed temporarily into its context. Calling the model the assistant still feels reasonable. I’ve done it myself in notes and conversations, usually because the alternative sentence would need several commas and probably a diagram.

The model is also the part that speaks, and the speaking part tends to collect credit for everything that happened before the sentence appeared. That bothers me because it resembles a familiar problem from clinical work. A person can read out a laboratory result without being the sample, instrument or method that produced it. The result may be perfectly valid, but it doesn’t carry its own history. Somebody still needs to know which patient it belongs to, how the sample was handled and what conditions made the number meaningful.

The analogy isn’t exact. I can feel myself leaning on it because provenance is the closest shape I have for the problem, and because the medical comparison makes my unease sound more respectable than saying that a pronoun has annoyed me. Still, the trace keeps pulling in the same direction. The model returns the visible result. The application around it carries much of the condition under which that result is permitted to exist.

This wasn’t how I pictured ChatGPT when it first appeared. There was a box, a name and an answer. I knew there would be product code around the model because a website doesn’t materialise from neural weights, but that remained ordinary plumbing, the technical equivalent of knowing a television has wires behind it. The intelligence seemed to sit in one obvious place.

Building the charity assistant has made that picture difficult to recover. The text box is the smallest part of the system, yet it is the only part the user can address. I click from the response span to the retrieved node, then from the node to the policy version, and by the time I reach the permission decision the word *assistant* is carrying more machinery than I realised I’d put inside it.

## A Door Inside the Door

Last July, SemiAnalysis published a detailed account of GPT-4’s architecture assembled from multiple sources. It claimed that GPT-4 used a sparse mixture-of-experts design containing sixteen experts, with two selected during computation. OpenAI hadn’t confirmed those figures, so I couldn’t treat them as established fact. I kept the article open beside the charity trace anyway.

Part of me wanted the report to be right. That isn’t a sound method for assessing an anonymous architectural leak, but it made my own system look less like a collection of compromises and more like a small instance of something general. I noticed the thought and became slightly less trusting of the enthusiasm that followed it.

The word *experts* didn’t help. I initially pictured specialist models waiting behind a router, almost a committee hidden inside GPT-4. That isn’t what mixture of experts means. The reported experts were sub-networks within one neural architecture. A routing mechanism selected which regions would contribute to the current computation.

I drew the two routes on paper. In the charity system, routing happened outside the model. Identity narrowed the evidence, retrieval selected passages and higher-risk questions moved into a different workflow. In the reported GPT-4 design, routing happened inside the model as part of the neural computation. They weren’t the same mechanism. I drew a line between them, looked at it for a while, then crossed it out because it made the comparison look tidier than it was.

The report still left something behind. I had been separating the product from the model, treating the model as the solid object at the centre and everything else as machinery around it. The reported architecture suggested that even this centre might be selectively assembled during use. Dense scaling was expensive, and routing offered a way to increase total capacity without requiring every parameter to participate in every token. That made engineering sense, perhaps too much sense, which was another reason not to confuse plausibility with confirmation.

I went back to the Langfuse trace. The charity answer had been assembled through choices made outside the model. If the report was broadly right, a GPT-4 answer might also depend on choices made within it. The word *model* had not become useless, but it no longer ended the explanation as neatly as it had before. There was another boundary underneath the one I’d been inspecting. I didn’t yet know how much weight to place on it, so I left the SemiAnalysis tab open and returned to the code.

## Pay No Attention to the Runtime

The second disturbance was easier to touch. I uploaded a spreadsheet to Code Interpreter and asked ChatGPT to produce a chart. Code appeared, the analysis ran and a file came back through the same conversation. I’d used it before without giving the sequence much thought. The chart was useful, the answer sounded like ChatGPT and there were other things to do. This time I watched the transitions.

The model wrote Python. A separate interpreter executed it inside a sandboxed environment. Files entered that environment, code changed their state and the output returned to the model, which read the result and folded it back into the conversation. The explanation and calculation arrived through one voice, even though they had not occurred through one operation.

I should probably have found this more obvious. The feature was called Code Interpreter. It wasn’t exactly trying to hide the interpreter. Even so, the chat window had done enough joining that I’d treated the resulting capability as something GPT-4 now possessed in the same way it possessed a larger context window. That was when *The Wizard of Oz* started bothering me.

Dorothy reaches the figure at the centre of the Emerald City and meets a large face surrounded by smoke and noise. Toto pulls back the curtain and finds a man operating machinery. The usual lesson is that the wizard is a fraud, which works for the film and fails almost immediately here. The chart wasn’t false because Python ran behind the interface. The model hadn’t pretended to execute the code in some pure chamber of intelligence. It had written a program, received the result and explained it. Pulling back the curtain left the capability intact and made its location less convenient.

There may be no single wizard in that room. There is a model generating code, a runtime executing it, files holding temporary state and product code carrying the results between them. Some of those joins will be elegant. Others will be ordinary backend work. A few probably began as temporary repairs and survived because another feature arrived before anyone had time to replace them.

That last part may simply be me projecting my own development habits onto OpenAI, which is flattering to nobody. I know the general shape, though. A user asks for one outcome. Several components perform different parts of it. The interface returns the finished exchange in the first person.

By November, OpenAI had made more of that composition visible through the Assistants API. Instructions, retrieval, Code Interpreter and external functions could be brought into one route around a model. The assistant presented to developers was no longer only a set of weights waiting for a prompt. It was a system that could preserve state, reach knowledge and call other forms of computation.

I placed that diagram beside the route I was building for the charity and then felt faintly ridiculous for doing so. The scale was absurdly different. One served millions of users. Mine was trying to answer policy questions without sending a parent into the staff handover notes. The resemblance survived the embarrassment. In both cases, the model was one component inside a route that the user encountered as a speaker.

## A Voice in the Fire

The title arrived before I trusted it. *God Is in the Interface* sounded like the sort of phrase that makes sense after midnight and looks unbearable in daylight. I left it at the top of the document because deleting it felt too much like pretending I hadn’t thought it.

The older image behind it wasn’t the wizard. It was the burning bush. Moses hears a voice through a small object in an ordinary place. The bush is not presented as the whole of God. It is where the encounter occurs.

I have to stop the comparison there. A biblical presence is not a software architecture, and the burning bush tells us nothing about routers, sandboxes or vector search. Extending it further would make the theology worse and the engineering no clearer. At the boundary, though, the shape holds. A person meets something through an interface smaller than everything attributed to the voice. The encounter is real without the point of encounter containing the whole presence.

The charity’s text box occupies that position mechanically. A user types a question. The interface receives it, passes it through identity and permission checks, carries it into retrieval and returns an answer produced from the permitted evidence. If the route changes, a record and a human handover appear behind the same page. The user doesn’t encounter those systems separately. They encounter the response.

I tried writing a neat list of the transformations. Retrieval becomes memory. Permission becomes restraint. Stored state becomes continuity. Tool use becomes capability. The list was accurate enough and also sounded as though I had discovered four laws of nature while looking at a Django application. I deleted it.

The trace shows something less polished. The answer looks as though one thing remembered because the policy passage and conversation state reached the same model call. It looks restrained because other components kept certain evidence and actions outside that call. The voice remains consistent because the result returns through the same model and interface. No component contains the whole impression. The impression appears when their work reaches the boundary together.

A curtain normally hides an object that is already complete behind it. This interface is doing more. It is helping the parts arrive as one thing a person can address. The voice appears where the components meet, although even that sentence feels slightly too pleased with itself. I return to the trace and copy the identifiers into the record I’m debugging.

## The Mouth Takes a Name

The product needs a name. Users cannot reasonably say that the model, retrieval layer, permission service, prompt, application state and safeguarding workflow produced an answer together. They say the assistant remembered the policy. They say it refused. They say it told them what to do.

I can object to the shorthand and then catch myself using it in the next note. Apparently the problem is not everybody else’s careless language. It is the only language that lets the conversation continue without turning every sentence into a service diagram.

The name begins collecting behaviour supplied by different parts of the system. A permission imposed by the application becomes restraint in the assistant. A failed search becomes forgetfulness. State retained elsewhere becomes memory. Code executed in another environment becomes something ChatGPT can do. The components do not need to share a mind for their behaviour to gather beneath one identity.

We do this with institutions. A hospital decides. A company wants. A government knows. Nobody means that every person and system inside the organisation held one thought. The name gives distributed action somewhere to place the verb.

A conversational product makes the compression harder to notice because it speaks directly and uses the first person. The institution does not send a letter through a representative. The answer appears immediately beneath the question, using the same voice as the answer before it.

Inside my application, the design has moved in the opposite direction. Authentication is separate from permission. Permission is separate from retrieval. Retrieval is separate from generation. Generation is separate from escalation. The trace preserves the route without claiming that the route justifies the judgement. The cleaner those divisions become in the architecture, the less visible they are in the conversation.

I find that satisfying when the system works and mildly alarming when somebody calls it intelligent. Both reactions may be self-serving. I want credit for the engineering without wanting the engineering mistaken for a mind. On the screen, the user still asks one thing a question.

## A Tear in the Veil

I don’t think the answer is to expose every service. A parent asking who should receive a safeguarding concern doesn’t need to watch the permission check, document search and model call complete. Hiding that work is one of the reasons the assistant is usable. The fact that plumbing is invisible is not, by itself, a deception.

The difficulty is deciding what must remain visible when hidden components alter the meaning of the answer. A source gives the reader a path back to the policy. An indication that code was executed can separate calculation from language generation. A handover can show that the consequential decision has returned to a person. A refusal should make some distinction between missing evidence and an action the system will not permit, although I haven’t found wording for that which doesn’t sound like the assistant is explaining its own architecture.

The deeper trace can stay outside the ordinary exchange. It still has to preserve enough of the route for somebody to reconstruct the answer later. The policy version, retrieved passage, permission scope, prompt and model configuration cannot be restored from memory after the system has changed.

Near the end of the charity work, the route had accumulated enough branches that I started trying to represent it explicitly through LangGraph. It had only just been released. The surrounding language about agents interested me less than the possibility of putting state, model calls, tools and controlled transitions somewhere visible outside a prompt that kept growing every time something went wrong.

I sketched the existing route first. Identity entered here. Cerbos narrowed the policy collection. Retrieval supplied the evidence. The model generated the wording. A check either returned the answer or pushed the request towards a human handover. The first diagram was reassuring because everything had a box.

Then I noticed that the diagram had created another smooth surface, one designed for builders rather than users. It showed where the request travelled. It did not prove that the final sentence was supported, and it certainly did not decide who should carry responsibility when several boxes had contributed to a bad answer. I kept it anyway. A limited map is better than pretending the route does not exist.

The graph makes the divisions clearer to the person building the system. The interface has to gather them again for the person using it, otherwise there is no assistant, only a collection of services waiting to be addressed separately.

That leaves two descriptions of the same object. The user encounters one actor. The trace records several causes, some deterministic, some probabilistic and some still human. I know how to test the model, inspect the retrieval and review the application code. I know who owns the safeguarding decision inside the charity. I’m less certain where responsibility should attach once the interface has mixed those contributions and returned them under one name.

The interface has already made the system singular enough to speak to. It has not made responsibility singular when the answer is wrong.

