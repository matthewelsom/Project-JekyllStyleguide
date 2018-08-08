---
title: Overview 
layout: doc
info: Welcome to the Living Style Guide.
nav: false
---

<h1>👋 Hi! </h1>

My name's [Matthew](https://matthewelsom.com), and I built this Jekyll-based tool that you can use to generate and document product or system user interface (UI) patterns in a simple [Living Style Guide](https://livingstyleguide.cc).


## Why?

There are a lot of really great styleguide methods, tools and [examples](http://styleguides.io) out there... but, I struggled to find one that was:

- easy and quick to use,
- simple to maintain,
- a match for my current workflow,
- flexible enough to use on a wide variety of projects.

## Requirements

I decided that the following requirements would meet my needs: 

- Use only [Jekyll](https://jekyll.rb) as a pre-requisit
- Use HMTL/CSS/JS to build a web component, template, etc. (I called these 'patterns')
- Track the 'maturity' of a pattern - i.e. is it ready to use, or not?
- Automatically add all patterns into a 'Roadmap'
- Simple documentation for developers, designers product owners to use
- Build a style guide container or shell that is unobtrusive and easy to visually customize


## Help

- Read the [design principles]({{ site.baseurl }}/docs/about/02-design-principle.html)
- Setup and [installation]({{ site.baseurl }}/docs/about/01-getting-started.html) info
- Learn how to [add patterns]({{ site.baseurl }}/docs/about/01-getting-started.html#adding-patterns), and [documentation]({{ site.baseurl }}/docs/about/01-getting-started.html#adding-documentation)
- Understand the pattern [maturity]({{ site.baseurl }}/docs/about/03-maturity.html) scale
- View all patterns in the [Roadmap]({{ site.baseurl }}/docs/about/04-roadmap.html)


___


**This tool was originally published in the public domain on 12 September 2016 by [{{ site.sg_author }}](https://matthewelsom.com)**

It was last updated on {{ site.time | date: "%b %-d, %Y"  }} by {{ site.sg_author }}. 

Copyright © 2016 - 2018 & Beyond. All Rights Reserved. 


# License 

This tool can be freely customized, extended, published, and shared.

It was built using [Jekyll](https://jekyll.rb), it's [design principle]({{ site.baseurl }}/docs/about/02-design-principle.html) is based on the [US Design Standards](https://designsystem.digital.gov/design-principles/), and the css architecture is based on the [Simple SCSS Playbook](https://matthewelsom.com/blog/simple-scss-playbook.html).

[View License File](https://github.com/matthewelsom/LivingStyleGuide/blob/master/LICENSE)

--- 

A few parts of this project are not in the public domain:

- [Material Icons](https://material.io/tools/icons/) font files included in the `styleguide/fonts` directory were extracted from [Github](https://github.com/google/material-design-icons).
- [HK Grotesk](https://hanken.co/product/hk-grotesk/) font files included in the `styleguide/fonts` directory were extracted from [Hanken](https://hanken.co/product/hk-grotesk/), copyright Alfredo Marco Pradil and Stefan Peev.
- [Font Awesome](http://fontawesome.io/) font files in the `_scss/vendor/fontawesome` directory were extracted from [Font Awesome](https://fontawesome.com/), copyright Dave Gandy.
- jQuery `[jquery-2.1.4.min.js]` was extracted from [jQuery](https://jquery.com/), copyright The jQuery Foundation.
- Roboto font files in `fonts/roboto` were extracted from [Google Fonts](https://fonts.google.com/), copyright Christian Robertson.
- Normalize `[_normalize.scss]` was extrcted from [Normalize.css](https://github.com/necolas/normalize.css), copyright Nicolas Gallagher and Jonathan Neal.

**Please check with the respective rights holders for license details.**