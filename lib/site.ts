export const siteConfig = {
  name: "Ripplica",
  url: "https://ripplica.com",
  appUrl: "https://app.ripplica.com",
  description:
    "Ripplica helps teams build, launch, and scale digital experiences with clarity.",
};

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Demo", href: "/#demo" },
  { label: "Features", href: "/#features" },
  { label: "Case Study", href: "/case-study" },
];

export const footerLinks: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case Study", href: "/case-study" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
