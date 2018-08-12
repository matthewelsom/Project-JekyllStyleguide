---
title: Sample Pages
info: A list of sample pages. Each will open in a new window.
---
<div id="sg_samples">
  {% if page.pages %}<ul>
  {% assign pages = page.pages | sort: 'name' %}
  {% for item in pages %}
  {% assign p = item.name | slugify | prepend: '/src/patterns/sample-pages/' | append: '.html' %}
    <li><a href="{{ site.baseurl }}{{ p }}" target="_blank" class="sg_sample_pattern tableRow">{{ item.name }}</a></li>
  {% endfor %}
  </ul>{% else %}
  <p>No pages listed yet.</p>
  {% endif %}
</div>