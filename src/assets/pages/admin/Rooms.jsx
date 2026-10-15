import React, { useState, useEffect } from 'react';
import { DoorClosed, Plus, ArrowLeft, User, Bed, Layers, CheckCircle2, AlertCircle, Trash2, X } from 'lucide-react';

const Rooms = () => {
  // LocalStorage madhun data ghene, nasel tar default 8 flats banavne
  const [flatsList, setFlatsList] = useState(() => {
    const savedData = localStorage.getItem('hostel_flats_data');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (e) {
        console.error(e);
      }
    }

    // Default setup for 8 flats
    return Array.from({ length: 8 }, (_, index) => {
      const flatNum = index + 1;
      const floorNo = Math.ceil(flatNum / 2);
      const floorName = floorNo === 1 ? 'Ground Floor' : `${floorNo - 1}th Floor`;

      let room1Tenants = [{ name: `Tenant 1 (F${flatNum})`, phone: '+91 98765 43210', joined: 'Jan 2026' }];
      let room2Tenants = [
        { name: `Tenant 2A (F${flatNum})`, phone: '+91 91234 56789', joined: 'Feb 2026' },
        { name: `Tenant 2B (F${flatNum})`, phone: '+91 99887 76655', joined: 'Mar 2026' }
      ];
      let room3Tenants = [
        { name: `Tenant 3A (F${flatNum})`, phone: '+91 98112 23344', joined: 'Jan 2026' },
        { name: `Tenant 3B (F${flatNum})`, phone: '+91 97000 11223', joined: 'Feb 2026' },
        { name: `Tenant 3C (F${flatNum})`, phone: '+91 96554 33221', joined: 'Mar 2026' }
      ];

      if (flatNum === 8) {
        room2Tenants = [{ name: 'Amit Kumar', phone: '+91 91234 56789', joined: 'Feb 2026' }];
        room3Tenants = [{ name: 'Vikas Patil', phone: '+91 98112 23344', joined: 'Jan 2026' }];
      }

      return {
        id: flatNum,
        flatNo: `Flat ${flatNum}`,
        floor: floorName,
        rooms: [
          { roomNo: `${flatNum}-01`, type: 'Single Sharing', capacity: 1, rent: '₹8,000/mo', tenants: room1Tenants },
          { roomNo: `${flatNum}-02`, type: 'Double Sharing', capacity: 2, rent: '₹12,500/mo', tenants: room2Tenants },
          { roomNo: `${flatNum}-03`, type: 'Triple Sharing', capacity: 3, rent: '₹15,000/mo', tenants: room3Tenants },
        ],
      };
    });
  });

  const [selectedFlatId, setSelectedFlatId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRoomIndex, setActiveRoomIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', joined: 'Oct 2026' });

  // FlatsList madhe badal zala ki localStorage madhe save karne
  useEffect(() => {
    localStorage.setItem('hostel_flats_data', JSON.stringify(flatsList));
  }, [flatsList]);

  // Current selected flat object fetch karne flatsList madhun
  const selectedFlat = flatsList.find((f) => f.id === selectedFlatId) || null;

  const openAddTenantModal = (roomIdx) => {
    const room = selectedFlat.rooms[roomIdx];
    if (room.tenants.length >= room.capacity) {
      alert('He room already full ahe! Capacity peksa jast tenant add nahi hou shakt.');
      return;
    }
    setActiveRoomIndex(roomIdx);
    setFormData({ name: '', phone: '+91 ', joined: 'Oct 2026' });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!formData.name || !formData.phone) {
      alert('Kripya sarv fields bhara.');
      return;
    }

    const flatId = selectedFlat.id;
    const roomIdx = activeRoomIndex;

    const currentRoom = selectedFlat.rooms[roomIdx];
    if (currentRoom.tenants.length >= currentRoom.capacity) {
      alert('He room full zhali ahe!');
      setIsModalOpen(false);
      return;
    }

    const newTenantEntry = { ...formData };

    setFlatsList((prevFlats) =>
      prevFlats.map((flat) => {
        if (flat.id === flatId) {
          const updatedRooms = flat.rooms.map((room, idx) => {
            if (idx === roomIdx) {
              return { ...room, tenants: [...room.tenants, newTenantEntry] };
            }
            return room;
          });
          return { ...flat, rooms: updatedRooms };
        }
        return flat;
      })
    );

    setIsModalOpen(false);
  };

  const handleRemoveTenant = (flatId, roomIndex, tenantIndex) => {
    setFlatsList((prevFlats) =>
      prevFlats.map((flat) => {
        if (flat.id === flatId) {
          const updatedRooms = flat.rooms.map((room, rIdx) => {
            if (rIdx === roomIndex) {
              const filteredTenants = room.tenants.filter((_, tIdx) => tIdx !== tenantIndex);
              return { ...room, tenants: filteredTenants };
            }
            return room;
          });
          return { ...flat, rooms: updatedRooms };
        }
        return flat;
      })
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto relative">
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedFlat ? `${selectedFlat.flatNo} (${selectedFlat.floor}) - Rooms & Tenants` : 'Hostel Flats & Floor Management'}
          </h2>
          <p className="text-gray-500 text-sm mt-0.5">
            {selectedFlat 
              ? 'Kontya pan room madhe tenant yogya padhati ne add/remove kara. (Data saved)' 
              : 'Total 8 Flats (2 Flats per Floor). Kontya pan flat var click karun rooms manage kara.'}
          </p>
        </div>
        
        {selectedFlat ? (
          <button
            onClick={() => setSelectedFlatId(null)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-xl transition-all text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Flats
          </button>
        ) : (
          <button
            onClick={() => alert('Open Add Flat Modal')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add New Flat
          </button>
        )}
      </div>

      {!selectedFlat ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flatsList.map((flat) => {
            const totalCapacity = flat.rooms.reduce((acc, r) => acc + r.capacity, 0);
            const totalOccupied = flat.rooms.reduce((acc, r) => acc + r.tenants.length, 0);
            const isFull = totalOccupied >= totalCapacity;

            return (
              <div
                key={flat.id}
                onClick={() => setSelectedFlatId(flat.id)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <DoorClosed className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{flat.flatNo}</h3>
                        <p className="text-xs text-indigo-600 font-medium flex items-center gap-1 mt-0.5">
                          <Layers className="w-3.5 h-3.5" /> {flat.floor}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                      isFull ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {isFull ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                      {isFull ? 'Full' : 'Vacancies Available'}
                    </span>
                  </div>

                  <div className="space-y-2 py-3 border-t border-b border-gray-50 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rooms Setup:</span>
                      <span className="font-semibold text-gray-700">3 Rooms (1, 2, 3 Sharing)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Beds Occupied:</span>
                      <span className="font-semibold text-indigo-600">{totalOccupied} / {totalCapacity} Beds</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2 flex justify-between items-center text-xs font-semibold text-indigo-600 group-hover:underline">
                  <span>View Rooms & Tenants</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-100 text-indigo-900 px-5 py-3 rounded-xl flex items-center justify-between text-sm">
            <span>Location: <strong className="text-indigo-700">{selectedFlat.floor}</strong> &bull; {selectedFlat.flatNo}</span>
            <span className="font-semibold">Professional Admin Panel Active</span>
          </div>

          {selectedFlat.rooms.map((room, rIdx) => {
            const hasSpace = room.tenants.length < room.capacity;

            return (
              <div key={rIdx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                      <Bed className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Room {room.roomNo} - <span className="text-indigo-600">{room.type}</span></h4>
                      <p className="text-xs text-gray-500">Rent: {room.rent} | Capacity: {room.capacity} Bed(s)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600">
                      Occupied: {room.tenants.length} / {room.capacity}
                    </span>
                    {hasSpace && (
                      <button
                        onClick={() => openAddTenantModal(rIdx)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Tenant
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  {room.tenants.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {room.tenants.map((tenant, tIdx) => (
                        <div key={tIdx} className="bg-gray-50/70 border border-gray-100 p-4 rounded-xl flex justify-between items-start gap-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-full mt-0.5">
                              <User className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-800 text-sm">{tenant.name}</h5>
                              <p className="text-xs text-gray-500 mt-0.5">Phone: {tenant.phone}</p>
                              <p className="text-[11px] text-indigo-600 font-medium mt-1">Joined: {tenant.joined}</p>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => handleRemoveTenant(selectedFlat.id, rIdx, tIdx)}
                            title="Remove Tenant"
                            className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-400 text-sm">
                      No tenants assigned to this room yet (Fully Vacant).
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-gray-800 text-base">Add New Tenant</h3>
              <button 
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Tenant Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Patil"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                <input
                  type="text"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Joining Date / Month</label>
                <input
                  type="text"
                  required
                  value={formData.joined}
                  onChange={(e) => setFormData({ ...formData, joined: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
                >
                  Save Tenant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;