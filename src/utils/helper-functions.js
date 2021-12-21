import { useEffect, useState } from "react";

const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

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
}

export const setViewheightProperty = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export const swap_array_elements = (arr) => {
    let formatted_array = [];
    
    // Swap items if its in a grid shape
    // [1, 2, 3, 4, 5] -> [2, 1, 3, 4, 5]
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0 && arr[i + 1] != undefined) {
        let val1 = arr[i];
        let val2 = arr[i + 1];
        formatted_array[i] = val2;
        formatted_array[i + 1] = val1;
      }
    }
    return formatted_array;

}

export const flattenNameToURL = (title) => title.toLowerCase().replace(/\s/g, "-");