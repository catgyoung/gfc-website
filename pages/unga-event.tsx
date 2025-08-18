"use client";
import React from "react";

export default function UNGAEventPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#061325] to-[#0a1a2f]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
            UN General Assembly • High-Level Launch Event
          </p>
          <h1 className="mt-3 font-extrabold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl">
            Launch of the Global Cancer Financing Platform
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            On <span className="font-semibold">September 25, 2025</span>, leaders in government, multilateral
            institutions, oncology, global health, philanthropy, and the private sector will gather in New York to mark
            the launch of a bold new effort to close the global cancer equity gap.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#rsvp"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-sky-600 transition"
            >
              RSVP / Request Invite
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-sky-400 px-6 py-3 font-semibold text-sky-300 hover:bg-white/10 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-gray-100 text-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold">About the launch</h2>
          <p className="mt-4 text-lg leading-relaxed">
            This high-level event will mark the launch of the{" "}
            <span className="font-semibold text-sky-600">Global Cancer Financing Platform</span>—a catalytic initiative
            designed to expand access to earlier cancer detection and treatment in low- and middle-income countries,
            beginning with a focus on women’s cancers. Hosted during UNGA High-Level Week, the event will bring together
            ministers of health, multilateral institutions, experts, and partners to help drive a global shift toward
            earlier diagnosis—when survival is highest and care is most affordable.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            The program will also announce the platform’s{" "}
            <span className="font-semibold">first national pilot in Uganda</span>, exploring innovative financing
            approaches through diaspora remittances.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white text-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Event details</h2>
          <ul className="mt-6 space-y-3 text-lg text-gray-700">
            <li>
              <span className="font-semibold text-sky-700">Date:</span> Wednesday, September 25, 2025
            </li>
            <li>
              <span className="font-semibold text-sky-700">Time:</span> 4:00 – 7:00 PM
            </li>
            <li>
              <span className="font-semibold text-sky-700">Location:</span> Bloomberg Headquarters, New York City
            </li>
          </ul>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Program (Draft)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>4:00–4:30 PM | Guest arrival and welcome</li>
              <li>4:30–6:00 PM | Program: Opening remarks, keynote fireside, and two high-level panels</li>
              <li>6:00–7:00 PM | Networking reception</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="bg-gradient-to-b from-[#0a1a2f] to-[#1f2937] text-white py-20 text-center"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold">RSVP / Request an invitation</h2>
          <p className="mt-3 text-lg text-gray-200">
            Space is limited. Please RSVP to join leaders and partners at the launch of the Global Cancer Financing
            Platform. Contact: <span className="font-semibold">Catharine Young</span> and{" "}
            <span className="font-semibold">Sepideh Shokrpour</span>.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row justify-center"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full sm:w-auto flex-1 rounded-xl border border-sky-400 bg-white px-4 py-3 text-gray-900 placeholder-sky-400 focus:border-sky-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-sky-600 transition"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-sm text-sky-200/90">
            We will confirm your RSVP and share logistical details ahead of the event.
          </p>
        </div>
      </section>
    </main>
  );
}
