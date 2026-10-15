// import React, { useState } from "react";
// import { Check, MessageCircle, ArrowRight } from "lucide-react";

// // Replace with your real WhatsApp number (country code + number, no + or spaces)
// const WHATSAPP_NUMBER = "919999999999";

// const FILTERS = [
//   { id: "all", label: "All rooms" },
//   { id: "single", label: "Single Sharing" },
//   { id: "double", label: "2 Sharing" },
//   { id: "triple", label: "3 Sharing" },
// ];

// const rooms = [
//   {
//     category: "single",
//     tag: "Single Sharing",
//     title: "Single Occupancy Room",
//     price: "₹8,000",
//     deposit: "₹2,000",
//     desc: "A private room designed for maximum privacy, premium comfort, and individual study setup.",
//     features: ["Attached Private Bathroom", "High-Speed Wi-Fi", "Daily Cleaning", "Large Wardrobe & Study Desk"],
//     image: "/pgroom2.webp",
//   },
//   {
//     category: "double",
//     tag: "2 Sharing",
//     title: "2 Sharing Room",
//     price: "₹6,500",
//     deposit: "₹2,000",
//     desc: "Spacious twin-sharing room equipped with individual beds, study tables, and attached wardrobes.",
//     features: ["Attached Bathroom", "High-Speed Wi-Fi", "Daily Cleaning", "Individual Wardrobes"],
//     image: "/pgroom1.webp",
//   },
//   {
//     category: "triple",
//     tag: "3 Sharing",
//     title: "3 Sharing Room",
//     price: "₹6,500",
//     deposit: "₹2,000",
//     desc: "Comfortable and budget-friendly triple sharing accommodation optimized for students and working professionals.",
//     features: ["Shared Bathroom", "High-Speed Wi-Fi", "Power Backup", "RO Water Access"],
//     image: "/pgroom11.webp",
//   },
// ];

// const RoomCard = ({ room }) => {
//   const message = encodeURIComponent(`Hi, I'd like to enquire about the ${room.title} (${room.price}/month with ${room.deposit} deposit).`);

//   return (
//     <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 group">
//       <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
//         <img
//           src={room.image}
//           alt={`${room.title} at our PG`}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
//         <span className="absolute left-4 top-4 rounded-full bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wide shadow-sm">
//           {room.tag}
//         </span>
//       </div>

//       <div className="flex flex-1 flex-col p-6 sm:p-7">
//         <h3 className="text-xl font-bold tracking-tight text-slate-900">{room.title}</h3>

//         <div className="mt-4 flex items-baseline gap-1.5">
//           <span className="text-3xl font-extrabold tracking-tight text-slate-900">{room.price}</span>
//           <span className="text-sm font-medium text-slate-500">per month</span>
//         </div>
//         <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md w-fit">
//           <span>Security Deposit: {room.deposit}</span>
//         </div>

//         <p className="mt-4 text-sm leading-relaxed text-slate-600">{room.desc}</p>

//         <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
//           {room.features.map((feature) => (
//             <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
//               <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
//               {feature}
//             </li>
//           ))}
//         </ul>

//         <div className="mt-8 pt-2">
//           <a
//             href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
//           >
//             <MessageCircle className="h-4 w-4" aria-hidden="true" />
//             Enquire on WhatsApp
//             <ArrowRight className="h-4 w-4 ml-0.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// };

// const Rooms = () => {
//   const [active, setActive] = useState("all");
//   const visible = active === "all" ? rooms : rooms.filter((r) => r.category === active);

//   return (
//     <section className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8 lg:py-24">
//       <div className="mx-auto max-w-7xl">
//         <header className="max-w-2xl">
//           <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
//             Accommodation
//           </span>
//           <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             Rooms and Pricing
//           </h1>
//           <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
//             Clean, fully furnished living spaces tailored for students and working professionals. Transparent pricing with flexible sharing options and essential modern amenities included.
//           </p>
//         </header>

//         <div
//           role="tablist"
//           aria-label="Filter rooms by type"
//           className="mt-10 flex flex-wrap gap-2.5"
//         >
//           {FILTERS.map((f) => {
//             const selected = active === f.id;
//             return (
//               <button
//                 key={f.id}
//                 role="tab"
//                 aria-selected={selected}
//                 onClick={() => setActive(f.id)}
//                 className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 ${
//                   selected
//                     ? "border-slate-900 bg-slate-900 text-white shadow-sm"
//                     : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100/50"
//                 }`}
//               >
//                 {f.label}
//               </button>
//             );
//           })}
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {visible.map((room, idx) => (
//             <RoomCard key={`${room.title}-${idx}`} room={room} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rooms;

import React, { useState } from "react";
import { Check, MessageCircle, ArrowRight } from "lucide-react";

// Replace with your real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919999999999";

const FILTERS = [
  { id: "all", label: "All rooms" },
  { id: "single", label: "Single Sharing" },
  { id: "double", label: "2 Sharing" },
  { id: "triple", label: "3 Sharing" },
];

const rooms = [
  {
    category: "single",
    tag: "Single Sharing",
    title: "Single Occupancy Room",
    price: "₹8,000",
    deposit: "₹2,000",
    desc: "A private room designed for maximum privacy, premium comfort, and individual study setup.",
    features: ["Attached Private Bathroom", "High-Speed Wi-Fi", "Daily Cleaning", "Large Wardrobe & Study Desk"],
    image: "/pgroom2.webp",
  },
  {
    category: "double",
    tag: "2 Sharing",
    title: "2 Sharing Room",
    price: "₹6,500",
    deposit: "₹2,000",
    desc: "Spacious twin-sharing room equipped with individual beds, study tables, and attached wardrobes.",
    features: ["Attached Bathroom", "High-Speed Wi-Fi", "Daily Cleaning", "Individual Wardrobes"],
    image: "/pgroom1.webp",
  },
  {
    category: "triple",
    tag: "3 Sharing",
    title: "3 Sharing Room",
    price: "₹6,500",
    deposit: "₹2,000",
    desc: "Comfortable and budget-friendly triple sharing accommodation optimized for students and working professionals.",
    features: ["Shared Bathroom", "High-Speed Wi-Fi", "Power Backup", "RO Water Access"],
    image: "/pgroom11.webp",
  },
];

const RoomCard = ({ room }) => {
  const message = encodeURIComponent(`Hi, I'd like to enquire about the ${room.title} (${room.price}/month with ${room.deposit} deposit).`);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-amber-400/40 bg-slate-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#ADFF2F] group">
      <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
        <img
          src={room.image}
          alt={`${room.title} at our PG`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wide shadow-sm border border-amber-400/30">
          {room.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-white">{room.title}</h3>

        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="text-3xl font-extrabold tracking-tight text-white">{room.price}</span>
          <span className="text-sm font-medium text-slate-400">per month</span>
        </div>
        <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md w-fit border border-amber-400/20">
          <span>Security Deposit: {room.deposit}</span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">{room.desc}</p>

        <ul className="mt-6 space-y-3 border-t border-slate-800 pt-6">
          {room.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ADFF2F]" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#ADFF2F] px-5 py-3.5 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-[#98fb98] hover:shadow-lg hover:shadow-[#ADFF2F]/20 border border-amber-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enquire on WhatsApp
            <ArrowRight className="h-4 w-4 ml-0.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};

const Rooms = () => {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? rooms : rooms.filter((r) => r.category === active);

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ADFF2F] bg-slate-900 px-3.5 py-1.5 rounded-full border border-amber-400/40">
            Accommodation
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Rooms and Pricing
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Clean, fully furnished living spaces tailored for students and working professionals. Transparent pricing with flexible sharing options and essential modern amenities included.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Filter rooms by type"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {FILTERS.map((f) => {
            const selected = active === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(f.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ADFF2F] focus-visible:ring-offset-2 ${
                  selected
                    ? "border-amber-400 bg-[#ADFF2F] text-slate-950 shadow-md shadow-[#ADFF2F]/10 font-bold"
                    : "border-amber-400/30 bg-slate-900 text-slate-300 hover:border-[#ADFF2F] hover:bg-slate-800/80"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((room, idx) => (
            <RoomCard key={`${room.title}-${idx}`} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;