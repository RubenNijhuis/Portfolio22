import { useEffect, useState } from "react";

// GatsbyJS specific function -> returns a bool defining the place where the website is run/compiled
export const isBrowser = typeof window !== "undefined";

// Returns the width of the browser
const getWidth = () => {
  if (isBrowser) {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  } else {
    return 0;
  }
};

/**
 * React hook that returns the window width and an update function
 * @returns [width, setWidth]
 */
export const useCurrentWidth = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 100);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
};

/**
 * function that returns the view height in pixels. Handy for view
 * height vars that you don't want to update constantly.
 *
 * Mainly used for mobile and tablet where the view height changes
 * @returns view height in pixels
 */
export const setViewheightProperty = () => {
  let vh;
  if (isBrowser) {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  return Math.round(vh * 100) / 100;
};

/**
 * Function that swap the elements in an array per two
 * [1, 2, 3, 4, 5] -> [2, 1, 3, 4, 5]
 *
 * Doesn't swap the last element as it doesn't have a neighbour
 *
 * @param {array} arr
 * @returns
 */
export const swap_array_elements = (arr) => {
  let formatted_array = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i + 1] !== undefined) {
      let val1 = arr[i];
      let val2 = arr[i + 1];
      formatted_array[i] = val2;
      formatted_array[i + 1] = val1;
    }
  }
  return formatted_array;
};

/**
 * Parses the given title to a url friendly standard
 *
 * regular design systems -> regular-design-systems
 *
 * @param {string} title
 * @returns
 */
export const flattenNameToURL = (title) =>
  title.toLowerCase().replace(/\s/g, "-");

/**
 * Function that returns a styled console message based on the bwoser
 */
export const console_message = () => {
  if (typeof window !== "undefined") {
    const message = `👋 Hey, you! Curious about the tools that I used? This portfolio was made using GatsbyJS, SCSS, ThreeJS, React Fiber, Framer Motion and Contentful.
Found a bug or noticed something that you think you can improve? 🔎 Thankfully this site is open-source, you can find it on my Github — https://github.com/rubennijhuis/portfolio22
Happy coding! 👻`;

    if (navigator.userAgent.includes("Chrome") === true) {
      console.log(
        `%c${message}`,
        "color: white; background-color: black; padding: 18px; line-height: 1.6; border-radius: 6px; margin: 10px; font-size: 12px; border: 2px solid rgba(255,255,255,0.1); box-shadow: 10px 10px 10px"
      );
    } else {
      console.log(
        `%c${message}`,
        "color: white; background-color: black;line-height: 1.4;font-size: 12px;"
      );
    }
  }
};
