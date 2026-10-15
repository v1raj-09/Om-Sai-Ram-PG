import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2, Clock, Wrench } from 'lucide-react';

const Complaints = () => {
  const [complaintsList, setComplaintsList] = useState(() => {
    const saved = localStorage.getItem('pg_complaints');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 'CMP-1042', tenant: 'Alex Rivera', room: 'B-402', category: 'Electrical', desc: 'Bedside ceiling fan making noise', date: '1 Oct 2026', status: 'Pending' },
      { id: 'CMP-1011', tenant: 'Priya Sharma', room: 'A-101', category: 'Plumbing', desc: 'Bathroom tap leaking continuously', date: '30 Sep 2026', status: 'In Progress' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('pg_complaints', JSON.stringify(complaintsList));
  }, [complaintsList]);

  const handleStatusChange = (id, newStatus) => {
    setComplaintsList(complaintsList.map(c => (c.id === id ? { ...c, status: newStatus } : c)));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Complaints & Maintenance</h2>
          <p className="text-gray-500 text-sm mt-0.5">Manage tenant grievances, track maintenance tasks, and assign resolution staff.</p>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Tenant & Room</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Description</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {complaintsList.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-800">{c.tenant || 'Alex Rivera'}</p>
                    <p className="text-xs text-gray-400">Room {c.room || 'B-402'}</p>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-700">{c.category}</td>
                  <td className="py-4 px-6 text-gray-600 text-xs max-w-xs truncate">{c.desc || c.description}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs">{c.date}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      c.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700' :
                      c.status === 'In Progress' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {c.status === 'Resolved' ? <CheckCircle2 className="w-3.5 h-3.5" /> :
                       c.status === 'In Progress' ? <Wrench className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <select
                      value={c.status}
                      onChange={(e) => handleStatusChange(c.id, e.target.value)}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 focus:outline-none focus:border-indigo-600"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
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

export default Complaints;