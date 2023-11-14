import React from 'react';
import { useState } from 'react';
import changePassword  from './ChangePassword';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [message, setMessage] = useState('');
  const { currentColor, currentMode } = useStateContext();
  const [user, setUser] = useState(null);

  const handlePasswordChange = async () => {
    const handlePasswordChange = async () => {
      if (newPassword !== confirmPassword) {
        setMessage('New passwords do not match');
        return;
      }
    
      try {
        const response = await axios.patch('/api/users/change-password', {
          currentPassword,
          newPassword,
          userId: user._id, 
        });
    
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Password change failed');
        console.error('Password change error:', error);
      }
    };
  };
    
  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="mt-5 max-w-md w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Password</label>
          <div className="relative">
            <input
              type={showPasswords ? 'text' : 'password'}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500"
              onClick={toggleShowPasswords}
            >
              {showPasswords ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <div className="relative">
            <input
              type={showPasswords ? 'text' : 'password'}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500"
              onClick={toggleShowPasswords}
            >
              {showPasswords ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
          <div className="relative">
            <input
              type={showPasswords ? 'text' : 'password'}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500"
              onClick={toggleShowPasswords}
            >
              {showPasswords ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {message && <p className="text-red-500 mb-4">{message}</p>}
        <button
          type="submit"
          className="w-full  text-white p-2 rounded-md  hover:bg-green-600"
          style={{ backgroundColor: currentColor, transition: 'background-color 0.3s'  }}
          
        >
          Change Password
        </button>
      </form>
    </div>
  </div>
  );

};
  

export default Settings;
