---
title: Getting Started
info: How to setup and configure this Jekyll-based style guide boilerplate.
nav: true
---

# Installation

To start you’ll need to download and install [Jekyll](http://jekyllrb.com/) (3.1 or higher) and the source code from [Github](https://github.com/matthewelsom/jekyll-style-guide). 


><i class="icon red" data-icon="info"></i>Sample UI patterns and documentation have been included in this tool to indicate what a finished Style Guide could look like. You can remove the files from `src/` and the `CNAME` file to start from scratch.


To serve the files locally run the following code in terminal: 

{% highlight terminal %}
$ cd /path/to/local/folder/
jekyll serve
{% endhighlight%}

Once your style guide is complete you can publish it to [Github Pages](https://pages.github.com/) like any other Jekyll website.


# Configuration

{% highlight directory %}

jekyll-style-guide/
├── _config.yml
├── index.md
├── README.md
│
{% endhighlight %}

All settings are contained in the `_config.yml` file. To use this tool out of the box, you only need to adjust the `pattern settings`.

--- 

## General Settings

These are standard Jekyll configuration settings, check the [documentation](https://jekyllrb.com/docs/configuration/) for information on how to use this. 

---

## Style Guide Shell Settings

These settings control the default variables used in the shell, check the [Editing the Styleguide](#editing-the-styleguide) section for help on how to use them.

---

## Collection Settings

These settings control how documentation and pattern files are generated, and where they are located. Check the [Editing the Styleguide](#editing-the-styleguide) section for help on how to use them.

---

## Pattern Settings

These settings are used in all patterns and should be updated based on your needs. 

{% highlight yml %}

## Pattern Settings

pattern_author: AUTHOR NAME             ## sets the author in the <head></head> tag
pattern_description: DESCRIPTION        ## sets the description in the <head></head> tag
pattern_language: en                    ## sets the language in the <html></html> tag
pattern_favicon: /src/assets/images/icon.ico

pattern_styles:                         ## (list) add style locations here
  - /src/assets/css/style.css
  
pattern_scripts:                        ## (list) add script locations here
  - /styleguide/js/libs/jquery-2.1.4.min.js  

sass:
  sass_dir: src/assets/_scss            ## sets the location of the stylesheet
  style: :compressed                    ## minifys the stylesheet

{% endhighlight %}


><i class="icon red" data-icon="info"></i>Remember you need to `$jekyll build` or `$jekyll serve` your site in terminal after changing any of the config files.


# Adding Patterns

## What is a Pattern?

A 'Pattern' is any part of the user interface, by default there are 3 types:

- **Foundations**
  - Foundations are global constraints that define the basic parameters of parts of the UI.
  - Example, a Typeface, Primary or Secondary Colors, Icons. 

- **Components**
  - Components are stand-alone UI patterns that can be directly used in the interface.
  - They can include Foundations, or can be constructed with uniques styles.
  - Example, Primary Button, Secondary Button, Card, Card Group, Table, etc.
  
- **Templates**
  - Templates are pre-determined page layouts.
  - They can include components and foundations, or can be constructed uniquely. 
  - Examples, Full-Width Content Page, Sidebar Page, Two Column Page 
  
  
{% highlight directory %}
│   
└── src/ 
    ├── assets/
    │   ├── _scss
    │   ├── css
    │   ├── fonts
    │   └── images
    │
    └── patterns/
        ├── foundations/
        │   ├── ...
        ├── components/
        │   └── ...
        └── templates/
            └── ...    
{% endhighlight %}

---

## Uploading Patterns

- Write your HTML pattern in a Markdown file.
- The pattern must start with [Front Matter](https://jekyllrb.com/docs/frontmatter/).
- Set the `title`, `maturity`, and the location of the corresponding `styles`.
- Optional: Turn off the Pattern Controls by using `control: exclude` - this is particularly useful for foundation patterns.

{% highlight pattern.md %}
---
title: Default Button
styles: base/button.scss
maturity: ready
control: exclude
---
<a href="javascript:void(0)" class="button">Click Me!</a>
{% endhighlight %}

- Upload your pattern to the corresponding folder in `src/patterns`.
- You need to make sure your pattern is 4 folder levels deep to ensure they get linked correctly from the navigation and roadmap, so group you patterns in sub folders

{% highlight location %}
#Example 1: Primary Colors stored in a /color sub folder.
/src/patterns/foundations/color/primary-colors.md

#Example 2: Disabled Card stored in a /cards sub folder.
/src/patterns/components/cards/disabled-card.md
{% endhighlight %}

--- 

## Editing Pattern Assets

- Pattern assets are stored in the `src/assets` folder.
- You can add additional styles/scripts to a pattern via the [Pattern Settings](#pattern-settings) in the `_config.yml` file - styles will automatically be included in the `<head>`, scripts will automatically be included before the `</body>` tag in all patterns.

><i class="icon red" data-icon="info"></i>Keep your styles organised. Try this simple [SCSS playbook](https://matthewelsom.com/blog/simple-scss-playbook.html).


# Adding Documentation

## What is Documentation? 

'Documentation' is used to store information relating to a pattern (or group of patterns), as well as information about the style guide itself - this page is an example of a document.

By default, documentation is stored in the `_docs` folder and grouped in directories that correspond to the pattern directories. An additional `/about` directory is also provided, this can contain general/non-pattern specific contents (like this page).

Patterns are always loaded into a document via an iFrame, so any style guide related styles will not interfere with your pattern.

{% highlight directory %}
│
├── _docs/
│   ├── about/
│   │   └── ...   
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── foundations/
│   │   ├── color.md
│   │   ├── typography.md   
│   │   └── ...
│   │
│   └── templates/
│       └── ...
│   
{% endhighlight %}

><i class="icon red" data-icon="info"></i>Adding any document into these folders will automatically make it appear in the style guide navigation.


## Documentation Settings

These settings are defined in the `config.yml` file and ensure that each document outputs with the correct Jekyll layout and meta data.

{% highlight yml %}

## Collection Settings

## Outputs the _docs collection !Required
collections:
  docs: 
    output: true

## Sets the default attributes for the Documentation and Pattern Files !Required
defaults:
  - 
    scope:
      path: "_docs"
    values:
      layout: doc
      type: doc
  - 
    scope:
      path: "_docs/about"
    values:
      layout: doc
      type: about    
  - 
    scope:
      path: "_docs/foundations"
    values:
      layout: doc
      type: foundation
  - 
    scope:
      path: "_docs/components"
    values:
      layout: doc
      type: component 
  - 
    scope:
      path: "_docs/templates"
    values:
      layout: doc
      type: template       

{% endhighlight %}





## Adding Documentation

- Create your document file in Markdown format.
- Your filename can match the pattern URL, but it does not have too.

{% highlight location %}
#Pattern Location.
/src/patterns/foundations/color/primary-colors.md

#Corresponding document file option 1:
/_docs/fondations/color.md

#Corresponding document file option 2:
/_docs/fondations/palette.md

{% endhighlight %}

- The document must start with Front Matter.
- Set the title.
- Optional: add info which will be displayed at the top of the document page.
- Optional: add `nav: true` into the Front Matter if you would like to display a mini contents menu at the top of the page (like this page).
- You can use any Markdown in the page content area. 
- To include a pattern in the document page you must include the pattern block and specify a `url` variable in the include. By repeating this process you can include multiple patterns on the page. See the sample below taken from the `button.md` file.
- Note that the [pattern controls](#uploading-patterns) and maturity are set in the pattern file.

><i class="icon red" data-icon="info"></i>The contents menu will automatically generate a table of contents based on any `h1` items on the page.

{% highlight button.md %}{% raw %}

---
title: Button
info: Use buttons to signal actions.
nav: true
---

# Basic Buttons

A button can contain text. Although any tag can be used for a button, it will only be keyboard focusable if you use a `button` tag or you add the property `tabindex="0"`.

{% include pattern_block.html url='/src/patterns/components/button/default_button.html' %}

{% include pattern_block.html url='/src/patterns/components/button/disabled_button.html' %}

{% endraw %}{% endhighlight %}



# Sample Pages

Coming Soon



# Editing the Style Guide

Coming Soon





<!--
## Includes

- Includes are snippets of code used to help generate the style guide pages. 
- They are stored in the `_includes/` folder.
- You do not need to change these files unless you are changing the function of the style guide shell

& **_layouts/** associated with the style guide are stored here - they do not need to be edited unless you are changing the function of the style guide shell.

{% highlight directory %}
│
├── _includes/
│   └── ...
│
{% endhighlight %}

---

## _layouts/

- All patterns are generated using the `pattern.html` file. 
- Update this file if you wish to add additional scripts to your patterns, e.g. If your pattern requires jQuery to run you should add it here. 
- This file contains the `iframeResizer.contentWindow.min.js` script, it is required to make the pattern load correctly in the iFrame. Removing this script will break the style guide.

{% highlight directory %}
│
├── _layouts/
│   ├── pattern.html
│   └── ...
{% endhighlight %}

---

## styleguide/

- Contains all of the stylesheets and scripts required to make the style guide work corretcly. 
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
-->