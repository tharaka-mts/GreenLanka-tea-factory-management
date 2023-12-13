import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const GreenLankaReport = () => {
  const { currentColor } = useStateContext();

  const dataIncome = [
    { Title: 'Grade A', value: '1,940 kg', amount: 'LKR 950,247' },
    { Title: 'Grade B', value: '1,840 kg', amount: 'LKR 803,755' },
    { Title: 'Grade C', value: '1,718 kg', amount: 'LKR 687,005' },
    { Title: 'Grade D', value: '1,560 kg', amount: 'LKR 546,227' },
    { Title: 'Total', value: '7,058 kg', amount: 'LKR 2,987,234' },
    // Add more data entries as needed
  ];

  const dataEquipment = [
    { Title: 'Withering Machine', value: '250 h', amount: 'LKR 50,000' },
    { Title: 'Rolling Machine', value: '220 h', amount: 'LKR 44,000' },
    { Title: 'Drying Equipments', value: '200 h', amount: 'LKR 40,000' },
    { Title: 'Total', value: '670 h', amount: 'LKR 134,000' },
    // Add more data entries as needed
  ];

  const dataEnergy = [
    { Title: 'Electricity', value: '10,000 kWh', amount: 'LKR 209, 500' },
    { Title: 'Fuel', value: '325 L', amount: 'LKR 113, 750' },
    { Title: 'Total', value: '', amount: 'LKR 323, 250' },
    // Add more data entries as needed
  ];

  const dataTransportation = [
    { Title: 'Utilization', value: '10,500 km', amount: 'LKR 52,500' },
    { Title: 'Total', value: '', amount: 'LKR 52,500' },
    // Add more data entries as needed
  ];

  const dataSalary = [
    { Title: 'Director', amount: 'LKR 100,000' },
    { Title: 'Managers', amount: 'LKR 215,000' },
    { Title: 'Supervisors', amount: 'LKR 254,745' },
    { Title: 'Employees', amount: 'LKR 420,284' },
    { Title: 'Total', amount: 'LKR 447,141' },
    // Add more data entries as needed
  ];            

  const dataTotal = [
    { Title: 'Total Income', amount: 'LKR 2, 987, 234' },
    { Title: 'Total Expences', amount: 'LKR 1, 692, 175' },
    { Title: 'Net Profit', amount: 'LKR 1, 295,059' },
    // Add more data entries as needed
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p style={{ color: currentColor }} class="text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-black">Green Lanka Tea Factory</p>
      <p style={{ color: currentColor }} class="text-center mt-3 xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md font-black">Reporting Month: 2023 October</p>

      <p class="text-gray-900 mt-12 text-xl font-black">Income</p>
      <p class="text-gray-900 m-4 mt-1 text-min font-black">Total Quantity Produced</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataIncome.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-2">{item.Title}</td>
                <td class="text-right">{item.value}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      <p class="text-gray-900 mt-10 text-xl font-black">Expences</p>
      <p class="text-gray-900 m-4 mt-1 text-min font-black">Equipment & Machinery Utilization</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataEquipment.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-2">{item.Title}</td>
                <td class="text-right">{item.value}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">Energy Consumption</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataEnergy.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-2 ">{item.Title}</td>
                <td class="text-right">{item.value}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">Transportation</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataTransportation.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-2">{item.Title}</td>
                <td class="text-right">{item.value}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">Salary</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataSalary.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td class="py-3 ">{item.Title}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div class=" py-16">
        <table class="min-w-full">
          <tbody>
            {dataTotal.map((item, index) => (
              <tr key={index} className=' border-t'>
                <td style={{ fontWeight: 'bold' }} class="py-3">{item.Title}</td>
                <td style={{ fontWeight: 'bold' }} class="text-right ">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default GreenLankaReport;