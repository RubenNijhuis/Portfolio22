## Portfolio '22

🧑🏽‍🎨  A portfolio platform for '22 and onwards

Whether you are a developer, designer, or creative YOU need to showcase your work uniquely. Portfolio '22 is just what you need. With a modern layout and design, accessibility features, and SEO friendliness this site will ensure a high-quality online location for you and your work

<a href="https://rubennijhuis.com"><img src="https://images.ctfassets.net/vf2eiv36rew2/3hXhnxi3oJYrpkPOFqheVE/a33b25b455d47a5bdfab83a9e1168fc9/Untitled-2-01.png?w=4000&h=2249&q=20&fm=webp"></a>

## ⚒ Tools used

- GatsbyJS <br>
- ReactJS <br>
- Framer motion <br>
- ThreeJS <br>
- React Three Fiber <br>
- SCSS <br>
- ESLint <br>
- Prettier <br>
- Contentful <br>

[Future]
- Typescript <br>

## 🦶 Features

⚡️ - Asset handler, can take in any cms asset and output any image or video type <br>
✨ - Page transitions to give a smoother web experience <br>
📬 - Easy cms integration using an object layout file <br>
👀 - Perfect SEO, due to required image alts and semantic HTML <br>
👮‍♂️ - Enforce code style guide using ESLint and Prettier <br>

Plenty o' reasons to choose this as your next portfolio site

## 🚀 Quick start

<b>NOTE:</b> the setup of the any CMS or Contentful CMS probably requires some help. Ask the active maintainer of this project for guideance. If you are planning on using Contentful (they have a free tier that fits this template) I can copy my environment over to yours.
There is also a link [ here (WIP)] to showcase the json format that is required for this site to work

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

These todos are just features or changes that I have been thinking about. When I cross one off I also delete it from the list as to not bloat my readme. It is mainly used to indicate what I am currently working on with this project

Last updated 29 x 03 x 22

Styling
- [ ] Advanced mixins (research)
- [ ] Create design system for typography

Templates
- [ ] Check if a link is inbound or outbound and add the correct link type

Small About
- [ ] Aggregate all data from cms

Journal Component
- [ ] Create seperate intro part
- [ ] Research different layout

About Page
- [ ] create credits and tools section
- [ ] create horizontal scroll text
- [ ] create interactive piece

Index Page
- [ ] intro poster turn into 3d cirlce of cards

Animation
- [ ] Add reduced animation mixin

Components
- [ ] Cleanup journals component
  - Create one journal section and load correct journal type in the section
  - Remove fixed property so that the component doesn't cover the full site

- [ ] Next Content component
    - Add image on hover like journals component

Accesibility
- [ ] Fix Head component to support as many types as possible (create seperate components for type)
- [ ] reduced animation selector

Developer friendliness
- [ ] Create documentation for this project. Anyone should be able to set this up
- [ ] Setup settings file that set settings for the whole project

Data
- [ ] Add analytics
