import React from "react";
import PropTypes from "prop-types";

// Animation
import { motion } from "framer-motion";
import { project_details_transition } from "utils/animation-variants";

// Components
import AnimatedLetters from "components/AnimatedLetters";
import Tags from "components/Tags";

// Styling
import "./style.scss";

const Details = ({ description, year, role, name, tags, addClassName }) => {
    let className = "case-details ";
    if (addClassName !== undefined) className += addClassName;

    return (
        <div className={className}>
            <div className="header">
                <AnimatedLetters
                    className="headline"
                    shouldRotate={true}
                    left_to_right={true}
                    title={name}
                    disabled={true}
                />
                {description && (
                    <motion.p
                        initial="hidden"
                        animate="show"
                        variants={project_details_transition}
                    >
                        {description}
                    </motion.p>
                )}
            </div>
            <motion.div
                className="personalia"
                initial="hidden"
                animate="show"
                variants={project_details_transition}
            >
                <div className="info">
                    <div className="item">
                        <h3 className="bold">Year</h3>
                        <h3>{year}</h3>
                    </div>
                    {role && (
                        <div className="item item--role">
                            <h3 className="bold">Role</h3>
                            <h3>{role}</h3>
                        </div>
                    )}
                </div>
                <Tags tags={tags} theme={"light"} />
            </motion.div>
        </div>
    );
};

Details.propTypes = {
    description: PropTypes.string,
    year: PropTypes.string.isRequired,
    role: PropTypes.string,
    name: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    addClassName: PropTypes.string
};

export default Details;
