// Project gallery: search, filter, and sort the projects table in place.
// Without JavaScript every project is still listed, so nothing is hidden from visitors or search engines.
(function () {
  "use strict";
  var form = document.getElementById("filters");
  var table = document.getElementById("project-table");
  if (!form || !table) return;

  var tbody = table.tBodies[0];
  var rows = Array.prototype.slice.call(tbody.rows);
  var q = form.elements.q, status = form.elements.status, topic = form.elements.topic, sort = form.elements.sort;
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var total = rows.length;

  // Restore state from the address bar, e.g. projects.html?topic=Forecasting
  var params = new URLSearchParams(window.location.search);
  q.value = params.get("q") || "";
  setSelect(status, params.get("status"));
  setSelect(topic, params.get("topic"));
  setSelect(sort, params.get("sort"));

  function setSelect(el, val) {
    if (!val) return;
    for (var i = 0; i < el.options.length; i++) if (el.options[i].value === val) { el.value = val; return; }
  }

  var sorters = {
    status: function (a, b) { return a.dataset.statusRank - b.dataset.statusRank || b.dataset.updated.localeCompare(a.dataset.updated); },
    updated: function (a, b) { return b.dataset.updated.localeCompare(a.dataset.updated) || a.dataset.title.localeCompare(b.dataset.title); },
    started: function (a, b) { return b.dataset.started.localeCompare(a.dataset.started) || a.dataset.title.localeCompare(b.dataset.title); },
    title: function (a, b) { return a.dataset.title.localeCompare(b.dataset.title); }
  };

  function apply() {
    var terms = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var s = status.value, t = topic.value, shown = 0;

    rows.sort(sorters[sort.value] || sorters.status).forEach(function (row) {
      var ok = (!s || row.dataset.status === s) &&
        (!t || row.dataset.topics.split("|").indexOf(t) !== -1) &&
        terms.every(function (w) { return row.dataset.search.indexOf(w) !== -1; });
      row.hidden = !ok;
      if (ok) shown++;
      tbody.appendChild(row);
    });

    count.textContent = shown === total ? "Showing all " + total + " projects." : "Showing " + shown + " of " + total + " projects.";
    empty.hidden = shown !== 0;
    table.hidden = shown === 0;

    var next = new URLSearchParams();
    if (q.value.trim()) next.set("q", q.value.trim());
    if (s) next.set("status", s);
    if (t) next.set("topic", t);
    if (sort.value !== "status") next.set("sort", sort.value);
    var qs = next.toString();
    try { history.replaceState(null, "", qs ? "?" + qs : window.location.pathname); } catch (e) { /* file:// previews */ }
  }

  function reset() { q.value = ""; status.value = ""; topic.value = ""; sort.value = "status"; apply(); q.focus(); }

  form.addEventListener("input", apply);
  form.addEventListener("change", apply);
  form.addEventListener("reset", function (e) { e.preventDefault(); reset(); });
  document.getElementById("empty-reset").addEventListener("click", reset);
  apply();
})();
