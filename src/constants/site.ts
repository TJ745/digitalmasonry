export const siteConfig = {
  name: "DigitalMasonry",
  tagline: "We Build Digital Products That Scale.",
  description:
    "DigitalMasonry is a full-stack software studio helping startups and businesses design and engineer world-class digital products — from idea to launch and beyond.",
  url: "https://digitalmasonry.dev",
  email: "hello@digitalmasonry.dev",
  phone: "+1 (415) 555-0192",
  location: "San Francisco, CA — Remote-first",
  availability: "Accepting new clients",
  calendarUrl: "https://cal.com/digitalmasonry",
  socials: {
    twitter: "https://twitter.com/digitalmasonry",
    linkedin: "https://linkedin.com/company/digitalmasonry",
    github: "https://github.com/digitalmasonry",
    dribbble: "https://dribbble.com/digitalmasonry",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 40, suffix: "+", label: "Technologies" },
] as const;

export const services = [
  {
    id: "website-development",
    icon: "Globe",
    title: "Website Development",
    summary:
      "Blazing-fast, pixel-perfect marketing sites, portfolios, and landing pages built for conversion and SEO.",
    deliverables: [
      "Responsive, cross-browser pixel-perfect design",
      "CMS integration (Contentful, Sanity, Notion)",
      "Core Web Vitals & Lighthouse 90+ optimization",
      "SEO-ready semantic markup & Open Graph",
      "Custom animations & micro-interactions",
    ],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "web-applications",
    icon: "AppWindow",
    title: "Web Applications",
    summary:
      "Complex, scalable web apps with rich interactivity — dashboards, portals, internal tools, and real-time systems.",
    deliverables: [
      "Full-stack architecture design",
      "Real-time features with WebSockets",
      "Role-based access control (RBAC)",
      "REST & GraphQL API design",
      "Comprehensive testing suite",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis"],
    featured: true,
  },
  {
    id: "mobile-apps",
    icon: "Smartphone",
    title: "Mobile Apps (iOS & Android)",
    summary:
      "Native-quality mobile experiences using React Native — single codebase, maximum performance.",
    deliverables: [
      "Cross-platform iOS & Android app",
      "Native device API integrations",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store & Play Store submission",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Firebase"],
    featured: true,
  },
  {
    id: "saas-products",
    icon: "Cloud",
    title: "SaaS Product Development",
    summary:
      "End-to-end SaaS platforms built for scale — from auth and billing to analytics and multi-tenancy.",
    deliverables: [
      "Multi-tenant architecture",
      "Stripe billing & subscription management",
      "Admin & customer dashboards",
      "Usage analytics & metering",
      "Onboarding flows & feature flags",
    ],
    tech: ["Next.js", "Stripe", "Postgres", "Clerk", "Vercel"],
    featured: true,
  },
  {
    id: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    summary:
      "Research-driven design systems, prototypes, and polished interfaces that users love and businesses trust.",
    deliverables: [
      "UX research & user journey mapping",
      "Wireframes & interactive prototypes",
      "Design system & component library",
      "Responsive design across all breakpoints",
      "Handoff-ready Figma files",
    ],
    tech: ["Figma", "FigJam", "Framer", "Lottie", "Zeroheight"],
    featured: true,
  },
  {
    id: "mvp-development",
    icon: "Rocket",
    title: "MVP Development",
    summary:
      "Zero-to-launch in weeks, not months. We help founders validate ideas fast without sacrificing quality.",
    deliverables: [
      "Rapid product scoping & technical spec",
      "Core feature set prioritization",
      "Functional MVP in 4–8 weeks",
      "Investor-ready demo build",
      "Post-launch iteration plan",
    ],
    tech: ["Next.js", "Supabase", "Vercel", "Stripe", "Resend"],
    featured: false,
  },
  {
    id: "maintenance-support",
    icon: "Shield",
    title: "Maintenance & Support",
    summary:
      "Ongoing engineering retainers to keep your product healthy, secure, and performing at its best.",
    deliverables: [
      "Monthly dependency & security audits",
      "Performance monitoring & alerting",
      "Bug triage & resolution SLAs",
      "Feature additions & enhancements",
      "Uptime monitoring & incident response",
    ],
    tech: ["Sentry", "Datadog", "PagerDuty", "GitHub Actions", "Vercel"],
    featured: false,
  },
  {
    id: "api-integrations",
    icon: "Link",
    title: "API Integrations",
    summary:
      "Connect your product to any third-party service — payments, communications, data, and more.",
    deliverables: [
      "Third-party API integration & abstraction",
      "Webhook setup & event handling",
      "OAuth 2.0 authentication flows",
      "Rate limiting & retry logic",
      "Integration documentation",
    ],
    tech: ["Stripe", "Twilio", "SendGrid", "HubSpot", "Zapier"],
    featured: false,
  },
  {
    id: "cloud-deployment",
    icon: "Server",
    title: "Cloud & Deployment",
    summary:
      "Infrastructure setup, CI/CD pipelines, and cloud architecture that scales with your growth.",
    deliverables: [
      "AWS / GCP / Vercel infrastructure setup",
      "Dockerized containerization",
      "CI/CD pipeline (GitHub Actions)",
      "Environment management (dev/staging/prod)",
      "SSL, CDN, and edge optimization",
    ],
    tech: ["AWS", "Docker", "Vercel", "GitHub Actions", "Terraform"],
    featured: false,
  },
  {
    id: "performance-optimization",
    icon: "Gauge",
    title: "Performance Optimization",
    summary:
      "Diagnose and eliminate bottlenecks — faster apps, happier users, higher conversion rates.",
    deliverables: [
      "Full Lighthouse & Web Vitals audit",
      "Bundle size analysis & tree-shaking",
      "Image & asset optimization",
      "Database query optimization",
      "CDN & caching strategy",
    ],
    tech: ["Webpack", "Turbopack", "Cloudflare", "Redis", "Vercel Edge"],
    featured: false,
  },
  {
    id: "seo-development",
    icon: "Search",
    title: "SEO-ready Development",
    summary:
      "Engineering-grade SEO — structured data, server-side rendering, and technical fundamentals that rank.",
    deliverables: [
      "Semantic HTML & accessibility (WCAG 2.1)",
      "Server-side rendering & static generation",
      "Structured data / schema.org markup",
      "Sitemap & robots.txt automation",
      "Meta & Open Graph optimization",
    ],
    tech: [
      "Next.js",
      "next-seo",
      "Schema.org",
      "Google Search Console",
      "Ahrefs",
    ],
    featured: false,
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce Solutions",
    summary:
      "High-conversion storefronts and custom commerce experiences that drive revenue.",
    deliverables: [
      "Custom storefront or headless CMS",
      "Product catalog & inventory management",
      "Checkout & payment gateway integration",
      "Order management & fulfilment",
      "Analytics & conversion optimization",
    ],
    tech: ["Next.js", "Shopify", "Stripe", "Medusa.js", "Sanity"],
    featured: false,
  },
  {
    id: "admin-dashboards",
    icon: "LayoutDashboard",
    title: "Admin Dashboards",
    summary:
      "Data-rich internal tools and dashboards that give your team full operational visibility.",
    deliverables: [
      "Custom data visualization & charts",
      "Real-time data streaming",
      "Advanced filtering & search",
      "Export to CSV / PDF",
      "Role-based access & audit logs",
    ],
    tech: ["Next.js", "Recharts", "TanStack Table", "Prisma", "PostgreSQL"],
    featured: false,
  },
  {
    id: "ai-integrations",
    icon: "Brain",
    title: "AI Integrations",
    summary:
      "Embed intelligence into your product — from LLM-powered features to custom AI workflows.",
    deliverables: [
      "OpenAI / Anthropic / Gemini integration",
      "RAG systems with vector databases",
      "AI-powered search & recommendations",
      "Document summarization & extraction",
      "Custom chatbot & assistant builds",
    ],
    tech: ["OpenAI", "LangChain", "Pinecone", "Anthropic", "Vercel AI SDK"],
    featured: true,
  },
  {
    id: "automation",
    icon: "Workflow",
    title: "Automation Systems",
    summary:
      "Replace manual processes with intelligent automation — from simple workflows to complex orchestration.",
    deliverables: [
      "Business process automation design",
      "Zapier / Make / n8n workflow builds",
      "Custom cron jobs & event-driven systems",
      "Email & notification automation",
      "Data pipeline & ETL automation",
    ],
    tech: ["n8n", "Zapier", "Make", "Temporal", "BullMQ"],
    featured: false,
  },
] as const;

export const featuredServices = services.filter((s) => s.featured);

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dive deep into your vision, market, and users. Strategy sessions, technical scoping, and a roadmap built around your business goals.",
    icon: "Lightbulb",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes evolve into high-fidelity prototypes. We design systems that are beautiful, accessible, and engineered for conversion.",
    icon: "Palette",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Clean, tested, production-ready code. Bi-weekly sprints with transparent progress — you always know where we are.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Zero-downtime deployments on world-class infrastructure. CI/CD pipelines, monitoring, and rollback strategies from day one.",
    icon: "Rocket",
  },
  {
    step: "05",
    title: "Scale",
    description:
      "Launch is just the beginning. We optimize, iterate, and scale your product as your user base grows.",
    icon: "TrendingUp",
  },
] as const;

export const projects = [
  {
    id: "apex-analytics",
    name: "Apex Analytics",
    industry: "SaaS / B2B",
    description:
      "A comprehensive analytics platform for growth teams — real-time dashboards, funnel analysis, and AI-powered insights that replace 3 tools in one.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Recharts", "OpenAI"],
    results: [
      "Reduced reporting time by 73%",
      "4,200+ active teams in first 6 months",
      "$1.2M ARR at 12-month mark",
    ],
    image: "/projects/apex.jpg",
    color: "from-indigo-500/20 to-violet-500/20",
    featured: true,
  },
  {
    id: "nexus-commerce",
    name: "Nexus Commerce",
    industry: "E-commerce",
    description:
      "A headless e-commerce platform for a fashion brand scaling from $500K to $8M GMV — custom storefront, inventory automation, and checkout optimization.",
    technologies: ["Next.js", "Shopify API", "Stripe", "Sanity", "Vercel"],
    results: [
      "3.2× improvement in conversion rate",
      "Page load time cut from 4.8s to 0.9s",
      "$8M GMV in first year",
    ],
    image: "/projects/nexus.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
    featured: true,
  },
  {
    id: "ledger-ai",
    name: "Ledger AI",
    industry: "Fintech",
    description:
      "A smart personal finance app with AI categorisation, predictive budgeting, and bank-grade security — available on iOS and Android.",
    technologies: ["React Native", "Expo", "Plaid", "OpenAI", "Supabase"],
    results: [
      "50K+ downloads in 3 months post-launch",
      "4.8★ App Store rating",
      "Featured by Apple as 'App of the Day'",
    ],
    image: "/projects/ledger.jpg",
    color: "from-amber-500/20 to-orange-500/20",
    featured: true,
  },
  {
    id: "bookflow",
    name: "BookFlow",
    industry: "Hospitality & Travel",
    description:
      "An enterprise booking and scheduling platform for a hotel chain — real-time availability, dynamic pricing engine, and revenue management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    results: [
      "28% increase in direct bookings",
      "OTA commission savings of $400K/yr",
      "Processes 15,000+ reservations/day",
    ],
    image: "/projects/bookflow.jpg",
    color: "from-sky-500/20 to-blue-500/20",
    featured: true,
  },
  {
    id: "peopleos",
    name: "PeopleOS",
    industry: "HR / Enterprise",
    description:
      "A modern HR management suite — onboarding, time-off, performance reviews, and payroll integrations for mid-size companies.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "WorkOS", "Resend"],
    results: [
      "Used by 200+ companies, 18,000 employees",
      "HR admin time reduced by 60%",
      "Replaced legacy systems at 3 Fortune 500s",
    ],
    image: "/projects/peopleos.jpg",
    color: "from-rose-500/20 to-pink-500/20",
    featured: true,
  },
  {
    id: "aria-ai",
    name: "Aria AI",
    industry: "Customer Experience / AI",
    description:
      "An AI-powered customer support platform — LLM-driven chat, intent routing, and seamless human handoff with full CRM integration.",
    technologies: ["Next.js", "OpenAI", "LangChain", "Pinecone", "Twilio"],
    results: [
      "87% of tickets resolved without human agent",
      "CSAT score improved from 3.1 to 4.7",
      "Support costs reduced by 65%",
    ],
    image: "/projects/aria.jpg",
    color: "from-violet-500/20 to-purple-500/20",
    featured: true,
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Co-founder & CEO",
    company: "Apex Analytics",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
    content:
      "DigitalMasonry built our entire platform from zero in 10 weeks. The quality of code, the design attention to detail, and the communication were all exceptional. They don't just build software — they build products.",
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "VP of Engineering",
    company: "Nexus Commerce",
    avatar: "/avatars/marcus.jpg",
    rating: 5,
    content:
      "We hired DigitalMasonry to rescue a struggling e-commerce rebuild. They delivered a stunning Next.js storefront that cut load times by 5× and immediately boosted our conversion rate. Genuinely impressive team.",
  },
  {
    id: 3,
    name: "Priya Kapoor",
    role: "Founder",
    company: "Ledger AI",
    avatar: "/avatars/priya.jpg",
    rating: 5,
    content:
      "The React Native app they built got featured by Apple on launch day. That says everything. DigitalMasonry understood our product vision better than any agency we'd worked with before.",
  },
  {
    id: 4,
    name: "James O'Brien",
    role: "CTO",
    company: "PeopleOS",
    avatar: "/avatars/james.jpg",
    rating: 5,
    content:
      "These are engineers who think like founders. They pushed back on features that would have over-complicated our MVP, saved us months of work, and shipped on time. I recommend them without hesitation.",
  },
  {
    id: 5,
    name: "Amara Diallo",
    role: "Head of Product",
    company: "BookFlow",
    avatar: "/avatars/amara.jpg",
    rating: 5,
    content:
      "Working with DigitalMasonry was a masterclass in how software should be built. Every decision was documented, every trade-off discussed. The product they delivered exceeded our expectations significantly.",
  },
] as const;

export const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "React Native", category: "Mobile" },
  { name: "Figma", category: "Design" },
  { name: "OpenAI", category: "AI" },
  { name: "Stripe", category: "Payments" },
] as const;

export const faqs = [
  {
    question: "How long does it take to build a typical project?",
    answer:
      "It depends on scope. An MVP or marketing site takes 3–6 weeks. A full-featured SaaS product typically takes 10–20 weeks. We'll give you a precise timeline in our discovery session based on your requirements.",
  },
  {
    question: "What does your development process look like?",
    answer:
      "We work in bi-weekly sprints with regular check-ins. You get access to a shared project tracker, weekly progress updates, and a staging environment to review every build. No black boxes — full transparency throughout.",
  },
  {
    question:
      "Do you work with early-stage startups or only established companies?",
    answer:
      "Both. We love working with founders who have a strong vision but need a technical partner to bring it to life. We're also experienced with scaling established products and fixing legacy codebases.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer project-based pricing for defined scopes and retainer arrangements for ongoing work. Project quotes are delivered after a discovery call. We don't do one-size-fits-all packages — every engagement is scoped specifically to your needs.",
  },
  {
    question: "Will I own the code and IP when we're done?",
    answer:
      "Absolutely. You own 100% of the source code, designs, and IP. We hand over everything in an organized repository with full documentation. No vendor lock-in, ever.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer maintenance retainers that cover bug fixes, security updates, dependency upgrades, and feature additions. Many clients stay with us long-term on a monthly retainer after launch.",
  },
  {
    question: "What makes DigitalMasonry different from other agencies?",
    answer:
      "We're engineers who think like founders. We've built and scaled our own products, so we understand what matters beyond the code — conversion, retention, and growth. We treat your product as if it were ours.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Absolutely. We're experienced at augmenting existing engineering teams — whether that means leading a project, taking on a specific workstream, or providing design and architecture guidance alongside your developers.",
  },
] as const;

export const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
] as const;
