import React, { useState } from 'react';
import { Users, Search, Plus, Filter, Phone, Mail, MapPin, MoreVertical, Edit, Trash2, CheckCircle } from 'lucide-react';

const Tenants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const tenantsList = [
    { id: 1, name: 'Alex Rivera', room: 'B-402', phone: '+91 98765 43210', email: 'alex.rivera@example.com', status: 'Active', rentStatus: 'Paid' },
    { id: 2, name: 'Priya Sharma', room: 'A-101', phone: '+91 91234 56789', email: 'priya.sharma@example.com', status: 'Active', rentStatus: 'Pending' },
    { id: 3, name: 'Rahul Verma', room: 'C-305', phone: '+91 99887 76655', email: 'rahul.verma@example.com', status: 'Active', rentStatus: 'Paid' },
    { id: 4, name: 'Sneha Patil', room: 'B-201', phone: '+91 97654 32109', email: 'sneha.patil@example.com', status: 'Checked Out', rentStatus: 'Cleared' },
  ];

  const filteredTenants = tenantsList.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Tenant Management</h2>
          <p className="text-gray-500 text-sm mt-0.5">Manage hostel residents, contact details, stay statuses, and rent clearances.</p>
        </div>
        <button
          onClick={() => alert('Open Add Tenant Modal')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add New Tenant
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, room, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 transition-colors">
            <Filter className="w-4 h-4" /> Filter Status
          </button>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Tenant Details</th>
                <th className="py-4 px-6">Room / Bed</th>
                <th className="py-4 px-6">Contact Info</th>
                <th className="py-4 px-6">Stay Status</th>
                <th className="py-4 px-6">Rent Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredTenants.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-sm shrink-0">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-700">
                    <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-800">{t.room}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-gray-400" /> {t.phone}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      t.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      t.rentStatus === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 
                      t.rentStatus === 'Pending' ? 'bg-rose-50 text-rose-700' : 'bg-blue-50 text-blue-700'
                    }`}>
                      {t.rentStatus}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => alert(`Edit details for ${t.name}`)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => alert(`Remove or checkout ${t.name}`)} className="p-2 hover:bg-rose-50 rounded-lg text-rose-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tenants;