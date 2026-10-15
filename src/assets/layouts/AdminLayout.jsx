import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BedDouble, 
  BookmarkCheck, 
  AlertCircle, 
  FileText, 
  Receipt, 
  Utensils, 
  Bell, 
  CreditCard, 
  DollarSign, 
  BarChart3, 
  DoorClosed, 
  Users, 
  UserCheck, 
  UserPlus, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Tenants', path: '/admin/tenants', icon: UserCheck },
    { name: 'Rooms & Beds', path: '/admin/rooms', icon: DoorClosed },
   
    { name: 'Bookings', path: '/admin/bookings', icon: BookmarkCheck },
    { name: 'Rent Management', path: '/admin/rent', icon: Receipt },
    { name: 'Payments & Ledger', path: '/admin/payments', icon: CreditCard },
    { name: 'Expenses', path: '/admin/expenses', icon: DollarSign },
    { name: 'Mess & Food', path: '/admin/food', icon: Utensils },
    { name: 'Complaints', path: '/admin/complaints', icon: AlertCircle },
    { name: 'Notices', path: '/admin/notices', icon: Bell },
    { name: 'Visitors Log', path: '/admin/visitors', icon: Users },
    { name: 'Staff Management', path: '/admin/staff', icon: UserPlus },

    { name: 'Reports & Analytics', path: '/admin/reports', icon: BarChart3 },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-screen bg-gray-50 overflow-hidden">
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'hover:bg-slate-800/60 hover:text-white text-slate-400'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 bg-slate-950/40 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area (फक्त पेजेस इथे लोड होतील, वरचा पांढरा header पूर्णपणे काढला आहे) */}
      <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden">
        
        {/* मोबाईलसाठी फक्त छोटा टॉगल बटण हवा असल्यास इथे ठेवू शकता, पण सध्या थेट मुख्य कंटेंट आहे */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;