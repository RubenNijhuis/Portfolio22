import React, { useEffect } from "react";

import "styling/main.scss"; // Import stylesheet (this way it's imported for every page)
import { motion } from "framer-motion"; // For animation
import Head from "components/Head/Head"; // Meta tags etc
import Nav from "./Nav"; // Navigation
import Footer from "./Footer"; // Footer

import {
  setViewheightProperty,
  console_message,
} from "../../utils/helper-functions"; // Turn vh into pixels for SCSS
import {
  page_transition,
  footer_transition,
} from "../../utils/animation-variants"; // Framer animations

const Layout = ({ children, title, description, footer = true }) => {
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
        variants={page_transition}
      >
        {children}
      </motion.main>
      {footer ? (
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
