import axiosClient from "@/lib/axios";

import { Video } from "../types";
import { ApiResponse } from "@/types/api";


export const getAllVideos = async () => {
  const response =
    await axiosClient.get<ApiResponse<Video[]>>(
      "/videos"
    );

  return response.data;
};


export const getVideoDetail = async (
  slug:string
) => {

  const response =
    await axiosClient.get<ApiResponse<Video>>(
      `/videos/${slug}`
    );

  return response.data;
};


export const createVideo = async (
  data: Partial<Video>
) => {

  const response =
    await axiosClient.post<ApiResponse<Video>>(
      "/videos",
      data
    );

  return response.data;
};


export const updateVideo = async (
  id:string,
  data:Partial<Video>
) => {

  const response =
    await axiosClient.put<ApiResponse<Video>>(
      `/videos/${id}`,
      data
    );

  return response.data;
};


export const deleteVideo = async (
  id:string
) => {

  const response =
    await axiosClient.delete<ApiResponse<null>>(
      `/videos/${id}`
    );

  return response.data;
};


export const addVideoToCard = async (
  data:{
    videoId:string;
    cardId:string;
  }
) => {

  const response =
    await axiosClient.post<ApiResponse<Video>>(
      "/videos/add-to-card",
      data
    );

  return response.data;
};


export const removeVideoFromCard = async (
  videoId:string
) => {

  const response =
    await axiosClient.post<ApiResponse<null>>(
      "/videos/remove-from-card",
      {
        videoId
      }
    );

  return response.data;
};