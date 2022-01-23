## Portfolio '22

🧑🏽‍🎨 A Personal portfolio for '22 and onwards

If you're a developer, designer or creative who wants to showcase their work in a unique way, then look no further. Portfolio '22 is just what you need. With modern layout and design, accesisibility features and SEO friendly this site will ensure a high-quality online location for you and your work

## ⚒ Tools used

- GatsbyJS <br>
- Framer motion <br>
- ThreeJS <br>
- React Three Fiber

## Features

⚡️ Universal and component based asset handler, can take in any cms asset and output any image or video type <br>
✨ Page transitions to give a smoother web experience <br>
📬 Easy cms integration using an object layout file <br>
📚 Storybook for easy component documentation <br>
👀 Perfect SEO, due to required image alts and semantic HTML <br>
<br>
Enough reasons to choose this as your next project

## 🚀 Quick start

<b>NOTE:</b> the setup of the any CMS or Contentful CMS probably requires some help. Ask the active maintainer of this project for guideance. If you are planning on using Contentful (they have a free tier that fits this template) I can copy my environment over to yours.
There is also a link [ here ] to showcase the json format that is required for this site to work

Clone the project and add your contentful api keys in the `.env` (if you're going to run with contenteful)

```
ACCESS_TOKEN=YOUR ACCESS TOKEN
SPACE_ID=YOUR SPACE ID
```

Run these command to install the required modules and run the site

```
$ npm install
$ npm run develop
```

## 📬 CMS

Check here for a list of CMS's that are compatible with this site
https://www.gatsbyjs.com/docs/conceptual/choosing-a-cms/#1-popular-first-class-gatsby-integrations

## ☑️ Todo's

Created 23x12x21 - Last updated 16x01x22

Styling

- [ ] Advanced mixins (research)

Templates
- [ ] Check if a link is inbound or outbound and add the correct link type
- [ ] Journal page missing design and should be different than project

About Page

- [ ] Make the it thing
  - [ ] create credits and tools section
  - [ ] create horizontal text
  - [ ] create interactive piece

Gallery Page

- [ ] Infinite scroll ?
- [ ] Split sections into seperate pages
- [ ] index page add per section button to go to page

Animation

- [ ] Add reduced animation mixin

Components

- [ ] Cleanup journals
  - Create one journal section and load correct journal type in the section

Accesibility

- [ ] Fix Head component to support as many types as possible (create seperate components for type)
- [ ] reduced animation selector

Developer friendliness

- [ ] Create documentation for this project. Anyone should be able to set this up
- [ ] Setup settings file that set settings for the whole project
- [ ] Setup settings to include and exclude pages (https://www.gatsbyjs.com/plugins/gatsby-plugin-exclude/)
- [ ] Research preact

Data

- [ ] Add google analytics

UX

- [ ] Add feature for reduced animation
