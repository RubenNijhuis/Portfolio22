import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";

// Utils
import { isBrowser } from "utils/helper-functions";

// Styling
import "./style.scss";

const HorizontalSlidingText = ({ text }) => {
    const className = "sliding-text";
    const [scrollY, setScrollY] = useState(0);
    const containerPos = useRef(null);
    const mainSlidingElement = useRef(null);
    const secondSlidingElement = useRef(null);

    const handle_scroll = () => {
        const boundMain = containerPos.current.getBoundingClientRect();
        if (isBrowser) {
            mainSlidingElement.current.style.transform = `translateX(${
                -scrollY / 4 - boundMain.height
            }px)`;
            secondSlidingElement.current.style.transform = `translateX(${
                scrollY / 4- boundMain.height - 500
            }px)`;
            setScrollY(Math.round(boundMain.top));
        }
    };

    useEffect(() => {
        if (isBrowser) {
            window.addEventListener("scroll", handle_scroll);
        }
        return () => window.removeEventListener("scroll", handle_scroll);
    }, [scrollY, setScrollY]);

    return (
        <div className={className} ref={containerPos}>
            <h2 ref={mainSlidingElement}>{text} {text}</h2>
            <h2 ref={secondSlidingElement}>{text} {text}</h2>
        </div>
    );
};

HorizontalSlidingText.propTypes = {
    text: propTypes.string.isRequired
};

export default HorizontalSlidingText;
