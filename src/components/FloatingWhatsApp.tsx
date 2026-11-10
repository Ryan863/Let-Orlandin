"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#3E533F] text-white shadow-lg shadow-stone-900/20 transition-all duration-500 hover:bg-[#2D3E2E] sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

