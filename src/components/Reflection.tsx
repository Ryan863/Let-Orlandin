import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const premises = [
  {
    n: "01",
    title: "Investigação real da causa",
    text: "Antes de qualquer protocolo, olhamos para a origem: histórico de saúde, rotina e o estado do couro cabeludo e da pele. Tratar só o sintoma superficial é gastar tempo e dinheiro.",
  },
  {
    n: "02",
    title: "Sinceridade sobre o que compensa",
    text: "Se um procedimento não faz sentido para você, a Letícia diz. Indicamos somente o que tem chance real de resultado, e desaconselhamos o excesso.",
  },
  {
    n: "03",
    title: "Evolução acompanhada de perto",
    text: "A biologia tem o seu tempo. Acompanhamos cada etapa com calma e segurança, ajustando o plano conforme o seu corpo responde.",
  },
];

export default function Reflection() {
  return (
    <section
      id="tricologia"
      className="on-dark bg-[#2D3E2E] py-20 text-[#F1ECE2] lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9B79C]">
              Nossa abordagem
            </p>
            <h2
              data-reveal
              className="mt-5 text-4xl font-medium text-[#FAF7F2] sm:text-5xl"
            >
              O que realmente faz sentido para a sua pele e para o seu{" "}
              <em className="font-normal text-[#D9C4A5]">cabelo?</em>
            </h2>
            <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-[#D6D0C4]">
              Quem chega com queda de cabelo costuma chegar inseguro, depois de
              promessas que não entregaram. Aqui, a conversa vem antes do
              procedimento.
            </p>
            <a
              data-reveal
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full border border-[#EFE8DE]/40 px-7 text-sm font-semibold text-[#FAF7F2] transition-colors hover:bg-[#EFE8DE] hover:text-[#2D3E2E]"
            >
              <WhatsAppIcon className="size-4" />
              Conversar com a Letícia
            </a>
          </div>

          <ol className="lg:col-span-7">
            {premises.map((p) => (
              <li
                key={p.n}
                data-reveal
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-[#EFE8DE]/20 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-display text-4xl italic text-[#C9B79C] tabular-nums sm:text-5xl">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-[#FAF7F2] sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#D6D0C4]">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

