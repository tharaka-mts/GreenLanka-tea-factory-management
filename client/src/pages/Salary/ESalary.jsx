import React, { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { getUserSalaries } from "../../api/getDetails";
import { useEffect } from "react";
import SalaryTable from "./SalaryTable";

const ESalary = () => {
  const initialUsers = [
    {
      id: 12,
      name: "Eranga Madushan",
      date: "2023-11-05",
      basic: 0,
      ot: 15000,
    },
    { id: 13, name: "Thanujan Mahen", date: "2023-11-05", basic: 0, ot: 15000 },
    { id: 14, name: "Raja Kumari", date: "2023-11-05", basic: 0, ot: 15000 },
  ];

  const [users, setUsers] = useState([]);
  const { currentColor, currentMode } = useStateContext();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchSalaryDetails() {
      const userDetailsData = await getUserSalaries("Employee");

      if (userDetailsData) {
        setUsers(userDetailsData);
      }
    }

    fetchSalaryDetails();
  }, [""]);

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

  return (
    <div className="min-h-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-center justify-center text-[36px]">
          Salary of Employees
        </h1>

        <div className="flex mb-4">
          <inpu
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

export default ESalary;
