import React, { useEffect } from "react";

// Import stylesheet (this way it's imported for every page)
import "styling/main.scss";
import { motion } from "framer-motion"; // For animation

// Components
import Head from "components/Head/Head";
import Nav from "components/Nav";
import Footer from "components/Footer";

import {
  setViewheightProperty,
  setNavHeightProperty,
  console_message,
  isBrowser,
} from "utils/helper-functions"; // Turn vh into pixels for SCSS
import { page_transition, footer_transition } from "utils/animation-variants"; // Framer animations

const Layout = ({ children, title, description, footer = true }) => {
  // Check if url is homepage == no movement in y direction
  let isHomePage = false;
  if (isBrowser) {
    const url = window.location.href;
    isHomePage = url.split("/")[3] === "";
  }

  useEffect(() => {
    setNavHeightProperty();
    setViewheightProperty();
    console_message();
  }, []);

  return (
    <>
      <Head title={title} description={description} />
      <header>
        <Nav />
      </header>
      <motion.main
        initial="initial"
        exit="exit"
        animate="animate"
        variants={page_transition(isHomePage)}
      >
        {children}
      </motion.main>
      {footer === true ? (
        <motion.div
          initial="initial"
          exit="exit"
          animate="animate"
          variants={footer_transition}
        >
          <Footer />
        </motion.div>
      ) : null}
    </>
  );
};

export default Layout;
