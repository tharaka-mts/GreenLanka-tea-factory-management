import axios from 'axios';

export async function getUserDetails(userId) {
  try {
    const response = await axios.get(`http://localhost:3005/get/user/${userId}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('User details fetch error:', error);
    return null;
  }
}



