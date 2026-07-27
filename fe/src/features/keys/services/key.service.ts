import axiosClient from "@/lib/axios";

import {
  ActivateKeyPayload,
  ActivateKeyResponse,
} from "../types";


// ACTIVATE KEY
export const activateKey = async (
  data: ActivateKeyPayload,
): Promise<ActivateKeyResponse> => {

  const response =
    await axiosClient.post<ActivateKeyResponse>(
      "/keys/activate",
      data,
    );

  return response.data;
};