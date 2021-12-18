import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCurrentWidth, flattenNameToURL } from "../utils/helper-functions";
import arrow from "../assets/icons/arrow-icon-white.svg";
import data from "../testing_data/projcts.json";
import SeeMore from "./SeeMore";
import { Link } from "gatsby";

const Project = ({ animate, count, name, title, img, tags, background }) => {
    let width = useCurrentWidth();
    let variants;

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    // Check if grid is active and returns correct Y offset
    const offset_height = (offset, hidden) => {
        if (width < 1024) return hidden ? `${offset}%` : "0%";
        else {
            if (count % 2 === 0) {
                return hidden ? "10%" : "0%";
            } else {
                return hidden ? "-25%" : "-35%";
            }
        }
    };

    if (animate !== true) {
        variants = {
            visible: {
                opacity: 1,
                scale: 1,
                y: offset_height(0, false),
                transition: {
                    duration: 0,
                },
            },
        };
    } else {
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
            className="case--wrapper"
        >
            <Link className="case" to={`projects/${flattenNameToURL(name)}`}>
                <article className="case__preview">
                    <div className="case__img-wrapper">
                        <img src={img} alt="HelloWorld" />
                        <div className="case__img-wrapper__tags">
                            {tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="case__content">
                        <h2>{name}</h2>
                        <p>{title}</p>
                        <img alt="arrow" src={arrow} />
                    </div>
                </article>
            </Link>
        </motion.article>
    );
};

const Projects = ({ animate, see_more }) => (
    <section className="projects">
        <h2 className="heading">Projects</h2>
        <div className="projects__grid">
            {data.map(({ name, title, img, tags, background }, index) => (
                <Project
                    animate={animate}
                    key={index}
                    name={name}
                    title={title}
                    img={img}
                    tags={tags}
                    background={background}
                    count={index}
                />
            ))}
        </div>
        {see_more ? (
            <SeeMore
                url={`/projects`}
                text={`See all ${data.length} projects`}
            />
        ) : null}
    </section>
);

export default Projects;
