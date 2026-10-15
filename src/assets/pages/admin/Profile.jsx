import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  ShieldCheck,
  KeyRound,
  CheckCircle,
  MapPin,
  Clock,
  Save,
  Edit3
} from "lucide-react";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: "Admin Owner",
    email: "admin@omsairampg.com",
    phone: "+91 98765 43210",
    role: "Property Owner & Super Administrator",
    pgName: "Om Sai Ram PG & Living",
    address: "Phase 1, Near Tech Park, Hinjawadi, Pune - 411057",
    upiId: "omsairampg@upi",
    emergencyContact: "+91 98765 00000",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adminProfile");
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    } else {
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        setProfile((prev) => ({ ...prev, email: storedEmail }));
      }
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("adminProfile", JSON.stringify(profile));
    localStorage.setItem("userName", profile.name);
    localStorage.setItem("userEmail", profile.email);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-slate-800">
        <div className="flex items-center gap-5">
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-[#ADFF2F] flex items-center justify-center text-slate-950 text-2xl sm:text-3xl font-black shadow-lg shadow-[#ADFF2F]/20 border-2 border-white/20">
            {profile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{profile.name}</h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ADFF2F]/20 text-[#ADFF2F] border border-[#ADFF2F]/40">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Admin
              </span>
            </div>
            <p className="text-slate-300 text-sm mt-1">{profile.role}</p>
            <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#ADFF2F]" /> {profile.pgName}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
            isEditing
              ? "bg-slate-700 hover:bg-slate-600 text-white"
              : "bg-[#ADFF2F] hover:bg-[#98fb98] text-slate-950 shadow-[#ADFF2F]/20"
          }`}
        >
          {isEditing ? 'Cancel' : <><Edit3 className="w-4 h-4" /> Edit Profile</>}
        </button>
      </div>

      {savedSuccess && (
        <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl animate-in fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-semibold">Admin profile updated successfully!</span>
        </div>
      )}

      {/* Main Content Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information Form */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-600" /> Admin Personal & Contact Details
            </h3>
            {isEditing && (
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                Editing Mode
              </span>
            )}
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  disabled={!isEditing}
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Official Email
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Emergency Support Phone
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  disabled={!isEditing}
                  value={profile.emergencyContact}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Hostel / PG Name
                </label>
                <input
                  type="text"
                  name="pgName"
                  disabled={!isEditing}
                  value={profile.pgName}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Rent UPI ID
                </label>
                <input
                  type="text"
                  name="upiId"
                  disabled={!isEditing}
                  value={profile.upiId}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Hostel Address
              </label>
              <textarea
                name="address"
                rows={2}
                disabled={!isEditing}
                value={profile.address}
                onChange={handleChange}
                className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
              />
            </div>

            {isEditing && (
              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Role & Security Overview */}
        <div className="space-y-6">
          {/* Permissions & Role Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Admin Access Rights
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Full Tenant & Resident Management</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Room & Bed Allocation Control</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Rent, Payments & Expenses Ledger</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Food / Mess Menu Scheduling</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Complaints Resolution & Notices Broadcast</span>
              </li>
            </ul>
          </div>

          {/* Quick Security Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-indigo-600" /> Security & Session
            </h4>
            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span>Account Status</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span>Role Level</span>
                <span className="font-bold text-indigo-600">Super Admin</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Session Timeout</span>
                <span className="font-bold text-slate-700">30 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;