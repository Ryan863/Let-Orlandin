"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MotionRoot({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrada da Hero
        gsap.from("[data-hero]", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

        // Revelação ao rolar
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.from(batch, {
              y: 20,
              opacity: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }),
        });
      });

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return <main ref={mainRef}>{children}</main>;
}

