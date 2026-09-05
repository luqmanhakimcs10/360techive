/**
 * Everything the homepage says about the company lives here.
 *
 * Sections read from this file and render whatever they find, so adding a
 * service, a product, a project or a research area is a data edit rather than
 * a component edit. Order in these arrays is the order on the page.
 *
 * Copy rule for this file: plain sentences, no dashes of any kind.
 */

export type ProductStatus = "building" | "beta" | "research" | "live";

export interface Capability {
  /** Stable key, also used as the preview id. */
  id: string;
  name: string;
  description: string;
  /** Three short nouns shown inside the preview panel. */
  detail: [string, string, string];
}

export interface Product {
  name: string;
  category: string;
  status: ProductStatus;
  description: string;
  /** Stable key used to select the correct preview mockup. */
  mockId: string;
  /** External URL for live/shipped products. Opens in a new tab. */
  url?: string;
  /** Name of the featured project, shown alongside the View Project link. */
  projectName?: string;
}

export interface LabArea {
  name: string;
  note: string;
}

export interface Project {
  title: string;
  sector: string;
  problem: string;
  built: string;
  approach: string;
  outcome: string;
}

/** Section 3. Each one gets an interface preview, so keep the list tight. */
export const capabilities: Capability[] = [
  {
    id: "web-apps",
    name: "Web Applications",
    description:
      "Powerful web applications built around real business requirements, from the first internal tool to the platform your whole company runs on.",
    detail: ["Dashboards", "Workflows", "Roles"],
  },
  {
    id: "mobile",
    name: "Mobile Applications",
    description:
      "Mobile experiences designed for customers, teams and everyday workflows, on both iOS and Android.",
    detail: ["iOS", "Android", "Offline"],
  },
  {
    id: "web",
    name: "Web Development",
    description:
      "Fast, modern, scalable websites and digital platforms that stay quick as the content and the traffic grow.",
    detail: ["Marketing", "CMS", "Commerce"],
  },
  {
    id: "design",
    name: "UI and UX Design",
    description:
      "Interfaces that are simple to understand and enjoyable to use, designed before anyone writes code.",
    detail: ["Research", "Prototypes", "Systems"],
  },
  {
    id: "agents",
    name: "AI Agents and Chatbots",
    description:
      "Intelligent systems that can hold a conversation, work with your information and handle the repetitive parts of a job.",
    detail: ["Assistants", "Retrieval", "Actions"],
  },
  {
    id: "automation",
    name: "Business Automation",
    description:
      "Connect the systems you already use, remove repeated manual steps and turn a process into something that runs on its own.",
    detail: ["Integrations", "Triggers", "Reporting"],
  },
];

/** Section 2. Four stages, walked through on scroll. */
export const stages = [
  {
    name: "Problem",
    line: "Understanding the business and the real problem.",
    note: "We start with how the work happens today, who does it and where it breaks.",
  },
  {
    name: "Design",
    line: "Turning the idea into a clear experience.",
    note: "Flows, screens and the shape of the product, agreed before code starts.",
  },
  {
    name: "Build",
    line: "Developing the software and the technology.",
    note: "Built in working pieces you can use and react to, not one long silence.",
  },
  {
    name: "Launch",
    line: "Putting the product into the hands of real users.",
    note: "Release, watch how it is used, and keep improving it after day one.",
  },
] as const;

/**
 * Section 5.
 *
 * Five products: two reference real, live external projects (CoinStudy and
 * AQ Gimel). The other three are in active development. Descriptions are
 * original and do not reproduce marketing copy from any external site.
 */
export const products: Product[] = [
  {
    name: "WA Agent",
    category: "AI Automation",
    status: "building",
    mockId: "wa-agent",
    description:
      "A WhatsApp based AI agent that automates conversations, answers frequently asked questions and handles routine customer interactions directly inside WhatsApp. Built for businesses that already run their support and sales through messaging.",
  },
  {
    name: "Chatbots",
    category: "AI Products",
    status: "building",
    mockId: "chatbots",
    description:
      "Configurable AI chatbots you can embed on your own website or application. Each one is trained on your content and tuned for your domain, handling customer support and capturing leads around the clock.",
  },
  {
    name: "Websites",
    category: "Web Development",
    status: "live",
    mockId: "websites",
    url: "https://coinstudy.co/",
    projectName: "CoinStudy",
    description:
      "Custom web builds ranging from marketing sites to full web applications with live data and user accounts. Our featured project, CoinStudy, is a halal crypto research platform that screens cryptocurrencies against a multi factor Shariah compliance scoring framework, with live market data and an AI assisted asset checker.",
  },
  {
    name: "E-commerce Platforms",
    category: "E-commerce",
    status: "live",
    mockId: "ecommerce",
    url: "https://aqgimel.com/",
    projectName: "AQ Gimel",
    description:
      "Online storefronts with product catalogs, checkout and customer accounts, built or customized around a client's actual catalog and operations. Our featured project, AQ Gimel, is a full e-commerce build for a private label vegan cosmetics manufacturer, with a multi category product catalog, multi currency checkout and a membership tier for repeat business customers.",
  },
  {
    name: "Management System",
    category: "Business Tools",
    status: "building",
    mockId: "management",
    description:
      "Internal operations software that replaces spreadsheets and manual tracking for things like inventory, staff records and scheduling. Each system is built around the way a specific business actually runs, not a generic template.",
  },
];

/** Section 6. The current lab. */
export const labAreas: LabArea[] = [
  { name: "AI Agents", note: "Systems that carry a task through to the end." },
  { name: "Business Automation", note: "Removing the steps nobody should do twice." },
  { name: "Web Applications", note: "Platforms teams live in all day." },
  { name: "Mobile Products", note: "Software that travels with the work." },
  { name: "Internal Business Tools", note: "The unglamorous software that runs a company." },
  { name: "AI Powered Customer Experiences", note: "Support and sales that answer properly." },
  { name: "Intelligent Workflows", note: "Processes that decide, not just forward." },
  { name: "Digital Platforms", note: "Products with more than one kind of user." },
];

/**
 * Section 7. PLACEHOLDER PROJECTS.
 *
 * Written as project types rather than named clients, and deliberately free of
 * statistics. Swap in real case studies with the same shape when they are
 * cleared for publication.
 */
export const projects: Project[] = [
  {
    title: "Operations platform for a service business",
    sector: "Field services",
    problem:
      "Jobs were booked in one system, scheduled in a spreadsheet and invoiced in a third place. Nobody could answer where a job actually stood.",
    built:
      "One web application covering bookings, scheduling, job history and invoicing, with a mobile view for the crew on site.",
    approach: "Next.js, TypeScript, PostgreSQL",
    outcome:
      "One place to look for the state of any job, and an office team that stopped rekeying the same details three times.",
  },
  {
    title: "Customer support assistant",
    sector: "Ecommerce",
    problem:
      "The same questions arrived every day about delivery, returns and sizing, and the small support team answered each one by hand.",
    built:
      "An assistant trained on the company's own policies and product data, handing anything unusual to a person with the full history attached.",
    approach: "AI APIs, retrieval, Node.js",
    outcome:
      "Routine questions answered immediately, and a support team that now spends its day on the cases that need judgement.",
  },
  {
    title: "Internal approval workflow",
    sector: "Professional services",
    problem:
      "Approvals lived in email threads. Requests were missed, and no one could reconstruct who signed off on what.",
    built:
      "A workflow tool with structured requests, clear ownership at every step and a permanent record of each decision.",
    approach: "Laravel, MySQL, integrations",
    outcome:
      "Requests that move on their own and an audit trail that exists without anyone maintaining it.",
  },
];

/** Section 8. Grouped so the section reads as thinking, not a stack list. */
export const technology = {
  build: ["React", "Next.js", "TypeScript", "Node.js", "React Native"],
  platform: ["Laravel", "WordPress", "PostgreSQL", "MySQL"],
  intelligence: ["AI APIs", "Vector search", "Cloud infrastructure"],
} as const;

/** Section 9. */
export const principles = [
  {
    title: "We understand the business first",
    body: "Before anything gets designed we want to know how the work happens now, who touches it and what actually goes wrong.",
  },
  {
    title: "We design before we build",
    body: "Deciding how something should work is cheaper on a screen than in code. The design is where the arguments happen.",
  },
  {
    title: "We build systems that can grow",
    body: "The first version should not be the thing that has to be thrown away. We build so the second year is easier than the first.",
  },
  {
    title: "We automate where it makes sense",
    body: "Automation is worth it when a process is repetitive and well understood. When it is not, adding AI just hides the problem.",
  },
  {
    title: "We write software other people can maintain",
    body: "You should not need us forever. Clear structure, sensible naming and documentation are part of the work, not a favour.",
  },
  {
    title: "We work closely with you",
    body: "Short feedback loops, working software early and honest answers about what is hard. No long silences.",
  },
];
