export const SITE = {
  name: "Letícia Orlandin | Estética Avançada & Tricologia",
  shortName: "Letícia Orlandin",
  cnpj: "30.324.888/0001-89",
  phoneDisplay: "(54) 99986-9744",
  phoneIntl: "+55 54 99986-9744",
  phoneTel: "+5554999869744",
  instagramHandle: "@leticiaorlandin.estetica",
  instagram: "https://www.instagram.com/leticiaorlandin.estetica/",
  facebook: "https://www.facebook.com/leticiaorlandin.estetica/",
  maps: "https://maps.app.goo.gl/XbywvABPM8HYAEM19",
  address: {
    building: "Condomínio Centro Profissional Alcides de Gasperi",
    street: "Av. Dr. Antônio Casagrande, 466",
    room: "Sala 501",
    district: "Cidade Alta",
    city: "Bento Gonçalves",
    state: "RS",
    zip: "95700-342",
  },
  // Atualize com a contagem real de avaliações do Google antes de publicar.
  rating: { value: "5.0", count: 5 },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const WHATSAPP_NUMBER = "5554999869744";

/** Link oficial (mensagem padrão, exatamente como fornecido). */
export const WHATSAPP_URL =
  "https://wa.me/5554999869744?text=Ol%C3%A1%2C+Let%C3%ADcia%21+Visitei+o+site+e+gostaria+de+agendar+uma+consulta+de+avalia%C3%A7%C3%A3o+personalizada.";

/** Link de WhatsApp com mensagem contextual para um serviço específico. */
export function whatsappFor(service: string): string {
  const text = `Olá, Letícia! Visitei o site e gostaria de saber mais sobre ${service}. Podemos agendar uma avaliação?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const NAV_LINKS = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#tricologia", label: "Tricologia" },
  { href: "#espaco", label: "O Espaço" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;

