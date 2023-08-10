import React, { useState } from 'react';

const categorizeByMonth = (data) => {
  const categorizedData = {};

  data.forEach((item) => {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });

    if (!categorizedData[year]) {
      categorizedData[year] = {};
    }

    if (!categorizedData[year][month]) {
      categorizedData[year][month] = [];
    }

    categorizedData[year][month].push(item);
  });

  return categorizedData;
};

const ViewAttendance = () => {
  const initialData = [
    { date: '2023-05-03', status: 'Present', in: '08:30 AM', out: '05:00 PM', ot: '2 hours' },
    { date: '2023-05-02', status: 'Present', in: '09:00 AM', out: '06:30 PM', ot: '1 hours' },
    { date: '2023-05-01', status: 'Absent', in: '', out: '', ot: '' },
    { date: '2023-06-02', status: 'Present', in: '09:00 AM', out: '06:30 PM', ot: '1 hours' },
    { date: '2023-07-02', status: 'Present', in: '09:00 AM', out: '06:30 PM', ot: '1 hours' },
    // Add more data entries as needed
  ];

  const [data, setData] = useState(initialData);
  const [searchMonth, setSearchMonth] = useState('');
  const categorizedData = categorizeByMonth(data);

  const handleMonthSearch = (event) => {
    const selectedMonth = event.target.value;
    setSearchMonth(selectedMonth);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-4">
        <label className="mr-2">Search by Month:</label>
        <select value={searchMonth} onChange={handleMonthSearch}>
          <option value="">All</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="Septemer">Septemer</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
          {/* Add more month options */}
        </select>
      </div>

      {Object.keys(categorizedData).map((year) => (
        <div key={year}>
          <h2 className="text-xl font-semibold">{year}</h2>
          {Object.keys(categorizedData[year]).map((month) => (
            <div key={month}>
              {(!searchMonth || searchMonth === month) && (
                <>
                  <h3 className="text-lg font-semibold mt-2 color-green-500">{month}</h3>
                  <table className="min-w-full text-left">
                  <thead>
              <tr className="px-6 py-3 bg-green-50 text-left text-xs leading-4 font-medium text-green-500 uppercase tracking-wider">
                <th className='py-4'>Date</th>
                <th>Status</th>
                <th>In time</th>
                <th>Out Time</th>
                <th>OT Hours</th>
              </tr>
            </thead>
                    <tbody>
                      {categorizedData[year][month].map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-4">{item.date}</td>
                          <td>{item.status}</td>
                          <td>{item.in}</td>
                          <td>{item.out}</td>
                          <td>{item.ot}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewAttendance;  
