import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import avatar from '../assets/header/avatar.png';
import SettingImage from '../assets/header/settings.svg';
import NotifyImage from '../assets/header/notification.svg';
import MenuImage from '../assets/header/menu.svg';

type headerPropsType = {
  link: string;
  onMenuClick: () => void;
};

const formatString = (input: string) => {
  const pathSegments = input.split('/');
  const cardTitle = pathSegments[pathSegments.length - 1];
  return cardTitle.charAt(0).toUpperCase() + cardTitle.slice(1);
};

export default function Header({ link, onMenuClick }: headerPropsType) {
  const location = useLocation();
  const isActive = location.pathname == link;

  return (
    <div className="absolute min-w-full px-10 py-5 bg-white border-b border-b-[#E6EFF5]">
      <div className="flex justify-between items-center gap-3 ">
        <button
          aria-label="Menu item"
          className="sm:hidden block"
          onClick={onMenuClick}
        >
          <img src={MenuImage} alt="Menu item" />
        </button>

        <p className="text-[28px] text-[#343C6A] font-[600]">
          {clsx(isActive ? formatString(link) : 'Overview')}
        </p>
        <div className="flex items-center gap-4">
          <form className="max-w-md mx-auto hidden sm:block">
            <div className="relative ">
              <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                aria-label="Search"
                className="block w-full p-2 ps-10 text-[15px] focus:outline-none text-[#8BA3CB] border border-gray-300 rounded-[30px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for something"
                required
              />
            </div>
          </form>
          <Link to={'/setting'}>
            <button
              aria-label="Setting button"
              className="rounded-full !px-[11px] hover:opacity-50 focus:outline-none hidden md:block"
            >
              <img src={SettingImage} alt="Setting image"></img>
            </button>
          </Link>
          <button
            aria-label="Notify button"
            className="rounded-full !px-[11px] hover:opacity-50 focus:outline-none hidden sm:block"
          >
            <img src={NotifyImage} alt=""></img>
          </button>
          <img className=" rounded-full" src={avatar} alt="Rounded avatar" />
        </div>
      </div>
      <form className="mt-4 w-full sm:hidden block">
        <div className="relative ">
          <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            aria-label="Search"
            className="block w-full p-2 ps-10 text-[15px] focus:outline-none text-[#8BA3CB] border border-gray-300 rounded-[30px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for something"
            required
          />
        </div>
      </form>
    </div>
  );
}
