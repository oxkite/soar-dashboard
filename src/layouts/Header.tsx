import avatar from '../assets/avatar.png';
import settingImage from '../assets/settings 1.svg';
import notifyImage from '../assets/002-notification-1.svg';

export default function Header() {
  return (
    <div className="absolute flex justify-between items-center gap-3 min-w-full px-10 py-5 bg-white border-b border-b-[#E6EFF5]">
      <div>
        <p className="text-[28px] text-[#343C6A] font-[600]">Overview</p>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <form className="max-w-md mx-auto">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full py-2 ps-10 text-[15px] focus:outline-none text-[#8BA3CB] border border-gray-300 rounded-[30px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for something"
                required
              />
            </div>
          </form>

          <button className="rounded-full !px-[11px] hover:bg-gray-100 focus:outline-none">
            <img src={settingImage} alt=""></img>
          </button>
          <button className="rounded-full !px-[11px] hover:bg-gray-100 focus:outline-none">
            <img src={notifyImage} alt=""></img>
          </button>
          <img className=" rounded-full" src={avatar} alt="Rounded avatar" />
        </div>
      </div>
    </div>
  );
}
