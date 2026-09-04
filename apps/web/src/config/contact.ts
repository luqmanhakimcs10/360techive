/**
 * Contact page content.
 *
 * Kept out of the component so the copy can be edited without touching
 * layout, and so a real address, phone number or office can be added later in
 * one place. Nothing here claims a fact the company cannot stand behind:
 * no invented locations, no response time we would struggle to keep, no
 * client names.
 *
 * Copy rule for this file: plain sentences, no dashes of any kind.
 */

export interface EnquiryRoute {
  label: string;
  description: string;
  /** Prefills the mail subject so enquiries arrive already sorted. */
  subject: string;
}

/**
 * Three doors instead of one inbox. A brand asking about a rebuild and an
 * agency asking about overflow capacity are different conversations, and
 * routing them at the front saves a round of email working out which is which.
 */
export const enquiryRoutes: EnquiryRoute[] = [
  {
    label: "New project",
    description:
      "You have something to build, something to replace, or a process that has stopped keeping up.",
    subject: "New project enquiry",
  },
  {
    label: "Agencies and partners",
    description:
      "You need a build team behind your brand, design or marketing work. We are comfortable working quietly under yours.",
    subject: "Partnership enquiry",
  },
  {
    label: "Working with us",
    description:
      "You design or build things well and want to work together. Send us something you made rather than a template.",
    subject: "Working with 360 Techive",
  },
];

/** What actually happens after the form is sent. */
export const conversationSteps = [
  {
    step: "01",
    title: "A person reads it",
    body: "Not an autoresponder and not a sales sequence. Whoever replies will have read what you wrote.",
  },
  {
    step: "02",
    title: "We ask about the work, not the wishlist",
    body: "How the job gets done today, who it slows down and what happens when it goes wrong. That is usually where the real requirement is hiding.",
  },
  {
    step: "03",
    title: "You get our honest read",
    body: "What we think it takes, where the risk sits and what we would build first. Including when the answer is that you need less than you think.",
  },
  {
    step: "04",
    title: "Then a proposal, if it fits",
    body: "Scope, sequence and cost in writing, with the assumptions spelled out so there is nothing to discover halfway through.",
  },
];

/** Answers to the questions brands actually ask before the first call. */
export const contactFaqs = [
  {
    label: "We already have a team. Can you work alongside them?",
    content:
      "Yes, and often that is the better arrangement. We can take one product, one platform or one piece of the stack while your team keeps the rest, and we work to whatever review and release process you already run.",
  },
  {
    label: "Can you take over software somebody else built?",
    content:
      "Frequently. We start by reading the code and mapping what is there, then tell you honestly whether it is worth continuing or worth replacing. We would rather say the unpopular thing early than bill you for both.",
  },
  {
    label: "How do you handle confidential information?",
    content:
      "We will sign your NDA before the first detailed conversation, or send ours if you prefer. Nothing you share with us is used as a reference or a case study without your written approval.",
  },
  {
    label: "Do you need a finished brief to start?",
    content:
      "No. A brief helps, but a clear description of the problem is worth more than a specification written around a solution nobody has tested. If you have neither, the first conversation is where we work it out.",
  },
  {
    label: "How is work priced and scheduled?",
    content:
      "Defined pieces of work are quoted as fixed scope. Ongoing product work runs monthly, with an agreed team and a plan you can change each cycle. Either way you see the numbers and the sequence before anything is signed.",
  },
  {
    label: "Do you take on small projects?",
    content:
      "Yes, if the problem is worth solving. Some of the work we are proudest of started as one screen or one automation that removed a recurring headache.",
  },
];

/** Shown next to the form. Practical, and all of it true today. */
export const contactNotes = [
  "We reply to every enquiry, including the ones we are not right for.",
  "Your details stay with us and are never passed to anyone else.",
  "Written in English. We are happy to keep the whole project in writing.",
];
