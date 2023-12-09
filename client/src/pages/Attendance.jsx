import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const API_URL = 'http://localhost:3005/api';

const Attendance = () => {
  const [Attendance, setAttendances] = useState([]);
  const [AttendanceToday, setAttendancesToday] = useState([]);
  const [Users, setUsers] = useState([]);
  const { currentColor } = useStateContext();

  useEffect(() => {
    fetchAttendances();
  }, []);

  useEffect(() => {
    fetchTodaysAttendance();
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
  // Fetch attendance data
  const fetchTodaysAttendance = async () => {
      try {
          const response = await axios.get(`${API_URL}/getAttendance`);
          
          // Get today's date in the format YYYY-MM-DD
          const today = new Date().toISOString().split('T')[0];

          // Filter the response data to include only records with today's date
          const todaysAttendance = response.data.filter(item => item.date === today);

          // Reverse the filtered array if needed
          const reversedData = todaysAttendance.reverse();

          setAttendancesToday(reversedData);

        } catch (error) {
          console.error('Error fetching Today\'s Attendance:', error);
          setAttendancesToday([]);
      }
  };
  
  // Function to count users today
  const getTodayUsers = (position) => {
    const users = Users.filter(user => user.type === position);
    const todayUsers = AttendanceToday.filter(item => users.some(thisUser => thisUser.username === item.username));
    return todayUsers.length;
  };

  // Function to count absent users today
  const getTodayAbsentUsers = (position) => {
    const users = Users.filter(user => user.type === position);
    return users.length - getTodayUsers(position);
  };

  return (
    <div>

      <div class="flex flex-wrap items-center  justify-center" style={{minHeight:'82vh'}}>
      
        <div className="flex mb-4 sm:text-lg lg:text-xl xl:text-3xl justify-center" style={{ color: currentColor }}><strong>Today's Summary ({new Date().toISOString().split('T')[0]})</strong></div>
        
        <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container">

          <div class="md:max-w-[2%] sm:w-full"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[25%] sm:w-full bg-gray-200 z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold sm:text-lg lg:text-xl xl:text-3xl text-center">Managers</h1>

            <div class="text-center mt-3">
              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Present</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayUsers('Manager')}</p>
              </div>

              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Absent</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayAbsentUsers('Manager')}</p>
              </div>
            </div>

            <Link to='/ViewMoreDetails'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

          <div class="md:max-w-[2%] sm:w-full"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[25%] sm:w-full bg-gray-200 z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold sm:text-lg lg:text-xl xl:text-3xl text-center">Supervisors</h1>

            <div class="text-center mt-3">
              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Present</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayUsers('Supervisor')}</p>
              </div>

              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Absent</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayAbsentUsers('Supervisor')}</p>
              </div>
            </div>

            <Link to='/ViewMoreDetails'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

          <div class="md:max-w-[2%] sm:w-full"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[25%] sm:w-full bg-gray-200 z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold sm:text-lg lg:text-xl xl:text-3xl text-center">Employees</h1>

            <div class="text-center mt-3">
              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Present</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayUsers('Employee')}</p>
              </div>

              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Absent</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayAbsentUsers('Employee')}</p>
              </div>
            </div>

            <Link to='/ViewMoreDetails'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

          <div class="md:max-w-[2%] sm:w-full"></div>

          <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-[25%] sm:w-full bg-gray-200 z-30">
            <h1 style={{ color: currentColor }} class="mt-4 font-semibold sm:text-lg lg:text-xl xl:text-3xl text-center">Tea Pluckers</h1>

            <div class="text-center mt-3">
              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Present</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayUsers('Tea Plucker')}</p>
              </div>

              <div className="bg-gray-200  m-3 p-2 rounded-2xl ">
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl">Absent</p>
                <p className="text-center font-semibold sm:text-sm lg:text-lg xl:text-2xl mt-3 ">{getTodayAbsentUsers('Tea Plucker')}</p>
              </div>
            </div>

            <Link to='/ViewMoreDetails'>
              <button style={{ color: currentColor }} class="w-full mt-6 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">More Details</button>
            </Link>
            <Link to='/AttendanceHistory'>
              <button style={{ color: currentColor }} class="w-full mt-4 mb-3 py-2 font-semibold sm:text-sm lg:text-lg xl:text-2xl md:bg-gray-100 md:hover:shadow-xl duration-200 hover:bg-gray-100">View History</button>
            </Link>
          </div>

          <div class="md:max-w-[2%] sm:w-full"></div>

        </div>
      </div>
    </div>
  )
}

export default Attendance;