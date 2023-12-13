import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const OutsideReport = () => {
  const { currentColor } = useStateContext();

  const dataWeight = [
    { name: "Kumara Estate", weight: "120 KG" },
    { name: "Sumudu Estate", weight: "155 KG" },
    { name: "Gamage Tea", weight: "186 KG" },
    { name: "Konara Tea", weight: "114 KG" },
    { name: "Total", weight: "20 KG" },
    // Add more data entries as needed
  ];

  const dataTransportation = [
    { Title: "Utilization", value: "10,500 km", amount: "LKR 52,500" },
    { Title: "Total", value: "", amount: "LKR 52,500" },
    // Add more data entries as needed
  ];

  const dataPayment = [
    { Title: "Kumara Estate", amount: "LKR 100,000" },
    { Title: "Sumudu Estate", amount: "LKR 215,000" },
    { Title: "Gamage Tea", amount: "LKR 254,745" },
    { Title: "Konara Tea", amount: "LKR 420,284" },
    { Title: "Total", amount: "LKR 447,141" },
    // Add more data entries as needed
  ];

  const dataTotal = [
    { Title: "Total Income", amount: "LKR 2, 987, 234" },
    { Title: "Total Expences", amount: "LKR 1, 692, 175" },
    { Title: "Net Profit", amount: "LKR 1, 295,059" },
    // Add more data entries as needed
  ];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p
        style={{ color: currentColor }}
        class="text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl  font-black"
      >
        Outside Tea Estates
      </p>
      <p
        style={{ color: currentColor }}
        class="text-center mt-3 xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md font-black"
      >
        Reporting Period: 01 July 2023 - 31 July 2023
      </p>

      <p class="text-gray-900 mt-10 text-xl font-black">Expences</p>
      <p class="text-gray-900 m-4 mt-1 text-min font-black">
        Equipment & Machinery Utilization
      </p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataTransportation.map((item, index) => (
              <tr key={index} className=" border-t">
                <td class="py-2">{item.Title}</td>
                <td class="text-right">{item.value}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">
        Energy Consumption
      </p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataTransportation.map((item, index) => (
              <tr key={index} className=" border-t">
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
              <tr key={index} className=" border-t">
                <td class="py-2">{item.Title}</td>
                <td class="text-right">{item.value}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 mt-24 text-xl font-black">
        Payments for Tea Estates
      </p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataPayment.map((item, index) => (
              <tr key={index} className=" border-t">
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
              <tr key={index} className=" border-t">
                <td style={{ fontWeight: "bold" }} class="py-3">
                  {item.Title}
                </td>
                <td style={{ fontWeight: "bold" }} class="text-right ">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class=" py-16">
        <table class="min-w-full">
          <tbody>
            {dataTotal.map((item, index) => (
              <tr key={index} className=" border-t">
                <td style={{ fontWeight: "bold" }} class="py-3">
                  {item.Title}
                </td>
                <td style={{ fontWeight: "bold" }} class="text-right ">
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutsideReport;
