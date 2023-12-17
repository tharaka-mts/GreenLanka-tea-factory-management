import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";
import { successMessage } from "../components/Popup";

const API_URL = "http://localhost:3005/";

const Manage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const { currentColor } = useStateContext();

  const userId = window.localStorage.getItem("userID");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3005/leave/getleaves");

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error("Fetch users error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [""]);

  const handleStatus = async (Id, status) => {
    try {
      await axios.put(`http://localhost:3005/leave/updateLeave/${Id}`, {
        status: status,
      });
      // Filter out the deleted user from the state
      successMessage();
      setTimeout(() => {
        navigate(0);
      }, 1800);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}/users/search`, {
        params: { searchTerm, selectedPosition },
      });
      console.log("Search results:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error searching users:", error);
      setUsers([]);
    }
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedPosition === "" || user.type === selectedPosition)
    );
  });

  const positions = ["Manager", "Supervisor", "Employee", "Tea Plucker"];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          {/* <Link to="/adduser">
            <button
              className="text-white py-2 px-4 rounded hover:bg-green-800"
              style={{ backgroundColor: currentColor }}
            >
              Add User
            </button>
          </Link> */}
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
                Reason
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-start justify-center">
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="ps-3">{user.username}</td>
                <td className="ps-5">{user.reason}</td>
                <td className="ps-5">{user.startdate}</td>
                <td className="ps-4">{user.enddate}</td>
                <td className="ps-4">{user.type}</td>
                <td className="ps-4">{user.status}</td>
                <td>
                  <div className="flex">
                    <button
                      onClick={() => handleStatus(user._id, "Approved")}
                      className={
                        user.status === "Approved"
                          ? `bg-blue-300 ml-5 text-sm p-3 w-auto text-white rounded-[10px]`
                          : `bg-blue-500 ml-5 text-sm p-3 w-auto hover:drop-shadow-xl text-white hover:bg-blue-800 rounded-[10px]`
                      }
                      disabled={user.status === "Approved"}
                    >
                      Approve
                    </button>

                    <button
                      className={
                        user.status === "Denied"
                          ? "bg-red-300 ml-5 text-m p-3 w-[70px] text-white rounded-[10px]"
                          : "bg-red-500 ml-5 text-m p-3 w-[70px] hover:drop-shadow-xl text-white hover:bg-red-800 rounded-[10px]"
                      }
                      onClick={() => handleStatus(user._id, "Denied")}
                      disabled={user.status === "Denied"}
                    >
                      Deny
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
