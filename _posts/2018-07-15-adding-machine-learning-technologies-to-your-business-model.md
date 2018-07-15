---
layout: post
title: "Adding Machine Learning Technologies to Your Business Model"
author: Chukwuka Orefo
display_title: "Adding Machine Learning Technologies to Your Business Model"
date: 2018-07-15
categories:
- Artificial Intelligence
- Machine Learning
- Business Strategy
- Software Engineering
tags:
- model selection
- deployment
- predictive analytics
- decision systems
- MLOps
- business processes
- feedback loops
description: "Where does a prediction have to go before it becomes useful?"
image: /assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-01.png
---

# Adding Machine Learning Technologies to Your Business Model

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-01.png)

A machine learning model is useless until something changes because of it. The model may predict that a customer is likely to leave, that demand will rise next month or that a transaction looks suspicious, but none of those predictions creates value on its own. Someone still has to decide what the result means, which action follows and how the outcome will be measured.

Choosing an artificial intelligence architecture is therefore not simply a search for the most powerful algorithm. The harder question is where the prediction will enter the business.

## Different Shapes of Uncertainty

Machine learning models vary in complexity, though complexity isn’t a reliable measure of usefulness. A simple method can outperform a sophisticated one when the data is limited, the relationship is stable or the decision has to be explained clearly.

Bayesian methods provide one way to reason about uncertainty. They combine existing assumptions with new evidence and update the probability of an event. A business might use this structure to estimate the likelihood of a complaint escalating, provided it has relevant data and a defensible way to represent the prior risk.

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-02.png)

*Machine learning with a Bayesian model*

Regression methods answer a different kind of question by estimating relationships between variables. A company could examine how marketing expenditure relates to sales, then estimate the range of outcomes associated with another level of spending.

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-03.png)

*Predictive analytics through machine learning*

Classification assigns an observation to a known category. It might distinguish fraudulent transactions from legitimate ones or estimate whether a customer is likely to renew. Clustering begins without those labels and searches for groups whose behaviour follows similar patterns. A retailer could identify several customer clusters this way, although someone would still have to decide whether the groups mean anything commercially.

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-04.png)

*Clustering techniques in machine learning*

Decision trees split the data through a sequence of questions. They can capture nonlinear relationships and interactions while remaining relatively easy to inspect. Ensembles such as random forests combine many trees, reducing the instability that comes from relying on one.

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-05.png)

*Decision tree*

Neural networks are more flexible. Their adjustable connections can learn representations that would be difficult to specify by hand, which has made networks with several layers useful for images, speech and language.

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-06.png)

*Deep neural networks can support tasks such as facial recognition and language translation*

That flexibility has a cost. Neural networks may require large datasets, substantial computing resources and more effort to interpret. They are not the natural end point of every machine learning project. The correct model is not the most advanced one available, but the smallest model that can make the required decision reliably enough.

## The Black Box on the Table

Many companies are trying to make machine learning easier to use. The promise is attractive. Put correctly formatted data into a system and receive a useful prediction at the other end.

![](/assets/images/posts/2018-07-15-adding-machine-learning-technologies-to-your-business-model/cdn-image-07.png)

*Correctly formatted data enters the machine learning system and a prediction emerges*

The simplicity of that picture hides most of the work. Before a model can be trained, the business has to define the decision. A request to predict customer behaviour is too broad. The team needs to decide which behaviour matters, over what period, for which customers and what action will follow from the result.

The data then has to be inspected, cleaned and transformed. Missing values, inconsistent records, duplicated cases and historical bias can shape the model before the algorithm has seen its first example. The prepared dataset is normally divided into training, validation and testing portions. Training data fits the model, validation data helps compare alternatives and adjust parameters, and the test set remains untouched until the end so that it can provide a less contaminated estimate of performance.

Several model families can then be tested against a simple baseline. The choice should reflect the type of target, the amount of data, the need for explanation and the cost of different errors. Parameter tuning belongs inside the training and validation process. If the test set is searched repeatedly for the most flattering result, it has already become part of model selection and can no longer behave like an independent test.

Average performance is not the final boundary either. A strong score may conceal failure for a particular group, an unusual input or a situation absent from the training data. The team has to identify the borders of the model before the business crosses them accidentally. Only then does deployment begin.

## The Missing Step

Deployment is often described as a button. The trained model is packaged, placed on a server and connected to an application. The technical system is now live, but the business value can still be missing because the prediction has no route into a decision.

Suppose the model identifies a customer likely to leave. Who receives the warning, and what are they allowed to do with it? How quickly must they respond? Does every high-risk customer receive the same intervention? What happens when the model is uncertain, or when the person handling the case knows something the model cannot see?

Those questions force the business process to change. Without that work, the model becomes another dashboard that people glance at before continuing with whatever they were already doing, which is technically a deployment and perhaps not the triumph imagined during the project meeting.

The prediction also needs an owner. Someone must decide when the model should be followed, when it should be overridden and what happens when it fails. These responsibilities are not administrative details attached after the machine learning architecture has been chosen. They are part of the architecture.

## The Return Path

A deployed model should create a loop. The system makes a prediction, the business takes an action and the action produces an outcome. That outcome must return as evidence that can be compared with the original prediction. Without a return path, the organisation cannot tell whether the model improved the decision or merely produced another number.

Suppose a model identifies customers at risk of leaving and a retention team contacts them. Recording only whether the customer stayed is not enough. The business also needs to know which intervention was used, whether comparable customers who received no intervention behaved differently and whether the cost of the response exceeded the value preserved. The prediction and the action must remain separable enough to evaluate.

The loop also has to be watched over time. Customer behaviour changes. Products change. Policies alter the data. A model that performed well during development can drift away from the environment in which it now operates.

Deployment is not the end of model building. It is the point at which the model begins revealing whether the business understood the problem it had asked the model to solve.

## The Model Is Not the Product

Business architects and analysts do not need to derive every algorithm by hand, but they do need to understand what kind of question each model can answer, what evidence supports the result and where the prediction enters the organisation. Data scientists and machine learning engineers can build the model. They cannot decide alone what an error costs, which action is acceptable or whether the workflow has improved.

Those decisions belong to the business because they define what the model is for. Machine learning becomes useful when the prediction is joined to a decision, the decision to an action and the action to evidence that can return.

The model is only one part of that movement. The loop is the product.


