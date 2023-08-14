import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
import EditUser from '../components/EditUser.jsx';
import DeleteUser from '../components/DeleteUser.jsx';

const API_URL = '/api';

const Manage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const { currentColor } = useStateContext();
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {};

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3005/get/users');

        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error('Fetch users error:', error);
      }
    }

    fetchUsers();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/search`, {
        params: { searchTerm, selectedPosition },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
      setUsers([]);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      await DeleteUser(id, fetchUsers);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = async () => {
    // await fetchUsers();
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //   (selectedPosition === '' || user.position === selectedPosition)
  // );

  const filteredUsers = users.filter((user) => {});

  const positions = ['Manager', 'Supervisor', 'Employee', 'Tea Plucker'];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header
        className="text-white py-4 flex text-center "
        style={{ backgroundColor: currentColor }}
      >
        {/* Header content */}
      </header>
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
            className="ml-4 px-4 py-2 text-white rounded-md"
            onClick={handleSearch}
            style={{ backgroundColor: currentColor }}
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
            {users.map((user) => (
              <tr key={user.id}>
                {/* Render user data */}
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.mobile}</td>
                <td>{user.type}</td>
                <td>
                  <div className="flex">

                    <button
                      className="bg-blue-500 ml-5 text-m p-3 w-[70px] hover:drop-shadow-xl text-white hover:bg-blue-800 rounded-[10px]"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 ml-5 text-m p-3 w-[70px] hover:drop-shadow-xl text-white hover:bg-red-800 rounded-[10px]"
                      onClick={() => handleDelete(user.id)}
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
    </div>
  );
};

export default Manage;