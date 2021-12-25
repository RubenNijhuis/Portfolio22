## Portfolio '22
🧑🏽‍🎨 Personal portfolio for '22 and onwards

## 🚀 Quick start
Install the website and add your contentful api keys in the `gastby-config.js`

```
plugins: [
    ...
    {
        resolve: "gatsby-source-contentful",
        options: {
            accessToken: "<YOUR ACCESS TOKEN>",
            spaceId: "<YOUR SPACE ID>",
        },
    },
    ...
```

## 🏢 Project structure
```
public
src/
 |- assets/        # All types of assets are stored here
    |- files/      # Files like CV    
    |- icons/      # Icons like the arrow
    |- images/     # General images that don't come from the CMS

  components/      # Components that are resuable

  containers/      # Components that are used once
  
  |- styling/      # SCSS Styling
    |- main.scss   # all imports happen here
    |- abstracts/  # Things like mixins and variables
    |- base/       # Typography and font sizing
    |- components/ # Single components i.e. case / journal
    |- layouts/    # Pages margins paddings widths and heights
    |- utils/      # This should really explain itself

  pages/           # All pages

  templates/      # Templates for projects etc.

  utils/          # Hooks and other helper functions

gatsby-browser.js # Still don't really know what this does (something with only happening in the browser)
gatsby-config.js  # All plugins made for gatsby
package.json      # You sould know what this is
```

# Todo's

Created 23dec - Last updated 25dec

Styling
- [x] Find a way to structure CSS over multiple files for easier upscaling
- [ ] Fix component structure
- [x] Fix variable spread over files
- [ ] Create a var for nav height or some other way to not have to change the height in ~10 places
- [ ] Standardize css classes (nothing matches right now)
- [ ] Standardize typography
- [x] Interesting animation
- [ ] advanced mixins (research)

Template
- [x] Make responsive
- [ ] Add "go-to-other-content" blocks

Template Image Component
- [ ] Check if aggregation settings are optimal (succes = no low res images but fast loading pages)
- [ ] Add description bar below image i.e. "Working with the designer on the wireframe"

Home Page
- [ ] Add hero img or 3d img thingy, just make something interactive to place
- [ ] Horizontal text for introduction (just an idea)

About Page
- [ ] Make the goddamn thing

Contact Page
- [ ] Design (must include)
    - [ ] Contact form (as short as possible)
    - [ ] Regular ways to contact i.e. e-mail social-media cv

Gallery Page
- [ ] Design mosaic shapes for images
- [ ] Add modal feature to display images
- [ ] Infinite scroll

CMS Aggregation
- [ ] Add descriptions and proper alts to images
- [ ] Design system to make data transformers and keep data types centralizes
- [ ] Create components for outputting datatypes
- [ ] Write proper content and create nice case images

Code Architecture
- [ ] Make components and containers not handle data and only display

Animation
- [ ] Create global variants to standardize animations

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
