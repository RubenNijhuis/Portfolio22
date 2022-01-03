import React, { useEffect } from "react";

// Animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Utils
import { useCurrentWidth, flattenNameToURL } from "utils/helper-functions";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import { Link } from "gatsby";
import Tags from "components/Tags";
import Arrow from "components/Arrow";

const Project = ({ name, description, img, tags, animate, count }) => {
  const parsed_image = getImage(img);
  const parsed_name = flattenNameToURL(name);
  const width = useCurrentWidth();

  /*
   * Check if grid is active and returns correct Y offset
   * (TODO: Have the grid set animation and layout)
   */
  const breakpoint = 1024;
  const offset_height = (offset, hidden) => {
    if (width < breakpoint) return hidden ? `${offset}%` : "0%"
    else {
      if (count % 2 === 0) {
        return hidden ? "10%" : "0%";
      } else {
        return hidden ? "-20%" : "-30%";
      }
    }
  };

  // Animation
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fade_in = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: offset_height(0, true),
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: offset_height(0, false),
      transition: {
        ease: "easeOut",
        duration: animate ? 0.85 : 0,
      },
    },
  };

  // Check whether project is in view and sets visibility from variants
  useEffect(() => {
    if (animate) {
        inView ? controls.start("visible") : controls.start("hidden");
    } else {
      controls.start("visible");
    }
  }, [inView, width]);

  return (
    <motion.article
      ref={ref}
      animate={controls}
      variants={fade_in}
      className="project--wrapper"
    >
      <Link className="project" to={`/projects/${parsed_name}`}>
        <article className="project__preview">
          <div className="project__img-wrapper">
            <GatsbyImage image={parsed_image} alt={img.alt} />
            <Tags tags={tags} theme="dark" />
          </div>
          <div className="project__description">
            <h2>{name}</h2>
            <p>{description}</p>
            <Arrow theme={"light"} />
          </div>
        </article>
      </Link>
    </motion.article>
  );
};

export default Project;
