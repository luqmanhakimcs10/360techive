export interface NavLink {
  label: string;
  href: string;
}

/**
 * Navigation is deliberately short. Products, Work and About are sections of
 * the homepage rather than separate routes for now, so they are anchor links.
 * When any of them grows into its own page, change the href here and nothing
 * else needs to move.
 */
export const siteConfig = {
  name: "360 Techive",
  tagline:
    "We build custom software, digital products and intelligent systems.",
  contactEmail: "360techive@gmail.com",
  navLinks: [
    { label: "Services", href: "/#services" },
    { label: "AI Automation", href: "/ai-automation" },
    { label: "Products", href: "/#products" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  footerLinks: {
    company: [
      { label: "Custom solutions", href: "/#services" },
      { label: "Our products", href: "/#products" },
      { label: "Selected work", href: "/#work" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/contact" },
    ],
    explore: [
      { label: "AI Automation", href: "/ai-automation" },
      { label: "AI Employees", href: "/ai-employees" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;
