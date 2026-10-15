import React, { useState } from 'react';
import { CreditCard, Download, Receipt, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const Rent = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentBill = {
    month: 'October 2026',
    dueDate: '5th Oct 2026',
    rentAmount: 8500,
    electricityBill: 650,
    maintenance: 350,
    total: 9500,
    status: 'Unpaid'
  };

  const paymentHistory = [
    { id: 'INV-2026-09', month: 'September 2026', amount: 9400, date: '3rd Sep 2026', status: 'Paid', method: 'UPI' },
    { id: 'INV-2026-08', month: 'August 2026', amount: 9200, date: '4th Aug 2026', status: 'Paid', method: 'Credit Card' },
    { id: 'INV-2026-07', month: 'July 2026', amount: 9500, date: '2nd Jul 2026', status: 'Paid', method: 'Net Banking' },
  ];

  const handlePayNow = () => {
    alert('Redirecting to payment gateway...');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Rent & Utility Bills</h2>
          <p className="text-gray-500 text-sm mt-0.5">Manage your monthly invoices and review past payment receipts.</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('current')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'current' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Current Bill
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'history' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            History & Receipts
          </button>
        </div>
      </div>

      {activeTab === 'current' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bill Breakdown Card */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">
                    {currentBill.month}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">Invoice Summary</h3>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold">
                  <AlertCircle className="w-3.5 h-3.5" /> {currentBill.status}
                </span>
              </div>

              <div className="space-y-4 border-t border-b border-gray-100 py-4 my-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Base Room Rent</span>
                  <span className="font-semibold text-gray-800">₹{currentBill.rentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Electricity Charges (Sub-meter)</span>
                  <span className="font-semibold text-gray-800">₹{currentBill.electricityBill.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Maintenance & Amenity Fee</span>
                  <span className="font-semibold text-gray-800">₹{currentBill.maintenance.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Total Payable Amount</p>
                  <p className="text-2xl font-extrabold text-indigo-600">₹{currentBill.total.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium">Due Date</p>
                  <p className="text-sm font-semibold text-rose-600 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-4 h-4" /> {currentBill.dueDate}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex gap-4">
              <button
                onClick={handlePayNow}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" /> Pay ₹{currentBill.total.toLocaleString()} Now
              </button>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-6 rounded-2xl text-white shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg mb-2">Secure Transactions</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                All rent and utility payments are processed securely via encrypted gateway connectors supporting UPI, Cards, and Net Banking.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Instant receipt generation on success
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Payment History Table */
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">Past Invoices & Receipts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/70 text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
                  <th className="py-4 px-6">Invoice ID</th>
                  <th className="py-4 px-6">Billing Month</th>
                  <th className="py-4 px-6">Amount</th>
                  <th className="py-4 px-6">Payment Date</th>
                  <th className="py-4 px-6">Method</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                {paymentHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-gray-800">{item.id}</td>
                    <td className="py-4 px-6">{item.month}</td>
                    <td className="py-4 px-6 font-bold text-gray-800">₹{item.amount.toLocaleString()}</td>
                    <td className="py-4 px-6">{item.date}</td>
                    <td className="py-4 px-6">{item.method}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button 
                        onClick={() => alert(`Downloading receipt for ${item.id}`)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-semibold text-xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rent; 