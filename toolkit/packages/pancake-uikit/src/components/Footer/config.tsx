import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.astrofi.org/contact-us",
      },
      {
        label: "Blog",
        href: "https://astrofi.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.astrofi.org/contact-us/telegram",
      },
      {
        label: "AFI",
        href: "https://docs.astrofi.org/tokenomics/afi",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.astrofi.org/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.astrofi.org/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.astrofi.org/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/astrofinanceai",
      },
      {
        label: "Documentation",
        href: "https://docs.astrofi.org",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.astrofi.org/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.astrofi.org/audits",
      },
      {
        label: "Careers",
        href: "https://docs.astrofi.org/hiring/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/SARCOIN2",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://x.com/SARCOIN",
  },
  {
    label: "Facebook",
    icon: "Facebook",
    href: "https://m.facebook.com/groups/701466432115865/?ref=share&mibextid=NSMWBT",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
