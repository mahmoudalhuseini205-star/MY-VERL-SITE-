import type tr from "../tr/home";

const home: typeof tr = {
  hero: {
    eyebrow: "VERL Systems · Web · Automation · AI",
    lines: ["We build the", "systems your", "business runs on."],
    sub: "Websites, automation and AI from one accountable studio. We design them, build them and keep them running.",
  },
  statement: {
    index: "01 — Principle",
    lines: ["Most of what your team", "does by hand every day", "can run as a system."],
    nodes: ["WEB", "AI", "AUTOMATION", "CRM", "DATA"],
  },
  capabilities: {
    index: "02 — Capabilities",
    title: "Web, automation and AI in one system.",
    intro: "Each works on its own. Combined, they share data and remove the hand-offs between your tools.",
  },
  // The three lines the seam splits into (Home 3).
  seam: ["Web", "Automation", "AI"],
  work: {
    index: "03 — Work",
    title: "Projects and demo systems.",
    intro: "Client projects and demo systems. Every demo is labelled, and results come only from real clients.",
    all: "See all work",
  },
  approach: {
    index: "04 — Approach",
    title: "Four phases, each ending with a deliverable.",
    link: "See how each phase works",
  },
  standards: {
    index: "05 — Standards",
    title: "What we commit to.",
  },
  system: {
    index: "06 — System",
    title: "One request, end to end.",
    intro: "Pick a scenario. See how the parts connect, and where the system takes the work off your team.",
    scenarios: [
      {
        label: "A client sends a message",
        steps: [
          { node: "WhatsApp", body: "Clients can write at midnight; no message gets lost." },
          { node: "AI assistant", body: "Answers common questions and clarifies what the client needs." },
          { node: "Calendar", body: "A free slot is chosen and the booking lands in the calendar." },
          { node: "Team", body: "Your team is notified with a short summary." },
        ],
      },
      {
        label: "A website enquiry arrives",
        steps: [
          { node: "Website", body: "A visitor fills in the form or asks for a quote." },
          { node: "CRM", body: "The enquiry is saved to the client record, with where it came from." },
          { node: "Automation", body: "It is assigned to the right person and a first reply goes out at once." },
          { node: "Follow-up", body: "If there is no reply, a reminder goes out on its own." },
        ],
      },
      {
        label: "The weekly report is prepared",
        steps: [
          { node: "Data", body: "Sales, bookings and messages are gathered in one place." },
          { node: "Automation", body: "The report is prepared at the same time every week, with no one assembling it." },
          { node: "AI", body: "The notable changes are turned into a short, readable summary." },
          { node: "Team", body: "The summary is sent to the channel your team already uses." },
        ],
      },
    ],
  },
  company: {
    index: "07 — Company",
    lines: [
      "VERL Systems is led by its founder, Mahmud.",
      "He runs every project personally, from the first conversation to launch. You work directly with the person who designs and builds your system.",
    ],
    link: "More about the company",
  },
};

export default home;
