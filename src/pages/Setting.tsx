'use client';

import { useState, useRef } from 'react';
import EditImage from '../assets/edit_btn.svg';
import Avatar from '../assets/edit_avatar.png';

interface ProfileData {
  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}
async function uploadAvatar(formData: FormData) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const file = formData.get('avatar') as File;
    if (!file) {
      throw new Error('No file provided');
    }
    return {
      success: true,
      url: URL.createObjectURL(file),
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to upload avatar',
    };
  }
}
export default function Setting() {
  const [activeTab, setActiveTab] = useState('edit');

  return (
    <div
      aria-label="Setting page"
      className="w-full h-100vh  my-4 bg-white rounded-3xl"
    >
      <div className="border-b border-gray-200 px-6 pt-4">
        <nav className="-mb-px flex gap-6 text-[16px] font-[500]">
          <button
            aria-label="Edit profile"
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
            aria-label="Preferences"
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
            aria-label="Security"
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

      <div className="mt-6 transition-opacity duration-300 ease-in-out">
        {activeTab === 'edit' && (
          <div className="opacity-100 transition-opacity duration-3000 ease-in-out">
            <EditProfile />
          </div>
        )}
        {activeTab === 'preferences' && (
          <div className="opacity-100 transition-opacity duration-3000 ease-in-out">
            <Preferences />
          </div>
        )}
        {activeTab === 'security' && (
          <div className="opacity-100 transition-opacity duration-3000 ease-in-out">
            <Security />
          </div>
        )}
      </div>
    </div>
  );
}

function EditProfile() {
  const [image, setImage] = useState(Avatar);
  const [profileData, setProfileData] = useState<ProfileData>({
    id: 0,
    name: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '123456789',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
      const formData = new FormData();
      formData.append('avatar', file);

      const result = await uploadAvatar(formData);
      if (!result.success) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setImage(Avatar);
    } finally {
    }
  };

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: any) => {
    setProfileData(e.target.value);
    e.preventDefault();

    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedData = await response.json();
      console.log('Updated Profile:', updatedData);
      // Optionally update local state or notify user of success
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  return (
    <div className="bg-white rounded-3xl px-10">
      <div className="md:flex space-y-6 gap-8 p-4 h-full">
        <div className="flex justify-center gap-4 py-6">
          <img
            className=" rounded-full sm:w-[90px] h-[90px] object-cover"
            src={image}
            alt="Rounded avatar"
          />
          <div className="relative">
            <button
              aria-label="Edit image"
              onClick={handleEditClick}
              className="absolute md:bottom-0 top-14 right-2 w-[30px] h-[30px] bg-black items-center flex justify-center rounded-full"
            >
              <img
                className="rounded-full"
                width={15}
                height={15}
                src={EditImage}
              ></img>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              aria-label="Avatar upload"
              accept="image/*"
              className="hidden !w-[15px] !h-[15px]"
              onChange={handleFileSelect}
              width={15}
              height={15}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full pl-4">
          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Your Name
            </label>
            <input
              type="text"
              aria-label="Input name"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              User Name
            </label>
            <input
              type="text"
              aria-label="Input username"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.userName}
              onChange={(e) =>
                setProfileData({ ...profileData, userName: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Email
            </label>
            <input
              type="email"
              aria-label="Input email"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Password
            </label>
            <input
              type="password"
              aria-label="Input password"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.password}
              onChange={(e) =>
                setProfileData({ ...profileData, password: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Date of Birth
            </label>
            <input
              type="text"
              aria-label="Input birth"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.dateOfBirth}
              onChange={(e) =>
                setProfileData({ ...profileData, dateOfBirth: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Present Address
            </label>
            <input
              type="text"
              aria-label="Input address"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.presentAddress}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  presentAddress: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Permanent Address
            </label>
            <input
              type="text"
              aria-label="Input permanent address"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.permanentAddress}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  permanentAddress: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              City
            </label>
            <input
              type="text"
              aria-label="Input city"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.city}
              onChange={(e) =>
                setProfileData({ ...profileData, city: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Postal Code
            </label>
            <input
              type="text"
              aria-label="Input code"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.postalCode}
              onChange={(e) =>
                setProfileData({ ...profileData, postalCode: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex flex-col text-start">
            <label className="text-sm text-[16px] font-[400] text-[#232323]">
              Country
            </label>
            <input
              type="text"
              aria-label="Input country"
              className="block w-full py-2 px-4 text-[15px] font-[400] focus:outline-none text-[#718EBF] border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              value={profileData.country}
              onChange={(e) =>
                setProfileData({ ...profileData, country: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <button
          aria-label="Save info"
          onClick={handleSubmit}
          className="mt-6 w-full md:w-[190px] px-4 py-2 bg-[#232323] text-white rounded-xl hover:bg-gray-800 focus:bg-[#0e0d0d]"
        >
          Save
        </button>
      </div>
    </div>
  );
}

function Preferences() {
  return <div className="space-y-6">Preferences</div>;
}

function Security() {
  return <div className="space-y-6">Security</div>;
}
