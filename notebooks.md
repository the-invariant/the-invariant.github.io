---
layout: default
title: Notebooks
permalink: /notebooks/
description: "Code notes, worked examples, and small experiments from The Invariant."
hero_title: Notebooks
hero_text: Code notes, worked examples, and small experiments from The Invariant.
hero_image: /assets/images/site/heroes/notebooks.jpg
---

{% include page-hero.html %}

{% assign notebooks = site.notebooks | sort: "date" | reverse %}
{% if notebooks.size > 0 %}
<div class="notebook-list">
  {% for notebook in notebooks %}
  {% include notebook-card.html notebook=notebook %}
  {% endfor %}
</div>
{% else %}
<p class="notebook-empty">Notebook material will appear here when it is ready.</p>
{% endif %}
