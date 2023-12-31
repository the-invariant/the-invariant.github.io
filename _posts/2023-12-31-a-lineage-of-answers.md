---
layout: post
title: "A Lineage of Answers"
author: Chukwuka Orefo
display_title: "A Lineage of Answers"
date: 2023-12-31
categories:
- Artificial Intelligence
- Software Engineering
- Data Governance
tags:
- QLoRA
- Langfuse
- OpenLineage
- Pydantic
- retrieval augmented generation
- model lineage
- data provenance
- traceability
- safeguarding
- model governance
description: "Can an answer be reconstructed without mistaking its history for proof?"
image: /assets/images/posts/2023-12-31-a-lineage-of-answers/hero.jpg
---

# A Lineage of Answers

Recently, I’ve been testing a QLoRA adapter beside a safeguarding policy assistant I built for a charity. Parents, members of staff and managers use the assistant to ask questions about approved procedures. The system is designed to make routine guidance easier to reach without allowing the language model to decide who may see a document or when a safeguarding concern requires human action.

The assistant sits behind Django. Cerbos evaluates the signed-in user’s role before retrieval begins. LlamaIndex and OpenSearch search only the policy material available to that user, and the retrieved passages retain their document version, section and sentence span. The model turns those passages into readable language. Higher-risk concerns follow a separate application route that creates a record, prepares a handover and notifies the manager or safeguarding lead who owns the decision.

The adapter is an experiment within that larger system. The prompt had accumulated instructions controlling grounding, citation, refusal, uncertainty and audience. QLoRA allows me to test whether some of those repeated language habits can be learned through approved and synthetic examples while the base model remains frozen. Permissions, risk and escalation stay in the application. The adapter only influences how the model uses evidence after those boundaries have been set. On a held-back packet of questions, the responses become more consistent and several prompt instructions can be shortened. The improvement is useful. It also means the sentence displayed to the user now depends on another component that cannot be seen from the answer itself.

## The Link Followed the Document

That becomes a practical problem when a manager asks which policy version produced a particular sentence in an earlier response. I open the source link and find the current document. That is not what she asked. The policy has changed since the answer was generated, and the link has followed the document rather than preserving the event that produced the earlier wording.

I start with the answer and work backwards.

## The Answer in Pieces

Langfuse contains the language interaction. The trace shows the prompt, the passages placed into context, the model call, the response checks and the final wording. It tells me whether the displayed answer was produced on the first attempt and which node identifiers travelled with it.

That gets me to the retrieval result. The node identifier carries the structural address added during ingestion, including the policy version, section, paragraph and sentence span. It tells me what the model saw. It does not yet tell me which ingestion process created that node or which approved source file entered the process.

OpenLineage follows the policy through extraction, transformation and indexing. The manager’s question starts becoming answerable in pieces. This approved document entered that ingestion run. The run produced this node. The user’s permission scope made the node eligible. Retrieval placed it into this prompt. The model and adapter produced this response.

## Several Names for the Same Policy

The pieces exist, although not in the same language. One system stores the policy’s human-readable title. Another uses an internal version key. A trace retains the node reference but not the permission scope that allowed it to appear. The ingestion record knows the source checksum but not the answer that later used it.

I spend an unglamorous amount of time moving between windows and discovering that different components refer to the same document in slightly different ways. One uses spaces. Another uses a slug. A third has retained the filename from before the policy was approved.

For a while, I consider joining the records afterwards. Most of the information is present, and a sufficiently patient person can usually reconstruct the path. That is what the old paperwork did. It produced several plausible records and left somebody to remember how they belonged together.

## The History Keeps Its Name

The identifiers need to survive the route rather than being guessed after it. Pydantic validates the event envelope passed between components. Document version, ingestion run, structural node, permission scope, prompt version, model configuration and trace identifier keep their names while the request moves.

Validation does not create the history. It prevents the history changing dialect halfway through the answer.

## The Chain Reaches the Source

The first complete chain is more satisfying than it should be. I can begin with the sentence, open the runtime trace, move to the retrieved span, follow it through the ingestion run and reach the approved policy version that existed at the time. A later reviewer no longer needs my memory of how the assistant was configured that week.

The manager’s question can now be answered. The sentence came from this policy version, through this ingestion run and permission scope, using this prompt, base model and adapter. These checks ran before the answer was displayed. I should feel finished. Instead, I read the sentence again.

## Where Lineage Stops

The chain establishes how the answer was produced. It does not establish that the wording was justified. Every identifier may line up, every configured check may have run, and the final sentence may still say more than the policy beneath it. That is not a defect in lineage. It is where lineage stops.

Internally, the response is becoming easier to separate into evidence, permissions, transformations and language. The person reading it sees one answer.
