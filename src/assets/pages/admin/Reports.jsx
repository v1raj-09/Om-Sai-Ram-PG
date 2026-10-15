import React from 'react';
import { BarChart3, Download, TrendingUp, DollarSign, Users, Home, ArrowUpRight } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Hostel Analytics & Reports</h2>
          <p className="text-gray-500 text-sm mt-0.5">Gain insights into monthly revenues, expense distributions, and building occupancy rates.</p>
        </div>
        <button
          onClick={() => alert('Downloading Comprehensive PDF Report...')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> Export Report (PDF)
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-400">
            <span className="text-xs font-bold uppercase tracking-wider">Total Monthly Revenue</span>
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><DollarSign className="w-5 h-5" /></span>
          </div>
          <h3 className="text-2xl font-black text-gray-800">₹4,85,000</h3>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +12% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-400">
            <span className="text-xs font-bold uppercase tracking-wider">Total Operational Expenses</span>
            <span className="p-2 bg-rose-50 text-rose-600 rounded-xl"><BarChart3 className="w-5 h-5" /></span>
          </div>
          <h3 className="text-2xl font-black text-gray-800">₹1,42,000</h3>
          <p className="text-xs text-rose-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +4% from last month
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-400">
            <span className="text-xs font-bold uppercase tracking-wider">Bed Occupancy Rate</span>
            <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><Home className="w-5 h-5" /></span>
          </div>
          <h3 className="text-2xl font-black text-gray-800">88.5%</h3>
          <p className="text-xs text-indigo-600 font-semibold flex items-center gap-1">
            106 of 120 beds filled
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-gray-400">
            <span className="text-xs font-bold uppercase tracking-wider">Active Residents</span>
            <span className="p-2 bg-blue-50 text-blue-600 rounded-xl"><Users className="w-5 h-5" /></span>
          </div>
          <h3 className="text-2xl font-black text-gray-800">98 Tenants</h3>
          <p className="text-xs text-blue-600 font-semibold flex items-center gap-1">
            Across 3 hostel blocks
          </p>
        </div>
      </div>

      {/* Detailed Report Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Financial Breakdown (Current Month)</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-gray-600">Rent Collections</span>
                <span className="text-gray-800">₹4,20,000 (86%)</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-gray-600">Mess Fees & Food Extras</span>
                <span className="text-gray-800">₹45,000 (9%)</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '9%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span className="text-gray-600">Security Deposits / Miscellaneous</span>
                <span className="text-gray-800">₹20,000 (5%)</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Quick Export Options</h3>
          <p className="text-sm text-gray-500">Download filtered spreadsheet records for accounting and auditing purposes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button onClick={() => alert('Exporting Tenant List CSV')} className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl text-left font-semibold text-gray-700 text-sm transition-colors flex justify-between items-center">
              <span>Tenant Directory CSV</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </button>
            <button onClick={() => alert('Exporting Expenses CSV')} className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl text-left font-semibold text-gray-700 text-sm transition-colors flex justify-between items-center">
              <span>Expense Ledger CSV</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </button>
            <button onClick={() => alert('Exporting Payment Receipts CSV')} className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl text-left font-semibold text-gray-700 text-sm transition-colors flex justify-between items-center">
              <span>Transaction Log CSV</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </button>
            <button onClick={() => alert('Exporting Maintenance Logs CSV')} className="p-3 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl text-left font-semibold text-gray-700 text-sm transition-colors flex justify-between items-center">
              <span>Maintenance CSV</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;