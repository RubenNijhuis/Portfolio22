import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import ImgContainer from "./ImgContainer";
import VideoPlayer from "./VideoPlayer";
import Modal from "components/Modal";

// Styling
import "./style.scss";

const AssetHandler = ({ asset, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [assetType, changeAssetType] = useState();
  let className = "asset";

  if (options?.modal) className += " modal-ready";

  /**
   * Default options if options weren't to be given
   * as props
   * */
  if (options === undefined) {
    options = {
      videoCover: true,
      backgroundColor: "#1e1e1e",
      modal: false
    };
  }

  /**
   * Get asset type (speficic to contentful structure)
   * Either grabs the file url or the gatsby image data
   */
  useEffect(() => {
    if (asset !== undefined) {
      if (asset.file?.contentType !== undefined) {
        changeAssetType(asset.file.contentType);
      } else if (asset.data.target.file.contentType !== undefined) {
        changeAssetType(asset.data.target.file.contentType);
      } else {
        changeAssetType("image/png");
      }
    }
  }, [asset]);

  /**
   * A switch function that render the correct asset
   * renderer based on type
   *
   * @param {string} asset_type
   * @returns a react component
   */
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

  const handleModalClick = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  return (
    <div
      className={className}
      onClick={(e) => handleModalClick(e)}
      role="article"
    >
      {asset_type(assetType)}
      {options.modal && isOpen ? (
        <Modal
          open={isOpen}
          onClose={(e) => {
            handleModalClick(e);
          }}
        >
          {asset_type(assetType)}
        </Modal>
      ) : null}
    </div>
  );
};

AssetHandler.propTypes = {
  asset: PropTypes.object,
  options: PropTypes.object
};

export default AssetHandler;