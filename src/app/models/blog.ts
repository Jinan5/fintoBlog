export type Blog = {
  posts: Post[];
  postCategories: PostCategories[];
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  date: number;
  category: string;
};

export type PostCategories = {
  id: string;
  title: string;
};
