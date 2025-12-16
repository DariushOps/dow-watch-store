import { useEffect, useState } from "react";

import header1 from "../../assets/watchPic/cov1.png";
import header2 from "../../assets/watchPic/cov2.png";
import header3 from "../../assets/watchPic/cov3.png";
import header4 from "../../assets/watchPic/cov4.png";

const images = [header1, header2, header3, header4];

const titles = [
  "Fearless Precision",
  "Innovate Every Second",
  "Born to Dare",
  "Timeless Moments",
];

export default function CoverSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative w-full lg:w-full
        h-svh lg:h-screen
        overflow-hidden
      "
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1600
            ${i === index ? "opacity-25" : "opacity-0"}
          `}
        />
      ))}

      <div
        className="
          absolute inset-0 z-50
          flex items-center justify-center
          px-4 sm:px-6
        "
      >
        <h1
          key={index}
          className="
            text-style font-cinzel font-normal text-center
            opacity-0 animate-textSlide
            text-3xl leading-tight
            sm:text-4xl md:text-6xl
            lg:text-[7rem]
          "
        >
          {titles[index]}
        </h1>
      </div>
    </section>
  );
}
