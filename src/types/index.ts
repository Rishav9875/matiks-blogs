export type Blog = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  slug: string;
  cover: {
    url: string;
  };
  author: {
    name: string;
    matiks_user_name: string;
  };
};

export type BlogDetails = Blog & {
  sections: Section[];
  articles: Blog[];
};

export type BlogDetailsProps = {
  blog: BlogDetails;
};

export type Section = {
  title: string;
  content: string;
  shouldShowDownloadButton: boolean;
  image: {
    url: string;
  };
}


export type BlogCardProps = {
  blog: Blog;
  blogContainerStyle?: string;
};

export type HeroSectionProps = {
  blog: Blog;
};

export interface ApiError extends Error {
  status?: number;
}
