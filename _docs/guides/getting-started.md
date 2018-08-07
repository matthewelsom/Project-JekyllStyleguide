---
title: Getting Started
info: How to setup and configure this tool to generate UI patterns and documentation for your digital product. It is built using Jekyll.  
nav: true
---

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
