import axiosClient from "@/lib/axios";

import { Card } from "@/types/card";
import { ApiResponse } from "@/types/api";


// CREATE CARD
export const createCard = async (
  data: Partial<Card>
): Promise<ApiResponse<Card>> => {
  const response = await axiosClient.post<ApiResponse<Card>>(
    "/cards",
    data
  );

  return response.data;
};


// GET ALL CARD
export const getAllCards = async (): Promise<ApiResponse<Card[]>> => {
  const response = await axiosClient.get<ApiResponse<Card[]>>(
    "/cards"
  );

  return response.data;
};


// GET CARD DETAIL
export const getCardDetail = async (
  slug: string
): Promise<ApiResponse<Card>> => {
  const response = await axiosClient.get<ApiResponse<Card>>(
    `/cards/${slug}`
  );

  return response.data;
};


// ADD VIDEO TO CARD
export const addVideoToCard = async (
  slug: string,
  data: {
    videoId: string;
  }
): Promise<ApiResponse<Card>> => {
  const response = await axiosClient.post<ApiResponse<Card>>(
    `/cards/${slug}/videos`,
    data
  );

  return response.data;
};