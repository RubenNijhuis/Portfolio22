import React, { useEffect } from "react";

import { template_image_transition } from "utils/animation-variants";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ img }) => {
  const title = img.data.target.title;
  const image = getImage(img.data.target);
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
      className="template__img-wrapper"
    >
      <GatsbyImage image={image} alt={title} />
    </motion.div>
  );
};

export default Image;
