import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
