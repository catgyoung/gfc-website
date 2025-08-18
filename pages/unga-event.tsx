"use client";
import React, { useState } from "react";

/** ─────────────────────────────────────────────────────────────────────
 *  Replace this with YOUR Formspree endpoint:
 *  Example: "https://formspree.io/f/abcdwxyz"
 *  ───────────────────────────────────────────────────────────────────*/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzpaaqg";

/* ============================ PAGE ============================ */

export default function UngaEventPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <GlobalStyles />
      <PageHeader />
      <Hero />
      <EventDetails />
      <RsvpSection />
      <PageFooter />
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
    `}</style>
  );
}

/* ============================== HEADER ============================== */

function PageHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/90 border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">
            G
          </span>
          <span className="text-lg font-semibold tracking-tight text-gray-900">Global Cancer Fund</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          <a
            href="#rsvp"
            className="rounded-xl bg-sky-500 px-4 py-2 font-semibold text-white shadow hover:bg-sky-600 transition"
          >
            RSVP / Request Invite
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ================================ HERO ================================ */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#061325] to-[#0a1a2f]" />
      <div className="pointer-events-none absolute inset-0 hero-spotlight" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1a2f] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="mt-2 font-extrabold leading-tight tracking-tight">
          <span className="block text-3xl sm:text-4xl md:text-5xl">UN GENERAL ASSEMBLY: Side Event</span>
          <span className="mt-1 block text-xl sm:text-2xl md:text-3xl text-sky-300">
            Introducing the Global Cancer Financing Platform
          </span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
          Join government leaders, multilaterals, funders, clinicians, and innovators to help design a financing
          platform that shifts cancer diagnosis from late to early stage - where survival is higher and treatment is more
          affordable.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-sky-200/90">
          <span className="inline-flex items-center rounded-full border border-sky-300/30 px-3 py-1">
            September 25, 2025 · New York, NY
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center rounded-full border border-sky-300/30 px-3 py-1">
            4:00–7:00 PM ET
          </span>
        </div>

        <div className="mt-10">
          <a
            href="#rsvp"
            className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-sky-600 transition"
          >
            RSVP / Request Invite
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================== EVENT DETAILS ============================== */

function EventDetails() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold">Event details</h2>
        <p className="mt-4 text-lg leading-relaxed">
          This high-level convening will outline the Global Cancer Financing Platform's purpose, initial country engagement, and
          early investment pathways for stage shifting, including screening, diagnostics, navigation, and treatment
          linkages.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-sky-600">When</div>
            <div className="mt-1">Thursday, September 25, 2025</div>
            <div>4:00–7:00 PM Eastern Time</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-sky-600">Where</div>
            <div className="mt-1">New York, NY — (details in confirmation)</div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-sky-600">Agenda (draft)</div>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm">
            <li>Welcome & vision: Designing a financing model for stage shifting</li>
            <li>Lightning panels: Proven solutions & next-gen tools</li>
            <li>Country perspectives: Needs, readiness, and equity</li>
            <li>Financing pathways: Blended capital & transparency</li>
            <li>Call to action & next steps</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================================ RSVP ================================ */

function RsvpSection() {
  return (
    <section id="rsvp" className="bg-white text-gray-900 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold">Request an invitation</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Space is limited. Please indicate your interest in attending below.
        </p>

        <div className="mt-8">
          <RsvpForm />
        </div>
      </div>
    </section>
  );
}

function RsvpForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <input type="hidden" name="source" value="unga_event" />
      <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="UNGA Launch RSVP" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Full name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Organization</label>
          <input
            name="organization"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Title/Role</label>
          <input
            name="title"
            className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Attendance</label>
        <select
          name="attendance"
          required
          className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
        >
          <option value="">Select one</option>
          <option>Yes, I would like to attend in person</option>
          <option>Interested - please keep me posted</option>
          <option>Cannot attend - please share materials</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Dietary/access needs (optional)</label>
        <input
          name="needs"
          className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea
          name="notes"
          rows={4}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-sky-500 focus:outline-none"
        />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-black px-5 py-2 text-white font-medium shadow hover:bg-gray-900 transition"
        >
          {status === "loading" ? "Submitting…" : "Submit"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-700" role="status" aria-live="polite">
          Thanks—your RSVP was received. We’ll follow up with details.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-700" role="status" aria-live="polite">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

/* ================================ FOOTER ================================ */

function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-500 text-white font-bold">G</span>
          <span className="text-sm font-semibold text-gray-900">Global Cancer Fund</span>
        </div>
        <p className="text-sm text-gray-600">
          © {year} Global Cancer Fund. UNGA side event.
        </p>
      </div>
    </footer>
  );
}
