export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}


export interface Card {
  id: string;

  title: string;

  slug: string;

  image: string;

  description: string;

  benefits: string[];

  videos: Video[];
}