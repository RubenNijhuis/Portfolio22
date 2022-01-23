import React from "react";
// import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
// import { StaticQuery, graphql } from "gatsby";
// import { Location } from "@reach/router";
// import schemaGenerator from "utils/schemaGenerator";

// import favicon from "assets/icons/favicon.png";

const Head = ({
  title = "Ruben Nijhuis — Designer && Developer",
  description = "Ruben Nijhuis is a Designer and Developer who focuses on creating unique digital experiences using creative coding and interactive design to realize ideas"
}) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta name="description" content={description} />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#0a0a0a"></meta>

    <meta
      content="width=device-width,initial-scale=1.0,user-scalable=yes"
      name="viewport"
    />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

    {/*


    <meta content={siteTitle} name="apple-mobile-web-app-title" />
    <meta content={pageTitleFull} property="og:title" />
    <meta content={pageTitleFull} name="twitter:title" />
    <title>{pageTitleFull}</title>

    <meta content={siteDescription} name="description" />
    <meta content={siteDescription} property="og:description" />
    <meta content={siteDescription} name="twitter:description" />

    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta
      content="black-translucent"
      name="apple-mobile-web-app-status-bar-style"
    />
    <meta content={siteTitle} name="application-name" />

    <meta content="website" property="og:type" />
    <meta content={siteTitle} property="og:site_name" />
    <meta content={social.fbAppId} property="fb:app_id" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={`@${social.twitter}`} name="twitter:site" />
    <meta content={`@${social.twitter}`} name="twitter:creator" />
    <meta content={pageTitleFull} name="twitter:text:title" />
    <meta content={canonical} property="og:url" />
    <meta content={canonical} name="twitter:url" />
    <link rel="canonical" href={canonical} />

    <meta content={imageUrl || `${siteUrl}/social.png`} property="og:image" />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />
    <meta content={imageUrl || `${siteUrl}/social.png`} name="twitter:image" />
    <meta content="1024" name="twitter:image:width" />
    <meta content="512" name="twitter:image:height" />
    <meta content={imageUrl || `${siteUrl}/social.png`} property="og:image" />
    <meta content="1024" property="og:image:width" />
    <meta content="512" property="og:image:height" />

    <meta content={themeColor} name="msapplication-TileColor" />
    {/* <meta content="/icons/mstile-70x70.png" name="msapplication-square70x70" />


    {/* <script type="application/ld+json">
      {JSON.stringify(
        schemaGenerator({
          location,
          canonical,
          siteUrl,
          pageTitle,
          siteTitle,
          pageTitleFull,
        })
      )}
    </script> */}
  </Helmet>
);

export default Head;
