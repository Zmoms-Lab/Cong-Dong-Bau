import axios from "axios";


const axiosClient = axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const apiRequest = async <T>(
  request: Promise<{ data: T }>
): Promise<T> => {
  const response = await request;

  return response.data;
};


export default axiosClient;