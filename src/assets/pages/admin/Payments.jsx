import React, { useState, useEffect } from 'react';
import { CreditCard, CheckCircle, Clock, Search, ShieldAlert, Check } from 'lucide-react';

const Payments = () => {
  const initialPayments = [
    { id: 'TXN-98421', tenant: 'Alex Rivera', room: 'B-402', amount: '₹14,000', method: 'UPI (Google Pay)', date: '1 Oct 2026', status: 'Verified' },
    { id: 'TXN-98420', tenant: 'Priya Sharma', room: 'A-101', amount: '₹8,000', method: 'Bank Transfer', date: '28 Sep 2026', status: 'Pending Verification' },
    { id: 'TXN-98419', tenant: 'Rahul Verma', room: 'C-305', amount: '₹6,500', method: 'Cash', date: '25 Sep 2026', status: 'Verified' },
  ];

  const [paymentsList, setPaymentsList] = useState(() => {
    const saved = localStorage.getItem('pg_hostel_transactions');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map(t => ({
        id: t.id,
        tenant: t.tenant || 'Alex Rivera',
        room: t.room || 'B-402',
        amount: `₹${Number(t.amount).toLocaleString()}`,
        method: t.method || 'Online Payment',
        date: t.date,
        status: t.status === 'Success' ? 'Verified' : 'Pending Verification'
      }));
    }
    return initialPayments;
  });

  // Sync back or listen to storage updates
  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('pg_hostel_transactions');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPaymentsList(parsed.map(t => ({
          id: t.id,
          tenant: t.tenant || 'Alex Rivera',
          room: t.room || 'B-402',
          amount: `₹${Number(t.amount).toLocaleString()}`,
          method: t.method || 'Online Payment',
          date: t.date,
          status: t.status === 'Success' ? 'Verified' : 'Pending Verification'
        })));
      }
    };
    window.addEventListener('storage', handleStorage);
    const interval = setInterval(handleStorage, 1000);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  const handleVerify = (id) => {
    const updated = paymentsList.map(p => p.id === id ? { ...p, status: 'Verified' } : p);
    setPaymentsList(updated);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Payments & Transaction Ledger</h2>
          <p className="text-gray-500 text-sm mt-0.5">Verify incoming digital transfer receipts and log cash payments.</p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Transaction ID</th>
                <th className="py-4 px-6">Tenant Name</th>
                <th className="py-4 px-6">Amount</th>
                <th className="py-4 px-6">Method</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {paymentsList.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-indigo-600">{p.id}</td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-800">{p.tenant}</p>
                    <p className="text-xs text-gray-400">Room {p.room}</p>
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-800">{p.amount}</td>
                  <td className="py-4 px-6 text-gray-600 text-xs">{p.method}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs">{p.date}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      p.status === 'Verified' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {p.status === 'Verified' ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    {p.status !== 'Verified' ? (
                      <button
                        onClick={() => handleVerify(p.id)}
                        className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1 shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5" /> Verify
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">Verified</span>
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

export default Payments;