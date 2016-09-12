---
title: Label
scss: '/_scss/components/buttons.scss'
maturity: proposed
info: Use buttons to signal actions.
---

A standard button, it can contain text or icons. Although any tag can be used for a button, it will only be keyboard focusable if you use a <code>button</code> tag or you add the property <code>tabindex="0"</code>. Keyboard accessible buttons will preserve focus styles after click, which may be visually jarring.

A button can be disabled, pointer events will not occur.

A button can be made to fill its parent.

A button can be animated to show hidden content. Note the button will be sized according to the visible content. Make sure there is enough room for the hidden content to show.