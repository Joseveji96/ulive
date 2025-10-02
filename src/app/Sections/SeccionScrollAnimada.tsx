import { useState, useEffect, useRef } from "react";
import Trends from "./Trends";
import Application from "./Application";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default function SeccionSnapAnimada() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const snapping = useRef(false);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const onScroll = () => {
      if (snapping.current) return;

      const y = window.scrollY;
      const direction = y > lastScroll.current ? "down" : "up";
      lastScroll.current = y;

      if (!wrapperRef.current) return;
      
      const start = wrapperRef.current.offsetTop;
      const end = start + window.innerHeight;

      if (y >= start && y < end) {
        snapping.current = true;
      
        const to = direction === "down" ? end : start;

        window.scrollTo({
          top: to,
          behavior: "smooth",
        });

        
        setTimeout(() => {
          snapping.current = false;
        }, 300);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  }, [isMobile]);

  return (
    <div ref={wrapperRef}>
      <div className="h-auto lg:h-[100vh] lg:sticky lg:-top-96 lg:pb-48 z-10">
        <Trends />
      </div>
      <div className="h-[100vh]">
        <Application />
      </div>
    </div>
  );
}