---
title: Getting Started
layout: doc
info: Setup and configure this tool to generate and maintain user interface (UI) patterns and documentation in a 'Living Style Guide' for a digital product or system.
nav: true
---


Organise design styles, create code standards, and maintain a consistent user interface design across your digital product with this boilerplate living styleguide. Made with the power of Jekyll.


listed based on the folder in which the are added. To add a pattern add the corrresonding file to the folder. 

Remember to add a corresponding file into the _docs folder - or this will break.

 

# Installation

To use this style guide in your project, you’ll need to download and install [Jekyll](http://jekyllrb.com/) (version 3.1 or higher).

Download all the files from [Github](https://github.com/matthewelsom/Living_Styleguide).

Serve the files locally using `jekyll s`.

If you want to publish your style guide to [Github Pages](https://pages.github.com/) you will need to remove/replace the `CNAME` file.


# Configuration

{% highlight directory %}

Living_Styleguide/
├── _config.yml
├── index.md
├── README.md
│
{% endhighlight %}

The style guide settings can be found in `_config.yml`.

# Adding Patterns

## src/

{% highlight directory %}
│   
└── src/ 
    ├── assets/
    │   ├── _scss
    │   ├── css
    │   ├── fonts
    │   └── ...
    │
    └── patterns/
        ├── 01-components/
        │   ├── ...
        └── 02-examples/
            └── ...
{% endhighlight %}



Install Jekyll, build UI components in HTML with styles and assets attached, add documentation.


- Create your UI components (patterns), or example pages with HTML and store in `src/patterns`.
- Add your pattern/page assets to `src/assets` - CSS architecture follows [this SCSS Playbook](http://matthewelsom.com/blog/simple-scss-playbook.html), but it can be changed to suit your needs.
- Make sure your assets are referenced in the `HEAD` section of the `_layouts/pattern.html` file. 


Patterns and Pages are always loaded in an iframe so Styleguide styles will not interfere with your added assets.

### Design Files

- **src/html/** is used to store your HTML components and example pages. Each `pattern.html` file must start with Front Matter, this applies the `_layouts/pattern.html` template to the file, and rederes it correctly.
- **src/assets/** is used to store any JS, SCSS, CSS, Fonts, etc... that are needed to correctly render your patterns.
- **_docs/** is used to store all pattern documentation is it is important to make sure that every pattern added to the `src/html/` folder has a corresponding file with the same name inside this documentation file.
- **_layouts/pattern.html** is used to generated each pattern and page, ensure your assets are included in the usual HTML way.


# Adding Pages

4. To appear in the sidebar, each pattern/page must have a corresponding `markdown` Documentation file in the `_docs/` folder.
5. The Documentation file should contain the location of the pattern styles, the maturity of the pattern, as well as any further usability information or rules for use.
- All of the style guide pages are kept in the `_docs/` folder. 

{% highlight directory %}
│
├── _docs/
│   ├── 00-branding/
│   │   ├── color.md
│   │   ├── logo.md
│   ├── 00-get-started/
│   │   ├── ...
│   ├── 01-components/
│   │   ├── ...
│   └── 02-examples/
│       └── ...
│
{% endhighlight %}



# Editing the Styleguide

## Includes

- Includes are snippets of code used to help generate the style guide pages. 
- They are stored in the `_includes/` folder.
- You do not need to change these files unless you are changing the function of the style guide shell

& **_layouts/** associated with the styleguide are stored here - they do not need to be edited unless you are changing the function of the styleguide shell.

{% highlight directory %}
│
├── _includes/
│   └── ...
│
{% endhighlight %}

---

## _layouts/

- All patterns are generated using the `pattern.html` file. 
- Update this file if you wish to add additonal scripts to your patterns, e.g. If your pattern requires jQuery to run you should add it here. 
- This file contains the `iframeResizer.contentWindow.min.js` script, it is required to make the pattern load correctly in the iFrame. Removing this script will break the style guide.

{% highlight directory %}
│
├── _layouts/
│   ├── pattern.html
│   └── ...
{% endhighlight %}

---

## styleguide/

- Contains all of the stylesheets and scripts required to make the styleguide work corretcly. 
- Updating these files will change the appearance and function of the style guide shell.

{% highlight directory %}
│
├── styleguide/
|   ├── _scss
│   ├── branding
│   ├── css
│   └── fonts
│  
{% endhighlight %}


---






# License 

This tool can be freely customized, extended, published, and shared.

It was built using [Jekyll](https://jekyll.rb), it's [design principle]({{ site.baseurl }}/docs/guides/design/principle.html) is based on the [US Design Standards](https://designsystem.digital.gov/design-principles/), and the css architecture is based on the [Simple SCSS Playbook](https://matthewelsom.com/blog/simple-scss-playbook.html).


--- 

A few parts of this project are not in the public domain:

- Material Icons font files included in the `styleguide/fonts` directory were extracted from XXX, copyright XXX.
- HK Grotesk font files included in the `styleguide/fonts` directory were extracted from XXX, copyright XXX.
- [Font Awesome](http://fontawesome.io/) font files in the `_scss/vendor/fontawesome` directory were extracted from XXX, copyright Dave Gandy.
- jQuery `[jquery-2.1.4.min.js]` was extracted from [jQuery](https://jquery.com/), copyright The jQuery Foundation.
- Roboto font files in `fonts/roboto` were extracted from [Google Fonts](https://fonts.google.com/), copyright Christian Robertson.
- Normalize `[_normalize.scss]` was extrcted from [Normalize.css](https://github.com/necolas/normalize.css), copyright Nicolas Gallagher and Jonathan Neal.


<!--- The files in `_scss/vendor/bourbon` are extracted from [Bourbon](http://bourbon.io/), copyright [thoughtbot](https://thoughtbot.com/), inc.-->

**Please check with the respective rights holders for license details.**

___


**This tool was originally published in the public domain on 12 September 2016 by [{{ site.sg_author }}](https://matthewelsom.com)**

It was last updated on {{ site.time | date: "%b %-d, %Y"  }} by {{ site.sg_author }}. 

Copyright © 2016 - 2018 & Beyond. All Rights Reserved. 

[View License File](https://github.com/matthewelsom/Living_Styleguide/blob/gh-pages/LICENSE)