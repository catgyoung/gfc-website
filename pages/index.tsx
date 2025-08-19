"use client";
import React from "react";

/* ============================ PAGE ============================ */

export default function Landing() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <GlobalStyles />
      <SiteHeader />
      <Announcement />
      <Hero />
      <Solution />
      <Problem />
      <Innovation />
      <HowItWorks />
      <WhyNow />
      <Principles />
      <WhatsNext />
      <JoinUs />
      <SiteFooter />
    </main>
  );
}

/* ====================== GLOBAL STYLES (animations & utils) ====================== */

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
      .clamp-3{
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
        overflow:hidden;
      }
    `}</style>
  );
}

/* ============================== HEADER (centered, single-line nav) ============================== */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Fixed-height row keeps left/right aligned */}
        <div className="h-14 flex items-center justify-between">
          {/* Left: logo/name */}
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">
              G
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              GCF
            </span>
          </a>

          {/* Right: CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 font-semibold text-white shadow hover:bg-sky-600 transition"
          >
            Get involved
          </a>
        </div>

        {/* Center: nav — absolutely centered and prevented from wrapping */}
        <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="pointer-events-auto flex items-center gap-5 whitespace-nowrap text-[14px]">
            <NavLink href="#solution" label="Vision" />
            <NavLink href="#problem" label="Why this matters" />
            <NavLink href="#innovation" label="What we’re funding" />
            <NavLink href="#how" label="How it works" />
            <NavLink href="#whynow" label="Why now" />
            <NavLink href="#equity" label="Principles" />
            <NavLink href="#next" label="What’s next" />
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4"
    >
      {label}
    </a>
  );
}

/* ============================ ANNOUNCEMENT ============================ */

function Announcement() {
  return (
    <div className="bg-sky-100 border-b border-sky-200">
      <div className="mx-auto max-w-6xl px-6 py-4 text-lg text-sky-900 font-medium flex flex-wrap items-center justify-between gap-4">
        <span>
          The <span className="font-bold">Global Cancer Financing Platform</span> will launch on September 25, 2025 {" "}
          <span className="font-bold"></span>.
        </span>
        <a href="/unga-event" className="font-semibold text-sky-700 hover:underline whitespace-nowrap">
          View event details →
        </a>
      </div>
    </div>
  );
}

/* ========================= SECTION HEADING ========================= */

function SectionHeading({
  children,
  kicker,
  light = false,
}: {
  children: React.ReactNode;
  kicker?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-6">
      {kicker && (
        <div className={`${light ? "text-sky-300" : "text-sky-500"} text-xs font-bold uppercase tracking-widest`}>
          {kicker}
        </div>
      )}
      <h2 className={`mt-2 text-4xl font-bold ${light ? "text-white" : "text-gray-900"}`}>{children}</h2>
    </div>
  );
}

/* ========================== CARD STYLE SYSTEM ========================== */

const cardLight = "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm";
const cardDark = "rounded-2xl border border-white/20 bg-white/5 p-6";

/* ================================ HERO ================================ */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061325] to-[#0a1a2f]" />
      <div className="pointer-events-none absolute inset-0 hero-spotlight" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1a2f] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mt-5 font-extrabold leading-tight tracking-tight">
          {/* Wrap on mobile; keep single line on md+ if it fits */}
          <span className="block text-3xl sm:text-4xl md:text-5xl md:whitespace-nowrap">
            DESIGNING A GLOBAL CANCER FINANCING SYSTEM
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl md:whitespace-nowrap">
            SO THAT NO ONE IS LEFT BEHIND
          </span>
        </h1>

        <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-200">
          We are launching the <span className="font-semibold">Global Cancer Fund</span> — a bold new platform to shift
          cancer diagnosis from late to early stage, where survival is higher and treatment is more affordable.
        </p>
      </div>
    </section>
  );
}

/* ============================== SOLUTION (VISION) ============================== */

function Solution() {
  return (
    <section id="solution" className="bg-gray-100 text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="Core vision">
          Financing the shift to equity in cancer outcomes
        </SectionHeading>
        <p className="text-lg leading-relaxed">
          Our focus is <span className="font-semibold text-sky-500">stage shifting</span>: moving more patients into
          early-stage diagnosis, when treatment is most effective and survival is highest. By starting with women’s
          cancers, we prioritize areas of greatest inequity - while building an innovative financing platform designed
          for the future of global cancer care.
        </p>
      </div>
    </section>
  );
}

/* =============================== PROBLEM =============================== */

function Problem() {
  return (
    <section id="problem" className="bg-gradient-to-b from-[#0a1a2f] to-[#1f2937] text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="Why this matters" light>
          The cancer burden is shifting - financing hasn’t
        </SectionHeading>
        <p className="text-lg leading-relaxed text-gray-200">
          Cancer is now a leading cause of premature death in over 70 countries. Yet less than 5% of global health
          financing reaches LMICs, where cases are rising fastest. Too often, cancers are detected late, when survival
          is low and costs are high. We believe a new financing model can change that trajectory.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NumberCard icon={<GlobeIcon />} stat="70+" label="Countries" desc="Cancer is the leading cause of premature death." />
          <NumberCard icon={<FundingIcon />} stat="<5%" label="Global health funding" desc="Reaches LMIC cancer care." />
          <NumberCard icon={<AlertIcon />} stat="~70%" label="Late-stage diagnosis" desc="In many LMIC settings." />
          <NumberCard icon={<HeartIcon />} stat=">80%" label="Survival" desc="When cancers are found early." />
        </div>
      </div>
    </section>
  );
}

function NumberCard({
  icon,
  stat,
  label,
  desc,
}: {
  icon: React.ReactNode;
  stat: string;
  label: string;
  desc: string;
}) {
  return (
    <div className={cardLight + " h-full text-center"}>
      <div className="mx-auto inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-3">
        {icon}
      </div>
      <div className="mt-3 text-3xl font-extrabold text-sky-500">{stat}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-gray-500">{label}</div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed clamp-3">{desc}</p>
    </div>
  );
}

/* ============================ Stat Icons ============================ */
function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#0ea5e9" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function FundingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="6.5" width="17" height="11" rx="2" stroke="#0ea5e9" strokeWidth="1.6" />
      <path d="M6 10h6M6 13h10" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4l8 14H4L12 4z" stroke="#0ea5e9" strokeWidth="1.6" />
      <path d="M12 9v4M12 17h.01" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 8.5c0 4.5-8 9-8 9s-8-4.5-8-9a4.5 4.5 0 018-3 4.5 4.5 0 018 3z"
        stroke="#0ea5e9"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================== INNOVATION ============================== */

function Innovation() {
  return (
    <section id="innovation" className="bg-gray-100 text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="What we’re funding">
          From proven solutions to transformative innovations
        </SectionHeading>
        <p className="text-lg leading-relaxed">
          The Platform will invest in trusted interventions such as HPV vaccination and testing, community-based screening,
          diagnostics, and patient navigation. It will also accelerate next-generation tools including AI-assisted
          triage, portable imaging, interoperable data platforms, and self-collection technologies to move detection and
          care earlier in the continuum.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          By linking these investments directly to treatment access, the Platform ensures early detection leads to
          lifesaving care—not just diagnosis. The same systems and capabilities established for cervical cancer will
          adapt and scale to breast and other high-burden cancers.
        </p>
      </div>
    </section>
  );
}

/* ============================== HOW IT WORKS ============================== */

function HowItWorks() {
  return (
    <section id="how" className="bg-gradient-to-b from-[#1f2937] to-[#0a1a2f] text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="How it works" light>
          Core design elements
        </SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Country Plans">
            National investment plans co-developed with governements and aligned to National Cancer Care Plans.
          </InfoCard>
          <InfoCard title="Capital Mix">
            Blended resources from domestic budgets, philanthropy, multilaterals, diaspora/remittances, and
            outcome-linked instruments.
          </InfoCard>
          <InfoCard title="Transparency">
            Disbursements tied to verified outcomes, with digital dashboards and open reporting on services and results.
          </InfoCard>
          <InfoCard title="Safeguards">
            Independent technical review, audit, and governance strucgtures to uphold quality and equity.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={`${cardDark} h-full text-center`}>
      <div className="text-lg font-semibold text-sky-300">{title}</div>
      <p className="mt-2 text-sm text-gray-200">{children}</p>
    </div>
  );
}

/* ================================ WHY NOW ================================ */

function WhyNow() {
  return (
    <section id="whynow" className="bg-gray-100 text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="Why now">Seizing the moment for global cancer equity</SectionHeading>
        <p className="text-lg leading-relaxed">
          For more than two decades, the global cancer community has called for a financing mechanism that matches the
          scale of the challenge. Yet progress has been constrained by a fragile and fragmented funding landscape,
          leaving countries without the tools to act decisively.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          The Global Cancer Financing Platform is designed to turn this momentum into lasting systems change. By creating a
          country-led, transparent, and outcomes-focused platform, we can align resources, scale proven solutions, and
          accelerate innovation. Now is the time to build a financing model that not only delivers immediate impact, but
          also lays the foundation for sustainable cancer control worldwide.
        </p>
      </div>
    </section>
  );
}

/* ================================ PRINCIPLES ================================ */

function Principles() {
  return (
    <section id="equity" className="bg-gradient-to-b from-[#0a1a2f] to-[#1f2937] text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="Core principles" light>
          What defines our approach
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <PrincipleCard
            icon={<TargetIcon />}
            title="Equity"
            desc="Investments must reach the communities in LMICs most underserved by current cancer systems and markets."
          />
          <PrincipleCard
            icon={<FlagIcon />}
            title="Ownership"
            desc="Solutions must be aligned with national strategies, institutions, and health priorities."
          />
          <PrincipleCard
            icon={<LeafIcon />}
            title="Sustainability"
            desc="The Fund must strengthen long-term capacity, not create parallel systems or one-off interventions."
          />
          <PrincipleCard
            icon={<LayersIcon />}
            title="Integration"
            desc="Cancer care must be embedded in primary health systems, digital health platforms, and universal health coverage efforts."
          />
          <PrincipleCard
            icon={<SparkIcon />}
            title="Impact"
            desc="The Fund should unlock co-investment, drive policy change, and create systems-level shifts—not just fund projects."
          />
        </div>
      </div>
    </section>
  );
}

function PrincipleCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className={cardDark + " h-full text-center"}>
      <div className="mx-auto inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-3">
        {icon}
      </div>
      <div className="mt-4 text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-gray-200 leading-relaxed">{desc}</p>
    </div>
  );
}

/* principle icons */
function TargetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="#7dd3fc" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" stroke="#7dd3fc" strokeWidth="1.6" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3v18" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 4h10l-1.5 3L18 10H6" stroke="#7dd3fc" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 4c-8 0-12 4-12 12 4 0 12-4 12-12z" stroke="#7dd3fc" strokeWidth="1.6" />
      <path d="M8 16c2-2 5-5 8-6" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4l8 4-8 4-8-4 8-4z" stroke="#7dd3fc" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M20 12l-8 4-8-4" stroke="#7dd3fc" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M20 16l-8 4-8-4" stroke="#7dd3fc" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="#7dd3fc" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 8l2 2-2 2-2-2 2-2z" stroke="#7dd3fc" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================== WHAT'S NEXT (timeline) ============================== */

function WhatsNext() {
  return (
    <section id="next" className="bg-gray-100 text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading kicker="What’s next">Early milestones</SectionHeading>

        <div className="relative pl-8 mt-6">
          <TimelineItem year="2025">Establish governance, publish framework, and raise seed commitments.</TimelineItem>
          <TimelineItem year="2026">Co-design 5-7 country investment notes; pilot transparency dashboard.</TimelineItem>
          <TimelineItem year="2027">Expand to additional countries and scale blended capital mechanisms.</TimelineItem>
          <TimelineItem year="2030">Mobilize at least $1B and demonstrate measurable stage-shift at national scale.</TimelineItem>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, children }: { year: string; children: React.ReactNode }) {
  return (
    <div className="relative py-3">
      <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-sky-500 border-2 border-white" />
      <p className="ml-8">
        <span className="font-semibold text-sky-500">{year}:</span> {children}
      </p>
    </div>
  );
}

/* ================================ JOIN US ================================ */

function JoinUs() {
  return (
    <section id="contact" className="bg-gradient-to-b from-[#0a1a2f] to-[#1f2937] text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading kicker="Join us" light>
          Help shape the Global Cancer Fund
        </SectionHeading>
        <p className="text-xl leading-relaxed text-gray-200">
          This is the beginning. We invite governments, funders, clinicians, advocates, and innovators to add their
          perspective as we refine and expand the platform.
        </p>

        {/* Plain HTML POST to Formspree (change action if you use your own endpoint) */}
        <form action="https://formspree.io/f/xyzpaaqg" method="POST" className="mx-auto mt-10 max-w-xl">
          <input type="hidden" name="source" value="join_us" />
          <input type="hidden" name="_redirect" value="https://gcf.finance/?ok=1#contact" />
          <input type="hidden" name="_subject" value="New Join Us submission (gcf.finance)" />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-xl border border-sky-400 bg-white px-4 py-3 text-gray-900 placeholder-sky-400 focus:border-sky-500"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-sky-600 transition"
            >
              Get involved
            </button>
          </div>
          <p className="mt-3 text-xs text-sky-200/80">We’ll never share your email.</p>
        </form>
      </div>
    </section>
  );
}

/* ================================ FOOTER ================================ */

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">G</span>
          <span className="text-sm font-semibold text-gray-900">GCF</span>
        </div>
        <p className="text-sm text-gray-600">
          © {year} Global Cancer Financing Platform. Early-phase platform launch - we welcome your input as we build.
        </p>
      </div>
    </footer>
  );
}
