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
        <p class="card-text"><small class="date text-muted">{{ post.date | date: "%Y-%m-%d" }}</small></p>
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
