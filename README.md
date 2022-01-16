## Portfolio '22

🧑🏽‍🎨 Personal portfolio for '22 and onwards

If you're a developer, designer or creative who wants to showcase their work in a unique way, then look no further. Portfolio '22 is just what you need.

## Tools used

- GatsbyJS
- Framer motion
- ThreeJS

## Features

Contentful CMS Integration
Code splitting to the max - Order through src structure
Universal and component based asset handeler, can take in any cms asset and output any image or video type

## 🚀 Quick start

<b>NOTE:</b> the setup of the any CMS or Contentful probably requires some help. Ask the active maintainer of this project for guidence

Clone the project and add your contentful api keys in the `.env`

```
ACCESS_TOKEN=YOUR ACCESS TOKEN
SPACE_ID=YOUR SPACE ID
```

Run these command to install the required modules and run the site

```
$ npm install
$ npm run develop
```

## Big note

<b>NOTE:</b> A lot of the documentation was written on a whim and just based on what I "feel" is good. A lot of my thinking can be improved but honestly most of my patterns are just there so that I can recognize my code 6 months later. Happy coding 👻

## Content

Due to the amazing AssetHandeler component any asset can be given and displayed (mp4/jpeg/webp/png/avif). However because many sizes have to be supported the content needs to be sizes in either of two ways.

Project blocks have a 1:1 ratio
Journals - large format 5:7 - small format anything from 2:1 and wider (fluid)
Template pages can have 1:1 and wider (fluid)

## 🏢 Project structure

```
public
src/
 |- assets/        # All types of assets are stored here
    |- files/      # Files like CV
    |- icons/      # Icons like the arrow
    |- images/     # General images that don't come from the CMS

  components/      # Components that are resuable
    |- "folder"    # Some components are part of a collection to avoid naming issues. In general all of these components are part of a bigger whole

  containers/      # Components that are used once

  |- styling/      # SCSS Styling
    |- main.scss   # all imports happen here
    |- abstracts/  # Variables, mixins, and any utility classes.
    |- base/       # Typography and resets
    |- components/ # Reusable such as buttons, navbars, cards etc.
    |- layouts/    # Handles the layout, such as the container and any grid systems.

  pages/           # All pages

  templates/      # Templates for projects etc.

  utils/          # Hooks and other helper functions

gatsby-browser.js # Still don't really know what this does (something with only happening in the browser)
gatsby-config.js  # All plugins made for gatsby
package.json      # You sould know what this is
```

## 📦 Component object structures

### Page

<b>NOTE:</b> All (or as much as possible) of the data aggregation should come from the page components so that we have a centralized flow of data

```
import libraries
import utils
import components

page component
    sort and intialize data
            |
    effect functions
            |
    render component

query component
    importing projects/journals/site-data etc
```

### Container

<b>NOTE:</b> These type of components take in multiple smaller components. Containers should be used if there are certain components that work better if they handle the mutating data themselves, comparable to a class of sorts

```
import libraries
import utils
import components

container component
    renaming and sorting of data
            |
    effect functions
            |
    render component

export component

optional data query
```

### Component

<b>NOTE:</b> These type of components are functional shouldn't (or minimize) mutation of data — they are just presentational

```
import libraries
import utils

functional component
    renaming and sorting of data
            |
    effect functions
            |
    render component

export component
```

## General splitting of functionality in code

Due to the complexity of components a lot of things have to be working together, this can cause a lot of structures to be written in many places. Initially this project had the SCSS do most of the animation but after a while more seperation was needed as certain animations needed to be actived through javascript. Eventually this created a lot of confusion regarding what styles should be written where. Currently all animation is done through framer motion and javascript to standardize variables and generate more complex user interaction.

## SCSS/Styling

When creating classNames the portfolio has a couple tips which in turn are a loose form of structure for the names

1. Follow the [BEM principle](http://getbem.com/introduction/)
2. The top class name in a page/component/container should follow the name of the function it is defined in
3. A classname shouldn't conflict with <b>ANY</b> other classname in the project. This way it is always clear what the class is for and where it can be found. (This rule is only done for scalability but if css modules are used it's less of an issue)
4. Vague names like "container or box" aren't allowed. Names like "wrapper" (not changing the content but adding styles AROUND said element) better describe what it does.

File structure

Currently the file structure is partly based off of the [Sass 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern) more directories and files can be added if they provide more structure

# ☑️ Todo's

Created 23x12x21 - Last updated 14x01x22

Styling

- [x] Find a way to structure CSS over multiple files for easier upscaling
- [ ] Fix component structure
- [x] Fix variable spread over files
- [ ] Create a var for nav height or some other way to not have to change the height in ~10 places
- [ ] Standardize css classes (nothing matches right now)
- [ ] Standardize typography
- [x] Interesting animation
- [ ] advanced mixins (research)

Template Project

- [x] Make responsive
- [x] Add "go-to-other-content" blocks
      NOTE: Use the same system as in default blog, they probably didnt get the full component during compile time in gatsby node because sending the ID and then pulling that in the template component works better data aggregation wise + data pulling is more centralized as new data would otherwise have to be updated in 2 places. With this way only in the template file
- [x] Fix alt titles images

Template Image Component

- [ ] Check if aggregation settings are optimal (succes = no low res images but fast loading pages)
- [ ] Add description bar below image i.e. "Working with the designer on the wireframe"

Home Page

- [ ] Add hero img or 3d img thingy, just make something interactive to place

About Page

- [ ] Make the goddamn thing
  - [x] Create intro
  - [x] create education and work section
  - [ ] create credits and tools section
  - [ ] create horizontal text
  - [ ] create interactive piece
  - [ ] Create contact section

Contact Page - (FEATURE CANCELLED)

- [ ] Design (must include)
  - [ ] Contact form (as short as possible)
  - [ ] Regular ways to contact i.e. e-mail social-media cv

Gallery Page

- [ ] Design mosaic shapes for images
- [ ] Add modal feature to display images
- [ ] Infinite scroll

CMS Aggregation

- [x] Add descriptions and proper alts to images
- [ ] Design system to make data transformers and keep data types centralized
- [ ] Write proper content and create nice case images

Code Architecture

- [ ] Make components not handle data and only display

Animation

- [x] Create global variants to standardize animations

Accesibility

- [ ] Fix Head component to support as many types as possible (create seperate components for type

Developer friendliness

- [ ] Create documentation for this project. Anyone should be able to set this up

Data

- [ ] Add google analytics
- [ ] Try your luck at A/B testing

UX

- [ ] Add feature for reduced animation
- [ ] Map all ux paths to find issues
