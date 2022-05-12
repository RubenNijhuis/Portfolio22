// Credits -> Wrong Akram https://www.youtube.com/watch?v=BtsVMvds3P0
import React, { useEffect } from "react";
import propTypes from "prop-types";

// Animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Style
import "./style.scss";

const letterAni = (index, length_of_array, left_to_right, shouldRotate) => {
    // Get middle of array
    // const half_array = length_of_array / 2;
    // Get offset from letter to middle in positive number
    // const difference = Math.abs(half_array - index);
    // Length of animation is the number every delay is a bit of the total time

    let animation_length = 0.1 * index;;
    // if (left_to_right) {
    //     animation_length = 0.1 * index;
    // } else {
    //     animation_length = difference * (1.25 / length_of_array);
    // }
    // Rotation is from 0 till max based on index of letter
    let rotation = 0;
    if (shouldRotate === true) rotation = index * 0.25 * 10;
    return {
        hidden: {
            y: 200,
            rotate: rotation
        },
        visible: {
            y: 0,
            rotate: 0,
            transition: {
                delay: animation_length,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.25
            }
        }
    };
};

const Word = ({ inView, disabled, word, shouldRotate }) => {
    return (
        <motion.div className="row-word">
            {word.map((letter, index) => {
                return (
                    <motion.span
                        className="row-letter"
                        key={index}
                        initial={disabled ? "visible" : "hidden"}
                        animate={inView ? "visible" : "what"}
                        variants={letterAni(
                            index,
                            word.length,
                            shouldRotate,
                            disabled
                        )}
                    >
                        {letter}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

const AnimatedLetters = ({
    className,
    title,
    shouldRotate = false,
    left_to_right,
    disabled
}) => {
    let componentClassName = "animated-letters ";
    if (className) componentClassName += className;

    // Split the title
    const title_split_words_to_letters = title.split(" ").map((word) => word.split(""));
    // Animation
    const [ref, inView] = useInView({
        threshold: 0.25,
        triggerOnce: true
    });


    return (
        <motion.span className={componentClassName} ref={ref}>
            {[...title_split_words_to_letters].map((word, index) => (
                <Word
                    key={index}
                    disabled={!disabled}
                    inView={inView}
                    word={word}
                    left_to_right={left_to_right}
                    shouldRotate={shouldRotate}
                />
            ))}
        </motion.span>
    );
};

export default AnimatedLetters;

AnimatedLetters.propTypes = {
    title: propTypes.string.isRequired,
    disabled: propTypes.bool
};
