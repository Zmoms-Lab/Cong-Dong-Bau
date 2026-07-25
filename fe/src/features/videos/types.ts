export interface Video {
  _id: string;

  title: string;

  slug: string;

  description: string;

  thumbnail: string;

  videoUrl: string;

  category: string;

  brand: string;

  duration: number;

  viewCount: number;

  order: number;

  status: "draft" | "active" | "hidden";

  isFeatured: boolean;

  createdAt: string;

  updatedAt: string;
}