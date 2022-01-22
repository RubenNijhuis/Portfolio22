import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./styling.scss";

const ImgContainer = ({ asset, options }) => {
  const className = "img-container";
  let img_path = "not";
  let img_alt = "default";

  if (asset?.gatsbyImageData !== undefined) {
    img_path = asset.gatsbyImageData;
    img_alt = asset.alt;
  } else {
    img_path = asset.data.target.gatsbyImageData;
    img_alt = asset.data.target.alt;
  }

  const img_parsed = getImage(img_path);
    
  return (
    <div
      className={className}
      style={{ backgroundColor: options.backgroundColor }}
    >
      <GatsbyImage className="img" image={img_parsed} alt={img_alt} />
    </div>
  );
};

export default ImgContainer;
