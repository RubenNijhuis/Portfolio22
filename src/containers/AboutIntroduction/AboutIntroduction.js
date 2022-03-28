import React from "react";
import propTypes from "prop-types";

// Contentful Data Formatter
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Components
import { Link } from "gatsby";
import AssetHandler from "components/AssetHandler";
import Arrow from "components/Arrow";

// Styling
import "./style.scss";

const AboutIntroduction = ({ text, image, cv }) => {
    const className = "introduction";

    return (
        <section className={className}>
            <h1 className="heading">About</h1>
            <article className="about-text">{renderRichText(text)}</article>
            <div className="image">
                <div className="image--wrapper">
                    <AssetHandler asset={image} />
                </div>
                <div className="links">
                    <Link to={"/projects"}>
                        <p>See previous work</p>
                        <Arrow theme="light" />
                    </Link>
                    <span className="line" />
                    <Link to={"/journal"}>
                        <p>Look at recent updates</p>
                        <Arrow theme="light" />
                    </Link>
                    <span className="line" />
                    <a noreferrer="true" target="_" href={cv}>
                        <p>Curriculum Vitae</p>
                        <Arrow theme="light" />
                    </a>
                    <span className="line" />
                </div>
            </div>
        </section>
    );
};

export default AboutIntroduction;

AboutIntroduction.propTypes = {
    text: propTypes.object.isRequired,
    image: propTypes.object.isRequired,
    cv: propTypes.string.isRequired
};
