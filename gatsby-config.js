module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        siteTitle: "RUben Nijhuis | Design && Development",
        siteTitleShort: 'Ruben Nijhuis',
        siteDescription: "Ruben Nijhuis is a Designer and Developer who creates Unique Digital Experiences using Creative Coding and Interactive Design",
        themeColor: '#e1e1e1',
        social: {
            twitter: 'nijhuis_ruben',
            instagram: 'ruben__nijhuis',
            fbAppId: 'aa',
            dribble: 'SoWhatsUp',
            github: 'rubennijhuis',
            codepen: 'rubennijhuis'
        }
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: "otPfQXDbOKIGgfmSjsLM_uMcn9wZPdKq50tEaW4EovQ",
                spaceId: "vf2eiv36rew2",
            },
        },
        "gatsby-plugin-styled-components",
        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        `gatsby-plugin-sass`,
        "gatsby-plugin-sitemap",
        // {
        //   resolve: "gatsby-plugin-manifest",
        //   options: {
        //     icon: "src/images/icon.png",
        //   },
        // },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: "./src/assets/",
            },
            __key: "images",
        },
    ],
};
