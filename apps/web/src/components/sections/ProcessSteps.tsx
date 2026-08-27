export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We audit your department's workflows, tools, and pain points. You tell us which business functions need automation and we map the data sources, decision points, and handoffs involved.",
  },
  {
    num: "02",
    title: "Agent Architecture Design",
    description:
      "We design a purpose-built AI agent for each department: what tools it connects to, how it reasons, which humans it escalates to, and how it measures success.",
  },
  {
    num: "03",
    title: "Build & Integrate",
    description:
      "Each agent is built, connected to your existing stack (CRM, helpdesk, accounting, calendars), and tested against real scenarios. No rip-and-replace — agents layer onto what you already use.",
  },
  {
    num: "04",
    title: "Operate & Improve",
    description:
      "We monitor every agent's performance, retrain on new data, and ship improvements weekly. Your team gets a dashboard showing resolution rates, time saved, and ROI per department.",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <div key={step.num} className="flex flex-col gap-3">
          <span className="font-serif text-5xl font-light leading-none text-primary">
            {step.num}
          </span>
          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
