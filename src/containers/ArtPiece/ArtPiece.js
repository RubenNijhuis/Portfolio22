import React from "react";
import Blocks from "components/ThreeJS/blocks";

const HomeIntro = () => {
    const className = "art-piece"
    tick();
  return (
    <section className={className}>
      <Blocks/>
    </section>
  );
};

export default HomeIntro;