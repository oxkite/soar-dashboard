import { useState } from 'react';

import SendImage from '../../assets/send.svg';
import Members from '../../data/members.json';
import NextButtonImage from '../../assets/next.svg';

export default function QuickTransfer() {
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % Members.length);
  };
  const visibleProfiles = [
    Members[startIndex % Members.length],
    Members[(startIndex + 1) % Members.length],
    Members[(startIndex + 2) % Members.length],
  ];
  return (
    <div aria-label='Transfer money' className="p-4 flex flex-col justify-between gap-6 h-[235px]">
      <div className="flex justify-between items-center gap-4">
        <div className="overflow-hidden">
          <div className="grid grid-cols-3 gap-6 transition-transform duration-300 ease-in-out">
            {visibleProfiles.map((members) => (
              <div key={members.id} className="items-center text-center">
                <div className="flex justify-center">
                  <img
                    className="rounded-full"
                    src={members.avatar}
                    alt="Rounded avatar"
                  />
                </div>
                <p className="text-[16px] font-[400] text-[#232323] truncate">
                  {members.name}
                </p>
                <p className="text-[15px] font-[400] text-[#718EBF]">
                  {members.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next member"
          className="rounded-full border border-gray-500 py-4 px-5 border-none shadow-md"
          onClick={handleNext}
        >
          <img src={NextButtonImage} />
        </button>
      </div>
      <div className="grid grid-cols-3 items-center">
        <p className="text-[16px] font-[400] text-[#718EBF] truncate">
          Write Amount
        </p>
        <div className="col-span-2 bg-[#EDF1F7] rounded-full flex">
          <input
            aria-label="Quick transfer"
            type="number"
            className="bg-[#EDF1F7] pl-6 text-[#718EBF] focus:outline-none rounded-full w-full"
          />
          <div className="">
            <button
              aria-label="Send money"
              className="rounded-full border bg-[#232323] hover:bg-[#474747] focus:bg-[#0e0d0d] px-4 py-3 w-[100px] gap-2 text-[16px] font-[500] text-white flex border-none shadow-md"
            >
              Send
              <img src={SendImage} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
