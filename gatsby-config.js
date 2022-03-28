// General site config
const site_config = require("./site-config");

// Secret sauce configs
require("dotenv").config({
    path: ".env"
});

module.exports = {
    siteMetadata: site_config.siteMetaData,
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-glslify",
        "gatsby-plugin-split-css",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: "./src/assets/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-plugin-exclude",
            options: {
                paths: site_config.excludePaths
            }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                excludes: ["/device-identify"]
            }
        }
    ]
};
