import React from "react";
import { isBrowser, setViewheightProperty } from "utils/helper-functions";

const DeviceIdentifyPage = () => {
  let deviceWidth = 0;
  let deviceHeight = 0;
  let useragent = "useragent";

  const vh = setViewheightProperty();

  if (isBrowser) {
    deviceWidth = window.innerWidth;
    deviceHeight = window.innerHeight;
    useragent = navigator.userAgent;
  }

  return (
    <div style={{ color: "white", fontSize: "2rem", padding: "18px" }}>
      <p>
        width && height <br />
        {deviceWidth} x {deviceHeight}
      </p>

      <br />
      <p>Viewheight: {vh}</p>
      <p>User agent: {useragent} </p>
    </div>
  );
};

export default DeviceIdentifyPage;
