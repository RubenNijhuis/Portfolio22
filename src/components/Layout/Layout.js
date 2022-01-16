import React, { useEffect } from "react";

import "styling/main.scss"; // Import stylesheet (this way it's imported for every page)
import { motion } from "framer-motion"; // For animation

// Components
import Head from "components/Head/Head";
import Nav from "components/Nav";
import Footer from "components/Footer";

import { setViewheightProperty, console_message } from "utils/helper-functions"; // Turn vh into pixels for SCSS
import { page_transition, footer_transition } from "utils/animation-variants"; // Framer animations

const Layout = ({ children, title, description, footer = true }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const isHomePage = url.split("/")[3] === "";

  useEffect(() => {
    setViewheightProperty();
    console_message();
  });

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
