/**
 * Contact page content.
 *
 * Kept out of the component so the copy can be edited without touching
 * layout, and so a real address or phone number can be added later in one
 * place. Nothing here claims a fact the company cannot stand behind: no
 * invented office, no response time we would struggle to keep, no client
 * names, no numbers.
 *
 * Tone: written for people who commission serious work. Assured and precise,
 * never loud. The reader is assumed to be senior, short of time, and able to
 * tell the difference between confidence and noise.
 *
 * Copy rule for this file: plain sentences, no dashes of any kind.
 */

export interface Engagement {
  label: string;
  description: string;
  /** Prefills the mail subject so enquiries arrive already sorted. */
  subject: string;
}

/**
 * We build for clients. That is the whole business, so these are the three
 * places client work begins rather than a menu of relationships.
 */
export const engagements: Engagement[] = [
  {
    label: "A new product",
    description:
      "An idea, a market you understand, and nothing built yet. We shape it into something specific enough to build and small enough to launch.",
    subject: "New product enquiry",
  },
  {
    label: "A rebuild",
    description:
      "Software that carried you this far and now holds you back. We assess what exists, then replace it without stopping the business that depends on it.",
    subject: "Rebuild enquiry",
  },
  {
    label: "Continuing work",
    description:
      "A product already live that needs a team to keep building it properly, at a standard your name can sit behind.",
    subject: "Continuing work enquiry",
  },
];

/** What actually happens after the form is sent. */
export const conversationSteps = [
  {
    step: "01",
    title: "Someone senior reads it",
    body: "Your enquiry goes to the people who would do the work. There is no qualification call and no account manager between you and an answer.",
  },
  {
    step: "02",
    title: "We ask about the business, not the feature list",
    body: "How the work is done today, who it slows down, what it costs when it goes wrong. The requirement worth building is almost always underneath the one you were given.",
  },
  {
    step: "03",
    title: "You get a considered view",
    body: "What we believe it takes, where the risk sits, what we would build first and what we would leave until later. Including when the honest answer is that you need less than you were told.",
  },
  {
    step: "04",
    title: "Then a proposal, if we are the right firm",
    body: "Scope, sequence and cost set out in writing, with the assumptions stated plainly so nothing is discovered halfway through.",
  },
];

/** The questions that decide whether an enquiry gets written at all. */
export const contactFaqs = [
  {
    label: "We have our own team. Can you work alongside them?",
    content:
      "Yes, and it is often the better arrangement. We can take one product, one platform or one part of the system while your team holds the rest, working to the review and release process you already run rather than imposing ours.",
  },
  {
    label: "Can you take on software somebody else built?",
    content:
      "Regularly. We read the codebase and map what is actually there before recommending anything, then tell you plainly whether it is worth continuing or worth replacing. We would rather lose the larger piece of work than bill you for both.",
  },
  {
    label: "Who owns the code and the intellectual property?",
    content:
      "You do, in full, from the first commit. You receive the repositories, the infrastructure and the documentation, and you are free to take the work to another team at any point. Nothing is held back as leverage.",
  },
  {
    label: "How is confidentiality handled?",
    content:
      "We will sign your agreement before the first detailed conversation, or provide ours if that is simpler. Your work is never shown, referenced or published as a case study without your written approval.",
  },
  {
    label: "Do we need a finished brief before approaching you?",
    content:
      "No. A brief is useful, but a clear account of the problem is worth more than a specification written around a solution nobody has tested yet. If you have neither, that is precisely what the first conversation is for.",
  },
  {
    label: "How is work priced and scheduled?",
    content:
      "Defined pieces of work are quoted as fixed scope. Continuing product work runs on a monthly basis with an agreed team and a plan you can redirect each cycle. Either way, the numbers and the sequence are agreed before anything begins.",
  },
];

/** Shown beside the form. Practical, and all of it true today. */
export const contactNotes = [
  "Every enquiry is answered, including the ones we are not the right firm for.",
  "You will speak with the people who would build it, not an account manager.",
  "What you share stays with us and is never published without your approval.",
];
