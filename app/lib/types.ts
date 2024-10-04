export type Nav = {
  id: string;
  name: string;
  href: string;
  icon: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
  role: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  image_url: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type Skill = {
  id: string;
  name: string;
  level: number;
  userId: string;
};

export type Comment = {
  id: string;
  content: string;
  created_at: string;
  postId: string;
  userId: string;
};
