import React, { useState, useEffect } from 'react';
import { AlertCircle, Plus, Wrench, CheckCircle, Clock } from 'lucide-react';

const Complaints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState('Plumbing');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  // Initial default complaints or loaded from localStorage
  const [complaintsList, setComplaintsList] = useState(() => {
    const saved = localStorage.getItem('pg_complaints');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 'CMP-1042', tenant: 'Alex Rivera', room: 'B-402', category: 'Electrical', desc: 'Ceiling fan regulator making buzzing noise', date: '28 Sep 2026', status: 'In Progress', priority: 'Medium' },
      { id: 'CMP-1011', tenant: 'Alex Rivera', room: 'B-402', category: 'Plumbing', desc: 'Bathroom tap leaking continuously', date: '20 Sep 2026', status: 'Resolved', priority: 'High' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('pg_complaints', JSON.stringify(complaintsList));
  }, [complaintsList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = {
      id: `CMP-${Math.floor(1000 + Math.random() * 9000)}`,
      tenant: 'Alex Rivera',
      room: 'B-402',
      category,
      desc: description,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Pending',
      priority
    };

    setComplaintsList([newComplaint, ...complaintsList]);
    alert(`Complaint submitted successfully under ${category}!`);
    setDescription('');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Maintenance & Complaints</h2>
          <p className="text-gray-500 text-sm mt-0.5">Raise repair requests and track real-time resolution status.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
        >
          <Plus className="w-4 h-4" /> Raise New Complaint
        </button>
      </div>

      {/* Complaints List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-indigo-600" /> Track Complaints
        </h3>

        <div className="space-y-4">
          {complaintsList.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800 text-sm">{item.id}</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 text-xs font-medium">{item.category}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    item.priority === 'High' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {item.priority} Priority
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.desc || item.description}</p>
                <p className="text-xs text-gray-400 mt-1">Raised on: {item.date}</p>
              </div>

              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                  item.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700' : 
                  item.status === 'In Progress' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                }`}>
                  {item.status === 'Resolved' ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Raise Modal Simulation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Raise Maintenance Ticket</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600 bg-white"
                >
                  <option value="Electrical">Electrical</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="AC & Appliances">AC & Appliances</option>
                  <option value="Cleaning">Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600 bg-white"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Description</label>
                <textarea
                  rows="3"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue clearly..."
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600"
                ></textarea>
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
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;