import { useState, useEffect } from 'react';

import SendImage from '../../assets/dashboard/send.svg';
import NextButtonImage from '../../assets/dashboard/next.svg';

export default function QuickTransfer() {
  const [startIndex, setStartIndex] = useState(0);
  const [memberData, setMemberData] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await fetch('/api/members');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMemberData(data.members); 
      } catch (error) {
        console.log('Error!!!!', error);
      } finally {
      }
    };

    fetchMemberData();
  }, []);
  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % memberData.length);
  };
  const visibleProfiles =
    memberData.length > 0
      ? [
          memberData[startIndex % memberData.length],
          memberData[(startIndex + 1) % memberData.length],
          memberData[(startIndex + 2) % memberData.length],
        ]
      : [];

  const handleClick = (id: any) => {
    setSelectedMemberId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div
      aria-label="Transfer money"
      className="p-4 flex flex-col justify-between gap-6 h-[235px]"
    >
      <div className="flex justify-between items-center gap-4">
        <div className="overflow-hidden">
          <div className="grid grid-cols-3 gap-6 transition-transform duration-300 ease-in-out">
            {visibleProfiles.map((member: any) => (
              <div
                key={member.id}
                className="items-center text-center space-x-1"
                onClick={() => handleClick(member.id)}
              >
                <div className="flex justify-center">
                  <img
                    className="rounded-full"
                    src={member.avatar}
                    alt="Rounded avatar"
                  />
                </div>
                <p
                  className={`text-[16px] font-[400] text-[#232323] truncate ${
                    selectedMemberId === member.id ? 'font-bold' : ''
                  }`}
                >
                  {member.name}
                </p>
                <p
                  className={`text-[15px] font-[400] text-[#718EBF] ${
                    selectedMemberId === member.id ? 'font-bold' : ''
                  }`}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Next member"
          className="rounded-full border border-gray-500 py-4 px-5 border-none shadow-md hover:shadow-xl"
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
          <div>
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
