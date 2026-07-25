import axiosClient, {
  apiRequest,
} from "@/lib/axios";

import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
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
};