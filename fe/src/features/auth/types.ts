export type UserRole = "customer" | "admin";

export type UserStatus = "active" | "inactive" | "blocked";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  status?: UserStatus;
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
  data: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  };
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}