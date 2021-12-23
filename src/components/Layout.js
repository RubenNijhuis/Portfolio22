import React, { useEffect } from "react";

import { motion } from "framer-motion";
import Head from "./Head/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styling/main.scss";
import { setViewheightProperty } from "../utils/helper-functions";

// const message = `Hey, you! Curious about the tools used? This portfolio was made using GatsbyJS, SCSS, ThreejS, Framer Motion and Contentful.
// Found a bug or noticed something that you think you can improve? Thankfully this site is open-source, you can find it on my Github — 'https://github.com/rubennijhuis/portfolio22'
// Happy coding!`;

// if (navigator.userAgent.includes("Chrome") === true) {
//   console.log(
//     `%c${message}`,
//     "color: white; background-color: black; padding: 20px; line-height: 1.4; border-radius: 6px; margin: 10px; font-size: 12px; border: 2px solid rgba(255,255,255,0.1); box-shadow: 10px 10px 10px"
//   );
// } else {
//   console.log(
//     `%c${message}`,
//     "color: white; background-color: black;line-height: 1.4;font-size: 12px;"
//   );
// }

const Layout = ({ children, title, description, footer = true }) => {
  useEffect(() => {
    setViewheightProperty();
  });
  return (
    <>
      <Head title={title} description={description} />
      <header>
        <Nav />
      </header>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.15
          //   delay: 0.1,
        }}
      >
        {children}
      </motion.main>
      {footer ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.15,
              delay: 0.15,
          }}
        >
          <Footer />
        </motion.div>
      ) : null}
    </>
  );
};

export default Layout;
