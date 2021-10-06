# Static Site Template
This repo is intended to be forked and work out the box

---

### Prerequisites
1. [ ] Create Organization on Github with the same name as your proposed domain name


## Getting Started
```
bundle exec jekyll serve
```

---

## Updating Theme
```
https://jamstackthemes.dev/theme/#ssg=jekyll
```

---

### Overriding the theme
```
open $(bundle info --path $theme)
```

see [here](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) for more info

## Features
1. Simple Deployment to Digital Ocean to Setup a new site
2. Allows you to choose a new jekyll theme
3. Tests to ensure lighthouse scores are all good
4. Tests for SSL
5. Tests for SEO Tags
6. Tests: PageSpeeds
7. Github Actions for ease of deployment


## Checklist
1. Create a new org with the website name like
2. brothersinvine
3. create a new repo in this org in the format `brothersinvine.github.io`
4. Read more info here: https://gist.github.com/TylerFisher/6127328

----
### Troubleshooting
This may help: https://stackoverflow.com/questions/66608308/how-to-make-listen-gem-work-with-ruby-3-0-0p0

----

## [Updating the GH Pages Gem](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)
```
bundle update github-pages
```

### TODO 
* [investigate remote themes](https://github.com/ItsMeaga1n/minimal-categorized)
* [Github actions](https://github.com/marketplace/actions/deploy-jekyll-site)
* 404 page doesn't load unnecessary shit
* robots.txt
* site structure
* 

---

### Scraping
1. Create new 
2. Create new home.html in `_layouts/$project-name/home.html`
3. Set the file header of default home, i.e. `_layouts/home.html`, to 
```
---
layout: brothers-in-vine/home
---
```
5. Go to Site (without javascript)
6. copy outer html of html tag
7. Paste outer html in `_layouts/$project-name/home.html`
8. Get all stylesheets saved in assets under `assets/$project-name/`
9. Change their original href to `{{ "/assets/$project-name/$filename.css" | relative_url }}`
10. Get all images and change their src to `{{ "/assets/brothers-in-vine/images/$image-name" | relative_url }}`
11. Remove generator tags from home.html
12. Serve localhost home page, and go through external css and save locally
13. Serve localhost home page, and go through external js and save locally
14. Fix broken links locally to icons
15. there should be no requests with the search in the network tab `-domain:127.0.0.1 -domain:fonts.googleapis.com -domain:fonts.gstatic.com`
16. Remove any google tracking (search for `gtm` in the home.html)
17. removed unused assets eventually
18. https://jekyllrb.com/docs/posts/
19. MUST DALA THIS: https://aneejian.com/automated-jekyll-archives-github-pages/
20. this for using plugins https://jekyllrb.com/docs/continuous-integration/github-actions/
21. [Jekyll CheatSheet](https://gist.github.com/JJediny/a466eed62cee30ad45e2)
