import React, { useState } from 'react';
import { MessageSquare, Star, Send, CheckCircle2, Clock, AlertTriangle, PlusCircle, HelpCircle } from 'lucide-react';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  
  const [formData, setFormData] = useState({
    category: 'Maintenance',
    title: '',
    message: '',
  });

  const [feedbackHistory, setFeedbackHistory] = useState([
    {
      id: 'FB-1042',
      category: 'Maintenance',
      title: 'Leaking bathroom tap in B-402',
      date: '28 Sep 2026',
      status: 'In Progress',
      rating: 4,
      response: 'Plumber has been assigned for tomorrow morning.'
    },
    {
      id: 'FB-1031',
      category: 'Cleanliness',
      title: 'Corridor sweeping schedule request',
      date: '15 Aug 2026',
      status: 'Resolved',
      rating: 5,
      response: 'Addressed with the housekeeping team.'
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    const newFeedback = {
      id: `FB-${Math.floor(1000 + Math.random() * 9000)}`,
      category: formData.category,
      title: formData.title,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Submitted',
      rating: rating,
      response: 'Awaiting review from management.'
    };

    setFeedbackHistory([newFeedback, ...feedbackHistory]);
    setFormData({ category: 'Maintenance', title: '', message: '' });
    setRating(5);
    setActiveTab('history');
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner & Tabs */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Tenant Feedback & Support</h2>
          <p className="text-gray-500 text-sm mt-0.5">Submit maintenance requests, report issues, or share your suggestions with management.</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('submit')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'submit' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            New Request
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'history' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Track Requests ({feedbackHistory.length})
          </button>
        </div>
      </div>

      {activeTab === 'submit' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feedback Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                <PlusCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Submit a Ticket or Suggestion</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all bg-white"
                  >
                    <option value="Maintenance">Maintenance & Repairs</option>
                    <option value="Cleanliness">Cleanliness & Housekeeping</option>
                    <option value="Utilities">Electricity & Water</option>
                    <option value="Billing">Billing & Payments</option>
                    <option value="General">General Suggestion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Overall Satisfaction Rating
                  </label>
                  <div className="flex items-center gap-1.5 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || rating) >= star
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-bold text-gray-600">({rating}/5)</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Issue Title / Subject
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g., AC not cooling properly in room B-402"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Detailed Description
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Provide details about the issue or suggestion so management can assist you efficiently..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-none"
                  required
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" /> Submit Feedback Ticket
                </button>
              </div>
            </form>
          </div>

          {/* Guidelines Sidebar */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-6 rounded-2xl text-white shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-400" /> Support Guidelines
              </h4>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Urgent Maintenance:</strong> For emergency water leaks or electrical hazards, please also contact the warden directly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Response Time:</strong> Standard tickets are reviewed within 24 business hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span><strong>Updates:</strong> Status changes will reflect live on your tracking dashboard.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24/7 Management Assistance
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Feedback History List */
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">Submitted Tickets & History</h3>
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Total: {feedbackHistory.length}</span>
          </div>
          
          <div className="divide-y divide-gray-100">
            {feedbackHistory.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">No feedback tickets submitted yet.</div>
            ) : (
              feedbackHistory.map((item) => (
                <div key={item.id} className="p-6 hover:bg-gray-50/50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                        {item.id}
                      </span>
                      <span className="text-xs font-medium text-gray-400">•</span>
                      <span className="text-xs font-semibold text-gray-500">{item.category}</span>
                      <span className="text-xs font-medium text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h4 className="font-bold text-gray-800 text-base">{item.title}</h4>
                    <p className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <strong>Admin Response:</strong> {item.response}
                    </p>
                  </div>

                  <div className="flex flex-row md:flex-col items-end justify-between w-full md:w-auto gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      item.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700' :
                      item.status === 'In Progress' ? 'bg-indigo-50 text-indigo-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {item.status === 'Resolved' ? <CheckCircle2 className="w-3.5 h-3.5" /> :
                       item.status === 'In Progress' ? <Clock className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;