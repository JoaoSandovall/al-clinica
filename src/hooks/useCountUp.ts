import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 3000, startDelay = 750) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          
          setTimeout(() => {
            let start: number;

            const step = (now: number) => {
              if (start === undefined) start = now;
              const progress = Math.min((now - start) / duration, 1);
              
              // Curva easeOutExpo: Arranca rápido, mas freia de forma extremamente longa e suave
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              
              // Trocado Math.floor por Math.round para evitar saltos no último frame
              setValue(Math.round(eased * target));
              
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(target);
              }
            };

            requestAnimationFrame(step);
          }, startDelay);

          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, startDelay]);

  return { value, ref };
}