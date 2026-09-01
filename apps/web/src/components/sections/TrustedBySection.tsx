export function TrustedBySection() {
  return (
    <section className="border-y border-border/10 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {["Company One", "Company Two", "Company Three", "Company Four", "Company Five"].map(
            (name) => (
              <span
                key={name}
                className="select-none text-lg font-medium tracking-tight text-foreground/20 transition-colors hover:text-foreground/40"
              >
                {name}
              </span>
            )
          )}
        </div>
        <p className="mt-6 text-center text-xs text-muted/50">
          {`{/* TODO: replace with real client logos */}`}
        </p>
      </div>
    </section>
  );
}
