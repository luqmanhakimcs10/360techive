export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "360 Techive",
  tagline: "We build AI Employees for every department.",
  navLinks: [
    { label: "Agents", href: "/agents" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  footerLinks: {
    product: [
      { label: "All Agents", href: "/ai-employees" },
      { label: "Support", href: "/ai-employees/support" },
      { label: "Sales", href: "/ai-employees/sales" },
      { label: "Finance", href: "/ai-employees/finance" },
      { label: "Research", href: "/ai-employees/research" },
      { label: "Documents", href: "/ai-employees/document" },
      { label: "Executive Assistant", href: "/ai-employees/executive-assistant" },
    ],
    company: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;
