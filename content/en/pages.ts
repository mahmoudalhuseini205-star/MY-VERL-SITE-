import type tr from "../tr/pages";

const pages: typeof tr = {
  finalCta: {
    index: "Start",
    lines: ["Tell us what", "you want to build."],
    body: "Five short questions. Your answers open in WhatsApp as a ready message, and we reply there.",
  },
  capabilities: {
    meta: {
      title: "Capabilities | VERL Systems",
      description: "Web platforms, automation and AI systems, designed to work as one system.",
    },
    eyebrow: "Capabilities",
    lines: ["Web, automation", "and AI, built", "as one system."],
    body: "Each capability works on its own. The difference shows when all three share data and pass work to each other.",
    connect: {
      index: "Together",
      title: "How the three work together.",
      body: "One example of a connected flow. Every business is different, so we draw your version in the Blueprint phase.",
      flow: [
        "A client finds you online",
        "A web page captures their inquiry",
        "Automation logs it and notifies the team",
        "An AI assistant answers questions and books a time",
        "The team sees everything in one place",
      ],
    },
    detail: {
      eyebrow: "Capability",
      includes: "What it includes",
      build: "How we build it",
      related: "Related work",
      others: "Other capabilities",
      all: "All capabilities",
    },
  },
  work: {
    meta: {
      title: "Work | VERL Systems",
      description: "Real client projects and demo systems built by VERL Systems.",
    },
    eyebrow: "Work",
    lines: ["Systems", "we’ve built."],
    body: "Client projects and demo systems. A demo shows what a system does. Results come only from real clients.",
    list: "Projects",
  },
  approach: {
    meta: {
      title: "Approach | VERL Systems",
      description: "Discover, Blueprint, Build and Run: what happens in each phase and what you receive.",
    },
    eyebrow: "Approach",
    lines: ["Designed first.", "Then built."],
    body: "Every project moves through the same four phases. Each ends with a deliverable you keep, and the next phase builds on it.",
    what: "In this phase",
    phases: [
      [
        "A first conversation about your business and its goals",
        "A look at the tools you use and how work moves between them",
        "Finding where time is spent by hand and where clients are lost",
      ],
      [
        "The system drawn as a flow diagram, step by step",
        "A written scope: what is built, and what is not",
        "A timeline with clear milestones",
      ],
      [
        "Built in short stages you can see and try",
        "Tested with real scenarios before launch",
        "Launched only when every connection works",
      ],
      [
        "Monitoring after launch",
        "Support when something needs attention",
        "Improvements based on how the system is used",
      ],
    ],
    principle: {
      index: "Principle",
      title: "We draw it before we build it.",
      body: "Most mistakes in a system can be caught on paper. In the Blueprint phase we walk through the flow with you and agree on the scope.",
    },
  },
  company: {
    meta: {
      title: "Company | VERL Systems",
      description: "VERL Systems is a founder-led studio building web platforms, automations and AI systems for businesses across Türkiye, the Middle East and Europe.",
    },
    eyebrow: "Company",
    lines: ["A founder-led", "digital systems studio."],
    body: "We design and build the web platforms, automations and AI systems businesses run on. We work remotely and on-site with businesses across Türkiye, the Middle East and Europe.",
    positioning: {
      index: "01 — What we do",
      title: "Three capabilities, offered as one.",
      body: "A website, an automation or an assistant does most when it connects to everything around it. So we offer all three together. We work with businesses in any sector that want to grow without adding manual work.",
    },
    founder: {
      index: "02 — Founder",
      lines: [
        "VERL Systems is led by its founder, Mahmud.",
        "He runs every project personally, from the first conversation to launch. You work directly with the person who designs and builds your system.",
      ],
      name: "Mahmud",
      role: "Founder",
    },
    principles: {
      index: "03 — Principles",
      items: [
        {
          title: "Connected from the start.",
          body: "We plan each piece with the tools it has to work with, so nothing gets copied by hand.",
        },
        {
          title: "Proof comes from real clients.",
          body: "We publish numbers only from real clients. Every demo system is labelled as a demo.",
        },
        {
          title: "Built to run.",
          body: "We design for the day after launch, with a clear structure, monitoring, and changes that need no rebuild.",
        },
        {
          title: "You can judge our craft here.",
          body: "We designed and built this site ourselves. It is the first example of how we would build yours.",
        },
      ],
    },
    standards: { index: "04 — Standards", title: "What we commit to." },
    facts: {
      index: "05 — Facts",
      items: [
        { label: "Serving", value: "Türkiye, Middle East, Europe" },
        { label: "Working", value: "On-site and remote" },
        { label: "Languages", value: "Turkish, English, Arabic" },
      ],
      phone: "Phone",
      email: "Email",
    },
  },
  start: {
    meta: {
      title: "Start a project | VERL Systems",
      description: "Describe your project in five short questions. Your brief opens in WhatsApp, ready to send.",
    },
    eyebrow: "Start a project",
    title: "Describe your project in five short questions.",
    body: "Your answers open in WhatsApp as a ready message. Nothing is saved on this site.",
    direct: {
      lead: "Rather skip the questions?",
      label: "Message us on WhatsApp",
      message: "Hello VERL Systems, I’d like to talk about a project.",
    },
    step: "Step",
    of: "/",
    back: "Back",
    next: "Next",
    edit: "Edit",
    optional: "optional",
    needs: {
      question: "What do you need?",
      helper: "Choose one or more.",
      options: {
        web: "Web platform",
        automation: "Automation",
        ai: "AI system",
        unsure: "Not sure yet",
      },
    },
    business: {
      question: "Tell us about your business.",
      name: "Business name",
      link: "Website or Instagram",
      linkHelper: "Add it if you have one.",
    },
    goal: {
      question: "What do you want to achieve?",
      helper: "A few sentences are enough.",
    },
    timeline: {
      question: "When would you like to start?",
      options: {
        asap: "As soon as possible",
        months: "Within 1–3 months",
        later: "Later this year",
        flexible: "Flexible",
      },
    },
    person: {
      question: "What’s your name?",
      name: "Your name",
    },
    summary: {
      title: "Your brief",
      helper: "WhatsApp opens with this message ready. You can review it before sending.",
      send: "Open in WhatsApp",
    },
    message: {
      greeting: "Hello VERL Systems, I’d like to start a project.",
      needs: "Need",
      business: "Business",
      link: "Website / Instagram",
      goal: "Goal",
      timeline: "Timeline",
      name: "Name",
    },
  },
};

export default pages;
