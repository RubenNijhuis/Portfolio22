import React from "react";
import propTypes from "prop-types";

// Components
import AssetHandler from "components/AssetHandler";

// Animation
import { motion } from "framer-motion";
import { project_hero_transition } from "utils/animation-variants";

// Styling
import "./style.scss";

const MainImage = ({ img, options }) => {
    const className = "main-img";

    return (
        <div
            className={className}
            style={{ backgroundColor: options.backgroundColor }}
        >
            <motion.div
                className="img--wrapper"
                initial="initial_img"
                animate="animate_img"
                variants={project_hero_transition}
            >
                <AssetHandler asset={img} options={options} />
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

MainImage.propTypes = {
    img: propTypes.object.isRequired,
    options: propTypes.object.isRequired
};
