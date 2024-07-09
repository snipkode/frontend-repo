import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchUserData = async (token: string) => {
  const response = await apiClient.get('/fetch-user-data', {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const updateUserData = async (token: string) => {
  const response = await apiClient.post('/update-user-data', {}, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};
