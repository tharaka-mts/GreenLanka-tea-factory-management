import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateSalaryDetails = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [salaryDetails, setSalaryDetails] = useState({
    role: '',
    basic: null,
    emDailyRate: null,
    teaLeavesSalary: null,
    bonusPercentage: null,
    overtimeSalary: null,
  });
  // const [role, setRoles] = useState([]);

  // useEffect(() => {
  //   fetchRoles();
  // }, []);

  // const fetchRoles = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3005/addSalaryDetails/getRoles/${roles}`);
  //     const data = await response.json();

  //     if (response.ok) {
  //       setRoles(data.roles || []);
  //     } else {
  //       setError('Failed to fetch roles: ' + (data.message || 'Unknown error'));
  //     }
  //   } catch (error) {
  //     console.error('Error fetching roles:', error);
  //     setError('Error fetching roles: ' + error.message);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3005/addSalaryDetails/getRoles/${selectedRole}`);
      const data = await response.json();

      if (response.ok) {
        // Update the salary details state with the fetched data
        setSalaryDetails(data || {});
        
        // console.log('Salary Details added Successfully');        
      } else {
        setError('Failed to fetch salary details: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error fetching salary details:', error);
      setError('Error fetching salary details: ' + error.message);
    }
  };

  const handleButtonClick = async () => {
    await fetchData();
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3005/addSalaryDetails/addSalaryDetails/${selectedRole}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          basic: salaryDetails.basic,
          emDailyRate: salaryDetails.emDailyRate,
          teaLeavesSalary: salaryDetails.teaLeavesSalary,
          bonusPercentage: salaryDetails.bonusPercentage,
          overtimeSalary: salaryDetails.overtimeSalary,
        }),
        
      });

      
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Salary details updated successfully:', data); // Log data to the console
        setResult(data.message);
        alert("Salary updated Successfully");
        navigate('/salary')

      } else {
        setError('Error updating salary details: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error updating salary details:', error);
      setError('Error updating salary details: ' + error.message);
    }
  };
  
  return (
    <div className="w-full">
      <div className="bg-gray-100 p-4 flex justify-center items-center">
        <div>
        </div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="bg-white border rounded-md px-4 py-2"
          >
            <option value="" >
              Select Role
            </option>
            <option value="manager" >
              Manager
            </option>
            <option value="supervisor" >
             Supervisor
            </option>
            <option value="employee" >
              Employee
            </option>
            <option value="tea plucker" >
              Tea Plucker
            </option>
            
          </select>
          <button type="button" onClick={handleButtonClick} className="bg-blue-500 text-white px-4 py-2">
            Show Details
          </button>
      
        <form className="bg-white p-4 shadow-md rounded-md w-1/2 m-5">
          <h1 className="text-2xl mb-4 text-green-400 text-center">Update Salary Details</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Role</label>
            <input
              type="text"
              name="role"
              value={selectedRole}
              className="w-full px-3 py-2 border rounded-md"
              readOnly
            />
          </div>

        
          {selectedRole === 'manager' && (
            <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Basic Salary</label>
            <input
              type="number"
              name="basic"
              value={salaryDetails.basic || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, basic: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

              <label className="block text-gray-700 text-md font-bold mb-2">OT Salary per Hour</label>
              <input
                type="number"
                name="overtimeSalary"
                value={salaryDetails.overtimeSalary || ''}
                onChange={(e) => setSalaryDetails({ ...salaryDetails, overtimeSalary: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />

          <label className="block text-gray-700 text-md font-bold mb-2">Bonus percentage</label>
            <input
              type="number"
              name="bonusPercentage"
              value={salaryDetails.bonusPercentage || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, bonusPercentage: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

            </div>
          )}

          {selectedRole === 'supervisor' && (
            <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Basic Salary</label>
            <input
              type="number"
              name="basic"
              value={salaryDetails.basic || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, basic: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

              <label className="block text-gray-700 text-md font-bold mb-2">OT Salary per Hour</label>
              <input
                type="number"
                name="overtimeSalary"
                value={salaryDetails.overtimeSalary || ''}
                onChange={(e) => setSalaryDetails({ ...salaryDetails, overtimeSalary: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              />

          <label className="block text-gray-700 text-md font-bold mb-2">Bonus percentage</label>
            <input
              type="number"
              name="bonusPercentage"
              value={salaryDetails.bonusPercentage || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, bonusPercentage: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

            </div>
          )}

          {selectedRole === 'employee' && (
            <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Daily Salary</label>
            <input
              type="number"
              name="emDailyRate"
              value={salaryDetails.emDailyRate || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, emDailyRate: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

          <label className="block text-gray-700 text-md font-bold mb-2">Bonus percentage</label>
            <input
              type="number"
              name="bonusPercentage"
              value={salaryDetails.bonusPercentage || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, bonusPercentage: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

            </div>
          )}

          {selectedRole === 'tea plucker' && (
            <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Tea weight Salary</label>
            <input
              type="number"
              name="teaLeavesSalary"
              value={salaryDetails.teaLeavesSalary || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, teaLeavesSalary: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

          <label className="block text-gray-700 text-md font-bold mb-2">Bonus percentage</label>
            <input
              type="number"
              name="bonusPercentage"
              value={salaryDetails.bonusPercentage || ''}
              onChange={(e) => setSalaryDetails({ ...salaryDetails, bonusPercentage: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
            />

            </div>
          )}

          
        
          {/* Add other fields here */}
          <div className="flex justify-between">
            <button type="button" onClick={handleSubmit} className="bg-green-400 text-white px-4 py-2 rounded-md">
              Update Salary
            </button>
            <button
              type="button"
              onClick={() => navigate('/salary')}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSalaryDetails;
