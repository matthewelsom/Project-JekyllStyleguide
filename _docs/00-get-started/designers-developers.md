---
title: For Designers & Developers
info: This Living Styleguide offers a clean, and simple way of maintaining visual design. All UI components (patterns) are built with an HTML foundation.
---

# Installation

To use this Living Styleguide on your project, you’ll need to download [Jekyll](http://jekyllrb.com/) (version 3.1 or higher).

Download the Living Styleguide files from [Github](https://github.com/matthewelsom/Living_Styleguide).

## File Structure

{% highlight html %}

Living_Styleguide/

├── _config.yml
├── index.md
├── src/
│   └── assets/
|   |   ├── _scss
|   |   ├── branding
|   |   ├── css
|   |   └── fonts
│   └── html/
│       ├── 01-components/
│       |   ├── ...
│       └── 02-examples/
│           └── ...
├── styleguide/
|   ├── _scss
|   ├── branding
|   ├── css
|   └── fonts
├── _docs/
│   ├── 00-get-started/
│   |   ├── ...
│   ├── 01-components/
│   |   ├── ...
│   └── 02-examples/
│       └── ...
├── _includes/
    └── ...
└── _layouts/
    ├── pattern.html
    └── ...

{% endhighlight %}

## How It Works

This tool is designed to generate a simple and lightweight styleguide for your digital projects.  

1. Create your UI components (patterns), or example pages with HTML and store in `src/html`.
2. Add your pattern/page assests to `src/assets` - CSS architecture follows [this SCSS Playbook](http://matthewelsom.com/blog/simple-scss-playbook.html), but it can be changed to suit your needs.
3. Make sure your assets are referenced in the `HEAD` section of the `_layouts/pattern.html` file. 
4. To appear in the sidebar, each pattern/page must have a corresponding `markdown` Documentation file in the `_docs/` folder.
5. The Documentation file should contain the location of the pattern styles, the maturity of the pattern, as well as any further usability information or rules for use.

Patterns and Pages are always loaded in an iframe so Styleguide styles will not interfere with your added assets.

## Design and Artwork

Source artwork can be stored in the `src/design_source` folder in either Illustrator or Sketch format.

## Development & Deployment

As this styleguide is built with Jekyll, it can be served locally using `jekyll serve`, and it can be published via [Github Pages](https://pages.github.com/).

## Where Things Live

### Design Files

- **src/html/** is used to store your HTML components and example pages.
- **src/assets/** is used to store any JS, SCSS, CSS, Fonts, etc... that are needed to coreectly render your patterns.
- **_docs/** is used to store all pattern documentation is it is important to make sure that every pattern added to the `src/html/` folder has a corresponding file with the same name inside this documentation file.
- **_layouts/pattern.html** is used to generated each pattern and page, ensure your assets are included in the ususal HTML way.

### Styleguide Files

- **Styleguide** styles and scripts are contained in the `styleguide/` directory - altering these styles will change the design and function of the styleguide shell.
- **_layouts/pattern.html** shoudl be changed if you add any assets to your patterns e.g. an additonal css file.
- **_includes/** & **_layouts/** associated with the styleguide are stored here - they do not need to be edited unless you are changing the function of the Styleguide shell.