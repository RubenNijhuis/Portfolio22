import React from "react";

import AssetHandler from "components/AssetHandler";

import "./styling.scss";

const Gallery = ({ content, options }) => {
  const className = "gallery";

  const imagery = content.data.target.images;

  return (
    <div className={className}>
      <div className="grid">
        {imagery.map((image, index) => (
          <AssetHandler asset={image} options={options} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
