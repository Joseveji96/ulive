import { useEffect, useRef } from "react";
import Trends from "./Trends";
import Application from "./Application";

export default function SeccionSnapAnimada() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const snapping = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (snapping.current) return;

      const y = window.scrollY;
      const direction = y > lastScroll.current ? "down" : "up";
      lastScroll.current = y;

      const start = wrapperRef.current?.offsetTop || 0;
      const end = start + window.innerHeight;

      if (y >= start && y < end) {
        snapping.current = true;

        const to = direction === "down" ? end : start;

        window.scrollTo({
          top: to,
          behavior: "smooth",
        });

        // Espera a que termine de hacer scroll
        setTimeout(() => {
          snapping.current = false;
        }, 300);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef}>
      <div className="h-[100vh] sticky -top-96 pb-48  z-10">
        <Trends />
      </div>
      <div className="h-[100vh]">
        <Application />
      </div>
    </div>
  );
}
