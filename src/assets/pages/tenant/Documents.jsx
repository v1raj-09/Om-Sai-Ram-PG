import React from 'react';
import { FileText, Download, ShieldCheck, CheckCircle } from 'lucide-react';

const Documents = () => {
  const documentsList = [
    { id: 1, title: 'Hostel Lease Agreement 2026-27', type: 'PDF Document', size: '2.4 MB', date: '1 Aug 2026', status: 'Signed & Verified' },
    { id: 2, title: 'Room Check-in Inventory Inspection Report', type: 'PDF Document', size: '1.1 MB', date: '2 Aug 2026', status: 'Verified' },
    { id: 3, title: 'Tenant Rulebook & Code of Conduct', type: 'PDF Document', size: '4.5 MB', date: '1 Aug 2026', status: 'Active' },
    { id: 4, title: 'ID Proof (Aadhaar / College ID)', type: 'Image / PDF', size: '850 KB', date: '1 Aug 2026', status: 'Approved' }
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Tenant Documents & Agreements</h2>
          <p className="text-gray-500 text-sm mt-0.5">Access and download verified lease papers, identity proofs, and rulebooks.</p>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-600" /> Uploaded & Issued Documents
        </h3>

        <div className="space-y-4">
          {documentsList.map((doc) => (
            <div key={doc.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{doc.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{doc.type} • {doc.size} • Issued on {doc.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold inline-flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> {doc.status}
                </span>
                <button
                  onClick={() => alert(`Downloading ${doc.title}...`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;