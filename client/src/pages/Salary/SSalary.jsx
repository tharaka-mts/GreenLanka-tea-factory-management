import React, { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect } from "react";
import { getUserSalaries } from "../../api/getDetails";
import SalaryTable from "./SalaryTable";

const SSalary = () => {
  const initialUsers = [
    { id: 8, name: "Lalitha Nilmini", date: "2023-11-06", basic: 45000, ot: 0 },
    // { id: 13, name: 'Jane Smith', date: '2023-05-06', basic: 30000, ot: 70000 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const { currentColor, currentMode } = useStateContext();
  const [searchTerm, setSearchTerm] = useState("");

  // Function to calculate total salary
  const calculateTotalSalary = (user) => {
    return user.basic + user.ot;
  };

  const handleSearch = () => {
    const filteredUsers = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  useEffect(() => {
    async function fetchSalaryDetails() {
      const userDetailsData = await getUserSalaries("Supervisor");

      if (userDetailsData) {
        setUsers(userDetailsData);
      }
    }

    fetchSalaryDetails();
  }, [""]);

  return (
    <div className="min-h-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-center justify-center text-[36px]">
          Salary of Supervisors
        </h1>

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
        <SalaryTable users={users} />
      </div>
    </div>
  );
};

export default SSalary;
