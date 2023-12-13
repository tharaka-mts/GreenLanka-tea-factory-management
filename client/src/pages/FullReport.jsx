import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";

const FullReport = () => {
  const { currentColor } = useStateContext();

  const [expenses, setExpenses] = useState([]);
  const [finalProduction, setFinalProduction] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [totalByGrade, setTotalByGrade] = useState([]);

  // Function to fetch total production by grade based on the selected year and month
  const fetchTotalByGrade = async () => {
    if (selectedYear && selectedMonth) {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/finalProduction/totalByGrade`,
          {
            params: { year: selectedYear, month: selectedMonth },
          }
        );
        setTotalByGrade(response.data.totalByGrade);
      } catch (error) {
        console.error("Error fetching total by grade:", error);
      }
    }
  };

  // Function to calculate the total value for all expense types
  const calculateTotalMachineExpenses = () => {
    let totalAllExpenses = 0;
    filteredExpenses.forEach((expense) => {
      totalAllExpenses +=
        (expense.wMachine || 0) +
        (expense.rMachine || 0) +
        (expense.dMachine || 0) +
        (expense.electricity || 0) +
        (expense.fuel || 0) +
        (expense.transport || 0);
    });
    return totalAllExpenses;
  };

  useEffect(() => {
    fetchTotalByGrade();

    // Make a GET request to retrieve expenses data
    axios
      .get("http://localhost:3005/api/getExpenses")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setExpenses(response.data);
        } else {
          console.error("Expenses data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error retrieving expenses:", error);
      });
  }, [selectedYear, selectedMonth]);

  const dataIncome = [
    { Title: "Grade A", value: "1,940 kg", amount: "LKR 950,247" },
    { Title: "Grade B", value: "1,840 kg", amount: "LKR 803,755" },
    { Title: "Grade C", value: "1,718 kg", amount: "LKR 687,005" },
    { Title: "Grade D", value: "1,560 kg", amount: "LKR 546,227" },
    { Title: "Total", value: "7,058 kg", amount: "LKR 2,987,234" },
    // Add more data entries as needed
  ];

  const dataEquipment = [
    { Title: "Withering Machine", value: "250 h", amount: "LKR 50,000" },
    { Title: "Rolling Machine", value: "220 h", amount: "LKR 44,000" },
    { Title: "Drying Equipments", value: "200 h", amount: "LKR 40,000" },
    { Title: "Total", value: "670 h", amount: "LKR 134,000" },
    // Add more data entries as needed
  ];

  const dataEnergy = [
    { Title: "Electricity", value: "10,000 kWh", amount: "LKR 209, 500" },
    { Title: "Fuel", value: "325 L", amount: "LKR 113, 750" },
    { Title: "Total", value: "", amount: "LKR 323, 250" },
    // Add more data entries as needed
  ];

  const dataTransportation = [
    { Title: "Utilization", value: "10,500 km", amount: "LKR 52,500" },
    { Title: "Total", value: "", amount: "LKR 52,500" },
    // Add more data entries as needed
  ];

  const dataSalary = [
    { Title: "Director", amount: "LKR 100,000" },
    { Title: "Managers", amount: "LKR 215,000" },
    { Title: "Supervisors", amount: "LKR 254,745" },
    { Title: "Employees", amount: "LKR 420,284" },
    { Title: "Total", amount: "LKR 447,141" },
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

  //filter expenses
  const filteredExpenses =
    selectedMonth && selectedYear
      ? expenses.filter(
          (expense) =>
            expense.month === selectedMonth && expense.year === selectedYear
        )
      : [];

  //filter final production
  const filteredFinalProduction =
    selectedMonth && selectedYear
      ? finalProduction.filter((item) => {
          const createdAtDate = new Date(item.createdAt);
          const year = createdAtDate.getFullYear();
          const month = createdAtDate.getMonth() + 1; // Months are zero-indexed, so we add 1

          return (
            year === parseInt(selectedYear) && month === parseInt(selectedMonth)
          );
        })
      : [];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = ["2022", "2023", "2024", "2025"];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p
        style={{ color: currentColor }}
        class="text-center mt-3 text-5xl font-black mb-8"
      >
        Monthly Total Income and Expenses Report
      </p>
      <div className="mb-4">
        <select
          className="border rounded py-2 px-12 md:m-2 w-[18%] "
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {/* <div className="md-3"></div> */}
        <select
          className="border rounded py-2 px-12 md:m-4 w-[18%] "
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="no">All Months</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Display total production by grade */}
      <div>
        {totalByGrade.map((item, index) => (
          <div key={index}>
            <p>Grade: {item._id}</p>
            <p>Total Production: {item.total}</p>
          </div>
        ))}
      </div>

      <p class="text-gray-900 mt-12 text-xl font-black">Income</p>
      <p class="text-gray-900 m-4 mt-1 text-min font-black">
        Total Quantity Produced
      </p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {/* =============================== */}

            {/* {totalByGrade.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{item._id}</td>
                <td className="text-right">{item.total}</td>
              </tr>
            ))} */}

            {/* ================================== */}

            {dataSalary.map((item, index) => (
              <tr key={index} className=" border-t">
                <td class="py-3 ">{item.Title}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 mt-10 text-xl font-black">Expences</p>
      <p class="text-gray-900 m-4 mt-1 text-min font-black">
        Equipment & Machinery Utilization
      </p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataEquipment.map((item, index) => (
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
            {dataEnergy.map((item, index) => (
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

      <p class="text-gray-900 m-4 mt-6 text-min font-black">Salary</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataSalary.map((item, index) => (
              <tr key={index} className=" border-t">
                <td class="py-3 ">{item.Title}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">
        Payment for tea leaves
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
    </div>
  );
};

export default FullReport;
