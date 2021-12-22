import React, {
  useCallback,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { Link } from "gatsby";
import { isBrowser } from "../utils/helper-functions";
const images = [
  {
    url: "https://media0.giphy.com/media/3ohzdZO0nAL1H2LdMA/200w.webp?cid=ecf05e47vb961tncrfe72mkvag0vjwhgr18dce69hk16y3no&rid=200w.webp&ct=g",
    alt: "Creative development",
  },
  {
    url: "https://media2.giphy.com/media/DIruVoJ2OvEkgCX5DT/200w.webp?cid=ecf05e47q1i0aitgat5hhsisa5bk02yoqp2ppe8jjg870qs4&rid=200w.webp&ct=g",
    alt: "Interactive Design",
  },
];

const useMousePosition = (lastMouseX, lastMouseY) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    if (isBrowser) {
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, []);
  return mousePosition;
};

const getDimensionObject = (node) => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
};

const getAngle = (x) => {
  const viewport_width = () => {
    if (isBrowser) {
      return window.innerWidth;
    }
  };
  const scale = (n, iMin, iMax, oMin, oMax) =>
    ((n - iMin) * (oMax - oMin)) / (iMax - iMin) + oMin;
  const deg = scale(x, 0, viewport_width(), -15, 15);
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

const Media = ({ url, alt, index, active, x, y }) => {
  const [ref, { width, height }] = useSize();
  let isActive = index === active;

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${x - width / 2}px, ${
          y - height / 2
        }px) rotate(${getAngle(x)}deg)`,
      }}
      className={isActive ? "is-active" : undefined}
    >
      <img src={url} alt={alt} />
    </div>
  );
};

const Title = ({ title, setActiveIndex, index }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <span
      className="project-item"
      onMouseEnter={() => {
        setActiveIndex(index);
        setMouseHover(true);
      }}
      onMouseLeave={() => {
        setActiveIndex(-1);
        setMouseHover(false);
      }}
      index={index}
      style={{
        zIndex: mouseHover ? `1000` : `1`,
      }}
    >
      {title}
    </span>
  );
};

const Infographic = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePosition(0, 0);

  return (
    <section className="introduction">
      <div className="introduction__content">
        <p>
          My name is Ruben and I create Digital Products using{" "}
          <Title
            title="Creative Coding"
            setActiveIndex={setActiveIndex}
            index={0}
          />{" "}
          and{" "}
          <Title
            title="Interactive Design"
            setActiveIndex={setActiveIndex}
            index={1}
          />{" "}
          to realize ideas
        </p>
        <Link to={"/about"}>Learn more</Link>
      </div>

      <div className="introduction__images">
        <Media
          url={images[0].url}
          active={activeIndex}
          x={x}
          y={y}
          index={0}
          alt={images[0].alt}
        />
        <Media
          url={images[1].url}
          active={activeIndex}
          x={x}
          y={y}
          index={1}
          alt={images[1].alt}
        />
      </div>
    </section>
  );
};

export default Infographic;
