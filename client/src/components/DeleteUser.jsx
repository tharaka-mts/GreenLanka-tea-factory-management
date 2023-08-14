import React from 'react';
import axios from 'axios';

const DeleteUser = async (id, onDelete) => {
  try {
    await axios.delete(`/api/users/${id}`);
    onDelete();
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export default DeleteUser;