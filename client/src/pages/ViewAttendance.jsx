import React from 'react'

const ViewAttendance = () => {

  const data = [
    { name: 'John Doe', designation: 'Software Engineer', status: 'Active', in: '08:30 AM', out: '05:00 PM' },
    { name: 'Jane Smith', designation: 'Web Developer', status: 'Inactive', in: '09:00 AM', out: '06:30 PM' },
    // Add more data entries as needed
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <table className=' min-w-full text-left'>
        <thead>
          <tr>
            <th className='py-4'>Name</th>
            <th>Designation</th>
            <th>Status</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=' border-t'>
              <td className='py-4'>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.status}</td>
              <td>{item.in}</td>
              <td>{item.out}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ViewAttendance