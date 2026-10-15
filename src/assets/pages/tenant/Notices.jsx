import React, { useState, useEffect } from 'react';
import { Calendar, Pin, AlertCircle, Bell } from 'lucide-react';

const Notices = () => {
  const defaultNotices = [
    {
      id: 1,
      title: 'Monthly Maintenance & Water Tank Cleaning Schedule',
      category: 'Maintenance',
      date: '28 Sep 2026',
      content: 'Water supply in Block B will be temporarily suspended on Friday between 10:00 AM and 2:00 PM due to scheduled overhead tank sanitization.',
      pinned: true
    },
    {
      id: 2,
      title: 'Festival Week Mess Timings & Special Dinner',
      category: 'Mess',
      date: '25 Sep 2026',
      content: 'In observance of the upcoming festival week, dinner service will be extended until 10:30 PM. A special sweet dish will be served on Sunday night.',
      pinned: false
    },
    {
      id: 3,
      title: 'Visitor Entry Policy Reminder',
      category: 'Security',
      date: '18 Sep 2026',
      content: 'All residents are reminded that pre-approval through the tenant visitor portal is mandatory for guests entering hostel premises after 8:00 PM.',
      pinned: false
    }
  ];

  const [noticesList, setNoticesList] = useState(() => {
    const saved = localStorage.getItem('pg_hostel_notices');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Map admin format to tenant format if needed
      return parsed.map((n, index) => ({
        id: n.id || index,
        title: n.title,
        category: n.target || 'General',
        date: n.date,
        content: n.content,
        pinned: index === 0 // Pin the latest one by default
      }));
    }
    return defaultNotices;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('pg_hostel_notices');
      if (saved) {
        const parsed = JSON.parse(saved);
        setNoticesList(parsed.map((n, index) => ({
          id: n.id || index,
          title: n.title,
          category: n.target || 'General',
          date: n.date,
          content: n.content,
          pinned: index === 0
        })));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Also poll slightly or rely on component mount sync
    const interval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Notices & Circulars</h2>
          <p className="text-gray-500 text-sm mt-0.5">Stay updated with official hostel announcements and warden directives.</p>
        </div>
      </div>

      {/* Notices Feed */}
      <div className="space-y-4">
        {noticesList.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-gray-400 mx-auto" />
            <p className="text-gray-600 font-semibold">No notices available right now.</p>
          </div>
        ) : (
          noticesList.map((notice) => (
            <div key={notice.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:border-gray-200 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 text-xs font-semibold">
                      {notice.category}
                    </span>
                    {notice.pinned && (
                      <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                        <Pin className="w-3 h-3 fill-current" /> Pinned
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {notice.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">{notice.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{notice.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notices;