---
title: Roadmap
info: Patterns are listed based on the folde rin which the are added. To add a pattern add the corrresonding file to the folder. The rodmap can be sorted alphabetically, or by pattern maturity. Remember to add a corresponding file into the _docs folder - or this will break.
resize: exclude
nav: exclude
---
<div id="sg_roadmap">
  <div class="sg_roadmap_header"> 
    <div class="tableRow">
      <div class="tableCell"><a href="javascript:void(0)" class="sort" data-sort="maturity">Maturity</a></div>
      <div class="tableCell"><a href="javascript:void(0)" class="sort" data-sort="header">Pattern Name</a></div>
      <div class="tableCell"><a href="javascript:void(0)" class="sort" data-sort="group">Group</a></div>
      <div class="tableCell"><a href="javascript:void(0)" class="sort" data-sort="styles">Style Location</a></div>
      <div class="tableCell"></div>
    </div>
  </div>
  <div class="list">
  {% assign patterns = site.pages | where: 'type', 'pattern' | sort: 'url' %}
  {% for pattern in patterns %}
  {% assign anchor = pattern.title | slugify | prepend: '#' %}
  {% assign group = pattern.url  | split: '/'  | slice: -2, 1 %}
  {% assign folder = pattern.url | split: '/' | slice: 3, 2 | join: '/' | prepend: '/docs/' | prepend: site.baseurl | append: '.html' | append: anchor %}
    <a href="{{ site.baseurl }}{{ folder }}" class="sg_roadmap_pattern tableRow">
      <div class="tableCell">
        <div class="sg-label maturity {{ pattern.maturity }}" data-maturity="{{ pattern.maturity }}"></div>
      </div>
      <div class="tableCell">
        <div class="header">{{ pattern.title }}</div>
      </div>
      <div class="tableCell">
        <div class="group typo_hummingbird">{{ group }}</div>
      </div>
      <div class="tableCell">
        <div class="typo_hummingbird styles">{{ pattern.styles }}</div>
      </div>
      <div class="tableCell">
        <div class="arrow"><i class="icon" data-icon="chevron_right"></i></div>
      </div>
    </a>
  {% endfor %}
  </div>
</div>

<script src="//cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
<script>
  // Create the List
  var options = {
    valueNames: [ 'header', 'group', 'styles', { name: 'maturity', attr: 'data-maturity' } ]
  };
  var roadmap = new List('sg_roadmap', options);
  roadmap.sort("header", {
    order: "asc"
  })
</script>