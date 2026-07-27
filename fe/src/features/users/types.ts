import { Card } from "@/features/cards/types";


export interface UserProfile {
  id: string;

  name: string;

  email: string;

  role: "customer" | "admin";

  phone?: string;

  avatar?: string;

  status?: 
    | "active"
    | "inactive"
    | "blocked";

  cards?: Card[];

  registrationKeys?: RegistrationKey[];

  points?: number;

  lastActiveAt?: string;

  createdAt?: string;

  updatedAt?: string;
}


export interface UpdateProfilePayload {
  name: string;

  phone?: string;

  avatar?: string;
}


export interface ChangePasswordPayload {
  oldPassword: string;

  newPassword: string;
}


export interface RegistrationKey {
  _id: string;

  key: string;

  status:
    | "unused"
    | "used"
    | "expired";

  card?: string;

  usedAt?: string;

  expiredAt?: string;

  createdAt: string;
}