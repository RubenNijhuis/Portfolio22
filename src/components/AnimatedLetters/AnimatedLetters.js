// Credits -> Wrong Akram https://www.youtube.com/watch?v=BtsVMvds3P0
import React from "react";
import propTypes from "prop-types";

// Animation
import { motion } from "framer-motion";

// Style
import "./style.scss";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};

const letterAni = (index, length_of_array) => {
    // Get middle of array
    const half_array = length_of_array / 2;
    // Get offset from letter to middle in positive number
    const difference = Math.abs(half_array - index);
    // Length of animation is the number every delay is a bit of the total time
    const animation_length = difference * (1.25 / length_of_array);
    // Rotation is from 0 till max based on index of letter
    //   const rotation = (half_array - index) * -1 * 10;

    return {
        initial: {
            y: 200
        },
        animate: {
            y: 0,
            transition: {
                delay: animation_length,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.25
            }
        }
    };
};

const AnimatedLetters = ({ title, disabled }) => {
    const className = "animated-letters";
    const title_split_words = title.split(" ");
    const title_split_words_letters = title_split_words.map((word) =>
        word.split("")
    );

    let amount_letters = 0;
    let current_letter_index = 0;
    title_split_words_letters.map((word) => (amount_letters += word.length));

    return (
        <motion.span className={className}>
            {[...title_split_words_letters].map((word, index) => (
                <motion.div
                    className="row-word"
                    variants={disabled ? null : banner}
                    initial="initial"
                    animate="animate"
                    key={index}
                >
                    {word.map((letter, index_letter) => {
                        current_letter_index++;

                        return (
                            <motion.span
                                className="row-letter"
                                key={index_letter}
                                variants={letterAni(
                                    current_letter_index,
                                    amount_letters
                                )}
                            >
                                {letter}
                            </motion.span>
                        );
                    })}
                </motion.div>
            ))}
        </motion.span>
    );
};

export default AnimatedLetters;

AnimatedLetters.propTypes = {
    title: propTypes.string.isRequired,
    disabled: propTypes.bool
};
