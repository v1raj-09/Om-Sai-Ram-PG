import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Minus,
  IndianRupee,
  Wifi,
  Utensils,
  ShieldCheck,
  Users,
  Phone,
  MessageCircle,
  LayoutGrid,
} from "lucide-react";

/*
  FAQ layout: help desk
  - Left (sticky on desktop): search, category filter with counts, and a "talk to the manager" card.
  - Right: answers grouped as a single list; each item has a category icon and expands in place.
  Palette matches Rules.jsx: #0F172A, #1E293B, #ADFF2F + slate.
*/

// TODO: replace with your real manager number (digits only, with country code for WhatsApp)
const MANAGER_PHONE = "919999999999";
const MANAGER_PHONE_DISPLAY = "+91 99999 99999";

const categories = [
  { key: "all", label: "All questions", icon: LayoutGrid },
  { key: "rent", label: "Rent & deposit", icon: IndianRupee },
  { key: "facilities", label: "Wi-Fi & facilities", icon: Wifi },
  { key: "food", label: "Food", icon: Utensils },
  { key: "safety", label: "Safety", icon: ShieldCheck },
  { key: "visitors", label: "Visitors", icon: Users },
];

const faqs = [
  {
    id: 1,
    cat: "rent",
    q: "What are the monthly rent and deposit terms?",
    a: "Rent depends on the sharing type you choose: double, triple or four sharing. A refundable security deposit is collected at admission and returned in full when you check out.",
  },
  {
    id: 2,
    cat: "facilities",
    q: "Is the Wi-Fi fast and available 24/7?",
    a: "Yes. The PG has dedicated high-speed fibre Wi-Fi, suited to remote work, IT professionals working near EON IT Park, and students attending online classes.",
  },
  {
    id: 3,
    cat: "food",
    q: "What is included in the mess food package?",
    a: "Three meals a day: breakfast with tea and a light snack, a wholesome lunch (with special items on weekends), and dinner with roti, rice, dal and sabzi. Chicken and egg specials are served weekly.",
  },
  {
    id: 4,
    cat: "visitors",
    q: "Can parents and guests visit?",
    a: "Parents and family are welcome in the lounge and common areas until 9:00 PM. Overnight stays in resident rooms are not permitted.",
  },
  {
    id: 5,
    cat: "safety",
    q: "What security measures are in place?",
    a: "The premises are covered by CCTV around the clock, entry is through secure gates, and a resident warden is on site. The main gate closes at 11:30 PM, and late entry is possible with prior notice.",
  },
  {
    id: 6,
    cat: "safety",
    q: "Can I come back late because of office shifts?",
    a: "Yes. Tell the PG manager before the day you will be late and the gate timing will be extended for you.",
  },
  {
    id: 7,
    cat: "facilities",
    q: "Can I use an induction cooktop or heater in my room?",
    a: "No. Heavy heating and cooking appliances are not allowed in bedrooms because they can overload the wiring. Meals are served in the mess.",
  },
];

const FAQ = () => {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [openId, setOpenId] = useState(1);

  const counts = useMemo(() => {
    const c = { all: faqs.length };
    faqs.forEach((f) => (c[f.cat] = (c[f.cat] || 0) + 1));
    return c;
  }, []);

  const visible = useMemo(() => {
    const s = query.trim().toLowerCase();
    return faqs.filter(
      (f) =>
        (cat === "all" || f.cat === cat) &&
        (!s || f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s))
    );
  }, [query, cat]);

  const iconFor = (key) => categories.find((c) => c.key === key)?.icon || LayoutGrid;

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: help desk */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-8 space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Questions, answered
              </h1>
              <p className="mt-4 text-slate-300 font-light leading-relaxed">
                Rent, food, Wi-Fi, safety and visitors. Search or pick a topic.
              </p>
            </div>

            {/* Search */}
            <label className="relative block">
              <span className="sr-only">Search questions</span>
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search, e.g. wifi, deposit"
                className="w-full bg-[#1E293B] border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ADFF2F] focus:ring-1 focus:ring-[#ADFF2F] transition"
              />
            </label>

            {/* Category filter */}
            <nav aria-label="Topics" className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((c) => {
                const Icon = c.icon;
                const active = cat === c.key;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setCat(c.key)}
                    aria-pressed={active}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-left border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] lg:w-full ${
                      active
                        ? "bg-[#ADFF2F] border-[#ADFF2F] text-[#0F172A] font-semibold"
                        : "bg-transparent border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-[#1E293B]/60"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="flex-1">{c.label}</span>
                    <span
                      className={`text-xs font-mono ${
                        active ? "text-[#0F172A]/70" : "text-slate-500"
                      }`}
                    >
                      {counts[c.key] || 0}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Contact card */}
            <div className="hidden lg:block bg-[#1E293B] border border-slate-700/80 rounded-2xl p-6">
              <h2 className="font-bold text-lg">Still not sure?</h2>
              <p className="mt-1 text-sm text-slate-400 font-light">
                Ask the PG manager directly.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`tel:+${MANAGER_PHONE}`}
                  className="flex items-center justify-center gap-2 bg-[#ADFF2F] text-[#0F172A] font-semibold text-sm rounded-xl py-3 hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="w-4 h-4" />
                  Call {MANAGER_PHONE_DISPLAY}
                </a>
                <a
                  href={`https://wa.me/${MANAGER_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-slate-600 text-white font-medium text-sm rounded-xl py-3 hover:border-[#ADFF2F] hover:text-[#ADFF2F] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right: answers */}
        <div className="lg:col-span-8">
          <p className="text-sm text-slate-400 mb-4" aria-live="polite">
            {visible.length} {visible.length === 1 ? "answer" : "answers"}
            {query ? ` for "${query}"` : ""}
          </p>

          {visible.length === 0 ? (
            <div className="bg-[#1E293B] border border-dashed border-slate-700 rounded-2xl p-10 text-center">
              <h2 className="font-bold text-lg">No answers match that search</h2>
              <p className="mt-2 text-sm text-slate-400 font-light">
                Try a shorter word, or clear the filters to see everything.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCat("all");
                }}
                className="mt-6 bg-[#ADFF2F] text-[#0F172A] font-semibold text-sm rounded-xl px-5 py-2.5 hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Clear search
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {visible.map((f) => {
                const isOpen = openId === f.id;
                const Icon = iconFor(f.cat);
                return (
                  <li
                    key={f.id}
                    className={`rounded-2xl border transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#1E293B] border-[#ADFF2F]/60"
                        : "bg-[#1E293B]/50 border-slate-800 hover:border-slate-600"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : f.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center gap-4 p-5 sm:p-6 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F]"
                    >
                      <span
                        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#ADFF2F] border-[#ADFF2F]"
                            : "bg-[#0F172A] border-slate-700"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${isOpen ? "text-[#0F172A]" : "text-[#ADFF2F]"}`}
                        />
                      </span>
                      <span className="flex-1 font-semibold text-base sm:text-lg leading-snug">
                        {f.q}
                      </span>
                      <span className="text-slate-400 shrink-0">
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-6 pb-6 sm:pl-[5.5rem] max-w-2xl text-slate-300 font-light leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Contact card for small screens (shown after the answers) */}
          <div className="lg:hidden mt-10 bg-[#1E293B] border border-slate-700/80 rounded-2xl p-6">
            <h2 className="font-bold text-lg">Still not sure?</h2>
            <p className="mt-1 text-sm text-slate-400 font-light">
              Ask the PG manager directly.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:+${MANAGER_PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 bg-[#ADFF2F] text-[#0F172A] font-semibold text-sm rounded-xl py-3"
              >
                <Phone className="w-4 h-4" />
                Call {MANAGER_PHONE_DISPLAY}
              </a>
              <a
                href={`https://wa.me/${MANAGER_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-slate-600 text-white font-medium text-sm rounded-xl py-3"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;