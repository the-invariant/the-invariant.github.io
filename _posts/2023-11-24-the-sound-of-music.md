---
layout: post
title: "The Sound of Music"
author: Chukwuka Orefo
display_title: "The Sound of Music"
date: 2023-11-24
categories:
- Artificial Intelligence
- Machine Learning
- Technology
tags:
- large language models
- quantisation
- distillation
- retrieval augmented generation
- LoRA
- mixture of experts
- AI infrastructure
description: "What if every model release is not a new machine, but another song?"
image: /assets/images/posts/2023-11-24-the-sound-of-music/hero.jpg
---

# The Sound of Music

Every so often, somebody asks whether I have seen the latest news in AI. A large company has released a model. An open-source group has published something new. An enterprise service has appeared behind another login screen and a pricing table. I will usually reply that somebody has released another song. There is a brief pause while the other person checks whether we are discussing the same news. They did not know the organisation had moved into music. Do I mean the model can listen to a song, produce one or perhaps play an instrument? It may well be able to do all three. That is not what I mean. The model is the song.

I use the phrase often enough that it sounds perfectly ordinary inside my own head. Outside it, apparently, some assembly is required. I try to explain it quickly, which brings in checkpoints, then quantisation, until a few minutes later I am explaining MP3 bitrates to somebody who asked what happened in the news and has been exceptionally patient about the sudden change of subject. The people asking are often interested in AI and keep abreast of what is happening, but they do not spend their evenings downloading checkpoints, comparing four-bit formats or wondering why a model that fits on a hard drive refuses to fit anywhere useful once it is loaded. This is probably a healthier arrangement. Some understand the musical map immediately. Others follow the first part and lose me somewhere around distillation. Usually there is a meeting, a train or another human obligation before I have explained the whole thing, so this is the longer version I can point them towards.

## The Whole Arrangement

I see artificial intelligence as music in the broad sense. It is the field in which the work is created. An individual trained model is a song, while a family of related models is an album. Different sizes or tuned versions may be separate tracks produced from the same body of work. Training covers what happens before release through composition, rehearsal, arrangement and production. The checkpoint is a recording of the finished song, and a high-precision checkpoint sits near the master recording. Quantisation is the master being converted from something like FLAC into MP3 at different bitrates. Distillation is the master playing through speakers while another recorder captures what it hears from elsewhere in the room.

RAG is closer to jazz. One performer begins with a piece, another joins, then another, each bringing material into the current session. The final answer is the improvised performance produced by everybody in the room at that moment. A hosted enterprise model is a streaming service. You can play the song, but you do not own the recording or the equipment serving it. The provider can change the version, alter the price or remove access, and yesterday’s listening session does not leave the master hidden somewhere inside your laptop. LoRA is an overdub attached to the base track. Prompting is direction given to the performer now. A mixture-of-experts system is an ensemble whose full membership exists even though every musician does not enter every passage. The map is rough by design. It is meant to help somebody know where they are before the technical detail begins.

## Before the Song Exists

Before a song reaches a speaker, decisions have already been made about what can be played. There are instruments, performers, an arrangement and some idea of what should count as a successful recording. A model begins with an architecture, which determines how information can move and which kinds of operation are available. A transformer, a recurrent network and a mixture-of-experts model do not simply contain different numbers of parameters. They organise the work differently. Training data supplies the material from which the model learns, including useful patterns, noise, repetition, contradictions and many things nobody would deliberately describe as a lesson. An objective defines what counts as improvement, and the optimiser repeatedly adjusts the weights in response.

The process may run through an unreasonable number of takes. No producer is leaning through the studio glass asking for slightly less bass. The mathematics has taken over that particular pleasure. Most of the history does not survive inside the released artefact. Failed runs disappear, intermediate states are replaced or archived, and decisions about filtering, ordering and preparation shape the final result without becoming directly recoverable from it.

The trained state that survives is what I call the song. The checkpoint is a recording of that state, fixing the learned numerical values into a form that can be stored, copied and loaded somewhere else. It does not contain the complete training session any more than a finished master contains every rehearsal, argument and abandoned take that preceded it.

## The Master and the MP3

Quantisation maps most cleanly to converting a lossless recording into MP3. A lossless file preserves the original audio information. It may store that information more efficiently, but it can be decoded without discarding the underlying samples. The high-precision checkpoint occupies a similar place in the model’s lineage. It is the numerical reference from which smaller representations may be produced. Converting the recording to MP3 changes the bargain. The song remains recognisable, but some information is discarded so the file requires less space and bandwidth. The bitrate controls how aggressive that bargain becomes.

Model quantisation represents numerical weights with fewer bits. An eight-bit representation generally preserves more numerical resolution than a four-bit one while using more memory. Lower precision may make a model practical on hardware that could not carry the larger representation. The audible or behavioural difference depends on the source, the encoding method and the use. A high-bitrate MP3 may be difficult to distinguish from the master during ordinary listening, just as a quantised model may behave very similarly to its higher-precision authority across many tasks.

The important part is the operation. The recording has changed format. A new song has not been composed. This is why the musical map helps me when two small models are placed beside one another. One may be a quantised version of a larger model, while the other may have been distilled. Their sizes may be similar while their histories are entirely different.

## The Recording Across the Room

Distillation is not another bitrate. Play the master through a pair of speakers and place another recording device elsewhere in the room. The second device captures the performance that reaches it. The new recording may preserve the melody, rhythm and much of the original character. It may be extremely good. The room, speakers and recorder have nevertheless stood between it and the master, and reversing the process will not recover the original tracks.

A distilled student learns from the behaviour of a teacher model. It may learn from the teacher’s selected responses, generated examples or the probability distribution the teacher assigns across possible outputs. Once trained, the student can operate independently. It has become its own model rather than a reversible compression of the teacher’s internal weights.

The teacher may be large, expensive and difficult to operate. The student can learn enough of its behaviour to become useful within a smaller body. That is closer to another performer learning the work than to the same master being saved at a lower bitrate. Quantisation preserves a direct relationship to the original weights. Distillation creates a new trained system from the original model’s behaviour. The two operations can produce similarly sized files, but the files do not mean the same thing.

## The Jazz Session

RAG makes more sense to me as jazz than as a library pasted onto a model. Begin with one musician playing. They have an existing repertoire, habits and technique. That is the trained model. A question provides the theme of the session. The musician can begin from what they already know, but the current performance may require material they do not carry accurately enough. Another player joins with a particular passage. Then another joins with a related section, a policy exception, a recent result or some local fact that was never part of the original training. These are the retrieved documents. They do not rewrite the first musician. They enter this performance.

The model listens to the material brought into its context and produces an answer from the combination. The resulting response is the improvisation, a new piece of music made in the room rather than a recording retrieved whole from any one source. That final synthesis matters. A RAG system does not simply return documents. Retrieval selects evidence, while generation combines the selected evidence with the model’s learned language ability and the user’s question.

The quality of the performance depends on who joins. Retrieve the wrong passage and the answer can remain fluent while the evidence points elsewhere. Retrieve the rule without its exception and the response may sound confident while missing the sentence that changes everything. Jazz does not become correct merely because everybody stayed in key. The retrieved material also leaves when the session ends. Unless the surrounding application stores it, the model has not permanently learnt the documents and the weights remain unchanged. Fine-tuning changes the performer. Retrieval changes who and what is present for the current performance.

## The Song Behind the Paywall

A hosted enterprise model is closer to Spotify or YouTube Music than to owning an album. The user chooses a song and hears it through a local device, while most of the catalogue, storage and delivery machinery remain elsewhere. Playback can begin without the complete recording being stored locally. The same thing happens with a hosted model. The prompt leaves the device, another organisation holds the weights and operates the hardware, and generated tokens return through the network. The experience is local. The model is not.

A subscription may provide excellent access. It may also determine which models remain available, how much use costs, what limits apply and whether yesterday’s version is still the version answering today. When a streaming service removes a recording, the listener cannot reconstruct the master from the fact that they once played it. When an enterprise provider retires a model, changes its behaviour or closes access, the user does not possess the system merely because they have stored previous responses. The local machine has learnt to ask for the song. It has not learnt to carry the catalogue.

Open weights alter that relationship. The checkpoint can be downloaded and retained, giving the user something closer to the recording, although they may still lack a practical player. A model can fit comfortably on storage and remain too large, too slow or too demanding to operate locally. Ownership and use are separate again.

## Overdubs and Ensembles

LoRA sits beside the master as an additional track. The base weights remain frozen while a relatively small learned component alters selected operations. Remove the adapter and the base returns. Attach another and the same model can behave differently. A prompt is more immediate. It is direction given during the present performance. Slow down. Use this tone. Follow these examples. Return the result in this format. The model has not been retrained because somebody asked for bullet points.

A mixture-of-experts system resembles an ensemble with many specialists available. A router selects only some of them for the current passage. The whole population belongs to the model, but the full orchestra is not activated for every note. These comparisons sit around the spine rather than replacing it. The song, its recording and the means of playback remain the main coordinates.

## Where the Music Stops

The analogy has limits. A conventional recording already contains the sound that will occur at its end. A language model can produce many continuations depending on the prompt, retrieved context and sampling process. The model is therefore closer to a composition capable of repeated performance than to one fixed waveform. What the user hears is being produced now, under the conditions of the current session.

Seeking has a boundary too. A listener can jump directly to the second chorus because the recording is laid out along time. A prompt cannot jump directly to the biology region of a dense model. Knowledge does not occupy neat labelled passages inside the weights. The musical map helps because it separates creation, recording, transformation, performance and access. It stops where those objects become too fixed for something that can still answer differently each time it is played.
