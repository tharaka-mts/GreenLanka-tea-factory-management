import React from 'react'

const AttendanceHistory = () => {
  const data = [
    { id: '001', name: 'John Doe', workdays: '24', totalOT: '11', takenLeaves: '01', remainingLeaves: '20' },
    { id: '002', name: 'Jane Smith', workdays: '20', totalOT: '08', takenLeaves:'02', remainingLeaves: '19' },
    // Add more data entries as needed
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <table className=' min-w-full text-left'>
        <thead>
          <tr>
            <th className='py-4'>Emp ID</th>
            <th>Name</th>
            <th>No of Days Work</th>
            <th>Total OT Hours</th>
            <th>Total Taken Leaves</th>
            <th>Remaining Leaves</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=' border-t'>
              <td className='py-4'>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.workdays}</td>
              <td>{item.totalOT}</td>
              <td>{item.takenLeaves}</td>
              <td>{item.remainingLeaves}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default AttendanceHistory