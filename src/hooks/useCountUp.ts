import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2500, startDelay = 750) {
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
          
          // Segura a contagem para esperar o delay-800 e o fade-up do CSS terminarem
          setTimeout(() => {
            let start: number;

            const step = (now: number) => {
              if (start === undefined) start = now;
              const progress = Math.min((now - start) / duration, 1);
              
              // Curva easeOutQuart: Começa rápido saindo do zero e freia suavemente no fim
              const eased = 1 - Math.pow(1 - progress, 4);
              
              setValue(Math.floor(eased * target));
              
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(target);
              }
            };

            requestAnimationFrame(step);
          }, startDelay); // <-- Espera 1.2 segundos antes de contar

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