import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

const FullReport = () => {
  const { currentColor } = useStateContext();

  const [expenses, setExpenses] = useState([]);
  const [teaRates, setTeaRates] = useState([]);
  const [finalProduction, setFinalProduction] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [totalProduction, settotalProduction] = useState('');

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const years = ['2022', '2023', '2024', '2025'];
  
  useEffect(() => {
    fetchTeaRate();
  }, []);

  useEffect(() => {
    fetchFinalProduction();
    fetchExpenses();
  }, [selectedYear, selectedMonth]);

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

  const fetchTeaRate = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/getLatestAcceptedTeaRate');
      if (Array.isArray(response.data)) {
        setTeaRates(response.data);
      } else {
        console.error('TeaRate data is not an array:', response.data);
        setTeaRates([]);
      }
    } catch (error) {
      console.error('Error fetching TeaRate:', error);
      setTeaRates([]);
    }
  };

  const fetchFinalProduction = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/getFinalProduction');
      if (Array.isArray(response.data)) {
        setFinalProduction(response.data);
      } else {
        console.error('Final Production data is not an array:', response.data);
        setFinalProduction([]);
      }
    } catch (error) {
      console.error('Error fetching Final Production:', error);
      setFinalProduction([]);
    }
  };

  const getMonthNameFromDate = (dateString) => {
    const date = new Date(dateString);
    console.log(monthNames[date.getMonth()]);
    return monthNames[date.getMonth()];
  };
  
  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  const filteredFinalProduction = (finalProduction || []).filter((production) => {
    const monthName = getMonthNameFromDate(production.createdAt);
    const year = getYearFromDate(production.createdAt);
    return (monthName === selectedMonth) && (year === selectedYear);
  });

  const numericValue = (currencyString) => {
    return parseFloat(currencyString.replace(/[^\d.]/g, ''))
  }

  const calculateTotalFinalProduction = () => {
    let total =0;
    const grades = ['Grade A', 'Grade B', 'Grade C', 'Grade D'];
    grades.forEach(element => {
      total+=numericValue(calculateFinalProductionByGrade(element))
    });
    return formatAsCurrency(total);
  }
  
  const calculateFinalProductionByGrade = (grade) => {
    let totalProduction = 0;
    filteredFinalProduction.forEach((item) => {
      if (item.grade === grade) {
        totalProduction += item.finalWeight || 0;
      }
    });
  
    let rate = 0;
  
    switch (grade) {
      case "Grade A":
        rate = teaRates[0].rateForGradeAProduction;
        break;
      case "Grade B":
        rate = teaRates[0].rateForGradeBProduction;
        break;
      case "Grade C":
        rate = teaRates[0].rateForGradeCProduction;
        break;
      case "Grade D":
        rate = teaRates[0].rateForGradeDProduction;
        break;
      default:
        break;
    }
    
    return formatAsCurrency(rate * totalProduction);
  };

  const formatAsCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'LKR',
    });
  };
  
  // Fetch expenses data
  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/getExpenses');

      if (Array.isArray(response.data)) {
        setExpenses(response.data);
      } else {
        console.error('Expenses data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error retrieving expenses:', error);
    }
  };

  const dataSalary = [
    { Title: 'Director', amount: 'LKR 100,000' },
    { Title: 'Managers', amount: 'LKR 215,000' },
    { Title: 'Supervisors', amount: 'LKR 254,745' },
    { Title: 'Employees', amount: 'LKR 420,284' },
    { Title: 'Total', amount: 'LKR 447,141' },
    // Add more data entries as needed
  ];

  const dataPayment = [
    { Title: 'Kumara Estate', amount: 'LKR 100,000.00' },
    { Title: 'Sumudu Estate', amount: 'LKR 215,000.00' },
    { Title: 'Gamage Tea', amount: 'LKR 254,745.00' },
    { Title: 'Konara Tea', amount: 'LKR 420,284.00' },
    { Title: 'Total', amount: 'LKR 447,141.00' },
    // Add more data entries as needed
  ];

  const dataTotal = [
    { Title: 'Total Income', amount: 'LKR 2,987,234.00' },
    { Title: 'Total Expences', amount: 'LKR 1,692,175.00' },
    { Title: 'Net Profit', amount: 'LKR 1,295,059.00' },
    // Add more data entries as needed
  ];

  //filter expenses
  const filteredExpenses =
    selectedMonth && selectedYear
      ? expenses.filter((expense) => expense.month === selectedMonth && expense.year === selectedYear)
      : [];

  const handleClear = () => {
    setSelectedMonth('');
    setSelectedYear('');
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p style={{ color: currentColor }} class="text-center mt-3 text-5xl font-black mb-8">
        Monthly Total Income and Expenses Report
      </p>
      <div className="mb-4">
      <select
        className="border rounded py-2 px-3 ml-2"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="">Select Month</option>
        {monthNames.map((month, i) => (
          <option key={i} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="border rounded py-2 px-3 ml-2"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Select Year</option>
        {years.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>
      
      <button
        className="ml-4 px-4 py-2 text-white rounded-md"
        onClick={handleClear}
        style={{ backgroundColor: "#dc3545" }}
      >
        Clear
      </button>
    </div>

      <p class="text-gray-900 mt-12 text-xl font-black">Income</p>
      <p class="text-gray-900 m-4 mt-1 text-min font-black">Total Quantity Produced</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            <tr className=' border-t'>
              <td class="py-3 ">Grade A</td>
              <td class="text-right">{teaRates.length > 0 ? calculateFinalProductionByGrade('Grade A') : 'Loading...'}</td>
            </tr>
            <tr className=' border-t'>
              <td class="py-3 ">Grade B</td>
              <td class="text-right">{teaRates.length > 0 ? calculateFinalProductionByGrade('Grade B') : 'Loading...'}</td>
            </tr>
            <tr className=' border-t'>
              <td class="py-3 ">Grade C</td>
              <td class="text-right">{teaRates.length > 0 ? calculateFinalProductionByGrade('Grade C') : 'Loading...'}</td>
            </tr>
            <tr className=' border-t'>
              <td class="py-3 ">Grade D</td>
              <td class="text-right">{teaRates.length > 0 ? calculateFinalProductionByGrade('Grade D') : 'Loading...'}</td>
            </tr>
            <tr className=' border-t'>
            <td class="py-2 text-lg font-black">Total</td>
                <td class="text-right  text-lg font-black">{teaRates.length > 0 ? calculateTotalFinalProduction() : 'Loading...'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 mt-10 text-xl font-black">Expences</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2">Withering Machine</td>
                <td class="text-right">{formatAsCurrency(expense.wMachine)}</td>
              </tr>
            ))}
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2">Rolling Machine</td>
                <td class="text-right">{formatAsCurrency(expense.rMachine)}</td>
              </tr>
            ))}
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2">Drying Machine</td>
                <td class="text-right">{formatAsCurrency(expense.dMachine)}</td>
              </tr>
            ))}
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2">Electricity</td>
                <td class="text-right">{formatAsCurrency(expense.electricity)}</td>
              </tr>
            ))}
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2">Fuel</td>
                <td class="text-right">{formatAsCurrency(expense.fuel)}</td>
              </tr>
            ))}
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2">Transport Utilization</td>
                <td class="text-right">{formatAsCurrency(expense.transport)}</td>
              </tr>
            ))}
            {filteredExpenses.map((expense, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-2 text-lg font-black">Total</td>
                <td class="text-right  text-lg font-black">{formatAsCurrency(calculateTotalMachineExpenses())}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">Salary</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataSalary.map((item, i) => (
              <tr key={i} className=' border-t'>
                <td class="py-3 ">{item.Title}</td>
                <td class="text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p class="text-gray-900 m-4 mt-6 text-min font-black">Payment for tea leaves</p>

      <div class="flex flex-col overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-w-full py-2 inline-block sm:px-6 lg:px-8 overflow-hidden">
        <table class="min-w-full">
          <tbody>
            {dataPayment.map((item, i) => (
              <tr key={i} className=' border-t'>
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
            {dataTotal.map((item, i) => (
              <tr key={i} className=' border-t'>
                <td style={{ fontWeight: 'bold' }} class="py-3">{item.Title}</td>
                <td style={{ fontWeight: 'bold' }} class="text-right ">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default FullReport;