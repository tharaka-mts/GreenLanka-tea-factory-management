import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteUser from './DeleteUser'
import { useStateContext } from '../contexts/ContextProvider';

const API_URL = 'http://localhost:3005/get';

const Manage = () => {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const { currentColor } = useStateContext();

  const userId = window.localStorage.getItem('userID');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3005/get/users');

      if (response.status === 200) {
        console.log('Fetched users successfully:', response.data);
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Fetch users error:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/search`, {
        params: { searchTerm, selectedPosition },
      });
      console.log('Search results:', response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
      setUsers([]);
    }
  };


  const handleDelete = async ({ userId }) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3005/auth/delete/${userId}`);
          // Filter out the deleted user from the state
          setUsers(users.filter(user => user._id !== userId));
        console.log('Deleted Successfully')
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };


  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = async () => {
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedPosition === '' || user.type === selectedPosition)
    );
  });

  const positions = ['Manager', 'Supervisor', 'Employee', 'Tea Plucker'];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Link to="/adduser">
          <button className="text-white py-2 px-4 rounded hover:bg-green-800" style={{ backgroundColor: currentColor }}>
                   Add User
               </button>
          </Link>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            className="border rounded w-full py-2 px-3"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-4 px-4 py-2 text-white bg-green-500 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="mb-4">
          <select
            className="border rounded py-2 px-3"
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
          >
            <option value="">All Positions</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center justify-center">
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.mobile}</td>
                <td>{user.type}</td>
                <td>
                  <div className="flex">
                    <Link to={`/UpdateUser/${user._id}`}>
                    <button
                      className="bg-blue-500 ml-5 text-sm p-3 w-[70px] hover:drop-shadow-xl text-white hover:bg-blue-800 rounded-[10px]"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    className="bg-red-500 ml-5 text-m p-3 w-[70px] hover:drop-shadow-xl text-white hover:bg-red-800 rounded-[10px]"
                    onClick={() => handleDelete({ userId: user._id })}
                  >
                    Delete
                  </button>


                </div>
              </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div >
  );
};

export default Manage;
