---
layout: default
title: Home
---

<div class="feature-panel card shadow-sm mb-4">
  <div class="row g-0 align-items-stretch">
    <div class="col-lg-5">
      <p class="feature-image"><img class="img-fluid" src="{{ site.baseurl }}/assets/images/site/feature.jpg" alt=""></p>
    </div>
    <div class="col-lg-7">
      <div class="feature-copy card-body">
        <h1>Notes from the edge of science and technology.</h1>
        <p class="lead">Thoughts on machines, minds, bodies, stories, and the ideas that keep returning.</p>
      </div>
    </div>
  </div>
</div>

## Recent posts

{% if site.posts.size > 0 %}
<div class="post-list row g-4">
  {% for post in site.posts limit:4 %}
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
