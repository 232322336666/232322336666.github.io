---
layout: page
permalink: /publications/
title: Publications
description: Conference papers, journal articles, and preprints by publication year.
nav: true
nav_order: 2
scholar:
  group_by: type, year
  group_order: ascending, descending
  bibliography_group_tag: h2, h3
  type_order: [inproceedings, article, online]
  type_names:
    inproceedings: Conference Papers
    article: Journal Articles
    online: Preprints
---

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
