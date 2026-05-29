/**
 * Service data — single source of truth for all service information.
 * Used by both the services overview and individual detail pages.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: string;
  image: string;
  shortDescription: string;
  whatsappMessage: string;
  deliverables: string[];
  whoItsFor: string;
  process: ProcessStep[];
  faqs: FAQ[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "auditing-and-assurance",
    title: "Auditing & Assurance",
    shortTitle: "Auditing & Assurance",
    subtitle:
      "Statutory, internal, and tax audits — built around your compliance calendar.",
    icon: "ShieldCheck",
    image: "/images/services/audit.png",
    shortDescription:
      "Statutory, internal, and tax audits for compliance and governance.",
    whatsappMessage: "Hello, I need audit & assurance services",
    deliverables: [
      "Statutory audits under the Companies Act, 2013",
      "Tax audits under Section 44AB of the Income Tax Act",
      "Internal audits and risk-based assurance reviews",
      "GST audits and reconciliation",
      "Stock audits and concurrent audits on engagement",
    ],
    whoItsFor:
      "Companies required to undergo statutory audits, businesses subject to tax audits based on turnover thresholds, and organizations seeking independent assurance on their financial statements and internal controls.",
    process: [
      {
        title: "Consultation",
        description:
          "We understand your business, audit requirements, and compliance calendar.",
      },
      {
        title: "Planning",
        description:
          "We design the audit approach, define scope, and set timelines.",
      },
      {
        title: "Execution",
        description:
          "Our team conducts the audit with minimal disruption to your operations.",
      },
      {
        title: "Reporting",
        description:
          "You receive a clear audit report with actionable recommendations.",
      },
    ],
    faqs: [
      {
        question: "Who needs a statutory audit?",
        answer:
          "All companies registered under the Companies Act, 2013 are required to get their accounts audited annually by a practicing Chartered Accountant, regardless of turnover.",
      },
      {
        question: "What is a tax audit under Section 44AB?",
        answer:
          "A tax audit is mandatory for businesses with turnover exceeding ₹1 crore (₹10 crore if cash transactions are under 5%) and professionals with gross receipts exceeding ₹50 lakh.",
      },
      {
        question: "How long does an audit typically take?",
        answer:
          "The duration depends on the size and complexity of your business. A standard statutory audit for an SME typically takes 2–4 weeks from document collection to report issuance.",
      },
      {
        question: "Do you handle GST audits separately?",
        answer:
          "Yes, we can conduct GST audits independently or as part of a comprehensive audit engagement, including GSTR-9C reconciliation.",
      },
    ],
  },
  {
    slug: "company-registration",
    title: "Company Registration",
    shortTitle: "Company Registration",
    subtitle:
      "From idea to incorporation — pick the right structure and we'll handle the rest.",
    icon: "Building2",
    image: "/images/services/registration.png",
    shortDescription:
      "Pvt Ltd, LLP, OPC, Partnership, and Proprietorship — incorporated end-to-end.",
    whatsappMessage: "Hello, I want to register a company",
    deliverables: [
      "Private Limited Company (Pvt Ltd) incorporation",
      "Limited Liability Partnership (LLP) registration",
      "One Person Company (OPC) setup",
      "Partnership firm registration",
      "Sole Proprietorship registration",
      "Allied registrations: PAN, TAN, MSME/Udyam, professional tax, shop & establishment",
    ],
    whoItsFor:
      "Entrepreneurs launching a new business, startups choosing the right legal structure, existing sole proprietors looking to incorporate, and partnerships considering conversion to LLP or Pvt Ltd.",
    process: [
      {
        title: "Consultation",
        description:
          "We help you choose the right business structure based on your goals, investment, and liability preferences.",
      },
      {
        title: "Documentation",
        description:
          "We prepare and file all required documents — DSC, DIN, name approval, MOA, AOA, and more.",
      },
      {
        title: "Incorporation",
        description:
          "We handle the filing with MCA/ROC and obtain your Certificate of Incorporation.",
      },
      {
        title: "Post-Registration",
        description:
          "We complete allied registrations (PAN, TAN, GST, bank account opening support) so you're ready to operate.",
      },
    ],
    faqs: [
      {
        question: "Which business structure is right for me?",
        answer:
          "It depends on factors like the number of owners, liability preferences, fundraising plans, and compliance willingness. A Pvt Ltd is ideal for startups seeking investment, an LLP suits professional services, and a Proprietorship is simplest for solo businesses.",
      },
      {
        question: "How long does it take to register a Pvt Ltd company?",
        answer:
          "With all documents in order, a Pvt Ltd company can typically be incorporated within 7–15 business days through the MCA portal.",
      },
      {
        question: "What documents are needed for incorporation?",
        answer:
          "You'll need Aadhaar, PAN, passport-size photo, and address proof of all directors/partners, plus a registered office address proof (rental agreement or utility bill).",
      },
      {
        question: "Do you help with post-incorporation compliance?",
        answer:
          "Yes, we can handle ongoing compliance including annual filings, board resolutions, statutory registers, and changes in directorship or shareholding.",
      },
    ],
  },
  {
    slug: "gst-compliance",
    title: "GST Compliance & Advisory",
    shortTitle: "GST Compliance",
    subtitle:
      "GST registrations, monthly filings, ITC optimization, and notice handling.",
    icon: "ReceiptText",
    image: "/images/services/gst.png",
    shortDescription:
      "Registrations, filings, ITC optimization, and notice replies.",
    whatsappMessage: "Hello, I need help with GST compliance",
    deliverables: [
      "New GST registration (regular and composition)",
      "Monthly/quarterly GSTR-1 and GSTR-3B filing",
      "Annual return GSTR-9 and GSTR-9C reconciliation",
      "Input Tax Credit (ITC) review and optimization",
      "GST notice and assessment reply, representation before officers",
      "LUT filing for exporters",
    ],
    whoItsFor:
      "Businesses with annual turnover above the GST threshold, e-commerce sellers, exporters, and firms managing inter-state supply who need reliable filing and compliance management.",
    process: [
      {
        title: "Registration",
        description:
          "We handle your GST registration application and obtain your GSTIN.",
      },
      {
        title: "Monthly Filing",
        description:
          "We prepare and file GSTR-1 and GSTR-3B on time, every month or quarter.",
      },
      {
        title: "ITC Optimization",
        description:
          "We review your input tax credits to ensure you're claiming everything you're entitled to.",
      },
      {
        title: "Ongoing Support",
        description:
          "We handle notices, amendments, annual returns, and any GST-related queries.",
      },
    ],
    faqs: [
      {
        question: "When is GST registration mandatory?",
        answer:
          "GST registration is mandatory when your aggregate turnover exceeds ₹40 lakh (₹20 lakh for service providers) in a financial year, or if you're involved in inter-state supply, e-commerce, or certain notified categories.",
      },
      {
        question: "What is ITC and how can it be optimized?",
        answer:
          "Input Tax Credit (ITC) is the tax you pay on business purchases that can be offset against your output tax liability. We review your purchase invoices and GSTR-2B to ensure full and legitimate credit utilization.",
      },
      {
        question: "What happens if I miss a GST filing deadline?",
        answer:
          "Late filing attracts a penalty of ₹50/day (₹20/day for nil returns) up to ₹10,000, plus interest at 18% per annum on the outstanding tax. Continued non-filing can lead to GST cancellation.",
      },
      {
        question: "Do you handle GST notices?",
        answer:
          "Yes, we draft responses to GST notices, attend hearings, and represent you before GST officers for assessments, audits, and demand proceedings.",
      },
      {
        question: "Can you help with GST on exports?",
        answer:
          "Absolutely. We handle LUT filing for exports without payment of IGST and assist with refund claims for taxes paid on exports.",
      },
    ],
  },
  {
    slug: "income-tax-consulting",
    title: "Income Tax Consulting",
    shortTitle: "Income Tax",
    subtitle:
      "Tax planning, ITR filing, and representation — for individuals and businesses.",
    icon: "Calculator",
    image: "/images/services/income-tax.png",
    shortDescription:
      "Tax planning, ITR filings, and representation before tax authorities.",
    whatsappMessage: "Hello, I need income tax consulting",
    deliverables: [
      "Strategic tax planning for individuals, professionals, and companies",
      "Income Tax Return (ITR) preparation and filing — ITR-1 through ITR-7",
      "Advance tax computation and TDS compliance",
      "Assessment, scrutiny, and appeal representation before the Income Tax Department",
      "Capital gains advisory (property, equities, mutual funds)",
      "NRI taxation and DTAA advisory",
    ],
    whoItsFor:
      "Salaried individuals with complex income sources, freelancers and professionals, business owners, companies, NRIs with Indian income or assets, and anyone facing income tax notices or assessments.",
    process: [
      {
        title: "Tax Review",
        description:
          "We analyse your income sources, investments, and deductions to understand your tax position.",
      },
      {
        title: "Planning",
        description:
          "We recommend tax-saving strategies and structure your finances for optimal tax efficiency.",
      },
      {
        title: "Filing",
        description:
          "We prepare and file your ITR accurately, ensuring all deductions and exemptions are claimed.",
      },
      {
        title: "Support",
        description:
          "We handle any notices, scrutiny assessments, or appeals that arise post-filing.",
      },
    ],
    faqs: [
      {
        question: "Who should file an Income Tax Return?",
        answer:
          "Any individual with gross total income exceeding the basic exemption limit (₹3 lakh under the new regime) must file an ITR. It's also mandatory for companies, firms, and those who want to claim refunds or carry forward losses.",
      },
      {
        question: "Which ITR form should I use?",
        answer:
          "It depends on your income sources: ITR-1 for salaried individuals, ITR-3 for business/profession, ITR-4 for presumptive income, ITR-5 for firms/LLPs, ITR-6 for companies, and ITR-7 for trusts. We'll determine the correct form for you.",
      },
      {
        question: "Can you help reduce my tax liability legally?",
        answer:
          "Yes, through strategic use of deductions (80C, 80D, etc.), exemptions, income structuring, and timing of transactions, we can help minimize your tax burden within the framework of the law.",
      },
      {
        question: "What if I receive a notice from the Income Tax Department?",
        answer:
          "Don't worry — we regularly handle notices for intimation (143(1)), scrutiny (143(2)), demand, and other proceedings. We'll review the notice, prepare the response, and represent you if needed.",
      },
      {
        question: "Do you handle NRI taxation?",
        answer:
          "Yes, we advise NRIs on their Indian tax obligations, DTAA benefits, TDS on property sales, repatriation of funds, and filing of returns for Indian-sourced income.",
      },
    ],
  },
];

/** Get a service by its slug */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Get related services (all except the current one) */
export function getRelatedServices(currentSlug: string): ServiceData[] {
  return SERVICES.filter((s) => s.slug !== currentSlug);
}
