import React, { useState } from 'react';
import { Receipt, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Rent = () => {
  const [rentList, setRentList] = useState([
    { id: 1, tenant: 'Alex Rivera', room: 'B-402', amount: '₹14,000', dueDate: '5 Oct 2026', status: 'Paid' },
    { id: 2, tenant: 'Priya Sharma', room: 'A-101', amount: '₹8,000', dueDate: '5 Oct 2026', status: 'Pending' },
    { id: 3, tenant: 'Rahul Verma', room: 'C-305', amount: '₹6,500', dueDate: '1 Oct 2026', status: 'Overdue' },
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Rent & Billing Management</h2>
          <p className="text-gray-500 text-sm mt-0.5">Track monthly rent collection, due dates, and pending balances across all tenants.</p>
        </div>
        <button
          onClick={() => alert('Open Generate Invoices Modal')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Generate Invoices
        </button>
      </div>

      {/* Rent Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Tenant Name</th>
                <th className="py-4 px-6">Room</th>
                <th className="py-4 px-6">Amount</th>
                <th className="py-4 px-6">Due Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {rentList.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800 flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-indigo-600" /> {item.tenant}
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-600">{item.room}</td>
                  <td className="py-4 px-6 font-bold text-gray-800">{item.amount}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs">{item.dueDate}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      item.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' :
                      item.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                    }`}>
                      {item.status === 'Paid' ? <CheckCircle className="w-3.5 h-3.5" /> :
                       item.status === 'Pending' ? <Clock className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Send reminder or update status for ${item.tenant}`)}
                      className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold transition-colors"
                    >
                      Manage
                    </button>
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

export default Rent;