import axiosClient from "@/lib/axios";

import { ApiResponse } from "@/types/api";

import {
  UserProfile,
  UpdateProfilePayload,
  ChangePasswordPayload,
  RegistrationKey,
} from "../types";

import { Card } from "@/features/cards/types";


export const getProfile = async (): Promise<
  ApiResponse<UserProfile>
> => {
  const response =
    await axiosClient.get<ApiResponse<UserProfile>>(
      "/users/profile",
    );

  return response.data;
};


export const updateProfile = async (
  data: UpdateProfilePayload,
): Promise<ApiResponse<UserProfile>> => {
  const response =
    await axiosClient.put<ApiResponse<UserProfile>>(
      "/users/profile",
      data,
    );

  return response.data;
};


export const changePassword = async (
  data: ChangePasswordPayload,
): Promise<ApiResponse<null>> => {
  const response =
    await axiosClient.put<ApiResponse<null>>(
      "/users/change-password",
      data,
    );

  return response.data;
};


export const getMyCards = async (): Promise<
  ApiResponse<Card[]>
> => {
  const response =
    await axiosClient.get<ApiResponse<Card[]>>(
      "/users/cards",
    );

  return response.data;
};


export const getMyKeys = async (): Promise<
  ApiResponse<RegistrationKey[]>
> => {
  const response =
    await axiosClient.get<ApiResponse<RegistrationKey[]>>(
      "/users/keys",
    );

  return response.data;
};