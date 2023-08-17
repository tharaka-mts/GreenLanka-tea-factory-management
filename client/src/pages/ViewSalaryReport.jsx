import React from 'react';

const ViewSalaryReport = () => {
  const salaryDetails = {
    otHours: 20,
    otAmountPerHour: 15,
    basicAmount: 3000,
    profitPercentage: 10,
  };

  const calculateSalary = () => {
    const otSalary = salaryDetails.otHours * salaryDetails.otAmountPerHour;
    const basicSalary = salaryDetails.basicAmount;
    const profit = (basicSalary + otSalary) * (salaryDetails.profitPercentage / 100);
    const totalSalary = basicSalary + otSalary + profit;

    return {
      otSalary,
      basicSalary,
      profit,
      totalSalary,
    };
  };

  const calculatedSalary = calculateSalary();

  return (
    <div className="m-2 md:m-10 mt-24 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-green-500">Monthly Salary Report</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Salary Details</h3>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex items-center mb-2">
            <i className="fas fa-hourglass-start text-green-500 mr-2"></i>
            <span className="font-semibold">OT Hours:</span> {salaryDetails.otHours}
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-dollar-sign text-green-500 mr-2"></i>
            <span className="font-semibold">OT Amount Per Hour:</span> ${salaryDetails.otAmountPerHour}
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-wallet text-green-500 mr-2"></i>
            <span className="font-semibold">Basic Amount:</span> ${salaryDetails.basicAmount}
          </div>
          <div className="flex items-center">
            <i className="fas fa-percent text-green-500 mr-2"></i>
            <span className="font-semibold">Profit Percentage:</span> {salaryDetails.profitPercentage}%
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-6">
        <h3 className="text-lg font-semibold mb-4">Your Salary</h3>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex items-center mb-2">
            <i className="fas fa-money-bill text-green-600 mr-2"></i>
            <span className="font-semibold">OT Salary:</span> ${calculatedSalary.otSalary}
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-money-bill-alt text-green-600 mr-2"></i>
            <span className="font-semibold">Basic Salary:</span> ${calculatedSalary.basicSalary}
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-hand-holding-usd text-green-600 mr-2"></i>
            <span className="font-semibold">Profit:</span> ${calculatedSalary.profit}
          </div>
          <div className="flex items-center">
            <i className="fas fa-coins text-green-600 mr-2"></i>
            <span className="font-semibold">Total Salary:</span> ${calculatedSalary.totalSalary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSalaryReport;