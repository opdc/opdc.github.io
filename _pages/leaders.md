---
layout: page
title: Leaders
permalink: /leaders/
description: 전자정부 표준프레임워크와 K-PaaS 오픈 플랫폼 전문가로 개발자 커뮤니티를 이끄는 리더 여러분을 소개합니다.
nav: true
nav_order: 4
display_categories: [Leader]
horizontal: false
---

<!-- pages/leaders.md -->
<div class="leaders">
{% if site.enable_leader_categories and page.display_categories %}
  <!-- Display categorized leaders -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_leaders = site.leaders | where: "category", category %}
  {% assign sorted_leaders = categorized_leaders | sort: "importance" %}
  <!-- Generate cards for each leader -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for leader in sorted_leaders %}
      {% include leaders_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for leader in sorted_leaders %}
      {% include leaders.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display leaders without categories -->

{% assign sorted_leaders = site.leaders | sort: "importance" %}

  <!-- Generate cards for each leader -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for leader in sorted_leaders %}
      {% include leaders_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for leader in sorted_leaders %}
      {% include leaders.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
