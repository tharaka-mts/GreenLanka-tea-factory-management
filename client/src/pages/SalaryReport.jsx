import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import MSalary from './Salary/MSalary';
import SSalary from './Salary/SSalary';
import ESalary from './Salary/ESalary';
import TSalary from './Salary/TSalary';

import { useStateContext } from '../contexts/ContextProvider';
 

const SalaryReport = () => {

    const [activeTab, setActiveTab] = useState('Manager');
    const { currentColor, currentMode } = useStateContext();

    const TabContent = () => {
        switch (activeTab) {
          case 'Manager':
            return <MSalary />;
          case 'Supervisor':
            return <SSalary />;
          case 'Employee':
            return <ESalary/>;
          case 'TeaPlucker':
            return <TSalary/>;
          default:
            return null;
        }
      };
  return (
    <div className="p-4">
    <div className="bg-white shadow-md rounded-lg p-4">

    <div className="mb-4">
          <Link to="/addsalarydetails">
            <button className="text-white py-2 px-4 rounded hover:bg-green-800" style={{ backgroundColor: currentColor }}>
             Add Salary Details
            </button>
          </Link>
        </div>

      
      <div className="border-b border-gray-300 pb-4 color-green-900 text-white text-center items-center justify-center"
       style={{ backgroundColor: currentColor }}>
        <ul className="flex space-x-4 text-center items-center justify-center">
          <li
            className={`cursor-pointer ${
              activeTab === 'Manager' && 'font-semibold border-b-2 border-green-500'
            }`}
            onClick={() => setActiveTab('Manager')}
          >
           Manager
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === 'Supervisor' && 'font-semibold border-b-2 border-green-500'
            }`}
            onClick={() => setActiveTab('Supervisor')}
          >
            Supervisor
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === 'Employee' && 'font-semibold border-b-2 border-green-500'
            }`}
            onClick={() => setActiveTab('Employee')}
          >
            Employee
          </li>

          <li
            className={`cursor-pointer ${
              activeTab === 'TeaPlucker' && 'font-semibold border-b-2 border-green-500'
            }`}
            onClick={() => setActiveTab('TeaPlucker')}
          >
            Tea Plucker
          </li>

        </ul>
      </div>
      <TabContent />
    </div>
  </div>
  )
}

export default SalaryReport