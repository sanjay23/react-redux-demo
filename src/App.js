import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./component/Layout";
import Login from "./component/Login";
import Task from "./component/task/task";
import Dashboard from "./component/dashboard/Dashboard";
import Vendor from "./component/vendor/Vendor";
import AddVendor from './component/vendor/AddVendor';
import UpdateVendor from './component/vendor/UpdateVendor';
import Profile from './component/profile/profile';

function App() {
  return (
    <div className='app font-body h-screen'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Login />} />
          <Route exact path='dashboard' element={<Dashboard />} />
          <Route exact path="tasks" element={<Task />} />
          <Route exact path="profile/general" element={<Profile />} />
          <Route exact path="vendors" element={<Vendor />} />
          <Route exact path="add_vendor" element={<AddVendor />} />
          <Route exact path="vendor_update/:id" element={<UpdateVendor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
