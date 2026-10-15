import React, { useState, useEffect } from 'react';
import { Calendar, Edit, Save, X } from 'lucide-react';

const AdminFood = () => {
  const initialMenus = [
    { id: 1, day: 'Monday', breakfast: 'Poha & Chai', lunch: 'Roti, Dal Tadka, Paneer Bhurji', snacks: 'Samosa with Tea', dinner: 'Chapati, Mix Veg, Rice, Dal' },
    { id: 2, day: 'Tuesday', breakfast: 'Idli Sambar', lunch: 'Roti, Chole, Jeera Rice, Salad', snacks: 'Biscuits & Tea', dinner: 'Chapati, Aloo Gobi, Dal Fry' },
    { id: 3, day: 'Wednesday', breakfast: 'Aloo Paratha & Curd', lunch: 'Roti, Dal Makhani, Veg Pulao', snacks: 'Pakoda & Tea', dinner: 'Chapati, Egg Curry / Paneer Lababdar' },
    { id: 4, day: 'Thursday', breakfast: 'Upma & Chutney', lunch: 'Roti, Dal Fry, Bhindi Masala, Rice', snacks: 'Bread Jam', dinner: 'Chapati, Matar Paneer, Rice' },
    { id: 5, day: 'Friday', breakfast: 'Puri Sabzi', lunch: 'Roti, Rajma, Jeera Rice', snacks: 'Roasted Chana', dinner: 'Chapati, Chicken Curry / Soyabean Masala, Rice' },
    { id: 6, day: 'Saturday', breakfast: 'Bread Omelette / Sprouts', lunch: 'Roti, Dal Palak, Mix Veg', snacks: 'Maggi', dinner: 'Chapati, Dal Tadka, Veg Fried Rice' },
    { id: 7, day: 'Sunday', breakfast: 'Chole Bhature', lunch: 'Special Thali (Puri, Paneer, Pulao, Sweet)', snacks: 'Chips & Tea', dinner: 'Pav Bhaji / Light Khichdi' },
  ];

  const [menuList, setMenuList] = useState(() => {
    const saved = localStorage.getItem('pg_admin_menus');
    return saved ? JSON.parse(saved) : initialMenus;
  });

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    // Save as array for admin table and as object lookup for tenant view
    localStorage.setItem('pg_admin_menus', JSON.stringify(menuList));
    
    const lookupObj = {};
    menuList.forEach(m => {
      lookupObj[m.day] = m;
    });
    localStorage.setItem('pg_mess_menus', JSON.stringify(lookupObj));
  }, [menuList]);

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditForm({ ...item });
  };

  const handleSaveClick = (id) => {
    setMenuList(menuList.map(m => m.id === id ? editForm : m));
    setEditingId(null);
    alert('Menu updated and synced with tenants successfully!');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Mess & Food Menu Management</h2>
          <p className="text-gray-500 text-sm mt-0.5">Update daily meal menus, schedule breakfast/lunch/dinner options, and manage mess preferences.</p>
        </div>
      </div>

      {/* Mess Menu Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-4 px-6">Day</th>
                <th className="py-4 px-6">Breakfast</th>
                <th className="py-4 px-6">Lunch</th>
                <th className="py-4 px-6">Snacks</th>
                <th className="py-4 px-6">Dinner</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {menuList.map((m) => {
                const isEditing = editingId === m.id;
                return (
                  <tr key={m.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-indigo-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {m.day}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-xs">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editForm.breakfast}
                          onChange={(e) => setEditForm({ ...editForm, breakfast: e.target.value })}
                          className="p-1.5 border rounded w-full text-xs"
                        />
                      ) : m.breakfast}
                    </td>
                    <td className="py-4 px-6 text-gray-700 font-medium text-xs">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editForm.lunch}
                          onChange={(e) => setEditForm({ ...editForm, lunch: e.target.value })}
                          className="p-1.5 border rounded w-full text-xs"
                        />
                      ) : m.lunch}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-xs">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editForm.snacks}
                          onChange={(e) => setEditForm({ ...editForm, snacks: e.target.value })}
                          className="p-1.5 border rounded w-full text-xs"
                        />
                      ) : m.snacks}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-xs">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editForm.dinner}
                          onChange={(e) => setEditForm({ ...editForm, dinner: e.target.value })}
                          className="p-1.5 border rounded w-full text-xs"
                        />
                      ) : m.dinner}
                    </td>
                    <td className="py-4 px-6 text-right">
                      {isEditing ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleSaveClick(m.id)}
                            className="p-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors"
                            title="Save"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEditClick(m)}
                          className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
                          title="Edit Menu"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminFood;