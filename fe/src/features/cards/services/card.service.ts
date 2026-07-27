import axiosClient from "@/lib/axios";

import { Card } from "../types";
import { ApiResponse } from "@/types/api";


export const createCard = async (
  data: Partial<Card>,
): Promise<ApiResponse<Card>> => {
  const response =
    await axiosClient.post<ApiResponse<Card>>(
      "/cards",
      data,
    );

  return response.data;
};


export const updateCard = async (
  id: string,
  data: Partial<Card>,
): Promise<ApiResponse<Card>> => {
  const response =
    await axiosClient.patch<ApiResponse<Card>>(
      `/cards/${id}`,
      data,
    );

  return response.data;
};


export const getAllCards = async (): Promise<ApiResponse<Card[]>> => {
  const response =
    await axiosClient.get<ApiResponse<Card[]>>(
      "/cards",
    );

  return response.data;
};


export const getCardDetail = async (
  slug: string,
): Promise<ApiResponse<Card>> => {
  const response =
    await axiosClient.get<ApiResponse<Card>>(
      `/cards/${slug}`,
    );

  return response.data;
};


export const addVideoToCard = async (
  slug: string,
  data: {
    videoId: string;
  },
): Promise<ApiResponse<Card>> => {
  const response =
    await axiosClient.post<ApiResponse<Card>>(
      `/cards/${slug}/videos`,
      data,
    );

  return response.data;
};