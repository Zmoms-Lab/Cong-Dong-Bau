import axios from "axios";

import {
  useAuthStore,
} from "@/store/auth.store";


const axiosClient = axios.create({

  baseURL:
    process.env.NEXT_PUBLIC_API_URL,

  timeout:10000,

  headers:{
    "Content-Type":
      "application/json",
  },

  withCredentials:true,

});


axiosClient.interceptors.request.use(
  (config) => {

    const token =
      useAuthStore.getState()
        .accessToken;


    if(token){
      config.headers.Authorization =
        `Bearer ${token}`;
    }


    return config;

  }
);


export const apiRequest = async <T>(
  request: Promise<{data:T}>
): Promise<T> => {

  const response =
    await request;

  return response.data;

};


export default axiosClient;