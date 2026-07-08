import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type LocationState = {
  languageSwitch?: boolean;
};

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if ((state as LocationState | null)?.languageSwitch) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
