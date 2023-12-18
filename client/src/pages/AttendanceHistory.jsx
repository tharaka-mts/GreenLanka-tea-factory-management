import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3005/api';

const AttendanceHistory = () => {
  const [Attendance, setAttendances] = useState([]);
  const [Leave, setLeaves] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [Users, setUsers] = useState([]);

  const positions = ['Manager', 'Supervisor', 'Employee'];

  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const years = ['2022', '2023', '2024'];

  const currentYear = new Date().getFullYear();

  const getSelectedYear = selectedYear === '' ? currentYear : new Date(selectedYear).getFullYear();

  useEffect(() => {
    fetchAttendances();
  }, []);

  useEffect(() => {
    fetchLeaves();
  }, []);

  useEffect(() => {
    fetchUsers(); // Fetch user data when component mounts or when Attendance changes
  }, [Attendance]);

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
  
  // Fetch user data based on usernames
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      
      // Filter out entries with the position "Admin"
      const filteredUsers = response.data.filter(user => user.type !== "Admin" && user.type !== "Tea Plucker");

      setUsers(filteredUsers);

    } catch (error) {
      console.error('Error fetching User data:', error);
      setUsers([]);
    }
  };

  // Fetch leave data
  const fetchLeaves = async () => {
      try {
          const response = await axios.get(`${API_URL}/getLeaves`);
          const reversedData = response.data.reverse(); // Reverse the array
          setLeaves(reversedData);
      } catch (error) {
          console.error('Error fetching Leave:', error);
          setLeaves([]);
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
 
  const calculateWorkingDaysByUsername = (username) => {
  
    // Filter attendance records for the specified username and the current year
    const userAttendanceInCurrentYear = filteredAttendances.filter((record) => {
      return (
        record.username === username &&
        new Date(record.date).getFullYear() === getSelectedYear
      );
    });
  
    // Calculate the working days
    const workingDays = userAttendanceInCurrentYear.reduce((totalDays, record) => {
      // Convert inTime and outTime to Date objects
      const inTime = new Date(record.inTime);
      const outTime = new Date(record.outTime);
  
      // Check if the inTime and outTime are on the same day
      if (inTime.toDateString() === outTime.toDateString()) {
        // If inTime and outTime are on the same day, count it as a working day
        return totalDays + 1;
      }
  
      return totalDays;
    }, 0);
  
    return workingDays;
  };
  
  const calculateOTHoursByUsername = (username) => {
  
    // Filter attendance records for the specified username and the current year
    const userAttendanceInCurrentYear = filteredAttendances.filter((record) => {
      return (
        record.username === username &&
        new Date(record.date).getFullYear() === getSelectedYear
      );
    });
  
    // Calculate the total OT hours
    const totalOTHours = userAttendanceInCurrentYear.reduce((totalHours, record) => {
      // Convert outTime to a Date object
      const outTime = new Date(record.outTime);
      
      // Check if the outTime is after 16:30:00
      if (outTime.getHours() > 16 || (outTime.getHours() === 16 && outTime.getMinutes() >= 30)) {
        // Calculate the OT hours for this record
        const overtimeMinutes = (outTime.getHours() - 16) * 60 + outTime.getMinutes() - 30;
        
        // Round to the nearest half hour
        const roundedOvertimeMinutes = Math.round(overtimeMinutes / 30) * 30;
        
        // Convert the rounded minutes to hours and add to the total
        return totalHours + (roundedOvertimeMinutes / 60);
      }
  
      return totalHours;
    }, 0);
  
    return totalOTHours;
  };
  
  const calculateTotalLeavesByUsername = (username) => {
  
    // Filter leave records for the specified username and the selected year
    const userLeavesInCurrentYear = Leave.filter((record) => {
      const recordYear = new Date(record.startdate).getFullYear();
      return (
        record.username === username && 
        recordYear === getSelectedYear &&
        record.status === 'Approved'
        );
    });
    
    // Calculate the total leave days
    let totalLeaves = 0;

    userLeavesInCurrentYear.forEach((leave) => {

      const startDate = new Date(leave.startdate);
      const endDate = new Date(leave.enddate);
  
      // Calculate the difference in days between start and end dates
      const timeDiff = endDate - startDate;
      const leaveDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Add 1 to include both start and end days
  
      totalLeaves += leaveDays;
    });
  
    return totalLeaves;
  };
    
  const calculateRemainingLeavesByUsername = (username) => {
    
    const TotalAnnualLeaves = 21;
    const remainingLeaves = TotalAnnualLeaves - calculateTotalLeavesByUsername(username);
    
    return remainingLeaves;
  };

  const filteredUsers = (Users || []).filter((user) => {
    const fullName = getFullNameByUsername(user.username).toLowerCase();
    const position = getPositionByUsername(user.username);
    const search = searchTerm.toLowerCase();
    return fullName.includes(search) && (selectedPosition === '' || position === selectedPosition);
  });

  const filteredAttendances = (Attendance || []).filter((attendance) => {
    const monthName = getMonthNameFromDate(attendance.date);
    const year = getYearFromDate(attendance.date);
    return (selectedMonth === '' || monthName === selectedMonth) && (selectedYear === '' || year === selectedYear);
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex mb-4 text-lg justify-center">User Summary Report : {getSelectedYear} </div>
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
                Full Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                No. of Working Days
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Total OT Hours
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Total Leaves Taken
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Remaining Leaves
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-year divide-gray-200 text-center justify-center">
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                {/* Render data */}
                <td className="py-3">{getFullNameByUsername(user.username)}</td>
                <td>{getPositionByUsername(user.username)}</td>
                <td>{calculateWorkingDaysByUsername(user.username)}</td>
                <td>{calculateOTHoursByUsername(user.username)}</td>
                <td>{calculateTotalLeavesByUsername(user.username)}</td>
                <td>{calculateRemainingLeavesByUsername(user.username)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;