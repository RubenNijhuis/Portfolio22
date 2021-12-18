import React, { useCallback, useLayoutEffect, useState } from "react";

const getDimensionObject = (node) => {
    const rect = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
    };
};

const getAngle = (x) => {
    const viewport_width = window.innerWidth;
    const scale = (n, iMin, iMax, oMin, oMax) =>
        ((n - iMin) * (oMax - oMin)) / (iMax - iMin) + oMin;
    const deg = scale(x, 0, viewport_width, -15, 20);
    return Math.floor(deg * 1000) / 1000;
};

const useSize = () => {
    const [dimension, setDimensions] = useState({});
    const [node, setNode] = useState(null);

    const ref = useCallback((node) => setNode(node), []);

    useLayoutEffect(() => {
        if (node) setDimensions(getDimensionObject(node));
    }, [node]);
    return [ref, dimension];
};

const Media = ({ url, alt, active, x, y }) => {
    const [ref, { width, height }] = useSize();
    return (
        <div
            ref={ref}
            style={{
                transform: `translate(${x - width / 2}px, ${
                    y - height / 2
                }px) rotate(${getAngle(x)}deg)`,
            }}
            className={active ? "is-active" : undefined}
        >
            <img src={url} alt={alt} />
        </div>
    );
};

export default Media;
