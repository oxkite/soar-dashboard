'use client';

import { useRef, useEffect } from 'react';

import SideBarItem from '../components/sidebar/SideBarItem';
import LogoSoar from '../assets/sidebar/task.svg';
import IconDashboard from '../assets/sidebar/home.svg';
import IconTransactions from '../assets/sidebar/transaction.svg';
import IconAccounts from '../assets/sidebar/user.svg';
import IconInvestments from '../assets/sidebar/investment.svg';
import IconCreditCards from '../assets/sidebar/credit-card.svg';
import IconLoans from '../assets/sidebar/loan.svg';
import IconServices from '../assets/sidebar/service.svg';
import IconPriviledges from '../assets/sidebar/Privileges.svg';
import IconSettings from '../assets/sidebar/settings.svg';


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideBar({ isOpen, onClose }: SidebarProps) {
  const sideBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node) &&
        window.innerWidth <= 768 &&
        isOpen
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const sideBar = (
    <div className="h-full py-8 overflow-y-auto">
      <div className="flex items-center justify-center pb-10">
        <img src={LogoSoar} alt="Soar Logo" />
        <p className="font-[800] text-[25px] text-[#343C6A] ms-1 hidden xl:block">
          Soar Task
        </p>
      </div>
      <ul className="space-y-2 font-medium">
        <li onClick={onClose}>
          <SideBarItem
            title="Dashboard"
            link="/overview"
            icon={<img src={IconDashboard} alt="Dashboard Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Transactions"
            link="/transaction"
            icon={<img src={IconTransactions} alt="Transactions Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Accounts"
            link="/accounts"
            icon={<img src={IconAccounts} alt="Accounts Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Investments"
            link="/investments"
            icon={<img src={IconInvestments} alt="Accounts Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Credit Cards"
            link="/credit-cards"
            icon={<img src={IconCreditCards} alt="Accounts Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Loans"
            link="/loans"
            icon={<img src={IconLoans} alt="Accounts Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Services"
            link="/services"
            icon={<img src={IconServices} alt="Accounts Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="My Priviledges"
            link="/privileges"
            icon={<img src={IconPriviledges} alt="Accounts Logo" />}
          />
        </li>
        <li onClick={onClose}>
          <SideBarItem
            title="Setting"
            link="/setting"
            icon={<img src={IconSettings} alt="Accounts Logo" />}
          />
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <div
        ref={sideBarRef}
        className="border-r border-r-[#E6EFF5] -translate-x-full sm:translate-x-0 sm:block hidden"
      >
        <div className="xl:w-64 sm:w-20 w-0 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
          {sideBar}
        </div>
      </div>
      <div
        ref={sideBarRef}
        className={`sm:hidden block fixed left-0 top-0 z-50 h-full w-64 bg-white border-r border-r-[#E6EFF5] transition-transform duration-300 ease-in-out shadow-lg ${
          isOpen ? 'translate-x-0 fixed left-0 top-0 ' : ' -translate-x-full'
        } sm:translate-x-0`}
      >
        {sideBar}
      </div>
    </>
  );
}
