import React from "react";
import propTypes from "prop-types";

// Image
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Styling
import "./style.scss";

const ImgContainer = ({ asset, options }) => {
    const className = "img-container";
    let img_path = "not";
    let img_alt = "default";

    if (asset?.gatsbyImageData !== undefined) {
        img_path = asset.gatsbyImageData;
        img_alt = asset.alt;
    } else {
        img_path = asset.data.target?.gatsbyImageData;
        img_alt = asset.data.target?.alt;
    }

    if (img_alt === undefined) img_alt = "default";

    const img_parsed = getImage(img_path);

    return (
        <div
            className={className}
            style={{ backgroundColor: options.backgroundColor }}
        >
            {img_parsed ? (
                <GatsbyImage className="img" image={img_parsed} alt={img_alt} />
            ) : null}
        </div>
    );
};

export default ImgContainer;

ImgContainer.propTypes = {
    asset: propTypes.object.isRequired,
    options: propTypes.object
};
