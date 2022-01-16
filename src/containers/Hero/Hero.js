import React from "react";

// Components
// import Blocks from "components/ThreeJS/blocks";
// import Raging_Sea from "components/ThreeJS/raging_sea/raging_sea";
// Styling
import "./style.scss";

const Hero = () => {
  const className = "hero";

  return (
    <section className={className}>
      <img
        src="https://hunterae.com/wp-content/uploads/images/digital-agency-web-showreel-videohive-29506116-download-free-hunterae-com-9.jpg"
        alt="showreel"
      />
    </section>
  );
};

export default Hero;
