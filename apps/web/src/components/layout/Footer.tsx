import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "../ui/Logo";

/**
 * Deliberately short.
 *
 * The previous footer ran three full columns, one of which listed every AI
 * employee, and stood taller than some of the sections above it. A footer is
 * the last thing on the page, not another section: this one keeps the brand,
 * one line about the company, a direct way to reach us, and two trimmed link
 * groups. Legal moved into the bottom bar, which removes a whole column.
 *
 * The accent rule, the growing hairline on hover and the arrow shift are the
 * same gestures used by the capability index and the principles list, so the
 * page ends in the same voice it was written in.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const groups = [
    { title: "Company", links: siteConfig.footerLinks.company },
    { title: "Explore", links: siteConfig.footerLinks.explore },
  ];

  return (
    <footer className="border-t border-border/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12 lg:gap-16">
          {/* brand */}
          <div className="flex max-w-sm flex-col items-start gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />

            <Link
              href="/"
              aria-label={`${siteConfig.name}, home`}
              className="inline-flex transition-opacity duration-200 hover:opacity-80"
            >
              <Logo height={36} />
            </Link>

            <p className="text-pretty text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group mt-1 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="relative">
                {siteConfig.contactEmail}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                />
              </span>
              <span
                aria-hidden="true"
                className="text-primary transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                &rarr;
              </span>
            </a>
          </div>

          {/* links: their own columns in the grid above, paired on mobile */}
          <div className="col-span-1 grid grid-cols-2 gap-10 md:col-span-2 md:gap-12 lg:gap-16">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted/60">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group relative inline-block text-sm text-muted transition-colors duration-200 hover:text-foreground"
                      >
                        {/* absolute, so the rule never nudges the label out of
                            alignment with its column heading */}
                        <span
                          aria-hidden="true"
                          className="absolute -left-4 top-1/2 h-px w-0 -translate-y-1/2 bg-primary transition-all duration-300 ease-out group-hover:w-2.5 motion-reduce:transition-none"
                        />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-9 flex flex-col-reverse gap-4 border-t border-border/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted/70">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <nav aria-label="Legal" className="flex items-center gap-5">
            {siteConfig.footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted/70 transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
