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
      {/* <Blocks /> */}
      {/* <Raging_Sea /> */}
      <canvas />
      <div className="details">
        <h2>Ruben Nijhuis</h2>
      </div>
    </section>
  );
};

export default Hero;
