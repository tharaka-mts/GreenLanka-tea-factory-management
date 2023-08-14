import React, { useState } from 'react';
import axios from 'axios';

const EditUser = ({ user, onUpdate, onCancel }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/users/${user.id}`, editedUser);
      onUpdate();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="border rounded py-2 px-3"
            placeholder="Name"
          />
          <input
            type="text"
            name="age"
            value={editedUser.age}
            onChange={handleInputChange}
            className="border rounded py-2 px-3"
            placeholder="Age"
          />
          <input
            type="text"
            name="address"
            value={editedUser.address}
            onChange={handleInputChange}
            className="border rounded py-2 px-3"
            placeholder="Address"
          />
          <input
            type="text"
            name="number"
            value={editedUser.number}
            onChange={handleInputChange}
            className="border rounded py-2 px-3"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="position"
            value={editedUser.position}
            onChange={handleInputChange}
            className="border rounded py-2 px-3"
            placeholder="Position"
          />
          {/* Add more input fields for other user properties */}
        </div>
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;