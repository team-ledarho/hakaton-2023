import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = ({ to }) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollTo(to, {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-6 sm:right-24 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-opacity ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
