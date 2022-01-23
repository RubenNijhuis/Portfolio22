import React from "react";
import propTypes from "prop-types";

// Containers
import Gallery from "components/AssetHandler/Gallery";
import BannerText from "components/Template/BannerText";
import VideoEmbed from "components/VideoEmbed";

const entry_types = {
  image_gallery: "ContentfulImageGallery",
  banner_text: "ContentfulBannerText",
  embedded_video: "ContentfulEmeddedVideo"
};

const EntryHandler = ({ entry, options }) => {
  switch (entry.data.target.__typename) {
    case entry_types.image_gallery:
      return <Gallery content={entry} options={options} />;
    case entry_types.banner_text:
      return <BannerText content={entry} />;
    case entry_types.embedded_video:
      return <VideoEmbed content={entry} />;
    default:
      return <></>;
  }
};

export default EntryHandler;

EntryHandler.propTypes = {
  entry: propTypes.object.isRequired,
  options: propTypes.object.isRequired
};
