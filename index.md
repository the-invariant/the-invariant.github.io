---
layout: default
title: Home
description: "Thoughts on science, technology, and human nature."
hero_title: Notes from the edge of science, technology, and human nature.
hero_text: ""
hero_image: /assets/images/site/heroes/home.jpg
---

{% include page-hero.html %}

## Recent posts

{% if site.posts.size > 0 %}
<div class="post-list">
  {% for post in site.posts limit:4 %}
  <article class="card mb-3 post-preview shadow-sm">
    <div class="row g-0">
      {% if post.image %}
      <div class="col-md-4">
        <a class="post-preview-image" href="{{ site.baseurl }}{{ post.url }}"><img class="img-fluid rounded-start" src="{{ site.baseurl }}{{ post.image }}" alt=""></a>
      </div>
      <div class="col-md-8">
      {% else %}
      <div class="col-md-12">
      {% endif %}
        <div class="card-body">
        <h3 class="card-title"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
        <p class="card-text"><small class="date text-muted">{{ post.date | date: "%Y-%m-%d" }} <span class="meta-sep">·</span> {% include reading-time.html post=post %}</small></p>
        <div class="excerpt">{{ post.excerpt }}</div>
        <p class="read-more"><a class="btn btn-outline-secondary btn-sm" href="{{ site.baseurl }}{{ post.url }}">Read more</a></p>
        </div>
      </div>
    </div>
  </article>
  {% endfor %}
</div>
{% else %}
<p>No posts yet.</p>
{% endif %}
