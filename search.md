---
layout: default
title: Search
permalink: /search/
description: "Search the essays, pages, and notes published on The Invariant."
robots: "noindex, follow"
search_exclude: true
sitemap: false
hero_title: Search
hero_text: Search the essays, pages, and notes published on The Invariant.
hero_image: /assets/images/site/heroes/search.jpg
---

{% include page-hero.html %}

<form id="search-form" class="search-page-form card shadow-sm" action="{{ site.baseurl }}/search/" method="get">
  <div class="row mx-0">
    <div class="col-md-12 search-field">
      <label for="search-input">Search</label>
      <input id="search-input" class="form-control" type="text" name="q" placeholder="Search">
    </div>
  </div>

  <div class="row search-filter-row mx-0">
    <div class="col-md-4 search-field">
      <label for="search-type">Type</label>
      <select id="search-type" class="form-control" name="type">
        <option value="">All types</option>
      </select>
    </div>

    <div class="col-md-4 search-field">
      <label for="search-year">Year</label>
      <select id="search-year" class="form-control" name="year">
        <option value="">All years</option>
      </select>
    </div>

    <div class="col-md-4 search-field">
      <label for="search-tag">Topic</label>
      <select id="search-tag" class="form-control" name="tag">
        <option value="">All topics</option>
      </select>
    </div>
  </div>

  <button class="btn btn-outline-secondary btn-sm" type="submit">Search</button>
</form>

<p id="search-count" class="search-count"></p>
<div id="search-results" class="search-results" data-index="{{ site.baseurl }}/search.json"></div>
