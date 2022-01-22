import React, { useEffect, useState } from "react";

// Components
import ImgContainer from "./ImgContainer";
import VideoPlayer from "./VideoPlayer";
import Modal from "components/Modal";
// Styling
import "./style.scss";

const AssetHandler = ({ asset, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Default options
  if (options === undefined) {
    options = {
      videoCover: true,
      backgroundColor: "#1e1e1e",
      modal: false,
    };
  }

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
    switch (asset_type) {
      case "video/mp4":
        return <VideoPlayer asset={asset} options={options} />;
      case "video/quicktime":
        return <VideoPlayer asset={asset} options={options} />;
      case "image/png":
        return <ImgContainer asset={asset} options={options} />;
      case "image/jpeg":
        return <ImgContainer asset={asset} options={options} />;
      case "image/webp":
        return <ImgContainer asset={asset} options={options} />;
      default:
        break;
    }
  };

  return (
    <div className={className} onClick={() => setIsOpen(true)}>
      {asset_type(assetType)}
      {options.modal && isOpen ? (
        <Modal
          open={isOpen}
          onClose={(e) => {
            setIsOpen(false);
            e.stopPropagation();
          }}
        >
          {asset_type(assetType)}
        </Modal>
      ) : null}
    </div>
  );
};

export default AssetHandler;
