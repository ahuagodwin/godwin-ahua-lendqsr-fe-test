import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, DashboardOverview } from './pages';
import { Toaster } from "react-hot-toast"
import { DashboardLayout } from './components';

const LendQsrRoute = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' exact index element={<LoginPage />} />
                <Route element={<DashboardLayout />}>
                  <Route path='/dashboard/user' exact index element={<DashboardOverview />} />
                </Route>
            </Routes>
            <Toaster />
        </Router>
    </>
  )
}

export default LendQsrRoute