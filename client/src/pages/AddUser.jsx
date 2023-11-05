import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  const [nic, setNic] = useState('');
  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [result, setResult] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.postForm('http://localhost:3005/auth/register', {
        firstname: firstName,
        lastname: lastName,
        username: username,
        image: image,
        nic: nic,
        type: type,
        email: email,
        address: address,
        mobile: mobile,
        password: password,
      }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data.message);
      setResult(response.data.message);
      navigate(0)
      alert("User Added Successfully");
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='w-full'>
    <div className="bg-gray-100 p-4 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md w-1/2">
      <h1 className="text-2xl mb-4 text-green-400 text-center">Add User</h1>
      <h2 className="text-xl mb-4">{result}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Userame</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">NIC</label>
          <input
            type="text"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">User Type</label>
           <select
           type="text"
           placeholder="User Type"
           value={type}
           onChange={(e) => setType(e.target.value)}
           className="w-full px-3 py-2 border rounded-md"
           required
                >
                  <option value="">Select Type</option>
                  <option value="Manager">Manager</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Employee">Employee</option>
                  <option value="Tea Plucker">Tea Plucker</option>
                </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Mobile</label>
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          
        </div>
        <div className="mb-4">
            <input
              type="checkbox"
              value={showPassword}
              id="showPassword"
              onClick={handleShowPassword}
            />
            <label
              htmlFor="showPassword"
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
            >
              Show Password
            </label>
          </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-green-400 text-white py-2 px-4 rounded-md">
            Register
          </button>
          <button type="button" className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={() => navigate('/manage')}>
            Cancel
          </button>
        </div>
      </form>
    </div>        
    </div>
  );
}

export default AddUser;



