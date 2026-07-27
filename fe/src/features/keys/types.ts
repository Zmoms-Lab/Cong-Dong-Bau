export interface ActivateKeyPayload {
  key: string;

  cardId: string;
}


export interface ActivateKeyResponse {
  success: boolean;

  message: string;

  data: {
    card: {
      _id: string;

      title: string;

      slug: string;
    };
  };
}


export interface RegistrationKey {
  _id: string;

  key: string;

  status:
    | "unused"
    | "used"
    | "expired";

  card?: string;

  usedBy?: string;

  usedAt?: string;

  expiredAt?: string;

  createdAt: string;

  updatedAt: string;
}