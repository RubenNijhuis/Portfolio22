import React from "react";
import propTypes from "prop-types";

import { Helmet } from "react-helmet";

// import { StaticQuery, graphql } from "gatsby";
// import { Location } from "@reach/router";
// import schemaGenerator from "utils/schemaGenerator";

// import favicon from "assets/icons/favicon.png";

const Head = ({
    title,
    description = "Ruben Nijhuis is a Designer and Developer who focuses on creating unique digital experiences using creative coding and interactive design to realize ideas"
}) => {
    const default_title = "Ruben Nijhuis — Designer && Developer";
    let formatted_title = "";
    if (title) formatted_title = `${title} | ${default_title}`;
    else formatted_title = default_title;

    return (
        <Helmet>
            <html lang="en" />
            <meta charset="utf-8" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon.png"
            />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#0a0a0a" />

            <meta
                content="width=device-width,initial-scale=1.0,user-scalable=yes"
                name="viewport"
            />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

            <title>{formatted_title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Ruben Nijhuis" />

            <meta property="og:title" content={formatted_title} />
            <meta property="og:site_name" content={default_title} />
            <meta property="og:url" content="htpps://rubennijhuis.com/" />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta
                property="og:image"
                content="https://images.ctfassets.net/vf2eiv36rew2/3hXhnxi3oJYrpkPOFqheVE/a33b25b455d47a5bdfab83a9e1168fc9/Untitled-2-01.png?w=4000&h=2249&q=20&fm=webp"
            />
            <meta name="twitter:card" content="app" />
            <meta name="twitter:site" content="@nijhuis_ruben" />
            <meta
                name="twitter:description"
                content="Ruben Nijhuis is a Designer and Developer who focuses on creating unique digital experiences using creative coding and interactive design to realize ideas"
            />
            <meta name="twitter:app:name:iphone" content="Ruben Nijhuis" />
            <meta name="twitter:app:id:iphone" content="" />
            <meta name="twitter:app:name:ipad" content="Ruben Nijhuis" />
            <meta name="twitter:app:id:ipad" content="" />
            <meta name="twitter:app:name:googleplay" content="Ruben Nijhuis" />
            <meta name="twitter:app:id:googleplay" content="" />
            <meta name="twitter:app:country" content="Netherlands" />
        </Helmet>
    );
};

export default Head;

Head.propTypes = {
    title: propTypes.string,
    description: propTypes.string
};
