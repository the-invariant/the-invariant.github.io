---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% if site.posts.size > 0 %}
<ul class="post-list blog-list">
  {% for post in site.posts limit:9 %}
  <li>
    {% if post.image %}
    <a class="post-thumb thumbnail" href="{{ site.baseurl }}{{ post.url }}"><img src="{{ site.baseurl }}{{ post.image }}" alt=""></a>
    {% endif %}
    <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <div class="excerpt">{{ post.excerpt }}</div>
    <p class="read-more"><a class="btn btn-default" href="{{ site.baseurl }}{{ post.url }}">Read more</a></p>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}
