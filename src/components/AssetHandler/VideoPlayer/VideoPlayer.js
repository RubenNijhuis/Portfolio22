import React from "react";
import propTypes from "prop-types";

// Styling
import "./style.scss";

const VideoPlayer = ({ asset, options }) => {
  let className = "video-player";
  const backup_text =
    "The video wasn't found or couldn't load. Please contact me through contact@rubennijhuis.com";

  if (!options.videoCover) className += " dont-cover";

  let url;
  if (asset.file?.url !== undefined) {
    url = asset.file.url;
  } else {
    url = asset.data.target.file.url;
  }

  return (
    <div
      className={className}
      style={{ backgroundColor: options.backgroundColor }}
    >
      <video playsInline loop autoPlay muted className="video">
        <source src={url} type="video/mp4" />
        <p>{backup_text}</p>
      </video>
    </div>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  asset: propTypes.object.isRequired,
  options: propTypes.object
};
