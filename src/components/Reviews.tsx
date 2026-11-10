import { Star } from "lucide-react";
import { SITE } from "@/lib/site";

const reviews = [
  {
    name: "Lia Candida",
    tag: "Alopecia",
    text: "Cheguei bastante insegura por causa da minha alopecia, sem saber o que fazer, e ela me acolheu com muita atenção e paciência. Ouviu com calma, explicou tudo e indicou o tratamento certo... Hoje vejo uma evolução real!",
    span: "lg:col-span-2",
  },
  {
    name: "Angélica Piva",
    tag: "Local Guide",
    text: "Faço procedimentos com a Letícia desde 2020, e o que mais me faz voltar é a honestidade. Ela sempre diz o que realmente vale a pena fazer e o que não faz sentido. Essa sinceridade faz toda a diferença.",
    span: "lg:col-span-2",
  },
  {
    name: "Vanessa Candito",
    tag: "Segurança e confiança",
    text: "Explica cada procedimento com clareza, detalhando todas as etapas. Sua organização e disponibilidade transmitem segurança e confiança durante todo o processo.",
    span: "lg:col-span-2",
  },
  {
    name: "Luciana Manfroi",
    tag: null,
    text: "Extremamente capacitada, cuidadosa e transmite muita segurança. Recepção maravilhosa, lugar de confiança que recomendo de olhos fechados!",
    span: "lg:col-span-3",
  },
  {
    name: "Carina Sartor Henrique",
    tag: null,
    text: "A anos faço tratamento de pele na clínica e os resultados sempre superaram minhas expectativas. O espaço é lindo.",
    span: "lg:col-span-3",
  },
];

function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-[#9E7B5C] text-[#9E7B5C]`} />
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="depoimentos" className="bg-[#FAF7F2] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#856447]">
              Depoimentos
            </p>
            <h2 data-reveal className="mt-5 text-4xl font-medium text-ink sm:text-5xl">
              Quem já passou por aqui fala da{" "}
              <em className="font-normal text-[#856447]">sinceridade</em> antes de falar do resultado.
            </h2>
          </div>
          <a
            data-reveal
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-4 rounded-2xl border border-[#856447]/[0.15] bg-white/85 px-6 py-4 transition-colors hover:border-[#856447]/40"
            aria-label="Ver avaliações no Google"
          >
            <span className="font-display text-5xl font-medium text-ink tabular-nums">5.0</span>
            <span className="flex flex-col gap-1">
              <Stars />
              <span className="text-xs text-muted">Avaliações reais no Google</span>
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              data-reveal
              className={`flex flex-col rounded-3xl border border-[#856447]/[0.15] bg-white/85 p-7 backdrop-blur-sm sm:p-8 ${r.span} ${
                i === 2 ? "md:col-span-2" : ""
              }`}
            >
              <Stars className="size-3.5" />
              <blockquote className="mt-5 flex-1 font-display text-[1.35rem] leading-snug text-ink">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-stone-200/80 pt-4">
                <span className="text-sm font-semibold text-ink">{r.name}</span>
                {r.tag && (
                  <span className="rounded-full bg-[#3E533F]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3E533F]">
                    {r.tag}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

