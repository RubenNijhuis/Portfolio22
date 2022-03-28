import React from "react";
import propTypes from "prop-types";

// Components
import AssetHandler from "components/AssetHandler";

// Styling
import "./style.scss";

const Gallery = ({ content, options }) => {
    const className = "gallery";

    const imagery = content.data.target.images;

    return (
        <div className={className}>
            <div className="grid">
                {imagery.map((image, index) => (
                    <AssetHandler asset={image} options={options} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;

Gallery.propTypes = {
    content: propTypes.object.isRequired,
    options: propTypes.object
};
