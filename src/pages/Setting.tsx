'use client';

import { useState } from 'react';

import EditImage from '../assets/edit_btn.svg'
import Avatar from '../assets/edit_avatar.png';

export default function Setting() {
  const [activeTab, setActiveTab] = useState('edit');

  return (
    <div className="w-full p-6 bg-white rounded-3xl mt-4">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex gap-6 text-[16px] font-[500]">
          <button
            onClick={() => setActiveTab('edit')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'edit'
                ? 'border-[#232323] text-[#232323]'
                : 'border-transparent text-[#718EBF] hover:text-[#718EBF] hover:border-gray-300'
            }`}
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'preferences'
                ? 'border-[#232323] text-[#232323]'
                : 'border-transparent text-[#718EBF] hover:text-[#718EBF] hover:border-gray-300'
            }`}
          >
            Preferences
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'security'
                ? 'border-[#232323] text-[#232323]'
                : 'border-transparent text-[#718EBF] hover:text-[#718EBF] hover:border-gray-300'
            }`}
          >
            Security
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'edit' && <EditProfile />}
        {activeTab === 'preferences' && <Preferences />}
        {activeTab === 'security' && <Security />}
      </div>
    </div>
  );
}

function EditProfile() {
  return (
    <>
      <div className="flex space-y-6 gap-8 p-4">
        <div className=" gap-4 py-6">
          <div className="relative">
            <img
              className=" rounded-full"
              src={Avatar}
              alt="Rounded avatar"
              width={90}
              height={90}
            />

            <button className="absolute bottom-0 -right-2 w-[30px] h-[30px] bg-black items-center flex justify-center rounded-full" >
              <img className="rounded-full" width={15} height={15} src={EditImage}></img>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Your Name
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'Charlene Reed'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              User Name
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'Charlene Reed'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Email
            </label>
            <input
              type="email"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'charlenereed@gmail.com'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Password
            </label>
            <input
              type="password"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'profileData'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Date of Birth
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'25 January 1990'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Present Address
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'San Jose, California, USA'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Permanent Address
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'San Jose, California, USA'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              City
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'San Jose'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Postal Code
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'45962'}
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Country
            </label>
            <input
              type="text"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={'USA'}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button className="mt-6 w-[190px] px-4 py-2 bg-[#232323] text-white rounded-xl hover:bg-gray-800">
          Save
        </button>
      </div>
    </>
  );
}

function Preferences() {
  return <div className="space-y-6"></div>;
}

function Security() {
  return <div className="space-y-6"></div>;
}


