import axios from 'axios';

const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: 'http://localhost:9000',
});

apiClient.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export const fetchUserData = async (token: string) => {
  const response = await apiClient.get('/fetch-user-data', {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const updateUserData = async (token: string, data: Object) => {
  const response = await apiClient.post('/update-user-data', {
    headers: {
      Authorization: token,
    },
    data: JSON.stringify(data)
  });
  return response.data;
};
