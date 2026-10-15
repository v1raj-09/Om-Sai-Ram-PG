import React, { useState } from 'react';
import { UserPlus, Plus, Phone, Mail, Shield, Trash2, Edit } from 'lucide-react';

const Staff = () => {
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'Rajesh Kumar', role: 'Hostel Warden', phone: '+91 98123 45678', email: 'rajesh.warden@campusbridge.com', shift: 'Day Shift' },
    { id: 2, name: 'Manoj Singh', role: 'Security Supervisor', phone: '+91 97234 56789', email: 'manoj.security@campusbridge.com', shift: 'Night Shift' },
    { id: 3, name: 'Sanjay Patil', role: 'Maintenance Head', phone: '+91 96345 67890', email: 'sanjay.maint@campusbridge.com', shift: 'General Shift' },
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Staff Management</h2>
          <p className="text-gray-500 text-sm mt-0.5">Manage wardens, security personnel, maintenance crew, and shift assignments.</p>
        </div>
        <button
          onClick={() => alert('Open Add Staff Modal')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add New Staff
        </button>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Staff Name & Email</th>
                <th className="py-4 px-6">Role</th>
                <th className="py-4 px-6">Phone Number</th>
                <th className="py-4 px-6">Shift</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {staffList.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-800">{s.name}</p>
                    <p className="text-xs text-gray-400">{s.email}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold">
                      {s.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs flex items-center gap-1.5 mt-3">
                    <Phone className="w-3.5 h-3.5 text-gray-400" /> {s.phone}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs font-medium">{s.shift}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => alert(`Edit staff ${s.name}`)} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => alert(`Remove staff ${s.name}`)} className="p-2 hover:bg-rose-50 rounded-lg text-rose-500 transition-colors">
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

export default Staff;