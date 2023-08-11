import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Link } from 'react-router-dom';
import { adduser } from './AddUser';

const Manage = () => {
  const initialUsers = [
    { id: 1, name: 'John Doe', age: 30, address: '123 Main St', number: '+9478541236', position: 'Manager' },
    { id: 2, name: 'Jane Smith', age: 25, address: '456 Elm St', number: '+9475841236', position: 'Supervisor' },
    // Add more users as needed
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');


  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };


  const handleSearch = () => {
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  }

  const { currentColor, currentMode } = useStateContext();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedPosition === '' || user.position === selectedPosition)
  );

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
            <button className=" text-white py-2 px-4 rounded hover:bg-green-800"
              style={{ backgroundColor: currentColor }}
            >
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
            {positions.map(position => (
              <option key={position} value={position}>{position}</option>
            ))}
          </select>
        </div>
        <table className="min-w-full">
        <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Age
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
              <tr key={user.id}>
                {/* Render user data */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.number}</td>
                <td>{user.position}</td>
                <td>
                  <div className="flex">
                  <button
                //  style={{ backgroundColor: currentColor}}
              className=' bg-green-500 text-m p-3 w-[70px]  hover:drop-shadow-xl text-white  rounded-[10px] hover:bg-green-800'
           >
            
                  View
                </button>
                <button 
                  className=' bg-blue-500 ml-5 text-m p-3  w-[70px] hover:drop-shadow-xl text-white hover:bg-blue-800 rounded-[10px]'
                   >
                  Edit
                </button>
                <button
                className='bg-red-500 ml-5 text-m p-3  w-[70px] hover:drop-shadow-xl text-white hover:bg-red-800 rounded-[10px]'
                // style={{ backgroundColor: '#f56565' }}
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