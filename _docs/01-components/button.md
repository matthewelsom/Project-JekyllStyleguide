---
title: Button
scss: '/_scss/components/buttons.scss'
maturity: beta
info: Use buttons to signal actions.
---

#### General

A standard button, it can contain text or icons. Although any tag can be used for a button, it will only be keyboard focusable if you use a `button` tag or you add the property `tabindex="0"`. Keyboard accessible buttons will preserve focus styles after click, which may be visually jarring.

#### Disabled

A button can be disabled, pointer events will not occur.

#### Block

A button can be made to fill its parent.

#### Animated

A button can be animated to show hidden content. Note the button will be sized according to the visible content. Make sure there is enough room for the hidden content to show.