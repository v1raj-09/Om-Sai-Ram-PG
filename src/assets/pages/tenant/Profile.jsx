import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Shield, KeyRound, CheckCircle, Save, Edit3, Building2 } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    phone: '+91 98765 43210',
    emergencyContact: '+91 91234 56789 (Father)',
    college: 'Campus Bridge Institute of Technology',
    course: 'B.Tech Computer Science (Final Year)',
    room: 'B-402'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tenantProfile');
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('tenantProfile', JSON.stringify(profile));
    localStorage.setItem('userName', profile.name);
    localStorage.setItem('userEmail', profile.email);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-2xl sm:text-3xl font-black shadow-inner">
            {profile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{profile.name}</h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5" /> Active Tenant
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">{profile.course} • Room {profile.room}</p>
            <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-indigo-500" /> {profile.college}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md ${
            isEditing
              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
              : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20"
          }`}
        >
          {isEditing ? 'Cancel Editing' : <><Edit3 className="w-4 h-4" /> Edit Profile</>}
        </button>
      </div>

      {savedSuccess && (
        <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl animate-in fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-semibold">Profile updated and saved successfully!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info Form */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2 pb-4 border-b border-gray-100">
            <User className="w-5 h-5 text-indigo-600" /> Personal & Academic Details
          </h3>

          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Full Name</label>
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
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Email Address</label>
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
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Phone Number</label>
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
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Emergency Contact</label>
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
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Institution / College</label>
                <input
                  type="text"
                  name="college"
                  disabled={!isEditing}
                  value={profile.college}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Course & Year</label>
                <input
                  type="text"
                  name="course"
                  disabled={!isEditing}
                  value={profile.course}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-600 font-medium transition"
                />
              </div>
            </div>

            {isEditing && (
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                >
                  <Save className="w-4 h-4" /> Save Changes
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Security & Password Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" /> Security
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">Update your account password regularly to keep your tenant portal secure.</p>
            <button
              onClick={() => alert('Password reset link sent to registered email!')}
              className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl text-sm border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4 text-indigo-600" /> Change Password
            </button>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-2 font-medium">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Account Verified & Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;