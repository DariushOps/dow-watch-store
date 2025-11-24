import { useEffect, useState } from "react";
import header1 from "../assets/watchPic/cov1.png";
import header2 from "../assets/watchPic/cov2.png";
import header3 from "../assets/watchPic/cov3.png";
import header4 from "../assets/watchPic/cov4.png";

const images = [
  { image: header1, alt: "pic1" },
  { image: header2, alt: "pic2" },
  { image: header3, alt: "pic3" },
  { image: header4, alt: "pic4" },
];

export default function CoverSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          alt={image.alt}
          className={`absolute top-0 left-0 w-full h-screen object-cover transition-opacity backface-hidden duration-2500
            ${
              index === currentImageIndex ? "opacity-45 z-10" : "opacity-0 z-0"
            }`}
        />
      ))}
    </div>
  );
}
