import { useRef, useEffect, useState } from "react";

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const scrollableWidth = container.scrollWidth - container.clientWidth;
      
      if (scrollableWidth <= 0) return;

      // Check if we're at the start or end of horizontal scroll
      const atStart = container.scrollLeft <= 0;
      const atEnd = container.scrollLeft >= scrollableWidth - 1;

      // Allow natural vertical scroll if at boundaries and scrolling in that direction
      if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) {
        return;
      }

      e.preventDefault();
      
      // Convert vertical scroll to horizontal with smooth multiplier
      const scrollAmount = e.deltaY * 1.5;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "auto"
      });

      // Update progress
      const newProgress = container.scrollLeft / scrollableWidth;
      setScrollProgress(Math.min(1, Math.max(0, newProgress)));
    };

    const updateProgress = () => {
      const scrollableWidth = container.scrollWidth - container.clientWidth;
      if (scrollableWidth > 0) {
        setScrollProgress(container.scrollLeft / scrollableWidth);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateProgress);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return { containerRef, scrollProgress };
}
