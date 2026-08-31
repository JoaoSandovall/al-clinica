import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2500, startDelay = 50) {
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
              
              // Curva easeOutSine: Começa rápido e freia com uma barriga muito suave no final.
              // Isso garante que o 18 e o 9800 terminem no exato mesmo frame visual.
              const eased = Math.sin((progress * Math.PI) / 2);
              
              let currentVal = Math.round(eased * target);
              
              // Trava de segurança para números pequenos: 
              // Garante que o número alvo NUNCA apareça antes de bater 100% do tempo.
              if (progress < 1 && currentVal === target) {
                currentVal = target - 1;
              }
              
              setValue(currentVal);
              
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