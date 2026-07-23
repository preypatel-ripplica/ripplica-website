export const siteConfig = {
  name: "Ripplica",
  url: "https://ripplica.com",
  appUrl: "https://app.ripplica.com",
  description:
    "Ripplica builds AI tools for healthcare, content creation, marketing, browser automation, and QA — serving 1000+ customers. VC-backed, built by gold medalists from IITs and BITS.",
};

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Case Study", href: "/case-study" },
];

export const footerLinks: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case Study", href: "/case-study" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
