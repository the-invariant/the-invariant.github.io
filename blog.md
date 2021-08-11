---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% if site.posts.size > 0 %}
<div class="post-list blog-list row g-4">
  {% for post in site.posts limit:9 %}
  <article class="post-list-item col-md-6">
    <div class="post-card card h-100 shadow-sm">
      {% if post.image %}
      <a class="post-thumb" href="{{ site.baseurl }}{{ post.url }}"><img class="img-fluid" src="{{ site.baseurl }}{{ post.image }}" alt=""></a>
      {% endif %}
      <div class="card-body">
        <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
        <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
        <div class="excerpt">{{ post.excerpt }}</div>
        <p class="read-more"><a class="btn btn-outline-secondary btn-sm" href="{{ site.baseurl }}{{ post.url }}">Read more</a></p>
      </div>
    </div>
  </article>
  {% endfor %}
</div>
{% else %}
<p>No posts yet.</p>
{% endif %}
