"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Como funciona a avaliação para queda capilar e alopecia?",
    a: "A consulta começa com um exame cuidadoso do couro cabeludo e com a escuta do seu histórico de saúde. Só depois disso a Letícia recomenda o tratamento ideal para o seu caso, explicando o porquê de cada escolha.",
  },
  {
    q: "Tenho medo de tratamentos estéticos exagerados. Como funciona o atendimento?",
    a: "Trabalhamos com respeito absoluto aos seus traços. Só recomendamos o que realmente faz sentido para a sua pele, e se algo não for necessário, você ouve isso com clareza.",
  },
  {
    q: "A consulta é transparente em relação a etapas e expectativas?",
    a: "Sim. Cada procedimento é explicado em detalhes, com etapas e expectativas realistas, garantindo clareza e segurança antes de qualquer aplicação.",
  },
  {
    q: "Os procedimentos capilares causam dor?",
    a: "São realizados com técnicas delicadas e protocolos de conforto, para que a experiência seja calma e tranquila do início ao fim.",
  },
  {
    q: "Como faço para agendar meu horário na Sala 501?",
    a: (
      <>
        O atendimento é pontual, com hora marcada. O agendamento é direto pelo{" "}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#856447] underline underline-offset-4 hover:text-[#6E5037]"
        >
          WhatsApp (54) 99986-9744
        </a>
        , de segunda a sexta, das 09:00 às 19:00.
      </>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="duvidas" className="bg-[#F4EEE5] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#856447]">
            Dúvidas frequentes
          </p>
          <h2 data-reveal className="mt-5 text-4xl font-medium text-ink sm:text-5xl">
            Antes de agendar, <em className="font-normal text-[#856447]">pergunte tudo.</em>
          </h2>
          <p data-reveal className="mt-5 text-base leading-relaxed text-muted">
            Não achou a sua dúvida? Escreva para a Letícia pelo WhatsApp.
          </p>
        </div>

        <div data-reveal className="lg:col-span-8">
          <ul className="divide-y divide-[#856447]/20 border-y border-[#856447]/20">
            {faqs.map((f, i) => {
              const open = openIndex === i;
              const btnId = `${baseId}-btn-${i}`;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q}>
                  <h3 className="!font-sans !text-base !leading-normal !tracking-normal">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-display text-2xl font-medium leading-snug text-ink">
                        {f.q}
                      </span>
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full border border-[#856447]/30 text-[#856447] transition-transform duration-300 ${
                          open ? "rotate-45 bg-[#856447] text-white" : ""
                        }`}
                      >
                        <Plus className="size-5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 text-base leading-relaxed text-muted">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

