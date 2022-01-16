import React, { useEffect, useState } from "react";

// Components
import ImgContainer from "./ImgContainer";
import VideoPlayer from "./VideoPlayer";

// Styling
import "./style.scss";

const AssetHandler = ({ asset }) => {
  const className = "asset";
  const [assetType, changeAssetType] = useState();

  /**
   * Get asset type (speficic to contentful structure)
   * Either grabs the file url or the gatsby image data
   */
  useEffect(() => {
    if (asset !== undefined) {
      if (asset.file?.contentType !== undefined) {
        changeAssetType(asset.file.contentType);
      } else if (asset.data.target.file?.contentType !== undefined) {
        changeAssetType(asset.data.target.file.contentType);
      } else {
        changeAssetType("image/png");
      }
    }
  }, [asset]);

  const asset_type = (asset_type) => {
    if (asset_type === "video/mp4") return <VideoPlayer asset={asset} />;
    else if (asset_type === "image/png") return <ImgContainer asset={asset} />;
    else if (asset_type === "image/jpeg") return <ImgContainer asset={asset} />;
    else if (asset_type === "image/webp") return <ImgContainer asset={asset} />;
  };

  return <div className={className}>{asset_type(assetType)}</div>;
};

export default AssetHandler;
