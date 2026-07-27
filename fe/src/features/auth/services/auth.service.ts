import axiosClient, {
  axiosRefresh,
  apiRequest,
} from "@/lib/axios";


import {
  LoginPayload,
  LoginResponse,
  RefreshResponse,
  RegisterPayload,
  RegisterResponse,
  MeResponse,
} from "../types";


export const authService = {


  register: (
    payload: RegisterPayload,
  ) =>
    apiRequest<RegisterResponse>(
      axiosClient.post(
        "/auth/register",
        payload,
      ),
    ),



  login: (
    payload: LoginPayload,
  ) =>
    apiRequest<LoginResponse>(
      axiosClient.post(
        "/auth/login",
        payload,
      ),
    ),



  refresh: () =>
    apiRequest<RefreshResponse>(
      axiosRefresh.post(
        "/auth/refresh",
      ),
    ),



  me: () =>
    apiRequest<MeResponse>(
      axiosClient.get(
        "/auth/me",
      ),
    ),


};