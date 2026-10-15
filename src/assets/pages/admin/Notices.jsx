import React, { useState, useMemo, useEffect } from 'react';
import { Bell, Plus, Calendar, Trash2, X, BarChart3, Users, AlertCircle, Search, Filter } from 'lucide-react';

const Notices = () => {
  const initialNotices = [
    { id: 1, title: 'Monthly Maintenance Schedule', target: 'All Tenants', date: '1 Oct 2026', content: 'Water tank cleaning will take place this Sunday between 10 AM and 2 PM.' },
    { id: 2, title: 'Rent Payment Reminder', target: 'Pending Accounts', date: '28 Sep 2026', content: 'Please ensure October rent is cleared by the 5th to avoid late fees.' },
  ];

  const [noticesList, setNoticesList] = useState(() => {
    const saved = localStorage.getItem('pg_hostel_notices');
    return saved ? JSON.parse(saved) : initialNotices;
  });

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTarget, setNewTarget] = useState('All Tenants');
  const [newContent, setNewContent] = useState('');

  // Sync with localStorage whenever noticesList updates
  useEffect(() => {
    localStorage.setItem('pg_hostel_notices', JSON.stringify(noticesList));
  }, [noticesList]);

  // Handle adding a new notice
  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newNoticeObj = {
      id: Date.now(),
      title: newTitle.trim(),
      target: newTarget,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      content: newContent.trim(),
    };

    setNoticesList((prev) => [newNoticeObj, ...prev]);
    setNewTitle('');
    setNewContent('');
    setNewTarget('All Tenants');
    setIsModalOpen(false);
    alert('Notice published and broadcasted to tenants successfully!');
  };

  // Handle deleting a notice
  const handleDeleteNotice = (id) => {
    setNoticesList((prev) => prev.filter((n) => n.id !== id));
  };

  // Filter and Search Logic
  const filteredNotices = useMemo(() => {
    return noticesList.filter((n) => {
      const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            n.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = selectedFilter === 'All' || n.target === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [noticesList, searchQuery, selectedFilter]);

  // Analytics Computation
  const totalNotices = noticesList.length;
  const targetCounts = useMemo(() => {
    return noticesList.reduce((acc, curr) => {
      acc[curr.target] = (acc[curr.target] || 0) + 1;
      return acc;
    }, {});
  }, [noticesList]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Hostel Notices & Announcements</h2>
          <p className="text-gray-500 text-sm mt-0.5">Broadcast important circulars, emergency updates, and notices to residents.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Post New Notice
        </button>
      </div>

      {/* Analytics & Distribution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Metric Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Active Notices</p>
            <h4 className="text-2xl font-bold text-gray-800">{totalNotices}</h4>
          </div>
        </div>

        {/* Audience Breakdown Metric */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm md:col-span-2 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-600" /> Target Audience Distribution
            </span>
            <span className="text-xs text-gray-400 font-medium">Real-time Analytics</span>
          </div>
          <div className="space-y-2">
            {Object.keys(targetCounts).length === 0 ? (
              <p className="text-xs text-gray-400">No data available</p>
            ) : (
              Object.entries(targetCounts).map(([target, count]) => {
                const percentage = totalNotices > 0 ? Math.round((count / totalNotices) * 100) : 0;
                return (
                  <div key={target} className="space-y-1">
                    <div className="flex justify-between text-xs text-gray-600 font-medium">
                      <span>{target}</span>
                      <span>{count} notice{count > 1 ? 's' : ''} ({percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Search and Filters Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search notices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 cursor-pointer"
          >
            <option value="All">All Audiences</option>
            <option value="All Tenants">All Tenants</option>
            <option value="Pending Accounts">Pending Accounts</option>
            <option value="First Floor">First Floor</option>
            <option value="Second Floor">Second Floor</option>
            <option value="Staff Only">Staff Only</option>
          </select>
        </div>
      </div>

      {/* Notices Feed */}
      <div className="space-y-4">
        {filteredNotices.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-gray-700 font-semibold">No notices match your criteria</p>
            <p className="text-gray-400 text-sm">Try tweaking your search keywords or audience filter.</p>
          </div>
        ) : (
          filteredNotices.map((n) => (
            <div key={n.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gray-200 transition-all">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Bell className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-gray-800 text-base">{n.title}</h3>
                  <span className="px-2.5 py-0.5 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">{n.target}</span>
                </div>
                <p className="text-sm text-gray-600 pl-11">{n.content}</p>
                <p className="text-xs text-gray-400 pl-11 flex items-center gap-1 pt-1">
                  <Calendar className="w-3.5 h-3.5" /> Posted on {n.date}
                </p>
              </div>
              <button
                onClick={() => handleDeleteNotice(n.id)}
                className="p-2 hover:bg-rose-50 rounded-xl text-rose-500 transition-colors self-end md:self-center cursor-pointer"
                title="Delete Notice"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Professional Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg">Post New Notice</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddNotice} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Notice Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Scheduled Power Outage"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Target Audience</label>
                <select
                  value={newTarget}
                  onChange={(e) => setNewTarget(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white transition-all cursor-pointer"
                >
                  <option value="All Tenants">All Tenants</option>
                  <option value="Pending Accounts">Pending Accounts</option>
                  <option value="First Floor">First Floor</option>
                  <option value="Second Floor">Second Floor</option>
                  <option value="Staff Only">Staff Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Notice Content</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Enter complete details regarding the announcement..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 resize-none transition-all"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notices;