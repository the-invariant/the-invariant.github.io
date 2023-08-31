---
layout: post
title: "The Rule and the Exception"
author: Chukwuka Orefo
display_title: "The Rule and the Exception"
date: 2023-08-31
categories:
- Artificial Intelligence
- Software Engineering
- Information Retrieval
tags:
- Django
- Cerbos
- LlamaIndex
- OpenSearch
- retrieval augmented generation
- document chunking
- hierarchical retrieval
- document parsing
- grounding
- safeguarding
description: "What happens when the correct policy reaches the model without the sentence that changes it?"
image: /assets/images/posts/2023-08-31-the-rule-and-the-exception/hero.jpg
---
# The Rule and the Exception

In my last article, I described a safeguarding policy assistant I have been building for a charity. Parents, staff and managers can ask questions about the organisation’s procedures and receive answers drawn from approved policy documents rather than from whatever a general language model happens to remember.

The assistant sits behind a Django web application. When somebody signs in, the application knows their account, role and session. Cerbos checks which policy resources that person may reach before LlamaIndex searches the document collection. A parent can search the public procedure. Staff can reach the operational guidance written for them. Restricted handover material remains outside both unless the application grants the manager’s wider scope.

The policies themselves remain outside the model. They are extracted, divided into searchable passages and stored with metadata and embeddings. When a question arrives, the permitted collection is searched, several passages enter the model’s context and the answer appears with a source beneath it. A policy can be replaced without retraining the model, and restricted material does not have to enter the prompt before being concealed again.

That had contained the previous problem. I had tested the same questions through parent, staff and manager accounts, then inspected the retrieved passages before reading the answers. Restricted evidence was genuinely absent where it did not belong. I thought the difficult part of retrieval was now reasonably controlled. The correct person would search the correct collection, the search would find the approved policy and the citation would give the reader somewhere to check the answer.

## Correct Policy, Wrong Instruction

Then the parent account retrieves the correct policy and gives the wrong instruction.

The policy describes an ordinary reporting route and then limits it. When the concern involves the person who would normally receive the report, another route must be used. A human reader moving down the page would carry both statements. The retrieval system does not receive the page in that form.

The answer tells the parent to use the ordinary route. It cites the correct policy and says nothing about the condition that makes the route inappropriate. A colleague reads it and asks where the report goes when the concern is about the person named in the answer. I reopen the source. The missing sentence is directly beneath the passage the assistant has cited.

My first suspicion is that the index contains an older version. It does not. The title is right, the approved version is right and the quoted rule is right. The model has answered from exactly what it received.

What it received ends too soon.

That is worse, in a way, than retrieving the wrong policy. A wrong document gives the reader a reason to hesitate. This answer has the correct title sitting beneath it, giving an incomplete fragment the authority of the whole document.

## The Cut Falls Between

The policies were written for people who read headings, paragraphs, lists and exceptions in sequence. The ingestion process receives extracted text and divides it into pieces small enough to embed and search. In this case, the configured token limit falls between the general rule and the paragraph that restricts it. The first fragment resembles the question closely enough to be retrieved. The second does not score highly enough to travel with it.

I put the answer on one side of the screen and the policy on the other. The model has not contradicted the evidence. The evidence window is too small to support the instruction being built from it. The document was found. The cut changed what finding it meant.

## Tuning the Knife

My first repair is to increase the chunk size. The question now retrieves the rule and the exception, along with several unrelated paragraphs and a list from the next subsection. That works for this case. Another question becomes less precise because the prompt is carrying half a page whose language overlaps with a different procedure.

I reduce the size and increase the overlap. The rule and exception now travel together in this policy, while duplicated passages begin competing elsewhere. The same sentence appears in two candidates with slightly different surroundings. A heading moves into one fragment while the list beneath it remains in another. For most of the afternoon, I keep changing the numbers because the numbers are available. Every run gives me something visible, but I am beginning to suspect that I am tuning the knife rather than asking why I keep cutting through the sentence.

## The Document Anatomy

The policy already contains boundaries of its own. Headings tell the reader what governs the paragraphs beneath them. Lists inherit meaning from the sentence that introduces them. Exceptions often make little sense without the rule immediately before them. Flattening the file into one stream removes those relationships before the search has begun.

The problem reminds me of a tissue section. The material can be genuine and still lose the surrounding anatomy required for interpretation. The comparison only goes so far. A document can be cut again. A patient cannot. It does change where I look. A mechanically produced boundary is not automatically a neutral one.

## Almost Right

I alter the ingestion script so the document’s structure can influence the split. A heading remains attached to the material beneath it. Short paragraphs can travel with their parent section. A list retains the sentence that gives its items meaning. When a matched paragraph cannot stand alone, retrieval can expand to its neighbour or parent instead of pulling an arbitrary number of tokens from either side.

The output improves and then becomes irritating in another way. Some policies use proper heading styles. Others use bold text that looks like a heading to a person and like an ordinary paragraph to the parser. Tables arrive with their columns rearranged. Numbered lists occasionally resemble separate sections. I spend longer than expected correcting a hierarchy that is almost right, which is not especially comforting because almost right is how the exception disappeared.

## Moving Without Moving

While debugging the parsed documents, I begin thinking about source-code line numbers. When an error points to a line in a file, the line does not explain the entire program. It gives the failure somewhere to live. The policy passages already have page references and generated chunk identifiers, although neither is stable enough to act as a proper address.

I number the extracted lines and store the range with each passage. It looks precise until another conversion removes a repeated header and shifts nearly every number beneath it. The sentence has not moved in any meaningful sense. Its number has. The rendered line remains useful for display, but it cannot carry the identity alone.

The more stable address is the path through the document. Each node keeps the policy version, section, paragraph and sentence span, with page and character offsets attached so the source can be reopened. LlamaIndex manages parent and neighbour relationships. OpenSearch stores and ranks the searchable text, metadata and embeddings. Neither tool understands the policy merely because it can store the structure. The ingestion code and the tests still have to decide whether a malformed list belongs to the sentence above it or the heading before that.

## A Map Cannot Testify

For longer policies, I add another level cautiously. A paragraph can have a short representation, and those representations can help the search locate the likely section before descending into the original text. The generated summary is allowed to guide the search. It is not allowed to support the final claim. I have already watched a summary remove the sentence required by a later question. Giving it a different job does not restore what it discarded.

The search becomes coarse to fine. A broad question can locate the likely section through its short representation. Retrieval then descends into the original paragraphs and sentences, widens through parents or neighbours and supplies the source text rather than the generated map that helped find it.

## The Exceptional Return

I run the original question again. The first match lands on the paragraph containing the ordinary route. Its relationship to the following paragraph brings the exception into the same evidence window. The answer now gives the general instruction, states the condition that changes it and opens the relevant section rather than merely naming the policy file.

A small packet of awkward questions follows. Some require only the general rule. Some need the exception. Some depend on a definition inherited from the parent section. Others cross adjacent paragraphs or should return that the available policy does not say enough. The fixed-size version often finds the correct document and still omits the sentence that limits the answer. The structure-aware version recovers it more consistently.

Tables and distant cross-references remain troublesome, and I do not have a setting that makes every policy behave as though it was written for the parser. The hierarchy gives the system a better route back to context. It does not turn policy meaning into a tree that cannot be misunderstood.

## The Prompt Keeps the Damage

The next failure is quieter. One answer contains the correct rule and the correct exception, then adds a reassuring sentence that appears nowhere in either passage. It is not dramatic enough to look like an obvious hallucination. It sounds like the sort of sentence a helpful person might add after explaining the procedure.

I add an instruction telling the model not to continue beyond the supplied evidence. The difficult case improves.

The documents are reaching the prompt in better shape. The prompt itself is beginning to carry the damage from every answer that came before.
