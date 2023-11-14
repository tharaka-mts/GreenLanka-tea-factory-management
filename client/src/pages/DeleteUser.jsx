import React from 'react';
import axios from 'axios';

const DeleteUser = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');

    if (confirmed) {
      try {
        await axios.delete(`http://localhost:3005/users/delete/${userId}`);
        onDelete(userId); // Notify the parent component to remove the deleted user from the list
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteUser;
