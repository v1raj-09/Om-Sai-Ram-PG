import React, { useState } from 'react';
import { BedDouble, UserCheck, Plus, CheckCircle, XCircle } from 'lucide-react';

const Beds = () => {
  const [bedsList, setBedsList] = useState([
    { id: 1, roomNo: 'A-101', bedNo: 'Bed 1', tenant: 'Priya Sharma', status: 'Occupied' },
    { id: 2, roomNo: 'B-202', bedNo: 'Bed 1', tenant: 'Alex Rivera', status: 'Occupied' },
    { id: 3, roomNo: 'B-202', bedNo: 'Bed 2', tenant: 'Unassigned', status: 'Available' },
    { id: 4, roomNo: 'C-305', bedNo: 'Bed 1', tenant: 'Rahul Verma', status: 'Occupied' },
    { id: 5, roomNo: 'C-305', bedNo: 'Bed 2', tenant: 'Unassigned', status: 'Available' },
  ]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Bed Allocations</h2>
          <p className="text-gray-500 text-sm mt-0.5">Assign specific beds to tenants and manage bed-level occupancy.</p>
        </div>
        <button
          onClick={() => alert('Open Allocate Bed Modal')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Allocate Bed
        </button>
      </div>

      {/* Beds Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Room Number</th>
                <th className="py-4 px-6">Bed Identifier</th>
                <th className="py-4 px-6">Assigned Tenant</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {bedsList.map((bed) => (
                <tr key={bed.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-gray-800 flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-indigo-600" /> {bed.roomNo}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-700">{bed.bedNo}</td>
                  <td className="py-4 px-6 text-gray-600">{bed.tenant}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      bed.status === 'Occupied' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {bed.status === 'Occupied' ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {bed.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => alert(`Manage allocation for ${bed.roomNo} - ${bed.bedNo}`)}
                      className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-semibold transition-colors"
                    >
                      {bed.status === 'Occupied' ? 'Reassign' : 'Allocate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Beds;