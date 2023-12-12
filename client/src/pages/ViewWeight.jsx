import React, { useState , useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { format } from 'date-fns';
import axios from 'axios';


const ViewWeight = () => {

  const[users,setUsers] = useState('');


const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3005/emp/prod/get');

    if (response.status === 200) {
      // console.log('Fetched users successfully:', response.data);
      setUsers(response.data);
    }
  } catch (error) {
    console.error('Fetch users error:', error);
  }
};

useEffect(() => {
  fetchUsers();
}, [users]);


  const { currentColor, currentMode, setTotalWeight } = useStateContext();
  
  const [pluckerData] = useState([
    { id: 1, name: "Plucker 1", teaLeavesWeight: 5.7 },
    { id: 2, name: "Plucker 2", teaLeavesWeight: 4.2 },
    // Add more plucker data here
  ]);

  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => format(date, "yyyy-MM-dd");

  const handlePreviousDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(selectedDate.getDate() - 1);
    setSelectedDate(prevDay);
  };

  const totalTeaWeight = () => {
    let total = 0;
    (users) && users.forEach((plucker) => {
      total += plucker.weight;
      setTotalWeight(total);
    });
    return total;
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className=" text-2xl font-semibold mb-3 text-center" 
       style={{ color: currentColor }} >Today Tea Weight</h1>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handlePreviousDay}
            className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            &larr; Previous Day
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            {formatDate(selectedDate)}
          </h2>
        </div>
        <div className="mt-4 pl-6 text-center"> {/* Added left padding */}
          <p className="text-xl font-semibold text-gray-800">Total Tea Leaves Weight Today:</p>
          <p className="text-3xl text-currentColor">{totalTeaWeight()} kg</p>
        </div>
        <table className="w-full">
          <thead>
            <tr>
            
              <th className="text-left py-2 text-gray-700">First Name</th>
              <th className="text-left py-2 text-gray-700">Last Name</th>
              <th className="text-left py-2 text-gray-700">Tea Leaves Weight</th>
            </tr>
          </thead>
          <tbody>
            {(users) && users.map((plucker) => (
              <tr key={plucker._id}>
                <td className="py-2 text-gray-800">{plucker.firstname}</td>
                <td className="py-2 text-gray-800">{plucker.lastname}</td>
                <td className="py-2 text-gray-800">{plucker.weight} kg</td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
    </div>
  );
};

export default ViewWeight;
