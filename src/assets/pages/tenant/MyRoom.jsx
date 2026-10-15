import React from 'react';
import { Home, Users, CheckCircle, AlertTriangle, Shield, Wrench } from 'lucide-react';

const MyRoom = () => {
  const roomData = {
    roomNumber: 'B-402',
    roomType: 'Double Sharing AC Room',
    floor: '4th Floor',
    block: 'Block B',
    monthlyRent: '₹8,500',
    roommates: [
      { name: 'Alex Rivera (You)', phone: '+91 98765 43210', email: 'alex@example.com', bed: 'Bed A' },
      { name: 'Rahul Sharma', phone: '+91 91234 56789', email: 'rahul@example.com', bed: 'Bed B' }
    ],
    inventory: [
      { item: 'Single Bed with Mattress', status: 'Good', condition: 'Verified' },
      { item: 'Study Table & Chair', status: 'Good', condition: 'Verified' },
      { item: 'Wardrobe / Locker', status: 'Good', condition: 'Verified' },
      { item: 'Air Conditioner (1.5 Ton)', status: 'Serviced', condition: 'Verified' },
      { item: 'Ceiling Fan & Tubelight', status: 'Working', condition: 'Verified' }
    ]
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">
            {roomData.block} • {roomData.floor}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Room {roomData.roomNumber}</h2>
          <p className="text-gray-500 text-sm mt-0.5">{roomData.roomType}</p>
        </div>
        <div className="bg-gray-50 px-5 py-3 rounded-xl border border-gray-100 flex items-center gap-4">
          <div>
            <p className="text-xs text-gray-400 font-medium">Monthly Rent</p>
            <p className="text-lg font-bold text-gray-800">{roomData.monthlyRent}</p>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Status</p>
            <p className="text-sm font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" /> Allocated
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Roommates Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" /> Roommates
          </h3>
          <div className="space-y-4 flex-1">
            {roomData.roommates.map((mate, index) => (
              <div key={index} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-800 text-sm">{mate.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-bold">{mate.bed}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{mate.phone} • {mate.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room Inventory Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600" /> Assigned Inventory
            </h3>
            <span className="text-xs text-gray-400">Checked at check-in</span>
          </div>
          <div className="space-y-3 flex-1">
            {roomData.inventory.map((inv, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm">
                <span className="font-medium text-gray-700">{inv.item}</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold">
                    {inv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRoom;