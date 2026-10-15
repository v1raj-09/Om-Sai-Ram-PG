import React, { useState } from "react";
import { Clock, VolumeX, Flame, Key, Plus, Minus } from "lucide-react";

/*
  Rules layout: "The PG day"
  - A 24-hour strip shows when each rule applies (gate, quiet hours, visitors).
  - Below it, the rules sit in a ruled ledger; opening one highlights its hours on the strip.
  Palette unchanged: #0F172A, #1E293B, #ADFF2F + slate.
*/

const HOURS = 24;
const pct = (h) => `${(h / HOURS) * 100}%`;

const rules = [
  {
    key: "gate",
    icon: Clock,
    title: "Gate timings & entry",
    summary: "Main gate closes at 11:30 PM",
    desc: "For safety and security, main gate timings must be followed by all residents. Late entries because of office shifts or travel need prior notice to the PG manager.",
    note: "Extensions are allowed with prior notice.",
  },
  {
    key: "quiet",
    icon: VolumeX,
    title: "Quiet hours",
    summary: "10:00 PM to 6:00 AM, every day",
    desc: "Keep noise down during sleep and study hours, out of respect for neighbours who work from home or are preparing for exams.",
    note: "Applies to music, calls and common areas.",
  },
  {
    key: "kitchen",
    icon: Flame,
    title: "Kitchen & electrical safety",
    summary: "No induction cooktops or heaters in rooms",
    desc: "Heavy heating and cooking appliances are not allowed in bedrooms because they can overload the wiring. Switch off lights and fans when you leave your room.",
    note: "Cook in the shared kitchen only.",
  },
  {
    key: "visitors",
    icon: Key,
    title: "Visitors",
    summary: "Common areas until 9:00 PM",
    desc: "Family and friends are welcome in the shared lounge and common areas during the day. Overnight stays in resident rooms are not permitted.",
    note: "Guests are not allowed inside rooms overnight.",
  },
];

/* Which stretch of the day each rule owns on the strip */
const bands = [
  { rule: "quiet", from: 0, to: 6, label: "Quiet" },
  { rule: "visitors", from: 6, to: 21, label: "Visitors welcome in common areas" },
  { rule: "quiet", from: 22, to: 24, label: "Quiet" },
];

const ticks = [
  { h: 0, label: "12 AM" },
  { h: 6, label: "6 AM" },
  { h: 12, label: "12 PM" },
  { h: 18, label: "6 PM" },
  { h: 24, label: "12 AM" },
];

const Rules = () => {
  const [open, setOpen] = useState("gate");

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header, left aligned */}
        <header className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            House rules
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Four rules keep the PG safe and calm for everyone. Here is how they
            fit into a normal day.
          </p>
        </header>

        {/* The day strip */}
        <div className="mt-12 bg-[#1E293B] border border-slate-700/80 rounded-2xl p-5 sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-bold">A day at the PG</h2>
            <p className="text-xs text-slate-400 font-light">
              Select a rule below to see its hours
            </p>
          </div>

          <div className="mt-8 relative">
            {/* track */}
            <div className="relative h-14 rounded-xl bg-[#0F172A] border border-slate-800 overflow-hidden">
              {bands.map((b, i) => {
                const active = open === b.rule;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setOpen(b.rule)}
                    aria-label={b.label}
                    style={{ left: pct(b.from), width: pct(b.to - b.from) }}
                    className={`absolute top-0 h-full border-r border-[#0F172A] text-[11px] font-medium px-2 truncate transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] ${
                      active
                        ? "bg-[#ADFF2F] text-[#0F172A]"
                        : "bg-slate-700/60 text-slate-300 hover:bg-slate-600/60"
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}

              {/* gate closing marker at 11:30 PM */}
              <button
                type="button"
                onClick={() => setOpen("gate")}
                aria-label="Gate closes at 11:30 PM"
                style={{ left: pct(23.5) }}
                className="absolute top-0 h-full w-0.5 -ml-px focus:outline-none"
              >
                <span
                  className={`block h-full w-full transition-colors duration-300 ${
                    open === "gate" ? "bg-white" : "bg-slate-400"
                  }`}
                ></span>
              </button>
            </div>

            {/* gate label above the marker */}
            <div
              className="absolute -top-6 -translate-x-full pr-2 text-[11px] font-semibold whitespace-nowrap transition-colors duration-300"
              style={{ left: pct(23.5) }}
            >
              <span className={open === "gate" ? "text-[#ADFF2F]" : "text-slate-400"}>
                Gate closes 11:30 PM
              </span>
            </div>

            {/* time scale */}
            <div className="relative h-6 mt-2">
              {ticks.map((t, i) => (
                <span
                  key={i}
                  style={{ left: pct(t.h) }}
                  className={`absolute text-[11px] text-slate-500 font-mono ${
                    i === 0 ? "" : i === ticks.length - 1 ? "-translate-x-full" : "-translate-x-1/2"
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Ledger of rules */}
        <div className="mt-10 border-t border-slate-700">
          {rules.map((r) => {
            const isOpen = open === r.key;
            const Icon = r.icon;
            return (
              <div key={r.key} className="border-b border-slate-700">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : r.key)}
                  aria-expanded={isOpen}
                  className="w-full grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_minmax(0,16rem)_1fr_auto] items-center gap-x-4 sm:gap-x-6 gap-y-1 py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] rounded-lg"
                >
                  <span
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#ADFF2F] border-[#ADFF2F]"
                        : "bg-[#1E293B] border-slate-700"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isOpen ? "text-[#0F172A]" : "text-[#ADFF2F]"}`}
                    />
                  </span>

                  <span
                    className={`font-bold text-lg transition-colors ${
                      isOpen ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {r.title}
                  </span>

                  <span className="col-span-2 col-start-2 sm:col-span-1 sm:col-start-auto row-start-2 sm:row-start-auto text-sm text-[#ADFF2F] font-medium">
                    {r.summary}
                  </span>

                  <span className="text-slate-400 group-hover:text-white transition-colors row-start-1 col-start-3 sm:col-start-auto">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {/* Expandable detail: grid-rows trick for smooth height */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 sm:pl-[3.75rem] max-w-2xl space-y-3">
                      <p className="text-slate-300 text-base leading-relaxed font-light">
                        {r.desc}
                      </p>
                      <p className="text-sm text-slate-400 border-l-2 border-[#ADFF2F] pl-3">
                        {r.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing note */}
        <p className="mt-10 text-sm text-slate-400 font-light max-w-xl">
          Need a late entry or have a question about a rule? Tell the PG manager
          before the day it applies.
        </p>
      </div>
    </section>
  );
};

export default Rules;