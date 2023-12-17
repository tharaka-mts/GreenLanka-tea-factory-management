import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const SalaryTable = ({ users }) => {
  const { currentColor } = useStateContext();

  // Parse the backend date string
  const formatDate = (date) => {
    const backendDate = new Date(date);
    return backendDate.toISOString().split("T")[0];
  };

  return (
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
              <td className="px-6 py-4">{users.indexOf(user) + 1}</td>
              <td className="px-6 py-4">
                {user.firstname + " " + user.lastname}
              </td>
              <td className="px-6 py-4">{formatDate(user.date)}</td>
              <td className="px-6 py-4">{user.basic}</td>
              <td className="px-6 py-4">{user.bonus}</td>
              <td className="px-6 py-4">{user.finalSalary}</td>
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
  );
};

export default SalaryTable;
