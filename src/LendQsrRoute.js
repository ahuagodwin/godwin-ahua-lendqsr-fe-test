import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, DashboardOverview, UserDetailsDashboard } from './pages';
import { Toaster } from "react-hot-toast"


const LendQsrRoute = () => {
 

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' exact index element={<LoginPage/>} />
                <Route path="/dashboard/user" element={<DashboardOverview />}  />
                <Route path="/dashboard/user/:id" element={<UserDetailsDashboard />} />
            </Routes>
            <Toaster />
        </Router>
    </>
  )
}

export default LendQsrRoute