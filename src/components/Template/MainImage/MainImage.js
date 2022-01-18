import React from "react";

// Components
import AssetHandler from "components/AssetHandler";

// Animation
import { motion } from "framer-motion";
import { project_hero_transition } from "utils/animation-variants";

// Styling
import "./style.scss";

const MainImage = ({ img, backgroundColor }) => {
  const className = "main-img";
  return (
    <div className={className} style={{ backgroundColor: backgroundColor }}>
      <motion.div
        className="img--wrapper"
        initial="initial_img"
        animate="animate_img"
        variants={project_hero_transition}
      >
        <AssetHandler asset={img} />
      </motion.div>
      <motion.div
        initial="reveal_initial"
        animate="reveal_animate"
        className="reveal"
        variants={project_hero_transition}
      />
    </div>
  );
};

export default MainImage;
