import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const GreenLankaReport = () => {
  const { currentColor } = useStateContext();

  const dataWeight = [
    { name: 'Karunapala De Silva', weight: '20 KG' },
    { name: 'Saman Herath', weight: '22 KG' },
    { name: 'Siriyalatha Perera', weight: '23 KG' },
    { name: 'Shirani Mallika', weight: '20 KG' },
    { name: 'Karunapala De Silva', weight: '20 KG' },
    { name: 'Saman Herath', weight: '22 KG' },
    { name: 'Siriyalatha Perera', weight: '23 KG' },
    { name: 'Shirani Mallika', weight: '20 KG' },
    { name: 'Total', weight: '255 KG' },
    // Add more data entries as needed
  ];

  const dataPaymentsTP = [
    { name: 'Karunapala De Silva', payment: 'LKR 1,200' },
    { name: 'Saman Herath', payment: 'LKR 1,320' },
    { name: 'Siriyalatha Perera', payment: 'LKR 1,380' },
    { name: 'Shirani Mallika', payment: 'LKR 1,200' },
    { name: 'Karunapala De Silva', payment: 'LKR 1,200' },
    { name: 'Saman Herath', payment: 'LKR 1,320' },
    { name: 'Siriyalatha Perera', payment: 'LKR 1,380' },
    { name: 'Shirani Mallika', payment: 'LKR 1,200' },
    { name: 'Total', payment: 'LKR 15,300' },
    // Add more data entries as needed
  ];            


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p style={{ color: currentColor }} class="text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-black">Green Lanka Tea Factory</p>
      <p style={{ color: currentColor }} class="text-center mt-3 xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md font-black">Reporting Month: 2023 October</p>

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

      <p class="text-gray-900 mt-24 text-xl font-black">Payments for Tea Pluckers</p>

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

export default GreenLankaReport;