import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top
    // window.scrollTo(0, 0);
    
    // OR for smooth scroll (optional)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Runs every time the URL path changes

  return null;
};

export default ScrollToTop;