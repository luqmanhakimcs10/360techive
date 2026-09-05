import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* clears the fixed header, which measures 73px at its tallest */}
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
