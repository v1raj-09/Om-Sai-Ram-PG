import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Utensils, 
  AlertCircle, 
  Bell, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldAlert,
  Home
} from 'lucide-react';

const Dashboard = () => {
  const tenantInfo = {
    name: 'Alex Rivera',
    room: 'B-402',
    hostel: 'Campus Bridge Residency',
    dueDate: '5th Oct 2026',
    messMenuToday: 'Paneer Butter Masala, Dal Fry, Roti, Rice',
  };

  // Sync Rent Status & Complaints from localStorage
  const [rentStatus, setRentStatus] = useState(() => {
    return localStorage.getItem('pg_rent_status') || 'Paid';
  });

  const [pendingComplaintsCount, setPendingComplaintsCount] = useState(1);
  const [recentNotices, setRecentNotices] = useState([
    { id: 1, title: 'Monthly Maintenance Schedule', date: '28 Sep 2026', tag: 'Maintenance' },
    { id: 2, title: 'Mess Timing Updates for Festival Week', date: '25 Sep 2026', tag: 'Mess' },
  ]);

  useEffect(() => {
    // Check complaints count
    const savedComplaints = localStorage.getItem('pg_complaints');
    if (savedComplaints) {
      const parsed = JSON.parse(savedComplaints);
      const pending = parsed.filter(c => c.status !== 'Resolved').length;
      setPendingComplaintsCount(pending);
    }

    // Check notices from admin
    const savedNotices = localStorage.getItem('pg_notices');
    if (savedNotices) {
      setRecentNotices(JSON.parse(savedNotices));
    }

    // Check rent status
    const savedRent = localStorage.getItem('pg_rent_status');
    if (savedRent) {
      setRentStatus(savedRent);
    }
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, {tenantInfo.name}! 👋</h2>
          <p className="text-indigo-100 mt-1">
            {tenantInfo.hostel} • Room <span className="font-semibold text-white">{tenantInfo.room}</span>
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
          <div className={`w-3 h-3 rounded-full ${rentStatus === 'Paid' ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`}></div>
          <span className="text-sm font-medium">Rent Status: <strong className={rentStatus === 'Paid' ? 'text-emerald-300' : 'text-amber-300'}>{rentStatus}</strong></span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Rent */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Next Rent Due</span>
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800">₹8,500</h3>
            <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Due by {tenantInfo.dueDate}
            </p>
          </div>
        </div>

        {/* Card 2: My Room */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Room Details</span>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <Home className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800">Double Sharing</h3>
            <Link to="/tenant/my-room" className="text-xs text-indigo-600 font-semibold mt-1 inline-flex items-center gap-1 hover:underline">
              View roommates & inventory <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Card 3: Mess */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Today's Special</span>
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
              <Utensils className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{tenantInfo.messMenuToday}</h3>
            <Link to="/tenant/food" className="text-xs text-amber-600 font-semibold mt-1 inline-flex items-center gap-1 hover:underline">
              Check full menu <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Card 4: Complaints */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Active Complaints</span>
            <div className="p-2.5 bg-rose-50 text-rose-600 rounded-xl">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800">{pendingComplaintsCount} Request</h3>
            <Link to="/tenant/complaints" className="text-xs text-rose-600 font-semibold mt-1 inline-flex items-center gap-1 hover:underline">
              Track status <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link to="/tenant/rent" className="flex flex-col items-center justify-center p-4 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 border border-indigo-100/60 text-indigo-700 transition-all group">
                <CreditCard className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Pay Rent</span>
              </Link>
              <Link to="/tenant/complaints" className="flex flex-col items-center justify-center p-4 rounded-xl bg-rose-50/50 hover:bg-rose-50 border border-rose-100/60 text-rose-700 transition-all group">
                <ShieldAlert className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Raise Issue</span>
              </Link>
              <Link to="/tenant/visitors" className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100/60 text-emerald-700 transition-all group">
                <Clock className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Add Visitor</span>
              </Link>
              <Link to="/tenant/documents" className="flex flex-col items-center justify-center p-4 rounded-xl bg-amber-50/50 hover:bg-amber-50 border border-amber-100/60 text-amber-700 transition-all group">
                <FileText className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Agreement</span>
              </Link>
            </div>
          </div>

          {/* Mess Feedback prompt */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-md flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">How was today's meal?</h4>
              <p className="text-amber-100 text-sm mt-0.5">Rate your food experience to help the mess committee improve.</p>
            </div>
            <Link to="/tenant/food" className="bg-white text-orange-600 px-5 py-2.5 rounded-xl font-semibold text-sm shadow hover:bg-amber-50 transition-colors shrink-0">
              Rate Now
            </Link>
          </div>
        </div>

        {/* Notices & Announcements Sidebar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Bell className="w-5 h-5 text-indigo-600" /> Notices
            </h3>
            <Link to="/tenant/notices" className="text-xs text-indigo-600 font-semibold hover:underline">View All</Link>
          </div>

          <div className="space-y-4 flex-1">
            {recentNotices.slice(0, 3).map((notice) => (
              <div key={notice.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 font-medium">{notice.tag || 'Notice'}</span>
                  <span>{notice.date}</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm mt-1">{notice.title || notice.heading}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;