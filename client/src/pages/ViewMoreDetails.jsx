import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

const API_URL = 'http://localhost:3005/api';

const ViewMoreDetails = () => {
    
    const [Attendances, setAttendances] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const { currentColor } = useStateContext();

    useEffect(() => {
        fetchAttendances();
    }, []);

    const fetchAttendances = async () => {
        try {
          const response = await axios.get(`${API_URL}/getAttendance`);
          setAttendances(response.data);
        } catch (error) {
          console.error('Error fetching Attendances:', error);
          setAttendances([]);
        }
    };

    const handleSearch = async () => {
        try {
        const response = await axios.get(`${API_URL}/getAttendance/search`, {
            params: { searchTerm, selectedPosition },
        });
        setAttendances(response.data);
        } catch (error) {
        console.error('Error searching Attendances:', error);
        setAttendances([]);
        }
    };

    const calOTHours = (outTime, date) => {
      const diff = Date.parse(outTime) - Date.parse(date + " 16:30:00");
      const result = new Date(diff).toISOString().slice(11, 19);
      return result;
    };

    // const Attendances = [
    //     { date: '2023-05-03 17:00:10', username: 'Ovindu', in: '08:30 AM', out: '05:00 PM', ot: '2 hours' },
    //     { date: '2023-05-02 18:30:29', username: 'Yasmi', in: '09:00 AM', out: '06:30 PM', ot: '1 hours' },
    //     { date: '2023-05-01 17:30:10', username: 'Yureni', in: '09:00 AM', out: '05:30 PM', ot: '--' },
    //     { date: '2023-06-02 18:30:50', username: 'Tharaka', in: '09:00 AM', out: '06:30 PM', ot: '1 hours' },
    //     { date: '2023-07-02 18:30:10', username: 'Hasanka', in: '09:00 AM', out: '06:30 PM', ot: '1 hours' },
    //     // Add more data entries as needed
    // ];

    // const filteredAttendances = Attendances.filter((Attendance) =>
    //     Attendance.name.includes(searchTerm) &&
    //     (selectedPosition === '' || Attendance.position === selectedPosition)
    // );

    const positions = ['Manager', 'Supervisor', 'Employee', 'Tea Plucker'];

    return (
        <div className="bg-gray-100 min-h-screen">
          <div className="container mx-auto p-4">
            <div className="flex mb-4 text-lg justify-center">Daily Report</div>
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
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Username
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
                {Attendances.map((Attendances) => (
                    <tr>
                    {/* Render Attendance data */}
                    <td className='py-3'>{Attendances.date}</td>
                    <td>{Attendances.username}</td>
                    <td>{Attendances.inTime}</td>
                    <td>{Attendances.outTime}</td>
                    <td>{calOTHours(Attendances.outTime, Attendances.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default ViewMoreDetails