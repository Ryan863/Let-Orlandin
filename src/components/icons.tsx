import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.43 15.1L2 22l5.05-1.55A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3 .92.98-2.93-.2-.31a8.15 8.15 0 1 1 6.67 3.64Zm4.47-6.1c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.36-1.69c-.14-.25-.02-.38.1-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.36 1 2.52c.12.17 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 8.5V7c0-.8.5-1.2 1.2-1.2H17V3h-2.4C12.3 3 11 4.5 11 6.8v1.7H8.5V12H11v9h3v-9h2.6l.4-3.5H14Z" />
    </svg>
  );
}

