---
layout: default
title: Archive
permalink: /archive/
---

# Archive

{% if site.posts.size > 0 %}
{% assign last_year = "" %}
{% assign last_month = "" %}
  {% for post in site.posts %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
  {% if this_year != last_year %}
  {% if last_month != "" %}
</ul>
  {% endif %}
  <h2 class="archive-year">{{ this_year }}</h2>
  {% assign last_year = this_year %}
  {% assign last_month = "" %}
  {% endif %}
  {% if this_month != last_month %}
  {% if last_month != "" %}
</ul>
  {% endif %}
  <h3 class="archive-month">{{ this_month }}</h3>
<ul class="archive-list list-group">
  {% assign last_month = this_month %}
  {% endif %}
  <li class="list-group-item"><span class="date">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}
