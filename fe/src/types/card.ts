import { Video } from "./video";


export interface Card {
  _id: string;

  title: string;

  slug: string;

  description: string;

  thumbnail: string;

  videos: Video[];

  category: string;

  order: number;

  status: "active" | "inactive";

  isFeatured: boolean;

  createdAt: string;

  updatedAt: string;
}