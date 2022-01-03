import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  let variants = {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
  };

  return (
    <section className="hero">
      <motion.div
        initial="hidden"
        animate="show"
        variants={variants}
        className="hero__banner"
      >
        <img
          src="https://hunterae.com/wp-content/uploads/images/digital-agency-web-showreel-videohive-29506116-download-free-hunterae-com-9.jpg"
          alt="showreel"
        />
        <span>• scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
