---
title: Accent Colors
styles: base/variables.scss
maturity: planned
control: exclude
colors: 
  - name: $blue
    hex: '#1e90ff'  
  - name: $red
    hex: '#ff6347'  
---
<style>
.set {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  margin-top:  1.5rem;
  padding: 0;
  list-style: none;
}
li {
  flex: 1 0 20%;
  margin: 1rem;
}
.color {
  width: 100%;
  min-width: 160px;
  height: 80px;
  color: white;
  border: 1px solid whitesmoke;
  margin-bottom: 1rem;
}
p {
  margin: 0;
}
</style>
<ul class="set">
{% for item in page.colors %} 
  <li>
    <div class="color" style="background:{{ item.hex }}"></div> 
    <p>{{ item.name }}</p>
    {% if item.hex %}<p>{{ item.hex }}</p>{% endif %}
    {% if item.rgb %}<p>{{ item.rgb }}</p>{% endif %}
  </li>
{% endfor %}
</ul>