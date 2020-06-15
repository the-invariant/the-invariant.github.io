(function () {
  var entries = [];
  var form = document.getElementById("search-form");
  var input = document.getElementById("search-input");
  var typeFilter = document.getElementById("search-type");
  var yearFilter = document.getElementById("search-year");
  var tagFilter = document.getElementById("search-tag");
  var count = document.getElementById("search-count");
  var results = document.getElementById("search-results");

  if (!form || !input || !typeFilter || !yearFilter || !tagFilter || !count || !results) {
    return;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function getParams() {
    var params = {};
    var pairs = window.location.search.replace(/^\?/, "").split("&");

    for (var i = 0; i < pairs.length; i += 1) {
      var parts = pairs[i].split("=");
      var key = decodeURIComponent(parts[0] || "");
      if (key) {
        params[key] = decodeURIComponent((parts[1] || "").replace(/\+/g, " "));
      }
    }

    return params;
  }

  function optionExists(select, value) {
    for (var i = 0; i < select.options.length; i += 1) {
      if (select.options[i].value === value) {
        return true;
      }
    }

    return false;
  }

  function addOption(select, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.appendChild(document.createTextNode(text));
    select.appendChild(option);
  }

  function uniqueValues(items, field) {
    var values = [];
    var seen = {};

    for (var i = 0; i < items.length; i += 1) {
      var value = items[i][field];
      if (value && !seen[value]) {
        seen[value] = true;
        values.push(value);
      }
    }

    return values.sort().reverse();
  }

  function uniqueTags(items) {
    var values = [];
    var seen = {};

    for (var i = 0; i < items.length; i += 1) {
      var tags = items[i].tags || [];
      for (var j = 0; j < tags.length; j += 1) {
        if (tags[j] && !seen[tags[j]]) {
          seen[tags[j]] = true;
          values.push(tags[j]);
        }
      }
    }

    return values.sort();
  }

  function populateFilters(items) {
    var types = uniqueValues(items, "type").sort();
    var years = uniqueValues(items, "year");
    var tags = uniqueTags(items);

    for (var i = 0; i < types.length; i += 1) {
      if (!optionExists(typeFilter, types[i])) {
        addOption(typeFilter, types[i], types[i].charAt(0).toUpperCase() + types[i].slice(1));
      }
    }

    for (var j = 0; j < years.length; j += 1) {
      if (!optionExists(yearFilter, years[j])) {
        addOption(yearFilter, years[j], years[j]);
      }
    }

    for (var k = 0; k < tags.length; k += 1) {
      if (!optionExists(tagFilter, tags[k])) {
        addOption(tagFilter, tags[k], tags[k]);
      }
    }
  }

  function selectedFilters() {
    return {
      q: input.value,
      type: typeFilter.value,
      year: yearFilter.value,
      tag: tagFilter.value
    };
  }

  function hasTag(item, tag) {
    var tags = item.tags || [];

    for (var i = 0; i < tags.length; i += 1) {
      if (tags[i] === tag) {
        return true;
      }
    }

    return false;
  }

  function matchesFilters(item, filters) {
    var needle = normalize(filters.q);
    var haystack = [
      item.title,
      item.excerpt,
      item.content
    ].join(" ");

    if (needle && normalize(haystack).indexOf(needle) === -1) {
      return false;
    }

    if (filters.type && item.type !== filters.type) {
      return false;
    }

    if (filters.year && item.year !== filters.year) {
      return false;
    }

    if (filters.tag && !hasTag(item, filters.tag)) {
      return false;
    }

    return true;
  }

  function findMatches(items, filters) {
    var matches = [];

    for (var i = 0; i < items.length; i += 1) {
      if (matchesFilters(items[i], filters)) {
        matches.push(items[i]);
      }
    }

    return matches;
  }

  function updateUrl(filters) {
    var params = [];

    if (filters.q) {
      params.push("q=" + encodeURIComponent(filters.q));
    }
    if (filters.type) {
      params.push("type=" + encodeURIComponent(filters.type));
    }
    if (filters.year) {
      params.push("year=" + encodeURIComponent(filters.year));
    }
    if (filters.tag) {
      params.push("tag=" + encodeURIComponent(filters.tag));
    }

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + (params.length ? "?" + params.join("&") : ""));
    }
  }

  function renderResults(matches, filters) {
    var html = "";
    var active = filters.q || filters.type || filters.year || filters.tag;

    if (!active) {
      count.innerHTML = "";
      results.innerHTML = '<p class="search-empty">Enter a search term or choose a filter.</p>';
      return;
    }

    if (!matches.length) {
      count.innerHTML = "0 results";
      results.innerHTML = '<p class="search-empty">No results found.</p>';
      return;
    }

    count.innerHTML = matches.length === 1 ? "1 result" : matches.length + " results";

    html += "<ul>";
    for (var i = 0; i < matches.length; i += 1) {
      html += '<li class="search-result">';
      html += '<h2 class="search-result-title"><a href="' + escapeHtml(matches[i].url) + '">' + escapeHtml(matches[i].title) + "</a></h2>";
      html += '<div class="search-result-meta">';
      html += escapeHtml(matches[i].type || "page");
      if (matches[i].date) {
        html += " / " + escapeHtml(matches[i].date);
      }
      html += "</div>";
      if (matches[i].excerpt) {
        html += '<p class="search-result-excerpt">' + escapeHtml(matches[i].excerpt) + "</p>";
      }
      if (matches[i].tags && matches[i].tags.length) {
        html += '<p class="search-result-tags">';
        for (var j = 0; j < matches[i].tags.length; j += 1) {
          html += '<span class="badge badge-secondary">' + escapeHtml(matches[i].tags[j]) + "</span> ";
        }
        html += "</p>";
      }
      html += "</li>";
    }
    html += "</ul>";

    results.innerHTML = html;
  }

  function updateResults() {
    var filters = selectedFilters();
    updateUrl(filters);
    renderResults(findMatches(entries, filters), filters);
  }

  var params = getParams();
  var indexUrl = results.getAttribute("data-index") || "/search.json";

  input.value = params.q || "";

  count.innerHTML = "";
  results.innerHTML = '<p class="search-empty">Loading search index...</p>';

  fetch(indexUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (items) {
      entries = items || [];
      populateFilters(entries);

      typeFilter.value = params.type || "";
      yearFilter.value = params.year || "";
      tagFilter.value = params.tag || "";

      updateResults();
    })
    .catch(function () {
      count.innerHTML = "";
      results.innerHTML = '<p class="search-empty">Search is not available.</p>';
    });

  form.onsubmit = function (event) {
    event.preventDefault();
    updateResults();
  };

  typeFilter.onchange = updateResults;
  yearFilter.onchange = updateResults;
  tagFilter.onchange = updateResults;
}());
