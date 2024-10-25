import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardHeader from "../Dashboard/DashboardHeader";
import logo from "../../assets/ethiopost_logo.jfif"

const PersonalTrainingLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=''>
      {/* Dynamic Header Title */}
      <DashboardHeader logo={logo} role="Trainee"/>
      <div className="h-screen flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default PersonalTrainingLayout;