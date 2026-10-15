import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  DoorClosed, 
  CreditCard, 
  AlertCircle, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  BookmarkCheck 
} from 'lucide-react';

const AdminDashboard = () => {
  const [pendingComplaintsCount, setPendingComplaintsCount] = useState(3);

  useEffect(() => {
    const savedComplaints = localStorage.getItem('pg_complaints');
    if (savedComplaints) {
      const parsed = JSON.parse(savedComplaints);
      const pending = parsed.filter(c => c.status === 'Pending' || c.status === 'In Progress').length;
      setPendingComplaintsCount(pending);
    }
  }, []);

  const stats = [
    { title: 'Total Tenants', count: '124', change: '+12% this month', icon: Users, color: 'bg-indigo-50 text-indigo-600' },
    { title: 'Room Occupancy', count: '88%', change: '42/48 Rooms Occupied', icon: DoorClosed, color: 'bg-emerald-50 text-emerald-600' },
    { title: 'Monthly Revenue', count: '₹10,54,000', change: '94% collected', icon: CreditCard, color: 'bg-blue-50 text-blue-600' },
    { title: 'Pending Complaints', count: pendingComplaintsCount.toString(), change: 'Requires attention', icon: AlertCircle, color: 'bg-rose-50 text-rose-600' },
  ];

  const recentBookings = [
    { id: 1, name: 'Rohan Mehta', room: 'Double AC (B-202)', date: '1 Oct 2026', status: 'Pending' },
    { id: 2, name: 'Ananya Deshmukh', room: 'Single Non-AC (A-104)', date: '30 Sep 2026', status: 'Confirmed' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Admin Control Center ⚡</h2>
          <p className="text-slate-300 mt-1">Monitor hostel operations, finances, room allocations, and tenant activity in real-time.</p>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-sm font-medium">System Status: <strong className="text-emerald-300">Operational</strong></span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{item.title}</span>
                <div className={`p-2.5 rounded-xl ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-800">{item.count}</h3>
                <p className="text-xs text-gray-400 mt-1 font-medium">{item.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Management Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link to="/admin/tenants" className="flex flex-col items-center justify-center p-4 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 border border-indigo-100/60 text-indigo-700 transition-all group">
                <Users className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Tenants</span>
              </Link>
              <Link to="/admin/rooms" className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100/60 text-emerald-700 transition-all group">
                <DoorClosed className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Rooms</span>
              </Link>
              <Link to="/admin/rent" className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100/60 text-blue-700 transition-all group">
                <CreditCard className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Rent Collection</span>
              </Link>
              <Link to="/admin/complaints" className="flex flex-col items-center justify-center p-4 rounded-xl bg-rose-50/50 hover:bg-rose-50 border border-rose-100/60 text-rose-700 transition-all group">
                <AlertCircle className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">Complaints</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Bookings Sidebar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-indigo-600" /> Recent Bookings
            </h3>
            <Link to="/admin/bookings" className="text-xs text-indigo-600 font-semibold hover:underline">View All</Link>
          </div>

          <div className="space-y-4 flex-1">
            {recentBookings.map((b) => (
              <div key={b.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{b.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    b.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {b.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{b.room}</p>
                <p className="text-[10px] text-gray-400 mt-1">Applied on {b.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;