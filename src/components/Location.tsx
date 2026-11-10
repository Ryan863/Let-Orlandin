import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

const hours = [
  { day: "Segunda a Sexta-feira", time: "09:00 às 19:00", open: true },
  { day: "Sábado", time: "Fechado", open: false },
  { day: "Domingo", time: "Fechado", open: false },
];

export default function Location() {
  const a = SITE.address;
  return (
    <section id="contato" className="bg-[#FAF7F2] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#856447]">
            Localização &amp; contato
          </p>
          <h2 data-reveal className="mt-5 text-4xl font-medium text-ink sm:text-5xl">
            Sala 501, no coração da <em className="font-normal text-[#856447]">Cidade Alta.</em>
          </h2>
        </div>

        <div
          data-reveal
          className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#856447]/[0.15] bg-white/85 backdrop-blur-sm lg:grid-cols-12"
        >
          <div className="relative min-h-72 lg:col-span-5 lg:min-h-full">
            <Image
              src="/fachada.jpg"
              alt="Fachada do prédio onde fica o consultório, na Av. Dr. Antônio Casagrande"
              fill
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="object-cover object-center"
            />
          </div>

          <div className="p-7 sm:p-10 lg:col-span-7">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-[#856447]" />
              <address className="text-base not-italic leading-relaxed text-stone-700">
                <strong className="block font-display text-2xl font-medium text-ink">
                  {a.building}
                </strong>
                {a.street} - {a.room}
                <br />
                {a.district}, {a.city} - {a.state}, <span className="tabular-nums">{a.zip}</span>
              </address>
            </div>

            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#856447]/40 px-6 text-sm font-semibold text-[#856447] transition-colors hover:bg-[#856447] hover:text-white"
            >
              <MapPin className="size-4" />
              Abrir no Google Maps
            </a>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="!font-sans text-xs font-semibold uppercase !tracking-[0.2em] text-[#856447]">
                  Horário de atendimento
                </h3>
                <table className="mt-4 w-full text-sm">
                  <caption className="sr-only">Horários de atendimento</caption>
                  <tbody className="divide-y divide-stone-200/80">
                    {hours.map((h) => (
                      <tr key={h.day}>
                        <th scope="row" className="py-3 pr-4 text-left font-medium text-ink">
                          {h.day}
                        </th>
                        <td
                          className={`py-3 text-right tabular-nums ${
                            h.open ? "text-stone-700" : "text-muted"
                          }`}
                        >
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-xs text-muted">Atendimento pontual com hora marcada.</p>
              </div>

              <div>
                <h3 className="!font-sans text-xs font-semibold uppercase !tracking-[0.2em] text-[#856447]">
                  Canais oficiais
                </h3>
                <ul className="mt-4 space-y-1 text-sm">
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 font-medium text-ink hover:text-[#856447]"
                    >
                      <WhatsAppIcon className="size-5 text-[#3E533F]" />
                      <span className="tabular-nums">{SITE.phoneDisplay}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="flex min-h-11 items-center gap-3 font-medium text-ink hover:text-[#856447]"
                    >
                      <Phone className="size-5 text-[#3E533F]" />
                      Ligar agora
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 font-medium text-ink hover:text-[#856447]"
                    >
                      <InstagramIcon className="size-5 text-[#3E533F]" />
                      {SITE.instagramHandle}
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 font-medium text-ink hover:text-[#856447]"
                    >
                      <FacebookIcon className="size-5 text-[#3E533F]" />
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

