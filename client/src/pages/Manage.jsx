import React from 'react'

const Manage = () => {

  const data = [
    { name: 'John Doe', designation: 'Software Engineer', status: 'Active', address: 'Galle raod, Matara', mobile: '0717789345' },
    { name: 'Jane Smith', designation: 'Web Developer', status: 'Inactive', address: 'Urubokka, Deniyaya', mobile: '0768897563' },
    // Add more data entries as needed
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <table className=' min-w-full text-left'>
        <thead>
          <tr>
            <th className='py-4'>Name</th>
            <th>Designation</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className=' border-t'>
              <td className='py-4'>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.address}</td>
              <td>{item.mobile}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Manage