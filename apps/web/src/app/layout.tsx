import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Shell } from "@/components/layout/Shell";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "360 Techive | Software, digital products and intelligent systems",
    template: "%s",
  },
  description:
    "We design and build custom web and mobile applications, interfaces, AI agents, automation and our own digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
