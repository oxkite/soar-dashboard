'use client';

import { useState } from 'react';
import Header from './Header';
import SideBar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DefaultLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-column overflow-y-auto w-full min-w-[320px] bg-boxdark-2 text-bodydark">
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="relative w-full bg-[#F5F7FA] justify-center">
        <Header link={location.pathname} onMenuClick={toggleSidebar} />

        <div className="flex bg-[#f5f7fa] h-screen w-full justify-center overflow-auto ">
          <div className="flex w-full max-w-[1440px] sm:pt-28 pt-40 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
