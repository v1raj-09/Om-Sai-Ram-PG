import React, { useState } from 'react';
import { Users, LogIn, LogOut, Clock, Calendar } from 'lucide-react';

const Visitors = () => {
  const [visitorsList, setVisitorsList] = useState([
    { id: 1, visitorName: 'Suresh Mehta', visitingTenant: 'Alex Rivera (B-402)', phone: '+91 98222 11111', checkIn: '10:30 AM', checkOut: '12:15 PM', date: '2 Oct 2026' },
    { id: 2, visitorName: 'Sunita Sharma', visitingTenant: 'Priya Sharma (A-101)', phone: '+91 97111 22222', checkIn: '02:00 PM', checkOut: 'Still Inside', date: '2 Oct 2026' },
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Visitors & Guest Log</h2>
          <p className="text-gray-500 text-sm mt-0.5">Monitor visitor check-ins, guest tracking, and campus security logs.</p>
        </div>
      </div>

      {/* Visitors Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Visitor Name & Phone</th>
                <th className="py-4 px-6">Visiting Tenant</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Check-In</th>
                <th className="py-4 px-6">Check-Out</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {visitorsList.map((v) => (
                <tr key={v.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-800">{v.visitorName}</p>
                    <p className="text-xs text-gray-400">{v.phone}</p>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-700">{v.visitingTenant}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs flex items-center gap-1 mt-3">
                    <Calendar className="w-3.5 h-3.5" /> {v.date}
                  </td>
                  <td className="py-4 px-6 text-emerald-600 font-semibold text-xs flex items-center gap-1 mt-3">
                    <LogIn className="w-3.5 h-3.5" /> {v.checkIn}
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      v.checkOut === 'Still Inside' ? 'bg-amber-50 text-amber-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {v.checkOut}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {v.checkOut === 'Still Inside' ? (
                      <button
                        onClick={() => alert(`Check out visitor ${v.visitorName}`)}
                        className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Check Out
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">Completed</span>
                    )}
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

export default Visitors;