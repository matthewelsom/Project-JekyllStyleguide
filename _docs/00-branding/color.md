---
title: Color
info: Colors used in this product.
colors: 
  - name: base colors
    items:
    - name: $white
      hex: 'efefef'
    - name: $black
      hex: '000000'
    - name: $light-grey
      hex: 'cccccc' 
  - name: accents
    items:
    - name: $blue
      hex: '1e90ff'  
      pretty: 'dodgerblue'
    - name: $red
      hex: 'ff6347'  
      pretty: 'tomato'  
---

<section class="sg-branding">
  {% for group in page.colors %} 
  <div>
    <h3>{{ group.name | capitalize }}</h3>
    <ul class="color-set">
    {% for item in group.items %}
      <li>
        <div style="background:#{{ item.hex }}"></div> 
        <p><code class="highlighter-rouge">{{ item.name }}</code></p>
        {% if item.hex %}<p>#{{ item.hex }}</p>{% endif %}
        {% if item.pretty %}<p>{{ item.pretty }}</p>{% endif %}
        {% if item.rgb %}<p>{{ item.rgb }}</p>{% endif %}
      </li>
    {% endfor %}
    </ul>
  </div>
  {% endfor %}
</section>