import Image from "next/image";
import { ChevronDown, HeartHandshake, Leaf, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const credibility = [
  { icon: Star, label: "5.0 no Google", sub: "Avaliações reais" },
  { icon: Leaf, label: "Especialista em Tricologia e Pele", sub: null },
  { icon: HeartHandshake, label: "Diagnóstico ético e transparente", sub: null },
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-x-clip bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F4EEE5] pb-12 pt-24 lg:pb-20 lg:pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p
            data-hero
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#856447]"
          >
            Estética Avançada &amp; Tricologia • Bento Gonçalves - RS
          </p>

          <h1
            data-hero
            className="mt-5 text-[2.5rem] font-medium leading-[1.12] text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            Cada rosto e cada couro cabeludo têm uma história que merece ser
            ouvida com <em className="font-normal text-[#856447]">honestidade.</em>
          </h1>

          <p
            data-hero
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Tratamentos especializados em queda capilar, alopecias e saúde da
            pele conduzidos por Letícia Orlandin. Planos de cuidado
            individuais, pensados para a sua real necessidade, sem exageros e
            sem promessas vazias.
          </p>

          <div data-hero className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#856447] px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#6E5037]"
            >
              <WhatsAppIcon className="size-5" />
              Agendar Consulta de Avaliação
            </a>
            <a
              href="#especialidades"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-5 text-base font-medium text-ink underline decoration-[#856447]/40 underline-offset-8 transition-colors hover:text-[#856447] hover:decoration-[#856447]"
            >
              Conhecer os procedimentos
              <ChevronDown className="size-4" />
            </a>
          </div>

          <ul
            data-hero
            className="mt-10 flex flex-col gap-3 border-t border-[#856447]/15 pt-6 text-sm text-stone-700 sm:flex-row sm:flex-wrap sm:gap-x-8"
          >
            {credibility.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon
                  className={`size-4 shrink-0 ${
                    Icon === Star ? "fill-[#9E7B5C] text-[#9E7B5C]" : "text-[#3E533F]"
                  }`}
                />
                <span className="font-medium">
                  {label}
                  {sub && <span className="font-normal text-muted"> ({sub})</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-hero className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#856447]/15 bg-[#EFE8DE] shadow-[0_24px_60px_-28px_rgba(41,37,36,0.35)]">
            <Image
              src="/leticia-orlandin.jpg"
              alt="Letícia Orlandin sorrindo, sentada no consultório com plantas ao fundo"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 92vw"
              className="object-cover object-top"
              style={{ objectPosition: "12% top" }}
            />
          </div>
          <p className="mt-4 text-center text-xs tracking-[0.18em] text-muted uppercase lg:text-left">
            Letícia Orlandin · Sala 501 · Cidade Alta
          </p>
        </div>
      </div>
    </section>
  );
}

