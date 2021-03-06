// Journal fade in (only for mobile - tablet)
export const journal_small_fade_in = {
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease: "easeOut"
        }
    },
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: "10%",
        transition: { duration: 0 }
    }
};

// Animation for page transition
export const page_transition = (isHomePage) => {
    return {
        initial: {
            opacity: 0,
            y: isHomePage ? 0 : 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                mass: 0.35,
                stiffness: 75,
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        }
    };
};

// Footer page transition
export const footer_transition = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.15,
            delay: 0.2
        }
    },
    exit: {
        opacity: 0
    }
};

export const project_details_transition = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delay: 1.75,
            duration: 0.85,
            ease: [0.66, 0.25, 0.48, 1]
        }
    }
};

// Project page
export const project_hero_transition = {
    reveal_initial: {
        scaleY: 1
    },
    reveal_animate: {
        scaleY: 0,
        transition: {
            delay: 0.5,
            duration: 1.25,
            ease: [0.75, 0, 0.34, 1]
        }
    },
    initial_img: {
        y: "-10%"
    },
    animate_img: {
        y: "0%",
        transition: {
            delay: 0.5,
            duration: 1.25,
            ease: "easeOut"
        }
    }
};

// Image for tempalte
export const template_image_transition = {
    initial: {
        opacity: 0,
        scale: 0.95,
        y: "5%"
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: "0%",
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
};
