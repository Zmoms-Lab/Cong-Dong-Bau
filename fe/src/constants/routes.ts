export const ROUTES = {
  HOME: "/",

  LOGIN: "/login",

  ACTIVATE: "/activate",

  DASHBOARD: "/dashboard",

  CARDS: "/cards",

  CARD_DETAIL: (slug: string) =>
    `/cards/${slug}`,

  PROFILE: "/profile",

  CHANGE_PASSWORD: "/change-password",
};