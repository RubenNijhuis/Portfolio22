import React, { useEffect } from "react";
import propTypes from "prop-types";

// Utils
import {
  setViewheightProperty,
  setNavHeightProperty,
  console_message,
  isBrowser
} from "utils/helper-functions";

// Animation
import { motion } from "framer-motion";
import { page_transition, footer_transition } from "utils/animation-variants";

// Components
import Head from "components/Head/Head";
import Nav from "components/Nav";
import Footer from "components/Footer";

// Styling
import "styling/main.scss";

const Layout = ({ children, title, description, footer }) => {
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

Layout.defaultProps = {
  footer: true
};

Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.element),
    propTypes.element
  ]).isRequired,
  title: propTypes.string,
  description: propTypes.string,
  footer: propTypes.bool
};
