import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      // Use document.body.scrollTop for mobile devices
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0; // Ensure for both body and html
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
