---
layout: post
title: "The Line That Learns"
author: Chukwuka Orefo
display_title: "The Line That Learns"
date: 2017-06-06
categories:
- Artificial Intelligence
- Machine Learning
- Mathematics
- Technology
tags:
- linear regression
- gradient descent
- model training
- prediction
- optimisation
- data
description: "What does a machine learn when it fits a line?"
image: /assets/images/posts/2017-06-06-the-line-that-learns/cdn-image-01.png
---
# The Line That Learns

![](/assets/images/posts/2017-06-06-the-line-that-learns/cdn-image-01.png)

Machine learning is often described through systems that recognise faces, understand speech or defeat people at difficult games. The scale makes the process appear mysterious, although its simplest form is quieter. A machine sees several examples, proposes a rule and measures how wrong the rule is. It then changes the rule and tries again.

The machine learns because the error has somewhere to go.

## The Price of an Old Car

![](/assets/images/posts/2017-06-06-the-line-that-learns/cdn-image-02.png)

Imagine that I’m trying to buy a used car. The difficulty isn’t finding one. It is deciding whether the asking price is reasonable. Suppose I find a collection of recent sales from the local area, with each record containing two pieces of information. The age of the car and the price paid for it.

![](/assets/images/posts/2017-06-06-the-line-that-learns/cdn-image-03.png)

When the observations are plotted, a pattern begins to appear. Newer cars tend to cost more and older cars tend to cost less. The points do not form a perfect line because age is not the only thing affecting price, but the direction is visible. A straight line can be used as a first approximation.

Given the age of another car, the line provides an estimate of what a similar vehicle might cost. It won’t tell us whether the engine has been maintained, whether the mileage is unusually high or whether the seller is hiding a problem. It answers one narrow question using the one variable it has been shown, and that narrowness matters because the model cannot use information that does not exist in the data.

## The Rule Beneath the Line

![](/assets/images/posts/2017-06-06-the-line-that-learns/cdn-image-04.png)

A straight line can be written as an equation.

```text
predicted price = slope × age + intercept
```

The intercept determines where the line begins, while the slope determines how quickly the predicted price changes as the car becomes older. Together, those two values are the parameters of the model. If they are chosen well, the line passes close to the observed prices. Chosen badly, the predictions sit far away from the data.

The equation is not merely a picture drawn across the points. It is a small machine. Feed it the age of a car and it returns a predicted price. Learning means finding the parameters that make those predictions useful.

## Giving Error a Number

The computer can begin with almost any line. For every car in the training data, it calculates a predicted price and compares that prediction with the price actually observed. The distance between them is the error for that example. Some predictions will be too high and others too low, so judging the line as a whole requires those individual errors to be combined into a single value called a loss.

One common choice is the mean squared error. Each difference is squared so that positive and negative errors do not cancel one another, then the results are averaged. The loss gives the model a direction. A large value means the current line fits the observations poorly, while a smaller one means the line has moved closer to them.

The machine does not know what a fair price is. It only knows whether the latest parameters produced more or less error than the ones before.

## The Line Moves

![](/assets/images/posts/2017-06-06-the-line-that-learns/cdn-image-05.png)

One way to find better parameters is gradient descent. The algorithm examines how the loss changes when the slope or intercept moves slightly, then adjusts both values in the direction that reduces the error.

The process repeats.

1. Choose a slope and intercept.
2. Predict the prices.
3. Measure the loss.
4. Adjust the parameters.
5. Predict again.

The size of each adjustment matters. A step that is too large can jump past a useful solution, while one that is too small can make learning unnecessarily slow. This step size is usually called the learning rate.

Eventually, the improvements become small enough for the process to stop, and the final line is the model the algorithm has learnt from the data. For simple linear regression, the parameters can also be calculated directly through algebra. Gradient descent matters because the same general movement can be used when the model contains far more parameters than a straight line. The shape becomes more complicated, but the act of learning remains recognisable.

## More Than Age

Age alone is not enough to price a car well. Mileage, make, model, engine size, service history, condition and location may all matter. Each additional variable gives the model another direction in which the price can change. With two inputs, the line becomes a surface. With many inputs, the model occupies a space that is difficult to draw but can still be described mathematically.

More variables do not automatically produce a better model. Irrelevant features can introduce noise. Missing information can force the model to attribute an effect to the wrong input. A model with too much flexibility can begin memorising the training examples instead of learning a relationship that survives beyond them.

This is why part of the data must remain outside the training process. The model learns from one set of examples, then faces another set it has not seen. That second set reveals whether the line captured a pattern or merely remembered the points. A good fit to the past is not yet a useful prediction.

## What the Machine Keeps

The trained model does not contain the original cars. It keeps the relationship it found between their ages and prices, compressing thousands of individual details into a small number of parameters. That compression is both the strength and the limit of machine learning.

The model can apply the relationship to a new example, but it can also erase distinctions that were not represented in its structure. A straight line cannot preserve every bend in the market, just as a dataset cannot preserve facts that were never collected.

Three things therefore shape the result.

* **The data** determines what experience is available.
* **The model** determines which kinds of pattern can be represented.
* **The learning algorithm** determines how the parameters move in response to error.

Evaluation adds the final question. Does the pattern still hold when the machine meets something it did not use to learn? Machine learning begins when a mistake can be measured and turned into an adjustment.

The machine does not understand the car. Each error simply tells the line which way to bend.
