---
title: Button
info: Use buttons to signal actions.
nav: true
---


# Button Basics

A button can contain text or icons. Although any tag can be used for a button, it will only be keyboard focusable if you use a `button` tag or you add the property `tabindex="0"`. Keyboard accessible buttons will preserve focus styles after click, which may be visually jarring.

{% assign pattern_url = '/src/patterns/01-components/button/button_icon.html' %}
{% include pattern_block.html %}

{% assign pattern_url = '/src/patterns/01-components/button/button_disabled.html' %}
{% include pattern_block.html %}

A button can be disabled, pointer events will not occur.

{% assign pattern_url = '/src/patterns/01-components/button/button_animated.html' %}
{% include pattern_block.html %}

A button can be animated to show hidden content. Note the button will be sized according to the visible content. Make sure there is enough room for the hidden content to show.

# Advanced Buttons

{% assign pattern_url = '/src/patterns/01-components/button/button_block.html' %}
{% include pattern_block.html %}

A button can be made to fill its parent.

{% assign pattern_url = '/src/patterns/01-components/button/button_group.html' %}
{% include pattern_block.html %}