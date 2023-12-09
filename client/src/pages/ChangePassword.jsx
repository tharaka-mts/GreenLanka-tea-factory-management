import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [error, setError] = useState(null);

  const { currentColor, currentMode } = useStateContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        const response = await fetch('/api/changePassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Include any other headers needed (e.g., authentication token)
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        // Reset the form
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError(null);

        console.log('Password changed successfully');
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('New password and confirm password must match');
    }
  };

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="mt-5 max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full  text-white p-2 rounded-md "
            style={{ backgroundColor: currentColor, transition: 'background-color 0.3s' }}
            
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;