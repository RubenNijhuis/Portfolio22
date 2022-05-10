import React from "react";
import propTypes from "prop-types";

// Contentful
import { renderRichText } from "gatsby-source-contentful/rich-text";

// Components
import AssetHandler from "components/AssetHandler";

// Styling
import "./style.scss";

const SmallAbout = ({ about, photo }) => {
    const className = "about-small";

    return (
        <section className={className}>
            <div className="container">
                <div className="aside">
                    <div className="img-wrapper">
                        <AssetHandler asset={photo} />
                    </div>
                    <div className="personalia">
                        <div className="interests">
                            <h3 className="title">Location</h3>
                            <div className="items">
                                <p className="active">
                                    Amsterdam<span>(NL)</span>
                                </p>
                                <p className="inactive">
                                    Paris<span>(FR)</span>
                                </p>
                                <p className="inactive">
                                    New York<span>(USA)</span>
                                </p>
                                <p className="inactive">
                                    Nice<span>(FR)</span>
                                </p>
                            </div>
                        </div>
                        <div className="interests">
                            <h3 className="title">Fields</h3>
                            <div className="items">
                                <p>3D Graphics</p>
                                <p>Interactive Design</p>
                                <p>Startup</p>
                            </div>
                        </div>
                        <div className="interests">
                            <h3 className="title">Work</h3>
                            <div className="items">
                                <p>Front-end</p>
                                <p>Design</p>
                                <p>Consultant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    {renderRichText(about, {})}
                </div>
            </div>
        </section>
    );
};

export default SmallAbout;

SmallAbout.propTypes = {
    about: propTypes.object.isRequired,
    photo: propTypes.object.isRequired
};
