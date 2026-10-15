import React, { useState } from 'react';
import { BookmarkCheck, CheckCircle2, XCircle, Clock, Calendar } from 'lucide-react';

const Bookings = () => {
  const [bookingsList, setBookingsList] = useState([
    { id: 1, name: 'Rohan Mehta', email: 'rohan.m@example.com', phone: '+91 98111 22333', roomType: 'Double AC', date: '1 Oct 2026', status: 'Pending' },
    { id: 2, name: 'Ananya Deshmukh', email: 'ananya.d@example.com', phone: '+91 97222 33444', roomType: 'Single Non-AC', date: '30 Sep 2026', status: 'Approved' },
    { id: 3, name: 'Karan Joshi', email: 'karan.j@example.com', phone: '+91 96333 44555', roomType: 'Triple Non-AC', date: '28 Sep 2026', status: 'Rejected' },
  ]);

  const handleAction = (id, newStatus) => {
    setBookingsList(bookingsList.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Booking Requests</h2>
          <p className="text-gray-500 text-sm mt-0.5">Review incoming accommodation applications from prospective hostel residents.</p>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Applicant Name</th>
                <th className="py-4 px-6">Contact Info</th>
                <th className="py-4 px-6">Preferred Room</th>
                <th className="py-4 px-6">Application Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {bookingsList.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-800">{b.name}</p>
                    <p className="text-xs text-gray-400">{b.email}</p>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-xs">{b.phone}</td>
                  <td className="py-4 px-6 font-medium text-indigo-600">{b.roomType}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs flex items-center gap-1 mt-3">
                    <Calendar className="w-3.5 h-3.5" /> {b.date}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      b.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' :
                      b.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {b.status === 'Approved' ? <CheckCircle2 className="w-3.5 h-3.5" /> :
                       b.status === 'Pending' ? <Clock className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {b.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {b.status === 'Pending' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleAction(b.id, 'Approved')}
                          className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-semibold transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(b.id, 'Rejected')}
                          className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">Processed</span>
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

export default Bookings;