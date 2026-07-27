import { Video } from "@/features/videos/types";


export interface Card {
  _id: string;

  title: string;

  slug: string;

  description: string;

  thumbnail: string;

  videos: Video[];

  category: string;

  order: number;

  status:
    | "draft"
    | "active"
    | "hidden";

  isFeatured: boolean;

  createdAt: string;

  updatedAt: string;
}