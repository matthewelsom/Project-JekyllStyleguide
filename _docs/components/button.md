---
title: Button
info: Use buttons to signal actions.
nav: true
---

# Basic Buttons

A button can contain text. Although any tag can be used for a button, it will only be keyboard focusable if you use a `button` tag or you add the property `tabindex="0"`.

{% assign pattern_url = '/src/patterns/components/button/default_button.html' %}
{% include pattern_block.html %}

{% assign pattern_url = '/src/patterns/components/button/disabled_button.html' %}
{% include pattern_block.html %}

A button can be disabled, pointer events will not occur.

{% assign pattern_url = '/src/patterns/components/button/block_button.html' %}
{% include pattern_block.html %}

A button can be made to fill its parent.

# Advanced Buttons

{% assign pattern_url = '/src/patterns/components/button/animated_button.html' %}
{% include pattern_block.html %}

A button can be animated to show hidden content. Note the button will be sized according to the visible content. Make sure there is enough room for the hidden content to show.