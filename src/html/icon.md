---
title: Icon
layout: default
---

{% assign iconGroup = site.components | where: 'group','icon' %}
  {% for group in iconGroup %}
  <div id="{{ group.group | replace: ' ', '-' }}" class="library-group">
    <div class="library-group__header">
      <h3 class="library-group__title">{{ group.title }}{% if group.status %}<span class="{{ group.status }}">{{ group.status }}</span>{% endif %}</h3>
      <a class="library-group__button button_download" href="{{ site.baseurl }}/assets/branding/">Download All</a>
    </div>
    <div class="library-group__info">
      <p>{{ group.info }}</p>
      <p>Note: the images shown on this page will resize with the browser.</p>
    </div>
    <div class="library-basics">
      {% for set in group.icons %}
      <div class="icon-set">
        <h3 class="icon-set__title">{{ set.setname }}</h3>
        <ul class="icon-set__icons">
          {% for item in set.setitems %}
          <li>
            <img src="{{ site.baseurl }}/assets/branding/{{ item.icon }}">
            <span>{{ item.name }}</span>
          </li>
          {% endfor %}
        </ul>
      </div>      
      {% endfor %}
    </div>
  </div>
{% endfor %}