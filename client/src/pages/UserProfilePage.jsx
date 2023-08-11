import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaCamera } from 'react-icons/fa'; // Added FaCamera for the photo edit icon
import ViewAttendance from './ViewAttendance';
import ViewSalaryHistory from './ViewSalaryHistory';
import ViewSalaryReport from './ViewSalaryReport';
import avatar from '../data/avatar.jpg';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('attendance');

  const TabContent = () => {
    switch (activeTab) {
      case 'attendance':
        return <ViewAttendance />;
      case 'salaryHistory':
        return <ViewSalaryHistory />;
      case 'salaryReport':
        return <ViewSalaryReport />;
      default:
        return null;
    }
  };

  const handleEditPhoto = () => {
    // Placeholder function for editing the photo
    console.log('Edit photo clicked');
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center mb-4">
          <div className=" rounded-full overflow-hidden relative">
            <img
             className="rounded-full h-36 w-36"
              src={avatar} // Provide the path to the avatar image
              alt="User's avatar"
            />
            <button
              onClick={handleEditPhoto}
              className="absolute bottom-0 right-0 left-16 bg-green-500 p-2 rounded-full shadow-md"
            >
              <FaCamera className="text-white" />
            </button>
          </div>
          <div className="ml-4">
           
      
           <div>
           <h1 className="text-xl font-semibold">
                John Doe
           
            </h1>
         
            <p className="text-gray-600">Manager</p>
            <p className="text-gray-600">+94754896325</p>
            <p className="text-gray-600">Hikkaduwa , Galle</p>
            <p className="text-gray-600">45 Years</p>

           
           
           </div>
           <br/>

           <div className="ml-auto">
            <Link to="/update-details">
                
              <FaEdit className="text-green-500 text-2xl cursor-pointer" />
              <h3>
                    Edit Pofile
                </h3>
            </Link>
          </div>

        
          
              

          </div>

          

        
        </div>
        <div className="border-b border-gray-300 pb-4 bg-green-100 color-green-600 text-center items-center">
          <ul className="flex space-x-4 text-center items-center justify-center">
            <li
              className={`cursor-pointer ${
                activeTab === 'attendance' && 'font-semibold border-b-2 border-green-500'
              }`}
              onClick={() => setActiveTab('attendance')}
            >
              View Attendance
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === 'salaryHistory' && 'font-semibold border-b-2 border-green-500'
              }`}
              onClick={() => setActiveTab('salaryHistory')}
            >
              Salary History
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === 'salaryReport' && 'font-semibold border-b-2 border-green-500'
              }`}
              onClick={() => setActiveTab('salaryReport')}
            >
              Salary Report
            </li>
          </ul>
        </div>
        <TabContent />
      </div>
    </div>
  );
};

export default UserProfilePage;