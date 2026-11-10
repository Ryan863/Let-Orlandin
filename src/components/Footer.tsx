import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const a = SITE.address;
  return (
    <footer className="on-dark bg-[#2D3E2E] text-[#F1ECE2]">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <h2
          data-reveal
          className="mx-auto max-w-3xl text-4xl font-medium text-[#FAF7F2] sm:text-5xl lg:text-6xl"
        >
          O cuidado com a sua autoestima começa com uma{" "}
          <em className="font-normal text-[#D9C4A5]">conversa transparente.</em>
        </h2>
        <a
          data-reveal
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#856447] px-9 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#6E5037]"
        >
          <WhatsAppIcon className="size-5" />
          Agendar Consulta de Avaliação
        </a>
      </div>

      <div className="border-t border-[#EFE8DE]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[0.12em] text-[#FAF7F2]">
              LETÍCIA ORLANDIN
            </p>
            <p className="mt-1.5 text-[10px] tracking-[0.2em] text-[#C9B79C]">
              ESTÉTICA AVANÇADA &amp; TRICOLOGIA
            </p>
            <address className="mt-5 text-sm not-italic leading-relaxed text-[#D6D0C4]">
              {a.street} - {a.room}
              <br />
              {a.district}, {a.city} - {a.state}
              <br />
              <span className="tabular-nums">{SITE.phoneIntl}</span>
            </address>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-10 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center text-[#D6D0C4] transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-[#D6D0C4] transition-colors hover:text-white"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-[#EFE8DE]/10">
          <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-[#B7B0A3] sm:px-8">
            © 2026 Letícia Orlandin Estética Avançada &amp; Tricologia · CNPJ{" "}
            <span className="tabular-nums">{SITE.cnpj}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
