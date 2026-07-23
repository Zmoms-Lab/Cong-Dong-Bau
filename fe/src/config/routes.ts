export const ROUTES = {
  HOME: "/",

  CARDS: "/cards",

  CARD_DETAIL: (slug: string) =>
    `/cards/${slug}`,
};