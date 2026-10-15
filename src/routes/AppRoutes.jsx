import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from "../assets/layouts/PublicLayout";
import TenantLayout from "../assets/layouts/TenantLayout";
import AdminLayout from "../assets/layouts/AdminLayout";

import Home from "../assets/pages/public/Home";
import AboutPG from "../assets/pages/public/AboutPG";
import Rooms from "../assets/pages/public/Rooms";
import Amenities from "../assets/pages/public/Amenities";
import Gallery from "../assets/pages/public/Gallery";
import Location from "../assets/pages/public/Location";
import Contact from "../assets/pages/public/Contact";
import Food from "../assets/pages/public/Food";

import Register from "../assets/pages/auth/Register"; 
import Login from "../assets/pages/auth/Login";

import FAQ from "../assets/pages/public/FAQ";
import Rules from "../assets/pages/public/Rules";  

import ForgotPassword from "../assets/pages/auth/ForgotPassword";
import ResetPassword from "../assets/pages/auth/ForgotPassword";

import Dashboard from "../assets/pages/tenant/Dashboard";
import MyRoom from "../assets/pages/tenant/MyRoom";
import Rent from "../assets/pages/tenant/Rent";
import Payments from "../assets/pages/tenant/Payments";
import TenantFood from "../assets/pages/tenant/Food";
import Complaints from "../assets/pages/tenant/Complaints";
import Notices from "../assets/pages/tenant/Notices";
import Visitors from "../assets/pages/tenant/Visitors";
import Documents from "../assets/pages/tenant/Documents";
import Feedback from "../assets/pages/tenant/Feedback";
import Profile from "../assets/pages/tenant/Profile";

import AdminDashboard from '../assets/pages/admin/Dashboard';
import AdminTenants from '../assets/pages/admin/Tenants';
import AdminRooms from '../assets/pages/admin/Rooms';
import AdminBeds from '../assets/pages/admin/Beds';
import AdminBookings from '../assets/pages/admin/Bookings';
import AdminRent from '../assets/pages/admin/Rent';
import AdminPayments from '../assets/pages/admin/Payments';
import AdminExpenses from '../assets/pages/admin/Expenses';
import AdminFood from '../assets/pages/admin/Food';
import AdminComplaints from '../assets/pages/admin/Complaints';
import AdminNotices from '../assets/pages/admin/Notices';
import AdminVisitors from '../assets/pages/admin/Visitors';
import AdminStaff from '../assets/pages/admin/Staff';

import AdminReports from '../assets/pages/admin/Reports';

const AppRoutes = () => {  
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPG />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food" element={<Food />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/rules" element={<Rules />} />
      </Route>

      {/* Tenant Dashboard Portal */}
      <Route path="/tenant" element={<TenantLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-room" element={<MyRoom />} />
        <Route path="rent" element={<Rent />} />
        <Route path="payments" element={<Payments />} />
        <Route path="food" element={<TenantFood />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="notices" element={<Notices />} />
        <Route path="visitors" element={<Visitors />} />
        <Route path="documents" element={<Documents />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Admin Dashboard Portal */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="tenants" element={<AdminTenants />} />
        <Route path="rooms" element={<AdminRooms />} />
        <Route path="beds" element={<AdminBeds />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="rent" element={<AdminRent />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="expenses" element={<AdminExpenses />} />
        <Route path="food" element={<AdminFood />} />
        <Route path="complaints" element={<AdminComplaints />} />
        <Route path="notices" element={<AdminNotices />} />
        <Route path="visitors" element={<AdminVisitors />} />
        <Route path="staff" element={<AdminStaff />} />
        
        <Route path="reports" element={<AdminReports />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;