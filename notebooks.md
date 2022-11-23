---
layout: default
title: Notebooks
permalink: /notebooks/
---

# Notebooks

<div class="notebook-note card shadow-sm">
  <div class="card-body">
    <p>A place for code notes, worked examples, and small experiments.</p>
  </div>
</div>

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
