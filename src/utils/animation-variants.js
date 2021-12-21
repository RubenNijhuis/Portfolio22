export const journal_small_fade_in = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: "10%",
    transition: { duration: 0 },
  },
};
