import React from "react";
import propTypes from "prop-types";

// Styling
import "./style.scss";

// Components
import AnimatedLetters from "components/AnimatedLetters";

const TimeLineBlock = ({ title, items }) => {
    const className = "timeline_block";

    return (
        <div className={className}>
             <AnimatedLetters
                className="heading"
                onshow={true}
                shouldRotate={true}
                left_to_right={true}
                title={title}
                disabled={false}
            />
            <div className="moments">
                {items.map(
                    ([main, secondary, location, year, active], index) => {
                        const active_class =
                            active === "active" ? "active" : "";
                        return (
                            <div className={`item ${active_class}`} key={index}>
                                <div className="title">
                                    <h4 className="company">{main}</h4>
                                    <span className="bubble" />
                                    <h4 className="job">{secondary}</h4>
                                    <span className="bubble" />
                                    <h4 className="location">{location}</h4>
                                </div>
                                <p className="year">{year}</p>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default TimeLineBlock;

TimeLineBlock.propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
};
