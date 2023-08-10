import React from 'react'

const ViewAttendance = () => {

  const data = [
    { id: '001', name: 'John Doe', in: '08:30 AM', out: '05:30 PM', ot: '01' },
    { id: '002', name: 'Jane Smith', in: '08:00 AM', out: '06:00 PM', ot:'02' },
    // Add more data entries as needed
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <table className=' min-w-full text-left'>
        <thead>
          <tr>
            <th className='py-4'>Emp ID</th>
            <th>Name</th>
            <th>In</th>
            <th>Out</th>
            <th>OT Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=' border-t'>
              <td className='py-4'>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.in}</td>
              <td>{item.out}</td>
              <td>{item.ot}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ViewAttendance