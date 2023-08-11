import React, { useState } from 'react';

const categorizeByYear = (data) => {
  const categorizedData = {};

  data.forEach((item) => {
    const date = new Date(item.date);
    const year = date.getFullYear();

    if (!categorizedData[year]) {
      categorizedData[year] = [];
    }

    categorizedData[year].push(item);
  });

  return categorizedData;
};

const ViewSalaryHistory = () => {
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  const initialData = [
    { date: '2023-05-03', otAmount: 200, basicAmount: 3000, totalAmount: 3200, status: 'Received' },
    { date: '2023-05-02', otAmount: 150, basicAmount: 3500, totalAmount: 3650, status: 'Received' },
    { date: '2022-12-15', otAmount: 100, basicAmount: 2800, totalAmount: 2900, status: 'Received' },
    // Add more data entries as needed
  ];

  const [data, setData] = useState(initialData);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const categorizedData = categorizeByYear(data);

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-4">
        <label className="mr-2">Select Year:</label>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value={currentYear}>{currentYear}</option>
          <option value={previousYear}>{previousYear}</option>
           
        </select>
      </div>

      <table className="min-w-full text-left">
        <thead>
          <tr className="px-6 py-3 bg-green-50 text-left text-xs leading-4 font-medium text-green-500 uppercase tracking-wider">
            <th className="py-4">Month</th>
            <th>OT Amount</th>
            <th>Basic Amount</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {categorizedData[selectedYear]?.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-4">{new Date(item.date).toLocaleString('default', { month: 'long' })}</td>
              <td>{item.otAmount}</td>
              <td>{item.basicAmount}</td>
              <td>{item.totalAmount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSalaryHistory;