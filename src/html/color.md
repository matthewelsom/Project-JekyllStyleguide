---
title: Color
layout: default
---

{% assign colorGroup = site.components | where: 'group','color' %}
  {% for group in colorGroup %}
  <div id="{{ group.group | replace: ' ', '-' }}" class="library-group">
    <div class="library-group__header">
      <h3 class="library-group__title">{{ group.title }}{% if group.status %}<span class="{{ group.status }}">{{ group.status }}</span>{% endif %}</h3>
    </div>
    <div class="library-group__info">
      <p>{{ group.info }}</p>
    </div>
    <div class="library-basics">
      {% for set in group.colors %}
      <div class="color-set">
        <h3 class="color-set__title">{{ set.name }}</h3>
        <ul class="color-set__colors">
          {% for item in set.setitems %}
          <li style="background:#{{ item.value }}">
            <code>{{ item.swatch }}<span class="color-value">#{{ item.value }}</span></code>
          </li>
          {% endfor %}
        </ul>
      </div>      
      {% endfor %}
    </div>
  </div>
{% endfor %}