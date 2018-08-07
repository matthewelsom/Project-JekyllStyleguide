---
title: Logo
info: Logos used in this product.
styles: exclude
---

<section class="sg-branding">
  <ul class="icon-set">
    {% for image in site.static_files %}
      {% if image.path contains 'src/assets/branding' %}
      <li>
        <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
        <p><code class="highlighter-rouge">{{ image.path }}</code></p>
      </li>
      {% endif %}
    {% endfor %}
  </ul>
</section>