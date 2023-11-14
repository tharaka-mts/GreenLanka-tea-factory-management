import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [result, setResult] = useState('');

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    type: '',
    email: '',
    address: '',
    mobile: '',
  });

  useEffect(() => {
    // Fetch user data based on the user ID from the URL (userId)
    fetch(`http://localhost:3005/get/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the user state with the fetched data
        setUser(data);
      })
      .catch((error) => console.error('Error fetching user data', error));
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the updated user data
    const updatedUserData = {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      type: user.type,
      email: user.email,
      address: user.address,
      mobile: user.mobile,
    };

    fetch(`http://localhost:3005/auth/edit/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User updated successfully:', data);
        setResult(data.message);
        navigate('/manage');
        alert('User updated successfully');
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        setResult('Error updating user: ' + error.message);
      });
  };

  return (
    <div className="w-full">
      <div className="bg-gray-100 p-4 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md w-1/2">
          <h1 className="text-2xl mb-4 text-green-400 text-center">Update User</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">First Name</label>
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Type</label>
            <input
              type="text"
              name="type"
              value={user.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={user.mobile}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-green-400 text-white hover:bg-green-600 py-2 px-4 rounded-md">
              Update User
            </button>
            <button type="button" className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
