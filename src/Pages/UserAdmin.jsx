import React from "react";
import { ToastContainer } from 'react-toastify';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from "../Components/AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import AdminSections from "./AdminSections";
import AdminAppointments from "./AdminAppointments";
import AdminServices from "./AdminServices";
import AdminPatients from "./AdminPatients";
import AdminSettings from "./AdminSettings";
import AdminHeader from "../Components/AdminHeader";
import { UserProvider } from "../Components/UserContext";
import AllAdmins from "./AllAdmins";
import AddAdmin from "./AddAdmin";
import AdminDoctors from "./AdminDoctors";
import AdminDepartments from "./AdminDepartments"; 
import AdminUnits from "./AdminUnits";
import AdminLocationsDetails from "./AdminLocationsDetails";
import AdminSchools from "./AdminSchools";
import AdminSchoolsDetails from "./AdminSchoolsDetails";
import AdminHealthServiceDetails from "./AdminHealthServicesDetails";
import AdminHealthServices from "./AdminHealthServices";
import AdminDoctorsCreate from "./AdminDoctorsCreate";
import AdminDoctorsUpdate from "./AdminDoctorsUpdate";
import AdminDepartmentUpdate from "./AdminDepartmentUpdate";
import AdminDepartmentCreate from "./AdminDepartmentCreate";
import AdminUnitsUpdate from "./AdminUnitsUpdate";
import AdminUnitsCreate from "./AdminUnitsCreate";

const UserAdmin = () => {
    return (
        <UserProvider>
            <ToastContainer />
            <div className="user-admin">
                <AdminHeader />
                <AdminSidebar />
                <div className="admin-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<AdminDashboard />} />
                        <Route path="/all-admins" element={<AllAdmins />} />
                        <Route path="/add-admin" element={<AddAdmin />} />
                        <Route path="/sections" element={<AdminSections />} />
                        <Route path="/departments" element={<AdminDepartments />} />
                        <Route path="/departments/:id" element={<AdminDepartmentUpdate />} />
                        <Route path="/departments/new" element={<AdminDepartmentCreate />} />
                        <Route path="/doctors" element={<AdminDoctors />} />
                        <Route path="/doctors/:id" element={<AdminDoctorsUpdate />} />
                        <Route path="/doctors/new" element={<AdminDoctorsCreate />} />
                        <Route path="/schools" element={<AdminSchools />} />
                        <Route path="/schools/:name" element={<AdminSchoolsDetails />} />
                        <Route path="/shools/new" element={<AdminSchoolsDetails />} />
                        <Route path="/units" element={<AdminUnits />} />
                        <Route path="/units/:id" element={<AdminUnitsUpdate />} />
                        <Route path="/units/new" element={<AdminUnitsCreate />} />
                        <Route path="/health-services" element={<AdminHealthServices />} />
                        <Route path="/health-services/:name" element={<AdminHealthServiceDetails />} />
                        <Route path="/health-services/new" element={<AdminHealthServiceDetails />} />
                        <Route path="/appointments" element={<AdminAppointments />} />
                        <Route path="/services" element={<AdminServices />} />
                        <Route path="/patients" element={<AdminPatients />} />
                        <Route path="/settings" element={<AdminSettings />} />
                        
                    </Routes>
                </div>
            </div>
        </UserProvider>
    )
};

export default UserAdmin;