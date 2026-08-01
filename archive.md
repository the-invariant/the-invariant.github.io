---
layout: default
title: Archive
permalink: /archive/
description: "The complete archive of writing published on The Invariant. Select a year, then a month, to view its posts."
hero_title: Archive
hero_text: The complete archive of writing published on The Invariant. Select a year, then a month, to view its posts.
hero_image: /assets/images/site/heroes/archive.jpg
---

{% include page-hero.html %}

{% if site.posts.size > 0 %}
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
<div class="archive-tree">
  {% for year in posts_by_year %}
  <details class="archive-year" id="{{ year.name }}">
    <summary>
      <span class="archive-summary-label">{{ year.name }}</span>
      <span class="archive-count">{{ year.items.size }} {% if year.items.size == 1 %}post{% else %}posts{% endif %}</span>
    </summary>
    {% assign months = year.items | group_by_exp: "post", "post.date | date: '%m'" %}
    <div class="archive-year-content">
      {% for month in months %}
      <details class="archive-month">
        <summary>
          <span class="archive-summary-label">{{ month.items.first.date | date: "%B" }}</span>
          <span class="archive-count">{{ month.items.size }} {% if month.items.size == 1 %}post{% else %}posts{% endif %}</span>
        </summary>
        <ul class="archive-list">
          {% for post in month.items %}
          <li>
            <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%d %B" }}</time>
            <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          </li>
          {% endfor %}
        </ul>
      </details>
      {% endfor %}
    </div>
  </details>
  {% endfor %}
</div>
{% else %}
<p>No posts yet.</p>
{% endif %}

<script>
  (function () {
    if (!window.location.hash) return;
    var year = document.getElementById(window.location.hash.slice(1));
    if (year && year.matches("details.archive-year")) year.open = true;
  }());
</script>
