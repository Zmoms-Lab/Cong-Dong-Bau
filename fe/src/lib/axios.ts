import axios from "axios";

import {
  useAuthStore,
} from "@/store/auth.store";


const axiosClient = axios.create({

  baseURL:
    process.env.NEXT_PUBLIC_API_URL,

  timeout: 10000,

  headers: {
    "Content-Type":
      "application/json",
  },

  withCredentials: true,

});



export const axiosRefresh = axios.create({

  baseURL:
    process.env.NEXT_PUBLIC_API_URL,

  timeout: 10000,

  withCredentials: true,

});



axiosClient.interceptors.request.use(

  (config) => {

    const token =
      useAuthStore
        .getState()
        .accessToken;


    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }


    return config;

  },

);



axiosClient.interceptors.response.use(

  (response) => response,


  async (error) => {


    const originalRequest =
      error.config;


    if (
      !originalRequest ||
      error.response?.status !== 401 ||
      originalRequest._retry
    ) {

      return Promise.reject(error);

    }


    if (
      originalRequest.url === "/auth/refresh"
    ) {

      return Promise.reject(error);

    }


    originalRequest._retry = true;


    try {


      const response =
        await axiosRefresh.post(
          "/auth/refresh",
        );


      const accessToken =
        response.data.accessToken;


      useAuthStore
        .getState()
        .setAccessToken(
          accessToken,
        );


      originalRequest.headers.Authorization =
        `Bearer ${accessToken}`;


      return axiosClient(
        originalRequest,
      );


    } catch (refreshError) {


      useAuthStore
        .getState()
        .clearAuth();


      return Promise.reject(
        refreshError,
      );

    }


  },

);



export const apiRequest = async <T>(

  request: Promise<{
    data: T
  }>

): Promise<T> => {


  const response =
    await request;


  return response.data;

};



export default axiosClient;