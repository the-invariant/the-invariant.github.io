---
layout: default
title: Home
---

# The Invariant

<p class="tagline">Thoughts on science, technology, and ideas.</p>

This is a small personal site for notes and essays about the things that keep turning up when science, machines, and ordinary experience meet.

I am interested in careful explanations, odd connections, useful tools, and the way ideas change when they pass from one field into another.

## Recent posts

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts limit:5 %}
  <li>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}
