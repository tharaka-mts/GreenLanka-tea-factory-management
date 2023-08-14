import { useState, useEffect } from 'react';
import { getUserDetails } from '../api/getDetails';

import { MdOutlineCancel } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { PiGearSixBold } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {

  const [userDetails, setUserDetails] = useState({});

  const userId = window.localStorage.getItem('userID');

  useEffect(() => {
    async function fetchUserDetails() {
      const userDetailsData = await getUserDetails(userId);

      if (userDetailsData) {
        setUserDetails(userDetailsData);
      }
    }

    fetchUserDetails();
  }, [userId]);

  const navigate = useNavigate();

  const userProfileData = [
    {
      icon: <BsPersonCircle />,
      title: 'My Profile',
      desc: 'Edit Profile',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
    },
    {
      icon: <PiGearSixBold />,
      title: 'Account Settings',
      desc: 'Change Settings',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
    },
  ];

  const { currentColor, setCookies } = useStateContext();

  const logout = () => {
    setCookies('access_token', '');
    window.localStorage.removeItem('userID');
    navigate('/login');
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
      <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>

          <p className="font-semibold text-xl dark:text-gray-200"> {userDetails.firstname} {userDetails.lastname} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> {userDetails.type}  </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {userDetails.email} </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <Link to='/UserProfilePage'  className="font-semibold dark:text-gray-200 ">{item.title}</Link>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button onClick={logout} style={ { backgroundColor:currentColor} } className=' text-white rounded-md text-xl p-3 w-full hover:drop-shadow-xl hover:bg-gray'>
          Logout
        </button>
      </div>
    </div>

  );
};

export default UserProfile;
