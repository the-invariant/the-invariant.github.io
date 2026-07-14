---
layout: default
title: Topics
permalink: /topics/
description: "Browse the writings on The Invariant by subject, idea, and recurring theme."
---

# Topics

{% if site.tags.size > 0 %}
<div class="topics-index row g-3 mx-0">
  {% for tag in site.tags %}
  <section class="col-md-6">
    <div class="topic-card card h-100 shadow-sm">
      <div class="card-body">
        <h2 id="{{ tag[0] }}">{{ tag[0] }} <span class="badge bg-secondary">{{ tag[1].size }}</span></h2>
        <ul class="list-group list-group-flush">
          {% for post in tag[1] %}
          <li class="list-group-item"><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </section>
  {% endfor %}
</div>
{% else %}
<p>No topics yet.</p>
{% endif %}
