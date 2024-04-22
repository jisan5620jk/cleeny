import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {showScroll && (
        <div
          className="fixed bottom-10 text-white right-6 z-50 bg-PrimaryColor-0 border-2 border-white rounded-full h-12 w-12 cursor-pointer animate-movebtn flex justify-center items-center hover:border-PrimaryColor-0 hover:bg-white hover:text-PrimaryColor-0 hover:animate-none"
          onClick={scrollToTop}
        >
          <FaArrowUpLong size={"24"} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
