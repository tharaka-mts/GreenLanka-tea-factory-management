import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const OutsideReport = () => {
  const { currentColor } = useStateContext();

  const dataWeight = [
    { name: 'Kumara Estate', weight: '120 KG' },
    { name: 'Sumudu Estate', weight: '155 KG' },
    { name: 'Gamage Tea', weight: '186 KG' },
    { name: 'Konara Tea', weight: '114 KG' },
    { name: 'Total', weight: '20 KG' },
    // Add more data entries as needed
  ];

  const dataPaymentsTP = [
    { name: 'Kumara Estate', payment: 'LKR 1,400' },
    { name: 'Sumudu Estate', payment: 'LKR 1,650' },
    { name: 'Gamage Tea', payment: 'LKR 1,800' },
    { name: 'Konara Tea', payment: 'LKR 1,400' },
    { name: 'Total', payment: 'LKR 447,141' },
    // Add more data entries as needed
  ];


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p style={{ color: currentColor }} class="text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl  font-black">Outside Tea Estates</p>
      <p style={{ color: currentColor }} class="text-center mt-3 xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md font-black">Reporting Month: 2023 November</p>

      <p class="text-gray-900 mt-12 text-xl font-black">Weight of Tea Leaves</p>
      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataWeight.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-3 ">{item.name}</td>
                <td class="text-right">{item.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="mt-12 h-px bg-gray-500"></div>

      <p class="text-gray-900 mt-24 text-xl font-black">Payments for Tea Estates</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataPaymentsTP.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-3 ">{item.name}</td>
                <td class="text-right">{item.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default OutsideReport;