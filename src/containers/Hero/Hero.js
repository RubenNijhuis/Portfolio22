import React from "react";
import propTypes from "prop-types";

// Components
import AssetHandler from "components/AssetHandler";

// Styling
import "./style.scss";

const Hero = ({ asset }) => {
    const className = "hero-banner";

    return (
        <section className={className}>
            <AssetHandler asset={asset} />
        </section>
    );
};

export default Hero;

Hero.propTypes = {
    asset: propTypes.object.isRequired
};
