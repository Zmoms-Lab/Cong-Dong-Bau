export const ROUTES = {
  HOME: "/",

  LOGIN: "/login",

  ACTIVATE: "/activate",

  CARDS: "/cards",

  CARD_DETAIL: (slug: string) =>
    `/cards/${slug}`,
};