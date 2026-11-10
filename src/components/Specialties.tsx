import { ArrowUpRight } from "lucide-react";
import { whatsappFor } from "@/lib/site";

type Service = {
  n: string;
  badge: "Tricologia" | "Estética";
  title: string;
  text: string;
  tags?: string[];
  service: string;
  span: string;
};

const services: Service[] = [
  {
    n: "01",
    badge: "Tricologia",
    title: "Tricologia Clínica & Queda Capilar",
    text: "Investigação da raiz do problema capilar, estímulo dos folículos e recuperação gradual da densidade dos fios, com plano individual para cada tipo de queda.",
    tags: ["Alopecia androgenética", "Alopecia areata", "Eflúvio"],
    service: "tricologia clínica e tratamento de queda capilar",
    span: "lg:col-span-4",
  },
  {
    n: "02",
    badge: "Estética",
    title: "Gerenciamento do Envelhecimento Facial & Firmeza da Pele",
    text: "Cuidado preventivo e regenerativo para linhas finas, viço e saúde dérmica, respeitando os seus traços.",
    service: "gerenciamento do envelhecimento facial e firmeza da pele",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    badge: "Estética",
    title: "Bioestimuladores de Colágeno & Regeneração Cutânea",
    text: "Recuperação gradual da firmeza e da densidade biológica da pele, no ritmo natural do seu organismo.",
    service: "bioestimuladores de colágeno",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    badge: "Tricologia",
    title: "Terapias Injetáveis & Microinfusão Folicular",
    text: "Entrega direta de nutrientes e ativos no couro cabeludo e na derme, em protocolos delicados e confortáveis.",
    service: "terapias injetáveis e microinfusão folicular",
    span: "lg:col-span-2",
  },
  {
    n: "05",
    badge: "Estética",
    title: "Limpeza de Pele Profunda & Saúde da Barreira Cutânea",
    text: "Assepsia profunda, extração precisa e hidratação calmante para devolver equilíbrio à pele.",
    service: "limpeza de pele profunda e saúde da barreira cutânea",
    span: "lg:col-span-2",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-[#FAF7F2] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#856447]">
            Especialidades
          </p>
          <h2 data-reveal className="mt-5 text-4xl font-medium text-ink sm:text-5xl">
            Cinco frentes de cuidado, um mesmo compromisso com o{" "}
            <em className="font-normal text-[#856447]">cuidado real.</em>
          </h2>
          <p data-reveal className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Cada atendimento começa por uma avaliação. Só depois definimos
            quais procedimentos, e em que ordem, fazem sentido para você.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {services.map((s, i) => (
            <article
              key={s.n}
              data-reveal
              className={`group relative flex flex-col rounded-3xl border border-[#856447]/[0.15] bg-white/85 p-7 backdrop-blur-sm transition-colors hover:border-[#856447]/40 sm:p-8 ${s.span} ${
                i === 4 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl italic text-[#9E7B5C] tabular-nums">
                  {s.n}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                    s.badge === "Tricologia"
                      ? "bg-[#3E533F]/10 text-[#3E533F]"
                      : "bg-[#856447]/10 text-[#6E5037]"
                  }`}
                >
                  {s.badge}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-medium text-ink sm:text-[1.7rem]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.text}</p>

              {s.tags && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-stone-200/80 bg-[#FAF7F2] px-3 py-1.5 text-xs font-medium text-stone-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={whatsappFor(s.service)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Perguntar sobre ${s.title} pelo WhatsApp`}
                className="mt-8 inline-flex min-h-11 items-center gap-1.5 self-start border-t border-[#856447]/15 pt-4 text-sm font-semibold text-[#856447] transition-colors hover:text-[#6E5037] sm:mt-auto sm:pt-5"
              >
                Perguntar pelo WhatsApp
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

