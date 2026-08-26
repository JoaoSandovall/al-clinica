import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".reveal, .reveal-l, .reveal-r").forEach((n) =>
            n.classList.add("visible")
          );
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  
  return ref;
}