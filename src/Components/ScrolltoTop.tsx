import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({
  behavior = "smooth",
}: { behavior?: ScrollBehavior } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top on every pathname change
    window.scrollTo({ top: 0, behavior });
  }, [pathname, behavior]);

  return null;
}
