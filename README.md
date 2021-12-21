## Portfolio '22
🧑🏽‍🎨 Personal portfolio for '22 and onwards

## 🚀 Quick start
Install the website and add your contentful api keys in the `gastby-config.js`

```json
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
 |- assets/       # All types of assets are stored here
     |- files/    # Files like CV    
     |- icons/    # Icons like the arrow
     |- images/   # General images that don't come from the CMS
  components/     # Components that are resuable
  containers/     # Components that are used once
  pages/          # All pages
  styling/        # SCSS Styling
  templates/      # Templates for projects etc.
  utils/          # Hooks and other helper functions
gatsby-browser.js # Still don't really know what this does
gatsby-config.js  # All plugins made for gatsby
package.json      # You sould know what this is
```

# 🕳 Caveats
