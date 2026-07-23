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

  status: "active" | "inactive";

  order: number;

  isFeatured: boolean;

  createdAt?: string;

  updatedAt?: string;
}