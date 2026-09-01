"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";
import { siteConfig } from "@/config/site";
import { agents } from "@/config/agents";

const resourceLinks = [
  { label: "What is an AI Employee?", slug: "what-is-an-ai-employee" },
  { label: "How We Build Agents", slug: "how-we-build-agents" },
  { label: "Data Security & Compliance", slug: "data-security-and-compliance" },
  { label: "Costs & ROI", slug: "costs-and-roi" },
];

const getStartedLinks = [
  { label: "Book a Demo", href: "/demo" },
  { label: "See Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "Talk to Sales", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

interface DesktopLink {
  label: string;
  href?: string;
  isMega?: boolean;
}

const desktopLinks: DesktopLink[] = [
  { label: "AI Employees", isMega: true },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/10 bg-background/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {desktopLinks.map((link) => {
            if (link.isMega) {
              return (
                <div
                  key="mega"
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    AI Employees
                    <ChevronDown
                      className={`size-3 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-[580px] rounded-2xl border border-border/15 bg-surface p-6 shadow-xl"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                              Our AI Employees
                            </h3>
                            <ul className="space-y-1">
                              {agents.map((agent) => (
                                <li key={agent.slug}>
                                  <Link
                                    href={`/ai-employees/${agent.slug}`}
                                    onClick={() => setDropdownOpen(false)}
                                    className="block rounded-lg px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-foreground/5"
                                  >
                                    {agent.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-3 border-t border-border/10 pt-3">
                              <Link
                                href="/ai-employees"
                                onClick={() => setDropdownOpen(false)}
                                className="block rounded-lg px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                              >
                                View all AI Employees &rarr;
                              </Link>
                            </div>
                          </div>

                          <div>
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                              Resources
                            </h3>
                            <ul className="space-y-1">
                              {resourceLinks.map((r) => (
                                <li key={r.slug}>
                                  <span className="flex items-center justify-between rounded-lg px-3 py-1.5 text-sm text-muted">
                                    {r.label}
                                    <span className="text-[10px] uppercase tracking-wider text-muted/40">
                                      Soon
                                    </span>
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                              Get Started
                            </h3>
                            <ul className="space-y-1">
                              {getStartedLinks.map((g) => (
                                <li key={g.href}>
                                  <Link
                                    href={g.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className="block rounded-lg px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-foreground/5"
                                  >
                                    {g.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.href!}
                href={link.href!}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" variant="primary">
              Get a Demo
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-10 items-center justify-center rounded-lg text-muted hover:text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu — intentionally shows all pages, differs from desktop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/10 md:hidden"
          >
            <div className="flex flex-col gap-6 px-4 py-6">
              {siteConfig.navLinks.map((link) => {
                if (link.label === "Agents") {
                  return (
                    <div key={link.href} className="flex flex-col gap-4">
                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                          Our AI Employees
                        </h3>
                        <div className="flex flex-col gap-1">
                          {agents.map((agent) => (
                            <Link
                              key={agent.slug}
                              href={`/ai-employees/${agent.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-foreground/5"
                            >
                              {agent.name}
                            </Link>
                          ))}
                          <Link
                            href="/ai-employees"
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-primary"
                          >
                            View all AI Employees &rarr;
                          </Link>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                          Resources
                        </h3>
                        <div className="flex flex-col gap-1">
                          {resourceLinks.map((r) => (
                            <span
                              key={r.slug}
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted"
                            >
                              {r.label}
                              <span className="text-[10px] uppercase tracking-wider text-muted/40">
                                Soon
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                          Get Started
                        </h3>
                        <div className="flex flex-col gap-1">
                          {getStartedLinks.map((g) => (
                            <Link
                              key={g.href}
                              href={g.href}
                              onClick={() => setIsOpen(false)}
                              className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-foreground/5"
                            >
                              {g.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button size="sm" variant="primary" className="mt-2">
                Get a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
