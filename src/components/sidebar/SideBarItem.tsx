import clsx from 'clsx';

import { Link, useLocation } from 'react-router-dom';

type SideBarItemPropsType = {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const SideBarItem = ({icon, title, link}: SideBarItemPropsType) => {
  const location = useLocation();
  const isActive = location.pathname == link;
  return (
    <div className="relative w-full h-full hover:bg-gray-100 dark:hover:bg-gray-700">
      { isActive && (
        <div className="absolute top-0 left-0 w-2 h-12 bg-[#232323] rounded-e-md border-tl-none">
        </div>
      )}
      <div className="p-3 pl-6">
        <Link
          className="flex items-center text-gray-900 rounded-lg dark:text-white gap-3"
          to={link}
        >
          {icon}
          <span className={ clsx(
            "ms-2 font-[500] text-[18px]",
            isActive ? "text-black" : "text-gray-500"
            )}>
            {title}
          </span>
        </Link>
      </div>
    </div>
  );
}
export default SideBarItem;