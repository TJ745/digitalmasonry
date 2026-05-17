export const siteConfig = {
  name: "DigitalMasonry",
  tagline: "We Build Digital Products That Scale.",
  description:
    "DigitalMasonry is a full-stack software studio helping startups and businesses design and engineer world-class digital products — from idea to launch and beyond.",
  url: "https://digitalmasonry.co.uk",
  email: "thedigitalmasonry@gmail.com",
  phone: "+44 7308 213639",
  location: "London, UK — Remote-first",
  availability: "Accepting new clients",
  calendarUrl: "https://wa.me/447308213639",
  socials: {
    facebook: "https://facebook.com/digitalmasonry",
    twitter: "https://x.com/digitalmasonry",
    instagram: "https://instagram.com/digitalmasonry",
    linkedin: "https://linkedin.com/company/digitalmasonry",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "+", label: "Years Experience" },
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
    id: "technyon",
    name: "Technyon",
    industry: "E-commerce / Retail",
    description:
      "A premium product portfolio and e-commerce platform for a client selling high-end projectors and massage guns — immersive product showcases with integrated Stripe checkout.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Sanity CMS",
      "Stripe",
    ],
    results: [
      "40% increase in online conversion rate",
      "Sub-1.2s page load across all product pages",
      "Non-technical CMS for instant product updates",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    caseStudy: {
      overview:
        "Technyon's client needed a branded digital storefront to sell projectors and massage guns directly online. Their sales were fragmented across third-party marketplaces with no consistent brand experience or direct checkout.",
      solution:
        "We built a headless e-commerce platform with immersive product detail pages, a Sanity-powered CMS for non-technical catalogue management, and a Stripe checkout with order tracking. Each product category received a dedicated visual landing experience.",
      features: [
        "Immersive product pages with rich media and specifications",
        "Sanity CMS for managing products, pricing, and content",
        "Stripe-powered checkout with order confirmation emails",
        "SEO-optimised category pages and structured data",
        "Fully responsive, Core Web Vitals 90+ performance",
      ],
      impact: [
        { metric: "40%", description: "increase in online conversion rate" },
        { metric: "1.2s", description: "average product page load time" },
        {
          metric: "2×",
          description: "revenue vs. marketplace listings in 3 months",
        },
      ],
    },
  },
  {
    id: "taxiverse",
    name: "TaxiVerse",
    industry: "Transportation / Mobility",
    description:
      "A full-featured taxi booking platform with a passenger web app, driver mobile app, and admin dashboard — real-time GPS tracking, fare calculation, and Stripe payments.",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Google Maps API",
    ],
    results: [
      "Live driver tracking with under 2s location refresh",
      "Automated fare calculation with dynamic pricing",
      "Unified admin dashboard for fleet management",
    ],
    color: "from-amber-500/20 to-yellow-500/20",
    featured: true,
    caseStudy: {
      overview:
        "The client needed a complete taxi booking ecosystem to compete with ride-hailing giants locally. Existing solutions were either too expensive to license or too generic for their operational model.",
      solution:
        "We delivered three interconnected products: a passenger web/mobile app for booking rides, a React Native driver app with live navigation, and a Next.js admin dashboard for fleet and driver management. Stripe handled all payments and automated payouts.",
      features: [
        "Real-time GPS tracking via Google Maps SDK",
        "Dynamic fare engine based on distance, time, and demand",
        "Stripe Connect for driver payouts and split payments",
        "Driver app with turn-by-turn navigation and trip history",
        "Admin dashboard: fleet analytics, driver management, dispute resolution",
      ],
      impact: [
        { metric: "<2s", description: "live driver location update interval" },
        {
          metric: "3",
          description:
            "interconnected apps delivered (passenger, driver, admin)",
        },
        {
          metric: "100%",
          description: "automated payment and payout processing",
        },
      ],
    },
  },
  {
    id: "coffee-pos",
    name: "Coffee Shop POS",
    industry: "Hospitality / Retail",
    description:
      "A touch-friendly point-of-sale system built specifically for a coffee shop — order management, menu configuration, real-time sales reporting, and end-of-day reconciliation.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe Terminal",
      "Electron",
    ],
    results: [
      "Order processing time reduced by 35%",
      "Real-time sales dashboard with daily summaries",
      "Offline mode for uninterrupted service",
    ],
    color: "from-orange-500/20 to-amber-500/20",
    featured: true,
    caseStudy: {
      overview:
        "The coffee shop was running on an outdated legacy POS system that was slow, prone to crashes, and offered no reporting. They needed a modern, reliable system that staff could learn in minutes.",
      solution:
        "We built a desktop POS app using React and Electron for offline-capable hardware deployment, backed by a Node.js API. The system integrates with Stripe Terminal for card payments, manages the full menu lifecycle, and generates daily revenue reports.",
      features: [
        "Touch-optimised order interface with category navigation",
        "Stripe Terminal integration for card and contactless payments",
        "Offline mode with automatic sync when connectivity restores",
        "Menu management: items, modifiers, pricing, availability",
        "Daily, weekly, and monthly sales reporting dashboard",
      ],
      impact: [
        {
          metric: "35%",
          description: "reduction in average order processing time",
        },
        {
          metric: "0",
          description: "service interruptions due to offline support",
        },
        {
          metric: "1 day",
          description: "staff training time for full system adoption",
        },
      ],
    },
  },
  {
    id: "hrms",
    name: "HRMS",
    industry: "HR / Manufacturing",
    description:
      "A comprehensive Human Resource Management System built for a manufacturing company — employee records, attendance, leave management, payroll, and performance tracking.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Resend"],
    results: [
      "Digitised HR records for 300+ employees",
      "Automated payroll calculation and payslip generation",
      "Leave and attendance approval workflows",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    caseStudy: {
      overview:
        "A mid-sized manufacturing company was managing HR for 300+ employees through spreadsheets and paper forms. Payroll was error-prone, leave requests were handled via WhatsApp, and performance reviews had no consistent process.",
      solution:
        "We designed and built a role-based HRMS with modules for employee onboarding, attendance tracking (with clock-in/out), automated payroll calculation, leave request workflows, and annual performance review cycles. Resend powers automated payslip and notification emails.",
      features: [
        "Employee records with department, role, and document management",
        "Clock-in/out attendance with overtime and shift tracking",
        "Automated payroll with deductions, allowances, and payslip PDF export",
        "Leave request and approval workflows with balance tracking",
        "Performance review module with manager ratings and feedback",
      ],
      impact: [
        {
          metric: "300+",
          description: "employee records digitised and centralised",
        },
        { metric: "80%", description: "reduction in payroll processing time" },
        {
          metric: "0",
          description: "paper-based HR processes remaining post-launch",
        },
      ],
    },
  },
  {
    id: "resumeverse",
    name: "ResumeVerse",
    industry: "SaaS / AI",
    description:
      "An AI-powered resume builder SaaS — users input their experience and the platform generates tailored, ATS-optimised resumes with GPT-4, multiple templates, and PDF export.",
    technologies: ["Next.js", "OpenAI", "TypeScript", "PostgreSQL", "Stripe"],
    results: [
      "AI-generated resumes in under 30 seconds",
      "Stripe-powered subscription with free and pro tiers",
      "ATS-optimised output across 5 professional templates",
    ],
    color: "from-violet-500/20 to-purple-500/20",
    featured: true,
    caseStudy: {
      overview:
        "Job seekers spend hours crafting resumes with no guarantee of ATS compatibility or clarity. The client wanted a SaaS product that used AI to dramatically reduce that time while improving the quality and relevance of output.",
      solution:
        "We built a full SaaS platform with a multi-step resume builder that feeds structured data into a GPT-4 prompt chain. The AI tailors language, keywords, and formatting to the target role. Stripe handles free-to-pro upgrades, and users can export to PDF with one click.",
      features: [
        "GPT-4 powered content generation tailored to job descriptions",
        "5 ATS-optimised resume templates with live preview",
        "Multi-step builder: personal info, experience, education, skills",
        "Stripe billing with free tier (3 exports) and pro subscription",
        "PDF export with pixel-perfect formatting",
      ],
      impact: [
        {
          metric: "<30s",
          description: "to generate a full AI-tailored resume",
        },
        {
          metric: "5",
          description: "professional templates with ATS compatibility",
        },
        {
          metric: "2",
          description: "subscription tiers with Stripe billing automation",
        },
      ],
    },
  },
  {
    id: "spendverse",
    name: "SpendVerse",
    industry: "SaaS / Finance",
    description:
      "A cross-platform expense tracking SaaS — web and mobile apps for individuals and teams to log expenses, set budgets, generate reports, and gain spending insights.",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
    ],
    results: [
      "Unified expense tracking across web and mobile",
      "Real-time budget alerts and monthly spending reports",
      "Team workspaces with role-based expense approval",
    ],
    color: "from-indigo-500/20 to-blue-500/20",
    featured: true,
    caseStudy: {
      overview:
        "Freelancers and small teams were tracking expenses in spreadsheets or using enterprise tools that were overkill. The client wanted a clean, affordable SaaS product covering both personal and team expense tracking.",
      solution:
        "We built a cross-platform product: a Next.js web app and React Native mobile app sharing a single Node.js API. Users can log expenses, attach receipts, set monthly budgets, and invite team members. Stripe handles the subscription model.",
      features: [
        "Expense logging with category tagging and receipt upload",
        "Monthly budget setting with real-time alert notifications",
        "Visual spending analytics: breakdowns by category, period, and team member",
        "Team workspaces with approval workflows for submitted expenses",
        "Stripe subscription with individual and team billing plans",
      ],
      impact: [
        {
          metric: "2",
          description: "platforms (web + mobile) from a single shared API",
        },
        {
          metric: "100%",
          description: "real-time sync between web and mobile clients",
        },
        {
          metric: "3",
          description: "billing plans with automated Stripe management",
        },
      ],
    },
  },
  {
    id: "inventory-management",
    name: "Inventory Management System",
    industry: "Manufacturing / Operations",
    description:
      "A real-time inventory management platform for a manufacturing company — raw material tracking, stock alerts, supplier management, and production consumption logging.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis"],
    results: [
      "Real-time stock levels across multiple warehouses",
      "Automated low-stock alerts to procurement team",
      "Full audit trail for every stock movement",
    ],
    color: "from-sky-500/20 to-blue-500/20",
    featured: false,
    caseStudy: {
      overview:
        "The manufacturing client was managing inventory across two warehouses using disconnected spreadsheets. Stock discrepancies were common, production lines faced unexpected material shortages, and there was no visibility into consumption rates.",
      solution:
        "We built a centralised inventory management system with real-time stock tracking, multi-warehouse support, and automated reorder alerts. Every stock movement — receipts, issues to production, adjustments, and returns — is logged with a full audit trail.",
      features: [
        "Multi-warehouse stock tracking with location-level visibility",
        "Goods receipt and production issue logging with batch support",
        "Automated low-stock alerts via email to procurement",
        "Supplier management with lead time and pricing history",
        "Full audit trail with user attribution for every stock movement",
      ],
      impact: [
        {
          metric: "2",
          description: "warehouses unified on a single real-time platform",
        },
        {
          metric: "100%",
          description: "audit trail coverage for all stock movements",
        },
        {
          metric: "0",
          description: "unplanned production stoppages post-launch",
        },
      ],
    },
  },
  {
    id: "procurement-management",
    name: "Procurement Management System",
    industry: "Manufacturing / Procurement",
    description:
      "An end-to-end procurement platform for a manufacturing company — purchase requisitions, supplier quotations, purchase orders, GRN, and invoice matching.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Resend"],
    results: [
      "Full purchase-to-pay cycle digitised",
      "3-way matching: PO, GRN, and invoice verification",
      "Approval workflows with role-based authority limits",
    ],
    color: "from-rose-500/20 to-pink-500/20",
    featured: false,
    caseStudy: {
      overview:
        "The procurement process was entirely manual — requisitions on paper, supplier negotiations via email, and POs created in Word. There was no visibility into open orders, budget vs. actual spend, or supplier performance.",
      solution:
        "We built a structured procure-to-pay workflow system: staff raise purchase requisitions that route through configured approval chains, procurement raises POs to suppliers, warehouse confirms goods received, and finance verifies invoices against POs and GRNs.",
      features: [
        "Purchase requisition with department budget checking",
        "Configurable approval workflows with authority limit enforcement",
        "Purchase order generation with supplier email delivery via Resend",
        "Goods received note (GRN) module linked to open POs",
        "3-way invoice matching with discrepancy flagging",
      ],
      impact: [
        { metric: "100%", description: "of procure-to-pay cycle digitised" },
        {
          metric: "3-way",
          description: "PO, GRN, and invoice matching automated",
        },
        {
          metric: "60%",
          description: "reduction in procurement processing time",
        },
      ],
    },
  },
  {
    id: "snake-game",
    name: "Snake Game",
    industry: "Gaming / Entertainment",
    description:
      "A classic Snake game built in the browser — smooth canvas rendering, progressive difficulty, high score persistence, and a clean retro aesthetic with modern polish.",
    technologies: ["React", "TypeScript", "Canvas API", "CSS"],
    results: [
      "60fps smooth gameplay via Canvas API",
      "Progressive difficulty scaling with level system",
      "Local high score persistence with level tracking",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    featured: false,
    caseStudy: {
      overview:
        "A client wanted a branded browser game as an engagement feature for their platform — recognisable, instantly playable, and requiring no install. The classic Snake mechanic was chosen for its universal familiarity.",
      solution:
        "We built the game using React for UI shell and the HTML5 Canvas API for high-performance game rendering. The game loop runs at 60fps with a custom tick system, difficulty increases every 5 levels, and scores persist in localStorage.",
      features: [
        "60fps Canvas-rendered game loop with smooth movement",
        "Progressive difficulty: speed and obstacle complexity increase per level",
        "Local high score leaderboard with persistent localStorage",
        "Keyboard and mobile swipe controls",
        "Retro pixel aesthetic with modern animations and sound effects",
      ],
      impact: [
        {
          metric: "60fps",
          description: "consistent frame rate via Canvas API",
        },
        {
          metric: "0",
          description: "external runtime dependencies beyond React",
        },
        {
          metric: "Instant",
          description: "play with no install or account required",
        },
      ],
    },
  },
  {
    id: "ludo-game",
    name: "Ludo Game",
    industry: "Gaming / Entertainment",
    description:
      "A multiplayer Ludo game with real-time chat — up to 4 players, game rooms, animated piece movement, turn enforcement, and a Socket.io powered chat system.",
    technologies: ["React", "Node.js", "Socket.io", "TypeScript", "PostgreSQL"],
    results: [
      "Real-time multiplayer across up to 4 players",
      "Integrated in-room chat during live games",
      "Persistent game rooms with reconnect support",
    ],
    color: "from-red-500/20 to-rose-500/20",
    featured: false,
    caseStudy: {
      overview:
        "The client wanted to bring the classic board game Ludo online with a social twist — real-time multiplayer with an in-game chat so friends could play and talk without needing a separate messaging app.",
      solution:
        "We built a React frontend with animated game board and Socket.io for all real-time communication — dice rolls, piece movements, turn changes, and chat messages. The Node.js backend manages game state, validates moves server-side, and handles reconnections.",
      features: [
        "Real-time multiplayer for 2–4 players via Socket.io",
        "Server-side game state management and move validation",
        "Animated piece movement with dice roll physics",
        "In-room text chat with player-colour attribution",
        "Persistent game rooms: players can reconnect after a disconnect",
      ],
      impact: [
        { metric: "4", description: "simultaneous players per game room" },
        {
          metric: "Real-time",
          description: "chat and game events via WebSocket",
        },
        { metric: "<100ms", description: "average game event latency" },
      ],
    },
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Riyas Mohammad",
    role: "Co-Founder",
    company: "Technyon",
    rating: 5,
    content:
      "DigitalMasonry transformed our online presence completely. The product pages they built are visually stunning and our conversion rate jumped 40% in the first month. They understood our brand and delivered beyond expectations.",
  },
  {
    id: 2,
    name: "Bilal Afzal",
    role: "CEO",
    company: "TaxiVerse",
    rating: 5,
    content:
      "Building a real-time taxi booking platform is no small feat. DigitalMasonry handled the complexity of live driver tracking, dynamic pricing, and seamless payments flawlessly. The app launched on schedule and our drivers love it.",
  },
  {
    id: 3,
    name: "Fatima Malik",
    role: "Product Manager",
    company: "ResumeVerse",
    rating: 5,
    content:
      "Our AI resume builder needed to be fast, intuitive, and scalable from day one. DigitalMasonry delivered exactly that — clean architecture, seamless Stripe integration, and a product our users genuinely enjoy. Highly recommended.",
  },
  {
    id: 4,
    name: "Waleed Mesto",
    role: "Operations Manager",
    company: "HRMS — Manufacturing",
    rating: 5,
    content:
      "We had a complex set of HR requirements specific to our manufacturing environment. DigitalMasonry understood the domain, asked the right questions, and built a system our HR team adopted immediately. Outstanding work.",
  },
  {
    id: 5,
    name: "Zara Ahmed",
    role: "Co-founder",
    company: "SpendVerse",
    rating: 5,
    content:
      "The expense tracking platform they built is exactly what we envisioned. Real-time sync across web and mobile, beautiful dashboards, and rock-solid reliability. These are engineers who think about the product, not just the code.",
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
  "Under $1,000",
  "$1,000 – $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
] as const;
