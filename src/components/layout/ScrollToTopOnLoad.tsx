"use client";

import { useEffect } from "react";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (nav?.type === "reload") {
      scrollToTop();
      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
    }
  }, []);

  return null;
}
