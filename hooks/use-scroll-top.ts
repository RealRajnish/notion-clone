import { useEffect, useState } from "react";

const useScrollTop = (threshold = 10) => {
  const [scrolled, setSrcolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setSrcolled(true);
      } else {
        setSrcolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
  return scrolled;
};

export default useScrollTop;
