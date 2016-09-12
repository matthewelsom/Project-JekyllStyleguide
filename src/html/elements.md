
title: Elements
layout: default
---

{% assign elementsByGroup = site.elements | where: 'item','component' | group_by: 'group' | sort: 'name' %}
  {% for group in elementsByGroup %}
  <div id="{{ group.name | replace: ' ', '-' }}" class="library-group">
    <div class="library-group__header">
      <h3 class="library-group__title">{{ group.name }}</h3>
      <div class="library-group__button-group">
        <a class="button-group__button button_code" href="javascript:void(0)">Expand Code</a>
        <a class="button-group__button button_hide" href="javascript:void(0)">Hide Code</a>
      </div>
    </div>
    <div class="library-group__components">
    <div class="library-group__sizer"></div> 
      {% for entry in group.items | sort: type %}
      {% include component.html %}
      {% endfor %}
    </div>
  </div>
{% endfor %}