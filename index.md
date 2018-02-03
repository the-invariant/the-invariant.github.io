---
layout: default
title: Home
---

<div class="feature-panel card">
  <p class="feature-image"><img class="card-img-top img-fluid" src="{{ site.baseurl }}/assets/images/site/feature.jpg" alt=""></p>
  <div class="feature-copy card-body">
    <h1>Notes from the edge of science and technology.</h1>
    <p class="lead">Thoughts on machines, minds, bodies, stories, and the ideas that keep returning.</p>
       
  </div>
</div>

## Recent posts

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts limit:4 %}
  <li>
    {% if post.image %}
    <a class="post-thumb" href="{{ site.baseurl }}{{ post.url }}"><img class="img-fluid" src="{{ site.baseurl }}{{ post.image }}" alt=""></a>
    {% endif %}
    <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <div class="excerpt">{{ post.excerpt }}</div>
    <p class="read-more"><a class="btn btn-outline-secondary btn-sm" href="{{ site.baseurl }}{{ post.url }}">Read more</a></p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}
