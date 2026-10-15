import React, { useState, useEffect } from 'react';
import { Utensils, Star, CheckCircle } from 'lucide-react';

const Food = () => {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');

  const days = ['Today', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Default fallback menus
  const defaultMenus = {
    Monday: { breakfast: 'Poha & Chai', lunch: 'Roti, Dal Tadka, Paneer Bhurji', snacks: 'Samosa with Tea', dinner: 'Chapati, Mix Veg, Rice, Dal' },
    Tuesday: { breakfast: 'Idli Sambar', lunch: 'Roti, Chole, Jeera Rice, Salad', snacks: 'Biscuits & Tea', dinner: 'Chapati, Aloo Gobi, Dal Fry' },
    Wednesday: { breakfast: 'Aloo Paratha & Curd', lunch: 'Roti, Dal Makhani, Veg Pulao', snacks: 'Pakoda & Tea', dinner: 'Chapati, Egg Curry / Paneer Lababdar' },
    Thursday: { breakfast: 'Upma & Chutney', lunch: 'Roti, Dal Fry, Bhindi Masala, Rice', snacks: 'Bread Jam', dinner: 'Chapati, Matar Paneer, Rice' },
    Friday: { breakfast: 'Puri Sabzi', lunch: 'Roti, Rajma, Jeera Rice', snacks: 'Roasted Chana', dinner: 'Chapati, Chicken Curry / Soyabean Masala, Rice' },
    Saturday: { breakfast: 'Bread Omelette / Sprouts', lunch: 'Roti, Dal Palak, Mix Veg', snacks: 'Maggi', dinner: 'Chapati, Dal Tadka, Veg Fried Rice' },
    Sunday: { breakfast: 'Chole Bhature', lunch: 'Special Thali (Puri, Paneer, Pulao, Sweet)', snacks: 'Chips & Tea', dinner: 'Pav Bhaji / Light Khichdi' },
  };

  const [menuData, setMenuData] = useState(() => {
    const savedMenus = localStorage.getItem('pg_mess_menus');
    if (savedMenus) {
      const parsed = JSON.parse(savedMenus);
      // If 'Today' is selected, map it to current day of the week
      const currentDayName = new Date().toLocaleString('en-us', { weekday: 'long' });
      return parsed[currentDayName] || defaultMenus.Monday;
    }
    return {
      breakfast: 'Poha, Boiled Eggs / Sprouts, Bread & Butter, Tea / Coffee',
      lunch: 'Dal Tadka, Jeera Rice, Mix Veg Sabzi, Roti, Salad, Pickle',
      snacks: 'Samosa / Biscuits with Masala Chai',
      dinner: 'Paneer Butter Masala, Dal Fry, Roti, Steamed Rice, Gulab Jamun'
    };
  });

  useEffect(() => {
    const savedMenus = localStorage.getItem('pg_mess_menus');
    if (savedMenus) {
      const parsed = JSON.parse(savedMenus);
      if (selectedDay === 'Today') {
        const currentDayName = new Date().toLocaleString('en-us', { weekday: 'long' });
        setMenuData(parsed[currentDayName] || defaultMenus.Monday);
      } else {
        setMenuData(parsed[selectedDay] || { breakfast: 'Not updated', lunch: 'Not updated', snacks: 'Not updated', dinner: 'Not updated' });
      }
    }
  }, [selectedDay]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a star rating before submitting.');
      return;
    }
    
    const existingFeedback = JSON.parse(localStorage.getItem('pg_food_feedbacks') || '[]');
    const newFeedback = {
      id: Date.now(),
      rating,
      comment: feedbackText,
      date: new Date().toLocaleDateString(),
    };
    
    localStorage.setItem('pg_food_feedbacks', JSON.stringify([newFeedback, ...existingFeedback]));
    alert(`Thank you! Submitted rating: ${rating} stars.`);
    setRating(0);
    setFeedbackText('');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Mess & Food Schedule</h2>
          <p className="text-gray-500 text-sm mt-0.5">Check daily mess menus, timings, and submit meal feedback.</p>
        </div>
        {/* Days Filter */}
        <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-xl max-w-full overflow-x-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedDay === day ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Menu Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-amber-500" /> Menu for {selectedDay}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span className="font-semibold text-amber-600 uppercase">Breakfast</span>
                  <span>7:30 AM - 9:30 AM</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm mt-1">{menuData.breakfast || 'Not specified'}</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span className="font-semibold text-amber-600 uppercase">Lunch</span>
                  <span>12:30 PM - 2:30 PM</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm mt-1">{menuData.lunch || 'Not specified'}</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span className="font-semibold text-amber-600 uppercase">Evening Snacks</span>
                  <span>5:00 PM - 6:30 PM</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm mt-1">{menuData.snacks || 'Samosa / Biscuits with Masala Chai'}</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span className="font-semibold text-amber-600 uppercase">Dinner</span>
                  <span>8:00 PM - 10:00 PM</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm mt-1">{menuData.dinner || 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mess Rating Form */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <form onSubmit={handleFeedbackSubmit}>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Rate Today's Meal</h3>
            <p className="text-xs text-gray-500 mb-4">Your feedback helps improve food quality across the mess hall.</p>

            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`p-2 rounded-lg transition-colors ${
                    rating >= star ? 'text-amber-400 bg-amber-50' : 'text-gray-300 bg-gray-50'
                  }`}
                >
                  <Star className="w-6 h-6 fill-current" />
                </button>
              ))}
            </div>

            <textarea
              rows="3"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Write optional comments (e.g., salt was low, paneer was fresh)..."
              className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-indigo-600 mb-4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-600/20"
            >
              Submit Feedback
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" /> Anonymous reporting enabled
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;