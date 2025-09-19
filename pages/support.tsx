// pages/support.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

/* ====================== PAGE ====================== */

export default function Support() {
  return (
    <>
      <Head>
        <title>Declaration of Support | Global Cancer Financing Platform</title>
        <meta
          name="description"
          content="Declaration of Support for the Global Cancer Financing Platform (GCFP)."
        />
        <link rel="canonical" href="https://gcf.finance/support" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900">
        <GlobalStyles />
        <SiteHeader />
        <Hero />
        <DeclarationBody />
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

/* ====================== HEADER (centered, single-line nav) ====================== */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* fixed-height row keeps sides aligned */}
        <div className="h-14 flex items-center justify-between">
          {/* Left: logo/name */}
          <a href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">
              G
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Global Cancer Fund
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
          <span className="block text-3xl sm:text-4xl md:text-5xl">
            Declaration of Support
          </span>
          <span className="mt-1 block text-lg sm:text-xl md:text-2xl text-sky-300">
            Global Cancer Financing Platform
          </span>
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-200">
          Join governments, multilaterals, funders, and civil society in supporting a platform to mobilize{" "}
          <span className="font-semibold whitespace-nowrap">$1 billion by 2030</span> and shift cancer diagnosis earlier.
        </p>
      </div>
    </section>
  );
}

/* ====================== DECLARATION BODY ====================== */

function DeclarationBody() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          {/* Title */}
          <h2 className="text-2xl font-bold">Declaration of Support for the Global Cancer Financing Platform</h2>

          {/* Preamble */}
          <section id="preamble" className="mt-6">
            <h3 className="text-lg font-semibold text-sky-600">Preamble</h3>
            <div className="mt-2 space-y-4 text-[15px] leading-7 text-gray-800">
              <p>
                Recognizing that cancer is now the leading cause of premature death worldwide - and that the burden is
                rising fastest in low- and middle-income countries (LMICs) - we, the undersigned, affirm our collective
                commitment to advancing cancer control and closing the global cancer equity gap.
              </p>
              <p>
                While extraordinary gains have been made in reducing deaths from HIV, tuberculosis, and malaria through
                coordinated global action and catalytic financing, cancer remains underfunded, under-prioritized, and
                unequally addressed. In 2025, there are approximately 20 million new cases and over 10 million deaths
                per year, with over 70% of cancer deaths now occurring in LMICs, where access to prevention, early
                diagnosis, and timely treatment remains out of reach for too many.
              </p>
              <p>This must change. And the time is now.</p>
              <p>
                We imagine a world where cancer no longer decides the fate of the underserved, the young, or the
                forgotten, where access to lifesaving care is not determined by geography or income, but upheld as a
                basic human right. The Global Cancer Fund exists to make this vision real.
              </p>
            </div>
          </section>

          {/* Purpose */}
          <section id="purpose" className="mt-8">
            <h3 className="text-lg font-semibold text-sky-600">Purpose</h3>
            <div className="mt-2 space-y-4 text-[15px] leading-7 text-gray-800">
              <p>
                We endorse the creation of the Global Cancer Financing Platform (GCF)—a bold, catalytic initiative to
                accelerate access to earlier cancer diagnosis and treatment in underserved regions. Through sustainable
                financing and multisectoral collaboration, the GCF will drive stage shifting—moving diagnosis from late
                to early stages - beginning with a focus on cervical and breast cancer, two of the most preventable and
                treatable causes of cancer death among women.
              </p>
              <p>
                The Platform will mobilize $1 billion in new capital by 2030 as a first milestone toward building a
                sustainable global financing platform. Its initial focus is one of the most impactful, and
                under-resourced, interventions in cancer control: stage shifting - catching cancer earlier, when it can
                be more effectively treated.
              </p>
              <p>
                The GCF will support investments that are aligned with national cancer control plans, embedded within
                broader health systems and universal health coverage (UHC) efforts, and designed to strengthen local
                capacity for the long term. The platform will feature a modular and flexible architecture, with expected
                components including catalytic grants, innovation investments, diaspora-linked remittance mechanisms,
                and blended finance opportunities.
              </p>
              <p>
                It will align with WHO frameworks and regional strategies, and be built with equity, transparency,
                integration, and country leadership at its core.
              </p>
            </div>
          </section>

          {/* Commitments */}
          <section id="commitments" className="mt-8">
            <h3 className="text-lg font-semibold text-sky-600">Our Commitments</h3>
            <p className="mt-2 text-[15px] leading-7 text-gray-800">
              As signatories to this Declaration, we:
            </p>
            <ul className="mt-3 list-disc pl-6 text-[15px] leading-7 text-gray-800 space-y-2">
              <li>
                Recognize the urgent need to expand cancer care in LMICs and the disproportionate impact of late-stage
                diagnosis on women and children;
              </li>
              <li>
                Support the Global Cancer Financing Platform as a critical mechanism to shift cancer diagnosis earlier,
                strengthen integrated health systems, and catalyze sustainable innovation in financing and service
                delivery;
              </li>
              <li>
                Endorse the principles of equity, country ownership, and catalytic impact that underpin the Platform’s
                design and future operations; and
              </li>
              <li>
                Welcome the opportunity for deeper engagement as the platform evolves, with a shared commitment to
                ensuring that no one should die of a treatable cancer because of where they live.
              </li>
            </ul>
          </section>

          {/* Shared Principles */}
          <section id="principles" className="mt-8">
            <h3 className="text-lg font-semibold text-sky-600">Shared Principles</h3>
            <p className="mt-2 text-[15px] leading-7 text-gray-800">Our actions will be guided by the following principles:</p>
            <ul className="mt-3 list-disc pl-6 text-[15px] leading-7 text-gray-800 space-y-2">
              <li>
                <span className="font-semibold">Equity</span> – Investments must reach the communities in LMICs most
                underserved by current cancer systems and markets.
              </li>
              <li>
                <span className="font-semibold">Country Ownership</span> – Solutions must align with national
                strategies, institutions, and health priorities.
              </li>
              <li>
                <span className="font-semibold">Sustainability</span> – The Platform must strengthen long-term capacity,
                not create parallel systems or one-off interventions.
              </li>
              <li>
                <span className="font-semibold">Integration</span> – Cancer care should be embedded in primary health
                care systems, digital health platforms, and universal health coverage (UHC) strategies.
              </li>
              <li>
                <span className="font-semibold">Catalytic Impact</span> – The Platform should unlock co-investment,
                drive policy change, and create systems-level shifts, not just fund projects.
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <section id="call-to-action" className="mt-8">
            <h3 className="text-lg font-semibold text-sky-600">Call to Action</h3>
            <div className="mt-2 space-y-4 text-[15px] leading-7 text-gray-800">
              <p>
                We invite all governments, international organizations, financial institutions, philanthropies, private
                sector actors, and civil society organizations to join us in endorsing this Declaration and supporting
                the Global Cancer Financing Platform.
              </p>
              <p>
                Together, we can shift the trajectory of cancer care for millions, and prove that where someone lives
                should not determine whether they live.
              </p>
            </div>
          </section>

          {/* Quick actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-600 transition"
            >
              Get involved
            </Link>
            <Link
              href="/unga-event#rsvp"
              className="rounded-2xl px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
            >
              Request an invitation
            </Link>
          </div>

          <p className="mt-6 text-xs text-gray-500">Last updated: September 19, 2025</p>
        </article>
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
          <span className="text-sm font-semibold text-gray-900">Global Cancer Financing P</span>
        </div>
        <p className="text-sm text-gray-600">
          © {year} Global Cancer Fund. Early-phase platform launch — we welcome your input as we build.
        </p>
      </div>
    </footer>
  );
}
