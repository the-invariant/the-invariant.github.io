---
layout: post
title: "The Missing Run"
author: Chukwuka Orefo
display_title: "The Missing Run"
date: 2018-06-30
categories:
- Machine Learning
- Clinical Data
- Reproducibility
- Research Consulting
tags:
- MLflow
- Git
- scikit-learn
- PySpark
- cross-validation
- experiment tracking
- model provenance
description: "What is a model when the execution that produced it has disappeared?"
image: /assets/images/posts/2018-06-30-the-missing-run/hero.jpg
---

# The Missing Run

## Best, Final, Unknown

I’ve spent the last few days training several models to identify patients who might be eligible for a study. Each one is tested against a gold standard, a set of cases the research team has already reviewed and marked as eligible or ineligible. The comparison isn’t only about how many eligible patients the model finds. It also matters how many ineligible patients it correctly leaves out. In the spreadsheet, those measures appear as [recall, or sensitivity, and specificity](https://en.wikipedia.org/w/index.php?title=Sensitivity_and_specificity&oldid=843939485).

One model is ahead of the others. It finds more of the eligible patients without filling the shortlist with too many people who don’t belong there, so I mark it as the leading candidate and send the client the comparison table. They’re preparing the methods section now. All they need from me is the exact patient cohort used to train the model.

I answer before checking. Version three, I think. The cohort after the last review.

Then I read the message again. There are three different things in the project called version three. The model is `best_model_v3.pkl`. The feature folder has its own `v3`. The training data has also reached `v3`, although that label now points to a directory whose contents have changed since the model was fitted. I’ve used the same shorthand for three separate histories because, at the time, I knew which one I meant.

The client doesn’t need the answer I probably mean. They need the cohort definition behind the result I’ve already told them is best. The spreadsheet has the score and most of the parameters. Git has the training script. The pickle gives me the estimator settings, including `C`, the value controlling how tightly the model fits the training examples. For a few minutes that feels close enough.

It isn’t.

Git points to the same shared data directory, but reviewed cases have been added beneath it. The notebook contains output from the grid search I started on Friday and the narrower random search I ran when the first one was still working on Monday. Both used [cross-validation](https://en.wikipedia.org/w/index.php?title=Cross-validation_%28statistics%29&oldid=848137600), repeated train-and-test splits intended to show whether a result survives beyond one partition of the data. Some notebook cells have been rerun since then. The output remains, but its order no longer tells me which search produced the file on disk.

I keep reading the same evidence in a different order and getting the same uncertainty back. The code looks right. The settings look right. The cohort I think I used is probably right. None of that is the same as knowing.

I’m no longer looking for a misplaced note. I’m deciding whether something I’ve already placed in front of a client still counts as a result. The file loads normally, its predictions haven’t changed and it still has the highest score in the spreadsheet. Nothing inside `best_model_v3.pkl` knows that a question about its past has changed what I can do with it.

I send another message and ask the client not to use the model yet, then move it out of the folder I use for release candidates. The bytes are the same before and after. The model has simply stopped being usable.

## The Space Between the Files

A few days later, I read [the launch post for MLflow](https://www.databricks.com/blog/2018/06/05/introducing-mlflow-an-open-source-machine-learning-platform.html). Databricks describes Tracking as an API and interface for recording parameters, code versions, metrics and output files, then comparing the resulting runs. At first, it looks like a better spreadsheet. That’s useful, but it doesn’t yet feel like the thing I’ve lost.

I add the tracking calls anyway.

```python
import mlflow
from sklearn.svm import SVC


def train_model(c_value):
    mlflow.start_run()

    try:
        mlflow.log_param("cohort_version", cohort_version)
        mlflow.log_param("feature_version", feature_version)
        mlflow.log_param("git_commit", git_commit)
        mlflow.log_param("C", c_value)

        model = SVC(C=c_value)
        model.fit(X_train, y_train)

        predictions = model.predict(X_validation)
        recall, specificity = evaluate(y_validation, predictions)

        mlflow.log_metric("recall", recall)
        mlflow.log_metric("specificity", specificity)
        mlflow.log_artifact("cohort_manifest.json")
        mlflow.log_artifact("model.pkl")
    finally:
        mlflow.end_run()
```

The wrapper is small enough to be slightly annoying. I’ve spent hours trying to reconstruct the old experiment, and the visible repair is a few calls around code that already works.

I run the same [support vector machine](https://en.wikipedia.org/w/index.php?title=Support_vector_machine&oldid=848221959) twice. It is a classifier that tries to place a boundary between the eligible and ineligible cases. The only change is `C`, which controls how severely the model penalises training errors and therefore how tightly it fits that boundary.

```python
train_model(c_value=1.0)
train_model(c_value=10.0)
```

Both fitted files are called `model.pkl`. Before this, I would have renamed one immediately, probably adding the parameter, the date or another version number to the filename. This time I leave them alone and open the interface.

```bash
mlflow ui
```

It shows two rows. Each has its own value of `C`, recall, specificity and artefacts. The code is almost identical, the filenames are identical, and the runs are not. The word begins to matter because the execution now has somewhere to exist before I decide which output deserves to be called best.

The model file hasn’t become smarter, and the training code hasn’t become reproducible by itself. Git still holds the code. The patient data still stays in controlled storage. MLflow doesn’t replace either of them. It gives the moment when that code met that data an identity.

The original ambiguity returns quickly. Logging `cohort_version` as `v3` doesn’t freeze the cohort. If `v3` can change underneath the label, I’ve only moved the uncertainty into a cleaner interface, which is an improvement mainly for people who enjoy their confusion neatly tabulated. For the rerun, the cohort gets a fixed snapshot and a manifest listing the files and counts behind it. The split definition travels with the run as well. MLflow can preserve an identifier, but the identifier still has to point to something that will remain where I left it.

The old workflow asked the filename to do too much. It had to be the fitted model, the version, the history and the proof. Under MLflow, `model.pkl` can go back to being a file. The run carries the rest.

## The Record Cannot Judge

Tracking doesn’t recover `best_model_v3.pkl`. The experiment happened before the record existed, so the missing cohort state and validation splits don’t reappear when I install a new tool. The old row remains in the spreadsheet, but it no longer decides what I send to the client. I rerun the experiment from a fixed cohort snapshot instead.

This time the commit, feature version, parameters, split, metrics, manifest and model artefact sit under one run. When the client asks which patients produced the result, I don’t have to rebuild the answer from memory. I can follow it. That is enough to make the result usable.

It is not enough to make it right.

A preprocessing step can still leak information across the validation splits. A feature can still perform because it identifies one hospital rather than a patient pattern that survives elsewhere. The gold standard can still contain a bad label. MLflow will preserve any of those mistakes without complaint.

Provenance tells me what happened. It does not tell me whether what happened was sound. Once the run has been preserved, the experiment can be inspected rather than guessed at. The result has a past now. Whether that past deserves belief remains a separate piece of work.


