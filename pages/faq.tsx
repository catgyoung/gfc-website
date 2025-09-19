// pages/faq.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

/* ====================== FAQ DATA ====================== */

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What is the Global Cancer Financing Platform (GCFP)?",
    a: "An emerging catalytic platform being developed to accelerate access to earlier cancer detection and treatment in low- and middle-income countries, with a first milestone to mobilize at least $1 billion by 2030. It will start with cervical and breast cancer while laying the foundation to expand to other high-burden cancers over time. Its initial strategy centers on stage shifting—moving diagnosis from late to early stages, when outcomes are better and care is more cost-effective.",
  },
  {
    q: "How will the Platform be governed?",
    a: "Governance is in development and will be shaped with input from governments, multilateral agencies, financing partners, and civil society. Core principles include transparency, accountability, and regional representation. Signatory countries will help shape these principles as development continues.",
  },
  {
    q: "Does the scope go beyond screening?",
    a: "Yes. While the early emphasis is on earlier detection, the Platform’s scope includes diagnostic infrastructure, treatment capacity, workforce training, and service delivery—to build resilient, equitable cancer-care systems that connect screening to quality care.",
  },
  {
    q: "When will pilots begin, and will every supporter be funded immediately?",
    a: "A select number of pilot countries will be engaged more deeply as the Platform develops (beginning in 2026, with timing refined as work advances). Not every country is funded at once; selection considers disease burden, equity gaps, readiness, and systems-level impact. All signatories are part of ongoing technical dialogue and help shape long-term direction.",
  },
  {
    q: "What types of support might countries receive?",
    a: "Potential support may include: resources for early detection and treatment pilots; investment in diagnostics, workforce, and service delivery; access to technical collaboration and regional learning networks; and opportunities to participate in shared data, accountability, and co-financing models.",
  },
  {
    q: "Is the Declaration of Support legally binding?",
    a: "No. The Declaration is non-binding; it signals political intent to support the Platform’s vision and to participate in ongoing dialogue as the Platform is developed. (Process details for endorsement can be provided on request.)",
  },
  {
    q: "Who is developing the Platform?",
    a: "The GCFP is being co-designed by a growing coalition of governments, cancer leaders, financing institutions, and technical experts, complementing—not competing with—existing global health investments.",
  },
  {
    q: "How does this align with global goals?",
    a: "The Platform aims to accelerate progress toward the Sustainable Development Goals, notably SDG 3 (Health), SDG 5 (Gender Equality), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships).",
  },
  {
    q: "Who has convened recent discussions?",
    a: "Recent high-level convenings have been co-hosted by ASCO and the Bloomberg New Economy International Cancer Coalition, bringing together ministers, oncology leaders, and finance partners to advance the Platform’s design.",
  },
];

const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ====================== PAGE ====================== */

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Head>
        <title>FAQ | Global Cancer Financing Platform</title>
        <meta
          name="description"
          content="Answers about the Global Cancer Financing Platform: mission, governance, pilots, support types, and alignment with global goals."
        />
        <link rel="canonical" href="https://gcf.finance/faq" />
      </Head>

      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gray-50 text-gray-900">
        <GlobalStyles />
        <SiteHeader />
        <Hero />
        <FAQList />
        <ContactCard />
        <SiteFooter />
      </main>
    </>
  );
}

/* ====================== GLOBAL STYLES (match site) ====================== */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes shimmerShift {
        0% { background-position: 0% 0%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 0%; }
      }
      .hero-spotlight {
        background-image:
          radial-gradient(1000px 500px at 25% 0%, rgba(56,189,248,0.14), rgba(56,189,248,0) 60%),
          radial-gradient(600px 300px at 70% 20%, rgba(56,189,248,0.10), rgba(56,189,248,0) 0%);
        background-size: 140% 140%, 160% 160%;
        animation: shimmerShift 18s ease-in-out infinite;
      }
      .balance { text-wrap: balance; }
    `}</style>
  );
}

/* ====================== HEADER (same centered nav) ====================== */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* fixed height row */}
        <div className="h-14 flex items-center justify-between">
          {/* Left: logo/name */}
          <a href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">
              G
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Global Cancer Financing Platform
            </span>
          </a>

          {/* Right: CTA */}
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 font-semibold text-white shadow hover:bg-sky-600 transition"
          >
            Get involved
          </a>
        </div>

        {/* Centered nav (non-wrapping) */}
        <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="pointer-events-auto flex items-center gap-5 whitespace-nowrap text-[14px]">
            <a href="/#solution" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">Vision</a>
            <a href="/#problem" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">Why this matters</a>
            <a href="/#innovation" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">What we’re funding</a>
            <a href="/#how" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">How it works</a>
            <a href="/#whynow" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">Why now</a>
            <a href="/#equity" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">Principles</a>
            <a href="/#next" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4">What’s next</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ====================== HERO (dark gradient to match) ====================== */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061325] to-[#0a1a2f]" />
      <div className="pointer-events-none absolute inset-0 hero-spotlight" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a1a2f] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="font-extrabold leading-tight tracking-tight balance">
          <span className="block text-3xl sm:text-4xl md:text-5xl">Frequently Asked Questions</span>
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-200">
          Answers about the Global Cancer Financing Platform—its mission, governance, pilot approach, and how it aims to
          mobilize at least <span className="font-semibold whitespace-nowrap">$1 billion by 2030</span> to shift diagnosis earlier.
        </p>
      </div>
    </section>
  );
}

/* ====================== FAQ LIST (cards that match site) ====================== */

function FAQList() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const id = toSlug(item.q);
            return (
              <details
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h2 id={id} className="text-base font-semibold leading-6">
                    <a href={`#${id}`} className="no-underline hover:underline">
                      {item.q}
                    </a>
                  </h2>
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="prose mt-3 text-sm leading-6 text-gray-700">
                  <p>{item.a}</p>
                </div>
              </details>
            );
          })}
        </div>

        {/* Quick links row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/support"
            className="rounded-2xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
          >
            Read the Declaration
          </Link>
          <Link
            href="/#contact"
            className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-600 transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ====================== CONTACT CARD (light panel) ====================== */

function ContactCard() {
  return (
    <section className="bg-white text-gray-900 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <h3 className="text-lg font-semibold">Still have questions?</h3>
          <p className="mt-2 text-sm text-gray-700">
            Visit our{" "}
            <Link href="/#contact" className="underline">
              Contact
            </Link>{" "}
            section and we’ll get back to you.
          </p>
          <p className="mt-4 text-xs text-gray-500">Last updated: September 19, 2025</p>
        </div>
      </div>
    </section>
  );
}

/* ====================== FOOTER (same as site) ====================== */

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">
            G
          </span>
          <span className="text-sm font-semibold text-gray-900">Global Cancer Fund</span>
        </div>
        <p className="text-sm text-gray-600">
          © {year} Global Cancer Financing Platform. Early-phase platform launch — we welcome your input as we build.
        </p>
      </div>
    </footer>
  );
}
