import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  useCurrentWidth,
  flattenNameToURL,
} from "../../utils/helper-functions";
import arrow from "../../assets/icons/arrow-icon-white.svg";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Tags from "../Tags";

const Project = ({ animate, count, name, description, img, img_alt, tags }) => {
  const image = getImage(img);
  // Check if grid is active and returns correct Y offset
  const offset_height = (offset, hidden) => {
    if (width < 1024) return hidden ? `${offset}%` : "0%";
    else {
      if (count % 2 === 0) {
        return hidden ? "10%" : "0%";
      } else {
        return hidden ? "-20%" : "-30%";
      }
    }
  };

  let width = useCurrentWidth();
  let variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: offset_height(0, false),
      transition: {
        duration: 0,
      },
    },
    hidden: {
      opacity: 1,
      scale: 1,
      y: offset_height(0, false),
      transition: {
        duration: 0,
      },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (animate) {
    variants = {
      visible: {
        opacity: 1,
        scale: 1,
        y: offset_height(0, false),
        transition: {
          duration: 0.85,
          ease: "easeOut",
        },
      },
      hidden: {
        opacity: 0,
        scale: 0.95,
        y: offset_height(0, true),
        transition: { duration: 0 },
      },
    };
  }

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView, width]);

  return (
    <motion.article
      animate={controls}
      ref={ref}
      variants={variants}
      className="project--wrapper"
    >
      <Link className="project" to={`/projects/${flattenNameToURL(name)}`}>
        <article className="project__preview">
          <div className="project__img-wrapper">
            <GatsbyImage image={image} alt={img_alt} />
            <Tags className="project__img-wrapper__tags" tags={tags} theme="dark"/>
          </div>
          <div className="project__content">
            <h2>{name}</h2>
            <p>{description}</p>
            <img alt="arrow" src={arrow} />
          </div>
        </article>
      </Link>
    </motion.article>
  );
};

export default Project;
