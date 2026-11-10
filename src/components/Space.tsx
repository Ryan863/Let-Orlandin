import Image from "next/image";
import { Clock, Lock, Sprout } from "lucide-react";

const points = [
  { icon: Lock, text: "Consultório privativo na Sala 501, para falar sobre queda de cabelo sem constrangimento." },
  { icon: Clock, text: "Hora marcada e dedicação total ao paciente da vez, sem sala de espera cheia." },
  { icon: Sprout, text: "Recepção biofílica com luz suave de LED, pensada para o corpo desacelerar antes da consulta." },
];

export default function Space() {
  return (
    <section id="espaco" className="bg-[#EFE8DE] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:py-6">
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#856447]">
            O espaço
          </p>
          <h2 data-reveal className="mt-5 text-4xl font-medium text-ink sm:text-5xl">
            Um consultório desenhado para você chegar{" "}
            <em className="font-normal text-[#856447]">sem pressa</em> e sair com clareza.
          </h2>
          <p data-reveal className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Para quem busca ajuda com queda capilar, o primeiro passo costuma
            ser o mais difícil. Por isso a Letícia criou um lugar tranquilo,
            reservado e acolhedor, onde cada consulta é conduzida com atenção
            total e sem relógio correndo.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} data-reveal className="flex gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-[#3E533F]/25 bg-[#FAF7F2] text-[#3E533F]">
                  <Icon className="size-[18px]" />
                </span>
                <span className="text-[15px] leading-relaxed text-stone-700">{text}</span>
              </li>
            ))}
          </ul>

          <figure data-reveal className="mt-10 flex items-center gap-4 border-t border-[#856447]/20 pt-8">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-[#856447]/25">
              <Image
                src="/leticia-retrato.jpg"
                alt="Retrato de Letícia Orlandin"
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <figcaption>
              <span className="block font-display text-2xl font-medium text-ink">Letícia Orlandin</span>
              <span className="block text-xs uppercase tracking-[0.16em] text-muted">
                Estética avançada &amp; tricologia
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:gap-5">
          <div data-reveal className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-[#856447]/15">
            <Image
              src="/recepcao-lounge.jpg"
              alt="Recepção com parede curva em tom nude, logo em LED, plantas e sofá"
              fill
              sizes="(min-width: 1024px) 28vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#856447]/15">
              <Image
                src="/sala-clinica.jpg"
                alt="Sala de procedimentos clara com maca moderna, persiana e plantas"
                fill
                sizes="(min-width: 1024px) 28vw, 46vw"
                className="object-cover"
                style={{ objectPosition: "30% center" }}
              />
            </div>
            <div
              data-reveal
              className="flex flex-1 flex-col justify-center rounded-[2rem] bg-[#3E533F] p-6 text-[#F1ECE2]"
            >
              <span className="font-display text-4xl italic text-[#D9C4A5]">Sala 501</span>
              <span className="mt-1 text-sm leading-snug text-[#D6D0C4]">
                Centro Profissional Alcides de Gasperi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

