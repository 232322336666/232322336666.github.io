---
layout: page
title: Chip Design
permalink: /chip-design/
description: Selected integrated circuits for neural interfaces, in-memory computing, and sensor readout.
---

## Selected Chips

{% include showcase-list.liquid items=site.data.showcase.chips %}

## Research Projects

{% assign research_projects = site.projects | where: 'category', 'work' | sort: 'importance' %}
<ul>
  {% for project in research_projects %}
    <li><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></li>
  {% endfor %}
</ul>
