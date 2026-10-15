import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "double",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", roomType: "double", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* <span className="text-[#ADFF2F] font-semibold text-sm uppercase tracking-wider bg-slate-900 px-4 py-1.5 rounded-full border border-amber-400/40">
            Get in Touch
          </span> */}
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Contact Our Management</h1>
          <p className="text-slate-300 text-base sm:text-lg">We are here to answer all your inquiries regarding room availability, mess menus, and scheduled visits.</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-xl border border-amber-400/40">
          
          {/* Contact Details Column */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-l-4 border-[#ADFF2F] pl-3">Om Sai Ram PG Royal Park</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect with our managers directly or visit our facility for a guided walkthrough of our rooms and amenities.
              </p>
              
              <div className="space-y-4 text-slate-200 text-sm pt-2">
                <div className="flex items-start gap-3 bg-slate-950 p-4 rounded-2xl border border-amber-400/20">
                  <MapPin className="w-5 h-5 text-[#ADFF2F] shrink-0 mt-0.5" />
                  <span>Kharadkar Park, S.No.20/4, Om Sai Ram PG Royal Park, Kharadi - Hadapsar Bypass Rd, behind Salvi Bharat Petrol Pump, Raghoba Patil Nagar, Kharadi, Pune, Maharashtra 411014</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-2xl border border-amber-400/20">
                  <Phone className="w-5 h-5 text-[#ADFF2F] shrink-0" />
                  <span>+91 98765 43210 / +91 91234 56789</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-2xl border border-amber-400/20">
                  <Mail className="w-5 h-5 text-[#ADFF2F] shrink-0" />
                  <span>omsairampg@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-2xl border border-amber-400/20">
                  <Clock className="w-5 h-5 text-[#ADFF2F] shrink-0" />
                  <span>Visiting Hours: 9:00 AM – 8:00 PM (All Days)</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA Box */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-[#ADFF2F]/40 flex items-center justify-between">
              <div className="space-y-1">
                <h4 className="font-bold text-white text-sm">Instant Query on WhatsApp?</h4>
                <p className="text-slate-400 text-xs">Chat directly with our PG warden for fast responses.</p>
              </div>
              <a 
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Om%20Sai%20Ram%20PG%20room%20availability." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-md shadow-[#ADFF2F]/20 shrink-0 border border-amber-400/50"
              >
                <MessageSquare className="w-4 h-4" /> Chat Now
              </a>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-amber-400/30 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-2">Send an Enquiry</h4>
              
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ADFF2F] transition"
                  required 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ADFF2F] transition"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ADFF2F] transition"
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Interested Sharing Type</label>
                <select 
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ADFF2F] transition"
                >
                  <option value="single">Single Occupancy (Private)</option>
                  <option value="double">2 Sharing Room</option>
                  <option value="triple">3 Sharing Room</option>
                  <option value="quad">4 Sharing Room</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Message or Query</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention your expected move-in date or specific questions..." 
                  rows="3" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ADFF2F] transition resize-none" 
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#ADFF2F]/20 border border-amber-400/50 mt-4"
            >
              <Send className="w-4 h-4" /> Send Enquiry Message
            </button>

            {isSubmitted && (
              <div className="bg-slate-900 border border-[#ADFF2F]/50 text-[#ADFF2F] p-3 rounded-xl text-xs flex items-center gap-2 animate-fade-in mt-2">
                <CheckCircle2 className="w-4 h-4 text-[#ADFF2F] shrink-0" />
                <span>Thank you! Your message has been sent. Our manager will call you shortly.</span>
              </div>
            )}
          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;