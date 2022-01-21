const path = require("path");

module.exports = {
  siteMetaData: {
    // Site descriptions
    siteUrl: "https://rubennijhuis.com",
    siteTitle: "Ruben Nijhuis | Design && Development",
    siteTitleShort: "Ruben Nijhuis",
    siteDescription:
      "Ruben Nijhuis is a Designer and Developer who creates Unique Digital Experiences using Creative Coding and Interactive Design",

    // Site colors
    themeColor: "#e1e1e1",
    backgroundColor: `#1e1e1e`,

    // Favicon
    logo: path.resolve(__dirname, "src/images/icons/favicon.png"),

    // Social links
    social: {
      twitter: "nijhuis_ruben",
      instagram: "ruben__nijhuis",
      fbAppId: "aa",
      dribble: "SoWhatsUp",
      github: "rubennijhuis",
      codepen: "rubennijhuis",
    },
  },
  excludePaths: ["/about/"],
  googleAnalyticsTrackingId: "",
};
