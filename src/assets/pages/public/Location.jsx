import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Building2,
  Bus,
  ShoppingBag,
  Stethoscope,
  Home,
  Copy,
  Check,
  Car,
  Footprints,
  TrainFront,
  Bike,
} from "lucide-react";

/*
  Location layout: explorable map
  - Pick a place (the PG or a nearby landmark) and the map moves to it.
  - The detail panel shows why it matters, plus directions for the travel mode you choose.
  Palette matches the other pages: #0F172A, #1E293B, #ADFF2F + slate.
*/

const PG_ADDRESS =
  "Kharadkar Park, S.No.20/4, Om Sai Ram PG Royal Park, Kharadi - Hadapsar Bypass Rd, behind Salvi Bharat Petrol Pump, Raghoba Patil Nagar, Kharadi, Pune, Maharashtra 411014";

const places = [
  {
    key: "pg",
    icon: Home,
    title: "Om Sai Ram PG, Royal Park",
    distance: "You will stay here",
    desc: "Behind Salvi Bharat Petrol Pump on Kharadi - Hadapsar Bypass Rd.",
    query: "Salvi Bharat Petrol Pump Kharadi Pune",
  },
  {
    key: "bypass",
    icon: Building2,
    title: "Kharadi - Hadapsar Bypass Rd",
    distance: "2 mins away",
    desc: "Direct road connectivity to EON IT Park, World Trade Center and other commercial hubs.",
    query: "Kharadi Hadapsar Bypass Road Pune",
  },
  {
    key: "petrol",
    icon: Bus,
    title: "Salvi Bharat Petrol Pump",
    distance: "Right in front",
    desc: "An easy landmark for cabs and deliveries, and a good pickup point for public transport.",
    query: "Salvi Bharat Petrol Pump Kharadi Pune",
  },
  {
    key: "market",
    icon: ShoppingBag,
    title: "Raghoba Patil Nagar Market",
    distance: "Walking distance",
    desc: "Daily convenience stores, supermarkets, cafes and other essentials close by.",
    query: "Raghoba Patil Nagar Kharadi Pune",
  },
  {
    key: "health",
    icon: Stethoscope,
    title: "Hospitals & healthcare",
    distance: "5 mins away",
    desc: "Multi-specialty hospitals, 24/7 medical stores and emergency clinics nearby.",
    query: "hospitals near Kharadi Pune",
  },
];

const modes = [
  { key: "driving", label: "Drive", icon: Car },
  { key: "two-wheeler", label: "Bike", icon: Bike },
  { key: "transit", label: "Transit", icon: TrainFront },
  { key: "walking", label: "Walk", icon: Footprints },
];

const Location = () => {
  const [activeKey, setActiveKey] = useState("pg");
  const [mode, setMode] = useState("driving");
  const [copied, setCopied] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const active = places.find((p) => p.key === activeKey);
  const ActiveIcon = active.icon;

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    active.query
  )}&z=16&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    active.query
  )}&travelmode=${mode}`;

  const selectPlace = (key) => {
    if (key === activeKey) return;
    setMapLoaded(false);
    setActiveKey(key);
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(PG_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Clipboard can be blocked; the address stays visible on the page to copy by hand.
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Find us in Kharadi
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            In Pune's tech corridor, close to EON IT Park. Tap a place to see it
            on the map and get directions.
          </p>
        </header>

        {/* Address bar */}
        <div className="mt-10 bg-[#1E293B] border border-slate-700/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="w-11 h-11 shrink-0 rounded-xl bg-[#0F172A] border border-slate-700 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#ADFF2F]" />
          </span>
          <address className="not-italic flex-1 text-sm sm:text-base text-slate-200 leading-relaxed">
            {PG_ADDRESS}
          </address>
          <button
            type="button"
            onClick={copyAddress}
            className={`shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] ${
              copied
                ? "bg-[#ADFF2F] border-[#ADFF2F] text-[#0F172A]"
                : "border-slate-600 text-white hover:border-[#ADFF2F] hover:text-[#ADFF2F]"
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span aria-live="polite">{copied ? "Address copied" : "Copy address"}</span>
          </button>
        </div>

        {/* Explorer */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Place list */}
          <nav aria-label="Places near the PG" className="lg:col-span-4 space-y-2">
            {places.map((p) => {
              const Icon = p.icon;
              const isActive = p.key === activeKey;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => selectPlace(p.key)}
                  aria-pressed={isActive}
                  className={`w-full flex items-center gap-4 text-left rounded-2xl border p-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] ${
                    isActive
                      ? "bg-[#1E293B] border-[#ADFF2F]/70"
                      : "bg-[#1E293B]/40 border-slate-800 hover:border-slate-600 hover:bg-[#1E293B]/70"
                  }`}
                >
                  <span
                    className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center border transition-colors duration-200 ${
                      isActive
                        ? "bg-[#ADFF2F] border-[#ADFF2F]"
                        : "bg-[#0F172A] border-slate-700"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive ? "text-[#0F172A]" : "text-[#ADFF2F]"}`}
                    />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-semibold text-sm sm:text-base truncate ${
                        isActive ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {p.title}
                    </span>
                    <span className="block text-xs text-slate-400 mt-0.5">{p.distance}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Map + details */}
          <div className="lg:col-span-8 bg-[#1E293B] border border-slate-700/80 rounded-2xl overflow-hidden flex flex-col">
            {/* Map */}
            <div className="relative h-[320px] sm:h-[400px] bg-[#0F172A]">
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
                  Loading map…
                </div>
              )}
              <iframe
                key={activeKey}
                title={`Map of ${active.title}`}
                src={mapSrc}
                onLoad={() => setMapLoaded(true)}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full border-0 transition-opacity duration-500 ${
                  mapLoaded ? "opacity-100" : "opacity-0"
                }`}
              ></iframe>
            </div>

            {/* Detail panel */}
            <div className="p-5 sm:p-7 space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-[#0F172A] border border-slate-700 flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5 text-[#ADFF2F]" />
                </span>
                <div>
                  <h2 className="text-xl font-bold">{active.title}</h2>
                  <p className="mt-1 text-sm text-[#ADFF2F] font-medium">{active.distance}</p>
                  <p className="mt-3 text-slate-300 font-light leading-relaxed max-w-xl">
                    {active.desc}
                  </p>
                </div>
              </div>

              {/* Travel mode + directions */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-5 border-t border-slate-700">
                <div
                  role="group"
                  aria-label="Travel mode"
                  className="flex bg-[#0F172A] border border-slate-800 rounded-xl p-1"
                >
                  {modes.map((m) => {
                    const Icon = m.icon;
                    const on = mode === m.key;
                    return (
                      <button
                        key={m.key}
                        type="button"
                        onClick={() => setMode(m.key)}
                        aria-pressed={on}
                        className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] ${
                          on
                            ? "bg-[#ADFF2F] text-[#0F172A]"
                            : "text-slate-300 hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {m.label}
                      </button>
                    );
                  })}
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:ml-auto inline-flex items-center justify-center gap-2 bg-[#ADFF2F] text-[#0F172A] font-bold text-sm rounded-xl px-6 py-3 hover:brightness-110 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Navigation className="w-4 h-4" />
                  Directions by {modes.find((m) => m.key === mode).label.toLowerCase()}
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Directions open in Google Maps and start from your current location.
        </p>
      </div>
    </section>
  );
};

export default Location;