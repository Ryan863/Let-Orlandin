"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-[#856447]/15 bg-[#FAF7F2]/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
          <a href="#topo" className="flex flex-col leading-none" aria-label="Letícia Orlandin - início">
            <span className="font-display text-xl font-semibold tracking-[0.12em] text-ink sm:text-2xl">
              LETÍCIA ORLANDIN
            </span>
            <span className="mt-1.5 text-[10px] tracking-[0.2em] text-stone-600">
              ESTÉTICA AVANÇADA &amp; TRICOLOGIA
            </span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-stone-700 transition-colors hover:text-oak"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center rounded-full bg-[#856447] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6E5037] lg:inline-flex"
            >
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-[#856447]/10 lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-mobile"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-[#FAF7F2] px-6 pb-8 pt-24 transition-all duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Menu mobile" className="flex flex-1 flex-col justify-center">
          <ul className="divide-y divide-[#856447]/15">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between py-3 font-display text-3xl text-ink"
                >
                  {l.label}
                  <span className="text-base text-oak" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#856447] px-6 text-base font-semibold text-white shadow-sm hover:bg-[#6E5037]"
        >
          <WhatsAppIcon className="size-5" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
}

