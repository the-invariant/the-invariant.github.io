---
layout: default
title: Search
permalink: /search/
---

# Search

Search runs in the browser.

<form id="search-form" class="search-page-form" action="{{ site.baseurl }}/search/" method="get">
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="search-input">Search</label>
      <input id="search-input" class="form-control" type="text" name="q" placeholder="Search">
    </div>
  </div>

  <div class="form-row search-filter-row">
    <div class="form-group col-md-4">
      <label for="search-type">Type</label>
      <select id="search-type" class="form-control" name="type">
        <option value="">All types</option>
      </select>
    </div>

    <div class="form-group col-md-4">
      <label for="search-year">Year</label>
      <select id="search-year" class="form-control" name="year">
        <option value="">All years</option>
      </select>
    </div>

    <div class="form-group col-md-4">
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
