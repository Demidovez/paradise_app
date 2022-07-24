export interface IArticle {}

export interface IAction {
  type: string;
  payload: any | null;
}

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  parent_name: string;
  email: string;
  roles: string[];
  avatar_color: string;
  image: string;
}

export interface IComment {
  id: number;
  article: string;
  date: Date;
  text: string;
  user: IUser;
}

export interface IMaterialCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
}

export interface IMaterial {
  id: string;
  title: string;
  date: Date;
  desc: string;
  image: string;
  users_liked_ids: string[];
  comments_ids: string[];
}
