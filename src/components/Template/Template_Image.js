import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TemplateImage = ({ img }) => {
  let variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: "0%",
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.985,
      y: "5%",
    },
  };

  const image = getImage(img.data.target);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      ref={ref}
      variants={variants}
      className="template__img-wrapper"
    >
      <GatsbyImage image={image} alt={img.title} />
    </motion.div>
  );
};

export default TemplateImage;
