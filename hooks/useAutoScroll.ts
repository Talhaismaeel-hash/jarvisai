"use client";

import * as React from "react";

/**
 * Keeps a scroll container pinned to the bottom whenever `deps` change,
 * unless the user has manually scrolled up to read earlier messages.
 */
export function useAutoScroll<T extends HTMLElement>(deps: React.DependencyList) {
  const ref = React.useRef<T>(null);
  const isPinnedRef = React.useRef(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleScroll() {
      if (!el) return;
      const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      isPinnedRef.current = distanceFromBottom < 80;
    }

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !isPinnedRef.current) return;
    el.scrollTop = el.scrollHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
