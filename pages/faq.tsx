// pages/faq.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

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

// helper to make stable anchor ids for each question
const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight">
            Global Cancer Financing Platform — FAQ
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Answers to common questions about the Platform’s mission, governance,
            scope, pilots, and partnerships.
          </p>

          {/* Optional quick actions; update hrefs to your routes if needed */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/support"
              className="rounded-2xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
            >
              Read the Declaration
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* FAQ list */}
        <section className="space-y-4">
          {faqs.map((item, idx) => {
            const id = toSlug(item.q);
            return (
              <details
                key={idx}
                className="group rounded-2xl border border-gray-200 p-5 transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h2 id={id} className="text-base font-semibold leading-6">
                    <a href={`#${id}`} className="no-underline hover:underline">
                      {item.q}
                    </a>
                  </h2>
                  <span className="text-gray-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="prose mt-3 text-sm leading-6 text-gray-700">
                  <p>{item.a}</p>
                </div>
              </details>
            );
          })}
        </section>

        {/* Contact card */}
        <section className="mt-12 rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
          <h3 className="text-lg font-semibold">Still have questions?</h3>
          <p className="mt-2 text-sm text-gray-700">
            Visit our{" "}
            <Link href="/contact" className="underline">
              Contact
            </Link>{" "}
            page and we’ll get back to you.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            Last updated: September 19, 2025
          </p>
        </section>
      </main>
    </>
  );
}
