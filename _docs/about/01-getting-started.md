---
title: Getting Started
layout: doc
info: How to setup and configure this Jekyll-based style guide boilerplate.
nav: true
---

# Installation

To start you’ll need to download and install [Jekyll](http://jekyllrb.com/) (3.1 or higher) and the source code from [Github](https://github.com/matthewelsom/LivingStyleGuide). 


><i class="icon red" data-icon="info"></i>This site contains sample UI patterns and documentation to indicate what a finished Style Guide could look like. You should remove these files or download the 'blank-canvas' version with no contents [here](https://github.com/matthewelsom/LivingStyleGuide/tree/boilerplate).


To serve the files locally run the following code in terminal: 

{% highlight terminal %}
$ cd /path/to/local/folder/
jekyll serve
{% endhighlight%}

Once your style guide is complete you can publish it directly to [Github Pages](https://pages.github.com/).


# Configuration

{% highlight directory %}

LivingStyleGuide/
├── _config.yml
├── index.md
├── README.md
│
{% endhighlight %}

All settings are contained in the `_config.yml` file.

--- 

## General Settings

Standard Jekyll configuration settings, check the [documentation](https://jekyllrb.com/docs/configuration/) for information on how to use this. 

---

## Style Guide Shell Settings

These settings control the default variables used in the shell, check the [Editing the Styleguide](#editing-the-styleguide) section for help on how to use them.

---

## Collection Settings

These settings control how documentation and pattern files are generated, and where they are located. Check the [Editing the Styleguide](#editing-the-styleguide) section for help on how to use them.

---

## Pattern Settings

These settings are used in all patterns and can be freely changed. 

{% highlight yml %}

## Pattern Settings

pattern_author: AUTHOR NAME             ## sets the author in the <head></head> tag
pattern_description: DESCRIPTION        ## sets the description in the <head></head> tag
pattern_language: en                    ## sets the language in the <html></html> tag
pattern_favicon: /src/assets/images/icon.ico

pattern_styles:                         ## add style locations here
  - /src/assets/css/style.css
  
pattern_scripts:                        ## add script locations here
  - /styleguide/js/libs/jquery-2.1.4.min.js  

sass:
  sass_dir: src/assets/_scss            ## sets the location of the stylesheet
  style: :compressed                    ## minifys the stylesheet

{% endhighlight %}


><i class="icon red" data-icon="info"></i>Remember you need to `$jekyll build` or `$jekyll serve` your site in terminal after changing any of the config files.


# Adding Patterns

## Defining Patterns

A 'Pattern' is any part of the user interface, they are divided into 3 types:

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
  - Most templates contain a 'Content Area' that can contain components.
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

- Write your pattern in HTML in a Markdown file.
- The pattern must start with [Front Matter](https://jekyllrb.com/docs/frontmatter/).
- Set the `title`, `maturity`, and the location of the corresponding `styles`.
- Turn off the Pattern Controls by using `control: exclude` - this is particulary useful for foundation patterns.

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
- You need to make sure your pattern is 4 folder levels deep to ensure the are linked correctly, so group you patterns in sub folders

{% highlight location %}
Example 1: Primary Colors stored in a /color sub folder.
/src/patterns/foundations/color/primary-colors.md

Example 2: Disabled Card stored in a /cards sub folder.
/src/patterns/components/cards/disabled-card.md
{% endhighlight %}

--- 

## Editing Pattern Assets

- Pattern assets are stored in the `src/assets` folder.
- You can add additonal styles/scripts to a pattern via the [Pattern Settings](#pattern-settings) in the `_config.yml` file - styles will automatically be included in the `<head>`, scripts will automatically be included before the `</body>` tag in all patterns.

><i class="icon red" data-icon="info"></i>Try this simple [SCSS playbook](https://matthewelsom.com/blog/simple-scss-playbook.html) to keep your styles organised.


# Adding Documentation


Coming soon


<!--





Patterns and Pages are always loaded in an iframe so Styleguide styles will not interfere with your added assets.

### Design Files

- **_docs/** is used to store all pattern documentation is it is important to make sure that every pattern added to the `src/html/` folder has a corresponding file with the same name inside this documentation file.

4. To appear in the sidebar, each pattern/page must have a corresponding `markdown` Documentation file in the `_docs/` folder.
5. The Documentation file should contain the location of the pattern styles, the maturity of the pattern, as well as any further usability information or rules for use.
- All of the style guide pages are kept in the `_docs/` folder. 
-->

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



# Editing the Styleguide

Coming Soon

<!--
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
-->


<!--Organise design styles, create code standards, and maintain a consistent user interface design across your digital product with this boilerplate living style guide.-->


<!--
This tool generates a 'Living Style Guide' for your digital product or system that tracks and documents all of the user interface (UI) patterns.  

This tool creates a 'Living Style Guide' for your digital product or system that tracks and documents all of the user interface (UI) patterns.  

You use it to generate all of the systems user interface (UI) patterns. The patterns are tracked and documented in a simple Living Style Guide.


Organise design styles, create code standards, and maintain a consistent user interface design across your digital product with this boilerplate living styleguide. Made with the power of Jekyll.


listed based on the folder in which the are added. To add a pattern add the corrresonding file to the folder. 

Remember to add a corresponding file into the _docs folder - or this will break.-->
