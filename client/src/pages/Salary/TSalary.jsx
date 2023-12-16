import React, { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import SalaryTable from "./SalaryTable";
import { useEffect } from "react";
import { getUserSalaries } from "../../api/getDetails";

const TSalary = () => {
  const initialUsers = [
    { id: 22, name: "Raja Kumara", date: "2023-11-06", basic: 0, ot: 17500 },
    {
      id: 23,
      name: "Thanushayn Vijay",
      date: "2023-11-06",
      basic: 0,
      ot: 19000,
    },
    { id: 24, name: "Raj Kumar", date: "2023-11-06", basic: 0, ot: 16000 },
    {
      id: 25,
      name: "Sharmila Kumari",
      date: "2023-11-06",
      basic: 0,
      ot: 21000,
    },
    { id: 26, name: "Raju Thanujan", date: "2023-11-06", basic: 0, ot: 16500 },
    {
      id: 26,
      name: "Yogeshwara Vije",
      date: "2023-11-06",
      basic: 0,
      ot: 17500,
    },
  ];

  const [users, setUsers] = useState([]);
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
      const userDetailsData = await getUserSalaries("Tea Plucker");

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
          Salary of Tea Pluckers
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

export default TSalary;
