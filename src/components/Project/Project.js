import React, { useEffect } from "react";

// Animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Utils
import { useCurrentWidth, flattenNameToURL } from "utils/helper-functions";
import { sizes } from "utils/constants";

// Components
import { Link } from "gatsby";
import Tags from "components/Tags";
import Arrow from "components/Arrow";
import AssetHandler from "components/AssetHandler";

// Styling
import "./style.scss";

const Project = ({
  name,
  description,
  img,
  tags,
  background,
  animate = false,
  count,
}) => {
  const parsed_name = flattenNameToURL(name);
  const width = useCurrentWidth();
  const className = "project";

  /*
   * Check if grid is active and returns correct Y offset
   * (TODO: Have the grid set animation and layout)
   */
  const offset_height = (offset, hidden) => {
    if (width < sizes.small) return hidden ? `${offset}%` : "0%";
    else {
      if (count % 2 === 0) {
        return hidden ? "-20%" : "-30%";
      } else {
        return hidden ? "10%" : "0%";
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
      scaleX: [-1, -1], // fix for slide back page into grid
      opacity: 0,
      scale: 0.95,
      y: offset_height(0, true),
    },
    visible: {
      scaleX: [-1, -1], // fix for slide back page into grid
      opacity: 1,
      scale: 1,
      y: offset_height(0, false),
      transition: {
        ease: "easeOut",
        duration: animate ? 1 : 0,
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
  }, [inView, width, animate, controls]);

  return (
    <motion.article
      ref={ref}
      animate={controls}
      variants={fade_in}
      className={`${className}--wrapper`}
    >
      <Link className={className} to={`/projects/${parsed_name}`}>
        <article className="preview">
          <div className="img-wrapper" style={{ backgroundColor: background }}>
            <AssetHandler asset={img} />
            <Tags tags={tags} theme="dark" />
          </div>
          <div className="description">
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
