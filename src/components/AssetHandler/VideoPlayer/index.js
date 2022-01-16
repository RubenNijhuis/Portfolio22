import React from "react";
import "./styling.scss";

const VideoPlayer = ({ asset }) => {
  const className = "video-player";
  let url;

  if (asset.file?.url !== undefined) {
    url = asset.file.url;
  } else {
    url = asset.data.target.file.url;
  }

  return (
    <div className={className}>
      <video playsInline loop autoPlay muted className="video">
        <source src={url} type="video/mp4" />
        <p>
          The video wasn't found or couldn't load. Please contact me through
          contact@rubennijhuis.com
        </p>
      </video>
    </div>
  );
};

export default VideoPlayer;
