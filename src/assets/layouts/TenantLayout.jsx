import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  CreditCard, 
  Utensils, 
  FileText, 
  AlertCircle, 
  Bell, 
  Users, 
  MessageSquare, 
  User, 
  LogOut, 
  Menu, 
  X,
  Receipt
} from 'lucide-react';

const TenantLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/tenant/dashboard', icon: LayoutDashboard },
    { name: 'My Room', path: '/tenant/my-room', icon: Home },
    { name: 'Rent & Bills', path: '/tenant/rent', icon: Receipt },
    { name: 'Payments', path: '/tenant/payments', icon: CreditCard },
    { name: 'Food / Mess', path: '/tenant/food', icon: Utensils },
    { name: 'Complaints', path: '/tenant/complaints', icon: AlertCircle },
    { name: 'Notices', path: '/tenant/notices', icon: Bell },
    { name: 'Visitors', path: '/tenant/visitors', icon: Users },
   
    { name: 'Feedback', path: '/tenant/feedback', icon: MessageSquare },
    { name: 'Profile', path: '/tenant/profile', icon: User },
  ];

  const handleLogout = () => {
    // Clear auth state/tokens here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Backdrop */}
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
        {/* Brand Header */}
        
        

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'hover:bg-slate-800/60 hover:text-white text-slate-400'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer Logout */}
        <div className="p-4 bg-slate-950/40">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Top Header */}
        

        {/* Dynamic Page Views */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TenantLayout;