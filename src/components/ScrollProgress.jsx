import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const [show, setShow] = useState(false);
  const circleRef = useRef(null);

  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percent = total > 0 ? (window.scrollY / total) * 100 : 0;

      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset =
          circumference - (percent / 100) * circumference;
      }

      setShow(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [circumference]);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      className={`fixed right-6 bottom-10 z-50 transition-all duration-500 hover:-translate-y-1 active:translate-y-1
        ${
          show
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg
          className="w-24 h-24"
          viewBox="0 0 100 100"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#cbd5e1"
            strokeWidth="6"
            fill="none"
          />

          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r={radius}
            stroke="#e69205"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-linear"
          />
        </svg>

        <div className="absolute w-15 h-15 rounded-full bg-slate-900 text-white text-3xl flex items-center justify-center shadow-lg cursor-pointer">
          &#11165;
        </div>
      </div>
    </button>
  );
}
