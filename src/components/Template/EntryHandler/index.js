import React from "react";

// Containers
import Gallery from "components/AssetHandler/Gallery";
import BannerText from "components/Template/BannerText";
import VideoEmbed from "components/VideoEmbed";

const main_content_options = {
  videoCover: true,
};

const entry_types = {
  image_gallery: "ContentfulImageGallery",
  banner_text: "ContentfulBannerText",
  embedded_video: "ContentfulEmeddedVideo",
};

const EntryHandler = ({ entry }) => {
  switch (entry.data.target.__typename) {
    case entry_types.image_gallery:
      return <Gallery content={entry} options={main_content_options} />;
    case entry_types.banner_text:
      return <BannerText content={entry} />;
    case entry_types.embedded_video:
      return <VideoEmbed content={entry} />;
  }
};

export default EntryHandler;
