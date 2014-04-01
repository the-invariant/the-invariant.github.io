---
layout: default
title: Topics
permalink: /topics/
---

# Topics

{% if site.tags.size > 0 %}
<div class="topics-index">
  {% for tag in site.tags %}
  <h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
    <li><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
{% else %}
<p>No topics yet.</p>
{% endif %}
