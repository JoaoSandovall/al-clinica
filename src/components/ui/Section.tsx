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
    <section ref={ref} id={id} className={className} style={style}>
      {children}
    </section>
  );
}