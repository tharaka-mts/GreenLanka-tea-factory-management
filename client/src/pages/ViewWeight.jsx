import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const ViewWeight = () => {

  const { currentColor, currentMode } = useStateContext();
  const [pluckerData] = useState([
    { id: 1, name: 'Plucker 1', teaLeavesWeight: 5.7 },
    { id: 2, name: 'Plucker 2', teaLeavesWeight: 4.2 },
    // Add more plucker data here
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => date.toLocaleDateString();

  const handlePreviousDay = () => {
    const prevDay = new Date(selectedDate);
    prevDay.setDate(selectedDate.getDate() - 1);
    setSelectedDate(prevDay);
  };

  const totalTeaWeight = pluckerData.reduce((total, plucker) => total + plucker.teaLeavesWeight, 0);

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
          <p className="text-3xl text-currentColor">{totalTeaWeight.toFixed(2)} kg</p>
        </div>
        <table className="w-full">
          <thead>
            <tr>
            
              <th className="text-left py-2 text-gray-700">Name</th>
              <th className="text-left py-2 text-gray-700">Tea Leaves Weight</th>
            </tr>
          </thead>
          <tbody>
            {pluckerData.map((plucker) => (
              <tr key={plucker.id}>
                <td className="py-2 text-gray-800">{plucker.id}</td>
                <td className="py-2 text-gray-800">{plucker.name}</td>
                <td className="py-2 text-gray-800">{plucker.teaLeavesWeight} kg</td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
    </div>
  );
};

export default ViewWeight;