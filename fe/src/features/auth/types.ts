export type UserRole =
  | "customer"
  | "admin";


export type UserStatus =
  | "active"
  | "inactive"
  | "blocked";


export interface User {

  id: string;

  name: string;

  email: string;

  role: UserRole;

  phone?: string;

  avatar?: string;

  status?: UserStatus;

  points?: number;

  lastActiveAt?: string | null;

  createdAt?: string;

  updatedAt?: string;
}



export interface RegisterPayload {

  key: string;

  name: string;

  email: string;

  password: string;

  phone?: string;

}



export interface LoginPayload {

  email: string;

  password: string;

}



export interface RegisterResponse {

  success: boolean;

  message?: string;

  data: {

    id: string;

    name: string;

    email: string;

    role: UserRole;

    needActivateCard: boolean;

    keyId: string;

  };

}



export interface LoginResponse {

  success: boolean;

  accessToken: string;

  user: User;

}



export interface RefreshResponse {

  success: boolean;

  accessToken: string;

}

export interface MeResponse {

  success: boolean;

  user: User;

}