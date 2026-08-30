import React, { ReactNode, CSSProperties } from "react";
import { useReveal } from "../../hooks/useReveal";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export function Section({ children, id, className = "", style }: SectionProps) {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
       ref={ref}
       id={id}
       // py-24 = 96px (Mobile) | md:py-32 = 128px (Desktop) | scroll-mt-24 = Evita que o Header cubra o título
       className={`py-24 md:py-32 px-6 md:px-10 scroll-mt-24 ${className}`}
       style={style}
    >
      {children}
    </section>
  );
}