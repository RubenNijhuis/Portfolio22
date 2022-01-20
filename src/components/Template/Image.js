import React, { useEffect } from "react";

import { template_image_transition } from "utils/animation-variants";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AssetHandler from "components/AssetHandler";

const Image = ({ img, options }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    inView ? controls.start("animate") : controls.start("initial");
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      ref={ref}
      variants={template_image_transition}
      className="asset--wrapper"
    >
      <AssetHandler asset={img} options={options} />
    </motion.div>
  );
};

export default Image;
