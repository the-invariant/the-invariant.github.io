---
layout: post
title: "Where to Start? Building Machine Learning and Deep Learning Environments for Your Business"
author: Chukwuka Orefo
display_title: "Where to Start? Building Machine Learning and Deep Learning Environments for Your Business"
date: 2018-06-13
categories:
- Artificial Intelligence
- Machine Learning
- Software Engineering
- Infrastructure
tags:
- Python
- TensorFlow
- Keras
- Jupyter
- Anaconda
- data pipelines
- reproducibility
- deep learning
description: "What must remain simple before the stack begins to grow?"
image: /assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-01.png
---

# Where to Start? Building Machine Learning and Deep Learning Environments for Your Business

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-01.png)

The first machine learning problem is often not the model. It is the room around it. A manager assembling a new team and a practitioner starting alone face the same early confusion. Which language should be used? Which libraries belong together? Where should the data live? Should the work run locally or in the cloud?

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-02.png)

There are enough options to spend several days building an environment before testing one useful idea. A better starting principle is to keep the environment powerful, free and simple. The tools will change. What matters is creating a short path from the data to an experiment that can be repeated.

## One Spine

For most new machine learning work, [Python](https://www.python.org/) is the practical default. [R](https://www.r-project.org/) remains a strong language for statistics and analysis, while Python has the advantage of joining data work to a wider software ecosystem. That makes it easier to move from exploration towards a working application.

Several libraries form the common scientific foundation. [NumPy](http://www.numpy.org/) provides numerical arrays and matrix operations. [SciPy](https://www.scipy.org/) adds scientific and optimisation routines. [Pandas](https://pandas.pydata.org/) makes tabular data easier to load, clean and reshape, while [Matplotlib](https://matplotlib.org/) provides visualisation.

[Scikit-learn](http://scikit-learn.org/) sits across this foundation and supplies a consistent interface for many established machine learning methods. It includes tools for preprocessing, regression, classification, clustering and model evaluation.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-03.png)

The value of this stack is not only the number of algorithms. The libraries share familiar data structures, so information can move between them without rebuilding the environment for every experiment. The language becomes a spine, allowing different tools to attach without splitting the work into separate worlds.

## When the Network Deepens

Traditional machine learning methods are often sufficient for structured business data. Deep learning becomes useful when the problem contains images, speech, language or another form of data whose useful representation is difficult to design by hand. [TensorFlow](https://www.tensorflow.org/) provides a computational framework for building and training neural networks. Other frameworks such as [Caffe](http://caffe.berkeleyvision.org/) and [Theano](http://deeplearning.net/software/theano/) remain available, but choosing one principal framework reduces unnecessary variation inside a new team.

[Keras](https://keras.io/) offers a higher-level interface over deep learning backends such as TensorFlow and Theano. It hides some of the lower-level construction while preserving access to the underlying system when more control is needed. This makes it useful for beginning with the shape of the network rather than the plumbing beneath it.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-04.png)

Specialised problems bring specialised tools. [OpenCV](https://opencv.org/) provides image processing and computer vision operations. It is written largely in C and C++, but Python bindings allow it to remain inside the same environment.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-05.png)

Natural language work may use Java-based tools such as Stanford CoreNLP through wrappers or services. Speech projects can use Python libraries such as SpeechRecognition to connect audio input to available recognition engines. These packages should not all be installed simply because they exist. Each one should enter when the problem requires it. A useful environment is not the one with the most tools. It is the one in which every tool has a reason to be there.

## The Path Into the Model

Machine learning and deep learning systems depend on data, but business data rarely arrives in one clean form. It may begin as a CSV file, an Excel workbook, a relational database such as SQL Server or Oracle, a document store or a distributed file system.

CSV and spreadsheet files are often enough for early experiments. Relational databases become important when records need stable structure, joins and controlled access. [MongoDB](https://www.mongodb.com/) stores document data in a binary JSON-like form called BSON, which can be useful when records do not share one rigid schema. Hadoop can provide distributed storage and processing when the volume has moved beyond one machine.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-06.png)

The model does not care how impressive the storage system is. It cares whether the data can be read consistently, transformed correctly and traced back to its source. The environment therefore needs a path rather than a collection of repositories. Raw data should enter through a known process. Cleaning and feature preparation should be recorded. Training and testing data should be separated deliberately, and the result should be reproducible without relying on the memory of the person who ran it first. The pipeline begins before the algorithm.

## Renting the Machine

A local computer is often enough for early machine learning. Deep learning can require more memory and specialised processors, particularly when training large networks on images or language. Cloud services allow the machine to be rented when it is needed.

[Amazon Web Services](https://aws.amazon.com/) packages computing, storage and database services into one environment.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-07.png)

The [Google Cloud Platform](https://cloud.google.com/) provides a similar route into hosted computing and machine learning services.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-08.png)

The cloud removes the need to own every machine. It does not remove the need to understand the workload. A team should know what requires a GPU, what can run on an ordinary processor, how long training takes and which data can safely leave the organisation. Convenience can make waste and poor governance easier to hide. The smallest sufficient machine is usually the best place to begin.

## The Workbench

The remaining problem is installation.

![](/assets/images/posts/2018-06-13-where-to-start-building-machine-learning-and-deep-learning-environments-for-your-business/cdn-image-09.png)

[Anaconda](https://anaconda.org/) provides Python together with much of the scientific stack and an environment manager called conda. Separate environments allow projects to use different library versions without constantly breaking one another. Additional packages can be installed through conda or pip.

```bash
pip install package==version
```

Recording those versions matters. A notebook that works today may fail later because one dependency changed underneath it. A simple `requirements.txt` or `environment.yml` file turns the environment from a personal arrangement into something another person can reconstruct.

[Jupyter Notebook](http://jupyter.org/) provides a web-based workbench where code, notes, visualisations and results can remain together. This makes it useful for exploration and communication, but it is not the whole system. A notebook can hide execution order, manual steps and state left behind from an earlier run.

Code that survives beyond the experiment should gradually move into functions, scripts and tested modules. The notebook is the bench where the idea is assembled. It should not be mistaken for the factory.

## Start With the Distance

A machine learning environment does not begin with TensorFlow, a GPU or a cloud account. It begins with the distance between a question and a repeatable answer.

Python provides a common language. The scientific libraries provide the working parts. Data systems provide the material. Cloud platforms provide additional machines when the local one is no longer enough. Anaconda and Jupyter make the first experiments easier to assemble and share.

The particular tools will change. The path should remain visible. A good environment is small enough to understand, stable enough to repeat and open enough to replace one part without losing the whole.
