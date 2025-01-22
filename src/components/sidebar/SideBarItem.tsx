import clsx from 'clsx';

import { Link, useLocation } from 'react-router-dom';

type SideBarItemPropsType = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

const SideBarItem = ({
  icon,
  title,
  link,
  
}: SideBarItemPropsType) => {
  const location = useLocation();
  const isActive = location.pathname == link;
  return (
    <div aria-label='Side menu item' className="relative w-full h-full hover:bg-gray-100 dark:hover:bg-gray-700 py-1">
      {isActive && (
        <div className="absolute top-[-3px] left-0 w-2 h-16 bg-[#232323] rounded-e-md border-tl-none"></div>
      )}
      <Link
        className="flex items-center text-gray-900 rounded-lg dark:text-white gap-3"
        to={link}
      >
        <div className="flex items-center p-3 pl-6 xl:pl-12">
          <div className={clsx(isActive ? 'opacity-100' : 'opacity-50')}>
            {icon}
          </div>
          <span
            className={clsx(
              'ms-2 font-[500] text-[18px] block md:hidden lg:hidden xl:block sm:hidden xs:block',
              isActive ? 'text-black' : 'text-gray-500'
            )}
          >
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
};
export default SideBarItem;
