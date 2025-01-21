import Header from './Header';
import SideBar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DefaultLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-column overflow-y-auto w-full bg-boxdark-2 text-bodydark">
      <SideBar />
      <div className="relative w-full bg-[#F5F7FA] justify-center">
        <Header link={location.pathname} />

        <div className="flex bg-[#f5f7fa] h-screen w-full justify-center overflow-auto ">
          <div className="flex w-full max-w-[1440px] pt-28 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
