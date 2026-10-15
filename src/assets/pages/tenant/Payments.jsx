import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet, Plus, ShieldCheck, History, X, CheckCircle2 } from 'lucide-react';

const Payments = () => {
  const [savedCards, setSavedCards] = useState([
    { id: 1, type: 'Visa', last4: '4242', expiry: '08/28', default: true },
    { id: 2, type: 'Mastercard', last4: '8812', expiry: '12/27', default: false }
  ]);

  const defaultTransactions = [
    { id: 'TXN-98421', title: 'October Rent & Utilities', date: '30 Sep 2026', amount: 9500, type: 'Debit', status: 'Success', method: 'UPI (Google Pay)' },
    { id: 'TXN-87312', title: 'Security Deposit Refund', date: '15 Aug 2026', amount: 5000, type: 'Credit', status: 'Success', method: 'Bank Transfer' },
    { id: 'TXN-76221', title: 'September Rent & Utilities', date: '3 Sep 2026', amount: 9400, type: 'Debit', status: 'Success', method: 'UPI (PhonePe)' },
  ];

  const [allTransactions, setAllTransactions] = useState(() => {
    const saved = localStorage.getItem('pg_hostel_transactions');
    return saved ? JSON.parse(saved) : defaultTransactions;
  });

  // Modal State for New Payment
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payTitle, setPayTitle] = useState('November Rent & Utilities');
  const [payAmount, setPayAmount] = useState('9500');
  const [payMethod, setPayMethod] = useState('UPI (Google Pay)');

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('pg_hostel_transactions', JSON.stringify(allTransactions));
  }, [allTransactions]);

  // Handle Tenant making a payment
  const handleMakePayment = (e) => {
    e.preventDefault();
    if (!payAmount || Number(payAmount) <= 0) return;

    const newTx = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      title: payTitle,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      amount: Number(payAmount),
      type: 'Debit',
      status: 'Success',
      method: payMethod,
      tenant: 'Alex Rivera', // Current logged-in tenant mock
      room: 'B-402'
    };

    setAllTransactions((prev) => [newTx, ...prev]);
    setIsModalOpen(false);
    setPayAmount('9500');
    alert('Payment successful! Transaction recorded and synced with Admin ledger.');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Payment Methods & Logs</h2>
          <p className="text-gray-500 text-sm mt-0.5">Manage your saved cards, UPI IDs, and global transaction activity.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Pay Rent / Add Funds
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Saved Payment Methods */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-indigo-600" /> Saved Cards
          </h3>

          <div className="space-y-4 flex-1">
            {savedCards.map((card) => (
              <div key={card.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-lg">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{card.type} •••• {card.last4}</h4>
                    <p className="text-xs text-gray-400">Expires {card.expiry}</p>
                  </div>
                </div>
                {card.default && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600">Default</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> PCI-DSS Compliant Encryption
          </div>
        </div>

        {/* Global Transaction Ledger */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <History className="w-5 h-5 text-indigo-600" /> Transaction Ledger
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/70 text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                {allTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">{tx.id}</td>
                    <td className="py-3.5 px-4">
                      <p className="font-medium text-gray-800">{tx.title}</p>
                      <p className="text-xs text-gray-400">{tx.method || 'Online Payment'}</p>
                    </td>
                    <td className="py-3.5 px-4">{tx.date}</td>
                    <td className={`py-3.5 px-4 font-bold ${tx.type === 'Credit' ? 'text-emerald-600' : 'text-gray-800'}`}>
                      {tx.type === 'Credit' ? '+' : ''}₹{Number(tx.amount).toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                        {tx.status || 'Success'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pay Rent Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg">Make a Payment</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-600 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleMakePayment} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Payment Purpose</label>
                <input
                  type="text"
                  required
                  value={payTitle}
                  onChange={(e) => setPayTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  required
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Payment Method</label>
                <select
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 cursor-pointer"
                >
                  <option value="UPI (Google Pay)">UPI (Google Pay)</option>
                  <option value="UPI (PhonePe)">UPI (PhonePe)</option>
                  <option value="Credit Card">Credit Card (•••• 4242)</option>
                  <option value="Net Banking">Net Banking</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md cursor-pointer"
                >
                  Pay Securely
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;