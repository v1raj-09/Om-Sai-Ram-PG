import React, { useState } from 'react';
import { Users, Plus, CheckCircle, Clock, Shield } from 'lucide-react';

const Visitors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [purpose, setPurpose] = useState('');

  const visitorsList = [
    { id: 1, name: 'Suresh Rivera', relation: 'Father', date: '2 Oct 2026', time: '11:00 AM', status: 'Approved' },
    { id: 2, name: 'Amit Verma', relation: 'College Friend', date: '25 Sep 2026', time: '4:30 PM', status: 'Checked Out' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Visitor pass generated for ${visitorName}!`);
    setVisitorName('');
    setVisitDate('');
    setPurpose('');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Visitor & Guest Management</h2>
          <p className="text-gray-500 text-sm mt-0.5">Pre-register visitors to streamline entry at the security gate.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
        >
          <Plus className="w-4 h-4" /> Pre-Register Visitor
        </button>
      </div>

      {/* Visitors List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" /> Visitor Pass History
        </h3>

        <div className="space-y-4">
          {visitorsList.map((visitor) => (
            <div key={visitor.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{visitor.name}</h4>
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-xs font-medium">{visitor.relation}</span>
                </div>
                <p className="text-xs text-gray-500">Expected: {visitor.date} at {visitor.time}</p>
              </div>

              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                  visitor.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  <CheckCircle className="w-3.5 h-3.5" /> {visitor.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pre-Register Guest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Visitor Full Name</label>
                <input
                  type="text"
                  required
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="e.g., Rajesh Kumar"
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Visit Date & Time</label>
                <input
                  type="datetime-local"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Purpose / Relation</label>
                <input
                  type="text"
                  required
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="e.g., Parent visit / Project discussion"
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-sm shadow-md shadow-indigo-600/30 transition-all"
                >
                  Generate Pass
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visitors;