export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  eyebrow: string;
  date: string;
  sections: Array<{
    heading: string;
    body?: string;
    bullets?: string[];
    footer?: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mithila-foods",
    title:
      "P2P Acceleration for FMCG Brand: 30% Shorter Procure-to-Pay Cycle via WhatsApp + ERPNext Agent",
    company: "Mithila Foods",
    logo: "/assets/logos/mithila-foods.png",
    logoWidth: 368,
    logoHeight: 151,
    eyebrow: "Case Study/Mithila Foods",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "Our Client is a multi-supplier manufacturing and distribution business known for fast-moving operations and tight working-capital cycles. The team partners with a broad vendor network and runs make-to-order as well as replenishment workflows. To maintain margin and delivery reliability, Our Client prioritizes accurate P2P visibility, on-time supplier coordination, and lightweight tools that field teams and vendors can actually use.",
      },
      {
        heading: "The problem",
        body:
          "The Operations and MIS manager carried a heavy manual workload across the procure-to-pay (P2P) cycle:",
        bullets: [
          "Raising purchase orders (POs), tracking supplier confirmations, and recording ETDs/ETAs.",
          "Monitoring dispatches and deliveries and following up for proof of shipment.",
          "Updating Excel trackers for quantities, GRNs, and invoice status.",
        ],
        footer:
          "There was no centralized, real-time system for status tracking or analytics, leading to avoidable delays, missed reminders, and error-prone reconciliation.",
      },
      {
        heading: "The solution",
        body:
          "We built an AI agent that bridges WhatsApp and ERPNext so suppliers and the internal team can update the P2P record directly in chat, while the system maintains the source-of-truth in ERPNext.",
      },
      {
        heading: "What the agent enables",
        bullets: [
          "Vendor self-service over WhatsApp: Confirm POs, share dispatch dates, upload AWB numbers, and mark deliveries.",
          "Two-way ERPNext updates: Structured messages map to specific DocTypes/fields (e.g., Purchase Order, Purchase Receipt, Delivery Note, Invoice).",
          "Smart reminders: A reminder algorithm nudges stakeholders at each stage (confirmation due, dispatch due, GRN pending, invoice pending) with SLA-aware timing.",
          "Status snapshots: Instant summaries of PO lines, quantities due, and exceptions for the Ops/MIS team.",
        ],
      },
      {
        heading: "How it fits the stack",
        bullets: [
          "Secure webhook integration with ERPNext for create/update events.",
          "Message templates with validation to prevent bad writes and ensure data completeness.",
          "Audit logs for every chat-driven change with user, timestamp, and before/after values.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "30% reduction in P2P cycle time driven by timely, automated reminders and in-chat updates.",
          "Lighter MIS workload with fewer manual Excel updates and faster reconciliations.",
          "Higher data accuracy due to structured inputs and field validations at source.",
        ],
        footer:
          "Business impact: Faster throughput from PO to payment, improved supplier accountability, and clearer working-capital visibility.",
      },
    ],
  },
  {
    slug: "tigerhall",
    title: "Automating LinkedIn Engagement Capture for Tigerhall",
    company: "Tigerhall",
    logo: "/assets/logos/tigerhall.png",
    logoWidth: 500,
    logoHeight: 200,
    eyebrow: "Case Study/Tigerhall",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "Tigerhall is a B2B learning and thought-leadership platform that helps business audiences discover practical insights from industry leaders. Social content is a primary growth engine, with LinkedIn driving awareness, community engagement, and a steady stream of warm prospects. To turn that engagement into pipeline, Tigerhall prioritizes timely visibility into who interacts, clean, structured data for qualification, and personalized first touches that reflect each prospect's role and context.",
      },
      {
        heading: "The problem",
        body:
          "Each time Tigerhall published a post on LinkedIn, the team manually scraped details of users who liked or commented to identify potential prospects. For every engager, the POC looked up:",
        bullets: [
          "Current job title and company.",
          "Previous roles and seniority indicators.",
          "Context for personalization such as industry and function.",
        ],
        footer:
          "This workflow was entirely manual and consumed around 2 hours per day, diverting attention from higher-value activities like messaging tests, campaign design, and meetings with qualified prospects.",
      },
      {
        heading: "Impact of the manual process",
        bullets: [
          "Slow speed to engage as data collection lagged behind post performance.",
          "Inconsistent data quality due to copy/paste errors and missing fields.",
          "Opportunity cost with the POC spending significant time on repetitive tasks.",
        ],
      },
      {
        heading: "The solution",
        body:
          "We built an automated LinkedIn engagement scraper that collects details of users who like or comment on Tigerhall's posts and writes them directly to a Google Sheet that the team uses for outreach and tracking.",
      },
      {
        heading: "How it works",
        bullets: [
          "Scheduled runs pull new post engagements at set intervals and de-duplicate records.",
          "Lead enrichment captures name, job title, company, and prior roles, and normalizes fields for filtering.",
          "Google Sheets sync updates a shared worksheet with fresh, structured rows ready for outreach.",
          "Readiness by morning: The system completes overnight so the POC opens a sheet that's already populated.",
          "Logging and alerts flag run status and any exceptions for quick follow-up.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "120+ hours saved per month for the POC, reclaiming time for strategy, messaging, and meetings.",
          "Faster outreach with engagement leads available the next morning after a post goes live.",
          "Higher data completeness across required fields, reducing manual corrections.",
        ],
        footer:
          "Business impact: More consistent follow-through on warm LinkedIn signals, improved personalization at first touch, and more time for activities that drive revenue.",
      },
    ],
  },
  {
    slug: "alstonia",
    title: "Automating Inbound Lead Ops for Alstonia",
    company: "Alstonia",
    logo: "/assets/logos/alstonia.jpg",
    logoWidth: 300,
    logoHeight: 300,
    eyebrow: "Case Study/Alstonia",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "Alstonia is a high growth B2B company that sources a significant share of pipeline through inbound digital channels, including website forms, email, and social media. With a lean revenue team, Alstonia prioritizes speed to lead, data integrity, and repeatable playbooks in its CRM so marketing and sales can qualify prospects quickly, personalize first touches, and convert interest into forecastable pipeline.",
      },
      {
        heading: "The problem",
        body:
          "Inbound volume grew across channels, but the process to move leads into the CRM and make them actionable was fragmented and manual.",
        bullets: [
          "Manual CRM entry from email, website, and social channels led to missed records and inconsistent data.",
          "Thin account profiles lacked critical firmographics such as revenue, employee size, and headquarters, slowing qualification.",
          "Limited research and qualification against predefined signals meant many leads skipped ICP checks and were not prioritized correctly.",
          "Template based emails reduced relevance and engagement for first responses.",
        ],
        footer:
          "This workflow increased time to action, reduced follow-through on high intent leads, and obscured true pipeline potential.",
      },
      {
        heading: "The solution",
        body:
          "We implemented an autonomous lead ops agent that captures, enriches, and qualifies inbound leads across all channels, then triggers personalized first touch emails.",
      },
      {
        heading: "What the agent does",
        bullets: [
          "Omnichannel capture: Automatically ingests inbound leads from email, website, and social media into the CRM with standardized fields.",
          "Account enrichment: Scrapes trusted public sources to add revenue, employee count, industry, HQ location, and technology signals directly into the CRM.",
          "Qualification against signals: Scores each prospect against predefined criteria such as ICP fit, market, role seniority, and tech stack. Flags high priority leads for immediate follow up.",
          "Automated, personalized outreach: Generates a short, research informed first response tailored to the account's context, replacing generic templates.",
          "Audit trails and reporting: Logs source, enrichment evidence, score rationale, and outreach copy for transparency and coaching.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "Inbound lead capture increased by 80% due to automatic ingestion across channels and reduced misses.",
          "Turnaround time reduced by 95% from lead arrival to first touch, since research and enrichment occur automatically.",
          "First response conversion rate up by 10% with personalized, context aware emails replacing fixed templates.",
          "Cleaner CRM with enriched firmographics that improved routing, segmentation, and reporting accuracy.",
        ],
        footer:
          "Business impact: Faster speed to lead, higher engagement at first touch, and better prioritization of sales effort on ICP fit accounts.",
      },
    ],
  },
  {
    slug: "sarvaay",
    title: "Multi-Agent Ops Automation for FMCG Brand",
    company: "Sarvaay",
    logo: "/assets/logos/sarvaay.png",
    logoWidth: 300,
    logoHeight: 300,
    eyebrow: "Case Study/Sarvaay",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "Our Client is a fast-growing commerce brand operating across Shopify, Amazon, and direct channels. The team manages high-volume order fulfilment, catalogue operations, refunds, and paid acquisition. Because each function runs on different systems including Shiprocket, Razorpay, Odoo, Shopify, Amazon, and Meta Ads, Saarvay prioritized speed, accuracy, and consistency in day-to-day operations to keep margins healthy while scaling.",
      },
      {
        heading: "The problem",
        body:
          "Saarvay's operations relied on repetitive, manual workflows spread across multiple platforms, creating bottlenecks and error risk.",
        bullets: [
          "Shiprocket: Manual carrier selection on cost and rating, invoice generation, and label printing for each order.",
          "Odoo: Repetitive purchase order creation, inventory updates, and material count adjustments prone to mistakes.",
          "Shopify/Amazon: Heavy product listing work with large forms, image uploads, and frequent AI-based image enhancement before publishing.",
          "Refunds: Case-by-case email processing with checks for time since purchase, reason, and amount.",
          "Meta Ads: Manual KPI tracking and budget adjustments to shift spend from losing to winning campaigns, requiring constant monitoring.",
        ],
        footer:
          "The result was significant analyst time spent on routine clicks, higher risk of errors, and the need for dedicated staff just to keep daily operations moving.",
      },
      {
        heading: "The solution",
        body:
          "We deployed a fleet of specialized automation agents that handle each workflow end to end, with human-in-the-loop controls where judgment is required.",
      },
      {
        heading: "Shiprocket Agent",
        bullets: [
          "Chooses carriers using rules for cost, rating, and product type.",
          "Generates invoices and prints labels automatically via the interface.",
          "Surfaces exceptions such as no serviceability for quick human review.",
        ],
      },
      {
        heading: "Odoo Agent",
        bullets: [
          "Automates purchase order creation and material count updates.",
          "Integrates with WhatsApp to send PO alerts, low-stock notifications, and accept structured updates through chat.",
        ],
      },
      {
        heading: "Shopify/Amazon Agent",
        bullets: [
          "Automates new product creation with form filling and catalogue updates.",
          "Runs AI-based image enhancement before upload.",
          "Includes human-in-loop review gates for titles, attributes, and images before publishing.",
        ],
      },
      {
        heading: "Refunds Agent",
        bullets: [
          "Verifies each request against policy rules including time window, reason, order value, and payment method.",
          "Approves or rejects, triggers notification emails, and logs outcomes to the database.",
        ],
      },
      {
        heading: "Meta Ads Agent",
        bullets: [
          "Tracks KPI performance such as CTR, CPC, CPA/ROAS and classifies winners/losers.",
          "Adjusts budgets based on predefined thresholds and pauses underperformers automatically.",
          "Flags anomalies and sends summaries to the team.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "50% reduction in operations headcount needed for day-to-day processing.",
          "Faster Shiprocket turnaround from order ready to label printed and dispatched.",
          "Fewer human errors across inventory, listings, and refunds due to standardized automation steps.",
          "Lower learning curve for complex tools like Odoo thanks to guided chat flows and automated updates.",
          "Higher overall operational efficiency, enabling the team to focus on growth initiatives.",
        ],
        footer:
          "Business impact: Leaner operations, faster fulfilment cycles, and improved data quality across the commerce stack.",
      },
    ],
  },
  {
    slug: "2p2c",
    title: "Accelerating Excel Workflows for 2P2C",
    company: "2P2C",
    logo: "/assets/logos/2point2-capital.png",
    logoWidth: 396,
    logoHeight: 192,
    eyebrow: "Case Study/2P2C",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "2P2C is a financial operations firm that manages daily, monthly, and quarterly reporting cycles for clients. The team relies heavily on Microsoft Excel for reconciliations, performance calculations, and regulatory-ready reports. Speed and accuracy are critical, since outputs are shared with custodians and external stakeholders under strict deadlines.",
      },
      {
        heading: "The problem",
        body:
          "2P2C faced a major challenge with repetitive and time-consuming Excel-based tasks that grew in volume with client demand. Key pain points included:",
        bullets: [
          "Daily report preparation that required manual data pulls and formatting.",
          "Custodian data validation against internal records that demanded cell-by-cell checks.",
          "Duplicative data entry for the same custom fields across multiple spreadsheets.",
          "Complex monthly and quarterly calculations that were sensitive to formula drift and version mismatches.",
        ],
        footer:
          "Since these workflows were deadline driven and highly repetitive, they often led to human errors, rework, and wasted analyst time. Manual execution also made it difficult to maintain consistent quality across reporting periods.",
      },
      {
        heading: "The solution",
        body:
          "We developed easy to use workflow scripts tailored to each recurring Excel process. The approach prioritized usability, transparency, and auditability.",
      },
      {
        heading: "What we built",
        bullets: [
          "Task specific scripts that automate data ingestion, transformation, reconciliation, and report generation.",
          "Custodian reconciliation checks that compare external files with internal ledgers and flag mismatches with clear identifiers.",
          "Reusable input mappings that eliminate repetitive entry of custom fields across workbooks.",
          "Parameter driven calculators for monthly and quarterly metrics that lock in formulas and prevent drift.",
        ],
      },
      {
        heading: "How it fits the team",
        bullets: [
          "Simple run controls so analysts can start a workflow with one click or a single command.",
          "Validation summaries that show pass or fail status and highlight exceptions for quick review.",
          "Change logs that capture input versions, timestamps, and operators for audit readiness.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "70% reduction in workflow execution time across daily, monthly, and quarterly reporting.",
          "95% improvement in data accuracy measured by fewer reconciliation breaks and exception rates.",
          "Near zero rework on custodian validations after rollout for the covered processes.",
          "Consistent outputs with standardized templates that reduced version drift and formula inconsistencies.",
        ],
        footer:
          "Business impact: Analysts reclaimed hours each cycle, client reports were delivered on time, and reconciliation quality supported stronger relationships with custodians and stakeholders.",
      },
    ],
  },
  {
    slug: "manodayam",
    title:
      "Conversational Onboarding for Manodayam: 60% Fewer Drop-offs With a Voice-Assisted Chatbot",
    company: "Manodayam",
    logo: "/assets/logos/manodayam.png",
    logoWidth: 249,
    logoHeight: 49,
    eyebrow: "Case Study/Manodayam",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "Manodayam is a digital mental health platform that delivers accessible, evidence-informed support through friendly, low-friction experiences. The team serves users at scale across web and mobile, with a strong emphasis on privacy, consent, and data integrity. Because intake quality directly impacts care outcomes, Manodayam treats onboarding as a clinical gateway: it must engage users, capture complete baseline data, and route them to the right next step without creating unnecessary barriers.",
      },
      {
        heading: "The problem",
        body:
          "Manodayam's onboarding relied on static forms that felt dull and non-interactive. Completion rates suffered for two reasons:",
        bullets: [
          "High friction from mandatory questions and the preliminary PHQ-9 screener that blocked progress if any item was skipped.",
          "Low engagement due to form fatigue and lack of guidance or clarification for sensitive questions.",
        ],
        footer:
          "Operationally, data from forms required manual handling to reach backend systems, which added delay and introduced the possibility of errors.",
      },
      {
        heading: "The solution",
        body:
          "We built a conversational AI chatbot with optional voice assistance that guides users through onboarding in a friendly, step-by-step flow while capturing all required data directly into Manodayam's backend database.",
      },
      {
        heading: "What the chatbot does",
        bullets: [
          "Collects essential details such as name, age band, contact preferences, consent, and prior support history.",
          "Administers the PHQ-9 in a conversational format, with clear, neutral language and progress cues to reduce abandonment.",
          "Answers FAQs about the company, the platform, privacy, and how assessment results are used.",
          "Validates inputs in real time and saves state so users can pause and resume without losing progress.",
          "Sends structured payloads to the backend via secure APIs, eliminating manual data entry and ensuring audit-ready logs.",
        ],
      },
      {
        heading: "Experience and compliance features",
        bullets: [
          "Voice and text modes so users choose their preferred modality.",
          "Accessible UI patterns including readable contrast, error hints, and multi-language prompts.",
          "Privacy controls such as explicit consent prompts and data-handling disclosures.",
          "Escalation triggers that surface resource links or next steps based on responses, following Manodayam's policies.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "60% reduction in user drop-offs during onboarding after launching the chatbot.",
          "Higher data completeness for required fields and PHQ-9 items, with fewer partial submissions.",
          "Faster handoff to next steps due to immediate backend writes.",
        ],
        footer:
          "Business impact: More users complete onboarding on the first attempt, clinicians receive cleaner, structured data, and support teams spend less time on manual follow-ups.",
      },
    ],
  },
  {
    slug: "nuyug",
    title:
      "AI-Generated Creatives for an Artificial Jewellery Brand: 50% Lower Cost per Ad, 90% Faster Production",
    company: "Nuyug",
    logo: "/assets/logos/nuyug.png",
    logoWidth: 334,
    logoHeight: 127,
    eyebrow: "Case Study/Nuyug",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "Our Client is a fast-growing artificial jewellery brand known for trend-forward designs, quick collection refreshes, and social-first marketing. With product drops timed to festivals and fashion cycles, Client's growth depends on high-velocity creative production that delivers premium aesthetics at an accessible price point across Instagram, short-form video, and marketplaces.",
      },
      {
        heading: "The problem",
        body:
          "Ad creation was manual and slow, hinging on coordination with influencers and content partners:",
        bullets: [
          "Sourcing creators, negotiating quotes, shipping pieces, and chasing images/videos.",
          "Multiple review/iteration loops before an asset was considered usable.",
          "Uneven visual quality and inconsistent brand framing across campaigns.",
        ],
        footer:
          "The process consumed time, effort, and budget, yet remained critical to Client's marketing engine.",
      },
      {
        heading: "The solution",
        body:
          "We built an AI-powered creative agent that produces static and video ads tailored to Client's brand and audience.",
      },
      {
        heading: "What the agent delivers",
        bullets: [
          "Studio-quality visuals with on-brand backgrounds, lighting, reflections, and shadows.",
          "Variant generation for product angles, colorways, lifestyle vs. catalog looks, and text overlays.",
          "Video spots with pacing matched to platform norms, hooks, and callouts.",
          "Brand controls: fonts, color palette, logo placement, safe-area guides, and compliance checks.",
        ],
      },
      {
        heading: "Workflow",
        bullets: [
          "Input: SKU images, key messages, platform, target audience, and offer.",
          "Output: A ready-to-launch asset pack (static + video) plus editable source files and cutdowns.",
          "QA loop with lightweight human review; feedback trains the agent's style presets over time.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "50% reduction in marketing cost per ad by replacing most outsourced production.",
          "90% decrease in turnaround time from brief to launch.",
          "Higher visual consistency across campaigns due to reusable style presets.",
        ],
        footer:
          "Business impact: Faster campaign launches around drops and festivals, more testable variants per budget, and improved brand coherence in paid and organic.",
      },
    ],
  },
  {
    slug: "30-sundays",
    title: "Automating AirAsia Fare Checks for 30 Sundays",
    company: "30 Sundays",
    logo: "/assets/logos/30-sundays.png",
    logoWidth: 250,
    logoHeight: 120,
    eyebrow: "Case Study/30 Sundays",
    date: "Nov 29, 2025",
    sections: [
      {
        heading: "About the company",
        body:
          "30 Sundays is a holiday-planning platform designed for couples who want curated, transparently priced getaways. The product emphasizes real-time pricing, clear inclusions including baggage, meals, and seat selection, and smooth booking flows across partner airlines. To deliver a trusted experience, 30 Sundays prioritizes price accuracy, fast response times, and minimal manual work by its operations team.",
      },
      {
        heading: "The problem",
        body:
          "One of 30 Sundays' key airline partners, AirAsia, does not expose APIs for retrieving customized fares that include ancillaries. As a result:",
        bullets: [
          "The platform could not automatically fetch final prices with configured baggage and meals.",
          "Operations relied on manual lookups in the airline UI to confirm totals, which slowed quotes and bookings.",
          "Inconsistent ancillary handling risked price mismatches between displayed and checkout totals.",
        ],
        footer:
          "This created an operational bottleneck and increased turnaround time from user request to confirmed itinerary.",
      },
      {
        heading: "The solution",
        body:
          "We built an automation agent that interacts directly with the AirAsia website interface to return fully inclusive fares.",
      },
      {
        heading: "How it works",
        bullets: [
          "Navigates to the relevant flight search and selects baggage and meal options based on 30 Sundays' rules.",
          "Extracts the final payable price including base fare and selected ancillaries.",
          "Returns a structured payload to the 30 Sundays platform for display and booking.",
          "Includes resilience features such as wait conditions, selector fallbacks, and error handling to manage layout changes or timeouts.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "The agent is called via a secure endpoint with flight, passenger, and ancillary parameters.",
          "Results are cached with short TTLs to balance freshness and speed.",
          "Monitoring and logs capture run status, inputs, and retrieved totals for audit and support.",
        ],
      },
      {
        heading: "Success metrics",
        bullets: [
          "20% reduction in turnaround time from query to confirmed price display.",
          "Lower manual workload for the ops team by shifting routine checks to the agent.",
          "Higher pricing confidence through consistent ancillary inclusion at quote time.",
        ],
        footer:
          "Business impact: Faster quotes, fewer pricing discrepancies, and a smoother booking experience that builds user trust.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
