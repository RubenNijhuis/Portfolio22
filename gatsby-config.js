const site_config = require("./site-config");
require("dotenv").config({
    path: `.env`,
});

module.exports = {
    siteMetadata: { ...site_config },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-image",
        `gatsby-plugin-sass`,
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        `gatsby-plugin-glslify`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: "./src/assets/",
            },
            __key: "images",
        },
        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
    ],
};
