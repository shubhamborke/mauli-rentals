import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets window scroll position on client-side route changes. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
