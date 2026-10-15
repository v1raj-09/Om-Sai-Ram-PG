import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck, Wifi, Utensils, Users, Calendar, X } from "lucide-react";

// Replace with your real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919999999999";

const heroImages = [
  { src: "/omsairampg.jpeg", title: "Modern furnished rooms" },
  { src: "/pggallery3.webp", title: "Spacious common areas" },
  { src: "/pggallery5.webp", title: "Hygienic dining and kitchen" },
];

const roomOptions = [
  { value: "Single Occupancy", label: "Single occupancy (private)" },
  { value: "2 Sharing", label: "2 sharing (most popular)" },
  { value: "Deluxe", label: "Deluxe" },
];

const highlights = [
  { icon: ShieldCheck, label: "24/7 security" },
  { icon: Wifi, label: "High-speed Wi-Fi" },
  { icon: Utensils, label: "3-time meals" },
];

const Hero = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomType, setRoomType] = useState("2 Sharing");
  const [moveInDate, setMoveInDate] = useState("");

  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD

  // Close modal with Escape and lock page scroll while it is open
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsModalOpen(false);
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(`${moveInDate}T00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const text = encodeURIComponent(
      `Hi, I'd like to check availability for a ${roomType} room at Om Sai Ram PG from ${date}.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
    setMoveInDate("");
  };

  return (
    <section className="relative overflow-hidden border-b border-[#ADFF2F]/60 bg-slate-900 text-white">
      {/* Background images (cross-fade) */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={idx === activeImageIndex ? img.title : ""}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === activeImageIndex ? "opacity-45" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
      </div>

      {/* Image selector */}
      <div
        className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-3 py-2 backdrop-blur-md sm:flex"
        role="group"
        aria-label="Choose background photo"
      >
        {heroImages.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setActiveImageIndex(idx)}
            aria-label={`Show photo: ${img.title}`}
            aria-pressed={activeImageIndex === idx}
            className={`h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] ${
              activeImageIndex === idx ? "w-6 bg-[#ADFF2F]" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start space-y-6 px-4 pb-20 pt-4 sm:px-6 sm:pb-28 sm:pt-6 lg:px-8 lg:pb-36 lg:pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ADFF2F]/60 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#ADFF2F]">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Premium living in Pune
        </div>

        <h1 className="max-w-3xl text-4xl leading-[1.1] tracking-tight text-[#F4F0DA] sm:text-6xl lg:text-7xl">
  <span className="block font-light">Your Comfortable</span>
  <span className="block font-extrabold">
    <span className="text-[#cd8211]">Home Away</span> From Home
  </span>
</h1>

        <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Uncompromised security, home-cooked food, high-speed Wi-Fi and fully furnished rooms,
          made for students and IT professionals.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/rooms"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#ADFF2F] px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-[#ADFF2F]/20 transition-colors hover:bg-[#c2ff5f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-base"
          >
            Explore rooms
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-[#ADFF2F]/70 bg-slate-900/60 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-base"
          >
            <Users className="h-5 w-5 text-[#ADFF2F]" aria-hidden="true" />
            Check availability
          </button>
        </div>

        <ul className="grid w-full max-w-xl grid-cols-1 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-slate-300">
              <Icon className="h-5 w-5 shrink-0 text-[#ADFF2F]" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Availability enquiry modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="availability-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-800 p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F]"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 id="availability-title" className="text-xl font-bold text-white">
              Check room availability
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Tell us what you need and our manager will reply on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="room-type" className="mb-1 block text-xs font-medium text-slate-300">
                  Room type
                </label>
                <select
                  id="room-type"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-sm text-white focus:border-[#ADFF2F] focus:outline-none focus:ring-1 focus:ring-[#ADFF2F]"
                >
                  {roomOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="move-in" className="mb-1 block text-xs font-medium text-slate-300">
                  Expected move-in date
                </label>
                <div className="relative">
                  <input
                    id="move-in"
                    type="date"
                    min={today}
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-sm text-white focus:border-[#ADFF2F] focus:outline-none focus:ring-1 focus:ring-[#ADFF2F]"
                  />
                  <Calendar
                    className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-[#ADFF2F]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ADFF2F] py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-[#c2ff5f] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
              >
                Send enquiry on WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;