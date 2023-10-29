import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3005/api';

const ViewMoreDetails = () => {
  const [Attendance, setAttendances] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [Users, setUsers] = useState([]);

  const positions = ['Manager', 'Supervisor', 'Employee', 'Tea Plucker'];

  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const years = ['2022', '2023', '2024'];

  useEffect(() => {
    fetchAttendances();
  }, []);

  useEffect(() => {
    fetchUsers(); // Fetch user data when component mounts or when Attendance changes
  }, [Attendance]);

  // Fetch user data based on usernames
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching User data:', error);
      setUsers([]);
    }
  };

    // Fetch attendance data
    const fetchAttendances = async () => {
        try {
            const response = await axios.get(`${API_URL}/getAttendance`);
            const reversedData = response.data.reverse(); // Reverse the array
            setAttendances(reversedData);
        } catch (error) {
            console.error('Error fetching Attendance:', error);
            setAttendances([]);
        }
    };

  const handleClear = () => {
    setSearchTerm('');
    setSelectedPosition('');
    setSelectedMonth('');
    setSelectedYear('');
  }

  const getMonthNameFromDate = (dateString) => {
    const date = new Date(dateString);
    return monthNames[date.getMonth()];
  }

  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  const calOTHours = (outTime, date) => {
    const diff = Date.parse(outTime) - Date.parse(date + ' 16:30:00');
    const result = new Date(diff).toISOString().slice(11, 19);
    return result;
  };

  // Helper function to get the full name based on username
  const getFullNameByUsername = (username) => {
    const user = Users.find((user) => user.username === username);
    return user ? user.firstname + ' ' + user.lastname : 'N/A'; // Return the first name and last name if found, otherwise an empty string
  };

  // Helper function to get the position based on username
  const getPositionByUsername = (username) => {
    const user = Users.find((user) => user.username === username);
    return user ? user.type : 'N/A'; // Return the position if found, otherwise an empty string
  };

  const filteredAttendances = (Attendance || []).filter((attendance) => {
    const fullName = getFullNameByUsername(attendance.username).toLowerCase();
    const position = getPositionByUsername(attendance.username);
    const monthName = getMonthNameFromDate(attendance.date);
    const year = getYearFromDate(attendance.date);
    const search = searchTerm.toLowerCase();
    return fullName.includes(search) && (selectedPosition === '' || position === selectedPosition) && (selectedMonth === '' || monthName === selectedMonth) && (selectedYear === '' || year === selectedYear);
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex mb-4 text-lg justify-center">Attendance Summary</div>
        <div className="flex mb-4">
          <input
            type="text"
            className="border rounded w-full py-2 px-3"
            placeholder="Search by first name or last name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-4 px-4 py-2 text-white rounded-md"
            onClick={handleClear}
            style={{ backgroundColor: "#dc3545" }}
          >
            Clear
          </button>
        </div>

        <div className="mb-4 flex">
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
          <select
            className="border rounded py-2 px-3 ml-2"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {monthNames.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            className="border rounded py-2 px-3 ml-2"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                In time
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Out time
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                OT Hours
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center justify-center">
            {filteredAttendances.map((attendance, index) => (
              <tr key={index}>
                {/* Render Attendance data */}
                <td className="py-3">{attendance.date}</td>
                <td>{getFullNameByUsername(attendance.username)}</td>
                <td>{getPositionByUsername(attendance.username)}</td>
                <td>{attendance.inTime}</td>
                <td>{attendance.outTime}</td>
                <td>{calOTHours(attendance.outTime, attendance.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewMoreDetails;
