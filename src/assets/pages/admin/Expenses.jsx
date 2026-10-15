import React, { useState } from 'react';
import { DollarSign, Plus, Calendar, Tag, X, CheckCircle, TrendingDown, FileText } from 'lucide-react';

const Expenses = () => {
  const [expensesList, setExpensesList] = useState([
    { id: 1, title: 'Electricity Bill (September)', category: 'Utilities', amount: '₹45,200', rawAmount: 45200, date: '28 Sep 2026', paidBy: 'Admin' },
    { id: 2, title: 'Mess Grocery Supplies', category: 'Food & Mess', amount: '₹32,500', rawAmount: 32500, date: '25 Sep 2026', paidBy: 'Manager' },
    { id: 3, title: 'Plumbing Repairs (Block B)', category: 'Maintenance', amount: '₹4,500', rawAmount: 4500, date: '22 Sep 2026', paidBy: 'Admin' },
  ]);

  // State for Add Expense Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Utilities');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('02 Oct 2026');

  // Calculate Total Expenses
  const totalExpenseAmount = expensesList.reduce((acc, curr) => acc + curr.rawAmount, 0);

  // Handle Form Submission for Adding Expense
  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!newTitle || !newAmount) {
      alert('Please fill in both expense title and amount.');
      return;
    }

    const numericAmount = parseFloat(newAmount);
    const formattedAmount = `₹${numericAmount.toLocaleString('en-IN')}`;

    const newExpenseObj = {
      id: expensesList.length + 1,
      title: newTitle,
      category: newCategory,
      amount: formattedAmount,
      rawAmount: numericAmount,
      date: newDate,
      paidBy: 'Admin',
    };

    setExpensesList([newExpenseObj, ...expensesList]);
    setNewTitle('');
    setNewAmount('');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6">
      
      {/* Header Banner & Total Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm md:col-span-2 flex flex-col justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Hostel Expenses Tracking</h2>
            <p className="text-gray-500 text-sm mt-0.5">Record and categorize operational costs, utility bills, and maintenance expenditures.</p>
          </div>
        </div>

        {/* Total Expense Widget */}
        <div className="bg-gradient-to-br from-rose-500 to-rose-700 p-6 rounded-2xl text-white shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-rose-100 font-semibold">Total Expenses Recorded</p>
            <h3 className="text-3xl font-extrabold mt-1">₹{totalExpenseAmount.toLocaleString('en-IN')}</h3>
          </div>
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <TrendingDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-sm font-semibold text-gray-600">Showing all registered expenditures ({expensesList.length})</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Expense
        </button>
      </div>

      {/* Expenses Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Expense Title</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Amount</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Recorded By</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {expensesList.map((exp) => (
                <tr key={exp.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-gray-800 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600 shrink-0" /> {exp.title}
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700">
                      {exp.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-rose-600">{exp.amount}</td>
                  <td className="py-4 px-6 text-gray-500 text-xs">{exp.date}</td>
                  <td className="py-4 px-6 text-gray-600 text-xs font-medium">{exp.paidBy}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Details for: ${exp.title}\nAmount: ${exp.amount}\nCategory: ${exp.category}`)}
                      className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold transition-colors"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= ADD EXPENSE MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-5 animate-in fade-in zoom-in duration-200">
            
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Add New Expense
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Expense Title / Description</label>
                <input
                  type="text"
                  placeholder="e.g. October Electricity Bill"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600 bg-white"
                >
                  <option value="Utilities">Utilities (Electricity, Water, Gas)</option>
                  <option value="Food & Mess">Food & Mess Supplies</option>
                  <option value="Maintenance">Maintenance & Repairs</option>
                  <option value="Staff Salary">Staff Salary</option>
                  <option value="Internet & Wi-Fi">Internet & Wi-Fi</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Amount (₹)</label>
                <input
                  type="number"
                  placeholder="e.g. 15000"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Date</label>
                <input
                  type="text"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-sm shadow-md transition-colors"
                >
                  Save Expense
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Expenses;