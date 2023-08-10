import React, { useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';

const TSalary = () => {
  const initialUsers = [
    { id: 12, name: 'John Doe', date: '2023-05-06', basic: 30000, ot: 70000 },
    { id: 13, name: 'Jane Smith', date: '2023-05-06', basic: 30000, ot: 70000 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const { currentColor, currentMode } = useStateContext();
  const [searchTerm, setSearchTerm] = useState('');

  // Function to calculate total salary
  const calculateTotalSalary = (user) => {
    return user.basic + user.ot;
  };

  const handleSearch = () => {
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  }

  return (
    <div className="min-h-auto">
      <div className="container mx-auto p-4">

      <h1 className='text-center justify-center text-[36px]'>Salary of Tea Pluckers</h1>

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
        <div className="overflow-x-auto">

           
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Basic Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  OT Income
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.date}</td>
                  <td className="px-6 py-4">{user.basic}</td>
                  <td className="px-6 py-4">{user.ot}</td>
                  <td className="px-6 py-4">{calculateTotalSalary(user)}</td>
                  <td className="px-6 py-4">
                    <button
                      style={{ backgroundColor: currentColor }}
                      className="text-m p-3 w-[70px] hover:drop-shadow-xl text-white rounded-[10px] hover:bg-green-800"
                    >
                      Paid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TSalary;