---
layout: default
title: Home
---

# The Invariant

<p class="tagline">Thoughts on science, technology, and ideas.</p>


## Recent posts

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts limit:5 %}
  <li>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}
